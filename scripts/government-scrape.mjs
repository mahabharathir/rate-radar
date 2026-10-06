/**
 * Rate Radar - Dedicated Government Small Savings Schemes Scraper
 *
 * Published by Ministry of Finance (DEA) via quarterly gazette notifications.
 * Generates data/registries/government-schemes-register.json.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { governmentSchemesCatalog } from './data/government-schemes-registry.mjs';
import { startFileLogging, stopFileLogging } from './logger.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const REGISTRIES_DIR = path.resolve(__dirname, '../data/registries');

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
 * AUDIT GOVERNMENT SMALL SAVINGS SCHEMES
 */
export async function runGovernmentScraper() {
  console.log('==========================================================');
  console.log(' RATE RADAR - DEDICATED GOVERNMENT SCHEMES SCRAPER        ');
  console.log(` Run Timestamp: ${TIMESTAMP_DISPLAY}`);
  console.log('==========================================================\n');

  console.log('-> Auditing Government Small Savings Schemes (https://dea.gov.in/) ...');
  console.log('  ! No live feed for this category — DEA publishes rates via quarterly gazette notification, using static catalog');

  const schemeRecords = governmentSchemesCatalog.map(s => ({
    ...s,
    lastUpdated: TIMESTAMP_ISO,
    lastUpdatedDisplay: TIMESTAMP_DISPLAY
  }));

  saveRegistry('government-schemes-register.json', schemeRecords);
  console.log(`\n✓ Saved ${schemeRecords.length} schemes to data/registries/government-schemes-register.json`);

  return { schemes: schemeRecords };
}

// Allow direct CLI execution
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  startFileLogging('Government Schemes Scraper');
  runGovernmentScraper().then(() => {
    console.log('✓ Government schemes scrape finished successfully.');
    stopFileLogging();
    process.exit(0);
  }).catch(err => {
    console.error('Error during government schemes scrape:', err);
    stopFileLogging();
    process.exit(1);
  });
}
