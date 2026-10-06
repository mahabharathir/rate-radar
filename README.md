# RATE RADAR

> **A Lightweight, 100% Static Financial Rates & Market Dashboard for India**

Rate Radar is a fast, accessible, open-source static website that tracks central banking rates, retail lending rates, deposit yields, precious metals, currencies, energy benchmarks, and equity markets in India.

The project is designed to run completely on **GitHub Pages** (or any static web host, S3, Cloudflare Pages, or Netlify) without requiring Node.js servers, databases, backend runtimes, paid APIs, or server-side scraping.

---

## Features

- **Rate Radar**: RBI Policy Rates (Repo, SDF, MSF, Bank Rate, CRR, SLR), Home Loan rates comparison across major banks, Fixed Deposit (FD) rates, and Government Small Savings Schemes (PPF, SSA, SCSS, NSC, KVP, MIS).
- **Market Radar**: NIFTY 50, NIFTY BANK, sector indices, P/E and P/B ratios.
- **Currencies & FX**: Major global currency pairs against INR sourced from a live exchange rate feed.
- **Credit Radar**: Comprehensive credit card tariff directory across 27 issuers — fees, rewards, lounge access, and forex markup.
- **Financial Calendar**: NSE/BSE trading holidays and RBI Monetary Policy Committee meeting calendar.
- **Client-Side Global Search**: Instant spotlight search (`⌘K` / `Ctrl+K`) across all rates, banks, and schemes.
- **Stale Data Detection**: Dynamic client-side indicator flagging whether data is fresh (updated today), recent, or potentially outdated.

---

## 1. Zero Backend Architecture

Rate Radar uses **only**:
- **HTML5**: Semantic, accessible markup with OpenGraph, Twitter cards, and Schema.org structured data.
- **CSS3**: Lightweight modern styling with clean typography, tabular figures (`font-variant-numeric: tabular-nums`), responsive cards, and zero heavy frameworks.
- **Vanilla JavaScript**: Pure ES modules and utility scripts (`common.js`, `navigation.js`, `search.js`, `tables.js`, `dashboard.js`).
- **JSON**: Static datasets located in `/data/` storing financial figures and metadata.

**No backend is required or utilized:**
- No Node.js / Express backend
- No PostgreSQL / MySQL databases
- No server-side rendering (SSR)
- No user authentication or tracking
- No scraping libraries (No Puppeteer, Playwright, Cheerio, or Selenium)
- No private API keys or credentials

---

## 2. Directory Structure (Single-Page Architecture)

```text
/
├── index.html                     # Standalone dashboard that fetches & renders registries client-side
│
├── data/
│   └── registries/                # Canonical JSON catalogs, one file per category
│       ├── bank-register.json
│       ├── fd-rates-register.json
│       ├── home-loan-register.json
│       ├── credit-cards-register.json
│       ├── rbi-rates-register.json
│       ├── forex-rates-register.json
│       ├── government-schemes-register.json
│       ├── market-indices-register.json
│       ├── calendars-register.json
│       └── sources-register.json
│
├── scripts/
│   ├── banks-scrape.mjs           # Commercial bank FD & home loan rate scraper
│   ├── credit-scrape.mjs          # Credit card tariff scraper
│   ├── forex-scrape.mjs           # Foreign exchange rates scraper
│   ├── government-scrape.mjs      # Government small savings schemes scraper
│   ├── market-scrape.mjs          # Equity market indices scraper
│   ├── rbi-scrape.mjs             # RBI monetary policy rates scraper
│   ├── calendar-scrape.mjs        # NSE trading holidays & RBI MPC calendar scraper
│   ├── scrape-official.mjs        # Sources & provenance directory generator
│   ├── update-data.mjs            # Entrypoint utility for local & CI updates
│   ├── logger.mjs                 # Shared file logger (tees console output to logs/scrape.log)
│   └── data/                      # Static seed/fallback catalogs used by the scrapers (mjs)
│
├── logs/
│   └── scrape.log                 # Appended log of every scraper run (gitignored, local-only)
│
├── assets/
│   ├── css/ (style.css, responsive.css, components.css)
│   ├── js/  (site-config.js, common.js, navigation.js, search.js, tables.js, dashboard.js)
│   └── icons/
│
├── robots.txt
├── sitemap.xml
├── 404.html
├── favicon.svg
├── README.md
├── LICENSE
├── CONTRIBUTING.md
├── SECURITY.md
├── CODE_OF_CONDUCT.md
├── CHANGELOG.md
└── .github/workflows/
    ├── data-sync.yml              # Daily automated official data scraper (06:30 IST)
    └── deploy.yml                 # Automated GitHub Pages static deploy
```

---

## 3. GitHub Pages Deployment Instructions

Rate Radar is designed to be deployed directly through GitHub Pages in minutes without running any build step.

### Step-by-Step Setup:

