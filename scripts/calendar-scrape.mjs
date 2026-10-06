/**
 * Rate Radar - Dedicated Financial Calendar Scraper
 *
 * Live fetch of NSE trading holidays from https://www.nseindia.com, merged
 * with the RBI Monetary Policy Committee meeting schedule (static official
 * schedule, published in advance for the full fiscal year).
 * Generates data/registries/calendars-register.json.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { tradingHolidaysCatalog, mpcMeetingsCatalog } from './data/calendars-registry.mjs';
import { writeCatalogFile } from './data/_catalog-writer.mjs';
import { startFileLogging, stopFileLogging } from './logger.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const REGISTRIES_DIR = path.resolve(__dirname, '../data/registries');
const CALENDAR_CATALOG_PATH = path.resolve(__dirname, 'data/calendars-registry.mjs');
const CALENDAR_CATALOG_HEADER = `/**\n * Rate Radar - Financial Calendar Catalog\n * Auto-refreshed from the last successful live NSE holiday-master fetch; used as fallback when the feed is unreachable.\n * mpcMeetingsCatalog has no live source (RBI publishes the fiscal-year schedule in advance) and is kept static.\n */`;

if (!fs.existsSync(REGISTRIES_DIR)) fs.mkdirSync(REGISTRIES_DIR, { recursive: true });

const NOW = new Date();
const TIMESTAMP_ISO = NOW.toISOString();
const TIMESTAMP_DISPLAY = NOW.toLocaleDateString('en-IN', {
  day: 'numeric',
  month: 'short',
  year: 'numeric'
}) + ' ' + NOW.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true }) + ' IST';

function saveRegistry(filename, data) {
  const filePath = path.join(REGISTRIES_DIR, filename);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
}

/**
 * LIVE SCRAPE NSE TRADING HOLIDAYS + RBI MPC CALENDAR
 */
export async function runCalendarScraper() {
  console.log('==========================================================');
  console.log(' RATE RADAR - DEDICATED FINANCIAL CALENDAR SCRAPER        ');
  console.log(` Run Timestamp: ${TIMESTAMP_DISPLAY}`);
  console.log('==========================================================\n');

  const nseHolidayUrl = 'https://www.nseindia.com/api/holiday-master?type=trading';
  console.log(`-> Scraping Trading Holidays from NSE India (${nseHolidayUrl}) ...`);

  let tradingHolidays = [];
  let liveFetchSucceeded = false;

  try {
    const res = await fetch(nseHolidayUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
        'Accept': 'application/json, text/plain, */*',
        'Referer': 'https://www.nseindia.com/'
      },
      signal: AbortSignal.timeout(8000)
    });

    if (res.ok) {
      const data = await res.json();
      const rawList = data.CM || data.CBM || [];
      if (Array.isArray(rawList) && rawList.length > 0) {
        tradingHolidays = rawList.map(h => ({
          date: h.tradingDate,
          day: h.weekDay,
          occasion: h.description,
          exchange: 'NSE (Capital Market)',
          session: h.morning_session || 'Closed'
        }));
        liveFetchSucceeded = true;
      }
    }
  } catch (err) {
    console.error('NSE Holidays failed:', err.message);
  }

  console.log(liveFetchSucceeded ? '  ✓ Live data fetched successfully' : '  ! Live fetch failed — using fallback catalog');

  if (tradingHolidays.length === 0) {
    tradingHolidays = tradingHolidaysCatalog;
  }

  const mpcMeetings = mpcMeetingsCatalog;

  const calendarRegistry = {
    holidays: tradingHolidays,
    mpcMeetings,
    lastUpdated: TIMESTAMP_ISO,
    lastUpdatedDisplay: TIMESTAMP_DISPLAY
  };

  saveRegistry('calendars-register.json', calendarRegistry);
  console.log(`✓ Saved ${tradingHolidays.length} holidays & ${mpcMeetings.length} MPC meetings to data/registries/calendars-register.json`);

  if (liveFetchSucceeded) {
    writeCatalogFile(CALENDAR_CATALOG_PATH, CALENDAR_CATALOG_HEADER, {
      tradingHolidaysCatalog: tradingHolidays,
      mpcMeetingsCatalog
    });
    console.log('✓ Refreshed fallback catalog at scripts/data/calendars-registry.mjs');
  }

  return calendarRegistry;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  startFileLogging('Financial Calendar Scraper');
  runCalendarScraper().then(() => {
    stopFileLogging();
  }).catch(err => {
    console.error('Fatal ingestion error:', err);
    stopFileLogging();
    process.exit(1);
  });
}
