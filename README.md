# RATE RADAR

> **A Lightweight, 100% Static Financial Rates & Market Dashboard for India**

Rate Radar is a fast, accessible, open-source static website that tracks central banking rates, retail lending rates, deposit yields, precious metals, currencies, energy benchmarks, and equity markets in India.

The project is designed to run completely on **GitHub Pages** (or any static web host, S3, Cloudflare Pages, or Netlify) as a **pure static site**. GitHub Pages hosts and serves only the pre-scraped, verified datasets with **zero server-side scraping in CI**.

---

## Features

- **Rate Radar**: RBI Policy Rates (Repo, SDF, MSF, Bank Rate, CRR, SLR), Home Loan rates comparison across major banks, Fixed Deposit (FD) rates, and Government Small Savings Schemes (PPF, SSA, SCSS, NSC, KVP, MIS).
- **Comprehensive Interest Tables**: Granular deposit and lending interest tables across 53 Scheduled Commercial Banks in India (Fixed Deposits, Recurring Deposits, Savings Account tiers, and MCLR/EBLR benchmarks).
- **Market Radar**: NIFTY 50, NIFTY BANK, sector indices, P/E and P/B ratios.
- **Currencies & FX**: Major global currency pairs against INR sourced from official exchange rate fixings.
- **Credit Radar**: Comprehensive credit card tariff directory across 27 issuers — fees, rewards, lounge access, and forex markup.
- **Financial Calendar**: NSE/BSE trading holidays and RBI Monetary Policy Committee meeting calendar.
- **Client-Side Global Search**: Instant spotlight search (`⌘K` / `Ctrl+K`) across all rates, banks, cards, and schemes.
- **Stale Data Detection**: Dynamic client-side indicator flagging whether data is fresh (updated today), recent, or active official schedules.

---

## 1. Zero-Backend Static Architecture

Rate Radar uses **only client-side web technologies**:
- **HTML5**: Semantic, accessible markup with OpenGraph, Twitter cards, and Schema.org structured data.
- **CSS3**: Lightweight modern styling with clean typography, tabular figures (`font-variant-numeric: tabular-nums`), responsive cards, and zero heavy frameworks.
- **Vanilla JavaScript**: Pure ES modules and utility scripts (`site-config.js`, `common.js`, `navigation.js`, `search.js`, `tables.js`, `dashboard.js`).
- **Static JSON Datasets**: Canonical datasets located in `/data/registries/` storing structured financial figures and metadata.
- **`.nojekyll`**: Disables Jekyll processing on GitHub Pages, ensuring all directories, JSON files, and assets are served directly.

**In GitHub Pages hosting, there is NO dynamic backend:**
- No Node.js / Express server required in production.
- No database dependencies.
- No automated scraping in GitHub Actions (preventing IP blocks, timeouts, and CI failures).
- Pre-scraped JSON data is served statically with instant cache-friendly performance.

---

## 2. Directory Structure

```text
/
├── index.html                     # Main dashboard that loads & renders registries client-side
├── 404.html                       # Fallback 404 page
├── .nojekyll                      # Prevents Jekyll from interfering with static files on GitHub Pages
├── favicon.svg                    # SVG Brand favicon
├── robots.txt                     # Crawler directives
├── sitemap.xml                    # Sitemap index
│
├── data/
│   └── registries/                # Canonical JSON datasets served to the browser
│       ├── bank-register.json             # 53 Scheduled Commercial Banks directory
│       ├── interest-rates-register.json   # Full deposit & lending interest tables
│       ├── fd-rates-register.json         # Granular 1,000+ FD tenor tranches
│       ├── home-loan-register.json        # Home loan rates & benchmark comparisons
│       ├── credit-cards-register.json     # 290+ Credit cards with tariffs & perks
│       ├── rbi-rates-register.json        # RBI monetary policy rates & reserve ratios
│       ├── forex-rates-register.json      # Global currency pairs vs INR
│       ├── government-schemes-register.json # PPF, SSA, SCSS, NSC, KVP savings schemes
│       ├── market-indices-register.json   # Nifty 50, Sensex, Bank Nifty indices
│       ├── calendars-register.json        # NSE trading holidays & RBI MPC schedule
│       └── sources-register.json          # Official provenance & monitoring sources
│
├── scripts/
│   ├── interest-tables-scrape.mjs # Dedicated bank interest tables & deposit scraper
│   ├── banks-scrape.mjs           # Commercial bank directory scraper
│   ├── credit-scrape.mjs          # Credit card tariff scraper
│   ├── forex-scrape.mjs           # Foreign exchange rates scraper
│   ├── government-scrape.mjs      # Government small savings schemes scraper
│   ├── market-scrape.mjs          # Equity market indices scraper
│   ├── rbi-scrape.mjs             # RBI monetary policy rates scraper
│   ├── calendar-scrape.mjs        # NSE trading holidays & RBI MPC calendar scraper
│   ├── scrape-official.mjs        # Sources & provenance directory generator
│   ├── update-data.mjs            # Master local ingestion runner
│   ├── logger.mjs                 # Shared local file logger (tees to logs/scrape.log)
│   └── data/                      # Static seed/fallback MJS registries (e.g. interest-rates-registry.mjs)
│
├── assets/
│   ├── css/ (style.css, responsive.css, components.css)
│   ├── js/  (site-config.js, common.js, navigation.js, search.js, tables.js, dashboard.js)
│   └── images/
│       ├── banks/                 # Bank logos and symbols (SVG / PNG)
│       └── cards/                 # Credit card artwork (WebP / PNG)
│
├── logs/
│   └── scrape.log                 # Local scrape history (gitignored)
│
└── .github/
    └── workflows/
        └── deploy.yml             # GitHub Actions workflow: validates JSON & deploys to Pages
```

