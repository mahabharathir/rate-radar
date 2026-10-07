/**
 * Rate Radar - Dedicated Bank & Credit Card Images Scraper
 * 
 * Scrapes official bank logos for all 53 commercial banks and card product
 * visuals for all 159 credit cards. Saves assets locally under assets/images/
 * and enriches registries with verified image paths.
 */

import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import * as cheerio from 'cheerio';
import { chromium } from 'playwright';
import { banksCatalog } from './data/banks-registry.mjs';
import { creditCardsCatalog } from './data/credit-cards-registry.mjs';
import { writeCatalogFile } from './data/_catalog-writer.mjs';
import { startFileLogging, stopFileLogging } from './logger.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BANKS_IMG_DIR = path.resolve(__dirname, '../assets/images/banks');
const CARDS_IMG_DIR = path.resolve(__dirname, '../assets/images/cards');
const REGISTRIES_DIR = path.resolve(__dirname, '../data/registries');

const BANKS_CATALOG_PATH = path.resolve(__dirname, 'data/banks-registry.mjs');
const CARDS_CATALOG_PATH = path.resolve(__dirname, 'data/credit-cards-registry.mjs');

const BANKS_CATALOG_HEADER = `/**\n * Comprehensive Indian Banks & Interest Rates Registry\n * 53 Scheduled Commercial Banks across Public Sector, Private, Small Finance,\n * Foreign, and Payments Banks operating in India.\n * Enriched with official logos and schedules.\n */`;
const CARDS_CATALOG_HEADER = `/**\n * Comprehensive Indian Credit Cards Registry\n * 159 Official Credit Card Offerings Across 27 Banks in India\n * Enriched with scraped card visuals, tariff schedules, and MITC.\n */`;

if (!fs.existsSync(BANKS_IMG_DIR)) fs.mkdirSync(BANKS_IMG_DIR, { recursive: true });
if (!fs.existsSync(CARDS_IMG_DIR)) fs.mkdirSync(CARDS_IMG_DIR, { recursive: true });
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

/**
 * Bank Brand Styling Palette for Vector Logos & Cards
 */
