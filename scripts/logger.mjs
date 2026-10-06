/**
 * Rate Radar - Persistent File Logger
 *
 * Mirrors console.log/console.error output to logs/scrape.log so every
 * scraper run is recorded on disk. The log file is always appended to,
 * never overwritten or truncated, and is created on first use.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const LOG_DIR = path.resolve(__dirname, '../logs');
export const LOG_FILE = path.join(LOG_DIR, 'scrape.log');

let originalLog = null;
let originalError = null;

/**
 * Starts tee-ing console.log/console.error to logs/scrape.log (appended).
 * @param {string} label - Name of the run, written as a header line.
 */
export function startFileLogging(label) {
  if (!fs.existsSync(LOG_DIR)) fs.mkdirSync(LOG_DIR, { recursive: true });

  fs.appendFileSync(LOG_FILE, `\n===== ${label} — ${new Date().toISOString()} =====\n`, 'utf8');

  originalLog = console.log;
  originalError = console.error;

  console.log = (...args) => {
    originalLog(...args);
    fs.appendFileSync(LOG_FILE, args.join(' ') + '\n', 'utf8');
  };
  console.error = (...args) => {
    originalError(...args);
    fs.appendFileSync(LOG_FILE, '[ERROR] ' + args.join(' ') + '\n', 'utf8');
  };
}

/** Restores the original console.log/console.error (safe to call even if not started). */
export function stopFileLogging() {
  if (originalLog) console.log = originalLog;
  if (originalError) console.error = originalError;
  originalLog = null;
  originalError = null;
}
