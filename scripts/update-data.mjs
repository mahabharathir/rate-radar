/**
 * Rate Radar - Official Data Ingestion & Update Utility
 * 
 * Invokes the scraping and ingestion engine to fetch live and verified rates
 * from official regulatory authorities (RBI, DEA, FBIL, IBJA, IOCL, NSE, BSE).
 */

import { runBanksScraper } from './banks-scrape.mjs';
import { runInterestTablesScraper } from './interest-tables-scrape.mjs';
import { runCreditScraper } from './credit-scrape.mjs';
import { runForexScraper } from './forex-scrape.mjs';
import { runGovernmentScraper } from './government-scrape.mjs';
import { runMarketScraper } from './market-scrape.mjs';
import { runRbiScraper } from './rbi-scrape.mjs';
import { runCalendarScraper } from './calendar-scrape.mjs';
import { runOfficialScraper } from './scrape-official.mjs';
import { runImageScraper } from './scrape-images.mjs';
import { startFileLogging, stopFileLogging } from './logger.mjs';

async function main() {
  startFileLogging('Full Pipeline Run (update-data.mjs)');
  console.log("==========================================================");
  console.log(" RATE RADAR - FULL MODULAR DATA INGESTION SUITE           ");
  console.log("==========================================================\n");

  console.log("[1/10] Executing Commercial Banks Directory Scraper...");
  await runBanksScraper();

  console.log("\n[2/10] Executing Comprehensive Bank Interest Tables Scraper...");
  await runInterestTablesScraper();

  console.log("\n[3/10] Executing Credit Cards Tariff & Offering Scraper...");
  await runCreditScraper();

  console.log("\n[4/10] Executing Bank & Credit Card Images Scraper...");
  await runImageScraper();

  console.log("\n[5/10] Executing Foreign Exchange Rates Scraper...");
  await runForexScraper();

  console.log("\n[6/10] Executing Government Small Savings Schemes Scraper...");
  await runGovernmentScraper();

  console.log("\n[7/10] Executing Equity Market Indices Scraper...");
  await runMarketScraper();

  console.log("\n[8/10] Executing RBI Monetary Policy Rates Scraper...");
  await runRbiScraper();

  console.log("\n[9/10] Executing Financial Calendar Scraper...");
  await runCalendarScraper();

  console.log("\n[10/10] Executing Sources & Provenance Directory Generator...");
  await runOfficialScraper();

  console.log("\n✓ ALL DATASETS & IMAGES SUCCESSFULLY REFRESHED!");
  stopFileLogging();
}

main().catch(err => {
  console.error("Ingestion suite error:", err);
  stopFileLogging();
  process.exit(1);
});
