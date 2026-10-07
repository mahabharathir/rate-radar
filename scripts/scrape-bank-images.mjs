/**
 * Rate Radar - Bank Logos Scraper
 *
 * Scrapes official bank logos for all commercial banks from community logo
 * repos, falling back to a generated vector badge when no official logo can
 * be found. Saves assets under assets/images/banks/<bankCode>/ and enriches
 * the bank, FD, and home-loan registries with the resolved logo path.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { banksCatalog } from './data/banks-registry.mjs';
import { writeCatalogFile } from './data/_catalog-writer.mjs';
import { BANK_BRAND_PALETTES } from './data/bank-brand-palettes.mjs';
import { startFileLogging, stopFileLogging } from './logger.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BANKS_IMG_DIR = path.resolve(__dirname, '../assets/images/banks');
const REGISTRIES_DIR = path.resolve(__dirname, '../data/registries');
const BANKS_CATALOG_PATH = path.resolve(__dirname, 'data/banks-registry.mjs');

const BANKS_CATALOG_HEADER = `/**\n * Comprehensive Indian Banks & Interest Rates Registry\n * 53 Scheduled Commercial Banks across Public Sector, Private, Small Finance,\n * Foreign, and Payments Banks operating in India.\n * Enriched with official logos and schedules.\n */`;

if (!fs.existsSync(BANKS_IMG_DIR)) fs.mkdirSync(BANKS_IMG_DIR, { recursive: true });
if (!fs.existsSync(REGISTRIES_DIR)) fs.mkdirSync(REGISTRIES_DIR, { recursive: true });

function saveRegistry(filename, data) {
  const filePath = path.join(REGISTRIES_DIR, filename);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
}

function slugify(text) {
  return String(text || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function escapeXml(unsafe) {
  return String(unsafe || '').replace(/[<>&'"]/g, c => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
    }
  });
}

/** Derives short initials (e.g. "Bank of Baroda" -> "BOB") for banks with no palette `short` label. */
function initialsFromName(name) {
  const initials = String(name || '')
    .split(/\s+/)
    .filter(w => w.length > 0 && !/^(bank|of|the|and|&)$/i.test(w))
    .map(w => w[0])
    .join('')
    .toUpperCase();
  return initials.slice(0, 5) || 'BANK';
}

/** Truncates a long name to fit a single SVG text line, preferring a word boundary. */
function truncateLabel(value, maxLen) {
  const str = String(value || '');
  if (str.length <= maxLen) return str;
  return str.slice(0, maxLen - 1).trimEnd() + '…';
}

/**
 * Generates a branded vector logo (gradient badge + initials + full bank
 * name) for banks whose official logo couldn't be scraped from any source.
 */
function generateBankLogoSvg(bank, bankCode) {
  const palette = BANK_BRAND_PALETTES[bankCode] || {
    primary: '#1e293b',
    secondary: '#0f172a'
  };

  const fullName = bank.bankName || bank.shortName || 'Bank';
  const shortLabel = (palette.short || bank.shortName || initialsFromName(fullName)).toUpperCase().slice(0, 10);
  const gradId = `bankGrad-${slugify(fullName) || bankCode}`;

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" width="240" height="240">
  <defs>
    <linearGradient id="${gradId}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${palette.primary}"/>
      <stop offset="100%" stop-color="${palette.secondary}"/>
    </linearGradient>
  </defs>
  <rect x="4" y="4" width="232" height="232" rx="28" fill="url(#${gradId})"/>
  <rect x="4" y="4" width="232" height="232" rx="28" fill="none" stroke="rgba(255,255,255,0.25)" stroke-width="1.5"/>
  <text x="120" y="126" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="${shortLabel.length > 6 ? 32 : 44}" font-weight="800" fill="#FFFFFF" text-anchor="middle">${escapeXml(shortLabel)}</text>
  <text x="120" y="158" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="600" fill="rgba(255,255,255,0.85)" text-anchor="middle">${escapeXml(truncateLabel(fullName, 28))}</text>
</svg>`;
}

/**
 * Maps our internal bankCode to the matching slug in praveenpuglia/indian-banks —
 * the sole, authoritative source for bank logos: a community-maintained,
 * per-bank-folder repo with 4 verified official asset variants per bank
 * (symbol.svg, symbol.png, logo.svg, logo.png).
 * https://github.com/praveenpuglia/indian-banks/tree/main/assets/logos
 */