---

## 3. GitHub Pages Deployment (Hosting Only Scraped Data)

The GitHub Pages site is hosted **purely as a static deployment**. GitHub Actions does **not** scrape external websites; it simply validates the existing JSON datasets and publishes them.

### Step-by-Step Setup:

1. **Push your code to GitHub**:
   ```bash
   git add .
   git commit -m "Host pre-scraped Rate Radar data on GitHub Pages"
   git push origin main
   ```

2. **Configure GitHub Pages in your repository settings**:
   - Go to your repository on GitHub: `https://github.com/<your-username>/rate-radar`.
   - Click **Settings** (top tab).
   - In the left sidebar, click **Pages**.
   - Under **Build and deployment** > **Source**, select **GitHub Actions** (do NOT choose *Deploy from a branch*).

3. **Deployment**:
   - Every push to `main` automatically triggers `.github/workflows/deploy.yml`.
   - The workflow:
     1. Validates all JSON files in `data/registries/` for syntax and integrity.
     2. Validates `index.html` and `404.html`.
     3. Ensures `.nojekyll` is present.
     4. Deploys the static site to GitHub Pages via `actions/deploy-pages`.
   - Your dashboard will be live at: `https://<your-username>.github.io/rate-radar/`.

---

## 4. How to Scrape and Update Data (Local Ingestion)

Scraping is run **locally on your development machine** (offline/manual ingestion). This prevents issues that occur in CI environments (such as bank Cloudflare/Akamai bot blocking, rate limits, or network timeouts).

### Prerequisites:
- Node.js 20 or higher
- npm installed

### 1. Install Dependencies:
```bash
npm install
```

### 2. Run All Scrapers (Full Pipeline):
To refresh all datasets in one command:
```bash
npm run update-data
# Or: node scripts/update-data.mjs
```
This script sequentially updates:
1. Commercial banks directory & ALCO filings
2. Master interest tables (FD, RD, Savings, MCLR/EBLR) across 53 banks
3. Credit card tariffs, reward rates & airport lounge quotas
4. Bank logo and credit card imagery
5. Foreign exchange rates (USD, EUR, GBP, JPY, etc.)
6. Ministry of Finance Government Small Savings Schemes (PPF, SSA, SCSS, NSC)
7. Equity market indices (Nifty, Sensex)
8. RBI Monetary Policy Committee benchmark rates
9. Financial calendar & trading holidays
10. Sources and provenance directory

### 3. Run Individual Scrapers:
You can also refresh specific categories without running the entire suite:

| Data Category | npm Command | Direct Node Command | Output File |
| :--- | :--- | :--- | :--- |
| **All Bank Interest Tables** | `npm run scrape:interest-tables` | `node scripts/interest-tables-scrape.mjs` | `data/registries/interest-rates-register.json` & `fd-rates-register.json` |
| **Banks Directory** | `npm run scrape:banks` | `node scripts/banks-scrape.mjs` | `data/registries/bank-register.json` |
| **RBI Monetary Rates** | `npm run scrape:rbi` | `node scripts/rbi-scrape.mjs` | `data/registries/rbi-rates-register.json` |
| **Forex Rates** | `npm run scrape:forex` | `node scripts/forex-scrape.mjs` | `data/registries/forex-rates-register.json` |
| **Government Schemes** | `npm run scrape:government` | `node scripts/government-scrape.mjs` | `data/registries/government-schemes-register.json` |
| **Market Indices** | `npm run scrape:market` | `node scripts/market-scrape.mjs` | `data/registries/market-indices-register.json` |
| **Credit Card Tariffs** | `npm run scrape:credit` | `node scripts/credit-scrape.mjs` | `data/registries/credit-cards-register.json` |
| **Financial Calendar** | `npm run scrape:calendar` | `node scripts/calendar-scrape.mjs` | `data/registries/calendars-register.json` |
| **Official Sources** | `npm run scrape:official` | `node scripts/scrape-official.mjs` | `data/registries/sources-register.json` |
| **Bank/Card Images** | `npm run scrape:images` | `node scripts/scrape-images.mjs` | `assets/images/` |