const BANK_BRAND_PALETTES = {
  sbi: { primary: '#002B49', secondary: '#00A5EC', accent: '#FFCC00', name: 'State Bank of India', short: 'SBI' },
  pnb: { primary: '#A20000', secondary: '#F7B500', accent: '#FFF', name: 'Punjab National Bank', short: 'PNB' },
  bob: { primary: '#F26522', secondary: '#002B49', accent: '#FFF', name: 'Bank of Baroda', short: 'BOB' },
  canbk: { primary: '#0091DA', secondary: '#FFD100', accent: '#FFF', name: 'Canara Bank', short: 'CANARA' },
  ubi: { primary: '#E31837', secondary: '#003366', accent: '#FFF', name: 'Union Bank of India', short: 'UNION' },
  boi: { primary: '#E53E3E', secondary: '#005691', accent: '#FFF', name: 'Bank of India', short: 'BOI' },
  indianb: { primary: '#0047BA', secondary: '#FDB913', accent: '#FFF', name: 'Indian Bank', short: 'IND BANK' },
  centralbk: { primary: '#E31837', secondary: '#0C2340', accent: '#FFF', name: 'Central Bank of India', short: 'CBI' },
  iob: { primary: '#005B94', secondary: '#F7A823', accent: '#FFF', name: 'Indian Overseas Bank', short: 'IOB' },
  ucobank: { primary: '#0072CE', secondary: '#F2A900', accent: '#FFF', name: 'UCO Bank', short: 'UCO' },
  mahabank: { primary: '#005B94', secondary: '#FFC72C', accent: '#FFF', name: 'Bank of Maharashtra', short: 'BOM' },
  psb: { primary: '#B8860B', secondary: '#003366', accent: '#FFF', name: 'Punjab & Sind Bank', short: 'PSB' },
  hdfc: { primary: '#004C8F', secondary: '#ED232A', accent: '#FFF', name: 'HDFC Bank', short: 'HDFC' },
  hdfcbank: { primary: '#004C8F', secondary: '#ED232A', accent: '#FFF', name: 'HDFC Bank', short: 'HDFC' },
  icici: { primary: '#A82C2A', secondary: '#F58220', accent: '#FFF', name: 'ICICI Bank', short: 'ICICI' },
  icicibank: { primary: '#A82C2A', secondary: '#F58220', accent: '#FFF', name: 'ICICI Bank', short: 'ICICI' },
  axis: { primary: '#97144D', secondary: '#AE275F', accent: '#FFF', name: 'Axis Bank', short: 'AXIS' },
  axisbank: { primary: '#97144D', secondary: '#AE275F', accent: '#FFF', name: 'Axis Bank', short: 'AXIS' },
  kotak: { primary: '#ED1C24', secondary: '#003366', accent: '#FFF', name: 'Kotak Mahindra Bank', short: 'KOTAK' },
  indusind: { primary: '#981B1E', secondary: '#B92528', accent: '#FFF', name: 'IndusInd Bank', short: 'INDUSIND' },
  yes: { primary: '#003366', secondary: '#ED1C24', accent: '#FFF', name: 'YES Bank', short: 'YES BANK' },
  federal: { primary: '#0B2341', secondary: '#FDB913', accent: '#FFF', name: 'Federal Bank', short: 'FEDERAL' },
  idfc: { primary: '#9D1D27', secondary: '#78151D', accent: '#FFF', name: 'IDFC FIRST Bank', short: 'IDFC FIRST' },
  idfcfirst: { primary: '#9D1D27', secondary: '#78151D', accent: '#FFF', name: 'IDFC FIRST Bank', short: 'IDFC FIRST' },
  rbl: { primary: '#002B49', secondary: '#F26522', accent: '#FFF', name: 'RBL Bank', short: 'RBL' },
  bandhan: { primary: '#003366', secondary: '#F37023', accent: '#FFF', name: 'Bandhan Bank', short: 'BANDHAN' },
  au: { primary: '#691F74', secondary: '#F7941D', accent: '#FFF', name: 'AU Small Finance Bank', short: 'AU SFB' },
  equitas: { primary: '#00529B', secondary: '#ED1C24', accent: '#FFF', name: 'Equitas Small Finance Bank', short: 'EQUITAS' },
  ujjivan: { primary: '#00833E', secondary: '#FDB913', accent: '#FFF', name: 'Ujjivan Small Finance Bank', short: 'UJJIVAN' },
  scb: { primary: '#0097D6', secondary: '#00A54F', accent: '#FFF', name: 'Standard Chartered', short: 'STAN CHART' },
  hsbc: { primary: '#DB0011', secondary: '#000000', accent: '#FFF', name: 'HSBC India', short: 'HSBC' },
  citi: { primary: '#003B70', secondary: '#ED1C24', accent: '#FFF', name: 'Citibank India', short: 'CITI' },
  dbs: { primary: '#FF0000', secondary: '#000000', accent: '#FFF', name: 'DBS Bank India', short: 'DBS' },
  amex: { primary: '#006FCF', secondary: '#002663', accent: '#FFF', name: 'American Express', short: 'AMEX' },
  bobcard: { primary: '#F26522', secondary: '#002B49', accent: '#FFF', name: 'BOBCARD', short: 'BOBCARD' },
  sib: { primary: '#A20000', secondary: '#FFD100', accent: '#FFF', name: 'South Indian Bank', short: 'SIB' },
  kvb: { primary: '#003366', secondary: '#E31837', accent: '#FFF', name: 'Karur Vysya Bank', short: 'KVB' },
  ktk: { primary: '#00529B', secondary: '#ED1C24', accent: '#FFF', name: 'Karnataka Bank', short: 'KTK BANK' },
  csb: { primary: '#C8102E', secondary: '#00205B', accent: '#FFF', name: 'CSB Bank', short: 'CSB' },
  sbm: { primary: '#00558F', secondary: '#E31837', accent: '#FFF', name: 'SBM Bank India', short: 'SBM' }
};

/**
 * Generate a sleek, high-fidelity SVG Credit Card graphic
 */