const PRAVEENPUGLIA_BANK_SLUGS = {
  sbi: 'sbin', pnb: 'punb', bob: 'barb', canbk: 'cnrb', ubi: 'ubin', boi: 'bkid',
  indianb: 'idib', centralbk: 'cbin', iob: 'ioba', ucobank: 'ucba', mahabank: 'mahb',
  psb: 'psib', hdfcbank: 'hdfc', icicibank: 'icic', axisbank: 'utib', kotakbank: 'kkbk',
  indusindbk: 'indb', idfcfirstb: 'idfb', federalbnk: 'fdrl', yesbank: 'yesb',
  bandhanbnk: 'bdbl', rblbank: 'ratn', idbi: 'ibkl', southbank: 'sibl', cub: 'ciub',
  kvb: 'kvbl', ktkbank: 'karb', tmb: 'tmbl', csbbank: 'csbk', dcbbank: 'dcbl',
  dhanbank: 'dlxb', jkbank: 'jaka', nainital: 'ntbl', aubank: 'aubl',
  ujjivansfb: 'ujvn', esafsfb: 'esmf', scb: 'scbl', fino: 'fino',
  jiopay: 'jiop', airtelpay: 'airp'
};

/** The 4 asset variants every bank folder in the repo provides, in display-priority order. */
const PRAVEENPUGLIA_ASSET_FILES = ['symbol.svg', 'symbol.png', 'logo.svg', 'logo.png'];

/**
 * Downloads all 4 official asset variants for a bank from praveenpuglia/indian-banks
 * and saves them into bankDir. Returns the primary display asset (first variant found).
 */
async function fetchPraveenpugliaBankAssets(bankCode, bankDir) {
  const slug = PRAVEENPUGLIA_BANK_SLUGS[bankCode];
  if (!slug) return null;

  let primary = null;
  let savedCount = 0;

  for (const fileName of PRAVEENPUGLIA_ASSET_FILES) {
    try {
      const url = `https://raw.githubusercontent.com/praveenpuglia/indian-banks/main/assets/logos/${slug}/${fileName}`;
      const res = await fetch(url, { signal: AbortSignal.timeout(8000) });
      if (!res.ok) continue;
      const buf = Buffer.from(await res.arrayBuffer());
      if (buf.length < 50) continue;
      fs.writeFileSync(path.join(bankDir, fileName), buf);
      savedCount++;
      if (!primary) primary = fileName;
    } catch {
      // try next variant
    }
  }

  return savedCount > 0 ? { primary, method: `indian_banks_repo:${slug} (${savedCount}/${PRAVEENPUGLIA_ASSET_FILES.length} assets)` } : null;
}

/**
 * Fallback source for banks missing from praveenpuglia/indian-banks — single SVG
 * files per bank, keyed by their path under banks/ in sovereign-fintracker/brand-assets.
 * https://github.com/sovereign-fintracker/brand-assets/tree/main/banks
 */
const SOVEREIGN_FINTRACKER_BANK_PATHS = {
  equitasbnk: 'india/equitas.svg',
  janabank: 'india/jana.svg',
  suryoday: 'india/suryoday.svg',
  capitalsfb: 'india/capital-sfb.svg',
  nesfb: 'india/nesfb.svg',
  ippb: 'india/ippb.svg',
  hsbc: 'global/hsbc.svg',
  barclays: 'global/barclays.svg',
  db: 'global/deutsche.svg'
};

/**
 * Downloads the single fallback logo SVG for a bank from sovereign-fintracker/brand-assets
 * and saves it as logo.svg into bankDir.
 */
async function fetchSovereignFintrackerLogo(bankCode, bankDir) {
  const relPath = SOVEREIGN_FINTRACKER_BANK_PATHS[bankCode];
  if (!relPath) return null;

  try {
    const url = `https://raw.githubusercontent.com/sovereign-fintracker/brand-assets/main/banks/${relPath}`;
    const res = await fetch(url, { signal: AbortSignal.timeout(8000) });
    if (!res.ok) return null;
    const buf = Buffer.from(await res.arrayBuffer());
    if (buf.length < 50) return null;
    fs.writeFileSync(path.join(bankDir, 'logo.svg'), buf);
    return { primary: 'logo.svg', method: `sovereign_fintracker:${relPath}` };
  } catch {
    return null;
  }
}

/**
 * Manually-curated logo files for banks unavailable in either GitHub source above,
 * placed directly under assets/images/banks/<bankCode>/, in display-priority order.
 */
const MANUAL_BANK_LOGO_FILES = {
  amex: ['symbol.png'],
  dbs: ['symbol.png', 'logo.png'],
  unitybank: ['symbol.png', 'logo.png'],
  utkarshbnk: ['symbol.png', 'logo.png']
};

/**
 * LIVE SCRAPE BANK LOGOS — community logo repos first, generated vector
 * badge as the fallback for banks with no official logo available anywhere.
 */