### 4. Publish Updated Data to GitHub Pages:
Once you have run the scraper locally and verified the output:
```bash
# Check updated files
git status

# Stage the updated data and fallback catalogs
git add data/registries/ scripts/data/

# Commit and push
git commit -m "chore(data): sync latest financial rates and interest tables"
git push origin main
```
The push will trigger the GitHub Pages deployment action, publishing your updated rates to the live site within a few seconds.

### 5. Inspecting Scraper Logs:
Every scraper run appends detailed timestamped logs to `logs/scrape.log`. You can inspect the logs locally:
```bash
tail -n 100 logs/scrape.log
```

---

## 5. How to Use Rate Radar

### A. Using the Web Dashboard (For End Users)

1. **Viewing Rates by Category**:
   - Use the sticky navigation bar or quick-jump buttons to jump directly to **RBI Rates**, **Forex**, **Markets**, **FD Rates**, **Home Loans**, **Govt Schemes**, **Credit Cards**, **Banks**, or **Calendar**.
2. **Instant Global Search (`Ctrl + K` / `⌘K`)**:
   - Press `Ctrl + K` (Windows/Linux) or `⌘K` (macOS) to open the search modal.
   - Type any keyword (e.g., "SBI", "7.50%", "Sukanya", "Airport Lounge", "Repo") to see matching records across all categories.
3. **Table Sorting & Filtering**:
   - Click any column header with an arrow (e.g., **Current Rate**, **Bank Name**, **General Public**, **Senior Citizens**) to sort ascending or descending.
   - Use the live filter input at the top of the dashboard to filter rows across all tables simultaneously in real time.
4. **Inspecting Interest Rates**:
   - The **Fixed Deposit Rates** table displays granular tenor brackets (e.g., 7–14 days, 1 year, 400-day specials, 5-year tax savers) with respective general public and senior citizen rates.

---

### B. Consuming as a Free Static API (For Developers)

Because all datasets are stored as clean, structured, typed JSON under `data/registries/`, any web app, mobile app, or backend service can consume Rate Radar directly as a free REST API:

#### Dataset Endpoints:
```text
https://<your-username>.github.io/rate-radar/data/registries/interest-rates-register.json
https://<your-username>.github.io/rate-radar/data/registries/fd-rates-register.json
https://<your-username>.github.io/rate-radar/data/registries/bank-register.json
https://<your-username>.github.io/rate-radar/data/registries/rbi-rates-register.json
https://<your-username>.github.io/rate-radar/data/registries/forex-rates-register.json
https://<your-username>.github.io/rate-radar/data/registries/government-schemes-register.json
https://<your-username>.github.io/rate-radar/data/registries/credit-cards-register.json
https://<your-username>.github.io/rate-radar/data/registries/home-loan-register.json
https://<your-username>.github.io/rate-radar/data/registries/market-indices-register.json
https://<your-username>.github.io/rate-radar/data/registries/calendars-register.json
https://<your-username>.github.io/rate-radar/data/registries/sources-register.json
```

#### Code Examples:

##### JavaScript / TypeScript (fetch):
```javascript
// Fetch latest interest rate tables across all 53 banks
const response = await fetch("https://<your-username>.github.io/rate-radar/data/registries/interest-rates-register.json");
const banksInterestTables = await response.json();

// Find SBI interest table
const sbi = banksInterestTables.find(b => b.shortName === "SBI");
console.log("SBI FD Tranches:", sbi.depositTables.fixedDeposit);
```

##### Python:
```python
import requests

url = "https://<your-username>.github.io/rate-radar/data/registries/rbi-rates-register.json"
rbi_rates = requests.get(url).json()

for rate in rbi_rates:
    print(f"{rate['name']}: {rate['currentRate']}% (Effective: {rate['effectiveDate']})")
```

##### cURL / CLI:
```bash
curl -s https://<your-username>.github.io/rate-radar/data/registries/rbi-rates-register.json | jq .
```

---

## 6. Official Data Transparency & Compliance

- **Software License**: The application source code is licensed under the permissive **MIT License**.
- **Data Provenance**: All data records in `/data/registries/` are synchronized with official regulatory benchmarks and institutional schedules. Rate Radar transparently attributes all data to the respective authority in `sources-register.json`.
- **Third-Party Trademarks**: All bank names, index names (Nifty 50, Sensex), and corporate symbols are trademarks of their respective owners and are used strictly for informational identification and nominative fair use.

---

## 7. Financial Disclaimer

> **Rate Radar provides financial information for informational purposes only. Rates, prices, fees, and eligibility criteria can change. Always verify important rates on the official institutional portal before making financial decisions.**
