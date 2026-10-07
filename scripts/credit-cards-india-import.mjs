/**
 * Rate Radar - Credit Cards India Dataset Importer
 *
 * One-shot (re-runnable) importer that pulls the community-maintained,
 * MIT-licensed credit card dataset from:
 *   https://github.com/DrftingWood/credit_cards_india
 *
 * Each card is authored as an effective-dated YAML file
 * (data/cards/<issuer>/<slug>.yaml). This script fetches every card file,
 * flattens the currently-open (effective_until: null) fee/reward/benefit
 * records into Rate Radar's existing flat credit-card schema, and
 * overwrites scripts/data/credit-cards-registry.mjs — the same way the
 * other scrapers refresh their *-registry.mjs catalogs.
 *
 * Run: npm run import:credit-cards-india
 */

import path from 'node:path';
import { fileURLToPath } from 'node:url';
import yaml from 'js-yaml';
import { writeCatalogFile } from './data/_catalog-writer.mjs';
import { startFileLogging, stopFileLogging } from './logger.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CARDS_CATALOG_PATH = path.resolve(__dirname, 'data/credit-cards-registry.mjs');

const REPO = 'DrftingWood/credit_cards_india';
const BRANCH = 'main';
// jsdelivr's GitHub-mirroring data API is used instead of api.github.com's
// tree endpoint, which returns 403 in this environment (network policy).
const TREE_API_URL = `https://data.jsdelivr.com/v1/package/gh/${REPO}@${BRANCH}?structure=flat`;
const RAW_BASE_URL = `https://raw.githubusercontent.com/${REPO}/${BRANCH}/`;
const BATCH_SIZE = 12;

/**
 * Maps the dataset's issuer folder code to Rate Radar's internal bankCode +
 * display name. Where we already track the same bank under a different
 * code (asset folders / BANK_BRAND_PALETTES in data/bank-brand-palettes.mjs),
 * we reuse that code so logos/brand colors keep working automatically.
 * Issuers with no existing entry (onecard, slice, idbi) fall back to the
 * generic placeholder card graphic built into scrape-card-images.mjs.
 */
const ISSUER_MAP = {
  amex: { bankCode: 'amex', bankName: 'American Express' },
  au: { bankCode: 'au', bankName: 'AU Small Finance Bank' },
  axis: { bankCode: 'axis', bankName: 'Axis Bank' },
  bob: { bankCode: 'bob', bankName: 'Bank of Baroda' },
  boi: { bankCode: 'boi', bankName: 'Bank of India' },
  canara: { bankCode: 'canbk', bankName: 'Canara Bank' },
  equitas: { bankCode: 'equitas', bankName: 'Equitas Small Finance Bank' },
  federal: { bankCode: 'federal', bankName: 'Federal Bank' },
  hdfc: { bankCode: 'hdfc', bankName: 'HDFC Bank' },
  hsbc: { bankCode: 'hsbc', bankName: 'HSBC India' },
  icici: { bankCode: 'icici', bankName: 'ICICI Bank' },
  idbi: { bankCode: 'idbi', bankName: 'IDBI Bank' },
  'idfc-first': { bankCode: 'idfc', bankName: 'IDFC FIRST Bank' },
  indusind: { bankCode: 'indusind', bankName: 'IndusInd Bank' },
  kotak: { bankCode: 'kotak', bankName: 'Kotak Mahindra Bank' },
  kvb: { bankCode: 'kvb', bankName: 'Karur Vysya Bank' },
  onecard: { bankCode: 'onecard', bankName: 'OneCard (FPL Technologies)' },
  pnb: { bankCode: 'pnb', bankName: 'Punjab National Bank' },
  rbl: { bankCode: 'rbl', bankName: 'RBL Bank' },
  sbi: { bankCode: 'sbi', bankName: 'SBI Card' },
  slice: { bankCode: 'slice', bankName: 'Slice' },
  'south-indian': { bankCode: 'sib', bankName: 'South Indian Bank' },
  'standard-chartered': { bankCode: 'scb', bankName: 'Standard Chartered Bank' },
  union: { bankCode: 'ubi', bankName: 'Union Bank of India' },
  yes: { bankCode: 'yes', bankName: 'YES Bank' }
};

