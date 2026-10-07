/**
 * Rate Radar - Credit Card Images Scraper
 *
 * Scrapes official card product visuals for all credit cards from issuer
 * product pages (static HTML first, then a headless-browser pass for
 * JS-injected images). Cards whose real image can't be found anywhere fall
 * back to a generated vector card face (network badge + bank name). Saves
 * assets under assets/images/cards/ and enriches the credit cards registry.
 */

import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import * as cheerio from 'cheerio';
import { chromium } from 'playwright';
import { creditCardsCatalog } from './data/credit-cards-registry.mjs';
import { writeCatalogFile } from './data/_catalog-writer.mjs';
import { BANK_BRAND_PALETTES } from './data/bank-brand-palettes.mjs';
import { startFileLogging, stopFileLogging } from './logger.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CARDS_IMG_DIR = path.resolve(__dirname, '../assets/images/cards');
const REGISTRIES_DIR = path.resolve(__dirname, '../data/registries');
const CARDS_CATALOG_PATH = path.resolve(__dirname, 'data/credit-cards-registry.mjs');

const CARDS_CATALOG_HEADER = `/**\n * Comprehensive Indian Credit Cards Registry\n * 159 Official Credit Card Offerings Across 27 Banks in India\n * Enriched with scraped card visuals, tariff schedules, and MITC.\n */`;

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
 * LIVE SCRAPE CREDIT CARD IMAGES — official issuer product pages first;
 * cards whose real image can't be found anywhere fall back to a generated
 * vector card face (network badge + bank name), rather than being left blank.
 */
export async function scrapeCreditCardImages() {
  console.log('----------------------------------------------------------');
  console.log(`Scraping Card Images for all ${creditCardsCatalog.length} Credit Cards...`);
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
    const existing = ['.png', '.jpg', '.jpeg', '.webp', '.svg']
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

  // Cards still missing a real image get a generated vector card face instead of staying blank.
  let generatedCount = 0;
  updatedCards = updatedCards.map(card => {
    if (card.imageUrl) return card;

    const fileName = `${card.bankCode}-${slugify(card.card)}.svg`;
    const svg = generateCreditCardSvg(card);
    fs.writeFileSync(path.join(CARDS_IMG_DIR, fileName), svg, 'utf8');
    const relPath = `assets/images/cards/${fileName}`;
    generatedCount++;
    console.log(`  ✓ [${card.bankCode.toUpperCase()}] ${card.card.slice(0, 32).padEnd(34)} -> ${relPath} (generated_vector_fallback)`);

    return { ...card, imageUrl: `/${relPath}`, imagePath: relPath };
  });

  // Update credit cards registries
  saveRegistry('credit-cards-register.json', updatedCards);
  writeCatalogFile(CARDS_CATALOG_PATH, CARDS_CATALOG_HEADER, { creditCardsCatalog: updatedCards });
  const real = updatedCards.length - generatedCount;
  console.log(`\n✓ Credit card images scraping completed: ${real}/${updatedCards.length} real images, ${generatedCount} generated vector fallbacks.\n`);

  return updatedCards;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  startFileLogging('Credit Card Images Scraper');
  scrapeCreditCardImages().then(() => {
    stopFileLogging();
    process.exit(0);
  }).catch(err => {
    console.error('Credit card images scraping error:', err);
    stopFileLogging();
    process.exit(1);
  });
}
