/**
 * Rate Radar - Dedicated RBI Monetary Policy Rates Scraper
 *
 * Live fetch from https://www.rbi.org.in/ with a verified fallback
 * catalog when the live homepage rates table can't be parsed.
 * Generates data/registries/rbi-rates-register.json.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as cheerio from 'cheerio';
import { rbiRatesCatalog } from './data/rbi-rates-registry.mjs';
import { writeCatalogFile } from './data/_catalog-writer.mjs';
import { startFileLogging, stopFileLogging } from './logger.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const REGISTRIES_DIR = path.resolve(__dirname, '../data/registries');
const RBI_CATALOG_PATH = path.resolve(__dirname, 'data/rbi-rates-registry.mjs');
const RBI_CATALOG_HEADER = `/**\n * Comprehensive RBI Monetary Policy Benchmark Rates & Reserve Ratios Registry\n * Real official benchmark rates and statutory reserve requirements governed by the Reserve Bank of India.\n * Auto-refreshed from the last successful live scrape; used as fallback when the live feed is unreachable.\n */`;

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
 * LIVE SCRAPE RBI POLICY BENCHMARK RATES & RESERVE RATIOS
 */
export async function runRbiScraper() {
  console.log('==========================================================');
  console.log(' RATE RADAR - DEDICATED RBI MONETARY POLICY RATES SCRAPER ');
  console.log(` Run Timestamp: ${TIMESTAMP_DISPLAY}`);
  console.log('==========================================================\n');

  const sourceUrl = 'https://www.rbi.org.in/';
  console.log(`-> Scraping RBI Policy Benchmark Rates (${sourceUrl}) ...`);

  let rates = [];

  try {
    const res = await fetch(sourceUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
      },
      signal: AbortSignal.timeout(8000)
    });

    if (res.ok) {
      const rawHtml = await res.text();
      const $ = cheerio.load(rawHtml);

      $('table').each((i, tbl) => {
        const text = $(tbl).text();
        if (text.includes('Policy Repo Rate') || text.includes('Repo Rate') || text.includes('Standing Deposit Facility')) {
          $(tbl).find('tr').each((rIdx, row) => {
            const cells = $(row).find('td, th').map((cIdx, c) => $(c).text().trim()).get();
            if (cells.length >= 2) {
              const label = cells[0].replace(/\s+/g, ' ');
              const val = cells[1].replace(/\s+/g, ' ');
              if (val.includes('%')) {
                const numVal = parseFloat(val.replace(/[^0-9.]/g, ''));
                if (!isNaN(numVal) && numVal > 0 && numVal < 25) {
                  rates.push({
                    name: label,
                    rate: numVal,
                    rateDisplay: `${numVal.toFixed(2)}%`
                  });
                }
              }
            }
          });
        }
      });
    }
  } catch (err) {
    console.error('RBI live scrape failed, using verified registry catalog:', err.message);
  }

  console.log(rates.length > 0 ? `  ✓ Live data fetched successfully (${rates.length} rates parsed)` : '  ! Live fetch failed — using fallback catalog');

  // Merge with verified RBI master catalog
  const catalogRecords = rbiRatesCatalog.map(item => {
    const liveMatch = rates.find(r => r.name.toLowerCase().includes(item.name.toLowerCase()) || item.name.toLowerCase().includes(r.name.toLowerCase()));
    return {
      name: item.name,
      code: item.code,
      category: item.category,
      categoryCode: item.categoryCode,
      currentRate: liveMatch ? liveMatch.rate : item.currentRate,
      rateDisplay: liveMatch ? liveMatch.rateDisplay : item.rateDisplay,
      previousRate: item.previousRate,
      changeDisplay: item.changeDisplay,
      effectiveDate: item.effectiveDate,
      governingAct: item.governingAct,
      tenor: item.tenor,
      description: item.description,
      impactOnBorrower: item.impactOnBorrower,
      officialUrl: item.officialUrl,
      status: liveMatch ? 'verified' : item.status,
      lastUpdated: TIMESTAMP_ISO,
      lastUpdatedDisplay: TIMESTAMP_DISPLAY
    };
  });

  saveRegistry('rbi-rates-register.json', catalogRecords);
  console.log(`✓ Saved ${catalogRecords.length} RBI rates to data/registries/rbi-rates-register.json`);

  if (rates.length > 0) {
    writeCatalogFile(RBI_CATALOG_PATH, RBI_CATALOG_HEADER, { rbiRatesCatalog: catalogRecords });
    console.log('✓ Refreshed fallback catalog at scripts/data/rbi-rates-registry.mjs');
  }

  return catalogRecords;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  startFileLogging('RBI Monetary Policy Rates Scraper');
  runRbiScraper().then(() => {
    stopFileLogging();
  }).catch(err => {
    console.error('Fatal ingestion error:', err);
    stopFileLogging();
    process.exit(1);
  });
}
