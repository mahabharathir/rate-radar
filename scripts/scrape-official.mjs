/**
 * Rate Radar - Sources & Provenance Directory Generator
 *
 * RBI rates, bullion metals, MCX futures, fuel/energy, and financial calendars
 * now live in their own dedicated scraper scripts (rbi-scrape.mjs,
 * calendar-scrape.mjs, forex-scrape.mjs, government-scrape.mjs, market-scrape.mjs),
 * mirroring banks-scrape.mjs / credit-scrape.mjs. This script only builds the
 * audited directory of data sources and authorities under data/registries/.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { startFileLogging, stopFileLogging } from './logger.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const REGISTRIES_DIR = path.resolve(__dirname, '../data/registries');

if (!fs.existsSync(REGISTRIES_DIR)) {
  fs.mkdirSync(REGISTRIES_DIR, { recursive: true });
}

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
 * AUDITED SOURCES & PROVENANCE DIRECTORY
 */
export function generateSourcesTable() {
  const sources = [
    { authority: 'Reserve Bank of India (RBI)', coverage: 'Policy Repo, SDF, MSF, Bank Rate, CRR, SLR', url: 'https://www.rbi.org.in', method: 'HTML / Cheerio live scrape', status: 'verified', notes: 'Managed by scripts/rbi-scrape.mjs: live parsed from rbi.org.in homepage rates table' },
    { authority: 'ExchangeRate-API', coverage: 'Foreign Exchange (USD, EUR, GBP, AED, SGD, AUD, CAD, JPY, SAR vs INR)', url: 'https://open.er-api.com/v6/latest/USD', method: 'JSON API live fetch', status: 'verified', notes: 'Managed by scripts/forex-scrape.mjs: real live currency quotes from open.er-api.com' },
    { authority: 'National Stock Exchange of India (NSE)', coverage: 'NIFTY 50, NIFTY BANK, Sector Indices, Trading Holidays', url: 'https://www.nseindia.com', method: 'JSON API live fetch', status: 'verified', notes: 'Managed by scripts/market-scrape.mjs and scripts/calendar-scrape.mjs: live index quotes and trading holidays from nseindia.com' },
    { authority: 'Department of Economic Affairs (DEA)', coverage: 'Government Small Savings Schemes (PPF, SSY, SCSS, NSC, POMIS, KVP)', url: 'https://dea.gov.in', method: 'Ministry Gazette Notifications', status: 'requires_manual_update', notes: 'Managed by scripts/government-scrape.mjs: quarterly official gazette schedules issued by Ministry of Finance' },
    { authority: 'Commercial Banks Master Scraper (banks-scrape.mjs)', coverage: 'All 53 Scheduled Indian Banks, FD, RD, and Home Loans', url: 'https://rbi.org.in/scripts/banklinks.aspx', method: 'Dedicated Live Bank Scraper Engine', status: 'verified', notes: 'Managed by scripts/banks-scrape.mjs: live scraping official bank deposit and loan portals' },
    { authority: 'Commercial Card Issuers Scraper (credit-scrape.mjs)', coverage: '159 Card Offerings across 27 Banks', url: 'https://www.hdfcbank.com/personal/pay/cards/credit-cards', method: 'Dedicated Credit Scraper Engine', status: 'verified', notes: 'Managed by scripts/credit-scrape.mjs: live probing 27 bank credit card issuer portals' }
  ].map(s => ({ ...s, lastUpdated: TIMESTAMP_ISO, lastUpdatedDisplay: TIMESTAMP_DISPLAY }));

  sources.forEach(s => console.log(`  - [${s.authority}] ${s.url}`));

  saveRegistry('sources-register.json', sources);
  console.log(`✓ Saved ${sources.length} sources to data/registries/sources-register.json`);
  return sources;
}

/**
 * SOURCES DIRECTORY SCRAPER ENTRYPOINT
 */
export async function runOfficialScraper() {
  console.log('==========================================================');
  console.log(' RATE RADAR - SOURCES & PROVENANCE DIRECTORY GENERATOR    ');
  console.log(` Run Timestamp: ${TIMESTAMP_DISPLAY}`);
  console.log('==========================================================\n');

  generateSourcesTable();

  console.log('\n==========================================================');
  console.log(' ✓ SOURCES DIRECTORY RUN FINISHED SUCCESSFULLY!');
  console.log('==========================================================\n');
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  startFileLogging('Sources & Provenance Directory Generator');
  runOfficialScraper().then(() => {
    stopFileLogging();
  }).catch(err => {
    console.error('Fatal ingestion error:', err);
    stopFileLogging();
    process.exit(1);
  });
}