const TIER_LABELS = {
  entry: 'Entry Level',
  mid: 'Mid-Tier',
  premium: 'Premium',
  'super-premium': 'Super-Premium',
  'invite-only': 'Invite-Only'
};

function titleCase(str) {
  return String(str || '')
    .split(/[\s-]+/)
    .filter(Boolean)
    .map(w => w[0].toUpperCase() + w.slice(1))
    .join(' ');
}

/** Picks the currently-active record (effective_until: null) from a dated-records array, else the most recent. */
function currentRecord(records) {
  if (!Array.isArray(records) || records.length === 0) return null;
  const open = records.find(r => r.effective_until === null || r.effective_until === undefined);
  if (open) return open;
  return [...records].sort((a, b) => String(b.effective_from).localeCompare(String(a.effective_from)))[0];
}

function formatInr(amount) {
  if (amount === null || amount === undefined) return null;
  return `₹${Number(amount).toLocaleString('en-IN')}`;
}

function buildCategory(card) {
  const tierLabel = TIER_LABELS[card.tier] || titleCase(card.tier) || 'Standard';
  const tags = (Array.isArray(card.metadata && card.metadata.tags) ? card.metadata.tags : [])
    .filter(t => t !== card.tier);
  if (card.co_brand && card.co_brand.category) {
    return `${tierLabel} / ${titleCase(card.co_brand.category)}`;
  }
  if (tags.length > 0) {
    return `${tierLabel} / ${tags.slice(0, 2).map(titleCase).join(' & ')}`;
  }
  return tierLabel;
}

function buildJoiningFee(fee) {
  if (!fee) return 'Not Disclosed';
  if (!fee.joining_fee_inr) return '₹0 (Lifetime Free)';
  return `${formatInr(fee.joining_fee_inr)}${fee.gst_applicable ? ' + GST' : ''}`;
}

function buildAnnualFee(fee) {
  if (!fee) return 'Not Disclosed';
  const base = !fee.annual_fee_inr
    ? '₹0 (Lifetime Free)'
    : `${formatInr(fee.annual_fee_inr)}${fee.gst_applicable ? ' + GST' : ''}`;
  if (fee.fee_waiver && fee.fee_waiver.spend_inr) {
    return `${base} (Waived on ${formatInr(fee.fee_waiver.spend_inr)} ${fee.fee_waiver.cycle || 'annual'} spend)`;
  }
  return base;
}

function buildWelcomeBenefit(benefit) {
  const welcome = benefit && Array.isArray(benefit.welcome) ? benefit.welcome[0] : null;
  return (welcome && welcome.benefit) || 'Not Applicable';
}

function buildRewardsSummary(reward) {
  if (!reward || !reward.base) return 'Not Disclosed';
  const unit = reward.currency_name || reward.currency || 'points';
  const parts = [`${reward.base.rate} ${unit} per ₹${reward.base.per_inr}`];
  const accelerators = Array.isArray(reward.accelerated) ? reward.accelerated.slice(0, 2) : [];
  for (const acc of accelerators) {
    const rate = acc.effective_rate || acc.multiplier;
    if (rate) parts.push(`${rate}X on ${titleCase((acc.category || '').replace(/-/g, ' '))}`);
  }
  return parts.join('; ');
}

/** Formats one lounge_access.domestic/international block (visits_per_cycle can be a number or "unlimited"). */
function formatLoungeSection(section) {
  if (!section || section.visits_per_cycle === undefined || section.visits_per_cycle === null) return null;
  const visits = section.visits_per_cycle === 'unlimited' ? 'Unlimited' : section.visits_per_cycle;
  let text = `${visits} visits/${section.cycle || 'year'}`;
  if (section.spend_threshold_inr) {
    text += ` (gated on ${formatInr(section.spend_threshold_inr)}/${section.spend_threshold_cycle || section.cycle || 'cycle'} spend)`;
  }
  return text;
}