export async function scrapeBankLogos() {
  console.log('----------------------------------------------------------');
  console.log(`Scraping Logos for all ${banksCatalog.length} Indian Banks...`);
  console.log('----------------------------------------------------------\n');

  const updatedBanks = [];
  const BATCH_SIZE = 4;

  for (let i = 0; i < banksCatalog.length; i += BATCH_SIZE) {
    const chunk = banksCatalog.slice(i, i + BATCH_SIZE);

    const chunkPromises = chunk.map(async (bank) => {
      const bankCode = (bank.bankCode || slugify(bank.shortName || bank.bankName)).toLowerCase();
      const bankDir = path.join(BANKS_IMG_DIR, bankCode);
      if (!fs.existsSync(bankDir)) fs.mkdirSync(bankDir, { recursive: true });

      // Any previously saved asset variant, in display-priority order
      const existingPrimary = PRAVEENPUGLIA_ASSET_FILES.find(f => fs.existsSync(path.join(bankDir, f)))
        || (MANUAL_BANK_LOGO_FILES[bankCode] || []).find(f => fs.existsSync(path.join(bankDir, f)))
        || (fs.existsSync(path.join(bankDir, 'generated.svg')) ? 'generated.svg' : null);

      let savedRelPath = '';
      let fetchMethod = 'cached';

      if (existingPrimary) {
        savedRelPath = `assets/images/banks/${bankCode}/${existingPrimary}`;
      } else {
        const result = await fetchPraveenpugliaBankAssets(bankCode, bankDir)
          || await fetchSovereignFintrackerLogo(bankCode, bankDir);
        if (result) {
          savedRelPath = `assets/images/banks/${bankCode}/${result.primary}`;
          fetchMethod = result.method;
        } else {
          // No official logo found anywhere — generate a branded vector placeholder.
          const svg = generateBankLogoSvg(bank, bankCode);
          fs.writeFileSync(path.join(bankDir, 'generated.svg'), svg, 'utf8');
          savedRelPath = `assets/images/banks/${bankCode}/generated.svg`;
          fetchMethod = 'generated_vector_fallback';
        }
      }

      console.log(`  ✓ [${(bank.shortName || bank.bankName).padEnd(12)}] -> ${savedRelPath || '(no image found)'} (${fetchMethod})`);

      return {
        ...bank,
        logoUrl: savedRelPath ? `/${savedRelPath}` : '',
        imagePath: savedRelPath
      };
    });

    const results = await Promise.all(chunkPromises);
    updatedBanks.push(...results);
  }

  // Update bank registries
  saveRegistry('bank-register.json', updatedBanks);
  writeCatalogFile(BANKS_CATALOG_PATH, BANKS_CATALOG_HEADER, { banksCatalog: updatedBanks });

  // Enrich FD & Home Loans registers with bank logo references
  try {
    const fdPath = path.join(REGISTRIES_DIR, 'fd-rates-register.json');
    if (fs.existsSync(fdPath)) {
      const fds = JSON.parse(fs.readFileSync(fdPath, 'utf8'));
      const enrichedFds = fds.map(fd => {
        const matched = updatedBanks.find(b =>
          b.bankName.toLowerCase() === (fd.bank || '').toLowerCase() ||
          (fd.bank || '').toLowerCase().includes(b.bankName.toLowerCase()) ||
          b.bankName.toLowerCase().includes((fd.bank || '').toLowerCase())
        );
        return { ...fd, logoUrl: matched ? matched.logoUrl : '' };
      });
      saveRegistry('fd-rates-register.json', enrichedFds);
    }

    const hlPath = path.join(REGISTRIES_DIR, 'home-loan-register.json');
    if (fs.existsSync(hlPath)) {
      const loans = JSON.parse(fs.readFileSync(hlPath, 'utf8'));
      const enrichedLoans = loans.map(ln => {
        const matched = updatedBanks.find(b =>
          b.bankName.toLowerCase() === (ln.bank || '').toLowerCase() ||
          (ln.bank || '').toLowerCase().includes(b.bankName.toLowerCase()) ||
          b.bankName.toLowerCase().includes((ln.bank || '').toLowerCase())
        );
        return { ...ln, logoUrl: matched ? matched.logoUrl : '' };
      });
      saveRegistry('home-loan-register.json', enrichedLoans);
    }
  } catch (err) {
    console.error('Error attaching bank logos to FD/loans:', err.message);
  }

  console.log(`\n✓ Bank logos scraping completed: ${updatedBanks.length} banks updated.\n`);

  return updatedBanks;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  startFileLogging('Bank Logos Scraper');
  scrapeBankLogos().then(() => {
    stopFileLogging();
    process.exit(0);
  }).catch(err => {
    console.error('Bank logos scraping error:', err);
    stopFileLogging();
    process.exit(1);
  });
}