function generateCreditCardSvg(card) {
  const bankCode = (card.bankCode || 'bank').toLowerCase();
  const palette = BANK_BRAND_PALETTES[bankCode] || {
    primary: '#1e293b',
    secondary: '#0f172a',
    accent: '#ffffff'
  };

  const cardTitle = card.card || 'Credit Card';
  const category = card.category || 'Retail';
  const isSuperPremium = /metal|infinia|black|magnus|aurum|emeralde|infinite|centurion|taj|luxury/i.test(cardTitle + category);
  const isTravel = /air|vistara|flight|indigo|travel|regalia|club|lounge/i.test(cardTitle + category);
  const isCashback = /cashback|millennia|swiggy|zomato|amazon|flipkart|ace|rewards/i.test(cardTitle + category);

  let gradStop1 = palette.primary;
  let gradStop2 = palette.secondary;
  let accentBorder = 'rgba(255,255,255,0.2)';
  let foilShine = 'rgba(255,255,255,0.12)';

  if (isSuperPremium) {
    gradStop1 = '#1A1A1E';
    gradStop2 = '#0D0E11';
    accentBorder = '#D4AF37';
    foilShine = 'rgba(212,175,55,0.2)';
  } else if (isTravel) {
    gradStop1 = '#0F2B48';
    gradStop2 = '#061629';
    accentBorder = 'rgba(125,211,252,0.4)';
  } else if (isCashback) {
    gradStop1 = '#064E3B';
    gradStop2 = '#022C22';
    accentBorder = 'rgba(110,231,183,0.3)';
  }

  // Determine card network
  let network = 'VISA';
  if (/rupay|upi/i.test(cardTitle)) network = 'RuPay';
  else if (/diners/i.test(cardTitle)) network = 'Diners Club';
  else if (/amex|american express/i.test(cardTitle)) network = 'AMEX';
  else if (/mastercard|world/i.test(cardTitle)) network = 'Mastercard';

  // Network Emblem rendering
  let networkSvg = '';
  if (network === 'Mastercard') {
    networkSvg = `
      <circle cx="270" cy="165" r="14" fill="#EB001B"/>
      <circle cx="286" cy="165" r="14" fill="#F79E1B" fill-opacity="0.88"/>
    `;
  } else if (network === 'RuPay') {
    networkSvg = `
      <g transform="translate(250, 153)">
        <polygon points="0,5 20,5 28,15 8,15" fill="#097937"/>
        <polygon points="12,15 32,15 40,25 20,25" fill="#F47920"/>
        <text x="14" y="16" font-family="'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="900" fill="#FFF">RuPay</text>
      </g>
    `;
  } else if (network === 'AMEX') {
    networkSvg = `
      <rect x="246" y="150" width="54" height="24" rx="4" fill="#006FCF"/>
      <text x="273" y="166" font-family="sans-serif" font-size="10" font-weight="900" fill="#FFF" text-anchor="middle">AMEX</text>
    `;
  } else if (network === 'Diners Club') {
    networkSvg = `
      <circle cx="268" cy="164" r="13" fill="none" stroke="#FFF" stroke-width="2.5"/>
      <circle cx="282" cy="164" r="13" fill="none" stroke="#FFF" stroke-width="2.5"/>
    `;
  } else {
    // Visa
    networkSvg = `
      <text x="272" y="172" font-family="'Arial Black', sans-serif" font-style="italic" font-size="20" font-weight="900" fill="#FFF" letter-spacing="1">VISA</text>
    `;
  }

  // Truncate card title for clean display
  const displayTitle = cardTitle.length > 28 ? cardTitle.slice(0, 26) + '…' : cardTitle;

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" width="320" height="200">
  <defs>
    <linearGradient id="cardGrad-${slugify(cardTitle)}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${gradStop1}"/>
      <stop offset="60%" stop-color="${gradStop2}"/>
      <stop offset="100%" stop-color="#000000"/>
    </linearGradient>
    <linearGradient id="chipGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFE082"/>
      <stop offset="50%" stop-color="#FFB300"/>
      <stop offset="100%" stop-color="#FFA000"/>
    </linearGradient>
    <filter id="cardShadow" x="-5%" y="-5%" width="115%" height="120%">
      <feDropShadow dx="0" dy="6" stdDeviation="6" flood-opacity="0.35"/>
    </filter>
  </defs>

  <!-- Card Body -->
  <rect x="4" y="4" width="312" height="192" rx="14" fill="url(#cardGrad-${slugify(cardTitle)})" filter="url(#cardShadow)"/>
  <rect x="4" y="4" width="312" height="192" rx="14" fill="none" stroke="${accentBorder}" stroke-width="1.2"/>

  <!-- Aesthetic Sheen Overlay -->
  <path d="M4 35 Q 160 80 316 20 L316 4 L4 4 Z" fill="${foilShine}"/>

  <!-- Bank / Issuer Header -->
  <text x="24" y="32" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="800" fill="#FFFFFF" letter-spacing="0.5">${escapeXml((card.bank || 'BANK').toUpperCase())}</text>

  <!-- Category Badge -->
  <g transform="translate(200, 18)">
    <rect width="96" height="18" rx="9" fill="rgba(255,255,255,0.15)"/>
    <text x="48" y="13" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="9" font-weight="700" fill="#FFFFFF" text-anchor="middle">${escapeXml(category.slice(0, 16))}</text>
  </g>

  <!-- EMV Smart Chip -->
  <rect x="24" y="65" width="40" height="30" rx="5" fill="url(#chipGrad)" stroke="#B78103" stroke-width="0.8"/>
  <path d="M24 75 L44 75 M44 65 L44 95 M44 85 L24 85 M44 75 L64 75 M54 65 L54 95" stroke="#795548" stroke-width="0.7" fill="none"/>

  <!-- Contactless NFC Wave -->
  <path d="M74 74 A 10 10 0 0 1 74 86 M78 70 A 16 16 0 0 1 78 90 M82 66 A 22 22 0 0 1 82 94" fill="none" stroke="rgba(255,255,255,0.7)" stroke-width="1.8" stroke-linecap="round"/>

  <!-- Card Title -->
  <text x="24" y="132" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="700" fill="#FFFFFF">${escapeXml(displayTitle)}</text>

  <!-- Cardholder & Expiry Preview -->
  <text x="24" y="152" font-family="'Courier New', Courier, monospace" font-size="12" font-weight="600" fill="rgba(255,255,255,0.75)" letter-spacing="1">•••• •••• •••• 8820</text>
  <text x="24" y="172" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10" font-weight="500" fill="rgba(255,255,255,0.6)">VALID THRU 10/30</text>

  <!-- Payment Network Logo -->
  ${networkSvg}
</svg>`;
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
 * 1. LIVE SCRAPE BANK LOGOS
 */
export async function scrapeBankLogos() {
  console.log('----------------------------------------------------------');
  console.log(`[1/2] Scraping Logos for all ${banksCatalog.length} Indian Banks...`);
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
        || (MANUAL_BANK_LOGO_FILES[bankCode] || []).find(f => fs.existsSync(path.join(bankDir, f)));

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
          fetchMethod = 'not_found';
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

/**
 * Pulls every plausible real card-image URL out of a product page, in
 * priority order, resolved to absolute URLs. No generic web/image-search is
 * used (no API available, and scraping arbitrary third-party image hosts
 * risks ToS/copyright issues) — only first-party markup on the issuer's own
 * official page, which is the safe, authoritative source for its own card art.
 */
function extractCandidateImageUrls($, baseUrl) {
  const candidates = [];
  const push = (val) => {
    if (!val) return;
    try {
      const abs = new URL(val, baseUrl).href;
      if (!candidates.includes(abs)) candidates.push(abs);
    } catch {
      // ignore malformed URLs
    }
  };

  push($('meta[property="og:image:secure_url"]').attr('content'));
  push($('meta[property="og:image"]').attr('content'));
  push($('meta[name="twitter:image"]').attr('content'));
  push($('link[rel="image_src"]').attr('href'));
  push($('meta[itemprop="image"]').attr('content'));

  // Last resort: an <img> whose src/alt/class hints at being the card photo,
  // excluding anything that looks like a logo/icon/sprite/tracking pixel.
  $('img').each((_, el) => {
    const $el = $(el);
    const src = $el.attr('data-src') || $el.attr('src');
    const hint = `${src || ''} ${$el.attr('alt') || ''} ${$el.attr('class') || ''}`.toLowerCase();
    if (!src) return;
    if (/logo|icon|favicon|sprite|pixel|spinner|placeholder/.test(hint)) return;
    if (/card|credit/.test(hint)) push(src);
  });

  return candidates;
}

const DESKTOP_UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36';
const MOBILE_UA = 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4 Mobile/15E148 Safari/604.1';

/** Fetches a product page with browser-like headers; retries once with a mobile UA if the first attempt fails/blocks. */
async function fetchProductPage(url) {
  for (const ua of [DESKTOP_UA, MOBILE_UA]) {
    try {
      const res = await fetch(url, {
        headers: {
          'User-Agent': ua,
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
          'Accept-Language': 'en-IN,en;q=0.9',
          'Referer': new URL(url).origin + '/'
        },
        signal: AbortSignal.timeout(8000)
      });
      if (res.ok) return await res.text();
    } catch {
      // try next UA
    }
  }
  return null;
}

/** Inspects magic bytes to find the real format, regardless of what the URL/extension claims. */
function detectRealImageType(buf) {
  if (!buf || buf.length < 12) return null;
  if (buf[0] === 0xff && buf[1] === 0xd8) return 'jpg';
  if (buf[0] === 0x89 && buf[1] === 0x50 && buf[2] === 0x4e && buf[3] === 0x47) return 'png';
  if (buf.slice(0, 4).toString('ascii') === 'RIFF' && buf.slice(8, 12).toString('ascii') === 'WEBP') return 'webp';
  if (buf.toString('utf8', 0, 200).includes('<svg')) return 'svg';
  return null; // HTML error/redirect pages and anything else are rejected, not saved as an "image"
}

/** Downloads the first candidate URL that resolves to a real (non-tiny, non-HTML) image. */
async function downloadFirstValidImage(candidates, destPathNoExt) {
  for (const url of candidates) {
    try {
      const res = await fetch(url, { headers: { 'User-Agent': DESKTOP_UA }, signal: AbortSignal.timeout(8000) });
      if (!res.ok) continue;
      const buf = Buffer.from(await res.arrayBuffer());
      if (buf.length < 3000) continue;
      const ext = detectRealImageType(buf);
      if (!ext) continue;
      const filePath = `${destPathNoExt}.${ext}`;
      fs.writeFileSync(filePath, buf);
      return { fileName: path.basename(filePath), bytes: buf.length, sourceUrl: url };
    } catch {
      // try next candidate
    }
  }
  return null;
}

const CARD_NAME_STOPWORDS = new Set(['credit', 'card', 'cards', 'bank', 'the', 'and', 'of', 'for']);
const EXCLUDE_IMAGE_KEYWORDS = /logo|icon|favicon|sprite|pixel|placeholder|spinner|pci|dicgc|security|masthead|footer|header|navbar|nav-|menu-|avtar|avatar|glow\.png/i;

/** Distinctive name tokens (e.g. "altura", "sentinel") used to match a card's own image among a page's <img> tags. */
function slugTokensForCard(card) {
  const cleaned = card.card.replace(/credit\s*card/ig, '');
  return slugify(cleaned).split('-').filter(t => t.length >= 3 && !CARD_NAME_STOPWORDS.has(t) && t !== card.bankCode);
}

/** Scores a rendered <img> candidate; higher is more likely the actual card face (name-token match + card aspect ratio). */
function scoreImageCandidate(cand, tokens) {
  if (!cand.src || cand.w < 60 || cand.h < 40) return -100;
  const haystack = `${cand.src} ${cand.alt}`.toLowerCase();
  if (EXCLUDE_IMAGE_KEYWORDS.test(haystack)) return -100;
  let score = 0;
  if (tokens.some(t => haystack.includes(t))) score += 10;
  if (/card/.test(haystack)) score += 5;
  const ratio = cand.w / cand.h;
  if ((ratio >= 1.3 && ratio <= 2.0) || (ratio >= 0.5 && ratio <= 0.77)) score += 3;
  if (cand.w > 700 && cand.h > 700) score -= 5;
  return score;
}

/**
 * Headless-browser fallback for cards whose image is injected by client-side
 * JS (not present in static HTML, so a plain fetch can't see it). Renders
 * each page, scores every visible <img> by name-token + aspect-ratio match,
 * and downloads the best candidate through the same browser context.
 */
async function scrapeWithHeadlessBrowser(cards, resultsBySlug) {
  console.log(`\n-> ${cards.length} cards need headless-browser rendering (JS-injected images)...`);
  const browser = await chromium.launch({ args: ['--disable-http2'] });
  const CONCURRENCY = 3;

  async function processOne(card) {
    const cardSlug = `${card.bankCode}-${slugify(card.card)}`;
    const tokens = slugTokensForCard(card);
    const page = await browser.newPage({ userAgent: DESKTOP_UA });
    let savedRelPath = '';
    let fetchMethod = 'not_found';
    try {
      await page.goto(card.productUrl, { waitUntil: 'domcontentloaded', timeout: 15000 });
      await page.waitForTimeout(2500);
      const candidates = await page.evaluate(() => {
        const out = [];
        document.querySelectorAll('img').forEach(img => {
          const rect = img.getBoundingClientRect();
          out.push({ src: img.currentSrc || img.src, alt: img.alt || '', w: Math.round(rect.width), h: Math.round(rect.height) });
        });
        return out;
      });
      const scored = candidates
        .map(c => ({ ...c, score: scoreImageCandidate(c, tokens) }))
        .filter(c => c.score > 0)
        .sort((a, b) => b.score - a.score);

      for (const cand of scored) {
        try {
          const resp = await page.context().request.get(cand.src, { timeout: 8000 });
          if (!resp.ok()) continue;
          const buf = await resp.body();
          if (buf.length < 3000) continue;
          const ext = detectRealImageType(buf);
          if (!ext) continue;
          const fileName = `${cardSlug}.${ext}`;
          fs.writeFileSync(path.join(CARDS_IMG_DIR, fileName), buf);
          savedRelPath = `assets/images/cards/${fileName}`;
          fetchMethod = `headless_browser (${buf.length} bytes)`;
          break;
        } catch {
          // try next candidate
        }
      }
    } catch {
      fetchMethod = 'not_found';
    } finally {
      await page.close();
    }

    console.log(`  ${savedRelPath ? '✓' : '·'} [${card.bankCode.toUpperCase()}] ${card.card.slice(0, 32).padEnd(34)} -> ${savedRelPath || '(no image)'} (${fetchMethod})`);
    resultsBySlug.set(cardSlug, { ...card, imageUrl: savedRelPath ? `/${savedRelPath}` : '', imagePath: savedRelPath });
  }

  for (let i = 0; i < cards.length; i += CONCURRENCY) {
    await Promise.all(cards.slice(i, i + CONCURRENCY).map(processOne));
  }

  await browser.close();
}

const CARD_VARIANT_STOPWORDS = /\b(advantage|plus|select|business|sprint)\b/g;

/** Normalizes a card name for same-product-family comparison (e.g. "X" vs "X Advantage"). */
function normalizeForVariantCheck(name) {
  return name.toLowerCase().replace(/credit card/g, '').replace(CARD_VARIANT_STOPWORDS, '').replace(/[^a-z0-9]+/g, ' ').trim();
}

function isLikelySameProductVariant(nameA, nameB) {
  const a = normalizeForVariantCheck(nameA);
  const b = normalizeForVariantCheck(nameB);
  return a === b || a.includes(b) || b.includes(a);
}

/**
 * Some issuer sites set one static og:image for every card page (a generic
 * brand banner), so distinct cards can end up pointing at byte-identical
 * "card images". Clears imageUrl/imagePath (and deletes the file) for any
 * group of 3+ cards sharing identical image bytes, or 2 cards sharing one
 * that aren't clearly the same product family (e.g. "X" vs "X Advantage").
 */
function rejectGenericSharedImages(cards) {
  const hashToCards = new Map();
  for (const card of cards) {
    if (!card.imagePath) continue;
    const full = path.resolve(__dirname, '..', card.imagePath);
    if (!fs.existsSync(full)) continue;
    const hash = crypto.createHash('sha256').update(fs.readFileSync(full)).digest('hex');
    if (!hashToCards.has(hash)) hashToCards.set(hash, []);
    hashToCards.get(hash).push(card);
  }

  const invalid = new Set();
  for (const group of hashToCards.values()) {
    if (group.length >= 3) {
      group.forEach(c => invalid.add(c));
    } else if (group.length === 2 && !isLikelySameProductVariant(group[0].card, group[1].card)) {
      group.forEach(c => invalid.add(c));
    }
  }

  if (invalid.size > 0) {
    console.log(`\n-> Rejecting ${invalid.size} cards whose image is a generic/shared asset, not unique card art...`);
  }

  return cards.map(card => {
    if (!invalid.has(card)) return card;
    if (card.imagePath) {
      const full = path.resolve(__dirname, '..', card.imagePath);
      if (fs.existsSync(full)) fs.unlinkSync(full);
    }
    return { ...card, imageUrl: '', imagePath: '' };
  });
}

/**
 * 2. LIVE SCRAPE CREDIT CARD IMAGES — official issuer product pages only.
 * No generated/vector fallback: cards whose real image can't be found are
 * left without imageUrl/imagePath rather than substituting placeholder art.
 */
export async function scrapeCreditCardImages() {
  console.log('----------------------------------------------------------');
  console.log(`[2/2] Scraping Card Images for all ${creditCardsCatalog.length} Credit Cards...`);
  console.log('----------------------------------------------------------\n');

  // Group by hostname so requests to the same bank site are serialized
  // (reduces WAF/rate-limit blocks) while different issuers run in parallel.
  const byHost = new Map();
  for (const card of creditCardsCatalog) {
    let host = 'no-url';
    if (card.productUrl) {
      try { host = new URL(card.productUrl).hostname; } catch { host = 'no-url'; }
    }
    if (!byHost.has(host)) byHost.set(host, []);
    byHost.get(host).push(card);
  }

  const resultsBySlug = new Map();
  const needsBrowserFallback = [];

  async function processCard(card) {
    const cardSlug = `${card.bankCode}-${slugify(card.card)}`;
    const existing = ['.png', '.jpg', '.jpeg', '.webp']
      .map(ext => `${cardSlug}${ext}`)
      .find(name => fs.existsSync(path.join(CARDS_IMG_DIR, name)) && fs.statSync(path.join(CARDS_IMG_DIR, name)).size > 3000);

    let savedRelPath = '';
    let fetchMethod = 'cached';

    if (existing) {
      savedRelPath = `assets/images/cards/${existing}`;
    } else if (card.productUrl) {
      const html = await fetchProductPage(card.productUrl);
      if (html) {
        const $ = cheerio.load(html);
        const candidates = extractCandidateImageUrls($, card.productUrl);
        const downloaded = await downloadFirstValidImage(candidates, path.join(CARDS_IMG_DIR, cardSlug));
        if (downloaded) {
          savedRelPath = `assets/images/cards/${downloaded.fileName}`;
          fetchMethod = `live_product_page (${downloaded.bytes} bytes)`;
        }
      }
      if (!savedRelPath) {
        fetchMethod = 'not_found';
        needsBrowserFallback.push(card);
        return; // deferred to the headless-browser pass below
      }
    } else {
      fetchMethod = 'no_product_url';
    }

    console.log(`  ${savedRelPath ? '✓' : '·'} [${card.bankCode.toUpperCase()}] ${card.card.slice(0, 32).padEnd(34)} -> ${savedRelPath || '(no image)'} (${fetchMethod})`);

    resultsBySlug.set(cardSlug, {
      ...card,
      imageUrl: savedRelPath ? `/${savedRelPath}` : '',
      imagePath: savedRelPath
    });
  }

  const HOST_CONCURRENCY = 3;
  await Promise.all(
    Array.from(byHost.values()).map(async (cardsForHost) => {
      for (let i = 0; i < cardsForHost.length; i += HOST_CONCURRENCY) {
        await Promise.all(cardsForHost.slice(i, i + HOST_CONCURRENCY).map(processCard));
      }
    })
  );

  if (needsBrowserFallback.length > 0) {
    await scrapeWithHeadlessBrowser(needsBrowserFallback, resultsBySlug);
  }

  let updatedCards = creditCardsCatalog.map(card => resultsBySlug.get(`${card.bankCode}-${slugify(card.card)}`));
  updatedCards = rejectGenericSharedImages(updatedCards);

  // Update credit cards registries
  saveRegistry('credit-cards-register.json', updatedCards);
  writeCatalogFile(CARDS_CATALOG_PATH, CARDS_CATALOG_HEADER, { creditCardsCatalog: updatedCards });
  const found = updatedCards.filter(c => c.imageUrl).length;
  console.log(`\n✓ Credit card images scraping completed: ${found}/${updatedCards.length} cards have a real image.\n`);

  return updatedCards;
}

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