1. **Create a GitHub Repository**:
   - Go to [GitHub](https://github.com/new) and create a new repository (e.g., `rate-radar`).
2. **Push Project Files**:
   - Clone the repo locally or push your files:
     ```bash
     git add .
     git commit -m "Initial Rate Radar static release"
     git branch -M main
     git remote add origin https://github.com/<your-username>/rate-radar.git
     git push -u origin main
     ```
3. **Enable GitHub Pages**:
   - Open your repository settings on GitHub: **Settings** &rarr; **Pages**.
   - Under **Build and deployment** &rarr; **Source**, select **GitHub Actions** (the `.github/workflows/deploy.yml` workflow will automatically validate all JSON and HTML files and deploy).
   - Alternatively, choose **Deploy from a branch** and select `main` / `root`.
4. **Custom Domain (Optional)**:
   - In GitHub Pages settings, enter your custom domain (e.g., `rates.example.com`).
   - Add a CNAME record in your DNS provider pointing to `<your-username>.github.io`.

---

## 4. Base Path Configuration (`site-config.js`)

To ensure internal navigation links and JSON fetches work correctly both on:
1. Subpath repository deployments (`https://<username>.github.io/rate-radar/`)
2. Root custom domains (`https://rates.example.com/`)

The application defines a single configuration file in `assets/js/site-config.js`:

```javascript
const SITE_CONFIG = {
  siteName: "Rate Radar",
  // If hosted at username.github.io/rate-radar/, auto-detected or set to:
  basePath: "", // Auto-detects on github.io or specify "/rate-radar"
  canonicalUrl: "https://rateradar.org"
};
```

All internal navigation uses the `getUrl(path)` helper and relative paths, guaranteeing zero broken links.

---

## 5. Official Data Scraper & Ingestion Pipeline

Rate Radar includes a complete data scraping and ingestion engine in `scripts/scrape-official.mjs` (executed via `scripts/update-data.mjs` or `npm run update-data`).

### Where Data is Scraped From:
| Category | Official Source / Regulatory Body | Official Portal | Ingestion Frequency |
| :--- | :--- | :--- | :--- |
| **RBI Policy Rates** | Reserve Bank of India (Monetary Policy Department) | [rbi.org.in](https://www.rbi.org.in) | Bi-monthly (MPC Resolutions) |
| **Government Schemes** | Ministry of Finance (DEA) & National Savings Institute | [dea.gov.in](https://dea.gov.in) | Quarterly Gazette Orders |
| **Bullion (Gold & Silver)** | India Bullion & Jewellers Association (IBJA) | [ibjarates.org](https://ibjarates.org) | Twice Daily (12:00 & 17:00 IST) |
| **Currency & Forex** | Financial Benchmarks India (FBIL) & Interbank Live Feeds | [fbil.org.in](https://www.fbil.org.in) | Daily at 13:30 IST & Live API |
| **Retail Fuel (Petrol/Diesel)** | Indian Oil Corporation Ltd (IOCL) / PPAC | [iocl.com](https://iocl.com) | Daily at 06:00 IST |
| **Domestic LPG** | Indian Oil (Indane) & Ministry of Petroleum (PPAC) | [iocl.com](https://iocl.com) | Monthly (1st of month) |
| **Crude Oil Benchmarks** | PPAC Indian Basket of Crude Oil & ICE/NYMEX | [ppac.gov.in](https://ppac.gov.in) | Daily Closes |
| **Equities & Indices** | National Stock Exchange (NSE) & BSE Limited | [nseindia.com](https://www.nseindia.com) | Market Hours & End of Day |
| **Home Loans & FDs** | SBI, HDFC Bank, ICICI Bank, Punjab National Bank, BoB | Bank Official Schedules | Monthly ALCO Reviews |
| **Financial Calendars** | NSE Holiday Circulars & RBI Negotiable Instruments Act | [rbi.org.in](https://www.rbi.org.in) | Annual Official Releases |

### Running the Scraper:
You can trigger the scraper locally or in CI at any time:
```bash
# Run via npm script
npm run update-data

# Or directly via node
node scripts/update-data.mjs
```

### Continuous Automation with GitHub Actions:
The repository includes an automated workflow (`.github/workflows/data-sync.yml`) configured to execute daily at 01:00 UTC (06:30 IST). The workflow:
1. Runs `node scripts/update-data.mjs` to scrape fresh rates from official endpoints.
2. Formats and validates the structured JSON in `/data/*.json`.
3. Sets `dataStatus: "verified"` with exact timestamps and source URLs.
4. Commits changes back to the repository automatically.

### Viewing Scraper Logs:
Every run of `update-data.mjs` or any individual `scripts/*-scrape.mjs` file appends a timestamped block to **`logs/scrape.log`** (created automatically on first run). The file is never overwritten — each run's output is appended below the previous one, so it builds a full history over time. It's gitignored (matches the `*.log` rule), so it stays local and never bloats the repository.

---

## 6. Official Data Transparency & Compliance

- **Software License**: The application source code (HTML, CSS, JavaScript, architecture) is licensed under the permissive **MIT License**.
- **Data Transparency**: All data files in `/data/` are synchronized with official regulatory benchmarks and institutional schedules (`"dataStatus": "verified"`). Rate Radar transparently attributes all data to the respective authority.
- **Third-Party Trademarks**: All bank names, index names (Nifty 50, Sensex), and corporate symbols are trademarks of their respective owners and are used strictly for informational identification and nominative fair use.

---

## 7. Financial Disclaimer

> **Rate Radar provides financial information for informational purposes only. Rates, prices, fees and eligibility criteria can change. Verify important information with the relevant institution or official source before making financial decisions.**

Rate Radar does not offer financial advice, credit advisory services, or loan approvals.
