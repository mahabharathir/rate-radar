# Rate Radar - Master Financial Registries & Catalogs

This directory contains standalone, canonical data catalogs for Indian financial institutions, credit cards, regulatory benchmark rates, foreign exchange pairs, and government savings schemes.

All records are structured as clean, typed JSON arrays designed for seamless consumption, ETL pipelines, and integration with external platforms.

---

## Catalog Index

| Registry File | Description | Record Count | Authority / Primary Source | Update Frequency |
|---|---|---|---|---|
| `banks-register.json` | Comprehensive Directory of Scheduled Commercial, PSB, Private, Small Finance & Foreign Banks in India with Benchmark Lending Rates (EBLR/RLLR/MCLR), FD Rates & URLs | 53 Banks | Reserve Bank of India (RBI) & Bank Portals | Real-time / Daily |
| `credit-cards-registry.json` | Complete Master Registry of Active Indian Credit Cards with Fees, Joining Benefits, Reward Rates, Lounge Quotas, Forex Markup, and APR Schedules | 159 Cards across 27 Issuers | Official MITC Schedules & Bank Product Portals | Continuous Ingestion |
| `rbi-rates-registry.json` | RBI Monetary Policy Benchmark Rates, Policy Corridors (SDF/MSF) & Statutory Reserve Ratios (CRR, SLR) | 17 Key Policy Rates & Ratios | Reserve Bank of India (RBI Monetary Policy Committee) | Bi-monthly Policy Review |
| `forex-rates-registry.json` | Global Foreign Exchange Rates vs Indian Rupee (INR) for Major & Trading Partner Currencies | 43 Currency Pairs | Open Exchange Rates / European Central Bank / RBI Reference | Daily Fixings |
| `government-schemes-registry.json` | Government Small Savings Scheme Rates, Compounding Frequency, Tax Status under 80C, and Maturity Periods | 12 Sovereign Schemes | Ministry of Finance, Dept of Economic Affairs (DEA Gazette) | Quarterly Gazette Notification |
| `sources-registry.json` | Provenance Directory & Audit Registry of all Monitored Regulatory and Banking Portals | 25 Authorities & Issuers | Official Central Bank, Exchange & Bank Domains | System Audit |

---

## Schema Specifications

### 1. `banks-register.json`
```json
{
  "bankName": "State Bank of India",
  "shortName": "SBI",
  "bankCode": "sbi",
  "category": "Public Sector Bank",
  "categoryCode": "psb",
  "headquarters": "Mumbai, Maharashtra",
  "established": 1955,
  "benchmarkRate": "EBLR 7.90% (Repo 5.25% + 2.65%)",
  "topFdRate": "7.10% (Amrit Kalash 7.25%)",
  "savingsRate": "2.70% (< ₹10 Cr) / 3.00% (>= ₹10 Cr)",
  "keyOffering": "SimplyCLICK SBI / Amrit Vrishti FD",
  "homeLoan": {
    "rateRange": "7.90% - 8.85% p.a.",
    "benchmarkType": "Floating (EBLR Linked @ 7.90%)",
    "processingFee": "0.35% (Min ₹2,000, Max ₹10,000 + GST)",
    "maxTenure": "Up to 30 Years",
    "flagshipProduct": "SBI Regular Home Loan / MaxGain / Privilege",
    "productUrl": "https://sbi.co.in/web/personal-banking/loans/home-loans"
  },
  "fixedDeposit": {
    "generalRateRange": "3.05% - 7.10% p.a.",
    "seniorCitizenRateRange": "3.55% - 7.60% p.a.",
    "highestRateTenure": "400 Days (Amrit Kalash 7.25% / 7.75% Senior)",
    "specialScheme": "Amrit Vrishti (444 Days @ 7.25% / 7.75% Senior)",
    "minDeposit": "₹1,000",
    "taxSaverFd": "5-Year Tax Saving Term Deposit @ 6.50% (7.00% Senior)"
  },
  "recurringDeposit": {
    "generalRateRange": "6.50% - 7.00% p.a.",
    "seniorCitizenRateRange": "7.00% - 7.50% p.a.",
    "minMonthlyDeposit": "₹100 / month",
    "tenureRange": "12 Months to 120 Months",
    "compounding": "Quarterly Compounded"
  },
  "homeLoanRate": "7.90% - 8.85% p.a.",
  "fdRate": "400 Days (Amrit Kalash 7.25% / 7.75% Senior)",
  "rdRate": "6.50% - 7.00% p.a.",
  "websiteUrl": "https://sbi.co.in",
  "ratesUrl": "https://sbi.co.in/web/interest-rates/deposit-rates/retail-domestic-term-deposits",
  "homeLoansUrl": "https://sbi.co.in/web/personal-banking/loans/home-loans",
  "cardsUrl": "https://www.sbicard.com",
  "lastUpdated": "2026-10-06T02:42:28.994Z",
  "lastUpdatedDisplay": "6 Oct 2026 02:42 am IST",
  "status": "verified"
}
```

### 2. `credit-cards-registry.json`
```json
{
  "bank": "Canara Bank",
  "bankCode": "canbk",
  "card": "Canara RuPay Select Credit Card",
  "category": "Govt PSB Premium / RuPay",
  "joiningFee": "₹1,000 + GST",
  "annualFee": "₹1,000 + GST (Waived on ₹1.2L spend)",
  "welcomeBenefit": "Complimentary Spa session & health check-up package",
  "rewards": "4 Reward Points per ₹100 spent; Complimentary Golf lessons; ₹10 Lakhs accidental insurance cover",
  "loungeAccess": "1 Domestic Airport Lounge visit per quarter + 2 International Lounge visits per year",
  "forexMarkup": "3.00%",
  "monthlyInterest": "2.50% p.m. (30% p.a.)",
  "productUrl": "https://canarabank.com/pages/credit-cards",
  "status": "verified"
}
```

### 3. `rbi-rates-registry.json`
```json
{
  "key": "repo_rate",
  "name": "Policy Repo Rate",
  "rate": "5.25%",
  "type": "Policy Benchmark",
  "effectiveDate": "2026-08-08",
  "description": "Rate at which RBI lends short-term money to commercial banks against government securities",
  "status": "verified"
}
```

### 4. `forex-rates-registry.json`
```json
{
  "baseCode": "USD",
  "currency": "US Dollar",
  "symbol": "$",
  "flag": "🇺🇸",
  "rate": 86.84,
  "inverseRate": 0.0115,
  "formattedRate": "₹86.84",
  "lastUpdated": "2026-10-06T02:35:00.000Z"
}
```

### 5. `government-schemes-registry.json`
```json
{
  "schemeName": "Sukanya Samriddhi Account (SSA)",
  "schemeCode": "SSA",
  "interestRate": "8.20%",
  "compounding": "Annually",
  "taxBenefit": "Exempt-Exempt-Exempt (EEE) under Sec 80C & Sec 10(11D)",
  "maturity": "21 Years (or marriage after 18)",
  "minimumDeposit": "₹250 / FY",
  "maximumDeposit": "₹1,50,000 / FY",
  "eligibility": "Girl child below 10 years of age",
  "officialSource": "Ministry of Finance, Govt of India",
  "status": "verified"
}
```

---

## Ingestion & Pipeline Sync

To trigger a live refresh of all registries and feeds directly from official banking and regulatory portals:
```bash
npm run update-data
```
Execution logs and verification status are recorded in `data/scrape-log.json`.
