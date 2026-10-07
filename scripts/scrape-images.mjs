/**
 * Rate Radar - Combined Bank & Credit Card Images Scraper
 *
 * Thin orchestrator over the two standalone scrapers (scrape-bank-images.mjs,
 * scrape-card-images.mjs) so both can still be run together via one command.
 */

import { fileURLToPath } from 'node:url';
import { scrapeBankLogos } from './scrape-bank-images.mjs';
import { scrapeCreditCardImages } from './scrape-card-images.mjs';
import { startFileLogging, stopFileLogging } from './logger.mjs';

export { scrapeBankLogos, scrapeCreditCardImages };

/**
 * MASTER IMAGE INGESTION RUNNER
 */
export async function runImageScraper() {
  console.log('==========================================================');
  console.log(' RATE RADAR - BANK & CREDIT CARD IMAGES SCRAPER ENGINE    ');
  console.log('==========================================================\n');

  await scrapeBankLogos();
  await scrapeCreditCardImages();

  console.log('==========================================================');
  console.log(' ✓ ALL BANK AND CREDIT CARD IMAGES SCRAPED & STORED!      ');
  console.log('==========================================================\n');
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  startFileLogging('Images Scraper (Bank & Credit Cards)');
  runImageScraper().then(() => {
    stopFileLogging();
    process.exit(0);
  }).catch(err => {
    console.error('Images scraping error:', err);
    stopFileLogging();
    process.exit(1);
  });
}