function buildLoungeAccess(benefit) {
  const lounge = benefit && benefit.lounge_access;
  if (!lounge) return 'Not Applicable';
  const bits = [];
  const dom = formatLoungeSection(lounge.domestic);
  const intl = formatLoungeSection(lounge.international);
  if (dom) bits.push(`Domestic: ${dom}`);
  if (intl) bits.push(`International: ${intl}`);
  return bits.length > 0 ? bits.join(' + ') : 'Complimentary Lounge Access';
}

function buildCoBrand(coBrand) {
  if (!coBrand) return null;
  return {
    partner: coBrand.partner || null,
    category: coBrand.category || null,
    partnerWebsite: coBrand.partner_website || null
  };
}

function buildEligibility(e) {
  if (!e) return null;
  return {
    minAge: e.min_age ?? null,
    maxAge: e.max_age ?? null,
    incomeSalariedInr: (e.income_inr_annual && e.income_inr_annual.salaried) ?? null,
    incomeSelfEmployedInr: (e.income_inr_annual && e.income_inr_annual.self_employed) ?? null,
    creditScoreMin: e.credit_score_min ?? null,
    residency: e.residency || null,
    notes: e.notes || null
  };
}

function buildFeesDetail(fee) {
  if (!fee) return null;
  return {
    cashAdvanceFeePct: (fee.cash_advance_fee && fee.cash_advance_fee.pct) ?? null,
    cashAdvanceFeeMinInr: (fee.cash_advance_fee && fee.cash_advance_fee.min_inr) ?? null,
    latePaymentSlabs: Array.isArray(fee.late_payment_slabs)
      ? fee.late_payment_slabs.map(s => ({ upToInr: s.up_to_inr, feeInr: s.fee_inr }))
      : [],
    gstApplicable: !!fee.gst_applicable
  };
}

function buildRedemptionOptions(reward) {
  if (!reward || !Array.isArray(reward.redemption)) return [];
  return reward.redemption.map(r => ({
    type: r.type || null,
    program: r.program || null,
    rateInrPerUnit: r.rate_inr_per_unit ?? null,
    minUnits: r.min_units ?? null,
    ratio: r.ratio || null,
    transferPartners: Array.isArray(r.transfer_partners)
      ? r.transfer_partners.map(tp => ({
        partnerName: tp.partner_name || null,
        partnerType: tp.partner_type || null,
        transferRatio: tp.transfer_ratio || null,
        notes: tp.notes || null
      }))
      : []
  }));
}

function buildRewardsDetail(reward) {
  if (!reward) return null;
  return {
    exclusions: reward.exclusions || [],
    mccExclusions: reward.mcc_exclusions || [],
    rewardCap: reward.reward_cap ? {
      maxUnits: reward.reward_cap.max_units ?? null,
      capUnit: reward.reward_cap.cap_unit || null,
      cycle: reward.reward_cap.cycle || null
    } : null,
    cappingRules: reward.capping_rules || [],
    redemptionOptions: buildRedemptionOptions(reward),
    redemptionFloorValueInr: reward.redemption_floor_value_inr ?? null,
    redemptionCeilingValueInr: reward.redemption_ceiling_value_inr ?? null,
    loyaltyProgram: reward.loyalty_program || null
  };
}

