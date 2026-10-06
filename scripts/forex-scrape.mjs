/**
 * Rate Radar - Dedicated Foreign Exchange Rates Scraper
 *
 * Real live fetch from ExchangeRate-API (https://open.er-api.com/v6/latest/USD).
 * Generates data/registries/forex-rates-register.json.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { forexRatesCatalog } from './data/forex-rates-registry.mjs';
import { writeCatalogFile } from './data/_catalog-writer.mjs';
import { startFileLogging, stopFileLogging } from './logger.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const REGISTRIES_DIR = path.resolve(__dirname, '../data/registries');
const FOREX_CATALOG_PATH = path.resolve(__dirname, 'data/forex-rates-registry.mjs');
const FOREX_CATALOG_HEADER = `/**\n * Comprehensive Foreign Exchange Rates vs Indian Rupee (INR) Registry\n * Live central bank benchmark reference rates across 18 major international currencies against the Indian Rupee.\n * Auto-refreshed from the last successful live scrape; used as fallback when the live feed is unreachable.\n */`;

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
 * LIVE SCRAPE FOREIGN EXCHANGE RATES VS INR
 */
export async function runForexScraper() {
  console.log('==========================================================');
  console.log(' RATE RADAR - DEDICATED FOREIGN EXCHANGE LIVE SCRAPER     ');
  console.log(` Run Timestamp: ${TIMESTAMP_DISPLAY}`);
  console.log('==========================================================\n');

  const sourceUrl = 'https://open.er-api.com/v6/latest/USD';
  console.log(`-> Scraping Foreign Exchange Rates vs INR (${sourceUrl}) ...`);

  let inrRate = 86.85;
  let fxRates = {};
  let scrapeStatus = 'requires_manual_update';

  try {
    const res = await fetch(sourceUrl, { signal: AbortSignal.timeout(8000) });
    if (res.ok) {
      const data = await res.json();
      if (data && data.rates && data.rates.INR) {
        inrRate = data.rates.INR;
        fxRates = data.rates;
        scrapeStatus = 'verified';
      }
    }
  } catch (err) {
    console.error('Forex live fetch error:', err.message);
  }

  console.log(scrapeStatus === 'verified' ? '  ✓ Live data fetched successfully' : '  ! Live fetch failed — using fallback catalog');

  const catalogRecords = forexRatesCatalog.map(item => {
    const code = item.baseCode || item.currencyCode;
    let computedRate = item.rate || item.currentRate || 1.0;
    if (fxRates && Object.keys(fxRates).length > 0 && code) {
      if (code === 'USD') {
        computedRate = inrRate;
      } else if (fxRates[code]) {
        computedRate = inrRate / fxRates[code];
      }
    }

    const numRate = typeof computedRate === 'number' && !isNaN(computedRate) ? computedRate : (item.rate || 1.0);

    return {
      ...item,
      rate: parseFloat(numRate.toFixed(4)),
      currentRate: parseFloat(numRate.toFixed(4)),
      rateDisplay: `₹${numRate.toFixed(2)}`,
      lastUpdated: TIMESTAMP_ISO,
      lastUpdatedDisplay: TIMESTAMP_DISPLAY,
      status: scrapeStatus
    };
  });

  saveRegistry('forex-rates-register.json', catalogRecords);
  console.log(`\n✓ Saved ${catalogRecords.length} currency pairs to data/registries/forex-rates-register.json`);

  if (scrapeStatus === 'verified') {
    writeCatalogFile(FOREX_CATALOG_PATH, FOREX_CATALOG_HEADER, { forexRatesCatalog: catalogRecords });
    console.log('✓ Refreshed fallback catalog at scripts/data/forex-rates-registry.mjs');
  }

  return { rates: catalogRecords };
}

// Allow direct CLI execution
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  startFileLogging('Foreign Exchange Scraper');
  runForexScraper().then(() => {
    console.log('✓ Forex live scrape finished successfully.');
    stopFileLogging();
    process.exit(0);
  }).catch(err => {
    console.error('Error during forex scrape:', err);
    stopFileLogging();
    process.exit(1);
  });
}
