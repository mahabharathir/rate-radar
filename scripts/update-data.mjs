/**
 * Rate Radar - Official Data Ingestion & Update Utility
 * 
 * Invokes the scraping and ingestion engine to fetch live and verified rates
 * from official regulatory authorities (RBI, DEA, FBIL, IBJA, IOCL, NSE, BSE).
 */

import { runBanksScraper } from './banks-scrape.mjs';
import { runCreditScraper } from './credit-scrape.mjs';
import { runIngestionPipeline } from './scrape-official.mjs';

async function main() {
  console.log("==========================================================");
  console.log(" RATE RADAR - FULL MODULAR DATA INGESTION SUITE           ");
  console.log("==========================================================\n");

  console.log("[1/3] Executing Commercial Banks & Deposits Scraper...");
  await runBanksScraper();

  console.log("\n[2/3] Executing Credit Cards Tariff & Offering Scraper...");
  await runCreditScraper();

  console.log("\n[3/3] Executing Official Institutional & Regulatory Pipeline...");
  await runIngestionPipeline();

  console.log("\n✓ ALL DATASETS & SINGLE-PAGE TABLES SUCCESSFULLY REFRESHED!");
}

main().catch(err => {
  console.error("Ingestion suite error:", err);
  process.exit(1);
});