function buildBenefitsDetail(benefit) {
  if (!benefit) return null;
  const fsw = benefit.fuel_surcharge_waiver;
  return {
    milestones: Array.isArray(benefit.milestones) ? benefit.milestones.map(m => ({
      spendInr: m.spend_inr ?? null,
      cycle: m.cycle || null,
      benefit: m.benefit || null,
      valueInr: m.value_inr ?? null
    })) : [],
    fuelSurchargeWaiver: fsw ? {
      pct: fsw.pct ?? null,
      minTxnInr: fsw.min_txn_inr ?? null,
      maxTxnInr: fsw.max_txn_inr ?? null,
      capPerCycleInr: fsw.cap_per_cycle_inr ?? null,
      cycle: fsw.cycle || null
    } : null,
    insurance: Array.isArray(benefit.insurance) ? benefit.insurance.map(i => ({
      type: i.type || null,
      sumInsuredInr: i.sum_insured_inr ?? null
    })) : [],
    golf: benefit.golf ? {
      roundsPerCycle: benefit.golf.rounds_per_cycle ?? null,
      cycle: benefit.golf.cycle || null,
      lessonsPerCycle: benefit.golf.lessons_per_cycle ?? null
    } : null,
    dining: benefit.dining ? {
      program: benefit.dining.program || null,
      discountPct: benefit.dining.discount_pct ?? null
    } : null,
    movies: benefit.movies ? {
      type: benefit.movies.type || null,
      partner: benefit.movies.partner || null,
      maxPerCycle: benefit.movies.max_per_cycle ?? null,
      cycle: benefit.movies.cycle || null,
      capInr: benefit.movies.cap_inr ?? null
    } : null,
    concierge: !!benefit.concierge,
    other: Array.isArray(benefit.other) ? benefit.other.map(o => ({
      name: o.name || null,
      description: o.description || null,
      valueInr: o.value_inr ?? null
    })) : []
  };
}

function buildMetadata(m) {
  if (!m) return null;
  return { lastVerifiedOn: m.last_verified_on || null, tags: m.tags || [] };
}

/** Prefers the fee record's source (most consistently populated), falling back to reward/benefit. */
function buildSource(fee, reward, benefit) {
  const s = (fee && fee.source) || (reward && reward.source) || (benefit && benefit.source);
  if (!s) return null;
  return { url: s.url || null, retrievedOn: s.retrieved_on || null };
}

function mapCardToCatalogEntry(parsed) {
  const issuer = ISSUER_MAP[parsed.issuer];
  if (!issuer) return null;

  const fee = currentRecord(parsed.fees);
  const reward = currentRecord(parsed.rewards);
  const benefit = currentRecord(parsed.benefits);
  const monthlyPct = fee && fee.finance_charge_monthly_pct;
  const application = parsed.application || {};

  return {
    bank: issuer.bankName,
    bankCode: issuer.bankCode,
    card: parsed.name,
    category: buildCategory(parsed),
    joiningFee: buildJoiningFee(fee),
    annualFee: buildAnnualFee(fee),
    welcomeBenefit: buildWelcomeBenefit(benefit),
    rewards: buildRewardsSummary(reward),
    loungeAccess: buildLoungeAccess(benefit),
    forexMarkup: fee && fee.forex_markup_pct !== undefined ? `${fee.forex_markup_pct.toFixed(2)}%` : 'Not Disclosed',
    monthlyInterest: monthlyPct ? `${monthlyPct}% p.m. (${(monthlyPct * 12).toFixed(2)}% p.a.)` : 'Not Disclosed',
    productUrl: application.apply_url || '',
    status: 'verified',
    imageUrl: '',
    imagePath: '',
    network: parsed.network || null,
    networkTier: parsed.network_tier || null,
    cardType: parsed.card_type || 'credit',
    coBrand: buildCoBrand(parsed.co_brand),
    launchedOn: parsed.launched_on || null,
    discontinuedOn: parsed.discontinued_on || null,
    preApprovalCheckUrl: application.pre_approval_check_url || null,
    replacesCard: application.replaces_card || null,
    eligibility: buildEligibility(parsed.eligibility),
    feesDetail: buildFeesDetail(fee),
    rewardsDetail: buildRewardsDetail(reward),
    benefitsDetail: buildBenefitsDetail(benefit),
    metadata: buildMetadata(parsed.metadata),
    source: buildSource(fee, reward, benefit)
  };
}

async function fetchJson(url) {
  const res = await fetch(url, { headers: { 'User-Agent': 'rate-radar-importer' } });
  if (!res.ok) throw new Error(`HTTP ${res.status} fetching ${url}`);
  return res.json();
}

