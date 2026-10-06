/**
 * Rate Radar - Dedicated Equity Market Indices Scraper
 *
 * Live fetch from NSE India (https://www.nseindia.com/api/allIndices) with
 * a verified fallback catalog when the live feed is blocked.
 * Generates data/registries/market-indices-register.json.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { marketIndicesCatalog } from './data/market-indices-registry.mjs';
import { writeCatalogFile } from './data/_catalog-writer.mjs';
import { startFileLogging, stopFileLogging } from './logger.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const REGISTRIES_DIR = path.resolve(__dirname, '../data/registries');
const MARKET_CATALOG_PATH = path.resolve(__dirname, 'data/market-indices-registry.mjs');
const MARKET_CATALOG_HEADER = `/**\n * Rate Radar - Equity Benchmarks & Sector Indices Catalog\n * Auto-refreshed from the last successful live scrape; used as fallback when the live NSE India index feed is unreachable.\n */`;

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
 * LIVE SCRAPE EQUITY BENCHMARKS & SECTOR INDICES
 */
export async function runMarketScraper() {
  console.log('==========================================================');
  console.log(' RATE RADAR - DEDICATED EQUITY MARKET INDICES SCRAPER     ');
  console.log(` Run Timestamp: ${TIMESTAMP_DISPLAY}`);
  console.log('==========================================================\n');

  const sourceUrl = 'https://www.nseindia.com/api/allIndices';
  console.log(`-> Scraping Equity Benchmarks & Sector Indices (${sourceUrl}) ...`);

  let indices = marketIndicesCatalog;
  let liveFetchSucceeded = false;

  try {
    const res = await fetch(sourceUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept': 'application/json'
      },
      signal: AbortSignal.timeout(6000)
    });
    if (res.ok) {
      const data = await res.json();
      if (data && data.data && Array.isArray(data.data)) {
        indices = data.data.slice(0, 9).map(d => {
          const changeVal = d.variation ?? d.change;
          const pChangeVal = d.percentChange ?? d.pChange;
          return {
            index: d.indexSymbol || d.index,
            last: d.last,
            change: typeof changeVal === 'number' ? (changeVal >= 0 ? '+' : '') + changeVal.toFixed(2) : '—',
            pChange: typeof pChangeVal === 'number' ? (pChangeVal >= 0 ? '+' : '') + pChangeVal.toFixed(2) + '%' : '—',
            pe: d.pe || '—',
            pb: d.pb || '—',
            status: 'verified'
          };
        });
        liveFetchSucceeded = true;
      }
    }
  } catch (e) {
    console.log('NSE Indices direct fetch note:', e.message);
  }

  console.log(liveFetchSucceeded ? '  ✓ Live data fetched successfully' : '  ! Live fetch failed — using fallback catalog');

  const indexRecords = indices.map(idx => ({
    ...idx,
    lastUpdated: TIMESTAMP_ISO,
    lastUpdatedDisplay: TIMESTAMP_DISPLAY
  }));

  saveRegistry('market-indices-register.json', indexRecords);
  console.log(`\n✓ Saved ${indexRecords.length} indices to data/registries/market-indices-register.json`);

  if (liveFetchSucceeded) {
    writeCatalogFile(MARKET_CATALOG_PATH, MARKET_CATALOG_HEADER, { marketIndicesCatalog: indices });
    console.log('✓ Refreshed fallback catalog at scripts/data/market-indices-registry.mjs');
  }

  return { indices: indexRecords };
}

// Allow direct CLI execution
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  startFileLogging('Equity Market Indices Scraper');
  runMarketScraper().then(() => {
    console.log('✓ Market indices scrape finished successfully.');
    stopFileLogging();
    process.exit(0);
  }).catch(err => {
    console.error('Error during market indices scrape:', err);
    stopFileLogging();
    process.exit(1);
  });
}