async function fetchText(url) {
  const res = await fetch(url, { headers: { 'User-Agent': 'rate-radar-importer' } });
  if (!res.ok) throw new Error(`HTTP ${res.status} fetching ${url}`);
  return res.text();
}

export async function runCreditCardsIndiaImport() {
  console.log('==========================================================');
  console.log(' RATE RADAR - CREDIT CARDS INDIA DATASET IMPORTER         ');
  console.log(` Source: github.com/${REPO}                               `);
  console.log('==========================================================\n');

  console.log('-> Fetching repository file tree...');
  const tree = await fetchJson(TREE_API_URL);
  const cardPaths = (tree.files || [])
    .filter(entry => /^\/data\/cards\/.+\.ya?ml$/.test(entry.name))
    .map(entry => entry.name.replace(/^\//, ''));

  console.log(`✓ Found ${cardPaths.length} card YAML files across ${new Set(cardPaths.map(p => p.split('/')[2])).size} issuers\n`);

  console.log('-> Downloading & parsing card files in batches...');
  const parsedCards = [];
  const skipped = { unmappedIssuer: 0, inactive: 0, parseError: 0 };

  for (let i = 0; i < cardPaths.length; i += BATCH_SIZE) {
    const chunk = cardPaths.slice(i, i + BATCH_SIZE);
    const chunkResults = await Promise.all(chunk.map(async (relPath) => {
      try {
        const raw = await fetchText(RAW_BASE_URL + relPath);
        // CORE_SCHEMA avoids js-yaml's DEFAULT_SCHEMA auto-parsing unquoted
        // dates (e.g. launched_on, retrieved_on) into JS Date objects.
        const parsed = yaml.load(raw, { schema: yaml.CORE_SCHEMA });
        return { relPath, parsed };
      } catch (err) {
        console.log(`  ! Failed: ${relPath} (${err.message})`);
        skipped.parseError++;
        return null;
      }
    }));

    for (const item of chunkResults) {
      if (!item) continue;
      const { parsed } = item;
      if (parsed.status !== 'active' && parsed.status !== 'invite-only') {
        skipped.inactive++;
        continue;
      }
      const entry = mapCardToCatalogEntry(parsed);
      if (!entry) {
        skipped.unmappedIssuer++;
        continue;
      }
      parsedCards.push(entry);
    }
    console.log(`  ... processed ${Math.min(i + BATCH_SIZE, cardPaths.length)}/${cardPaths.length}`);
  }

  parsedCards.sort((a, b) => a.bank.localeCompare(b.bank) || a.card.localeCompare(b.card));

  const issuerCount = new Set(parsedCards.map(c => c.bankCode)).size;
  console.log(`\n✓ Imported ${parsedCards.length} active/invite-only cards across ${issuerCount} issuers`);
  console.log(`  Skipped: ${skipped.inactive} discontinued/on-hold, ${skipped.unmappedIssuer} unmapped issuer, ${skipped.parseError} parse errors`);

  const header = `/**\n * Comprehensive Indian Credit Cards Registry\n * ${parsedCards.length} Official Credit Card Offerings Across ${issuerCount} Banks in India\n * Sourced from github.com/${REPO} (MIT licensed), flattened to current\n * (effective_until: null) fee/reward/benefit records. Run\n * \`npm run import:credit-cards-india\` to refresh.\n */`;

  writeCatalogFile(CARDS_CATALOG_PATH, header, { creditCardsCatalog: parsedCards });
  console.log(`\n✓ Wrote ${parsedCards.length} cards to scripts/data/credit-cards-registry.mjs`);
  console.log('  Run `npm run scrape:credit` then `npm run scrape:images` to verify portals and generate card art.\n');

  return { cards: parsedCards };
}

// Allow direct CLI execution
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  startFileLogging('Credit Cards India Dataset Import');
  runCreditCardsIndiaImport().then(() => {
    console.log('✓ Credit cards India dataset import finished successfully.');
    stopFileLogging();
    process.exit(0);
  }).catch(err => {
    console.error('Error during credit cards India dataset import:', err);
    stopFileLogging();
    process.exit(1);
  });
}
