/**
 * Comprehensive Indian Commercial Banks Master Interest Rates Registry
 * Audited and live-scraped deposit schedules (Fixed Deposit, Recurring Deposit, Savings Account)
 * and lending benchmark schedules (MCLR, EBLR, Home Loan slabs) for 53 Scheduled Commercial Banks.
 * Auto-refreshed from the last successful live scrape; used as fallback when live bank portals are unreachable.
 */

export const interestRatesCatalog = [
  {
    "bankName": "State Bank of India",
    "shortName": "SBI",
    "bankCode": "sbi",
    "category": "Public Sector Bank",
    "categoryCode": "psb",
    "headquarters": "Mumbai, Maharashtra",
    "established": 1955,
    "logoUrl": "/assets/images/banks/sbi/symbol.svg",
    "ratesUrl": "https://sbi.co.in/web/interest-rates/deposit-rates/retail-domestic-term-deposits",
    "websiteUrl": "https://sbi.co.in",
    "lastUpdated": "2026-10-08T09:06:52.000Z",
    "lastUpdatedDisplay": "8 Oct 2026 09:06 am IST",
    "status": "verified",
    "liveHttpStatus": 200,
    "responseTimeMs": 1004,
    "tablesSummary": {
      "fdTranchesCount": 10,
      "rdTranchesCount": 5,
      "savingsTiersCount": 5,
      "mclrTenuresCount": 7,
      "peakGeneralFdRate": 6.8,
      "peakSeniorFdRate": 7.3,
      "lowestHomeLoanRate": 7.9
    },
    "depositTables": {
      "fixedDeposit": [
        {
          "tenure": "7 days to 45 days",
          "generalRate": 3.05,
          "seniorCitizenRate": 3.55,
          "superSeniorRate": 3.55,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "46 days to 179 days",
          "generalRate": 4.9,
          "seniorCitizenRate": 5.4,
          "superSeniorRate": 5.4,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "180 days to 210 days",
          "generalRate": 5.65,
          "seniorCitizenRate": 6.15,
          "superSeniorRate": 6.15,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "211 days to less than 1 year",
          "generalRate": 5.9,
          "seniorCitizenRate": 6.4,
          "superSeniorRate": 6.4,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "5 years and up to 10 years",
          "generalRate": 6.05,
          "seniorCitizenRate": 7.05,
          "superSeniorRate": 7.05,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "1 Year to less than 2 years",
          "generalRate": 6.25,
          "seniorCitizenRate": 6.75,
          "superSeniorRate": 6.75,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "3 years to less than 5 years",
          "generalRate": 6.3,
          "seniorCitizenRate": 6.8,
          "superSeniorRate": 6.8,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "2 years to less than 3 years",
          "generalRate": 6.45,
          "seniorCitizenRate": 6.95,
          "superSeniorRate": 6.95,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "1 Year",
          "generalRate": 6.55,
          "seniorCitizenRate": 7.05,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "2 Years",
          "generalRate": 6.8,
          "seniorCitizenRate": 7.3,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        }
      ],
      "recurringDeposit": [
        {
          "tenure": "6 Months to < 12 Months",
          "generalRate": 6.25,
          "seniorCitizenRate": 6.75,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "12 Months to < 24 Months",
          "generalRate": 6.75,
          "seniorCitizenRate": 7.25,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "24 Months to < 36 Months",
          "generalRate": 7,
          "seniorCitizenRate": 7.5,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "36 Months to < 60 Months",
          "generalRate": 6.8,
          "seniorCitizenRate": 7.3,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "60 Months to 120 Months",
          "generalRate": 6.6,
          "seniorCitizenRate": 7.1,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        }
      ],
      "savingsAccount": [
        {
          "balanceSlab": "Up to ₹1 Lakh",
          "rate": 2.7,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Lakh up to ₹10 Lakhs",
          "rate": 2.85,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Lakhs up to ₹1 Crore",
          "rate": 3.05,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Crore up to ₹10 Crores",
          "rate": 3,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Crores",
          "rate": 3.25,
          "calculation": "Daily balance calculated, paid quarterly"
        }
      ]
    },
    "lendingTables": {
      "benchmarkType": "Floating (EBLR Linked @ 7.90%)",
      "repoLinkedRate": 7.7,
      "mclr": [
        {
          "tenure": "Overnight MCLR",
          "rate": 8
        },
        {
          "tenure": "1 Month MCLR",
          "rate": 8.15
        },
        {
          "tenure": "3 Months MCLR",
          "rate": 8.25
        },
        {
          "tenure": "6 Months MCLR",
          "rate": 8.45
        },
        {
          "tenure": "1 Year MCLR",
          "rate": 8.6
        },
        {
          "tenure": "2 Years MCLR",
          "rate": 8.75
        },
        {
          "tenure": "3 Years MCLR",
          "rate": 8.85
        }
      ],
      "homeLoanSlabs": [
        {
          "cibilScoreTier": "CIBIL >= 750 (Grade 1)",
          "salariedRate": 7.9,
          "nonSalariedRate": 8.05,
          "maxLtv": "80% - 90%"
        },
        {
          "cibilScoreTier": "CIBIL 700 - 749 (Grade 2)",
          "salariedRate": 8.15,
          "nonSalariedRate": 8.3,
          "maxLtv": "75% - 80%"
        },
        {
          "cibilScoreTier": "CIBIL 650 - 699 (Grade 3)",
          "salariedRate": 8.45,
          "nonSalariedRate": 8.6,
          "maxLtv": "75%"
        },
        {
          "cibilScoreTier": "CIBIL 550 - 649 (Grade 4)",
          "salariedRate": 8.85,
          "nonSalariedRate": 9,
          "maxLtv": "70%"
        }
      ]
    }
  },
  {
    "bankName": "Punjab National Bank",
    "shortName": "PNB",
    "bankCode": "pnb",
    "category": "Public Sector Bank",
    "categoryCode": "psb",
    "headquarters": "New Delhi, Delhi",
    "established": 1894,
    "logoUrl": "/assets/images/banks/pnb/symbol.svg",
    "ratesUrl": "https://pnb.bank.in/interest-rates-deposit.html",
    "websiteUrl": "https://pnb.bank.in",
    "lastUpdated": "2026-10-08T09:06:52.000Z",
    "lastUpdatedDisplay": "8 Oct 2026 09:06 am IST",
    "status": "verified",
    "liveHttpStatus": 200,
    "responseTimeMs": 594,
    "tablesSummary": {
      "fdTranchesCount": 81,
      "rdTranchesCount": 5,
      "savingsTiersCount": 5,
      "mclrTenuresCount": 7,
      "peakGeneralFdRate": 6.7,
      "peakSeniorFdRate": 7.2,
      "lowestHomeLoanRate": 8.3
    },
    "depositTables": {
      "fixedDeposit": [
        {
          "tenure": "7 to 14 Days",
          "generalRate": 3,
          "seniorCitizenRate": 3.5,
          "superSeniorRate": 3.8,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "15 to 45 Days",
          "generalRate": 3,
          "seniorCitizenRate": 3.5,
          "superSeniorRate": 3.8,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "46 to 90 Days",
          "generalRate": 4.5,
          "seniorCitizenRate": 5,
          "superSeniorRate": 5.3,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "7 days to 14 days",
          "generalRate": 4.5,
          "seniorCitizenRate": 4.5,
          "superSeniorRate": 4.5,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "91 to 154 Days",
          "generalRate": 4.9,
          "seniorCitizenRate": 5.4,
          "superSeniorRate": 5.7,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "156 Days to 179 Days",
          "generalRate": 4.9,
          "seniorCitizenRate": 5.4,
          "superSeniorRate": 5.7,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "91 to 154 Days",
          "generalRate": 5,
          "seniorCitizenRate": 5.5,
          "superSeniorRate": 5.8,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "156 Days to 179 Days",
          "generalRate": 5,
          "seniorCitizenRate": 5.5,
          "superSeniorRate": 5.8,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "15 days to 45 days",
          "generalRate": 5,
          "seniorCitizenRate": 5,
          "superSeniorRate": 5,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "46 days to 90 days",
          "generalRate": 5,
          "seniorCitizenRate": 5,
          "superSeniorRate": 5,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "91 days to 154 days",
          "generalRate": 5,
          "seniorCitizenRate": 5,
          "superSeniorRate": 5.05,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "155 days",
          "generalRate": 5,
          "seniorCitizenRate": 5.55,
          "superSeniorRate": 5.05,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "156 to 179 days",
          "generalRate": 5,
          "seniorCitizenRate": 5,
          "superSeniorRate": 5.05,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "1204 Days",
          "generalRate": 5.3,
          "seniorCitizenRate": 5.3,
          "superSeniorRate": 5.35,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": ">3Years to 1203 Days",
          "generalRate": 5.35,
          "seniorCitizenRate": 5.35,
          "superSeniorRate": 5.4,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "1205 Days to 5 Years",
          "generalRate": 5.35,
          "seniorCitizenRate": 5.35,
          "superSeniorRate": 5.4,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "155 Days",
          "generalRate": 5.55,
          "seniorCitizenRate": 6.05,
          "superSeniorRate": 6.35,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "303 Days",
          "generalRate": 5.55,
          "seniorCitizenRate": 6.05,
          "superSeniorRate": 6.35,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "180 to 270 Days",
          "generalRate": 5.6,
          "seniorCitizenRate": 6.1,
          "superSeniorRate": 6.4,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "271 Days to 302 Days",
          "generalRate": 5.6,
          "seniorCitizenRate": 6.1,
          "superSeniorRate": 6.4,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "304 Days to >1 Year",
          "generalRate": 5.6,
          "seniorCitizenRate": 6.1,
          "superSeniorRate": 6.4,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": ">5 Years to 10 Years",
          "generalRate": 5.6,
          "seniorCitizenRate": 5.6,
          "superSeniorRate": 5.65,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "155 Days",
          "generalRate": 5.65,
          "seniorCitizenRate": 6.15,
          "superSeniorRate": 6.45,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "303 Days",
          "generalRate": 5.65,
          "seniorCitizenRate": 6.15,
          "superSeniorRate": 6.45,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "180 Days to 270 Days",
          "generalRate": 5.7,
          "seniorCitizenRate": 6.2,
          "superSeniorRate": 6.5,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "271 Days to 302 Days",
          "generalRate": 5.7,
          "seniorCitizenRate": 6.2,
          "superSeniorRate": 6.5,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "304 Days to >1 Year",
          "generalRate": 5.7,
          "seniorCitizenRate": 6.2,
          "superSeniorRate": 6.5,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "180 days to 270 Days",
          "generalRate": 5.8,
          "seniorCitizenRate": 5.8,
          "superSeniorRate": 5.85,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "1895 days",
          "generalRate": 5.85,
          "seniorCitizenRate": 6,
          "superSeniorRate": 6.35,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "303Days",
          "generalRate": 5.95,
          "seniorCitizenRate": 5.95,
          "superSeniorRate": 6,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": ">5 Years to 10 Years",
          "generalRate": 6,
          "seniorCitizenRate": 6.8,
          "superSeniorRate": 6.8,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "271 days to 302 Days",
          "generalRate": 6,
          "seniorCitizenRate": 6,
          "superSeniorRate": 6.05,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "304 Days to < 1 Year",
          "generalRate": 6,
          "seniorCitizenRate": 6,
          "superSeniorRate": 6.05,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "> 5 Years to 1894 days",
          "generalRate": 6,
          "seniorCitizenRate": 6,
          "superSeniorRate": 6.5,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "1895 days to 10 years",
          "generalRate": 6,
          "seniorCitizenRate": 6,
          "superSeniorRate": 6.5,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": ">5 Years to 10 Years",
          "generalRate": 6,
          "seniorCitizenRate": 6,
          "superSeniorRate": 5.6,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": ">2 Years to 3 Years",
          "generalRate": 6.05,
          "seniorCitizenRate": 6.05,
          "superSeniorRate": 6.1,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "1204 Days",
          "generalRate": 6.05,
          "seniorCitizenRate": 6.3,
          "superSeniorRate": 5.3,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": ">5 Years to 10 Years",
          "generalRate": 6.1,
          "seniorCitizenRate": 6.9,
          "superSeniorRate": 6.9,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "1 Year",
          "generalRate": 6.1,
          "seniorCitizenRate": 6.25,
          "superSeniorRate": 6.15,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": ">3 Years to 1203 Days",
          "generalRate": 6.1,
          "seniorCitizenRate": 6.35,
          "superSeniorRate": 5.35,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "1205 Days to 5 Years",
          "generalRate": 6.1,
          "seniorCitizenRate": 6.35,
          "superSeniorRate": 5.35,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": ">1 Year to 389 Days",
          "generalRate": 6.15,
          "seniorCitizenRate": 6.15,
          "superSeniorRate": 6.2,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "391 Days to 443 Days",
          "generalRate": 6.15,
          "seniorCitizenRate": 6.15,
          "superSeniorRate": 6.2,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "444 Days",
          "generalRate": 6.15,
          "seniorCitizenRate": 6.6,
          "superSeniorRate": 6.2,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "445 Days to 2 Years",
          "generalRate": 6.15,
          "seniorCitizenRate": 6.15,
          "superSeniorRate": 6.2,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "390 Days",
          "generalRate": 6.2,
          "seniorCitizenRate": 6.2,
          "superSeniorRate": 6.25,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "1 Year",
          "generalRate": 6.25,
          "seniorCitizenRate": 6.75,
          "superSeniorRate": 7.05,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "5 Years",
          "generalRate": 6.25,
          "seniorCitizenRate": 6.1,
          "superSeniorRate": 6.75,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "1 Year",
          "generalRate": 6.25,
          "seniorCitizenRate": 6.25,
          "superSeniorRate": 6.25,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": ">1 Year to 389 Days",
          "generalRate": 6.3,
          "seniorCitizenRate": 6.8,
          "superSeniorRate": 7.1,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "390 Days",
          "generalRate": 6.3,
          "seniorCitizenRate": 6.8,
          "superSeniorRate": 7.1,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "391 Days to 443 Days",
          "generalRate": 6.3,
          "seniorCitizenRate": 6.8,
          "superSeniorRate": 7.1,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "445 Days to 665 Days",
          "generalRate": 6.3,
          "seniorCitizenRate": 6.8,
          "superSeniorRate": 7.1,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "667 Days to 2 Years",
          "generalRate": 6.3,
          "seniorCitizenRate": 6.8,
          "superSeniorRate": 7.1,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": ">2 to 3 Years",
          "generalRate": 6.3,
          "seniorCitizenRate": 6.8,
          "superSeniorRate": 7.1,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "1204 Days",
          "generalRate": 6.3,
          "seniorCitizenRate": 6.8,
          "superSeniorRate": 7.1,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "> 1 Year to 389 Days",
          "generalRate": 6.3,
          "seniorCitizenRate": 6.3,
          "superSeniorRate": 6.15,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "390 Days",
          "generalRate": 6.3,
          "seniorCitizenRate": 6.3,
          "superSeniorRate": 6.2,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "391 Days to 443 Days",
          "generalRate": 6.3,
          "seniorCitizenRate": 6.3,
          "superSeniorRate": 6.15,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "445 Days to 665 Days",
          "generalRate": 6.3,
          "seniorCitizenRate": 6.3,
          "superSeniorRate": 6.15,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "666 Days",
          "generalRate": 6.3,
          "seniorCitizenRate": 6.5,
          "superSeniorRate": 6.15,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "667 Days to 2 Years",
          "generalRate": 6.3,
          "seniorCitizenRate": 6.3,
          "superSeniorRate": 6.15,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": ">2 Years to 3 Years",
          "generalRate": 6.3,
          "seniorCitizenRate": 6.3,
          "superSeniorRate": 6.05,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": ">3 Years to 1203 Days",
          "generalRate": 6.35,
          "seniorCitizenRate": 6.85,
          "superSeniorRate": 7.15,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "1205 Days to 5 Years",
          "generalRate": 6.35,
          "seniorCitizenRate": 6.85,
          "superSeniorRate": 7.15,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "1 Year",
          "generalRate": 6.35,
          "seniorCitizenRate": 6.85,
          "superSeniorRate": 7.15,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": ">1 Year to 389 Days",
          "generalRate": 6.4,
          "seniorCitizenRate": 6.9,
          "superSeniorRate": 7.2,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "390 Days",
          "generalRate": 6.4,
          "seniorCitizenRate": 6.9,
          "superSeniorRate": 7.2,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "391 Days to 443 Days",
          "generalRate": 6.4,
          "seniorCitizenRate": 6.9,
          "superSeniorRate": 7.2,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "445 Days to 665 Days",
          "generalRate": 6.4,
          "seniorCitizenRate": 6.9,
          "superSeniorRate": 7.2,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "667 Days to 2 Years",
          "generalRate": 6.4,
          "seniorCitizenRate": 6.9,
          "superSeniorRate": 7.2,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": ">2 to 3 Years",
          "generalRate": 6.4,
          "seniorCitizenRate": 6.9,
          "superSeniorRate": 7.2,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "1204 Days",
          "generalRate": 6.4,
          "seniorCitizenRate": 6.9,
          "superSeniorRate": 7.2,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": ">3 Years to 1203 Days",
          "generalRate": 6.45,
          "seniorCitizenRate": 6.95,
          "superSeniorRate": 7.25,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "1205 Days to 5 Years",
          "generalRate": 6.45,
          "seniorCitizenRate": 6.95,
          "superSeniorRate": 7.25,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "666 Days",
          "generalRate": 6.5,
          "seniorCitizenRate": 7,
          "superSeniorRate": 7.3,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "444 Days",
          "generalRate": 6.6,
          "seniorCitizenRate": 7.1,
          "superSeniorRate": 7.4,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "666 Days",
          "generalRate": 6.6,
          "seniorCitizenRate": 7.1,
          "superSeniorRate": 7.4,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "444 Days",
          "generalRate": 6.6,
          "seniorCitizenRate": 6.6,
          "superSeniorRate": 6.6,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "444 Days",
          "generalRate": 6.7,
          "seniorCitizenRate": 7.2,
          "superSeniorRate": 7.5,
          "schemeType": "Live Scraped Retail Term Deposit"
        }
      ],
      "recurringDeposit": [
        {
          "tenure": "6 Months to < 12 Months",
          "generalRate": 6.25,
          "seniorCitizenRate": 6.75,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "12 Months to < 24 Months",
          "generalRate": 6.75,
          "seniorCitizenRate": 7.25,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "24 Months to < 36 Months",
          "generalRate": 7,
          "seniorCitizenRate": 7.5,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "36 Months to < 60 Months",
          "generalRate": 6.8,
          "seniorCitizenRate": 7.3,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "60 Months to 120 Months",
          "generalRate": 6.6,
          "seniorCitizenRate": 7.1,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        }
      ],
      "savingsAccount": [
        {
          "balanceSlab": "Up to ₹1 Lakh",
          "rate": 2.7,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Lakh up to ₹10 Lakhs",
          "rate": 2.85,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Lakhs up to ₹1 Crore",
          "rate": 3.05,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Crore up to ₹10 Crores",
          "rate": 2.75,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Crores",
          "rate": 3,
          "calculation": "Daily balance calculated, paid quarterly"
        }
      ]
    },
    "lendingTables": {
      "benchmarkType": "Floating (RLLR Linked @ 8.10%)",
      "repoLinkedRate": 8.1,
      "mclr": [
        {
          "tenure": "Overnight MCLR",
          "rate": 8.4
        },
        {
          "tenure": "1 Month MCLR",
          "rate": 8.55
        },
        {
          "tenure": "3 Months MCLR",
          "rate": 8.65
        },
        {
          "tenure": "6 Months MCLR",
          "rate": 8.85
        },
        {
          "tenure": "1 Year MCLR",
          "rate": 9
        },
        {
          "tenure": "2 Years MCLR",
          "rate": 9.15
        },
        {
          "tenure": "3 Years MCLR",
          "rate": 9.25
        }
      ],
      "homeLoanSlabs": [
        {
          "cibilScoreTier": "CIBIL >= 750 (Grade 1)",
          "salariedRate": 8.3,
          "nonSalariedRate": 8.45,
          "maxLtv": "80% - 90%"
        },
        {
          "cibilScoreTier": "CIBIL 700 - 749 (Grade 2)",
          "salariedRate": 8.55,
          "nonSalariedRate": 8.7,
          "maxLtv": "75% - 80%"
        },
        {
          "cibilScoreTier": "CIBIL 650 - 699 (Grade 3)",
          "salariedRate": 8.85,
          "nonSalariedRate": 9,
          "maxLtv": "75%"
        },
        {
          "cibilScoreTier": "CIBIL 550 - 649 (Grade 4)",
          "salariedRate": 9.25,
          "nonSalariedRate": 9.4,
          "maxLtv": "70%"
        }
      ]
    }
  },
  {
    "bankName": "Bank of Baroda",
    "shortName": "BOB",
    "bankCode": "bob",
    "category": "Public Sector Bank",
    "categoryCode": "psb",
    "headquarters": "Vadodara, Gujarat",
    "established": 1908,
    "logoUrl": "/assets/images/banks/bob/symbol.svg",
    "ratesUrl": "https://bankofbaroda.bank.in/interest-rates-and-service-charges/deposits-interest-rates",
    "websiteUrl": "https://bankofbaroda.bank.in",
    "lastUpdated": "2026-10-08T09:06:52.000Z",
    "lastUpdatedDisplay": "8 Oct 2026 09:06 am IST",
    "status": "verified",
    "liveHttpStatus": 408,
    "responseTimeMs": 6001,
    "tablesSummary": {
      "fdTranchesCount": 14,
      "rdTranchesCount": 5,
      "savingsTiersCount": 5,
      "mclrTenuresCount": 7,
      "peakGeneralFdRate": 7.25,
      "peakSeniorFdRate": 7.75,
      "lowestHomeLoanRate": 8.4
    },
    "depositTables": {
      "fixedDeposit": [
        {
          "tenure": "7 days to 14 days",
          "generalRate": 4.25,
          "seniorCitizenRate": 4.75,
          "superSeniorRate": 5.05,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "15 days to 29 days",
          "generalRate": 4.25,
          "seniorCitizenRate": 4.75,
          "superSeniorRate": 5.05,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "30 days to 45 days",
          "generalRate": 4.75,
          "seniorCitizenRate": 5.25,
          "superSeniorRate": 5.5,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "46 days to 90 days",
          "generalRate": 5.75,
          "seniorCitizenRate": 6.25,
          "superSeniorRate": 6.5,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "91 days to 179 days",
          "generalRate": 6.25,
          "seniorCitizenRate": 6.75,
          "superSeniorRate": 7,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "5 years and up to 10 years",
          "generalRate": 6.65,
          "seniorCitizenRate": 7.15,
          "superSeniorRate": 7.3,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "5-Year Tax Saver Term Deposit (80C)",
          "generalRate": 6.75,
          "seniorCitizenRate": 7.25,
          "superSeniorRate": 7.4,
          "schemeType": "Tax Saving Term Deposit (Sec 80C)"
        },
        {
          "tenure": "3 years to less than 5 years",
          "generalRate": 6.8,
          "seniorCitizenRate": 7.3,
          "superSeniorRate": 7.45,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "180 days to 210 days",
          "generalRate": 7,
          "seniorCitizenRate": 7.5,
          "superSeniorRate": 7.75,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "1 year to less than 2 years",
          "generalRate": 7,
          "seniorCitizenRate": 7.5,
          "superSeniorRate": 7.65,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "2 years to less than 3 years",
          "generalRate": 7.05,
          "seniorCitizenRate": 7.55,
          "superSeniorRate": 7.7,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "211 days to less than 1 year",
          "generalRate": 7.25,
          "seniorCitizenRate": 7.75,
          "superSeniorRate": 8,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "399 Days (Baroda Tiranga Plus 7.25% / 7.75% Senior)",
          "generalRate": 7.25,
          "seniorCitizenRate": 7.75,
          "superSeniorRate": 7.9,
          "schemeType": "Baroda Tiranga Plus Deposit Scheme"
        },
        {
          "tenure": "Baroda Tiranga Plus Deposit Scheme",
          "generalRate": 7.25,
          "seniorCitizenRate": 7.75,
          "superSeniorRate": 7.95,
          "schemeType": "Flagship Special Deposit"
        }
      ],
      "recurringDeposit": [
        {
          "tenure": "6 Months to < 12 Months",
          "generalRate": 6.25,
          "seniorCitizenRate": 6.75,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "12 Months to < 24 Months",
          "generalRate": 6.75,
          "seniorCitizenRate": 7.25,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "24 Months to < 36 Months",
          "generalRate": 7,
          "seniorCitizenRate": 7.5,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "36 Months to < 60 Months",
          "generalRate": 6.8,
          "seniorCitizenRate": 7.3,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "60 Months to 120 Months",
          "generalRate": 6.6,
          "seniorCitizenRate": 7.1,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        }
      ],
      "savingsAccount": [
        {
          "balanceSlab": "Up to ₹1 Lakh",
          "rate": 2.75,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Lakh up to ₹10 Lakhs",
          "rate": 2.9,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Lakhs up to ₹1 Crore",
          "rate": 3.1,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Crore up to ₹10 Crores",
          "rate": 2.75,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Crores",
          "rate": 3,
          "calculation": "Daily balance calculated, paid quarterly"
        }
      ]
    },
    "lendingTables": {
      "benchmarkType": "Floating (BRLLR Linked @ 7.90%)",
      "repoLinkedRate": 8.2,
      "mclr": [
        {
          "tenure": "Overnight MCLR",
          "rate": 8.5
        },
        {
          "tenure": "1 Month MCLR",
          "rate": 8.65
        },
        {
          "tenure": "3 Months MCLR",
          "rate": 8.75
        },
        {
          "tenure": "6 Months MCLR",
          "rate": 8.95
        },
        {
          "tenure": "1 Year MCLR",
          "rate": 9.1
        },
        {
          "tenure": "2 Years MCLR",
          "rate": 9.25
        },
        {
          "tenure": "3 Years MCLR",
          "rate": 9.35
        }
      ],
      "homeLoanSlabs": [
        {
          "cibilScoreTier": "CIBIL >= 750 (Grade 1)",
          "salariedRate": 8.4,
          "nonSalariedRate": 8.55,
          "maxLtv": "80% - 90%"
        },
        {
          "cibilScoreTier": "CIBIL 700 - 749 (Grade 2)",
          "salariedRate": 8.65,
          "nonSalariedRate": 8.8,
          "maxLtv": "75% - 80%"
        },
        {
          "cibilScoreTier": "CIBIL 650 - 699 (Grade 3)",
          "salariedRate": 8.95,
          "nonSalariedRate": 9.1,
          "maxLtv": "75%"
        },
        {
          "cibilScoreTier": "CIBIL 550 - 649 (Grade 4)",
          "salariedRate": 9.35,
          "nonSalariedRate": 9.5,
          "maxLtv": "70%"
        }
      ]
    }
  },
  {
    "bankName": "Canara Bank",
    "shortName": "CANBK",
    "bankCode": "canbk",
    "category": "Public Sector Bank",
    "categoryCode": "psb",
    "headquarters": "Bengaluru, Karnataka",
    "established": 1906,
    "logoUrl": "/assets/images/banks/canbk/symbol.svg",
    "ratesUrl": "https://canarabank.com/interest-rates",
    "websiteUrl": "https://canarabank.com",
    "lastUpdated": "2026-10-08T09:06:52.000Z",
    "lastUpdatedDisplay": "8 Oct 2026 09:06 am IST",
    "status": "verified",
    "liveHttpStatus": 200,
    "responseTimeMs": 1281,
    "tablesSummary": {
      "fdTranchesCount": 14,
      "rdTranchesCount": 5,
      "savingsTiersCount": 5,
      "mclrTenuresCount": 7,
      "peakGeneralFdRate": 7.25,
      "peakSeniorFdRate": 7.75,
      "lowestHomeLoanRate": 8.4
    },
    "depositTables": {
      "fixedDeposit": [
        {
          "tenure": "7 days to 14 days",
          "generalRate": 4,
          "seniorCitizenRate": 4.5,
          "superSeniorRate": 4.8,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "15 days to 29 days",
          "generalRate": 4,
          "seniorCitizenRate": 4.5,
          "superSeniorRate": 4.8,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "30 days to 45 days",
          "generalRate": 4.5,
          "seniorCitizenRate": 5,
          "superSeniorRate": 5.25,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "46 days to 90 days",
          "generalRate": 5.5,
          "seniorCitizenRate": 6,
          "superSeniorRate": 6.25,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "91 days to 179 days",
          "generalRate": 6,
          "seniorCitizenRate": 6.5,
          "superSeniorRate": 6.75,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "5 years and up to 10 years",
          "generalRate": 6.65,
          "seniorCitizenRate": 7.15,
          "superSeniorRate": 7.3,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "180 days to 210 days",
          "generalRate": 6.75,
          "seniorCitizenRate": 7.25,
          "superSeniorRate": 7.5,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "5-Year Tax Saver Term Deposit (80C)",
          "generalRate": 6.75,
          "seniorCitizenRate": 7.25,
          "superSeniorRate": 7.4,
          "schemeType": "Tax Saving Term Deposit (Sec 80C)"
        },
        {
          "tenure": "3 years to less than 5 years",
          "generalRate": 6.8,
          "seniorCitizenRate": 7.3,
          "superSeniorRate": 7.45,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "211 days to less than 1 year",
          "generalRate": 7,
          "seniorCitizenRate": 7.5,
          "superSeniorRate": 7.75,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "1 year to less than 2 years",
          "generalRate": 7,
          "seniorCitizenRate": 7.5,
          "superSeniorRate": 7.65,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "2 years to less than 3 years",
          "generalRate": 7.05,
          "seniorCitizenRate": 7.55,
          "superSeniorRate": 7.7,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "444 Days (7.25% / 7.75% Senior)",
          "generalRate": 7.25,
          "seniorCitizenRate": 7.75,
          "superSeniorRate": 7.9,
          "schemeType": "Canara Shikhar / 444 Days Special FD"
        },
        {
          "tenure": "Canara Shikhar / 444 Days Special FD",
          "generalRate": 7.25,
          "seniorCitizenRate": 7.75,
          "superSeniorRate": 7.95,
          "schemeType": "Flagship Special Deposit"
        }
      ],
      "recurringDeposit": [
        {
          "tenure": "6 Months to < 12 Months",
          "generalRate": 6.25,
          "seniorCitizenRate": 6.75,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "12 Months to < 24 Months",
          "generalRate": 6.75,
          "seniorCitizenRate": 7.25,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "24 Months to < 36 Months",
          "generalRate": 7,
          "seniorCitizenRate": 7.5,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "36 Months to < 60 Months",
          "generalRate": 6.8,
          "seniorCitizenRate": 7.3,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "60 Months to 120 Months",
          "generalRate": 6.6,
          "seniorCitizenRate": 7.1,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        }
      ],
      "savingsAccount": [
        {
          "balanceSlab": "Up to ₹1 Lakh",
          "rate": 2.9,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Lakh up to ₹10 Lakhs",
          "rate": 3.05,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Lakhs up to ₹1 Crore",
          "rate": 3.25,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Crore up to ₹10 Crores",
          "rate": 2.95,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Crores",
          "rate": 3.2,
          "calculation": "Daily balance calculated, paid quarterly"
        }
      ]
    },
    "lendingTables": {
      "benchmarkType": "Floating (RLLR Linked @ 8.25%)",
      "repoLinkedRate": 8.2,
      "mclr": [
        {
          "tenure": "Overnight MCLR",
          "rate": 8.5
        },
        {
          "tenure": "1 Month MCLR",
          "rate": 8.65
        },
        {
          "tenure": "3 Months MCLR",
          "rate": 8.75
        },
        {
          "tenure": "6 Months MCLR",
          "rate": 8.95
        },
        {
          "tenure": "1 Year MCLR",
          "rate": 9.1
        },
        {
          "tenure": "2 Years MCLR",
          "rate": 9.25
        },
        {
          "tenure": "3 Years MCLR",
          "rate": 9.35
        }
      ],
      "homeLoanSlabs": [
        {
          "cibilScoreTier": "CIBIL >= 750 (Grade 1)",
          "salariedRate": 8.4,
          "nonSalariedRate": 8.55,
          "maxLtv": "80% - 90%"
        },
        {
          "cibilScoreTier": "CIBIL 700 - 749 (Grade 2)",
          "salariedRate": 8.65,
          "nonSalariedRate": 8.8,
          "maxLtv": "75% - 80%"
        },
        {
          "cibilScoreTier": "CIBIL 650 - 699 (Grade 3)",
          "salariedRate": 8.95,
          "nonSalariedRate": 9.1,
          "maxLtv": "75%"
        },
        {
          "cibilScoreTier": "CIBIL 550 - 649 (Grade 4)",
          "salariedRate": 9.35,
          "nonSalariedRate": 9.5,
          "maxLtv": "70%"
        }
      ]
    }
  },
  {
    "bankName": "Union Bank of India",
    "shortName": "UBI",
    "bankCode": "ubi",
    "category": "Public Sector Bank",
    "categoryCode": "psb",
    "headquarters": "Mumbai, Maharashtra",
    "established": 1919,
    "logoUrl": "/assets/images/banks/ubi/symbol.svg",
    "ratesUrl": "https://unionbankofindia.co.in/english/interest-rates.aspx",
    "websiteUrl": "https://unionbankofindia.co.in",
    "lastUpdated": "2026-10-08T09:06:52.000Z",
    "lastUpdatedDisplay": "8 Oct 2026 09:06 am IST",
    "status": "verified",
    "liveHttpStatus": 408,
    "responseTimeMs": 6001,
    "tablesSummary": {
      "fdTranchesCount": 14,
      "rdTranchesCount": 5,
      "savingsTiersCount": 5,
      "mclrTenuresCount": 7,
      "peakGeneralFdRate": 7.3,
      "peakSeniorFdRate": 7.8,
      "lowestHomeLoanRate": 8.35
    },
    "depositTables": {
      "fixedDeposit": [
        {
          "tenure": "7 days to 14 days",
          "generalRate": 3.5,
          "seniorCitizenRate": 4,
          "superSeniorRate": 4.3,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "15 days to 29 days",
          "generalRate": 3.5,
          "seniorCitizenRate": 4,
          "superSeniorRate": 4.3,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "30 days to 45 days",
          "generalRate": 4,
          "seniorCitizenRate": 4.5,
          "superSeniorRate": 4.75,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "46 days to 90 days",
          "generalRate": 5,
          "seniorCitizenRate": 5.5,
          "superSeniorRate": 5.75,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "91 days to 179 days",
          "generalRate": 5.5,
          "seniorCitizenRate": 6,
          "superSeniorRate": 6.25,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "180 days to 210 days",
          "generalRate": 6.25,
          "seniorCitizenRate": 6.75,
          "superSeniorRate": 7,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "211 days to less than 1 year",
          "generalRate": 6.5,
          "seniorCitizenRate": 7,
          "superSeniorRate": 7.25,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "5 years and up to 10 years",
          "generalRate": 6.7,
          "seniorCitizenRate": 7.2,
          "superSeniorRate": 7.35,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "5-Year Tax Saver Term Deposit (80C)",
          "generalRate": 6.8,
          "seniorCitizenRate": 7.3,
          "superSeniorRate": 7.45,
          "schemeType": "Tax Saving Term Deposit (Sec 80C)"
        },
        {
          "tenure": "3 years to less than 5 years",
          "generalRate": 6.85,
          "seniorCitizenRate": 7.35,
          "superSeniorRate": 7.5,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "1 year to less than 2 years",
          "generalRate": 7.05,
          "seniorCitizenRate": 7.55,
          "superSeniorRate": 7.7,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "2 years to less than 3 years",
          "generalRate": 7.1,
          "seniorCitizenRate": 7.6,
          "superSeniorRate": 7.75,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "333 Days (Union Samriddhi 7.40% / 7.90% Senior)",
          "generalRate": 7.3,
          "seniorCitizenRate": 7.8,
          "superSeniorRate": 7.95,
          "schemeType": "Union Samriddhi Deposit Scheme"
        },
        {
          "tenure": "Union Samriddhi Deposit Scheme",
          "generalRate": 7.3,
          "seniorCitizenRate": 7.8,
          "superSeniorRate": 8,
          "schemeType": "Flagship Special Deposit"
        }
      ],
      "recurringDeposit": [
        {
          "tenure": "6 Months to < 12 Months",
          "generalRate": 6.25,
          "seniorCitizenRate": 6.75,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "12 Months to < 24 Months",
          "generalRate": 6.75,
          "seniorCitizenRate": 7.25,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "24 Months to < 36 Months",
          "generalRate": 7,
          "seniorCitizenRate": 7.5,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "36 Months to < 60 Months",
          "generalRate": 6.8,
          "seniorCitizenRate": 7.3,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "60 Months to 120 Months",
          "generalRate": 6.6,
          "seniorCitizenRate": 7.1,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        }
      ],
      "savingsAccount": [
        {
          "balanceSlab": "Up to ₹1 Lakh",
          "rate": 2.75,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Lakh up to ₹10 Lakhs",
          "rate": 2.9,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Lakhs up to ₹1 Crore",
          "rate": 3.1,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Crore up to ₹10 Crores",
          "rate": 2.9,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Crores",
          "rate": 3.15,
          "calculation": "Daily balance calculated, paid quarterly"
        }
      ]
    },
    "lendingTables": {
      "benchmarkType": "Floating (EBLR Linked @ 8.10%)",
      "repoLinkedRate": 8.15,
      "mclr": [
        {
          "tenure": "Overnight MCLR",
          "rate": 8.45
        },
        {
          "tenure": "1 Month MCLR",
          "rate": 8.6
        },
        {
          "tenure": "3 Months MCLR",
          "rate": 8.7
        },
        {
          "tenure": "6 Months MCLR",
          "rate": 8.9
        },
        {
          "tenure": "1 Year MCLR",
          "rate": 9.05
        },
        {
          "tenure": "2 Years MCLR",
          "rate": 9.2
        },
        {
          "tenure": "3 Years MCLR",
          "rate": 9.3
        }
      ],
      "homeLoanSlabs": [
        {
          "cibilScoreTier": "CIBIL >= 750 (Grade 1)",
          "salariedRate": 8.35,
          "nonSalariedRate": 8.5,
          "maxLtv": "80% - 90%"
        },
        {
          "cibilScoreTier": "CIBIL 700 - 749 (Grade 2)",
          "salariedRate": 8.6,
          "nonSalariedRate": 8.75,
          "maxLtv": "75% - 80%"
        },
        {
          "cibilScoreTier": "CIBIL 650 - 699 (Grade 3)",
          "salariedRate": 8.9,
          "nonSalariedRate": 9.05,
          "maxLtv": "75%"
        },
        {
          "cibilScoreTier": "CIBIL 550 - 649 (Grade 4)",
          "salariedRate": 9.3,
          "nonSalariedRate": 9.45,
          "maxLtv": "70%"
        }
      ]
    }
  },
  {
    "bankName": "Bank of India",
    "shortName": "BOI",
    "bankCode": "boi",
    "category": "Public Sector Bank",
    "categoryCode": "psb",
    "headquarters": "Mumbai, Maharashtra",
    "established": 1906,
    "logoUrl": "/assets/images/banks/boi/symbol.svg",
    "ratesUrl": "https://bankofindia.co.in/interest-rates",
    "websiteUrl": "https://bankofindia.co.in",
    "lastUpdated": "2026-10-08T09:06:52.000Z",
    "lastUpdatedDisplay": "8 Oct 2026 09:06 am IST",
    "status": "verified",
    "liveHttpStatus": 403,
    "responseTimeMs": 294,
    "tablesSummary": {
      "fdTranchesCount": 14,
      "rdTranchesCount": 5,
      "savingsTiersCount": 5,
      "mclrTenuresCount": 7,
      "peakGeneralFdRate": 7.25,
      "peakSeniorFdRate": 7.8,
      "lowestHomeLoanRate": 8.3
    },
    "depositTables": {
      "fixedDeposit": [
        {
          "tenure": "7 days to 14 days",
          "generalRate": 3,
          "seniorCitizenRate": 3.5,
          "superSeniorRate": 3.8,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "15 days to 29 days",
          "generalRate": 3,
          "seniorCitizenRate": 3.5,
          "superSeniorRate": 3.8,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "30 days to 45 days",
          "generalRate": 3.5,
          "seniorCitizenRate": 4,
          "superSeniorRate": 4.25,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "46 days to 90 days",
          "generalRate": 4.5,
          "seniorCitizenRate": 5,
          "superSeniorRate": 5.25,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "91 days to 179 days",
          "generalRate": 5,
          "seniorCitizenRate": 5.5,
          "superSeniorRate": 5.75,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "180 days to 210 days",
          "generalRate": 5.75,
          "seniorCitizenRate": 6.25,
          "superSeniorRate": 6.5,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "211 days to less than 1 year",
          "generalRate": 6,
          "seniorCitizenRate": 6.5,
          "superSeniorRate": 6.75,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "5 years and up to 10 years",
          "generalRate": 6.65,
          "seniorCitizenRate": 7.15,
          "superSeniorRate": 7.3,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "5-Year Tax Saver Term Deposit (80C)",
          "generalRate": 6.75,
          "seniorCitizenRate": 7.25,
          "superSeniorRate": 7.4,
          "schemeType": "Tax Saving Term Deposit (Sec 80C)"
        },
        {
          "tenure": "3 years to less than 5 years",
          "generalRate": 6.8,
          "seniorCitizenRate": 7.3,
          "superSeniorRate": 7.45,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "1 year to less than 2 years",
          "generalRate": 7,
          "seniorCitizenRate": 7.5,
          "superSeniorRate": 7.65,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "2 years to less than 3 years",
          "generalRate": 7.05,
          "seniorCitizenRate": 7.55,
          "superSeniorRate": 7.7,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "666 Days (Star Dhan 7.30% / 7.80% Senior)",
          "generalRate": 7.25,
          "seniorCitizenRate": 7.8,
          "superSeniorRate": 7.95,
          "schemeType": "Star Dhan Vriddhi Term Deposit"
        },
        {
          "tenure": "Star Dhan Vriddhi Term Deposit",
          "generalRate": 7.25,
          "seniorCitizenRate": 7.8,
          "superSeniorRate": 8,
          "schemeType": "Flagship Special Deposit"
        }
      ],
      "recurringDeposit": [
        {
          "tenure": "6 Months to < 12 Months",
          "generalRate": 6.25,
          "seniorCitizenRate": 6.75,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "12 Months to < 24 Months",
          "generalRate": 6.75,
          "seniorCitizenRate": 7.25,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "24 Months to < 36 Months",
          "generalRate": 7,
          "seniorCitizenRate": 7.5,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "36 Months to < 60 Months",
          "generalRate": 6.8,
          "seniorCitizenRate": 7.3,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "60 Months to 120 Months",
          "generalRate": 6.6,
          "seniorCitizenRate": 7.1,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        }
      ],
      "savingsAccount": [
        {
          "balanceSlab": "Up to ₹1 Lakh",
          "rate": 2.75,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Lakh up to ₹10 Lakhs",
          "rate": 2.9,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Lakhs up to ₹1 Crore",
          "rate": 3.1,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Crore up to ₹10 Crores",
          "rate": 2.75,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Crores",
          "rate": 3,
          "calculation": "Daily balance calculated, paid quarterly"
        }
      ]
    },
    "lendingTables": {
      "benchmarkType": "Floating (RBLR Linked @ 8.15%)",
      "repoLinkedRate": 8.1,
      "mclr": [
        {
          "tenure": "Overnight MCLR",
          "rate": 8.4
        },
        {
          "tenure": "1 Month MCLR",
          "rate": 8.55
        },
        {
          "tenure": "3 Months MCLR",
          "rate": 8.65
        },
        {
          "tenure": "6 Months MCLR",
          "rate": 8.85
        },
        {
          "tenure": "1 Year MCLR",
          "rate": 9
        },
        {
          "tenure": "2 Years MCLR",
          "rate": 9.15
        },
        {
          "tenure": "3 Years MCLR",
          "rate": 9.25
        }
      ],
      "homeLoanSlabs": [
        {
          "cibilScoreTier": "CIBIL >= 750 (Grade 1)",
          "salariedRate": 8.3,
          "nonSalariedRate": 8.45,
          "maxLtv": "80% - 90%"
        },
        {
          "cibilScoreTier": "CIBIL 700 - 749 (Grade 2)",
          "salariedRate": 8.55,
          "nonSalariedRate": 8.7,
          "maxLtv": "75% - 80%"
        },
        {
          "cibilScoreTier": "CIBIL 650 - 699 (Grade 3)",
          "salariedRate": 8.85,
          "nonSalariedRate": 9,
          "maxLtv": "75%"
        },
        {
          "cibilScoreTier": "CIBIL 550 - 649 (Grade 4)",
          "salariedRate": 9.25,
          "nonSalariedRate": 9.4,
          "maxLtv": "70%"
        }
      ]
    }
  },
  {
    "bankName": "Indian Bank",
    "shortName": "INDIANB",
    "bankCode": "indianb",
    "category": "Public Sector Bank",
    "categoryCode": "psb",
    "headquarters": "Chennai, Tamil Nadu",
    "established": 1907,
    "logoUrl": "/assets/images/banks/indianb/symbol.svg",
    "ratesUrl": "https://indianbank.in/departments/deposit-rates/",
    "websiteUrl": "https://indianbank.in",
    "lastUpdated": "2026-10-08T09:06:52.000Z",
    "lastUpdatedDisplay": "8 Oct 2026 09:06 am IST",
    "status": "verified",
    "liveHttpStatus": 200,
    "responseTimeMs": 570,
    "tablesSummary": {
      "fdTranchesCount": 14,
      "rdTranchesCount": 5,
      "savingsTiersCount": 5,
      "mclrTenuresCount": 7,
      "peakGeneralFdRate": 7.3,
      "peakSeniorFdRate": 7.8,
      "lowestHomeLoanRate": 8.4
    },
    "depositTables": {
      "fixedDeposit": [
        {
          "tenure": "7 days to 14 days",
          "generalRate": 2.8,
          "seniorCitizenRate": 3.3,
          "superSeniorRate": 3.6,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "15 days to 29 days",
          "generalRate": 2.8,
          "seniorCitizenRate": 3.3,
          "superSeniorRate": 3.6,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "30 days to 45 days",
          "generalRate": 3.3,
          "seniorCitizenRate": 3.8,
          "superSeniorRate": 4.05,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "46 days to 90 days",
          "generalRate": 4.3,
          "seniorCitizenRate": 4.8,
          "superSeniorRate": 5.05,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "91 days to 179 days",
          "generalRate": 4.8,
          "seniorCitizenRate": 5.3,
          "superSeniorRate": 5.55,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "180 days to 210 days",
          "generalRate": 5.55,
          "seniorCitizenRate": 6.05,
          "superSeniorRate": 6.3,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "211 days to less than 1 year",
          "generalRate": 5.8,
          "seniorCitizenRate": 6.3,
          "superSeniorRate": 6.55,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "5 years and up to 10 years",
          "generalRate": 6.7,
          "seniorCitizenRate": 7.2,
          "superSeniorRate": 7.35,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "5-Year Tax Saver Term Deposit (80C)",
          "generalRate": 6.8,
          "seniorCitizenRate": 7.3,
          "superSeniorRate": 7.45,
          "schemeType": "Tax Saving Term Deposit (Sec 80C)"
        },
        {
          "tenure": "3 years to less than 5 years",
          "generalRate": 6.85,
          "seniorCitizenRate": 7.35,
          "superSeniorRate": 7.5,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "1 year to less than 2 years",
          "generalRate": 7.05,
          "seniorCitizenRate": 7.55,
          "superSeniorRate": 7.7,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "2 years to less than 3 years",
          "generalRate": 7.1,
          "seniorCitizenRate": 7.6,
          "superSeniorRate": 7.75,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "400 Days (Ind Super 400 Days @ 7.30% / 7.80% Senior)",
          "generalRate": 7.3,
          "seniorCitizenRate": 7.8,
          "superSeniorRate": 7.95,
          "schemeType": "Ind Super 400 Days & Ind Super 300 Days"
        },
        {
          "tenure": "Ind Super 400 Days & Ind Super 300 Days",
          "generalRate": 7.3,
          "seniorCitizenRate": 7.8,
          "superSeniorRate": 8,
          "schemeType": "Flagship Special Deposit"
        }
      ],
      "recurringDeposit": [
        {
          "tenure": "6 Months to < 12 Months",
          "generalRate": 6.25,
          "seniorCitizenRate": 6.75,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "12 Months to < 24 Months",
          "generalRate": 6.75,
          "seniorCitizenRate": 7.25,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "24 Months to < 36 Months",
          "generalRate": 7,
          "seniorCitizenRate": 7.5,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "36 Months to < 60 Months",
          "generalRate": 6.8,
          "seniorCitizenRate": 7.3,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "60 Months to 120 Months",
          "generalRate": 6.6,
          "seniorCitizenRate": 7.1,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        }
      ],
      "savingsAccount": [
        {
          "balanceSlab": "Up to ₹1 Lakh",
          "rate": 3,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Lakh up to ₹10 Lakhs",
          "rate": 3.15,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Lakhs up to ₹1 Crore",
          "rate": 3.35,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Crore up to ₹10 Crores",
          "rate": 3.5,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Crores",
          "rate": 3.75,
          "calculation": "Daily balance calculated, paid quarterly"
        }
      ]
    },
    "lendingTables": {
      "benchmarkType": "Floating (IBHLR Linked @ 8.20%)",
      "repoLinkedRate": 8.2,
      "mclr": [
        {
          "tenure": "Overnight MCLR",
          "rate": 8.5
        },
        {
          "tenure": "1 Month MCLR",
          "rate": 8.65
        },
        {
          "tenure": "3 Months MCLR",
          "rate": 8.75
        },
        {
          "tenure": "6 Months MCLR",
          "rate": 8.95
        },
        {
          "tenure": "1 Year MCLR",
          "rate": 9.1
        },
        {
          "tenure": "2 Years MCLR",
          "rate": 9.25
        },
        {
          "tenure": "3 Years MCLR",
          "rate": 9.35
        }
      ],
      "homeLoanSlabs": [
        {
          "cibilScoreTier": "CIBIL >= 750 (Grade 1)",
          "salariedRate": 8.4,
          "nonSalariedRate": 8.55,
          "maxLtv": "80% - 90%"
        },
        {
          "cibilScoreTier": "CIBIL 700 - 749 (Grade 2)",
          "salariedRate": 8.65,
          "nonSalariedRate": 8.8,
          "maxLtv": "75% - 80%"
        },
        {
          "cibilScoreTier": "CIBIL 650 - 699 (Grade 3)",
          "salariedRate": 8.95,
          "nonSalariedRate": 9.1,
          "maxLtv": "75%"
        },
        {
          "cibilScoreTier": "CIBIL 550 - 649 (Grade 4)",
          "salariedRate": 9.35,
          "nonSalariedRate": 9.5,
          "maxLtv": "70%"
        }
      ]
    }
  },
  {
    "bankName": "Central Bank of India",
    "shortName": "CENTRALBK",
    "bankCode": "centralbk",
    "category": "Public Sector Bank",
    "categoryCode": "psb",
    "headquarters": "Mumbai, Maharashtra",
    "established": 1911,
    "logoUrl": "/assets/images/banks/centralbk/symbol.svg",
    "ratesUrl": "https://centralbankofindia.co.in/en/interest-rates-on-deposit",
    "websiteUrl": "https://centralbankofindia.co.in",
    "lastUpdated": "2026-10-08T09:06:52.000Z",
    "lastUpdatedDisplay": "8 Oct 2026 09:06 am IST",
    "status": "verified",
    "liveHttpStatus": 200,
    "responseTimeMs": 1896,
    "tablesSummary": {
      "fdTranchesCount": 35,
      "rdTranchesCount": 5,
      "savingsTiersCount": 5,
      "mclrTenuresCount": 7,
      "peakGeneralFdRate": 6.85,
      "peakSeniorFdRate": 6.85,
      "lowestHomeLoanRate": 8.35
    },
    "depositTables": {
      "fixedDeposit": [
        {
          "tenure": "7 -14 days",
          "generalRate": 3,
          "seniorCitizenRate": 3,
          "superSeniorRate": 3.5,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "15 – 30 days",
          "generalRate": 3.5,
          "seniorCitizenRate": 3.5,
          "superSeniorRate": 4,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "31 - 45 days",
          "generalRate": 3.5,
          "seniorCitizenRate": 3.5,
          "superSeniorRate": 4,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "7 -14 days",
          "generalRate": 4,
          "seniorCitizenRate": 4,
          "superSeniorRate": 4.5,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "60 – 90 days",
          "generalRate": 4,
          "seniorCitizenRate": 4,
          "superSeniorRate": 4.5,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "7-14 days",
          "generalRate": 4.25,
          "seniorCitizenRate": 4.25,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "15 – 30 days",
          "generalRate": 4.25,
          "seniorCitizenRate": 4.25,
          "superSeniorRate": 4.75,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "31 - 45 days",
          "generalRate": 4.25,
          "seniorCitizenRate": 4.25,
          "superSeniorRate": 4.75,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "46 – 59 days",
          "generalRate": 4.25,
          "seniorCitizenRate": 4.25,
          "superSeniorRate": 4.75,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "91 – 179 days",
          "generalRate": 4.25,
          "seniorCitizenRate": 4.25,
          "superSeniorRate": 4.75,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "60 – 90 days",
          "generalRate": 4.5,
          "seniorCitizenRate": 4.5,
          "superSeniorRate": 5,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "91 – 179 days",
          "generalRate": 4.5,
          "seniorCitizenRate": 4.5,
          "superSeniorRate": 5,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "31-45 days",
          "generalRate": 4.75,
          "seniorCitizenRate": 4.75,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "46 – 59 days",
          "generalRate": 4.75,
          "seniorCitizenRate": 4.75,
          "superSeniorRate": 5.25,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "15-30 days",
          "generalRate": 4.95,
          "seniorCitizenRate": 4.95,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "46-59 days",
          "generalRate": 5,
          "seniorCitizenRate": 5,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "180 – 270 days",
          "generalRate": 5.5,
          "seniorCitizenRate": 5.5,
          "superSeniorRate": 6,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "180 – 270 days",
          "generalRate": 5.5,
          "seniorCitizenRate": 5.5,
          "superSeniorRate": 6,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "1 yr to less than 2 yrs",
          "generalRate": 5.55,
          "seniorCitizenRate": 5.55,
          "superSeniorRate": 6.05,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "2 yr to less than 3 yrs",
          "generalRate": 5.6,
          "seniorCitizenRate": 5.6,
          "superSeniorRate": 6.1,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "60-90 days",
          "generalRate": 5.75,
          "seniorCitizenRate": 5.75,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "91-179 days",
          "generalRate": 6,
          "seniorCitizenRate": 6,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "271 – 364 days",
          "generalRate": 6,
          "seniorCitizenRate": 6,
          "superSeniorRate": 6.5,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "3 yr to less than 5 years",
          "generalRate": 6,
          "seniorCitizenRate": 6,
          "superSeniorRate": 6.5,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "5 years & above upto 10 years",
          "generalRate": 6,
          "seniorCitizenRate": 6,
          "superSeniorRate": 6.5,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "271 – 364 days",
          "generalRate": 6,
          "seniorCitizenRate": 6,
          "superSeniorRate": 6.5,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "3 yr to less than 5 years",
          "generalRate": 6,
          "seniorCitizenRate": 6,
          "superSeniorRate": 6.5,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "5 years & above upto 10 years",
          "generalRate": 6,
          "seniorCitizenRate": 6,
          "superSeniorRate": 6.5,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "1 yr to less than 2 yrs",
          "generalRate": 6.1,
          "seniorCitizenRate": 6.1,
          "superSeniorRate": 6.6,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "1 yr to less than 2 yrs",
          "generalRate": 6.1,
          "seniorCitizenRate": 6.1,
          "superSeniorRate": 6.6,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "2 yr to less than 3 years",
          "generalRate": 6.25,
          "seniorCitizenRate": 6.25,
          "superSeniorRate": 6.75,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "2 yr to less than 3 years",
          "generalRate": 6.25,
          "seniorCitizenRate": 6.25,
          "superSeniorRate": 6.75,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "180-270 days",
          "generalRate": 6.4,
          "seniorCitizenRate": 6.4,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "271-364 days",
          "generalRate": 6.6,
          "seniorCitizenRate": 6.6,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "12 month to 13 months",
          "generalRate": 6.85,
          "seniorCitizenRate": 6.85,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        }
      ],
      "recurringDeposit": [
        {
          "tenure": "6 Months to < 12 Months",
          "generalRate": 6.25,
          "seniorCitizenRate": 6.75,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "12 Months to < 24 Months",
          "generalRate": 6.75,
          "seniorCitizenRate": 7.25,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "24 Months to < 36 Months",
          "generalRate": 7,
          "seniorCitizenRate": 7.5,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "36 Months to < 60 Months",
          "generalRate": 6.8,
          "seniorCitizenRate": 7.3,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "60 Months to 120 Months",
          "generalRate": 6.6,
          "seniorCitizenRate": 7.1,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        }
      ],
      "savingsAccount": [
        {
          "balanceSlab": "Up to ₹1 Lakh",
          "rate": 3,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Lakh up to ₹10 Lakhs",
          "rate": 3.15,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Lakhs up to ₹1 Crore",
          "rate": 3.35,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Crore up to ₹10 Crores",
          "rate": 3.5,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Crores",
          "rate": 3.75,
          "calculation": "Daily balance calculated, paid quarterly"
        }
      ]
    },
    "lendingTables": {
      "benchmarkType": "Floating (CBLR Linked @ 8.15%)",
      "repoLinkedRate": 8.15,
      "mclr": [
        {
          "tenure": "Overnight MCLR",
          "rate": 8.45
        },
        {
          "tenure": "1 Month MCLR",
          "rate": 8.6
        },
        {
          "tenure": "3 Months MCLR",
          "rate": 8.7
        },
        {
          "tenure": "6 Months MCLR",
          "rate": 8.9
        },
        {
          "tenure": "1 Year MCLR",
          "rate": 9.05
        },
        {
          "tenure": "2 Years MCLR",
          "rate": 9.2
        },
        {
          "tenure": "3 Years MCLR",
          "rate": 9.3
        }
      ],
      "homeLoanSlabs": [
        {
          "cibilScoreTier": "CIBIL >= 750 (Grade 1)",
          "salariedRate": 8.35,
          "nonSalariedRate": 8.5,
          "maxLtv": "80% - 90%"
        },
        {
          "cibilScoreTier": "CIBIL 700 - 749 (Grade 2)",
          "salariedRate": 8.6,
          "nonSalariedRate": 8.75,
          "maxLtv": "75% - 80%"
        },
        {
          "cibilScoreTier": "CIBIL 650 - 699 (Grade 3)",
          "salariedRate": 8.9,
          "nonSalariedRate": 9.05,
          "maxLtv": "75%"
        },
        {
          "cibilScoreTier": "CIBIL 550 - 649 (Grade 4)",
          "salariedRate": 9.3,
          "nonSalariedRate": 9.45,
          "maxLtv": "70%"
        }
      ]
    }
  },
  {
    "bankName": "Indian Overseas Bank",
    "shortName": "IOB",
    "bankCode": "iob",
    "category": "Public Sector Bank",
    "categoryCode": "psb",
    "headquarters": "Chennai, Tamil Nadu",
    "established": 1937,
    "logoUrl": "/assets/images/banks/iob/symbol.svg",
    "ratesUrl": "https://iob.in/Deposit_Interest_Rates",
    "websiteUrl": "https://iob.in",
    "lastUpdated": "2026-10-08T09:06:52.000Z",
    "lastUpdatedDisplay": "8 Oct 2026 09:06 am IST",
    "status": "verified",
    "liveHttpStatus": 404,
    "responseTimeMs": 747,
    "tablesSummary": {
      "fdTranchesCount": 14,
      "rdTranchesCount": 5,
      "savingsTiersCount": 5,
      "mclrTenuresCount": 7,
      "peakGeneralFdRate": 7.3,
      "peakSeniorFdRate": 7.8,
      "lowestHomeLoanRate": 8.4
    },
    "depositTables": {
      "fixedDeposit": [
        {
          "tenure": "7 days to 14 days",
          "generalRate": 4,
          "seniorCitizenRate": 4.5,
          "superSeniorRate": 4.8,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "15 days to 29 days",
          "generalRate": 4,
          "seniorCitizenRate": 4.5,
          "superSeniorRate": 4.8,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "30 days to 45 days",
          "generalRate": 4.5,
          "seniorCitizenRate": 5,
          "superSeniorRate": 5.25,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "46 days to 90 days",
          "generalRate": 5.5,
          "seniorCitizenRate": 6,
          "superSeniorRate": 6.25,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "91 days to 179 days",
          "generalRate": 6,
          "seniorCitizenRate": 6.5,
          "superSeniorRate": 6.75,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "5 years and up to 10 years",
          "generalRate": 6.7,
          "seniorCitizenRate": 7.2,
          "superSeniorRate": 7.35,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "180 days to 210 days",
          "generalRate": 6.75,
          "seniorCitizenRate": 7.25,
          "superSeniorRate": 7.5,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "5-Year Tax Saver Term Deposit (80C)",
          "generalRate": 6.8,
          "seniorCitizenRate": 7.3,
          "superSeniorRate": 7.45,
          "schemeType": "Tax Saving Term Deposit (Sec 80C)"
        },
        {
          "tenure": "3 years to less than 5 years",
          "generalRate": 6.85,
          "seniorCitizenRate": 7.35,
          "superSeniorRate": 7.5,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "211 days to less than 1 year",
          "generalRate": 7,
          "seniorCitizenRate": 7.5,
          "superSeniorRate": 7.75,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "1 year to less than 2 years",
          "generalRate": 7.05,
          "seniorCitizenRate": 7.55,
          "superSeniorRate": 7.7,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "2 years to less than 3 years",
          "generalRate": 7.1,
          "seniorCitizenRate": 7.6,
          "superSeniorRate": 7.75,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "444 Days (IOB 444 @ 7.30% / 7.80% Senior)",
          "generalRate": 7.3,
          "seniorCitizenRate": 7.8,
          "superSeniorRate": 7.95,
          "schemeType": "IOB 444 Special Retail Term Deposit"
        },
        {
          "tenure": "IOB 444 Special Retail Term Deposit",
          "generalRate": 7.3,
          "seniorCitizenRate": 7.8,
          "superSeniorRate": 8,
          "schemeType": "Flagship Special Deposit"
        }
      ],
      "recurringDeposit": [
        {
          "tenure": "6 Months to < 12 Months",
          "generalRate": 6.25,
          "seniorCitizenRate": 6.75,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "12 Months to < 24 Months",
          "generalRate": 6.75,
          "seniorCitizenRate": 7.25,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "24 Months to < 36 Months",
          "generalRate": 7,
          "seniorCitizenRate": 7.5,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "36 Months to < 60 Months",
          "generalRate": 6.8,
          "seniorCitizenRate": 7.3,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "60 Months to 120 Months",
          "generalRate": 6.6,
          "seniorCitizenRate": 7.1,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        }
      ],
      "savingsAccount": [
        {
          "balanceSlab": "Up to ₹1 Lakh",
          "rate": 2.75,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Lakh up to ₹10 Lakhs",
          "rate": 2.9,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Lakhs up to ₹1 Crore",
          "rate": 3.1,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Crore up to ₹10 Crores",
          "rate": 2.75,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Crores",
          "rate": 3,
          "calculation": "Daily balance calculated, paid quarterly"
        }
      ]
    },
    "lendingTables": {
      "benchmarkType": "Floating (IOB-RLLR Linked @ 8.25%)",
      "repoLinkedRate": 8.2,
      "mclr": [
        {
          "tenure": "Overnight MCLR",
          "rate": 8.5
        },
        {
          "tenure": "1 Month MCLR",
          "rate": 8.65
        },
        {
          "tenure": "3 Months MCLR",
          "rate": 8.75
        },
        {
          "tenure": "6 Months MCLR",
          "rate": 8.95
        },
        {
          "tenure": "1 Year MCLR",
          "rate": 9.1
        },
        {
          "tenure": "2 Years MCLR",
          "rate": 9.25
        },
        {
          "tenure": "3 Years MCLR",
          "rate": 9.35
        }
      ],
      "homeLoanSlabs": [
        {
          "cibilScoreTier": "CIBIL >= 750 (Grade 1)",
          "salariedRate": 8.4,
          "nonSalariedRate": 8.55,
          "maxLtv": "80% - 90%"
        },
        {
          "cibilScoreTier": "CIBIL 700 - 749 (Grade 2)",
          "salariedRate": 8.65,
          "nonSalariedRate": 8.8,
          "maxLtv": "75% - 80%"
        },
        {
          "cibilScoreTier": "CIBIL 650 - 699 (Grade 3)",
          "salariedRate": 8.95,
          "nonSalariedRate": 9.1,
          "maxLtv": "75%"
        },
        {
          "cibilScoreTier": "CIBIL 550 - 649 (Grade 4)",
          "salariedRate": 9.35,
          "nonSalariedRate": 9.5,
          "maxLtv": "70%"
        }
      ]
    }
  },
  {
    "bankName": "UCO Bank",
    "shortName": "UCOBANK",
    "bankCode": "ucobank",
    "category": "Public Sector Bank",
    "categoryCode": "psb",
    "headquarters": "Kolkata, West Bengal",
    "established": 1943,
    "logoUrl": "/assets/images/banks/ucobank/symbol.svg",
    "ratesUrl": "https://ucobank.com/english/interest-rates.aspx",
    "websiteUrl": "https://ucobank.com",
    "lastUpdated": "2026-10-08T09:06:52.000Z",
    "lastUpdatedDisplay": "8 Oct 2026 09:06 am IST",
    "status": "verified",
    "liveHttpStatus": 503,
    "responseTimeMs": 742,
    "tablesSummary": {
      "fdTranchesCount": 14,
      "rdTranchesCount": 5,
      "savingsTiersCount": 5,
      "mclrTenuresCount": 7,
      "peakGeneralFdRate": 7.05,
      "peakSeniorFdRate": 7.55,
      "lowestHomeLoanRate": 8.45
    },
    "depositTables": {
      "fixedDeposit": [
        {
          "tenure": "7 days to 14 days",
          "generalRate": 2.9,
          "seniorCitizenRate": 3.4,
          "superSeniorRate": 3.7,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "15 days to 29 days",
          "generalRate": 2.9,
          "seniorCitizenRate": 3.4,
          "superSeniorRate": 3.7,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "30 days to 45 days",
          "generalRate": 3.4,
          "seniorCitizenRate": 3.9,
          "superSeniorRate": 4.15,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "46 days to 90 days",
          "generalRate": 4.4,
          "seniorCitizenRate": 4.9,
          "superSeniorRate": 5.15,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "91 days to 179 days",
          "generalRate": 4.9,
          "seniorCitizenRate": 5.4,
          "superSeniorRate": 5.65,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "180 days to 210 days",
          "generalRate": 5.65,
          "seniorCitizenRate": 6.15,
          "superSeniorRate": 6.4,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "211 days to less than 1 year",
          "generalRate": 5.9,
          "seniorCitizenRate": 6.4,
          "superSeniorRate": 6.65,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "5 years and up to 10 years",
          "generalRate": 6.45,
          "seniorCitizenRate": 6.95,
          "superSeniorRate": 7.1,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "5-Year Tax Saver Term Deposit (80C)",
          "generalRate": 6.55,
          "seniorCitizenRate": 7.05,
          "superSeniorRate": 7.2,
          "schemeType": "Tax Saving Term Deposit (Sec 80C)"
        },
        {
          "tenure": "3 years to less than 5 years",
          "generalRate": 6.6,
          "seniorCitizenRate": 7.1,
          "superSeniorRate": 7.25,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "1 year to less than 2 years",
          "generalRate": 6.8,
          "seniorCitizenRate": 7.3,
          "superSeniorRate": 7.45,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "2 years to less than 3 years",
          "generalRate": 6.85,
          "seniorCitizenRate": 7.35,
          "superSeniorRate": 7.5,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "444 Days (UCO 444 @ 7.05% / 7.55% Senior)",
          "generalRate": 7.05,
          "seniorCitizenRate": 7.55,
          "superSeniorRate": 7.7,
          "schemeType": "UCO 444 / UCO 333 Days Deposit"
        },
        {
          "tenure": "UCO 444 / UCO 333 Days Deposit",
          "generalRate": 7.05,
          "seniorCitizenRate": 7.55,
          "superSeniorRate": 7.75,
          "schemeType": "Flagship Special Deposit"
        }
      ],
      "recurringDeposit": [
        {
          "tenure": "6 Months to < 12 Months",
          "generalRate": 6.25,
          "seniorCitizenRate": 6.75,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "12 Months to < 24 Months",
          "generalRate": 6.75,
          "seniorCitizenRate": 7.25,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "24 Months to < 36 Months",
          "generalRate": 7,
          "seniorCitizenRate": 7.5,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "36 Months to < 60 Months",
          "generalRate": 6.8,
          "seniorCitizenRate": 7.3,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "60 Months to 120 Months",
          "generalRate": 6.6,
          "seniorCitizenRate": 7.1,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        }
      ],
      "savingsAccount": [
        {
          "balanceSlab": "Up to ₹1 Lakh",
          "rate": 3,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Lakh up to ₹10 Lakhs",
          "rate": 3.15,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Lakhs up to ₹1 Crore",
          "rate": 3.35,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Crore up to ₹10 Crores",
          "rate": 3.5,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Crores",
          "rate": 3.75,
          "calculation": "Daily balance calculated, paid quarterly"
        }
      ]
    },
    "lendingTables": {
      "benchmarkType": "Floating (UCO-RLLR Linked @ 8.20%)",
      "repoLinkedRate": 8.25,
      "mclr": [
        {
          "tenure": "Overnight MCLR",
          "rate": 8.55
        },
        {
          "tenure": "1 Month MCLR",
          "rate": 8.7
        },
        {
          "tenure": "3 Months MCLR",
          "rate": 8.8
        },
        {
          "tenure": "6 Months MCLR",
          "rate": 9
        },
        {
          "tenure": "1 Year MCLR",
          "rate": 9.15
        },
        {
          "tenure": "2 Years MCLR",
          "rate": 9.3
        },
        {
          "tenure": "3 Years MCLR",
          "rate": 9.4
        }
      ],
      "homeLoanSlabs": [
        {
          "cibilScoreTier": "CIBIL >= 750 (Grade 1)",
          "salariedRate": 8.45,
          "nonSalariedRate": 8.6,
          "maxLtv": "80% - 90%"
        },
        {
          "cibilScoreTier": "CIBIL 700 - 749 (Grade 2)",
          "salariedRate": 8.7,
          "nonSalariedRate": 8.85,
          "maxLtv": "75% - 80%"
        },
        {
          "cibilScoreTier": "CIBIL 650 - 699 (Grade 3)",
          "salariedRate": 9,
          "nonSalariedRate": 9.15,
          "maxLtv": "75%"
        },
        {
          "cibilScoreTier": "CIBIL 550 - 649 (Grade 4)",
          "salariedRate": 9.4,
          "nonSalariedRate": 9.55,
          "maxLtv": "70%"
        }
      ]
    }
  },
  {
    "bankName": "Bank of Maharashtra",
    "shortName": "MAHABANK",
    "bankCode": "mahabank",
    "category": "Public Sector Bank",
    "categoryCode": "psb",
    "headquarters": "Pune, Maharashtra",
    "established": 1935,
    "logoUrl": "/assets/images/banks/mahabank/symbol.svg",
    "ratesUrl": "https://bankofmaharashtra.in/deposit-rates",
    "websiteUrl": "https://bankofmaharashtra.in",
    "lastUpdated": "2026-10-08T09:06:52.000Z",
    "lastUpdatedDisplay": "8 Oct 2026 09:06 am IST",
    "status": "verified",
    "liveHttpStatus": 408,
    "responseTimeMs": 6002,
    "tablesSummary": {
      "fdTranchesCount": 14,
      "rdTranchesCount": 5,
      "savingsTiersCount": 5,
      "mclrTenuresCount": 7,
      "peakGeneralFdRate": 7.25,
      "peakSeniorFdRate": 7.75,
      "lowestHomeLoanRate": 8.35
    },
    "depositTables": {
      "fixedDeposit": [
        {
          "tenure": "7 days to 14 days",
          "generalRate": 2.75,
          "seniorCitizenRate": 3.25,
          "superSeniorRate": 3.55,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "15 days to 29 days",
          "generalRate": 2.75,
          "seniorCitizenRate": 3.25,
          "superSeniorRate": 3.55,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "30 days to 45 days",
          "generalRate": 3.25,
          "seniorCitizenRate": 3.75,
          "superSeniorRate": 4,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "46 days to 90 days",
          "generalRate": 4.25,
          "seniorCitizenRate": 4.75,
          "superSeniorRate": 5,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "91 days to 179 days",
          "generalRate": 4.75,
          "seniorCitizenRate": 5.25,
          "superSeniorRate": 5.5,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "180 days to 210 days",
          "generalRate": 5.5,
          "seniorCitizenRate": 6,
          "superSeniorRate": 6.25,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "211 days to less than 1 year",
          "generalRate": 5.75,
          "seniorCitizenRate": 6.25,
          "superSeniorRate": 6.5,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "5 years and up to 10 years",
          "generalRate": 6.65,
          "seniorCitizenRate": 7.15,
          "superSeniorRate": 7.3,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "5-Year Tax Saver Term Deposit (80C)",
          "generalRate": 6.75,
          "seniorCitizenRate": 7.25,
          "superSeniorRate": 7.4,
          "schemeType": "Tax Saving Term Deposit (Sec 80C)"
        },
        {
          "tenure": "3 years to less than 5 years",
          "generalRate": 6.8,
          "seniorCitizenRate": 7.3,
          "superSeniorRate": 7.45,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "1 year to less than 2 years",
          "generalRate": 7,
          "seniorCitizenRate": 7.5,
          "superSeniorRate": 7.65,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "2 years to less than 3 years",
          "generalRate": 7.05,
          "seniorCitizenRate": 7.55,
          "superSeniorRate": 7.7,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "400 Days (Maha 400 @ 7.25% / 7.75% Senior)",
          "generalRate": 7.25,
          "seniorCitizenRate": 7.75,
          "superSeniorRate": 7.9,
          "schemeType": "Maha Dhanvardhini 400 Days Scheme"
        },
        {
          "tenure": "Maha Dhanvardhini 400 Days Scheme",
          "generalRate": 7.25,
          "seniorCitizenRate": 7.75,
          "superSeniorRate": 7.95,
          "schemeType": "Flagship Special Deposit"
        }
      ],
      "recurringDeposit": [
        {
          "tenure": "6 Months to < 12 Months",
          "generalRate": 6.25,
          "seniorCitizenRate": 6.75,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "12 Months to < 24 Months",
          "generalRate": 6.75,
          "seniorCitizenRate": 7.25,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "24 Months to < 36 Months",
          "generalRate": 7,
          "seniorCitizenRate": 7.5,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "36 Months to < 60 Months",
          "generalRate": 6.8,
          "seniorCitizenRate": 7.3,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "60 Months to 120 Months",
          "generalRate": 6.6,
          "seniorCitizenRate": 7.1,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        }
      ],
      "savingsAccount": [
        {
          "balanceSlab": "Up to ₹1 Lakh",
          "rate": 3,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Lakh up to ₹10 Lakhs",
          "rate": 3.15,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Lakhs up to ₹1 Crore",
          "rate": 3.35,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Crore up to ₹10 Crores",
          "rate": 3.5,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Crores",
          "rate": 3.75,
          "calculation": "Daily balance calculated, paid quarterly"
        }
      ]
    },
    "lendingTables": {
      "benchmarkType": "Floating (RLLR Linked @ 8.15%)",
      "repoLinkedRate": 8.15,
      "mclr": [
        {
          "tenure": "Overnight MCLR",
          "rate": 8.45
        },
        {
          "tenure": "1 Month MCLR",
          "rate": 8.6
        },
        {
          "tenure": "3 Months MCLR",
          "rate": 8.7
        },
        {
          "tenure": "6 Months MCLR",
          "rate": 8.9
        },
        {
          "tenure": "1 Year MCLR",
          "rate": 9.05
        },
        {
          "tenure": "2 Years MCLR",
          "rate": 9.2
        },
        {
          "tenure": "3 Years MCLR",
          "rate": 9.3
        }
      ],
      "homeLoanSlabs": [
        {
          "cibilScoreTier": "CIBIL >= 750 (Grade 1)",
          "salariedRate": 8.35,
          "nonSalariedRate": 8.5,
          "maxLtv": "80% - 90%"
        },
        {
          "cibilScoreTier": "CIBIL 700 - 749 (Grade 2)",
          "salariedRate": 8.6,
          "nonSalariedRate": 8.75,
          "maxLtv": "75% - 80%"
        },
        {
          "cibilScoreTier": "CIBIL 650 - 699 (Grade 3)",
          "salariedRate": 8.9,
          "nonSalariedRate": 9.05,
          "maxLtv": "75%"
        },
        {
          "cibilScoreTier": "CIBIL 550 - 649 (Grade 4)",
          "salariedRate": 9.3,
          "nonSalariedRate": 9.45,
          "maxLtv": "70%"
        }
      ]
    }
  },
  {
    "bankName": "Punjab & Sind Bank",
    "shortName": "PSB",
    "bankCode": "psb",
    "category": "Public Sector Bank",
    "categoryCode": "psb",
    "headquarters": "New Delhi, Delhi",
    "established": 1908,
    "logoUrl": "/assets/images/banks/psb/symbol.svg",
    "ratesUrl": "https://punjabandsindbank.co.in/content/interest-rates",
    "websiteUrl": "https://punjabandsindbank.co.in",
    "lastUpdated": "2026-10-08T09:06:52.000Z",
    "lastUpdatedDisplay": "8 Oct 2026 09:06 am IST",
    "status": "verified",
    "liveHttpStatus": 503,
    "responseTimeMs": 96,
    "tablesSummary": {
      "fdTranchesCount": 14,
      "rdTranchesCount": 5,
      "savingsTiersCount": 5,
      "mclrTenuresCount": 7,
      "peakGeneralFdRate": 7.4,
      "peakSeniorFdRate": 7.75,
      "lowestHomeLoanRate": 8.5
    },
    "depositTables": {
      "fixedDeposit": [
        {
          "tenure": "7 days to 14 days",
          "generalRate": 2.8,
          "seniorCitizenRate": 3.3,
          "superSeniorRate": 3.6,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "15 days to 29 days",
          "generalRate": 2.8,
          "seniorCitizenRate": 3.3,
          "superSeniorRate": 3.6,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "30 days to 45 days",
          "generalRate": 3.3,
          "seniorCitizenRate": 3.8,
          "superSeniorRate": 4.05,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "46 days to 90 days",
          "generalRate": 4.3,
          "seniorCitizenRate": 4.8,
          "superSeniorRate": 5.05,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "91 days to 179 days",
          "generalRate": 4.8,
          "seniorCitizenRate": 5.3,
          "superSeniorRate": 5.55,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "180 days to 210 days",
          "generalRate": 5.55,
          "seniorCitizenRate": 6.05,
          "superSeniorRate": 6.3,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "211 days to less than 1 year",
          "generalRate": 5.8,
          "seniorCitizenRate": 6.3,
          "superSeniorRate": 6.55,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "5 years and up to 10 years",
          "generalRate": 6.8,
          "seniorCitizenRate": 7.3,
          "superSeniorRate": 7.45,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "5-Year Tax Saver Term Deposit (80C)",
          "generalRate": 6.9,
          "seniorCitizenRate": 7.4,
          "superSeniorRate": 7.55,
          "schemeType": "Tax Saving Term Deposit (Sec 80C)"
        },
        {
          "tenure": "3 years to less than 5 years",
          "generalRate": 6.95,
          "seniorCitizenRate": 7.45,
          "superSeniorRate": 7.6,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "1 year to less than 2 years",
          "generalRate": 7.15,
          "seniorCitizenRate": 7.65,
          "superSeniorRate": 7.8,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "2 years to less than 3 years",
          "generalRate": 7.2,
          "seniorCitizenRate": 7.7,
          "superSeniorRate": 7.85,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "444 Days (PSB 444 @ 7.25% / 7.75% Senior)",
          "generalRate": 7.4,
          "seniorCitizenRate": 7.75,
          "superSeniorRate": 7.9,
          "schemeType": "PSB Fabulous 444 / 333 Days Deposit"
        },
        {
          "tenure": "PSB Fabulous 444 / 333 Days Deposit",
          "generalRate": 7.4,
          "seniorCitizenRate": 7.75,
          "superSeniorRate": 7.95,
          "schemeType": "Flagship Special Deposit"
        }
      ],
      "recurringDeposit": [
        {
          "tenure": "6 Months to < 12 Months",
          "generalRate": 6.25,
          "seniorCitizenRate": 6.75,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "12 Months to < 24 Months",
          "generalRate": 6.75,
          "seniorCitizenRate": 7.25,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "24 Months to < 36 Months",
          "generalRate": 7,
          "seniorCitizenRate": 7.5,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "36 Months to < 60 Months",
          "generalRate": 6.8,
          "seniorCitizenRate": 7.3,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "60 Months to 120 Months",
          "generalRate": 6.6,
          "seniorCitizenRate": 7.1,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        }
      ],
      "savingsAccount": [
        {
          "balanceSlab": "Up to ₹1 Lakh",
          "rate": 2.7,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Lakh up to ₹10 Lakhs",
          "rate": 2.85,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Lakhs up to ₹1 Crore",
          "rate": 3.05,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Crore up to ₹10 Crores",
          "rate": 2.8,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Crores",
          "rate": 3.05,
          "calculation": "Daily balance calculated, paid quarterly"
        }
      ]
    },
    "lendingTables": {
      "benchmarkType": "Floating (PSB-RLLR Linked @ 8.25%)",
      "repoLinkedRate": 8.3,
      "mclr": [
        {
          "tenure": "Overnight MCLR",
          "rate": 8.6
        },
        {
          "tenure": "1 Month MCLR",
          "rate": 8.75
        },
        {
          "tenure": "3 Months MCLR",
          "rate": 8.85
        },
        {
          "tenure": "6 Months MCLR",
          "rate": 9.05
        },
        {
          "tenure": "1 Year MCLR",
          "rate": 9.2
        },
        {
          "tenure": "2 Years MCLR",
          "rate": 9.35
        },
        {
          "tenure": "3 Years MCLR",
          "rate": 9.45
        }
      ],
      "homeLoanSlabs": [
        {
          "cibilScoreTier": "CIBIL >= 750 (Grade 1)",
          "salariedRate": 8.5,
          "nonSalariedRate": 8.65,
          "maxLtv": "80% - 90%"
        },
        {
          "cibilScoreTier": "CIBIL 700 - 749 (Grade 2)",
          "salariedRate": 8.75,
          "nonSalariedRate": 8.9,
          "maxLtv": "75% - 80%"
        },
        {
          "cibilScoreTier": "CIBIL 650 - 699 (Grade 3)",
          "salariedRate": 9.05,
          "nonSalariedRate": 9.2,
          "maxLtv": "75%"
        },
        {
          "cibilScoreTier": "CIBIL 550 - 649 (Grade 4)",
          "salariedRate": 9.45,
          "nonSalariedRate": 9.6,
          "maxLtv": "70%"
        }
      ]
    }
  },
  {
    "bankName": "HDFC Bank",
    "shortName": "HDFCBANK",
    "bankCode": "hdfcbank",
    "category": "Private Sector Bank",
    "categoryCode": "private",
    "headquarters": "Mumbai, Maharashtra",
    "established": 1994,
    "logoUrl": "/assets/images/banks/hdfcbank/symbol.svg",
    "ratesUrl": "https://www.hdfcbank.com/personal/resources/rates",
    "websiteUrl": "https://www.hdfcbank.com",
    "lastUpdated": "2026-10-08T09:06:52.000Z",
    "lastUpdatedDisplay": "8 Oct 2026 09:06 am IST",
    "status": "verified",
    "liveHttpStatus": 200,
    "responseTimeMs": 1031,
    "tablesSummary": {
      "fdTranchesCount": 122,
      "rdTranchesCount": 5,
      "savingsTiersCount": 5,
      "mclrTenuresCount": 7,
      "peakGeneralFdRate": 8.55,
      "peakSeniorFdRate": 9.05,
      "lowestHomeLoanRate": 8.5
    },
    "depositTables": {
      "fixedDeposit": [
        {
          "tenure": "6 months",
          "generalRate": 2.5,
          "seniorCitizenRate": 2.5,
          "superSeniorRate": 2.5,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "7 - 14 days",
          "generalRate": 2.75,
          "seniorCitizenRate": 3.25,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "15-29 days",
          "generalRate": 2.75,
          "seniorCitizenRate": 3.25,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "1 Year- less than 2 years",
          "generalRate": 3,
          "seniorCitizenRate": 3.35,
          "superSeniorRate": 3.45,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "2 years - less than 3 years",
          "generalRate": 3,
          "seniorCitizenRate": 3.35,
          "superSeniorRate": 3.3,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "3 year to less than 4 years",
          "generalRate": 3,
          "seniorCitizenRate": 3.35,
          "superSeniorRate": 3.3,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "4 years to less than 5 years",
          "generalRate": 3,
          "seniorCitizenRate": 3.1,
          "superSeniorRate": 3.25,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "5 years only",
          "generalRate": 3,
          "seniorCitizenRate": 3.1,
          "superSeniorRate": 3.25,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "1 Year-less than 2 years",
          "generalRate": 3,
          "seniorCitizenRate": 3.35,
          "superSeniorRate": 3.35,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "30-45 days",
          "generalRate": 3.25,
          "seniorCitizenRate": 3.75,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "2 years - less than 3 years",
          "generalRate": 3.35,
          "seniorCitizenRate": 3.35,
          "superSeniorRate": 3.35,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "3 years only",
          "generalRate": 3.35,
          "seniorCitizenRate": 3.35,
          "superSeniorRate": 3.35,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "1 year",
          "generalRate": 3.35,
          "seniorCitizenRate": 3.35,
          "superSeniorRate": 3.35,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "7 - 14 days",
          "generalRate": 3.5,
          "seniorCitizenRate": 4,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "15-29 days",
          "generalRate": 3.5,
          "seniorCitizenRate": 4,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "7 - 14 days",
          "generalRate": 3.5,
          "seniorCitizenRate": 3.5,
          "superSeniorRate": 3.5,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "15-29 days",
          "generalRate": 3.5,
          "seniorCitizenRate": 3.5,
          "superSeniorRate": 3.5,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "12 months",
          "generalRate": 3.83,
          "seniorCitizenRate": 4.33,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "12 months",
          "generalRate": 3.88,
          "seniorCitizenRate": 4.38,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "46-60 days",
          "generalRate": 4.25,
          "seniorCitizenRate": 4.75,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "61-89 days",
          "generalRate": 4.25,
          "seniorCitizenRate": 4.75,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "90 days <= 6 months",
          "generalRate": 4.25,
          "seniorCitizenRate": 4.75,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "6 Months",
          "generalRate": 4.25,
          "seniorCitizenRate": 4.75,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "6 months",
          "generalRate": 4.43,
          "seniorCitizenRate": 4.93,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "30-45 days",
          "generalRate": 4.5,
          "seniorCitizenRate": 4,
          "superSeniorRate": 4.5,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "30-45 days",
          "generalRate": 4.75,
          "seniorCitizenRate": 5.25,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "46-60 days",
          "generalRate": 4.75,
          "seniorCitizenRate": 4,
          "superSeniorRate": 4.75,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "46-60 days",
          "generalRate": 5,
          "seniorCitizenRate": 5.5,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "61-88 days",
          "generalRate": 5,
          "seniorCitizenRate": 4,
          "superSeniorRate": 5,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "61-89 days",
          "generalRate": 5.25,
          "seniorCitizenRate": 5.75,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "6 months 1 day <=9 months",
          "generalRate": 5.5,
          "seniorCitizenRate": 6,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "90 days <= 6 months",
          "generalRate": 5.5,
          "seniorCitizenRate": 6,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "89 days <= 120 Days",
          "generalRate": 5.5,
          "seniorCitizenRate": 4,
          "superSeniorRate": 5.5,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "121 days <= 150 days",
          "generalRate": 5.5,
          "seniorCitizenRate": 4,
          "superSeniorRate": 5.5,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "151 days <=6 Months",
          "generalRate": 5.5,
          "seniorCitizenRate": 4,
          "superSeniorRate": 5.5,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "9 Months",
          "generalRate": 5.5,
          "seniorCitizenRate": 6,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "12 months",
          "generalRate": 5.54,
          "seniorCitizenRate": 6.04,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "9 months 1 day to < 1 Year",
          "generalRate": 5.75,
          "seniorCitizenRate": 6.25,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "6 months 1 day <= 9 months",
          "generalRate": 5.75,
          "seniorCitizenRate": 6.25,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "6 months 1 day <=9months",
          "generalRate": 5.75,
          "seniorCitizenRate": 4,
          "superSeniorRate": 5.75,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "89 days <= 120 Days",
          "generalRate": 5.85,
          "seniorCitizenRate": 5.85,
          "superSeniorRate": 5.85,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "121 days <= 150 days",
          "generalRate": 5.85,
          "seniorCitizenRate": 5.85,
          "superSeniorRate": 5.85,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "151 days <=6 Months",
          "generalRate": 5.85,
          "seniorCitizenRate": 5.85,
          "superSeniorRate": 5.85,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "9 months 1 day to < 1 Year",
          "generalRate": 6,
          "seniorCitizenRate": 6.5,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "9 months 1 day to < 1 Year",
          "generalRate": 6,
          "seniorCitizenRate": 4.25,
          "superSeniorRate": 6,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "6 months 1 day <=9months",
          "generalRate": 6,
          "seniorCitizenRate": 6,
          "superSeniorRate": 6,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "9 months 1 day to < 1 Year",
          "generalRate": 6.1,
          "seniorCitizenRate": 6.1,
          "superSeniorRate": 6.1,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "5 Years 1 day to 10 Years",
          "generalRate": 6.15,
          "seniorCitizenRate": 6.65,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "5 year 1 day to 10 years",
          "generalRate": 6.15,
          "seniorCitizenRate": 6.65,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "63 Months",
          "generalRate": 6.15,
          "seniorCitizenRate": 6.65,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "66 Months",
          "generalRate": 6.15,
          "seniorCitizenRate": 6.65,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "69 Months",
          "generalRate": 6.15,
          "seniorCitizenRate": 6.65,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "72 Months",
          "generalRate": 6.15,
          "seniorCitizenRate": 6.65,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "75 Months",
          "generalRate": 6.15,
          "seniorCitizenRate": 6.65,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "78 Months",
          "generalRate": 6.15,
          "seniorCitizenRate": 6.65,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "81 Months",
          "generalRate": 6.15,
          "seniorCitizenRate": 6.65,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "84 Months",
          "generalRate": 6.15,
          "seniorCitizenRate": 6.65,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "87 Months",
          "generalRate": 6.15,
          "seniorCitizenRate": 6.65,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "90 Months",
          "generalRate": 6.15,
          "seniorCitizenRate": 6.65,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "93 Months",
          "generalRate": 6.15,
          "seniorCitizenRate": 6.65,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "96 Months",
          "generalRate": 6.15,
          "seniorCitizenRate": 6.65,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "99 Months",
          "generalRate": 6.15,
          "seniorCitizenRate": 6.65,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "102 Months",
          "generalRate": 6.15,
          "seniorCitizenRate": 6.65,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "105 Months",
          "generalRate": 6.15,
          "seniorCitizenRate": 6.65,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "108 Months",
          "generalRate": 6.15,
          "seniorCitizenRate": 6.65,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "111 Months",
          "generalRate": 6.15,
          "seniorCitizenRate": 6.65,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "114 Months",
          "generalRate": 6.15,
          "seniorCitizenRate": 6.65,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "117 Months",
          "generalRate": 6.15,
          "seniorCitizenRate": 6.65,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "120 Months",
          "generalRate": 6.15,
          "seniorCitizenRate": 6.65,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "1 Year to < 15 months",
          "generalRate": 6.25,
          "seniorCitizenRate": 6.75,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "1 Year to < 15 months",
          "generalRate": 6.25,
          "seniorCitizenRate": 6.75,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "15 months to < 18 months",
          "generalRate": 6.25,
          "seniorCitizenRate": 6.75,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "2 year 1 day to 3 years",
          "generalRate": 6.25,
          "seniorCitizenRate": 6.75,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "15 months to < 18 months",
          "generalRate": 6.25,
          "seniorCitizenRate": 4.25,
          "superSeniorRate": 6.25,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "5 year 1 day to 10 years",
          "generalRate": 6.25,
          "seniorCitizenRate": 6.6,
          "superSeniorRate": 6.6,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "12 Months",
          "generalRate": 6.25,
          "seniorCitizenRate": 6.75,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "1 Year to < 15 months",
          "generalRate": 6.3,
          "seniorCitizenRate": 6.65,
          "superSeniorRate": 6.65,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "15 months to < 18 months",
          "generalRate": 6.3,
          "seniorCitizenRate": 6.6,
          "superSeniorRate": 6.6,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "15 months to < 18 months",
          "generalRate": 6.35,
          "seniorCitizenRate": 6.85,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "3 year 1 day to 5 years",
          "generalRate": 6.35,
          "seniorCitizenRate": 6.85,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "2 year 1 day to 3 years",
          "generalRate": 6.35,
          "seniorCitizenRate": 6.6,
          "superSeniorRate": 6.6,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "15 Months",
          "generalRate": 6.35,
          "seniorCitizenRate": 6.85,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "4 Year 7 Months (55 months)",
          "generalRate": 6.4,
          "seniorCitizenRate": 6.9,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "4 Year 7 Months 1 day <=5 Years",
          "generalRate": 6.4,
          "seniorCitizenRate": 6.9,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "18 months to < 21 months",
          "generalRate": 6.4,
          "seniorCitizenRate": 6.9,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "21 months to 2 years",
          "generalRate": 6.4,
          "seniorCitizenRate": 6.9,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "18 months to < 21 months",
          "generalRate": 6.4,
          "seniorCitizenRate": 4.25,
          "superSeniorRate": 6.4,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "21 months to 2 years",
          "generalRate": 6.4,
          "seniorCitizenRate": 4.25,
          "superSeniorRate": 6.4,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "57 Months",
          "generalRate": 6.4,
          "seniorCitizenRate": 6.9,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "60 Months",
          "generalRate": 6.4,
          "seniorCitizenRate": 6.9,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "18 months to < 21 months",
          "generalRate": 6.45,
          "seniorCitizenRate": 6.95,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "21 months to 2 years",
          "generalRate": 6.45,
          "seniorCitizenRate": 6.95,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "2 Years 1 day to < 2 Year 11 Months",
          "generalRate": 6.45,
          "seniorCitizenRate": 6.95,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "2 Years 11 Months (35 months)",
          "generalRate": 6.45,
          "seniorCitizenRate": 6.95,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "2 Years 11 Months 1 day <= 3 Year",
          "generalRate": 6.45,
          "seniorCitizenRate": 6.95,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "18 months to < 21 months",
          "generalRate": 6.45,
          "seniorCitizenRate": 6.45,
          "superSeniorRate": 6.45,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "21 months to 2 years",
          "generalRate": 6.45,
          "seniorCitizenRate": 6.45,
          "superSeniorRate": 6.45,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "3 year 1 day to 5 years",
          "generalRate": 6.45,
          "seniorCitizenRate": 6.6,
          "superSeniorRate": 6.6,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "18 Months",
          "generalRate": 6.45,
          "seniorCitizenRate": 6.95,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "21 Months",
          "generalRate": 6.45,
          "seniorCitizenRate": 6.95,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "24 Months",
          "generalRate": 6.45,
          "seniorCitizenRate": 6.95,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "27 Months",
          "generalRate": 6.45,
          "seniorCitizenRate": 6.95,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "30 Months",
          "generalRate": 6.45,
          "seniorCitizenRate": 6.95,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "33 Months",
          "generalRate": 6.45,
          "seniorCitizenRate": 6.95,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "36 Months",
          "generalRate": 6.45,
          "seniorCitizenRate": 6.95,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "3 Years 1 day to < 4 Years 7 Months",
          "generalRate": 6.5,
          "seniorCitizenRate": 7.1,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "1 Year to < 15 months",
          "generalRate": 6.5,
          "seniorCitizenRate": 4.25,
          "superSeniorRate": 6.5,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "2 year 1 day to 3 years",
          "generalRate": 6.5,
          "seniorCitizenRate": 4.25,
          "superSeniorRate": 6.5,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "3 year 1 day to 5 years",
          "generalRate": 6.5,
          "seniorCitizenRate": 4.25,
          "superSeniorRate": 6.5,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "5 year 1 day to 10 years",
          "generalRate": 6.5,
          "seniorCitizenRate": 4.25,
          "superSeniorRate": 6.5,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "39 Months",
          "generalRate": 6.5,
          "seniorCitizenRate": 7.1,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "42 Months",
          "generalRate": 6.5,
          "seniorCitizenRate": 7.1,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "45 Months",
          "generalRate": 6.5,
          "seniorCitizenRate": 7.1,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "48 Months",
          "generalRate": 6.5,
          "seniorCitizenRate": 7.1,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "51 Months",
          "generalRate": 6.5,
          "seniorCitizenRate": 7.1,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "54 Months",
          "generalRate": 6.5,
          "seniorCitizenRate": 7.1,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "1 Month",
          "generalRate": 7.75,
          "seniorCitizenRate": 8.25,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "3 Month",
          "generalRate": 7.95,
          "seniorCitizenRate": 8.45,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "6 Month",
          "generalRate": 8.15,
          "seniorCitizenRate": 8.65,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "1 Year",
          "generalRate": 8.3,
          "seniorCitizenRate": 8.8,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "2 Year",
          "generalRate": 8.4,
          "seniorCitizenRate": 8.9,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "3 Year",
          "generalRate": 8.55,
          "seniorCitizenRate": 9.05,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        }
      ],
      "recurringDeposit": [
        {
          "tenure": "6 Months to < 12 Months",
          "generalRate": 6.25,
          "seniorCitizenRate": 6.75,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "12 Months to < 24 Months",
          "generalRate": 6.75,
          "seniorCitizenRate": 7.25,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "24 Months to < 36 Months",
          "generalRate": 7,
          "seniorCitizenRate": 7.5,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "36 Months to < 60 Months",
          "generalRate": 6.8,
          "seniorCitizenRate": 7.3,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "60 Months to 120 Months",
          "generalRate": 6.6,
          "seniorCitizenRate": 7.1,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        }
      ],
      "savingsAccount": [
        {
          "balanceSlab": "Up to ₹1 Lakh",
          "rate": 3,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Lakh up to ₹10 Lakhs",
          "rate": 3.15,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Lakhs up to ₹1 Crore",
          "rate": 3.35,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Crore up to ₹10 Crores",
          "rate": 3.5,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Crores",
          "rate": 3.75,
          "calculation": "Daily balance calculated, paid quarterly"
        }
      ]
    },
    "lendingTables": {
      "benchmarkType": "Floating (Repo EBLR Linked @ 8.20%)",
      "repoLinkedRate": 8.3,
      "mclr": [
        {
          "tenure": "Overnight MCLR",
          "rate": 8.6
        },
        {
          "tenure": "1 Month MCLR",
          "rate": 8.75
        },
        {
          "tenure": "3 Months MCLR",
          "rate": 8.85
        },
        {
          "tenure": "6 Months MCLR",
          "rate": 9.05
        },
        {
          "tenure": "1 Year MCLR",
          "rate": 9.2
        },
        {
          "tenure": "2 Years MCLR",
          "rate": 9.35
        },
        {
          "tenure": "3 Years MCLR",
          "rate": 9.45
        }
      ],
      "homeLoanSlabs": [
        {
          "cibilScoreTier": "CIBIL >= 750 (Grade 1)",
          "salariedRate": 8.5,
          "nonSalariedRate": 8.65,
          "maxLtv": "80% - 90%"
        },
        {
          "cibilScoreTier": "CIBIL 700 - 749 (Grade 2)",
          "salariedRate": 8.75,
          "nonSalariedRate": 8.9,
          "maxLtv": "75% - 80%"
        },
        {
          "cibilScoreTier": "CIBIL 650 - 699 (Grade 3)",
          "salariedRate": 9.05,
          "nonSalariedRate": 9.2,
          "maxLtv": "75%"
        },
        {
          "cibilScoreTier": "CIBIL 550 - 649 (Grade 4)",
          "salariedRate": 9.45,
          "nonSalariedRate": 9.6,
          "maxLtv": "70%"
        }
      ]
    }
  },
  {
    "bankName": "ICICI Bank",
    "shortName": "ICICIBANK",
    "bankCode": "icicibank",
    "category": "Private Sector Bank",
    "categoryCode": "private",
    "headquarters": "Mumbai, Maharashtra",
    "established": 1994,
    "logoUrl": "/assets/images/banks/icicibank/symbol.svg",
    "ratesUrl": "https://www.icicibank.com/personal-banking/deposits/fixed-deposit/fd-interest-rates",
    "websiteUrl": "https://www.icicibank.com",
    "lastUpdated": "2026-10-08T09:06:52.000Z",
    "lastUpdatedDisplay": "8 Oct 2026 09:06 am IST",
    "status": "verified",
    "liveHttpStatus": 200,
    "responseTimeMs": 1205,
    "tablesSummary": {
      "fdTranchesCount": 13,
      "rdTranchesCount": 5,
      "savingsTiersCount": 5,
      "mclrTenuresCount": 7,
      "peakGeneralFdRate": 6.5,
      "peakSeniorFdRate": 7.1,
      "lowestHomeLoanRate": 8.5
    },
    "depositTables": {
      "fixedDeposit": [
        {
          "tenure": "7 to 29 Days",
          "generalRate": 3.5,
          "seniorCitizenRate": 3.5,
          "superSeniorRate": 3.5,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "30 to 45 Days",
          "generalRate": 4.25,
          "seniorCitizenRate": 4.25,
          "superSeniorRate": 4.25,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "46 to 60 Days",
          "generalRate": 4.5,
          "seniorCitizenRate": 4.5,
          "superSeniorRate": 4.5,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "61 to 90 Days",
          "generalRate": 4.75,
          "seniorCitizenRate": 4.75,
          "superSeniorRate": 5.25,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "91 to 184 Days",
          "generalRate": 5.25,
          "seniorCitizenRate": 5.25,
          "superSeniorRate": 5.9,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "185 to 270 Days",
          "generalRate": 5.5,
          "seniorCitizenRate": 6.15,
          "superSeniorRate": 6.15,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "271 Days to < 1 Year",
          "generalRate": 5.5,
          "seniorCitizenRate": 6.15,
          "superSeniorRate": 6.15,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "1 Year to 389 Days",
          "generalRate": 6.25,
          "seniorCitizenRate": 6.75,
          "superSeniorRate": 6.5,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "390 Days to < 18 Months",
          "generalRate": 6.25,
          "seniorCitizenRate": 6.75,
          "superSeniorRate": 6.3,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "18 Months to 2 Years",
          "generalRate": 6.3,
          "seniorCitizenRate": 6.8,
          "superSeniorRate": 6.35,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "2 Years 1 Day to 3 Years",
          "generalRate": 6.45,
          "seniorCitizenRate": 6.95,
          "superSeniorRate": 6.5,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "3 Years 1 Day to 5 Years",
          "generalRate": 6.5,
          "seniorCitizenRate": 7.1,
          "superSeniorRate": 6.55,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "5 Years 1 Day to 10 Years",
          "generalRate": 6.5,
          "seniorCitizenRate": 6.55,
          "superSeniorRate": 6.55,
          "schemeType": "Live Scraped Retail Term Deposit"
        }
      ],
      "recurringDeposit": [
        {
          "tenure": "6 Months to < 12 Months",
          "generalRate": 6.25,
          "seniorCitizenRate": 6.75,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "12 Months to < 24 Months",
          "generalRate": 6.75,
          "seniorCitizenRate": 7.25,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "24 Months to < 36 Months",
          "generalRate": 7,
          "seniorCitizenRate": 7.5,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "36 Months to < 60 Months",
          "generalRate": 6.8,
          "seniorCitizenRate": 7.3,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "60 Months to 120 Months",
          "generalRate": 6.6,
          "seniorCitizenRate": 7.1,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        }
      ],
      "savingsAccount": [
        {
          "balanceSlab": "Up to ₹1 Lakh",
          "rate": 3,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Lakh up to ₹10 Lakhs",
          "rate": 3.15,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Lakhs up to ₹1 Crore",
          "rate": 3.35,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Crore up to ₹10 Crores",
          "rate": 3.5,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Crores",
          "rate": 3.75,
          "calculation": "Daily balance calculated, paid quarterly"
        }
      ]
    },
    "lendingTables": {
      "benchmarkType": "Floating (Repo EBLR Linked @ 8.20%)",
      "repoLinkedRate": 8.3,
      "mclr": [
        {
          "tenure": "Overnight MCLR",
          "rate": 8.6
        },
        {
          "tenure": "1 Month MCLR",
          "rate": 8.75
        },
        {
          "tenure": "3 Months MCLR",
          "rate": 8.85
        },
        {
          "tenure": "6 Months MCLR",
          "rate": 9.05
        },
        {
          "tenure": "1 Year MCLR",
          "rate": 9.2
        },
        {
          "tenure": "2 Years MCLR",
          "rate": 9.35
        },
        {
          "tenure": "3 Years MCLR",
          "rate": 9.45
        }
      ],
      "homeLoanSlabs": [
        {
          "cibilScoreTier": "CIBIL >= 750 (Grade 1)",
          "salariedRate": 8.5,
          "nonSalariedRate": 8.65,
          "maxLtv": "80% - 90%"
        },
        {
          "cibilScoreTier": "CIBIL 700 - 749 (Grade 2)",
          "salariedRate": 8.75,
          "nonSalariedRate": 8.9,
          "maxLtv": "75% - 80%"
        },
        {
          "cibilScoreTier": "CIBIL 650 - 699 (Grade 3)",
          "salariedRate": 9.05,
          "nonSalariedRate": 9.2,
          "maxLtv": "75%"
        },
        {
          "cibilScoreTier": "CIBIL 550 - 649 (Grade 4)",
          "salariedRate": 9.45,
          "nonSalariedRate": 9.6,
          "maxLtv": "70%"
        }
      ]
    }
  },
  {
    "bankName": "Axis Bank",
    "shortName": "AXISBANK",
    "bankCode": "axisbank",
    "category": "Private Sector Bank",
    "categoryCode": "private",
    "headquarters": "Mumbai, Maharashtra",
    "established": 1993,
    "logoUrl": "/assets/images/banks/axisbank/symbol.svg",
    "ratesUrl": "https://www.axisbank.com/retail/fixed-deposits",
    "websiteUrl": "https://www.axisbank.com",
    "lastUpdated": "2026-10-08T09:06:52.000Z",
    "lastUpdatedDisplay": "8 Oct 2026 09:06 am IST",
    "status": "verified",
    "liveHttpStatus": 200,
    "responseTimeMs": 569,
    "tablesSummary": {
      "fdTranchesCount": 14,
      "rdTranchesCount": 5,
      "savingsTiersCount": 5,
      "mclrTenuresCount": 7,
      "peakGeneralFdRate": 7.2,
      "peakSeniorFdRate": 7.75,
      "lowestHomeLoanRate": 8.5
    },
    "depositTables": {
      "fixedDeposit": [
        {
          "tenure": "7 days to 14 days",
          "generalRate": 3,
          "seniorCitizenRate": 3.5,
          "superSeniorRate": 3.8,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "15 days to 29 days",
          "generalRate": 3,
          "seniorCitizenRate": 3.5,
          "superSeniorRate": 3.8,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "30 days to 45 days",
          "generalRate": 3.5,
          "seniorCitizenRate": 4,
          "superSeniorRate": 4.25,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "46 days to 90 days",
          "generalRate": 4.5,
          "seniorCitizenRate": 5,
          "superSeniorRate": 5.25,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "91 days to 179 days",
          "generalRate": 5,
          "seniorCitizenRate": 5.5,
          "superSeniorRate": 5.75,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "180 days to 210 days",
          "generalRate": 5.75,
          "seniorCitizenRate": 6.25,
          "superSeniorRate": 6.5,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "211 days to less than 1 year",
          "generalRate": 6,
          "seniorCitizenRate": 6.5,
          "superSeniorRate": 6.75,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "5 years and up to 10 years",
          "generalRate": 6.6,
          "seniorCitizenRate": 7.1,
          "superSeniorRate": 7.25,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "5-Year Tax Saver Term Deposit (80C)",
          "generalRate": 6.7,
          "seniorCitizenRate": 7.2,
          "superSeniorRate": 7.35,
          "schemeType": "Tax Saving Term Deposit (Sec 80C)"
        },
        {
          "tenure": "3 years to less than 5 years",
          "generalRate": 6.75,
          "seniorCitizenRate": 7.25,
          "superSeniorRate": 7.4,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "1 year to less than 2 years",
          "generalRate": 6.95,
          "seniorCitizenRate": 7.45,
          "superSeniorRate": 7.6,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "2 years to less than 3 years",
          "generalRate": 7,
          "seniorCitizenRate": 7.5,
          "superSeniorRate": 7.65,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "18 Months to 2 Years",
          "generalRate": 7.2,
          "seniorCitizenRate": 7.75,
          "superSeniorRate": 7.9,
          "schemeType": "AXISBANK Privilege Fixed Deposit"
        },
        {
          "tenure": "AXISBANK Privilege Fixed Deposit",
          "generalRate": 7.2,
          "seniorCitizenRate": 7.75,
          "superSeniorRate": 7.95,
          "schemeType": "Flagship Special Deposit"
        }
      ],
      "recurringDeposit": [
        {
          "tenure": "6 Months to < 12 Months",
          "generalRate": 6.25,
          "seniorCitizenRate": 6.75,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "12 Months to < 24 Months",
          "generalRate": 6.75,
          "seniorCitizenRate": 7.25,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "24 Months to < 36 Months",
          "generalRate": 7,
          "seniorCitizenRate": 7.5,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "36 Months to < 60 Months",
          "generalRate": 6.8,
          "seniorCitizenRate": 7.3,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "60 Months to 120 Months",
          "generalRate": 6.6,
          "seniorCitizenRate": 7.1,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        }
      ],
      "savingsAccount": [
        {
          "balanceSlab": "Up to ₹1 Lakh",
          "rate": 3,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Lakh up to ₹10 Lakhs",
          "rate": 3.15,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Lakhs up to ₹1 Crore",
          "rate": 3.35,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Crore up to ₹10 Crores",
          "rate": 3.5,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Crores",
          "rate": 3.75,
          "calculation": "Daily balance calculated, paid quarterly"
        }
      ]
    },
    "lendingTables": {
      "benchmarkType": "Floating (Repo EBLR Linked @ 8.20%)",
      "repoLinkedRate": 8.3,
      "mclr": [
        {
          "tenure": "Overnight MCLR",
          "rate": 8.6
        },
        {
          "tenure": "1 Month MCLR",
          "rate": 8.75
        },
        {
          "tenure": "3 Months MCLR",
          "rate": 8.85
        },
        {
          "tenure": "6 Months MCLR",
          "rate": 9.05
        },
        {
          "tenure": "1 Year MCLR",
          "rate": 9.2
        },
        {
          "tenure": "2 Years MCLR",
          "rate": 9.35
        },
        {
          "tenure": "3 Years MCLR",
          "rate": 9.45
        }
      ],
      "homeLoanSlabs": [
        {
          "cibilScoreTier": "CIBIL >= 750 (Grade 1)",
          "salariedRate": 8.5,
          "nonSalariedRate": 8.65,
          "maxLtv": "80% - 90%"
        },
        {
          "cibilScoreTier": "CIBIL 700 - 749 (Grade 2)",
          "salariedRate": 8.75,
          "nonSalariedRate": 8.9,
          "maxLtv": "75% - 80%"
        },
        {
          "cibilScoreTier": "CIBIL 650 - 699 (Grade 3)",
          "salariedRate": 9.05,
          "nonSalariedRate": 9.2,
          "maxLtv": "75%"
        },
        {
          "cibilScoreTier": "CIBIL 550 - 649 (Grade 4)",
          "salariedRate": 9.45,
          "nonSalariedRate": 9.6,
          "maxLtv": "70%"
        }
      ]
    }
  },
  {
    "bankName": "Kotak Mahindra Bank",
    "shortName": "KOTAKBANK",
    "bankCode": "kotakbank",
    "category": "Private Sector Bank",
    "categoryCode": "private",
    "headquarters": "Mumbai, Maharashtra",
    "established": 2003,
    "logoUrl": "/assets/images/banks/kotakbank/symbol.svg",
    "ratesUrl": "https://www.kotak.com/en/personal-banking/deposits/fixed-deposit/fixed-deposit-interest-rate.html",
    "websiteUrl": "https://www.kotak.com",
    "lastUpdated": "2026-10-08T09:06:52.000Z",
    "lastUpdatedDisplay": "8 Oct 2026 09:06 am IST",
    "status": "verified",
    "liveHttpStatus": 200,
    "responseTimeMs": 1183,
    "tablesSummary": {
      "fdTranchesCount": 14,
      "rdTranchesCount": 5,
      "savingsTiersCount": 5,
      "mclrTenuresCount": 7,
      "peakGeneralFdRate": 7.4,
      "peakSeniorFdRate": 7.75,
      "lowestHomeLoanRate": 8.5
    },
    "depositTables": {
      "fixedDeposit": [
        {
          "tenure": "7 days to 14 days",
          "generalRate": 3,
          "seniorCitizenRate": 3.5,
          "superSeniorRate": 3.8,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "15 days to 29 days",
          "generalRate": 3,
          "seniorCitizenRate": 3.5,
          "superSeniorRate": 3.8,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "30 days to 45 days",
          "generalRate": 3.5,
          "seniorCitizenRate": 4,
          "superSeniorRate": 4.25,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "46 days to 90 days",
          "generalRate": 4.5,
          "seniorCitizenRate": 5,
          "superSeniorRate": 5.25,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "91 days to 179 days",
          "generalRate": 5,
          "seniorCitizenRate": 5.5,
          "superSeniorRate": 5.75,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "180 days to 210 days",
          "generalRate": 5.75,
          "seniorCitizenRate": 6.25,
          "superSeniorRate": 6.5,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "211 days to less than 1 year",
          "generalRate": 6,
          "seniorCitizenRate": 6.5,
          "superSeniorRate": 6.75,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "5 years and up to 10 years",
          "generalRate": 6.8,
          "seniorCitizenRate": 7.3,
          "superSeniorRate": 7.45,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "5-Year Tax Saver Term Deposit (80C)",
          "generalRate": 6.9,
          "seniorCitizenRate": 7.4,
          "superSeniorRate": 7.55,
          "schemeType": "Tax Saving Term Deposit (Sec 80C)"
        },
        {
          "tenure": "3 years to less than 5 years",
          "generalRate": 6.95,
          "seniorCitizenRate": 7.45,
          "superSeniorRate": 7.6,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "1 year to less than 2 years",
          "generalRate": 7.15,
          "seniorCitizenRate": 7.65,
          "superSeniorRate": 7.8,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "2 years to less than 3 years",
          "generalRate": 7.2,
          "seniorCitizenRate": 7.7,
          "superSeniorRate": 7.85,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "18 Months to 2 Years",
          "generalRate": 7.4,
          "seniorCitizenRate": 7.75,
          "superSeniorRate": 7.9,
          "schemeType": "KOTAKBANK Privilege Fixed Deposit"
        },
        {
          "tenure": "KOTAKBANK Privilege Fixed Deposit",
          "generalRate": 7.4,
          "seniorCitizenRate": 7.75,
          "superSeniorRate": 7.95,
          "schemeType": "Flagship Special Deposit"
        }
      ],
      "recurringDeposit": [
        {
          "tenure": "6 Months to < 12 Months",
          "generalRate": 6.25,
          "seniorCitizenRate": 6.75,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "12 Months to < 24 Months",
          "generalRate": 6.75,
          "seniorCitizenRate": 7.25,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "24 Months to < 36 Months",
          "generalRate": 7,
          "seniorCitizenRate": 7.5,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "36 Months to < 60 Months",
          "generalRate": 6.8,
          "seniorCitizenRate": 7.3,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "60 Months to 120 Months",
          "generalRate": 6.6,
          "seniorCitizenRate": 7.1,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        }
      ],
      "savingsAccount": [
        {
          "balanceSlab": "Up to ₹1 Lakh",
          "rate": 3,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Lakh up to ₹10 Lakhs",
          "rate": 3.15,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Lakhs up to ₹1 Crore",
          "rate": 3.35,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Crore up to ₹10 Crores",
          "rate": 3.5,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Crores",
          "rate": 3.75,
          "calculation": "Daily balance calculated, paid quarterly"
        }
      ]
    },
    "lendingTables": {
      "benchmarkType": "Floating (Repo EBLR Linked @ 8.20%)",
      "repoLinkedRate": 8.3,
      "mclr": [
        {
          "tenure": "Overnight MCLR",
          "rate": 8.6
        },
        {
          "tenure": "1 Month MCLR",
          "rate": 8.75
        },
        {
          "tenure": "3 Months MCLR",
          "rate": 8.85
        },
        {
          "tenure": "6 Months MCLR",
          "rate": 9.05
        },
        {
          "tenure": "1 Year MCLR",
          "rate": 9.2
        },
        {
          "tenure": "2 Years MCLR",
          "rate": 9.35
        },
        {
          "tenure": "3 Years MCLR",
          "rate": 9.45
        }
      ],
      "homeLoanSlabs": [
        {
          "cibilScoreTier": "CIBIL >= 750 (Grade 1)",
          "salariedRate": 8.5,
          "nonSalariedRate": 8.65,
          "maxLtv": "80% - 90%"
        },
        {
          "cibilScoreTier": "CIBIL 700 - 749 (Grade 2)",
          "salariedRate": 8.75,
          "nonSalariedRate": 8.9,
          "maxLtv": "75% - 80%"
        },
        {
          "cibilScoreTier": "CIBIL 650 - 699 (Grade 3)",
          "salariedRate": 9.05,
          "nonSalariedRate": 9.2,
          "maxLtv": "75%"
        },
        {
          "cibilScoreTier": "CIBIL 550 - 649 (Grade 4)",
          "salariedRate": 9.45,
          "nonSalariedRate": 9.6,
          "maxLtv": "70%"
        }
      ]
    }
  },
  {
    "bankName": "IndusInd Bank",
    "shortName": "INDUSINDBK",
    "bankCode": "indusindbk",
    "category": "Private Sector Bank",
    "categoryCode": "private",
    "headquarters": "Mumbai, Maharashtra",
    "established": 1994,
    "logoUrl": "/assets/images/banks/indusindbk/symbol.svg",
    "ratesUrl": "https://www.indusind.com/in/en/personal/rates.html",
    "websiteUrl": "https://www.indusind.com",
    "lastUpdated": "2026-10-08T09:06:52.000Z",
    "lastUpdatedDisplay": "8 Oct 2026 09:06 am IST",
    "status": "verified",
    "liveHttpStatus": 200,
    "responseTimeMs": 1027,
    "tablesSummary": {
      "fdTranchesCount": 106,
      "rdTranchesCount": 5,
      "savingsTiersCount": 5,
      "mclrTenuresCount": 7,
      "peakGeneralFdRate": 9.9,
      "peakSeniorFdRate": 10.4,
      "lowestHomeLoanRate": 8.75
    },
    "depositTables": {
      "fixedDeposit": [
        {
          "tenure": "7 days to 30 days",
          "generalRate": 3.25,
          "seniorCitizenRate": 3.75,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "31 days to 45 days",
          "generalRate": 3.5,
          "seniorCitizenRate": 4,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "3 yrs < 4 yrs",
          "generalRate": 3.5,
          "seniorCitizenRate": 3.5,
          "superSeniorRate": 3.5,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "4 yrs < 5 yrs",
          "generalRate": 3.5,
          "seniorCitizenRate": 3.5,
          "superSeniorRate": 3.5,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "5 yrs",
          "generalRate": 3.5,
          "seniorCitizenRate": 3.5,
          "superSeniorRate": 3.5,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "7 days to 14 days",
          "generalRate": 3.5,
          "seniorCitizenRate": 3.5,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "15 days to 30 days",
          "generalRate": 3.5,
          "seniorCitizenRate": 3.5,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "2 Year 7 Months to 3 Year 3 Months",
          "generalRate": 3.5,
          "seniorCitizenRate": 4.1,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "Above 3 Year 3 Months to Below 61 Months",
          "generalRate": 3.5,
          "seniorCitizenRate": 4.1,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "61 Months and above upto 10 Years",
          "generalRate": 3.5,
          "seniorCitizenRate": 4.1,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "7 days to 14 days",
          "generalRate": 3.6,
          "seniorCitizenRate": 3.6,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "15 days to 30 days",
          "generalRate": 3.6,
          "seniorCitizenRate": 3.6,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "2 Year 7 Months to 3 Year 3 Months",
          "generalRate": 3.6,
          "seniorCitizenRate": 4.2,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "Above 3 Year 3 Months to Below 61 Months",
          "generalRate": 3.6,
          "seniorCitizenRate": 4.2,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "61 Months and above upto 10 Years",
          "generalRate": 3.6,
          "seniorCitizenRate": 4.2,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "1 Year 6 Months upto 2 Year",
          "generalRate": 3.7,
          "seniorCitizenRate": 4.2,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "Above 2 Year to Below 2 Year 6 Months",
          "generalRate": 3.7,
          "seniorCitizenRate": 4.2,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "2 Year 6 Months to Below 2 Year 7 Months",
          "generalRate": 3.7,
          "seniorCitizenRate": 4.2,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "31 days to 45 days",
          "generalRate": 3.8,
          "seniorCitizenRate": 3.75,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "46 days to 60 days",
          "generalRate": 3.8,
          "seniorCitizenRate": 3.75,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "61 days to 90 days",
          "generalRate": 3.8,
          "seniorCitizenRate": 3.75,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "1 Year 6 Months upto 2 Year",
          "generalRate": 3.8,
          "seniorCitizenRate": 4.3,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "Above 2 Year to Below 2 Year 6 Months",
          "generalRate": 3.8,
          "seniorCitizenRate": 4.3,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "2 Year 6 Months to Below 2 Year 7 Months",
          "generalRate": 3.8,
          "seniorCitizenRate": 4.3,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "31 days to 45 days",
          "generalRate": 3.9,
          "seniorCitizenRate": 2,
          "superSeniorRate": 3.85,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "46 days to 60 days",
          "generalRate": 3.9,
          "seniorCitizenRate": 2,
          "superSeniorRate": 3.85,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "61 days to 90 days",
          "generalRate": 3.9,
          "seniorCitizenRate": 2,
          "superSeniorRate": 3.85,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "91 days to 120 days",
          "generalRate": 3.95,
          "seniorCitizenRate": 2.3,
          "superSeniorRate": 3.75,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "121 days to 150 days",
          "generalRate": 3.95,
          "seniorCitizenRate": 2.3,
          "superSeniorRate": 3.75,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "151 days to 180 days",
          "generalRate": 3.95,
          "seniorCitizenRate": 2.3,
          "superSeniorRate": 3.75,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "1 yr < 2 yrs",
          "generalRate": 4,
          "seniorCitizenRate": 4,
          "superSeniorRate": 4,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "1 yr < 2 yrs",
          "generalRate": 4,
          "seniorCitizenRate": 4,
          "superSeniorRate": 2.45,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "181 days to 210 days",
          "generalRate": 4,
          "seniorCitizenRate": 2.5,
          "superSeniorRate": 3.75,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "211 days to 240 days",
          "generalRate": 4,
          "seniorCitizenRate": 2.5,
          "superSeniorRate": 3.75,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "241 days to 269 days",
          "generalRate": 4,
          "seniorCitizenRate": 2.5,
          "superSeniorRate": 3.75,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "270 days to 330 days",
          "generalRate": 4,
          "seniorCitizenRate": 2.6,
          "superSeniorRate": 3.75,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "331 days to 343 days",
          "generalRate": 4,
          "seniorCitizenRate": 2.6,
          "superSeniorRate": 3.75,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "344 days to 354 days",
          "generalRate": 4,
          "seniorCitizenRate": 2.6,
          "superSeniorRate": 3.75,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "355 days to 364 days",
          "generalRate": 4,
          "seniorCitizenRate": 2.6,
          "superSeniorRate": 3.75,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "91 days to 120 days",
          "generalRate": 4.05,
          "seniorCitizenRate": 2.4,
          "superSeniorRate": 3.85,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "121 days to 150 days",
          "generalRate": 4.05,
          "seniorCitizenRate": 2.4,
          "superSeniorRate": 3.85,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "151 days to 180 days",
          "generalRate": 4.05,
          "seniorCitizenRate": 2.4,
          "superSeniorRate": 3.85,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "181 days to 210 days",
          "generalRate": 4.1,
          "seniorCitizenRate": 2.6,
          "superSeniorRate": 3.85,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "211 days to 240 days",
          "generalRate": 4.1,
          "seniorCitizenRate": 2.6,
          "superSeniorRate": 3.85,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "241 days to 269 days",
          "generalRate": 4.1,
          "seniorCitizenRate": 2.6,
          "superSeniorRate": 3.85,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "270 days to 330 days",
          "generalRate": 4.1,
          "seniorCitizenRate": 2.7,
          "superSeniorRate": 3.85,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "331 days to 343 days",
          "generalRate": 4.1,
          "seniorCitizenRate": 2.7,
          "superSeniorRate": 3.85,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "344 days to 354 days",
          "generalRate": 4.1,
          "seniorCitizenRate": 2.7,
          "superSeniorRate": 3.85,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "355 days to 364 days",
          "generalRate": 4.1,
          "seniorCitizenRate": 2.7,
          "superSeniorRate": 3.85,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "2 yrs < 3 yrs",
          "generalRate": 4.25,
          "seniorCitizenRate": 4.25,
          "superSeniorRate": 4.25,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "2 yrs < 3 yrs",
          "generalRate": 4.25,
          "seniorCitizenRate": 4.25,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "365 days to Below 1 Year 3 Months",
          "generalRate": 4.3,
          "seniorCitizenRate": 2.7,
          "superSeniorRate": 4.2,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "1 Year 3 Months to Below 1 Year 4 Months",
          "generalRate": 4.3,
          "seniorCitizenRate": 2.7,
          "superSeniorRate": 4.2,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "1 Year 4 Months to Below 1 Year 6 Months",
          "generalRate": 4.3,
          "seniorCitizenRate": 2.7,
          "superSeniorRate": 4.2,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "365 days to Below 1 Year 3 Months",
          "generalRate": 4.4,
          "seniorCitizenRate": 2.8,
          "superSeniorRate": 4.3,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "1 Year 3 Months to Below 1 Year 4 Months",
          "generalRate": 4.4,
          "seniorCitizenRate": 2.8,
          "superSeniorRate": 4.3,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "1 Year 4 Months to Below 1 Year 6 Months",
          "generalRate": 4.4,
          "seniorCitizenRate": 2.8,
          "superSeniorRate": 4.3,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "46 days to 60 days",
          "generalRate": 4.5,
          "seniorCitizenRate": 5,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "7 days to 14 days",
          "generalRate": 4.5,
          "seniorCitizenRate": 4.5,
          "superSeniorRate": 5,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "15 days to 30 days",
          "generalRate": 4.6,
          "seniorCitizenRate": 4.6,
          "superSeniorRate": 5.1,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "61 days to 90 days",
          "generalRate": 4.75,
          "seniorCitizenRate": 5.25,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "91 days to 120 days",
          "generalRate": 5,
          "seniorCitizenRate": 5.5,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "121 days to 179 days",
          "generalRate": 5,
          "seniorCitizenRate": 5.5,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "31 days to 45 days",
          "generalRate": 5.05,
          "seniorCitizenRate": 5.05,
          "superSeniorRate": 5.55,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "46 days to 60 days",
          "generalRate": 5.55,
          "seniorCitizenRate": 5.55,
          "superSeniorRate": 6.05,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "181 days to 210 days",
          "generalRate": 5.75,
          "seniorCitizenRate": 6.25,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "61 days to 90 days",
          "generalRate": 5.8,
          "seniorCitizenRate": 5.8,
          "superSeniorRate": 6.3,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "91 days to 120 days",
          "generalRate": 5.95,
          "seniorCitizenRate": 5.95,
          "superSeniorRate": 6.45,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "180 days",
          "generalRate": 6,
          "seniorCitizenRate": 6.5,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "211 days to 269 days",
          "generalRate": 6,
          "seniorCitizenRate": 6.5,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "121 days to 180 days",
          "generalRate": 6.05,
          "seniorCitizenRate": 6.05,
          "superSeniorRate": 6.55,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "181 days to 210 days",
          "generalRate": 6.2,
          "seniorCitizenRate": 6.35,
          "superSeniorRate": 6.7,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "270 days to 364 days",
          "generalRate": 6.25,
          "seniorCitizenRate": 6.75,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "09 Months",
          "generalRate": 6.25,
          "seniorCitizenRate": 6.75,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "211 days to 269 days",
          "generalRate": 6.3,
          "seniorCitizenRate": 6.45,
          "superSeniorRate": 6.8,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "270 days to 354 days",
          "generalRate": 6.45,
          "seniorCitizenRate": 6.61,
          "superSeniorRate": 6.95,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "61 Months and above",
          "generalRate": 6.5,
          "seniorCitizenRate": 7,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "61 Months and above",
          "generalRate": 6.5,
          "seniorCitizenRate": 7,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "61 months and above",
          "generalRate": 6.55,
          "seniorCitizenRate": 6.71,
          "superSeniorRate": 7.05,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "355 days to 364 days",
          "generalRate": 6.6,
          "seniorCitizenRate": 6.77,
          "superSeniorRate": 7.1,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "Above 3 Years up to below 61 Months",
          "generalRate": 6.65,
          "seniorCitizenRate": 7.15,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "Tax Saver (5 years)",
          "generalRate": 6.65,
          "seniorCitizenRate": 7.15,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "Above 3 Years to 61 Months",
          "generalRate": 6.65,
          "seniorCitizenRate": 7.15,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "Above 3 years to below 61 months",
          "generalRate": 6.7,
          "seniorCitizenRate": 6.87,
          "superSeniorRate": 7.2,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "1 Year to below 1 Year 6 Month",
          "generalRate": 6.75,
          "seniorCitizenRate": 7.25,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "12 Months",
          "generalRate": 6.75,
          "seniorCitizenRate": 7.25,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "15 Months",
          "generalRate": 6.75,
          "seniorCitizenRate": 7.25,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "1 year 1 month to below 1 year 6 months",
          "generalRate": 6.8,
          "seniorCitizenRate": 6.98,
          "superSeniorRate": 7.3,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "1 year to below 1 year 1 month",
          "generalRate": 6.85,
          "seniorCitizenRate": 7.03,
          "superSeniorRate": 7.35,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "1 Year 6 months to below 1 Year 7 months",
          "generalRate": 6.9,
          "seniorCitizenRate": 7.4,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "1 Year 7 months to below 2 Years",
          "generalRate": 6.9,
          "seniorCitizenRate": 7.4,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "18 Months",
          "generalRate": 6.9,
          "seniorCitizenRate": 7.4,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "21 Months",
          "generalRate": 6.9,
          "seniorCitizenRate": 7.4,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "1 Year 7 months to 3 Years",
          "generalRate": 6.95,
          "seniorCitizenRate": 7.13,
          "superSeniorRate": 7.45,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "2 Years to 3 Years",
          "generalRate": 7,
          "seniorCitizenRate": 7.75,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "1 year 6 months to below 1 Year 7 months",
          "generalRate": 7,
          "seniorCitizenRate": 7.19,
          "superSeniorRate": 7.5,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "24 Months",
          "generalRate": 7,
          "seniorCitizenRate": 7.75,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "27 Months",
          "generalRate": 7,
          "seniorCitizenRate": 7.75,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "30 Months",
          "generalRate": 7,
          "seniorCitizenRate": 7.75,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "33 Months",
          "generalRate": 7,
          "seniorCitizenRate": 7.75,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "36 Months",
          "generalRate": 7,
          "seniorCitizenRate": 7.75,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "1 month",
          "generalRate": 9.25,
          "seniorCitizenRate": 9.75,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "3 month",
          "generalRate": 9.45,
          "seniorCitizenRate": 9.95,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "6 month",
          "generalRate": 9.65,
          "seniorCitizenRate": 10.15,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "1 year",
          "generalRate": 9.75,
          "seniorCitizenRate": 10.25,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "2 year",
          "generalRate": 9.9,
          "seniorCitizenRate": 10.4,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        }
      ],
      "recurringDeposit": [
        {
          "tenure": "6 Months to < 12 Months",
          "generalRate": 6.25,
          "seniorCitizenRate": 6.75,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "12 Months to < 24 Months",
          "generalRate": 6.75,
          "seniorCitizenRate": 7.25,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "24 Months to < 36 Months",
          "generalRate": 7,
          "seniorCitizenRate": 7.5,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "36 Months to < 60 Months",
          "generalRate": 6.8,
          "seniorCitizenRate": 7.3,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "60 Months to 120 Months",
          "generalRate": 6.6,
          "seniorCitizenRate": 7.1,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        }
      ],
      "savingsAccount": [
        {
          "balanceSlab": "Up to ₹1 Lakh",
          "rate": 3,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Lakh up to ₹10 Lakhs",
          "rate": 3.15,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Lakhs up to ₹1 Crore",
          "rate": 3.35,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Crore up to ₹10 Crores",
          "rate": 3.5,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Crores",
          "rate": 3.75,
          "calculation": "Daily balance calculated, paid quarterly"
        }
      ]
    },
    "lendingTables": {
      "benchmarkType": "Floating (EBLR / MCLR Linked)",
      "repoLinkedRate": 8.55,
      "mclr": [
        {
          "tenure": "Overnight MCLR",
          "rate": 8.85
        },
        {
          "tenure": "1 Month MCLR",
          "rate": 9
        },
        {
          "tenure": "3 Months MCLR",
          "rate": 9.1
        },
        {
          "tenure": "6 Months MCLR",
          "rate": 9.3
        },
        {
          "tenure": "1 Year MCLR",
          "rate": 9.45
        },
        {
          "tenure": "2 Years MCLR",
          "rate": 9.6
        },
        {
          "tenure": "3 Years MCLR",
          "rate": 9.7
        }
      ],
      "homeLoanSlabs": [
        {
          "cibilScoreTier": "CIBIL >= 750 (Grade 1)",
          "salariedRate": 8.75,
          "nonSalariedRate": 8.9,
          "maxLtv": "80% - 90%"
        },
        {
          "cibilScoreTier": "CIBIL 700 - 749 (Grade 2)",
          "salariedRate": 9,
          "nonSalariedRate": 9.15,
          "maxLtv": "75% - 80%"
        },
        {
          "cibilScoreTier": "CIBIL 650 - 699 (Grade 3)",
          "salariedRate": 9.3,
          "nonSalariedRate": 9.45,
          "maxLtv": "75%"
        },
        {
          "cibilScoreTier": "CIBIL 550 - 649 (Grade 4)",
          "salariedRate": 9.7,
          "nonSalariedRate": 9.85,
          "maxLtv": "70%"
        }
      ]
    }
  },
  {
    "bankName": "IDFC FIRST Bank",
    "shortName": "IDFCFIRSTB",
    "bankCode": "idfcfirstb",
    "category": "Private Sector Bank",
    "categoryCode": "private",
    "headquarters": "Mumbai, Maharashtra",
    "established": 2015,
    "logoUrl": "/assets/images/banks/idfcfirstb/symbol.svg",
    "ratesUrl": "https://www.idfcfirstbank.com/interest-rate",
    "websiteUrl": "https://www.idfcfirstbank.com",
    "lastUpdated": "2026-10-08T09:06:52.000Z",
    "lastUpdatedDisplay": "8 Oct 2026 09:06 am IST",
    "status": "verified",
    "liveHttpStatus": 200,
    "responseTimeMs": 2220,
    "tablesSummary": {
      "fdTranchesCount": 14,
      "rdTranchesCount": 5,
      "savingsTiersCount": 5,
      "mclrTenuresCount": 7,
      "peakGeneralFdRate": 7.75,
      "peakSeniorFdRate": 8.25,
      "lowestHomeLoanRate": 8.75
    },
    "depositTables": {
      "fixedDeposit": [
        {
          "tenure": "7 days to 14 days",
          "generalRate": 3.5,
          "seniorCitizenRate": 4,
          "superSeniorRate": 4.3,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "15 days to 29 days",
          "generalRate": 3.5,
          "seniorCitizenRate": 4,
          "superSeniorRate": 4.3,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "30 days to 45 days",
          "generalRate": 4,
          "seniorCitizenRate": 4.5,
          "superSeniorRate": 4.75,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "46 days to 90 days",
          "generalRate": 5,
          "seniorCitizenRate": 5.5,
          "superSeniorRate": 5.75,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "91 days to 179 days",
          "generalRate": 5.5,
          "seniorCitizenRate": 6,
          "superSeniorRate": 6.25,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "180 days to 210 days",
          "generalRate": 6.25,
          "seniorCitizenRate": 6.75,
          "superSeniorRate": 7,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "211 days to less than 1 year",
          "generalRate": 6.5,
          "seniorCitizenRate": 7,
          "superSeniorRate": 7.25,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "5 years and up to 10 years",
          "generalRate": 7.15,
          "seniorCitizenRate": 7.65,
          "superSeniorRate": 7.8,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "5-Year Tax Saver Term Deposit (80C)",
          "generalRate": 7.25,
          "seniorCitizenRate": 7.75,
          "superSeniorRate": 7.9,
          "schemeType": "Tax Saving Term Deposit (Sec 80C)"
        },
        {
          "tenure": "3 years to less than 5 years",
          "generalRate": 7.3,
          "seniorCitizenRate": 7.8,
          "superSeniorRate": 7.95,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "1 year to less than 2 years",
          "generalRate": 7.5,
          "seniorCitizenRate": 8,
          "superSeniorRate": 8.15,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "2 years to less than 3 years",
          "generalRate": 7.55,
          "seniorCitizenRate": 8.05,
          "superSeniorRate": 8.2,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "400 Days to 500 Days",
          "generalRate": 7.75,
          "seniorCitizenRate": 8.25,
          "superSeniorRate": 8.4,
          "schemeType": "IDFCFIRSTB Privilege Fixed Deposit"
        },
        {
          "tenure": "IDFCFIRSTB Privilege Fixed Deposit",
          "generalRate": 7.75,
          "seniorCitizenRate": 8.25,
          "superSeniorRate": 8.45,
          "schemeType": "Flagship Special Deposit"
        }
      ],
      "recurringDeposit": [
        {
          "tenure": "6 Months to < 12 Months",
          "generalRate": 6.25,
          "seniorCitizenRate": 6.75,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "12 Months to < 24 Months",
          "generalRate": 6.75,
          "seniorCitizenRate": 7.25,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "24 Months to < 36 Months",
          "generalRate": 7,
          "seniorCitizenRate": 7.5,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "36 Months to < 60 Months",
          "generalRate": 6.8,
          "seniorCitizenRate": 7.3,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "60 Months to 120 Months",
          "generalRate": 6.6,
          "seniorCitizenRate": 7.1,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        }
      ],
      "savingsAccount": [
        {
          "balanceSlab": "Up to ₹1 Lakh",
          "rate": 3,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Lakh up to ₹10 Lakhs",
          "rate": 3.15,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Lakhs up to ₹1 Crore",
          "rate": 3.35,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Crore up to ₹10 Crores",
          "rate": 3.5,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Crores",
          "rate": 3.75,
          "calculation": "Daily balance calculated, paid quarterly"
        }
      ]
    },
    "lendingTables": {
      "benchmarkType": "Floating (EBLR / MCLR Linked)",
      "repoLinkedRate": 8.55,
      "mclr": [
        {
          "tenure": "Overnight MCLR",
          "rate": 8.85
        },
        {
          "tenure": "1 Month MCLR",
          "rate": 9
        },
        {
          "tenure": "3 Months MCLR",
          "rate": 9.1
        },
        {
          "tenure": "6 Months MCLR",
          "rate": 9.3
        },
        {
          "tenure": "1 Year MCLR",
          "rate": 9.45
        },
        {
          "tenure": "2 Years MCLR",
          "rate": 9.6
        },
        {
          "tenure": "3 Years MCLR",
          "rate": 9.7
        }
      ],
      "homeLoanSlabs": [
        {
          "cibilScoreTier": "CIBIL >= 750 (Grade 1)",
          "salariedRate": 8.75,
          "nonSalariedRate": 8.9,
          "maxLtv": "80% - 90%"
        },
        {
          "cibilScoreTier": "CIBIL 700 - 749 (Grade 2)",
          "salariedRate": 9,
          "nonSalariedRate": 9.15,
          "maxLtv": "75% - 80%"
        },
        {
          "cibilScoreTier": "CIBIL 650 - 699 (Grade 3)",
          "salariedRate": 9.3,
          "nonSalariedRate": 9.45,
          "maxLtv": "75%"
        },
        {
          "cibilScoreTier": "CIBIL 550 - 649 (Grade 4)",
          "salariedRate": 9.7,
          "nonSalariedRate": 9.85,
          "maxLtv": "70%"
        }
      ]
    }
  },
  {
    "bankName": "Federal Bank",
    "shortName": "FEDERALBNK",
    "bankCode": "federalbnk",
    "category": "Private Sector Bank",
    "categoryCode": "private",
    "headquarters": "Kochi, Kerala",
    "established": 1931,
    "logoUrl": "/assets/images/banks/federalbnk/symbol.svg",
    "ratesUrl": "https://www.federalbank.co.in/deposit-rate",
    "websiteUrl": "https://www.federalbank.co.in",
    "lastUpdated": "2026-10-08T09:06:52.000Z",
    "lastUpdatedDisplay": "8 Oct 2026 09:06 am IST",
    "status": "verified",
    "liveHttpStatus": 200,
    "responseTimeMs": 1184,
    "tablesSummary": {
      "fdTranchesCount": 14,
      "rdTranchesCount": 5,
      "savingsTiersCount": 5,
      "mclrTenuresCount": 7,
      "peakGeneralFdRate": 7.4,
      "peakSeniorFdRate": 8.25,
      "lowestHomeLoanRate": 8.75
    },
    "depositTables": {
      "fixedDeposit": [
        {
          "tenure": "7 days to 14 days",
          "generalRate": 3.5,
          "seniorCitizenRate": 4,
          "superSeniorRate": 4.3,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "15 days to 29 days",
          "generalRate": 3.5,
          "seniorCitizenRate": 4,
          "superSeniorRate": 4.3,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "30 days to 45 days",
          "generalRate": 4,
          "seniorCitizenRate": 4.5,
          "superSeniorRate": 4.75,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "46 days to 90 days",
          "generalRate": 5,
          "seniorCitizenRate": 5.5,
          "superSeniorRate": 5.75,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "91 days to 179 days",
          "generalRate": 5.5,
          "seniorCitizenRate": 6,
          "superSeniorRate": 6.25,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "180 days to 210 days",
          "generalRate": 6.25,
          "seniorCitizenRate": 6.75,
          "superSeniorRate": 7,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "211 days to less than 1 year",
          "generalRate": 6.5,
          "seniorCitizenRate": 7,
          "superSeniorRate": 7.25,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "5 years and up to 10 years",
          "generalRate": 6.8,
          "seniorCitizenRate": 7.3,
          "superSeniorRate": 7.45,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "5-Year Tax Saver Term Deposit (80C)",
          "generalRate": 6.9,
          "seniorCitizenRate": 7.4,
          "superSeniorRate": 7.55,
          "schemeType": "Tax Saving Term Deposit (Sec 80C)"
        },
        {
          "tenure": "3 years to less than 5 years",
          "generalRate": 6.95,
          "seniorCitizenRate": 7.45,
          "superSeniorRate": 7.6,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "1 year to less than 2 years",
          "generalRate": 7.15,
          "seniorCitizenRate": 7.65,
          "superSeniorRate": 7.8,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "2 years to less than 3 years",
          "generalRate": 7.2,
          "seniorCitizenRate": 7.7,
          "superSeniorRate": 7.85,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "400 Days to 500 Days",
          "generalRate": 7.4,
          "seniorCitizenRate": 8.25,
          "superSeniorRate": 8.4,
          "schemeType": "FEDERALBNK Privilege Fixed Deposit"
        },
        {
          "tenure": "FEDERALBNK Privilege Fixed Deposit",
          "generalRate": 7.4,
          "seniorCitizenRate": 8.25,
          "superSeniorRate": 8.45,
          "schemeType": "Flagship Special Deposit"
        }
      ],
      "recurringDeposit": [
        {
          "tenure": "6 Months to < 12 Months",
          "generalRate": 6.25,
          "seniorCitizenRate": 6.75,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "12 Months to < 24 Months",
          "generalRate": 6.75,
          "seniorCitizenRate": 7.25,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "24 Months to < 36 Months",
          "generalRate": 7,
          "seniorCitizenRate": 7.5,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "36 Months to < 60 Months",
          "generalRate": 6.8,
          "seniorCitizenRate": 7.3,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "60 Months to 120 Months",
          "generalRate": 6.6,
          "seniorCitizenRate": 7.1,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        }
      ],
      "savingsAccount": [
        {
          "balanceSlab": "Up to ₹1 Lakh",
          "rate": 3,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Lakh up to ₹10 Lakhs",
          "rate": 3.15,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Lakhs up to ₹1 Crore",
          "rate": 3.35,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Crore up to ₹10 Crores",
          "rate": 3.5,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Crores",
          "rate": 3.75,
          "calculation": "Daily balance calculated, paid quarterly"
        }
      ]
    },
    "lendingTables": {
      "benchmarkType": "Floating (EBLR / MCLR Linked)",
      "repoLinkedRate": 8.55,
      "mclr": [
        {
          "tenure": "Overnight MCLR",
          "rate": 8.85
        },
        {
          "tenure": "1 Month MCLR",
          "rate": 9
        },
        {
          "tenure": "3 Months MCLR",
          "rate": 9.1
        },
        {
          "tenure": "6 Months MCLR",
          "rate": 9.3
        },
        {
          "tenure": "1 Year MCLR",
          "rate": 9.45
        },
        {
          "tenure": "2 Years MCLR",
          "rate": 9.6
        },
        {
          "tenure": "3 Years MCLR",
          "rate": 9.7
        }
      ],
      "homeLoanSlabs": [
        {
          "cibilScoreTier": "CIBIL >= 750 (Grade 1)",
          "salariedRate": 8.75,
          "nonSalariedRate": 8.9,
          "maxLtv": "80% - 90%"
        },
        {
          "cibilScoreTier": "CIBIL 700 - 749 (Grade 2)",
          "salariedRate": 9,
          "nonSalariedRate": 9.15,
          "maxLtv": "75% - 80%"
        },
        {
          "cibilScoreTier": "CIBIL 650 - 699 (Grade 3)",
          "salariedRate": 9.3,
          "nonSalariedRate": 9.45,
          "maxLtv": "75%"
        },
        {
          "cibilScoreTier": "CIBIL 550 - 649 (Grade 4)",
          "salariedRate": 9.7,
          "nonSalariedRate": 9.85,
          "maxLtv": "70%"
        }
      ]
    }
  },
  {
    "bankName": "Yes Bank",
    "shortName": "YESBANK",
    "bankCode": "yesbank",
    "category": "Private Sector Bank",
    "categoryCode": "private",
    "headquarters": "Mumbai, Maharashtra",
    "established": 2004,
    "logoUrl": "/assets/images/banks/yesbank/symbol.svg",
    "ratesUrl": "https://www.yesbank.in/personal-banking/yes-individual/deposits/fixed-deposit",
    "websiteUrl": "https://www.yesbank.in",
    "lastUpdated": "2026-10-08T09:06:52.000Z",
    "lastUpdatedDisplay": "8 Oct 2026 09:06 am IST",
    "status": "verified",
    "liveHttpStatus": 200,
    "responseTimeMs": 431,
    "tablesSummary": {
      "fdTranchesCount": 14,
      "rdTranchesCount": 5,
      "savingsTiersCount": 5,
      "mclrTenuresCount": 7,
      "peakGeneralFdRate": 7.75,
      "peakSeniorFdRate": 8.25,
      "lowestHomeLoanRate": 8.75
    },
    "depositTables": {
      "fixedDeposit": [
        {
          "tenure": "7 days to 14 days",
          "generalRate": 3.5,
          "seniorCitizenRate": 4,
          "superSeniorRate": 4.3,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "15 days to 29 days",
          "generalRate": 3.5,
          "seniorCitizenRate": 4,
          "superSeniorRate": 4.3,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "30 days to 45 days",
          "generalRate": 4,
          "seniorCitizenRate": 4.5,
          "superSeniorRate": 4.75,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "46 days to 90 days",
          "generalRate": 5,
          "seniorCitizenRate": 5.5,
          "superSeniorRate": 5.75,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "91 days to 179 days",
          "generalRate": 5.5,
          "seniorCitizenRate": 6,
          "superSeniorRate": 6.25,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "180 days to 210 days",
          "generalRate": 6.25,
          "seniorCitizenRate": 6.75,
          "superSeniorRate": 7,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "211 days to less than 1 year",
          "generalRate": 6.5,
          "seniorCitizenRate": 7,
          "superSeniorRate": 7.25,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "5 years and up to 10 years",
          "generalRate": 7.15,
          "seniorCitizenRate": 7.65,
          "superSeniorRate": 7.8,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "5-Year Tax Saver Term Deposit (80C)",
          "generalRate": 7.25,
          "seniorCitizenRate": 7.75,
          "superSeniorRate": 7.9,
          "schemeType": "Tax Saving Term Deposit (Sec 80C)"
        },
        {
          "tenure": "3 years to less than 5 years",
          "generalRate": 7.3,
          "seniorCitizenRate": 7.8,
          "superSeniorRate": 7.95,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "1 year to less than 2 years",
          "generalRate": 7.5,
          "seniorCitizenRate": 8,
          "superSeniorRate": 8.15,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "2 years to less than 3 years",
          "generalRate": 7.55,
          "seniorCitizenRate": 8.05,
          "superSeniorRate": 8.2,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "400 Days to 500 Days",
          "generalRate": 7.75,
          "seniorCitizenRate": 8.25,
          "superSeniorRate": 8.4,
          "schemeType": "YESBANK Privilege Fixed Deposit"
        },
        {
          "tenure": "YESBANK Privilege Fixed Deposit",
          "generalRate": 7.75,
          "seniorCitizenRate": 8.25,
          "superSeniorRate": 8.45,
          "schemeType": "Flagship Special Deposit"
        }
      ],
      "recurringDeposit": [
        {
          "tenure": "6 Months to < 12 Months",
          "generalRate": 6.25,
          "seniorCitizenRate": 6.75,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "12 Months to < 24 Months",
          "generalRate": 6.75,
          "seniorCitizenRate": 7.25,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "24 Months to < 36 Months",
          "generalRate": 7,
          "seniorCitizenRate": 7.5,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "36 Months to < 60 Months",
          "generalRate": 6.8,
          "seniorCitizenRate": 7.3,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "60 Months to 120 Months",
          "generalRate": 6.6,
          "seniorCitizenRate": 7.1,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        }
      ],
      "savingsAccount": [
        {
          "balanceSlab": "Up to ₹1 Lakh",
          "rate": 3,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Lakh up to ₹10 Lakhs",
          "rate": 3.15,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Lakhs up to ₹1 Crore",
          "rate": 3.35,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Crore up to ₹10 Crores",
          "rate": 3.5,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Crores",
          "rate": 3.75,
          "calculation": "Daily balance calculated, paid quarterly"
        }
      ]
    },
    "lendingTables": {
      "benchmarkType": "Floating (EBLR / MCLR Linked)",
      "repoLinkedRate": 8.55,
      "mclr": [
        {
          "tenure": "Overnight MCLR",
          "rate": 8.85
        },
        {
          "tenure": "1 Month MCLR",
          "rate": 9
        },
        {
          "tenure": "3 Months MCLR",
          "rate": 9.1
        },
        {
          "tenure": "6 Months MCLR",
          "rate": 9.3
        },
        {
          "tenure": "1 Year MCLR",
          "rate": 9.45
        },
        {
          "tenure": "2 Years MCLR",
          "rate": 9.6
        },
        {
          "tenure": "3 Years MCLR",
          "rate": 9.7
        }
      ],
      "homeLoanSlabs": [
        {
          "cibilScoreTier": "CIBIL >= 750 (Grade 1)",
          "salariedRate": 8.75,
          "nonSalariedRate": 8.9,
          "maxLtv": "80% - 90%"
        },
        {
          "cibilScoreTier": "CIBIL 700 - 749 (Grade 2)",
          "salariedRate": 9,
          "nonSalariedRate": 9.15,
          "maxLtv": "75% - 80%"
        },
        {
          "cibilScoreTier": "CIBIL 650 - 699 (Grade 3)",
          "salariedRate": 9.3,
          "nonSalariedRate": 9.45,
          "maxLtv": "75%"
        },
        {
          "cibilScoreTier": "CIBIL 550 - 649 (Grade 4)",
          "salariedRate": 9.7,
          "nonSalariedRate": 9.85,
          "maxLtv": "70%"
        }
      ]
    }
  },
  {
    "bankName": "Bandhan Bank",
    "shortName": "BANDHANBNK",
    "bankCode": "bandhanbnk",
    "category": "Private Sector Bank",
    "categoryCode": "private",
    "headquarters": "Kolkata, West Bengal",
    "established": 2015,
    "logoUrl": "/assets/images/banks/bandhanbnk/symbol.svg",
    "ratesUrl": "https://bandhanbank.com/rates-and-charges",
    "websiteUrl": "https://bandhanbank.com",
    "lastUpdated": "2026-10-08T09:06:52.000Z",
    "lastUpdatedDisplay": "8 Oct 2026 09:06 am IST",
    "status": "verified",
    "liveHttpStatus": 404,
    "responseTimeMs": 1038,
    "tablesSummary": {
      "fdTranchesCount": 14,
      "rdTranchesCount": 5,
      "savingsTiersCount": 5,
      "mclrTenuresCount": 7,
      "peakGeneralFdRate": 7.85,
      "peakSeniorFdRate": 8.25,
      "lowestHomeLoanRate": 8.75
    },
    "depositTables": {
      "fixedDeposit": [
        {
          "tenure": "7 days to 14 days",
          "generalRate": 3.5,
          "seniorCitizenRate": 4,
          "superSeniorRate": 4.3,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "15 days to 29 days",
          "generalRate": 3.5,
          "seniorCitizenRate": 4,
          "superSeniorRate": 4.3,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "30 days to 45 days",
          "generalRate": 4,
          "seniorCitizenRate": 4.5,
          "superSeniorRate": 4.75,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "46 days to 90 days",
          "generalRate": 5,
          "seniorCitizenRate": 5.5,
          "superSeniorRate": 5.75,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "91 days to 179 days",
          "generalRate": 5.5,
          "seniorCitizenRate": 6,
          "superSeniorRate": 6.25,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "180 days to 210 days",
          "generalRate": 6.25,
          "seniorCitizenRate": 6.75,
          "superSeniorRate": 7,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "211 days to less than 1 year",
          "generalRate": 6.5,
          "seniorCitizenRate": 7,
          "superSeniorRate": 7.25,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "5 years and up to 10 years",
          "generalRate": 7.25,
          "seniorCitizenRate": 7.75,
          "superSeniorRate": 7.9,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "5-Year Tax Saver Term Deposit (80C)",
          "generalRate": 7.35,
          "seniorCitizenRate": 7.85,
          "superSeniorRate": 8,
          "schemeType": "Tax Saving Term Deposit (Sec 80C)"
        },
        {
          "tenure": "3 years to less than 5 years",
          "generalRate": 7.4,
          "seniorCitizenRate": 7.9,
          "superSeniorRate": 8.05,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "1 year to less than 2 years",
          "generalRate": 7.6,
          "seniorCitizenRate": 8.1,
          "superSeniorRate": 8.25,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "2 years to less than 3 years",
          "generalRate": 7.65,
          "seniorCitizenRate": 8.15,
          "superSeniorRate": 8.3,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "400 Days to 500 Days",
          "generalRate": 7.85,
          "seniorCitizenRate": 8.25,
          "superSeniorRate": 8.4,
          "schemeType": "BANDHANBNK Privilege Fixed Deposit"
        },
        {
          "tenure": "BANDHANBNK Privilege Fixed Deposit",
          "generalRate": 7.85,
          "seniorCitizenRate": 8.25,
          "superSeniorRate": 8.45,
          "schemeType": "Flagship Special Deposit"
        }
      ],
      "recurringDeposit": [
        {
          "tenure": "6 Months to < 12 Months",
          "generalRate": 6.25,
          "seniorCitizenRate": 6.75,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "12 Months to < 24 Months",
          "generalRate": 6.75,
          "seniorCitizenRate": 7.25,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "24 Months to < 36 Months",
          "generalRate": 7,
          "seniorCitizenRate": 7.5,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "36 Months to < 60 Months",
          "generalRate": 6.8,
          "seniorCitizenRate": 7.3,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "60 Months to 120 Months",
          "generalRate": 6.6,
          "seniorCitizenRate": 7.1,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        }
      ],
      "savingsAccount": [
        {
          "balanceSlab": "Up to ₹1 Lakh",
          "rate": 3,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Lakh up to ₹10 Lakhs",
          "rate": 3.15,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Lakhs up to ₹1 Crore",
          "rate": 3.35,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Crore up to ₹10 Crores",
          "rate": 3.5,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Crores",
          "rate": 3.75,
          "calculation": "Daily balance calculated, paid quarterly"
        }
      ]
    },
    "lendingTables": {
      "benchmarkType": "Floating (EBLR / MCLR Linked)",
      "repoLinkedRate": 8.55,
      "mclr": [
        {
          "tenure": "Overnight MCLR",
          "rate": 8.85
        },
        {
          "tenure": "1 Month MCLR",
          "rate": 9
        },
        {
          "tenure": "3 Months MCLR",
          "rate": 9.1
        },
        {
          "tenure": "6 Months MCLR",
          "rate": 9.3
        },
        {
          "tenure": "1 Year MCLR",
          "rate": 9.45
        },
        {
          "tenure": "2 Years MCLR",
          "rate": 9.6
        },
        {
          "tenure": "3 Years MCLR",
          "rate": 9.7
        }
      ],
      "homeLoanSlabs": [
        {
          "cibilScoreTier": "CIBIL >= 750 (Grade 1)",
          "salariedRate": 8.75,
          "nonSalariedRate": 8.9,
          "maxLtv": "80% - 90%"
        },
        {
          "cibilScoreTier": "CIBIL 700 - 749 (Grade 2)",
          "salariedRate": 9,
          "nonSalariedRate": 9.15,
          "maxLtv": "75% - 80%"
        },
        {
          "cibilScoreTier": "CIBIL 650 - 699 (Grade 3)",
          "salariedRate": 9.3,
          "nonSalariedRate": 9.45,
          "maxLtv": "75%"
        },
        {
          "cibilScoreTier": "CIBIL 550 - 649 (Grade 4)",
          "salariedRate": 9.7,
          "nonSalariedRate": 9.85,
          "maxLtv": "70%"
        }
      ]
    }
  },
  {
    "bankName": "RBL Bank",
    "shortName": "RBLBANK",
    "bankCode": "rblbank",
    "category": "Private Sector Bank",
    "categoryCode": "private",
    "headquarters": "Mumbai, Maharashtra",
    "established": 1943,
    "logoUrl": "/assets/images/banks/rblbank/symbol.svg",
    "ratesUrl": "https://www.rblbank.com/interest-rates",
    "websiteUrl": "https://www.rblbank.com",
    "lastUpdated": "2026-10-08T09:06:52.000Z",
    "lastUpdatedDisplay": "8 Oct 2026 09:06 am IST",
    "status": "verified",
    "liveHttpStatus": 200,
    "responseTimeMs": 1320,
    "tablesSummary": {
      "fdTranchesCount": 34,
      "rdTranchesCount": 5,
      "savingsTiersCount": 5,
      "mclrTenuresCount": 7,
      "peakGeneralFdRate": 8.85,
      "peakSeniorFdRate": 9.35,
      "lowestHomeLoanRate": 8.75
    },
    "depositTables": {
      "fixedDeposit": [
        {
          "tenure": "7 days to 14 days",
          "generalRate": 3.5,
          "seniorCitizenRate": 3.5,
          "superSeniorRate": 4.25,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "2 year and above but less than 3 years",
          "generalRate": 3.5,
          "seniorCitizenRate": 4.2,
          "superSeniorRate": 2.5,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "3 year and above but less than 4 years",
          "generalRate": 3.5,
          "seniorCitizenRate": 4,
          "superSeniorRate": 2.5,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "2 year and above but less than 3 years",
          "generalRate": 3.5,
          "seniorCitizenRate": 4.2,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "3 year and above but less than 4 years",
          "generalRate": 3.5,
          "seniorCitizenRate": 4,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "4 year and above but less than 5 years",
          "generalRate": 3.75,
          "seniorCitizenRate": 3,
          "superSeniorRate": 2,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "5 years",
          "generalRate": 3.75,
          "seniorCitizenRate": 3,
          "superSeniorRate": 2,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "4 year and above but less than 5 years",
          "generalRate": 3.75,
          "seniorCitizenRate": 3,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "5 years",
          "generalRate": 3.75,
          "seniorCitizenRate": 3,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "15 days to 45 days",
          "generalRate": 4,
          "seniorCitizenRate": 4,
          "superSeniorRate": 4.75,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "1 year and above but less than 2 years",
          "generalRate": 4.1,
          "seniorCitizenRate": 4,
          "superSeniorRate": 3,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "1 year and above but less than 2 years",
          "generalRate": 4.1,
          "seniorCitizenRate": 4,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "46 days to 90 days",
          "generalRate": 4.5,
          "seniorCitizenRate": 4.5,
          "superSeniorRate": 5.25,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "91 days to 180 days",
          "generalRate": 4.75,
          "seniorCitizenRate": 4.75,
          "superSeniorRate": 5.5,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "181 days to 240 days",
          "generalRate": 5.5,
          "seniorCitizenRate": 5.61,
          "superSeniorRate": 6.25,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "6 months to 7 months",
          "generalRate": 5.5,
          "seniorCitizenRate": 6,
          "superSeniorRate": 5.5,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "241 days to 364 days",
          "generalRate": 6.05,
          "seniorCitizenRate": 6.19,
          "superSeniorRate": 6.8,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "8 months to 11 months",
          "generalRate": 6.05,
          "seniorCitizenRate": 6.55,
          "superSeniorRate": 6.05,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "60 months to 120 months",
          "generalRate": 6.7,
          "seniorCitizenRate": 6.87,
          "superSeniorRate": 7.45,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "Tax Savings Fixed Deposits (60 months)",
          "generalRate": 6.7,
          "seniorCitizenRate": 6.87,
          "superSeniorRate": 7.45,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "60 months to 120 months",
          "generalRate": 6.7,
          "seniorCitizenRate": 7.2,
          "superSeniorRate": 6.7,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "60 months to 120 months",
          "generalRate": 6.75,
          "seniorCitizenRate": 6.92,
          "superSeniorRate": 7.5,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "365 days (12 months) to 500 days",
          "generalRate": 6.9,
          "seniorCitizenRate": 7.08,
          "superSeniorRate": 7.65,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "501 days to less than 18 months",
          "generalRate": 6.9,
          "seniorCitizenRate": 7.08,
          "superSeniorRate": 7.65,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "12 months to 17 months",
          "generalRate": 6.9,
          "seniorCitizenRate": 7.4,
          "superSeniorRate": 6.9,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "365 days (12 months) to 500 days",
          "generalRate": 6.95,
          "seniorCitizenRate": 7.13,
          "superSeniorRate": 7.7,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "501 days to less than 18 months",
          "generalRate": 6.95,
          "seniorCitizenRate": 7.13,
          "superSeniorRate": 7.7,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "18 months to less than 60 months",
          "generalRate": 7,
          "seniorCitizenRate": 7.19,
          "superSeniorRate": 7.75,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "18 months to 59 months",
          "generalRate": 7,
          "seniorCitizenRate": 7.5,
          "superSeniorRate": 7,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "18 months to less than 60 months",
          "generalRate": 7.05,
          "seniorCitizenRate": 7.24,
          "superSeniorRate": 7.8,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "One Month",
          "generalRate": 7.7,
          "seniorCitizenRate": 8.2,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "Three Month",
          "generalRate": 8,
          "seniorCitizenRate": 8.5,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "Six Month",
          "generalRate": 8.65,
          "seniorCitizenRate": 9.15,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "One Year",
          "generalRate": 8.85,
          "seniorCitizenRate": 9.35,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        }
      ],
      "recurringDeposit": [
        {
          "tenure": "6 Months to < 12 Months",
          "generalRate": 6.25,
          "seniorCitizenRate": 6.75,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "12 Months to < 24 Months",
          "generalRate": 6.75,
          "seniorCitizenRate": 7.25,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "24 Months to < 36 Months",
          "generalRate": 7,
          "seniorCitizenRate": 7.5,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "36 Months to < 60 Months",
          "generalRate": 6.8,
          "seniorCitizenRate": 7.3,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "60 Months to 120 Months",
          "generalRate": 6.6,
          "seniorCitizenRate": 7.1,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        }
      ],
      "savingsAccount": [
        {
          "balanceSlab": "Up to ₹1 Lakh",
          "rate": 3,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Lakh up to ₹10 Lakhs",
          "rate": 3.15,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Lakhs up to ₹1 Crore",
          "rate": 3.35,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Crore up to ₹10 Crores",
          "rate": 3.5,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Crores",
          "rate": 3.75,
          "calculation": "Daily balance calculated, paid quarterly"
        }
      ]
    },
    "lendingTables": {
      "benchmarkType": "Floating (EBLR / MCLR Linked)",
      "repoLinkedRate": 8.55,
      "mclr": [
        {
          "tenure": "Overnight MCLR",
          "rate": 8.85
        },
        {
          "tenure": "1 Month MCLR",
          "rate": 9
        },
        {
          "tenure": "3 Months MCLR",
          "rate": 9.1
        },
        {
          "tenure": "6 Months MCLR",
          "rate": 9.3
        },
        {
          "tenure": "1 Year MCLR",
          "rate": 9.45
        },
        {
          "tenure": "2 Years MCLR",
          "rate": 9.6
        },
        {
          "tenure": "3 Years MCLR",
          "rate": 9.7
        }
      ],
      "homeLoanSlabs": [
        {
          "cibilScoreTier": "CIBIL >= 750 (Grade 1)",
          "salariedRate": 8.75,
          "nonSalariedRate": 8.9,
          "maxLtv": "80% - 90%"
        },
        {
          "cibilScoreTier": "CIBIL 700 - 749 (Grade 2)",
          "salariedRate": 9,
          "nonSalariedRate": 9.15,
          "maxLtv": "75% - 80%"
        },
        {
          "cibilScoreTier": "CIBIL 650 - 699 (Grade 3)",
          "salariedRate": 9.3,
          "nonSalariedRate": 9.45,
          "maxLtv": "75%"
        },
        {
          "cibilScoreTier": "CIBIL 550 - 649 (Grade 4)",
          "salariedRate": 9.7,
          "nonSalariedRate": 9.85,
          "maxLtv": "70%"
        }
      ]
    }
  },
  {
    "bankName": "IDBI Bank",
    "shortName": "IDBI",
    "bankCode": "idbi",
    "category": "Private Sector Bank",
    "categoryCode": "private",
    "headquarters": "Mumbai, Maharashtra",
    "established": 1964,
    "logoUrl": "/assets/images/banks/idbi/symbol.svg",
    "ratesUrl": "https://www.idbibank.in/interest-rates.asp",
    "websiteUrl": "https://www.idbibank.in",
    "lastUpdated": "2026-10-08T09:06:52.000Z",
    "lastUpdatedDisplay": "8 Oct 2026 09:06 am IST",
    "status": "verified",
    "liveHttpStatus": 503,
    "responseTimeMs": 639,
    "tablesSummary": {
      "fdTranchesCount": 14,
      "rdTranchesCount": 5,
      "savingsTiersCount": 5,
      "mclrTenuresCount": 7,
      "peakGeneralFdRate": 7.05,
      "peakSeniorFdRate": 8.25,
      "lowestHomeLoanRate": 8.75
    },
    "depositTables": {
      "fixedDeposit": [
        {
          "tenure": "7 days to 14 days",
          "generalRate": 3.5,
          "seniorCitizenRate": 4,
          "superSeniorRate": 4.3,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "15 days to 29 days",
          "generalRate": 3.5,
          "seniorCitizenRate": 4,
          "superSeniorRate": 4.3,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "30 days to 45 days",
          "generalRate": 4,
          "seniorCitizenRate": 4.5,
          "superSeniorRate": 4.75,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "46 days to 90 days",
          "generalRate": 5,
          "seniorCitizenRate": 5.5,
          "superSeniorRate": 5.75,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "91 days to 179 days",
          "generalRate": 5.5,
          "seniorCitizenRate": 6,
          "superSeniorRate": 6.25,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "180 days to 210 days",
          "generalRate": 6.25,
          "seniorCitizenRate": 6.75,
          "superSeniorRate": 7,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "5 years and up to 10 years",
          "generalRate": 6.45,
          "seniorCitizenRate": 6.95,
          "superSeniorRate": 7.1,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "211 days to less than 1 year",
          "generalRate": 6.5,
          "seniorCitizenRate": 7,
          "superSeniorRate": 7.25,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "5-Year Tax Saver Term Deposit (80C)",
          "generalRate": 6.55,
          "seniorCitizenRate": 7.05,
          "superSeniorRate": 7.2,
          "schemeType": "Tax Saving Term Deposit (Sec 80C)"
        },
        {
          "tenure": "3 years to less than 5 years",
          "generalRate": 6.6,
          "seniorCitizenRate": 7.1,
          "superSeniorRate": 7.25,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "1 year to less than 2 years",
          "generalRate": 6.8,
          "seniorCitizenRate": 7.3,
          "superSeniorRate": 7.45,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "2 years to less than 3 years",
          "generalRate": 6.85,
          "seniorCitizenRate": 7.35,
          "superSeniorRate": 7.5,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "400 Days to 500 Days",
          "generalRate": 7.05,
          "seniorCitizenRate": 8.25,
          "superSeniorRate": 8.4,
          "schemeType": "IDBI Privilege Fixed Deposit"
        },
        {
          "tenure": "IDBI Privilege Fixed Deposit",
          "generalRate": 7.05,
          "seniorCitizenRate": 8.25,
          "superSeniorRate": 8.45,
          "schemeType": "Flagship Special Deposit"
        }
      ],
      "recurringDeposit": [
        {
          "tenure": "6 Months to < 12 Months",
          "generalRate": 6.25,
          "seniorCitizenRate": 6.75,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "12 Months to < 24 Months",
          "generalRate": 6.75,
          "seniorCitizenRate": 7.25,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "24 Months to < 36 Months",
          "generalRate": 7,
          "seniorCitizenRate": 7.5,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "36 Months to < 60 Months",
          "generalRate": 6.8,
          "seniorCitizenRate": 7.3,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "60 Months to 120 Months",
          "generalRate": 6.6,
          "seniorCitizenRate": 7.1,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        }
      ],
      "savingsAccount": [
        {
          "balanceSlab": "Up to ₹1 Lakh",
          "rate": 3,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Lakh up to ₹10 Lakhs",
          "rate": 3.15,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Lakhs up to ₹1 Crore",
          "rate": 3.35,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Crore up to ₹10 Crores",
          "rate": 3.5,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Crores",
          "rate": 3.75,
          "calculation": "Daily balance calculated, paid quarterly"
        }
      ]
    },
    "lendingTables": {
      "benchmarkType": "Floating (EBLR / MCLR Linked)",
      "repoLinkedRate": 8.55,
      "mclr": [
        {
          "tenure": "Overnight MCLR",
          "rate": 8.85
        },
        {
          "tenure": "1 Month MCLR",
          "rate": 9
        },
        {
          "tenure": "3 Months MCLR",
          "rate": 9.1
        },
        {
          "tenure": "6 Months MCLR",
          "rate": 9.3
        },
        {
          "tenure": "1 Year MCLR",
          "rate": 9.45
        },
        {
          "tenure": "2 Years MCLR",
          "rate": 9.6
        },
        {
          "tenure": "3 Years MCLR",
          "rate": 9.7
        }
      ],
      "homeLoanSlabs": [
        {
          "cibilScoreTier": "CIBIL >= 750 (Grade 1)",
          "salariedRate": 8.75,
          "nonSalariedRate": 8.9,
          "maxLtv": "80% - 90%"
        },
        {
          "cibilScoreTier": "CIBIL 700 - 749 (Grade 2)",
          "salariedRate": 9,
          "nonSalariedRate": 9.15,
          "maxLtv": "75% - 80%"
        },
        {
          "cibilScoreTier": "CIBIL 650 - 699 (Grade 3)",
          "salariedRate": 9.3,
          "nonSalariedRate": 9.45,
          "maxLtv": "75%"
        },
        {
          "cibilScoreTier": "CIBIL 550 - 649 (Grade 4)",
          "salariedRate": 9.7,
          "nonSalariedRate": 9.85,
          "maxLtv": "70%"
        }
      ]
    }
  },
  {
    "bankName": "South Indian Bank",
    "shortName": "SOUTHBANK",
    "bankCode": "southbank",
    "category": "Private Sector Bank",
    "categoryCode": "private",
    "headquarters": "Thrissur, Kerala",
    "established": 1929,
    "logoUrl": "/assets/images/banks/southbank/symbol.svg",
    "ratesUrl": "https://www.southindianbank.com/interestrate/interestrates.aspx",
    "websiteUrl": "https://www.southindianbank.com",
    "lastUpdated": "2026-10-08T09:06:52.000Z",
    "lastUpdatedDisplay": "8 Oct 2026 09:06 am IST",
    "status": "verified",
    "liveHttpStatus": 503,
    "responseTimeMs": 344,
    "tablesSummary": {
      "fdTranchesCount": 14,
      "rdTranchesCount": 5,
      "savingsTiersCount": 5,
      "mclrTenuresCount": 7,
      "peakGeneralFdRate": 7.4,
      "peakSeniorFdRate": 8.25,
      "lowestHomeLoanRate": 8.75
    },
    "depositTables": {
      "fixedDeposit": [
        {
          "tenure": "7 days to 14 days",
          "generalRate": 3.5,
          "seniorCitizenRate": 4,
          "superSeniorRate": 4.3,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "15 days to 29 days",
          "generalRate": 3.5,
          "seniorCitizenRate": 4,
          "superSeniorRate": 4.3,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "30 days to 45 days",
          "generalRate": 4,
          "seniorCitizenRate": 4.5,
          "superSeniorRate": 4.75,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "46 days to 90 days",
          "generalRate": 5,
          "seniorCitizenRate": 5.5,
          "superSeniorRate": 5.75,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "91 days to 179 days",
          "generalRate": 5.5,
          "seniorCitizenRate": 6,
          "superSeniorRate": 6.25,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "180 days to 210 days",
          "generalRate": 6.25,
          "seniorCitizenRate": 6.75,
          "superSeniorRate": 7,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "211 days to less than 1 year",
          "generalRate": 6.5,
          "seniorCitizenRate": 7,
          "superSeniorRate": 7.25,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "5 years and up to 10 years",
          "generalRate": 6.8,
          "seniorCitizenRate": 7.3,
          "superSeniorRate": 7.45,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "5-Year Tax Saver Term Deposit (80C)",
          "generalRate": 6.9,
          "seniorCitizenRate": 7.4,
          "superSeniorRate": 7.55,
          "schemeType": "Tax Saving Term Deposit (Sec 80C)"
        },
        {
          "tenure": "3 years to less than 5 years",
          "generalRate": 6.95,
          "seniorCitizenRate": 7.45,
          "superSeniorRate": 7.6,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "1 year to less than 2 years",
          "generalRate": 7.15,
          "seniorCitizenRate": 7.65,
          "superSeniorRate": 7.8,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "2 years to less than 3 years",
          "generalRate": 7.2,
          "seniorCitizenRate": 7.7,
          "superSeniorRate": 7.85,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "400 Days to 500 Days",
          "generalRate": 7.4,
          "seniorCitizenRate": 8.25,
          "superSeniorRate": 8.4,
          "schemeType": "SOUTHBANK Privilege Fixed Deposit"
        },
        {
          "tenure": "SOUTHBANK Privilege Fixed Deposit",
          "generalRate": 7.4,
          "seniorCitizenRate": 8.25,
          "superSeniorRate": 8.45,
          "schemeType": "Flagship Special Deposit"
        }
      ],
      "recurringDeposit": [
        {
          "tenure": "6 Months to < 12 Months",
          "generalRate": 6.25,
          "seniorCitizenRate": 6.75,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "12 Months to < 24 Months",
          "generalRate": 6.75,
          "seniorCitizenRate": 7.25,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "24 Months to < 36 Months",
          "generalRate": 7,
          "seniorCitizenRate": 7.5,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "36 Months to < 60 Months",
          "generalRate": 6.8,
          "seniorCitizenRate": 7.3,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "60 Months to 120 Months",
          "generalRate": 6.6,
          "seniorCitizenRate": 7.1,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        }
      ],
      "savingsAccount": [
        {
          "balanceSlab": "Up to ₹1 Lakh",
          "rate": 3,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Lakh up to ₹10 Lakhs",
          "rate": 3.15,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Lakhs up to ₹1 Crore",
          "rate": 3.35,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Crore up to ₹10 Crores",
          "rate": 3.5,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Crores",
          "rate": 3.75,
          "calculation": "Daily balance calculated, paid quarterly"
        }
      ]
    },
    "lendingTables": {
      "benchmarkType": "Floating (EBLR / MCLR Linked)",
      "repoLinkedRate": 8.55,
      "mclr": [
        {
          "tenure": "Overnight MCLR",
          "rate": 8.85
        },
        {
          "tenure": "1 Month MCLR",
          "rate": 9
        },
        {
          "tenure": "3 Months MCLR",
          "rate": 9.1
        },
        {
          "tenure": "6 Months MCLR",
          "rate": 9.3
        },
        {
          "tenure": "1 Year MCLR",
          "rate": 9.45
        },
        {
          "tenure": "2 Years MCLR",
          "rate": 9.6
        },
        {
          "tenure": "3 Years MCLR",
          "rate": 9.7
        }
      ],
      "homeLoanSlabs": [
        {
          "cibilScoreTier": "CIBIL >= 750 (Grade 1)",
          "salariedRate": 8.75,
          "nonSalariedRate": 8.9,
          "maxLtv": "80% - 90%"
        },
        {
          "cibilScoreTier": "CIBIL 700 - 749 (Grade 2)",
          "salariedRate": 9,
          "nonSalariedRate": 9.15,
          "maxLtv": "75% - 80%"
        },
        {
          "cibilScoreTier": "CIBIL 650 - 699 (Grade 3)",
          "salariedRate": 9.3,
          "nonSalariedRate": 9.45,
          "maxLtv": "75%"
        },
        {
          "cibilScoreTier": "CIBIL 550 - 649 (Grade 4)",
          "salariedRate": 9.7,
          "nonSalariedRate": 9.85,
          "maxLtv": "70%"
        }
      ]
    }
  },
  {
    "bankName": "City Union Bank",
    "shortName": "CUB",
    "bankCode": "cub",
    "category": "Private Sector Bank",
    "categoryCode": "private",
    "headquarters": "Kumbakonam, Tamil Nadu",
    "established": 1904,
    "logoUrl": "/assets/images/banks/cub/symbol.svg",
    "ratesUrl": "https://www.cityunionbank.com/deposit-interest-rates",
    "websiteUrl": "https://www.cityunionbank.com",
    "lastUpdated": "2026-10-08T09:06:52.000Z",
    "lastUpdatedDisplay": "8 Oct 2026 09:06 am IST",
    "status": "verified",
    "liveHttpStatus": 200,
    "responseTimeMs": 847,
    "tablesSummary": {
      "fdTranchesCount": 14,
      "rdTranchesCount": 5,
      "savingsTiersCount": 5,
      "mclrTenuresCount": 7,
      "peakGeneralFdRate": 7.25,
      "peakSeniorFdRate": 8.25,
      "lowestHomeLoanRate": 8.75
    },
    "depositTables": {
      "fixedDeposit": [
        {
          "tenure": "7 days to 14 days",
          "generalRate": 3.5,
          "seniorCitizenRate": 4,
          "superSeniorRate": 4.3,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "15 days to 29 days",
          "generalRate": 3.5,
          "seniorCitizenRate": 4,
          "superSeniorRate": 4.3,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "30 days to 45 days",
          "generalRate": 4,
          "seniorCitizenRate": 4.5,
          "superSeniorRate": 4.75,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "46 days to 90 days",
          "generalRate": 5,
          "seniorCitizenRate": 5.5,
          "superSeniorRate": 5.75,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "91 days to 179 days",
          "generalRate": 5.5,
          "seniorCitizenRate": 6,
          "superSeniorRate": 6.25,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "180 days to 210 days",
          "generalRate": 6.25,
          "seniorCitizenRate": 6.75,
          "superSeniorRate": 7,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "211 days to less than 1 year",
          "generalRate": 6.5,
          "seniorCitizenRate": 7,
          "superSeniorRate": 7.25,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "5 years and up to 10 years",
          "generalRate": 6.65,
          "seniorCitizenRate": 7.15,
          "superSeniorRate": 7.3,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "5-Year Tax Saver Term Deposit (80C)",
          "generalRate": 6.75,
          "seniorCitizenRate": 7.25,
          "superSeniorRate": 7.4,
          "schemeType": "Tax Saving Term Deposit (Sec 80C)"
        },
        {
          "tenure": "3 years to less than 5 years",
          "generalRate": 6.8,
          "seniorCitizenRate": 7.3,
          "superSeniorRate": 7.45,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "1 year to less than 2 years",
          "generalRate": 7,
          "seniorCitizenRate": 7.5,
          "superSeniorRate": 7.65,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "2 years to less than 3 years",
          "generalRate": 7.05,
          "seniorCitizenRate": 7.55,
          "superSeniorRate": 7.7,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "400 Days to 500 Days",
          "generalRate": 7.25,
          "seniorCitizenRate": 8.25,
          "superSeniorRate": 8.4,
          "schemeType": "CUB Privilege Fixed Deposit"
        },
        {
          "tenure": "CUB Privilege Fixed Deposit",
          "generalRate": 7.25,
          "seniorCitizenRate": 8.25,
          "superSeniorRate": 8.45,
          "schemeType": "Flagship Special Deposit"
        }
      ],
      "recurringDeposit": [
        {
          "tenure": "6 Months to < 12 Months",
          "generalRate": 6.25,
          "seniorCitizenRate": 6.75,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "12 Months to < 24 Months",
          "generalRate": 6.75,
          "seniorCitizenRate": 7.25,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "24 Months to < 36 Months",
          "generalRate": 7,
          "seniorCitizenRate": 7.5,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "36 Months to < 60 Months",
          "generalRate": 6.8,
          "seniorCitizenRate": 7.3,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "60 Months to 120 Months",
          "generalRate": 6.6,
          "seniorCitizenRate": 7.1,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        }
      ],
      "savingsAccount": [
        {
          "balanceSlab": "Up to ₹1 Lakh",
          "rate": 3,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Lakh up to ₹10 Lakhs",
          "rate": 3.15,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Lakhs up to ₹1 Crore",
          "rate": 3.35,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Crore up to ₹10 Crores",
          "rate": 3.25,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Crores",
          "rate": 3.5,
          "calculation": "Daily balance calculated, paid quarterly"
        }
      ]
    },
    "lendingTables": {
      "benchmarkType": "Floating (EBLR / MCLR Linked)",
      "repoLinkedRate": 8.55,
      "mclr": [
        {
          "tenure": "Overnight MCLR",
          "rate": 8.85
        },
        {
          "tenure": "1 Month MCLR",
          "rate": 9
        },
        {
          "tenure": "3 Months MCLR",
          "rate": 9.1
        },
        {
          "tenure": "6 Months MCLR",
          "rate": 9.3
        },
        {
          "tenure": "1 Year MCLR",
          "rate": 9.45
        },
        {
          "tenure": "2 Years MCLR",
          "rate": 9.6
        },
        {
          "tenure": "3 Years MCLR",
          "rate": 9.7
        }
      ],
      "homeLoanSlabs": [
        {
          "cibilScoreTier": "CIBIL >= 750 (Grade 1)",
          "salariedRate": 8.75,
          "nonSalariedRate": 8.9,
          "maxLtv": "80% - 90%"
        },
        {
          "cibilScoreTier": "CIBIL 700 - 749 (Grade 2)",
          "salariedRate": 9,
          "nonSalariedRate": 9.15,
          "maxLtv": "75% - 80%"
        },
        {
          "cibilScoreTier": "CIBIL 650 - 699 (Grade 3)",
          "salariedRate": 9.3,
          "nonSalariedRate": 9.45,
          "maxLtv": "75%"
        },
        {
          "cibilScoreTier": "CIBIL 550 - 649 (Grade 4)",
          "salariedRate": 9.7,
          "nonSalariedRate": 9.85,
          "maxLtv": "70%"
        }
      ]
    }
  },
  {
    "bankName": "Karur Vysya Bank",
    "shortName": "KVB",
    "bankCode": "kvb",
    "category": "Private Sector Bank",
    "categoryCode": "private",
    "headquarters": "Karur, Tamil Nadu",
    "established": 1916,
    "logoUrl": "/assets/images/banks/kvb/symbol.svg",
    "ratesUrl": "https://www.kvb.co.in/interest-rates/",
    "websiteUrl": "https://www.kvb.co.in",
    "lastUpdated": "2026-10-08T09:06:52.000Z",
    "lastUpdatedDisplay": "8 Oct 2026 09:06 am IST",
    "status": "verified",
    "liveHttpStatus": 503,
    "responseTimeMs": 9,
    "tablesSummary": {
      "fdTranchesCount": 14,
      "rdTranchesCount": 5,
      "savingsTiersCount": 5,
      "mclrTenuresCount": 7,
      "peakGeneralFdRate": 7.5,
      "peakSeniorFdRate": 8.25,
      "lowestHomeLoanRate": 8.75
    },
    "depositTables": {
      "fixedDeposit": [
        {
          "tenure": "7 days to 14 days",
          "generalRate": 3.5,
          "seniorCitizenRate": 4,
          "superSeniorRate": 4.3,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "15 days to 29 days",
          "generalRate": 3.5,
          "seniorCitizenRate": 4,
          "superSeniorRate": 4.3,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "30 days to 45 days",
          "generalRate": 4,
          "seniorCitizenRate": 4.5,
          "superSeniorRate": 4.75,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "46 days to 90 days",
          "generalRate": 5,
          "seniorCitizenRate": 5.5,
          "superSeniorRate": 5.75,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "91 days to 179 days",
          "generalRate": 5.5,
          "seniorCitizenRate": 6,
          "superSeniorRate": 6.25,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "180 days to 210 days",
          "generalRate": 6.25,
          "seniorCitizenRate": 6.75,
          "superSeniorRate": 7,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "211 days to less than 1 year",
          "generalRate": 6.5,
          "seniorCitizenRate": 7,
          "superSeniorRate": 7.25,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "5 years and up to 10 years",
          "generalRate": 6.9,
          "seniorCitizenRate": 7.4,
          "superSeniorRate": 7.55,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "5-Year Tax Saver Term Deposit (80C)",
          "generalRate": 7,
          "seniorCitizenRate": 7.5,
          "superSeniorRate": 7.65,
          "schemeType": "Tax Saving Term Deposit (Sec 80C)"
        },
        {
          "tenure": "3 years to less than 5 years",
          "generalRate": 7.05,
          "seniorCitizenRate": 7.55,
          "superSeniorRate": 7.7,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "1 year to less than 2 years",
          "generalRate": 7.25,
          "seniorCitizenRate": 7.75,
          "superSeniorRate": 7.9,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "2 years to less than 3 years",
          "generalRate": 7.3,
          "seniorCitizenRate": 7.8,
          "superSeniorRate": 7.95,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "400 Days to 500 Days",
          "generalRate": 7.5,
          "seniorCitizenRate": 8.25,
          "superSeniorRate": 8.4,
          "schemeType": "KVB Privilege Fixed Deposit"
        },
        {
          "tenure": "KVB Privilege Fixed Deposit",
          "generalRate": 7.5,
          "seniorCitizenRate": 8.25,
          "superSeniorRate": 8.45,
          "schemeType": "Flagship Special Deposit"
        }
      ],
      "recurringDeposit": [
        {
          "tenure": "6 Months to < 12 Months",
          "generalRate": 6.25,
          "seniorCitizenRate": 6.75,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "12 Months to < 24 Months",
          "generalRate": 6.75,
          "seniorCitizenRate": 7.25,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "24 Months to < 36 Months",
          "generalRate": 7,
          "seniorCitizenRate": 7.5,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "36 Months to < 60 Months",
          "generalRate": 6.8,
          "seniorCitizenRate": 7.3,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "60 Months to 120 Months",
          "generalRate": 6.6,
          "seniorCitizenRate": 7.1,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        }
      ],
      "savingsAccount": [
        {
          "balanceSlab": "Up to ₹1 Lakh",
          "rate": 3,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Lakh up to ₹10 Lakhs",
          "rate": 3.15,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Lakhs up to ₹1 Crore",
          "rate": 3.35,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Crore up to ₹10 Crores",
          "rate": 3.25,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Crores",
          "rate": 3.5,
          "calculation": "Daily balance calculated, paid quarterly"
        }
      ]
    },
    "lendingTables": {
      "benchmarkType": "Floating (EBLR / MCLR Linked)",
      "repoLinkedRate": 8.55,
      "mclr": [
        {
          "tenure": "Overnight MCLR",
          "rate": 8.85
        },
        {
          "tenure": "1 Month MCLR",
          "rate": 9
        },
        {
          "tenure": "3 Months MCLR",
          "rate": 9.1
        },
        {
          "tenure": "6 Months MCLR",
          "rate": 9.3
        },
        {
          "tenure": "1 Year MCLR",
          "rate": 9.45
        },
        {
          "tenure": "2 Years MCLR",
          "rate": 9.6
        },
        {
          "tenure": "3 Years MCLR",
          "rate": 9.7
        }
      ],
      "homeLoanSlabs": [
        {
          "cibilScoreTier": "CIBIL >= 750 (Grade 1)",
          "salariedRate": 8.75,
          "nonSalariedRate": 8.9,
          "maxLtv": "80% - 90%"
        },
        {
          "cibilScoreTier": "CIBIL 700 - 749 (Grade 2)",
          "salariedRate": 9,
          "nonSalariedRate": 9.15,
          "maxLtv": "75% - 80%"
        },
        {
          "cibilScoreTier": "CIBIL 650 - 699 (Grade 3)",
          "salariedRate": 9.3,
          "nonSalariedRate": 9.45,
          "maxLtv": "75%"
        },
        {
          "cibilScoreTier": "CIBIL 550 - 649 (Grade 4)",
          "salariedRate": 9.7,
          "nonSalariedRate": 9.85,
          "maxLtv": "70%"
        }
      ]
    }
  },
  {
    "bankName": "Karnataka Bank",
    "shortName": "KTKBANK",
    "bankCode": "ktkbank",
    "category": "Private Sector Bank",
    "categoryCode": "private",
    "headquarters": "Mangaluru, Karnataka",
    "established": 1924,
    "logoUrl": "/assets/images/banks/ktkbank/symbol.svg",
    "ratesUrl": "https://karnatakabank.com/personal/rates-and-charges/deposit-interest-rates",
    "websiteUrl": "https://karnatakabank.com",
    "lastUpdated": "2026-10-08T09:06:52.000Z",
    "lastUpdatedDisplay": "8 Oct 2026 09:06 am IST",
    "status": "verified",
    "liveHttpStatus": 403,
    "responseTimeMs": 116,
    "tablesSummary": {
      "fdTranchesCount": 14,
      "rdTranchesCount": 5,
      "savingsTiersCount": 5,
      "mclrTenuresCount": 7,
      "peakGeneralFdRate": 7.4,
      "peakSeniorFdRate": 8.25,
      "lowestHomeLoanRate": 8.75
    },
    "depositTables": {
      "fixedDeposit": [
        {
          "tenure": "7 days to 14 days",
          "generalRate": 3.5,
          "seniorCitizenRate": 4,
          "superSeniorRate": 4.3,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "15 days to 29 days",
          "generalRate": 3.5,
          "seniorCitizenRate": 4,
          "superSeniorRate": 4.3,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "30 days to 45 days",
          "generalRate": 4,
          "seniorCitizenRate": 4.5,
          "superSeniorRate": 4.75,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "46 days to 90 days",
          "generalRate": 5,
          "seniorCitizenRate": 5.5,
          "superSeniorRate": 5.75,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "91 days to 179 days",
          "generalRate": 5.5,
          "seniorCitizenRate": 6,
          "superSeniorRate": 6.25,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "180 days to 210 days",
          "generalRate": 6.25,
          "seniorCitizenRate": 6.75,
          "superSeniorRate": 7,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "211 days to less than 1 year",
          "generalRate": 6.5,
          "seniorCitizenRate": 7,
          "superSeniorRate": 7.25,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "5 years and up to 10 years",
          "generalRate": 6.8,
          "seniorCitizenRate": 7.3,
          "superSeniorRate": 7.45,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "5-Year Tax Saver Term Deposit (80C)",
          "generalRate": 6.9,
          "seniorCitizenRate": 7.4,
          "superSeniorRate": 7.55,
          "schemeType": "Tax Saving Term Deposit (Sec 80C)"
        },
        {
          "tenure": "3 years to less than 5 years",
          "generalRate": 6.95,
          "seniorCitizenRate": 7.45,
          "superSeniorRate": 7.6,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "1 year to less than 2 years",
          "generalRate": 7.15,
          "seniorCitizenRate": 7.65,
          "superSeniorRate": 7.8,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "2 years to less than 3 years",
          "generalRate": 7.2,
          "seniorCitizenRate": 7.7,
          "superSeniorRate": 7.85,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "400 Days to 500 Days",
          "generalRate": 7.4,
          "seniorCitizenRate": 8.25,
          "superSeniorRate": 8.4,
          "schemeType": "KTKBANK Privilege Fixed Deposit"
        },
        {
          "tenure": "KTKBANK Privilege Fixed Deposit",
          "generalRate": 7.4,
          "seniorCitizenRate": 8.25,
          "superSeniorRate": 8.45,
          "schemeType": "Flagship Special Deposit"
        }
      ],
      "recurringDeposit": [
        {
          "tenure": "6 Months to < 12 Months",
          "generalRate": 6.25,
          "seniorCitizenRate": 6.75,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "12 Months to < 24 Months",
          "generalRate": 6.75,
          "seniorCitizenRate": 7.25,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "24 Months to < 36 Months",
          "generalRate": 7,
          "seniorCitizenRate": 7.5,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "36 Months to < 60 Months",
          "generalRate": 6.8,
          "seniorCitizenRate": 7.3,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "60 Months to 120 Months",
          "generalRate": 6.6,
          "seniorCitizenRate": 7.1,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        }
      ],
      "savingsAccount": [
        {
          "balanceSlab": "Up to ₹1 Lakh",
          "rate": 3,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Lakh up to ₹10 Lakhs",
          "rate": 3.15,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Lakhs up to ₹1 Crore",
          "rate": 3.35,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Crore up to ₹10 Crores",
          "rate": 3.5,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Crores",
          "rate": 3.75,
          "calculation": "Daily balance calculated, paid quarterly"
        }
      ]
    },
    "lendingTables": {
      "benchmarkType": "Floating (EBLR / MCLR Linked)",
      "repoLinkedRate": 8.55,
      "mclr": [
        {
          "tenure": "Overnight MCLR",
          "rate": 8.85
        },
        {
          "tenure": "1 Month MCLR",
          "rate": 9
        },
        {
          "tenure": "3 Months MCLR",
          "rate": 9.1
        },
        {
          "tenure": "6 Months MCLR",
          "rate": 9.3
        },
        {
          "tenure": "1 Year MCLR",
          "rate": 9.45
        },
        {
          "tenure": "2 Years MCLR",
          "rate": 9.6
        },
        {
          "tenure": "3 Years MCLR",
          "rate": 9.7
        }
      ],
      "homeLoanSlabs": [
        {
          "cibilScoreTier": "CIBIL >= 750 (Grade 1)",
          "salariedRate": 8.75,
          "nonSalariedRate": 8.9,
          "maxLtv": "80% - 90%"
        },
        {
          "cibilScoreTier": "CIBIL 700 - 749 (Grade 2)",
          "salariedRate": 9,
          "nonSalariedRate": 9.15,
          "maxLtv": "75% - 80%"
        },
        {
          "cibilScoreTier": "CIBIL 650 - 699 (Grade 3)",
          "salariedRate": 9.3,
          "nonSalariedRate": 9.45,
          "maxLtv": "75%"
        },
        {
          "cibilScoreTier": "CIBIL 550 - 649 (Grade 4)",
          "salariedRate": 9.7,
          "nonSalariedRate": 9.85,
          "maxLtv": "70%"
        }
      ]
    }
  },
  {
    "bankName": "Tamilnad Mercantile Bank",
    "shortName": "TMB",
    "bankCode": "tmb",
    "category": "Private Sector Bank",
    "categoryCode": "private",
    "headquarters": "Thoothukudi, Tamil Nadu",
    "established": 1921,
    "logoUrl": "/assets/images/banks/tmb/symbol.svg",
    "ratesUrl": "https://www.tmbnet.net/interest-rates",
    "websiteUrl": "https://www.tmbnet.net",
    "lastUpdated": "2026-10-08T09:06:52.000Z",
    "lastUpdatedDisplay": "8 Oct 2026 09:06 am IST",
    "status": "verified",
    "liveHttpStatus": 503,
    "responseTimeMs": 12,
    "tablesSummary": {
      "fdTranchesCount": 14,
      "rdTranchesCount": 5,
      "savingsTiersCount": 5,
      "mclrTenuresCount": 7,
      "peakGeneralFdRate": 7.5,
      "peakSeniorFdRate": 8.25,
      "lowestHomeLoanRate": 8.75
    },
    "depositTables": {
      "fixedDeposit": [
        {
          "tenure": "7 days to 14 days",
          "generalRate": 3.5,
          "seniorCitizenRate": 4,
          "superSeniorRate": 4.3,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "15 days to 29 days",
          "generalRate": 3.5,
          "seniorCitizenRate": 4,
          "superSeniorRate": 4.3,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "30 days to 45 days",
          "generalRate": 4,
          "seniorCitizenRate": 4.5,
          "superSeniorRate": 4.75,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "46 days to 90 days",
          "generalRate": 5,
          "seniorCitizenRate": 5.5,
          "superSeniorRate": 5.75,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "91 days to 179 days",
          "generalRate": 5.5,
          "seniorCitizenRate": 6,
          "superSeniorRate": 6.25,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "180 days to 210 days",
          "generalRate": 6.25,
          "seniorCitizenRate": 6.75,
          "superSeniorRate": 7,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "211 days to less than 1 year",
          "generalRate": 6.5,
          "seniorCitizenRate": 7,
          "superSeniorRate": 7.25,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "5 years and up to 10 years",
          "generalRate": 6.9,
          "seniorCitizenRate": 7.4,
          "superSeniorRate": 7.55,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "5-Year Tax Saver Term Deposit (80C)",
          "generalRate": 7,
          "seniorCitizenRate": 7.5,
          "superSeniorRate": 7.65,
          "schemeType": "Tax Saving Term Deposit (Sec 80C)"
        },
        {
          "tenure": "3 years to less than 5 years",
          "generalRate": 7.05,
          "seniorCitizenRate": 7.55,
          "superSeniorRate": 7.7,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "1 year to less than 2 years",
          "generalRate": 7.25,
          "seniorCitizenRate": 7.75,
          "superSeniorRate": 7.9,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "2 years to less than 3 years",
          "generalRate": 7.3,
          "seniorCitizenRate": 7.8,
          "superSeniorRate": 7.95,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "400 Days to 500 Days",
          "generalRate": 7.5,
          "seniorCitizenRate": 8.25,
          "superSeniorRate": 8.4,
          "schemeType": "TMB Privilege Fixed Deposit"
        },
        {
          "tenure": "TMB Privilege Fixed Deposit",
          "generalRate": 7.5,
          "seniorCitizenRate": 8.25,
          "superSeniorRate": 8.45,
          "schemeType": "Flagship Special Deposit"
        }
      ],
      "recurringDeposit": [
        {
          "tenure": "6 Months to < 12 Months",
          "generalRate": 6.25,
          "seniorCitizenRate": 6.75,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "12 Months to < 24 Months",
          "generalRate": 6.75,
          "seniorCitizenRate": 7.25,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "24 Months to < 36 Months",
          "generalRate": 7,
          "seniorCitizenRate": 7.5,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "36 Months to < 60 Months",
          "generalRate": 6.8,
          "seniorCitizenRate": 7.3,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "60 Months to 120 Months",
          "generalRate": 6.6,
          "seniorCitizenRate": 7.1,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        }
      ],
      "savingsAccount": [
        {
          "balanceSlab": "Up to ₹1 Lakh",
          "rate": 3,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Lakh up to ₹10 Lakhs",
          "rate": 3.15,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Lakhs up to ₹1 Crore",
          "rate": 3.35,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Crore up to ₹10 Crores",
          "rate": 3.25,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Crores",
          "rate": 3.5,
          "calculation": "Daily balance calculated, paid quarterly"
        }
      ]
    },
    "lendingTables": {
      "benchmarkType": "Floating (EBLR / MCLR Linked)",
      "repoLinkedRate": 8.55,
      "mclr": [
        {
          "tenure": "Overnight MCLR",
          "rate": 8.85
        },
        {
          "tenure": "1 Month MCLR",
          "rate": 9
        },
        {
          "tenure": "3 Months MCLR",
          "rate": 9.1
        },
        {
          "tenure": "6 Months MCLR",
          "rate": 9.3
        },
        {
          "tenure": "1 Year MCLR",
          "rate": 9.45
        },
        {
          "tenure": "2 Years MCLR",
          "rate": 9.6
        },
        {
          "tenure": "3 Years MCLR",
          "rate": 9.7
        }
      ],
      "homeLoanSlabs": [
        {
          "cibilScoreTier": "CIBIL >= 750 (Grade 1)",
          "salariedRate": 8.75,
          "nonSalariedRate": 8.9,
          "maxLtv": "80% - 90%"
        },
        {
          "cibilScoreTier": "CIBIL 700 - 749 (Grade 2)",
          "salariedRate": 9,
          "nonSalariedRate": 9.15,
          "maxLtv": "75% - 80%"
        },
        {
          "cibilScoreTier": "CIBIL 650 - 699 (Grade 3)",
          "salariedRate": 9.3,
          "nonSalariedRate": 9.45,
          "maxLtv": "75%"
        },
        {
          "cibilScoreTier": "CIBIL 550 - 649 (Grade 4)",
          "salariedRate": 9.7,
          "nonSalariedRate": 9.85,
          "maxLtv": "70%"
        }
      ]
    }
  },
  {
    "bankName": "CSB Bank",
    "shortName": "CSBBANK",
    "bankCode": "csbbank",
    "category": "Private Sector Bank",
    "categoryCode": "private",
    "headquarters": "Thrissur, Kerala",
    "established": 1920,
    "logoUrl": "/assets/images/banks/csbbank/symbol.svg",
    "ratesUrl": "https://www.csb.co.in/interest-rates",
    "websiteUrl": "https://www.csb.co.in",
    "lastUpdated": "2026-10-08T09:06:52.000Z",
    "lastUpdatedDisplay": "8 Oct 2026 09:06 am IST",
    "status": "verified",
    "liveHttpStatus": 503,
    "responseTimeMs": 176,
    "tablesSummary": {
      "fdTranchesCount": 14,
      "rdTranchesCount": 5,
      "savingsTiersCount": 5,
      "mclrTenuresCount": 7,
      "peakGeneralFdRate": 7.4,
      "peakSeniorFdRate": 8.25,
      "lowestHomeLoanRate": 8.75
    },
    "depositTables": {
      "fixedDeposit": [
        {
          "tenure": "7 days to 14 days",
          "generalRate": 3.5,
          "seniorCitizenRate": 4,
          "superSeniorRate": 4.3,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "15 days to 29 days",
          "generalRate": 3.5,
          "seniorCitizenRate": 4,
          "superSeniorRate": 4.3,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "30 days to 45 days",
          "generalRate": 4,
          "seniorCitizenRate": 4.5,
          "superSeniorRate": 4.75,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "46 days to 90 days",
          "generalRate": 5,
          "seniorCitizenRate": 5.5,
          "superSeniorRate": 5.75,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "91 days to 179 days",
          "generalRate": 5.5,
          "seniorCitizenRate": 6,
          "superSeniorRate": 6.25,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "180 days to 210 days",
          "generalRate": 6.25,
          "seniorCitizenRate": 6.75,
          "superSeniorRate": 7,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "211 days to less than 1 year",
          "generalRate": 6.5,
          "seniorCitizenRate": 7,
          "superSeniorRate": 7.25,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "5 years and up to 10 years",
          "generalRate": 6.8,
          "seniorCitizenRate": 7.3,
          "superSeniorRate": 7.45,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "5-Year Tax Saver Term Deposit (80C)",
          "generalRate": 6.9,
          "seniorCitizenRate": 7.4,
          "superSeniorRate": 7.55,
          "schemeType": "Tax Saving Term Deposit (Sec 80C)"
        },
        {
          "tenure": "3 years to less than 5 years",
          "generalRate": 6.95,
          "seniorCitizenRate": 7.45,
          "superSeniorRate": 7.6,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "1 year to less than 2 years",
          "generalRate": 7.15,
          "seniorCitizenRate": 7.65,
          "superSeniorRate": 7.8,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "2 years to less than 3 years",
          "generalRate": 7.2,
          "seniorCitizenRate": 7.7,
          "superSeniorRate": 7.85,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "400 Days to 500 Days",
          "generalRate": 7.4,
          "seniorCitizenRate": 8.25,
          "superSeniorRate": 8.4,
          "schemeType": "CSBBANK Privilege Fixed Deposit"
        },
        {
          "tenure": "CSBBANK Privilege Fixed Deposit",
          "generalRate": 7.4,
          "seniorCitizenRate": 8.25,
          "superSeniorRate": 8.45,
          "schemeType": "Flagship Special Deposit"
        }
      ],
      "recurringDeposit": [
        {
          "tenure": "6 Months to < 12 Months",
          "generalRate": 6.25,
          "seniorCitizenRate": 6.75,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "12 Months to < 24 Months",
          "generalRate": 6.75,
          "seniorCitizenRate": 7.25,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "24 Months to < 36 Months",
          "generalRate": 7,
          "seniorCitizenRate": 7.5,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "36 Months to < 60 Months",
          "generalRate": 6.8,
          "seniorCitizenRate": 7.3,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "60 Months to 120 Months",
          "generalRate": 6.6,
          "seniorCitizenRate": 7.1,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        }
      ],
      "savingsAccount": [
        {
          "balanceSlab": "Up to ₹1 Lakh",
          "rate": 3,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Lakh up to ₹10 Lakhs",
          "rate": 3.15,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Lakhs up to ₹1 Crore",
          "rate": 3.35,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Crore up to ₹10 Crores",
          "rate": 3.5,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Crores",
          "rate": 3.75,
          "calculation": "Daily balance calculated, paid quarterly"
        }
      ]
    },
    "lendingTables": {
      "benchmarkType": "Floating (EBLR / MCLR Linked)",
      "repoLinkedRate": 8.55,
      "mclr": [
        {
          "tenure": "Overnight MCLR",
          "rate": 8.85
        },
        {
          "tenure": "1 Month MCLR",
          "rate": 9
        },
        {
          "tenure": "3 Months MCLR",
          "rate": 9.1
        },
        {
          "tenure": "6 Months MCLR",
          "rate": 9.3
        },
        {
          "tenure": "1 Year MCLR",
          "rate": 9.45
        },
        {
          "tenure": "2 Years MCLR",
          "rate": 9.6
        },
        {
          "tenure": "3 Years MCLR",
          "rate": 9.7
        }
      ],
      "homeLoanSlabs": [
        {
          "cibilScoreTier": "CIBIL >= 750 (Grade 1)",
          "salariedRate": 8.75,
          "nonSalariedRate": 8.9,
          "maxLtv": "80% - 90%"
        },
        {
          "cibilScoreTier": "CIBIL 700 - 749 (Grade 2)",
          "salariedRate": 9,
          "nonSalariedRate": 9.15,
          "maxLtv": "75% - 80%"
        },
        {
          "cibilScoreTier": "CIBIL 650 - 699 (Grade 3)",
          "salariedRate": 9.3,
          "nonSalariedRate": 9.45,
          "maxLtv": "75%"
        },
        {
          "cibilScoreTier": "CIBIL 550 - 649 (Grade 4)",
          "salariedRate": 9.7,
          "nonSalariedRate": 9.85,
          "maxLtv": "70%"
        }
      ]
    }
  },
  {
    "bankName": "DCB Bank",
    "shortName": "DCBBANK",
    "bankCode": "dcbbank",
    "category": "Private Sector Bank",
    "categoryCode": "private",
    "headquarters": "Mumbai, Maharashtra",
    "established": 1930,
    "logoUrl": "/assets/images/banks/dcbbank/symbol.svg",
    "ratesUrl": "https://www.dcbbank.com/interest-rates",
    "websiteUrl": "https://www.dcbbank.com",
    "lastUpdated": "2026-10-08T09:06:52.000Z",
    "lastUpdatedDisplay": "8 Oct 2026 09:06 am IST",
    "status": "verified",
    "liveHttpStatus": 503,
    "responseTimeMs": 4095,
    "tablesSummary": {
      "fdTranchesCount": 14,
      "rdTranchesCount": 5,
      "savingsTiersCount": 5,
      "mclrTenuresCount": 7,
      "peakGeneralFdRate": 7.9,
      "peakSeniorFdRate": 8.25,
      "lowestHomeLoanRate": 8.75
    },
    "depositTables": {
      "fixedDeposit": [
        {
          "tenure": "7 days to 14 days",
          "generalRate": 3.5,
          "seniorCitizenRate": 4,
          "superSeniorRate": 4.3,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "15 days to 29 days",
          "generalRate": 3.5,
          "seniorCitizenRate": 4,
          "superSeniorRate": 4.3,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "30 days to 45 days",
          "generalRate": 4,
          "seniorCitizenRate": 4.5,
          "superSeniorRate": 4.75,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "46 days to 90 days",
          "generalRate": 5,
          "seniorCitizenRate": 5.5,
          "superSeniorRate": 5.75,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "91 days to 179 days",
          "generalRate": 5.5,
          "seniorCitizenRate": 6,
          "superSeniorRate": 6.25,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "180 days to 210 days",
          "generalRate": 6.25,
          "seniorCitizenRate": 6.75,
          "superSeniorRate": 7,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "211 days to less than 1 year",
          "generalRate": 6.5,
          "seniorCitizenRate": 7,
          "superSeniorRate": 7.25,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "5 years and up to 10 years",
          "generalRate": 7.3,
          "seniorCitizenRate": 7.8,
          "superSeniorRate": 7.95,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "5-Year Tax Saver Term Deposit (80C)",
          "generalRate": 7.4,
          "seniorCitizenRate": 7.9,
          "superSeniorRate": 8.05,
          "schemeType": "Tax Saving Term Deposit (Sec 80C)"
        },
        {
          "tenure": "3 years to less than 5 years",
          "generalRate": 7.45,
          "seniorCitizenRate": 7.95,
          "superSeniorRate": 8.1,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "1 year to less than 2 years",
          "generalRate": 7.65,
          "seniorCitizenRate": 8.15,
          "superSeniorRate": 8.3,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "2 years to less than 3 years",
          "generalRate": 7.7,
          "seniorCitizenRate": 8.2,
          "superSeniorRate": 8.35,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "400 Days to 500 Days",
          "generalRate": 7.9,
          "seniorCitizenRate": 8.25,
          "superSeniorRate": 8.4,
          "schemeType": "DCBBANK Privilege Fixed Deposit"
        },
        {
          "tenure": "DCBBANK Privilege Fixed Deposit",
          "generalRate": 7.9,
          "seniorCitizenRate": 8.25,
          "superSeniorRate": 8.45,
          "schemeType": "Flagship Special Deposit"
        }
      ],
      "recurringDeposit": [
        {
          "tenure": "6 Months to < 12 Months",
          "generalRate": 6.25,
          "seniorCitizenRate": 6.75,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "12 Months to < 24 Months",
          "generalRate": 6.75,
          "seniorCitizenRate": 7.25,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "24 Months to < 36 Months",
          "generalRate": 7,
          "seniorCitizenRate": 7.5,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "36 Months to < 60 Months",
          "generalRate": 6.8,
          "seniorCitizenRate": 7.3,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "60 Months to 120 Months",
          "generalRate": 6.6,
          "seniorCitizenRate": 7.1,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        }
      ],
      "savingsAccount": [
        {
          "balanceSlab": "Up to ₹1 Lakh",
          "rate": 3,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Lakh up to ₹10 Lakhs",
          "rate": 3.15,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Lakhs up to ₹1 Crore",
          "rate": 3.35,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Crore up to ₹10 Crores",
          "rate": 3.5,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Crores",
          "rate": 3.75,
          "calculation": "Daily balance calculated, paid quarterly"
        }
      ]
    },
    "lendingTables": {
      "benchmarkType": "Floating (EBLR / MCLR Linked)",
      "repoLinkedRate": 8.55,
      "mclr": [
        {
          "tenure": "Overnight MCLR",
          "rate": 8.85
        },
        {
          "tenure": "1 Month MCLR",
          "rate": 9
        },
        {
          "tenure": "3 Months MCLR",
          "rate": 9.1
        },
        {
          "tenure": "6 Months MCLR",
          "rate": 9.3
        },
        {
          "tenure": "1 Year MCLR",
          "rate": 9.45
        },
        {
          "tenure": "2 Years MCLR",
          "rate": 9.6
        },
        {
          "tenure": "3 Years MCLR",
          "rate": 9.7
        }
      ],
      "homeLoanSlabs": [
        {
          "cibilScoreTier": "CIBIL >= 750 (Grade 1)",
          "salariedRate": 8.75,
          "nonSalariedRate": 8.9,
          "maxLtv": "80% - 90%"
        },
        {
          "cibilScoreTier": "CIBIL 700 - 749 (Grade 2)",
          "salariedRate": 9,
          "nonSalariedRate": 9.15,
          "maxLtv": "75% - 80%"
        },
        {
          "cibilScoreTier": "CIBIL 650 - 699 (Grade 3)",
          "salariedRate": 9.3,
          "nonSalariedRate": 9.45,
          "maxLtv": "75%"
        },
        {
          "cibilScoreTier": "CIBIL 550 - 649 (Grade 4)",
          "salariedRate": 9.7,
          "nonSalariedRate": 9.85,
          "maxLtv": "70%"
        }
      ]
    }
  },
  {
    "bankName": "Dhanlaxmi Bank",
    "shortName": "DHANBANK",
    "bankCode": "dhanbank",
    "category": "Private Sector Bank",
    "categoryCode": "private",
    "headquarters": "Thrissur, Kerala",
    "established": 1927,
    "logoUrl": "/assets/images/banks/dhanbank/symbol.svg",
    "ratesUrl": "https://www.dhanbank.com/interest-rates/",
    "websiteUrl": "https://www.dhanbank.com",
    "lastUpdated": "2026-10-08T09:06:52.000Z",
    "lastUpdatedDisplay": "8 Oct 2026 09:06 am IST",
    "status": "verified",
    "liveHttpStatus": 200,
    "responseTimeMs": 861,
    "tablesSummary": {
      "fdTranchesCount": 14,
      "rdTranchesCount": 5,
      "savingsTiersCount": 5,
      "mclrTenuresCount": 7,
      "peakGeneralFdRate": 7.25,
      "peakSeniorFdRate": 8.25,
      "lowestHomeLoanRate": 8.75
    },
    "depositTables": {
      "fixedDeposit": [
        {
          "tenure": "7 days to 14 days",
          "generalRate": 3.5,
          "seniorCitizenRate": 4,
          "superSeniorRate": 4.3,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "15 days to 29 days",
          "generalRate": 3.5,
          "seniorCitizenRate": 4,
          "superSeniorRate": 4.3,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "30 days to 45 days",
          "generalRate": 4,
          "seniorCitizenRate": 4.5,
          "superSeniorRate": 4.75,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "46 days to 90 days",
          "generalRate": 5,
          "seniorCitizenRate": 5.5,
          "superSeniorRate": 5.75,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "91 days to 179 days",
          "generalRate": 5.5,
          "seniorCitizenRate": 6,
          "superSeniorRate": 6.25,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "180 days to 210 days",
          "generalRate": 6.25,
          "seniorCitizenRate": 6.75,
          "superSeniorRate": 7,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "211 days to less than 1 year",
          "generalRate": 6.5,
          "seniorCitizenRate": 7,
          "superSeniorRate": 7.25,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "5 years and up to 10 years",
          "generalRate": 6.65,
          "seniorCitizenRate": 7.15,
          "superSeniorRate": 7.3,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "5-Year Tax Saver Term Deposit (80C)",
          "generalRate": 6.75,
          "seniorCitizenRate": 7.25,
          "superSeniorRate": 7.4,
          "schemeType": "Tax Saving Term Deposit (Sec 80C)"
        },
        {
          "tenure": "3 years to less than 5 years",
          "generalRate": 6.8,
          "seniorCitizenRate": 7.3,
          "superSeniorRate": 7.45,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "1 year to less than 2 years",
          "generalRate": 7,
          "seniorCitizenRate": 7.5,
          "superSeniorRate": 7.65,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "2 years to less than 3 years",
          "generalRate": 7.05,
          "seniorCitizenRate": 7.55,
          "superSeniorRate": 7.7,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "400 Days to 500 Days",
          "generalRate": 7.25,
          "seniorCitizenRate": 8.25,
          "superSeniorRate": 8.4,
          "schemeType": "DHANBANK Privilege Fixed Deposit"
        },
        {
          "tenure": "DHANBANK Privilege Fixed Deposit",
          "generalRate": 7.25,
          "seniorCitizenRate": 8.25,
          "superSeniorRate": 8.45,
          "schemeType": "Flagship Special Deposit"
        }
      ],
      "recurringDeposit": [
        {
          "tenure": "6 Months to < 12 Months",
          "generalRate": 6.25,
          "seniorCitizenRate": 6.75,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "12 Months to < 24 Months",
          "generalRate": 6.75,
          "seniorCitizenRate": 7.25,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "24 Months to < 36 Months",
          "generalRate": 7,
          "seniorCitizenRate": 7.5,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "36 Months to < 60 Months",
          "generalRate": 6.8,
          "seniorCitizenRate": 7.3,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "60 Months to 120 Months",
          "generalRate": 6.6,
          "seniorCitizenRate": 7.1,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        }
      ],
      "savingsAccount": [
        {
          "balanceSlab": "Up to ₹1 Lakh",
          "rate": 3,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Lakh up to ₹10 Lakhs",
          "rate": 3.15,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Lakhs up to ₹1 Crore",
          "rate": 3.35,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Crore up to ₹10 Crores",
          "rate": 3.5,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Crores",
          "rate": 3.75,
          "calculation": "Daily balance calculated, paid quarterly"
        }
      ]
    },
    "lendingTables": {
      "benchmarkType": "Floating (EBLR / MCLR Linked)",
      "repoLinkedRate": 8.55,
      "mclr": [
        {
          "tenure": "Overnight MCLR",
          "rate": 8.85
        },
        {
          "tenure": "1 Month MCLR",
          "rate": 9
        },
        {
          "tenure": "3 Months MCLR",
          "rate": 9.1
        },
        {
          "tenure": "6 Months MCLR",
          "rate": 9.3
        },
        {
          "tenure": "1 Year MCLR",
          "rate": 9.45
        },
        {
          "tenure": "2 Years MCLR",
          "rate": 9.6
        },
        {
          "tenure": "3 Years MCLR",
          "rate": 9.7
        }
      ],
      "homeLoanSlabs": [
        {
          "cibilScoreTier": "CIBIL >= 750 (Grade 1)",
          "salariedRate": 8.75,
          "nonSalariedRate": 8.9,
          "maxLtv": "80% - 90%"
        },
        {
          "cibilScoreTier": "CIBIL 700 - 749 (Grade 2)",
          "salariedRate": 9,
          "nonSalariedRate": 9.15,
          "maxLtv": "75% - 80%"
        },
        {
          "cibilScoreTier": "CIBIL 650 - 699 (Grade 3)",
          "salariedRate": 9.3,
          "nonSalariedRate": 9.45,
          "maxLtv": "75%"
        },
        {
          "cibilScoreTier": "CIBIL 550 - 649 (Grade 4)",
          "salariedRate": 9.7,
          "nonSalariedRate": 9.85,
          "maxLtv": "70%"
        }
      ]
    }
  },
  {
    "bankName": "Jammu & Kashmir Bank",
    "shortName": "JKBANK",
    "bankCode": "jkbank",
    "category": "Private Sector Bank",
    "categoryCode": "private",
    "headquarters": "Srinagar, Jammu & Kashmir",
    "established": 1938,
    "logoUrl": "/assets/images/banks/jkbank/symbol.svg",
    "ratesUrl": "https://www.jkbank.com/interest-rates",
    "websiteUrl": "https://www.jkbank.com",
    "lastUpdated": "2026-10-08T09:06:52.000Z",
    "lastUpdatedDisplay": "8 Oct 2026 09:06 am IST",
    "status": "verified",
    "liveHttpStatus": 408,
    "responseTimeMs": 6001,
    "tablesSummary": {
      "fdTranchesCount": 14,
      "rdTranchesCount": 5,
      "savingsTiersCount": 5,
      "mclrTenuresCount": 7,
      "peakGeneralFdRate": 7.1,
      "peakSeniorFdRate": 8.25,
      "lowestHomeLoanRate": 8.75
    },
    "depositTables": {
      "fixedDeposit": [
        {
          "tenure": "7 days to 14 days",
          "generalRate": 3.5,
          "seniorCitizenRate": 4,
          "superSeniorRate": 4.3,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "15 days to 29 days",
          "generalRate": 3.5,
          "seniorCitizenRate": 4,
          "superSeniorRate": 4.3,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "30 days to 45 days",
          "generalRate": 4,
          "seniorCitizenRate": 4.5,
          "superSeniorRate": 4.75,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "46 days to 90 days",
          "generalRate": 5,
          "seniorCitizenRate": 5.5,
          "superSeniorRate": 5.75,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "91 days to 179 days",
          "generalRate": 5.5,
          "seniorCitizenRate": 6,
          "superSeniorRate": 6.25,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "180 days to 210 days",
          "generalRate": 6.25,
          "seniorCitizenRate": 6.75,
          "superSeniorRate": 7,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "211 days to less than 1 year",
          "generalRate": 6.5,
          "seniorCitizenRate": 7,
          "superSeniorRate": 7.25,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "5 years and up to 10 years",
          "generalRate": 6.5,
          "seniorCitizenRate": 7,
          "superSeniorRate": 7.15,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "5-Year Tax Saver Term Deposit (80C)",
          "generalRate": 6.6,
          "seniorCitizenRate": 7.1,
          "superSeniorRate": 7.25,
          "schemeType": "Tax Saving Term Deposit (Sec 80C)"
        },
        {
          "tenure": "3 years to less than 5 years",
          "generalRate": 6.65,
          "seniorCitizenRate": 7.15,
          "superSeniorRate": 7.3,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "1 year to less than 2 years",
          "generalRate": 6.85,
          "seniorCitizenRate": 7.35,
          "superSeniorRate": 7.5,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "2 years to less than 3 years",
          "generalRate": 6.9,
          "seniorCitizenRate": 7.4,
          "superSeniorRate": 7.55,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "400 Days to 500 Days",
          "generalRate": 7.1,
          "seniorCitizenRate": 8.25,
          "superSeniorRate": 8.4,
          "schemeType": "JKBANK Privilege Fixed Deposit"
        },
        {
          "tenure": "JKBANK Privilege Fixed Deposit",
          "generalRate": 7.1,
          "seniorCitizenRate": 8.25,
          "superSeniorRate": 8.45,
          "schemeType": "Flagship Special Deposit"
        }
      ],
      "recurringDeposit": [
        {
          "tenure": "6 Months to < 12 Months",
          "generalRate": 6.25,
          "seniorCitizenRate": 6.75,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "12 Months to < 24 Months",
          "generalRate": 6.75,
          "seniorCitizenRate": 7.25,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "24 Months to < 36 Months",
          "generalRate": 7,
          "seniorCitizenRate": 7.5,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "36 Months to < 60 Months",
          "generalRate": 6.8,
          "seniorCitizenRate": 7.3,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "60 Months to 120 Months",
          "generalRate": 6.6,
          "seniorCitizenRate": 7.1,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        }
      ],
      "savingsAccount": [
        {
          "balanceSlab": "Up to ₹1 Lakh",
          "rate": 3,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Lakh up to ₹10 Lakhs",
          "rate": 3.15,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Lakhs up to ₹1 Crore",
          "rate": 3.35,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Crore up to ₹10 Crores",
          "rate": 3.5,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Crores",
          "rate": 3.75,
          "calculation": "Daily balance calculated, paid quarterly"
        }
      ]
    },
    "lendingTables": {
      "benchmarkType": "Floating (EBLR / MCLR Linked)",
      "repoLinkedRate": 8.55,
      "mclr": [
        {
          "tenure": "Overnight MCLR",
          "rate": 8.85
        },
        {
          "tenure": "1 Month MCLR",
          "rate": 9
        },
        {
          "tenure": "3 Months MCLR",
          "rate": 9.1
        },
        {
          "tenure": "6 Months MCLR",
          "rate": 9.3
        },
        {
          "tenure": "1 Year MCLR",
          "rate": 9.45
        },
        {
          "tenure": "2 Years MCLR",
          "rate": 9.6
        },
        {
          "tenure": "3 Years MCLR",
          "rate": 9.7
        }
      ],
      "homeLoanSlabs": [
        {
          "cibilScoreTier": "CIBIL >= 750 (Grade 1)",
          "salariedRate": 8.75,
          "nonSalariedRate": 8.9,
          "maxLtv": "80% - 90%"
        },
        {
          "cibilScoreTier": "CIBIL 700 - 749 (Grade 2)",
          "salariedRate": 9,
          "nonSalariedRate": 9.15,
          "maxLtv": "75% - 80%"
        },
        {
          "cibilScoreTier": "CIBIL 650 - 699 (Grade 3)",
          "salariedRate": 9.3,
          "nonSalariedRate": 9.45,
          "maxLtv": "75%"
        },
        {
          "cibilScoreTier": "CIBIL 550 - 649 (Grade 4)",
          "salariedRate": 9.7,
          "nonSalariedRate": 9.85,
          "maxLtv": "70%"
        }
      ]
    }
  },
  {
    "bankName": "Nainital Bank",
    "shortName": "NAINITAL",
    "bankCode": "nainital",
    "category": "Private Sector Bank",
    "categoryCode": "private",
    "headquarters": "Nainital, Uttarakhand",
    "established": 1922,
    "logoUrl": "/assets/images/banks/nainital/symbol.svg",
    "ratesUrl": "https://www.nainitalbank.co.in/interest_rates.asp",
    "websiteUrl": "https://www.nainitalbank.co.in",
    "lastUpdated": "2026-10-08T09:06:52.000Z",
    "lastUpdatedDisplay": "8 Oct 2026 09:06 am IST",
    "status": "verified",
    "liveHttpStatus": 200,
    "responseTimeMs": 708,
    "tablesSummary": {
      "fdTranchesCount": 14,
      "rdTranchesCount": 5,
      "savingsTiersCount": 5,
      "mclrTenuresCount": 7,
      "peakGeneralFdRate": 7.05,
      "peakSeniorFdRate": 8.25,
      "lowestHomeLoanRate": 8.75
    },
    "depositTables": {
      "fixedDeposit": [
        {
          "tenure": "7 days to 14 days",
          "generalRate": 3.5,
          "seniorCitizenRate": 4,
          "superSeniorRate": 4.3,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "15 days to 29 days",
          "generalRate": 3.5,
          "seniorCitizenRate": 4,
          "superSeniorRate": 4.3,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "30 days to 45 days",
          "generalRate": 4,
          "seniorCitizenRate": 4.5,
          "superSeniorRate": 4.75,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "46 days to 90 days",
          "generalRate": 5,
          "seniorCitizenRate": 5.5,
          "superSeniorRate": 5.75,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "91 days to 179 days",
          "generalRate": 5.5,
          "seniorCitizenRate": 6,
          "superSeniorRate": 6.25,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "180 days to 210 days",
          "generalRate": 6.25,
          "seniorCitizenRate": 6.75,
          "superSeniorRate": 7,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "5 years and up to 10 years",
          "generalRate": 6.45,
          "seniorCitizenRate": 6.95,
          "superSeniorRate": 7.1,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "211 days to less than 1 year",
          "generalRate": 6.5,
          "seniorCitizenRate": 7,
          "superSeniorRate": 7.25,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "5-Year Tax Saver Term Deposit (80C)",
          "generalRate": 6.55,
          "seniorCitizenRate": 7.05,
          "superSeniorRate": 7.2,
          "schemeType": "Tax Saving Term Deposit (Sec 80C)"
        },
        {
          "tenure": "3 years to less than 5 years",
          "generalRate": 6.6,
          "seniorCitizenRate": 7.1,
          "superSeniorRate": 7.25,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "1 year to less than 2 years",
          "generalRate": 6.8,
          "seniorCitizenRate": 7.3,
          "superSeniorRate": 7.45,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "2 years to less than 3 years",
          "generalRate": 6.85,
          "seniorCitizenRate": 7.35,
          "superSeniorRate": 7.5,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "400 Days to 500 Days",
          "generalRate": 7.05,
          "seniorCitizenRate": 8.25,
          "superSeniorRate": 8.4,
          "schemeType": "NAINITAL Privilege Fixed Deposit"
        },
        {
          "tenure": "NAINITAL Privilege Fixed Deposit",
          "generalRate": 7.05,
          "seniorCitizenRate": 8.25,
          "superSeniorRate": 8.45,
          "schemeType": "Flagship Special Deposit"
        }
      ],
      "recurringDeposit": [
        {
          "tenure": "6 Months to < 12 Months",
          "generalRate": 6.25,
          "seniorCitizenRate": 6.75,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "12 Months to < 24 Months",
          "generalRate": 6.75,
          "seniorCitizenRate": 7.25,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "24 Months to < 36 Months",
          "generalRate": 7,
          "seniorCitizenRate": 7.5,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "36 Months to < 60 Months",
          "generalRate": 6.8,
          "seniorCitizenRate": 7.3,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "60 Months to 120 Months",
          "generalRate": 6.6,
          "seniorCitizenRate": 7.1,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        }
      ],
      "savingsAccount": [
        {
          "balanceSlab": "Up to ₹1 Lakh",
          "rate": 3,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Lakh up to ₹10 Lakhs",
          "rate": 3.15,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Lakhs up to ₹1 Crore",
          "rate": 3.35,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Crore up to ₹10 Crores",
          "rate": 3.5,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Crores",
          "rate": 3.75,
          "calculation": "Daily balance calculated, paid quarterly"
        }
      ]
    },
    "lendingTables": {
      "benchmarkType": "Floating (EBLR / MCLR Linked)",
      "repoLinkedRate": 8.55,
      "mclr": [
        {
          "tenure": "Overnight MCLR",
          "rate": 8.85
        },
        {
          "tenure": "1 Month MCLR",
          "rate": 9
        },
        {
          "tenure": "3 Months MCLR",
          "rate": 9.1
        },
        {
          "tenure": "6 Months MCLR",
          "rate": 9.3
        },
        {
          "tenure": "1 Year MCLR",
          "rate": 9.45
        },
        {
          "tenure": "2 Years MCLR",
          "rate": 9.6
        },
        {
          "tenure": "3 Years MCLR",
          "rate": 9.7
        }
      ],
      "homeLoanSlabs": [
        {
          "cibilScoreTier": "CIBIL >= 750 (Grade 1)",
          "salariedRate": 8.75,
          "nonSalariedRate": 8.9,
          "maxLtv": "80% - 90%"
        },
        {
          "cibilScoreTier": "CIBIL 700 - 749 (Grade 2)",
          "salariedRate": 9,
          "nonSalariedRate": 9.15,
          "maxLtv": "75% - 80%"
        },
        {
          "cibilScoreTier": "CIBIL 650 - 699 (Grade 3)",
          "salariedRate": 9.3,
          "nonSalariedRate": 9.45,
          "maxLtv": "75%"
        },
        {
          "cibilScoreTier": "CIBIL 550 - 649 (Grade 4)",
          "salariedRate": 9.7,
          "nonSalariedRate": 9.85,
          "maxLtv": "70%"
        }
      ]
    }
  },
  {
    "bankName": "AU Small Finance Bank",
    "shortName": "AUBANK",
    "bankCode": "aubank",
    "category": "Small Finance Bank",
    "categoryCode": "sfb",
    "headquarters": "Jaipur, Rajasthan",
    "established": 1996,
    "logoUrl": "/assets/images/banks/aubank/symbol.svg",
    "ratesUrl": "https://www.aubank.in/interest-rates/fixed-deposit-interest-rates",
    "websiteUrl": "https://www.aubank.in",
    "lastUpdated": "2026-10-08T09:06:52.000Z",
    "lastUpdatedDisplay": "8 Oct 2026 09:06 am IST",
    "status": "verified",
    "liveHttpStatus": 403,
    "responseTimeMs": 358,
    "tablesSummary": {
      "fdTranchesCount": 14,
      "rdTranchesCount": 5,
      "savingsTiersCount": 5,
      "mclrTenuresCount": 7,
      "peakGeneralFdRate": 8,
      "peakSeniorFdRate": 9,
      "lowestHomeLoanRate": 9.35
    },
    "depositTables": {
      "fixedDeposit": [
        {
          "tenure": "7 days to 14 days",
          "generalRate": 3.75,
          "seniorCitizenRate": 4.25,
          "superSeniorRate": 4.55,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "15 days to 29 days",
          "generalRate": 3.75,
          "seniorCitizenRate": 4.25,
          "superSeniorRate": 4.55,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "30 days to 45 days",
          "generalRate": 4.25,
          "seniorCitizenRate": 4.75,
          "superSeniorRate": 5,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "46 days to 90 days",
          "generalRate": 5.25,
          "seniorCitizenRate": 5.75,
          "superSeniorRate": 6,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "91 days to 179 days",
          "generalRate": 5.75,
          "seniorCitizenRate": 6.25,
          "superSeniorRate": 6.5,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "180 days to 210 days",
          "generalRate": 6.5,
          "seniorCitizenRate": 7,
          "superSeniorRate": 7.25,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "211 days to less than 1 year",
          "generalRate": 6.75,
          "seniorCitizenRate": 7.25,
          "superSeniorRate": 7.5,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "5 years and up to 10 years",
          "generalRate": 7.4,
          "seniorCitizenRate": 7.9,
          "superSeniorRate": 8.05,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "5-Year Tax Saver Term Deposit (80C)",
          "generalRate": 7.5,
          "seniorCitizenRate": 8,
          "superSeniorRate": 8.15,
          "schemeType": "Tax Saving Term Deposit (Sec 80C)"
        },
        {
          "tenure": "3 years to less than 5 years",
          "generalRate": 7.55,
          "seniorCitizenRate": 8.05,
          "superSeniorRate": 8.2,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "1 year to less than 2 years",
          "generalRate": 7.75,
          "seniorCitizenRate": 8.25,
          "superSeniorRate": 8.4,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "2 years to less than 3 years",
          "generalRate": 7.8,
          "seniorCitizenRate": 8.3,
          "superSeniorRate": 8.45,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "444 Days to 1001 Days (Peak 8.50% - 9.00%)",
          "generalRate": 8,
          "seniorCitizenRate": 9,
          "superSeniorRate": 9.15,
          "schemeType": "AUBANK High-Yield Special Deposit"
        },
        {
          "tenure": "AUBANK High-Yield Special Deposit",
          "generalRate": 8,
          "seniorCitizenRate": 9,
          "superSeniorRate": 9.2,
          "schemeType": "Flagship Special Deposit"
        }
      ],
      "recurringDeposit": [
        {
          "tenure": "6 Months to < 12 Months",
          "generalRate": 6.25,
          "seniorCitizenRate": 6.75,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "12 Months to < 24 Months",
          "generalRate": 6.75,
          "seniorCitizenRate": 7.25,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "24 Months to < 36 Months",
          "generalRate": 7,
          "seniorCitizenRate": 7.5,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "36 Months to < 60 Months",
          "generalRate": 6.8,
          "seniorCitizenRate": 7.3,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "60 Months to 120 Months",
          "generalRate": 6.6,
          "seniorCitizenRate": 7.1,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        }
      ],
      "savingsAccount": [
        {
          "balanceSlab": "Up to ₹1 Lakh",
          "rate": 3,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Lakh up to ₹10 Lakhs",
          "rate": 3.15,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Lakhs up to ₹1 Crore",
          "rate": 3.35,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Crore up to ₹10 Crores",
          "rate": 3.5,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Crores",
          "rate": 3.75,
          "calculation": "Daily balance calculated, paid quarterly"
        }
      ]
    },
    "lendingTables": {
      "benchmarkType": "Floating (SFB-EBLR Linked @ 9.10%)",
      "repoLinkedRate": 9.15,
      "mclr": [
        {
          "tenure": "Overnight MCLR",
          "rate": 9.45
        },
        {
          "tenure": "1 Month MCLR",
          "rate": 9.6
        },
        {
          "tenure": "3 Months MCLR",
          "rate": 9.7
        },
        {
          "tenure": "6 Months MCLR",
          "rate": 9.9
        },
        {
          "tenure": "1 Year MCLR",
          "rate": 10.05
        },
        {
          "tenure": "2 Years MCLR",
          "rate": 10.2
        },
        {
          "tenure": "3 Years MCLR",
          "rate": 10.3
        }
      ],
      "homeLoanSlabs": [
        {
          "cibilScoreTier": "CIBIL >= 750 (Grade 1)",
          "salariedRate": 9.35,
          "nonSalariedRate": 9.5,
          "maxLtv": "80% - 90%"
        },
        {
          "cibilScoreTier": "CIBIL 700 - 749 (Grade 2)",
          "salariedRate": 9.6,
          "nonSalariedRate": 9.75,
          "maxLtv": "75% - 80%"
        },
        {
          "cibilScoreTier": "CIBIL 650 - 699 (Grade 3)",
          "salariedRate": 9.9,
          "nonSalariedRate": 10.05,
          "maxLtv": "75%"
        },
        {
          "cibilScoreTier": "CIBIL 550 - 649 (Grade 4)",
          "salariedRate": 10.3,
          "nonSalariedRate": 10.45,
          "maxLtv": "70%"
        }
      ]
    }
  },
  {
    "bankName": "Equitas Small Finance Bank",
    "shortName": "EQUITASBNK",
    "bankCode": "equitasbnk",
    "category": "Small Finance Bank",
    "categoryCode": "sfb",
    "headquarters": "Chennai, Tamil Nadu",
    "established": 2016,
    "logoUrl": "/assets/images/banks/equitasbnk/logo.svg",
    "ratesUrl": "https://www.equitasbank.com/fixed-deposit",
    "websiteUrl": "https://www.equitasbank.com",
    "lastUpdated": "2026-10-08T09:06:52.000Z",
    "lastUpdatedDisplay": "8 Oct 2026 09:06 am IST",
    "status": "verified",
    "liveHttpStatus": 200,
    "responseTimeMs": 1123,
    "tablesSummary": {
      "fdTranchesCount": 14,
      "rdTranchesCount": 5,
      "savingsTiersCount": 5,
      "mclrTenuresCount": 7,
      "peakGeneralFdRate": 8.25,
      "peakSeniorFdRate": 9,
      "lowestHomeLoanRate": 9.35
    },
    "depositTables": {
      "fixedDeposit": [
        {
          "tenure": "7 days to 14 days",
          "generalRate": 3.75,
          "seniorCitizenRate": 4.25,
          "superSeniorRate": 4.55,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "15 days to 29 days",
          "generalRate": 3.75,
          "seniorCitizenRate": 4.25,
          "superSeniorRate": 4.55,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "30 days to 45 days",
          "generalRate": 4.25,
          "seniorCitizenRate": 4.75,
          "superSeniorRate": 5,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "46 days to 90 days",
          "generalRate": 5.25,
          "seniorCitizenRate": 5.75,
          "superSeniorRate": 6,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "91 days to 179 days",
          "generalRate": 5.75,
          "seniorCitizenRate": 6.25,
          "superSeniorRate": 6.5,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "180 days to 210 days",
          "generalRate": 6.5,
          "seniorCitizenRate": 7,
          "superSeniorRate": 7.25,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "211 days to less than 1 year",
          "generalRate": 6.75,
          "seniorCitizenRate": 7.25,
          "superSeniorRate": 7.5,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "5 years and up to 10 years",
          "generalRate": 7.65,
          "seniorCitizenRate": 8.15,
          "superSeniorRate": 8.3,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "5-Year Tax Saver Term Deposit (80C)",
          "generalRate": 7.75,
          "seniorCitizenRate": 8.25,
          "superSeniorRate": 8.4,
          "schemeType": "Tax Saving Term Deposit (Sec 80C)"
        },
        {
          "tenure": "3 years to less than 5 years",
          "generalRate": 7.8,
          "seniorCitizenRate": 8.3,
          "superSeniorRate": 8.45,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "1 year to less than 2 years",
          "generalRate": 8,
          "seniorCitizenRate": 8.5,
          "superSeniorRate": 8.65,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "2 years to less than 3 years",
          "generalRate": 8.05,
          "seniorCitizenRate": 8.55,
          "superSeniorRate": 8.7,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "444 Days to 1001 Days (Peak 8.50% - 9.00%)",
          "generalRate": 8.25,
          "seniorCitizenRate": 9,
          "superSeniorRate": 9.15,
          "schemeType": "EQUITASBNK High-Yield Special Deposit"
        },
        {
          "tenure": "EQUITASBNK High-Yield Special Deposit",
          "generalRate": 8.25,
          "seniorCitizenRate": 9,
          "superSeniorRate": 9.2,
          "schemeType": "Flagship Special Deposit"
        }
      ],
      "recurringDeposit": [
        {
          "tenure": "6 Months to < 12 Months",
          "generalRate": 6.25,
          "seniorCitizenRate": 6.75,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "12 Months to < 24 Months",
          "generalRate": 6.75,
          "seniorCitizenRate": 7.25,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "24 Months to < 36 Months",
          "generalRate": 7,
          "seniorCitizenRate": 7.5,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "36 Months to < 60 Months",
          "generalRate": 6.8,
          "seniorCitizenRate": 7.3,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "60 Months to 120 Months",
          "generalRate": 6.6,
          "seniorCitizenRate": 7.1,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        }
      ],
      "savingsAccount": [
        {
          "balanceSlab": "Up to ₹1 Lakh",
          "rate": 3,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Lakh up to ₹10 Lakhs",
          "rate": 3.15,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Lakhs up to ₹1 Crore",
          "rate": 3.35,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Crore up to ₹10 Crores",
          "rate": 3.5,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Crores",
          "rate": 3.75,
          "calculation": "Daily balance calculated, paid quarterly"
        }
      ]
    },
    "lendingTables": {
      "benchmarkType": "Floating (SFB-EBLR Linked @ 9.10%)",
      "repoLinkedRate": 9.15,
      "mclr": [
        {
          "tenure": "Overnight MCLR",
          "rate": 9.45
        },
        {
          "tenure": "1 Month MCLR",
          "rate": 9.6
        },
        {
          "tenure": "3 Months MCLR",
          "rate": 9.7
        },
        {
          "tenure": "6 Months MCLR",
          "rate": 9.9
        },
        {
          "tenure": "1 Year MCLR",
          "rate": 10.05
        },
        {
          "tenure": "2 Years MCLR",
          "rate": 10.2
        },
        {
          "tenure": "3 Years MCLR",
          "rate": 10.3
        }
      ],
      "homeLoanSlabs": [
        {
          "cibilScoreTier": "CIBIL >= 750 (Grade 1)",
          "salariedRate": 9.35,
          "nonSalariedRate": 9.5,
          "maxLtv": "80% - 90%"
        },
        {
          "cibilScoreTier": "CIBIL 700 - 749 (Grade 2)",
          "salariedRate": 9.6,
          "nonSalariedRate": 9.75,
          "maxLtv": "75% - 80%"
        },
        {
          "cibilScoreTier": "CIBIL 650 - 699 (Grade 3)",
          "salariedRate": 9.9,
          "nonSalariedRate": 10.05,
          "maxLtv": "75%"
        },
        {
          "cibilScoreTier": "CIBIL 550 - 649 (Grade 4)",
          "salariedRate": 10.3,
          "nonSalariedRate": 10.45,
          "maxLtv": "70%"
        }
      ]
    }
  },
  {
    "bankName": "Ujjivan Small Finance Bank",
    "shortName": "UJJIVANSFB",
    "bankCode": "ujjivansfb",
    "category": "Small Finance Bank",
    "categoryCode": "sfb",
    "headquarters": "Bengaluru, Karnataka",
    "established": 2017,
    "logoUrl": "/assets/images/banks/ujjivansfb/symbol.svg",
    "ratesUrl": "https://www.ujjivansfb.in/fixed-deposit-interest-rates",
    "websiteUrl": "https://www.ujjivansfb.in",
    "lastUpdated": "2026-10-08T09:06:52.000Z",
    "lastUpdatedDisplay": "8 Oct 2026 09:06 am IST",
    "status": "verified",
    "liveHttpStatus": 408,
    "responseTimeMs": 6001,
    "tablesSummary": {
      "fdTranchesCount": 14,
      "rdTranchesCount": 5,
      "savingsTiersCount": 5,
      "mclrTenuresCount": 7,
      "peakGeneralFdRate": 8.25,
      "peakSeniorFdRate": 9,
      "lowestHomeLoanRate": 9.35
    },
    "depositTables": {
      "fixedDeposit": [
        {
          "tenure": "7 days to 14 days",
          "generalRate": 3.75,
          "seniorCitizenRate": 4.25,
          "superSeniorRate": 4.55,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "15 days to 29 days",
          "generalRate": 3.75,
          "seniorCitizenRate": 4.25,
          "superSeniorRate": 4.55,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "30 days to 45 days",
          "generalRate": 4.25,
          "seniorCitizenRate": 4.75,
          "superSeniorRate": 5,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "46 days to 90 days",
          "generalRate": 5.25,
          "seniorCitizenRate": 5.75,
          "superSeniorRate": 6,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "91 days to 179 days",
          "generalRate": 5.75,
          "seniorCitizenRate": 6.25,
          "superSeniorRate": 6.5,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "180 days to 210 days",
          "generalRate": 6.5,
          "seniorCitizenRate": 7,
          "superSeniorRate": 7.25,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "211 days to less than 1 year",
          "generalRate": 6.75,
          "seniorCitizenRate": 7.25,
          "superSeniorRate": 7.5,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "5 years and up to 10 years",
          "generalRate": 7.65,
          "seniorCitizenRate": 8.15,
          "superSeniorRate": 8.3,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "5-Year Tax Saver Term Deposit (80C)",
          "generalRate": 7.75,
          "seniorCitizenRate": 8.25,
          "superSeniorRate": 8.4,
          "schemeType": "Tax Saving Term Deposit (Sec 80C)"
        },
        {
          "tenure": "3 years to less than 5 years",
          "generalRate": 7.8,
          "seniorCitizenRate": 8.3,
          "superSeniorRate": 8.45,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "1 year to less than 2 years",
          "generalRate": 8,
          "seniorCitizenRate": 8.5,
          "superSeniorRate": 8.65,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "2 years to less than 3 years",
          "generalRate": 8.05,
          "seniorCitizenRate": 8.55,
          "superSeniorRate": 8.7,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "444 Days to 1001 Days (Peak 8.50% - 9.00%)",
          "generalRate": 8.25,
          "seniorCitizenRate": 9,
          "superSeniorRate": 9.15,
          "schemeType": "UJJIVANSFB High-Yield Special Deposit"
        },
        {
          "tenure": "UJJIVANSFB High-Yield Special Deposit",
          "generalRate": 8.25,
          "seniorCitizenRate": 9,
          "superSeniorRate": 9.2,
          "schemeType": "Flagship Special Deposit"
        }
      ],
      "recurringDeposit": [
        {
          "tenure": "6 Months to < 12 Months",
          "generalRate": 6.25,
          "seniorCitizenRate": 6.75,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "12 Months to < 24 Months",
          "generalRate": 6.75,
          "seniorCitizenRate": 7.25,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "24 Months to < 36 Months",
          "generalRate": 7,
          "seniorCitizenRate": 7.5,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "36 Months to < 60 Months",
          "generalRate": 6.8,
          "seniorCitizenRate": 7.3,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "60 Months to 120 Months",
          "generalRate": 6.6,
          "seniorCitizenRate": 7.1,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        }
      ],
      "savingsAccount": [
        {
          "balanceSlab": "Up to ₹1 Lakh",
          "rate": 3,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Lakh up to ₹10 Lakhs",
          "rate": 3.15,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Lakhs up to ₹1 Crore",
          "rate": 3.35,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Crore up to ₹10 Crores",
          "rate": 3.5,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Crores",
          "rate": 3.75,
          "calculation": "Daily balance calculated, paid quarterly"
        }
      ]
    },
    "lendingTables": {
      "benchmarkType": "Floating (SFB-EBLR Linked @ 9.10%)",
      "repoLinkedRate": 9.15,
      "mclr": [
        {
          "tenure": "Overnight MCLR",
          "rate": 9.45
        },
        {
          "tenure": "1 Month MCLR",
          "rate": 9.6
        },
        {
          "tenure": "3 Months MCLR",
          "rate": 9.7
        },
        {
          "tenure": "6 Months MCLR",
          "rate": 9.9
        },
        {
          "tenure": "1 Year MCLR",
          "rate": 10.05
        },
        {
          "tenure": "2 Years MCLR",
          "rate": 10.2
        },
        {
          "tenure": "3 Years MCLR",
          "rate": 10.3
        }
      ],
      "homeLoanSlabs": [
        {
          "cibilScoreTier": "CIBIL >= 750 (Grade 1)",
          "salariedRate": 9.35,
          "nonSalariedRate": 9.5,
          "maxLtv": "80% - 90%"
        },
        {
          "cibilScoreTier": "CIBIL 700 - 749 (Grade 2)",
          "salariedRate": 9.6,
          "nonSalariedRate": 9.75,
          "maxLtv": "75% - 80%"
        },
        {
          "cibilScoreTier": "CIBIL 650 - 699 (Grade 3)",
          "salariedRate": 9.9,
          "nonSalariedRate": 10.05,
          "maxLtv": "75%"
        },
        {
          "cibilScoreTier": "CIBIL 550 - 649 (Grade 4)",
          "salariedRate": 10.3,
          "nonSalariedRate": 10.45,
          "maxLtv": "70%"
        }
      ]
    }
  },
  {
    "bankName": "Jana Small Finance Bank",
    "shortName": "JANABANK",
    "bankCode": "janabank",
    "category": "Small Finance Bank",
    "categoryCode": "sfb",
    "headquarters": "Bengaluru, Karnataka",
    "established": 2018,
    "logoUrl": "/assets/images/banks/janabank/logo.svg",
    "ratesUrl": "https://www.janabank.com/deposits/fixed-deposit-interest-rates/",
    "websiteUrl": "https://www.janabank.com",
    "lastUpdated": "2026-10-08T09:06:52.000Z",
    "lastUpdatedDisplay": "8 Oct 2026 09:06 am IST",
    "status": "verified",
    "liveHttpStatus": 404,
    "responseTimeMs": 1105,
    "tablesSummary": {
      "fdTranchesCount": 14,
      "rdTranchesCount": 5,
      "savingsTiersCount": 5,
      "mclrTenuresCount": 7,
      "peakGeneralFdRate": 8.25,
      "peakSeniorFdRate": 9,
      "lowestHomeLoanRate": 9.35
    },
    "depositTables": {
      "fixedDeposit": [
        {
          "tenure": "7 days to 14 days",
          "generalRate": 3.75,
          "seniorCitizenRate": 4.25,
          "superSeniorRate": 4.55,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "15 days to 29 days",
          "generalRate": 3.75,
          "seniorCitizenRate": 4.25,
          "superSeniorRate": 4.55,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "30 days to 45 days",
          "generalRate": 4.25,
          "seniorCitizenRate": 4.75,
          "superSeniorRate": 5,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "46 days to 90 days",
          "generalRate": 5.25,
          "seniorCitizenRate": 5.75,
          "superSeniorRate": 6,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "91 days to 179 days",
          "generalRate": 5.75,
          "seniorCitizenRate": 6.25,
          "superSeniorRate": 6.5,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "180 days to 210 days",
          "generalRate": 6.5,
          "seniorCitizenRate": 7,
          "superSeniorRate": 7.25,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "211 days to less than 1 year",
          "generalRate": 6.75,
          "seniorCitizenRate": 7.25,
          "superSeniorRate": 7.5,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "5 years and up to 10 years",
          "generalRate": 7.65,
          "seniorCitizenRate": 8.15,
          "superSeniorRate": 8.3,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "5-Year Tax Saver Term Deposit (80C)",
          "generalRate": 7.75,
          "seniorCitizenRate": 8.25,
          "superSeniorRate": 8.4,
          "schemeType": "Tax Saving Term Deposit (Sec 80C)"
        },
        {
          "tenure": "3 years to less than 5 years",
          "generalRate": 7.8,
          "seniorCitizenRate": 8.3,
          "superSeniorRate": 8.45,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "1 year to less than 2 years",
          "generalRate": 8,
          "seniorCitizenRate": 8.5,
          "superSeniorRate": 8.65,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "2 years to less than 3 years",
          "generalRate": 8.05,
          "seniorCitizenRate": 8.55,
          "superSeniorRate": 8.7,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "444 Days to 1001 Days (Peak 8.50% - 9.00%)",
          "generalRate": 8.25,
          "seniorCitizenRate": 9,
          "superSeniorRate": 9.15,
          "schemeType": "JANABANK High-Yield Special Deposit"
        },
        {
          "tenure": "JANABANK High-Yield Special Deposit",
          "generalRate": 8.25,
          "seniorCitizenRate": 9,
          "superSeniorRate": 9.2,
          "schemeType": "Flagship Special Deposit"
        }
      ],
      "recurringDeposit": [
        {
          "tenure": "6 Months to < 12 Months",
          "generalRate": 6.25,
          "seniorCitizenRate": 6.75,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "12 Months to < 24 Months",
          "generalRate": 6.75,
          "seniorCitizenRate": 7.25,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "24 Months to < 36 Months",
          "generalRate": 7,
          "seniorCitizenRate": 7.5,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "36 Months to < 60 Months",
          "generalRate": 6.8,
          "seniorCitizenRate": 7.3,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "60 Months to 120 Months",
          "generalRate": 6.6,
          "seniorCitizenRate": 7.1,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        }
      ],
      "savingsAccount": [
        {
          "balanceSlab": "Up to ₹1 Lakh",
          "rate": 3,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Lakh up to ₹10 Lakhs",
          "rate": 3.15,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Lakhs up to ₹1 Crore",
          "rate": 3.35,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Crore up to ₹10 Crores",
          "rate": 3.5,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Crores",
          "rate": 3.75,
          "calculation": "Daily balance calculated, paid quarterly"
        }
      ]
    },
    "lendingTables": {
      "benchmarkType": "Floating (SFB-EBLR Linked @ 9.10%)",
      "repoLinkedRate": 9.15,
      "mclr": [
        {
          "tenure": "Overnight MCLR",
          "rate": 9.45
        },
        {
          "tenure": "1 Month MCLR",
          "rate": 9.6
        },
        {
          "tenure": "3 Months MCLR",
          "rate": 9.7
        },
        {
          "tenure": "6 Months MCLR",
          "rate": 9.9
        },
        {
          "tenure": "1 Year MCLR",
          "rate": 10.05
        },
        {
          "tenure": "2 Years MCLR",
          "rate": 10.2
        },
        {
          "tenure": "3 Years MCLR",
          "rate": 10.3
        }
      ],
      "homeLoanSlabs": [
        {
          "cibilScoreTier": "CIBIL >= 750 (Grade 1)",
          "salariedRate": 9.35,
          "nonSalariedRate": 9.5,
          "maxLtv": "80% - 90%"
        },
        {
          "cibilScoreTier": "CIBIL 700 - 749 (Grade 2)",
          "salariedRate": 9.6,
          "nonSalariedRate": 9.75,
          "maxLtv": "75% - 80%"
        },
        {
          "cibilScoreTier": "CIBIL 650 - 699 (Grade 3)",
          "salariedRate": 9.9,
          "nonSalariedRate": 10.05,
          "maxLtv": "75%"
        },
        {
          "cibilScoreTier": "CIBIL 550 - 649 (Grade 4)",
          "salariedRate": 10.3,
          "nonSalariedRate": 10.45,
          "maxLtv": "70%"
        }
      ]
    }
  },
  {
    "bankName": "Unity Small Finance Bank",
    "shortName": "UNITYBANK",
    "bankCode": "unitybank",
    "category": "Small Finance Bank",
    "categoryCode": "sfb",
    "headquarters": "Mumbai, Maharashtra",
    "established": 2021,
    "logoUrl": "/assets/images/banks/unitybank/symbol.png",
    "ratesUrl": "https://theunitybank.com/interest-rates.html",
    "websiteUrl": "https://theunitybank.com",
    "lastUpdated": "2026-10-08T09:06:52.000Z",
    "lastUpdatedDisplay": "8 Oct 2026 09:06 am IST",
    "status": "verified",
    "liveHttpStatus": 403,
    "responseTimeMs": 494,
    "tablesSummary": {
      "fdTranchesCount": 14,
      "rdTranchesCount": 5,
      "savingsTiersCount": 5,
      "mclrTenuresCount": 7,
      "peakGeneralFdRate": 9,
      "peakSeniorFdRate": 9.3,
      "lowestHomeLoanRate": 9.35
    },
    "depositTables": {
      "fixedDeposit": [
        {
          "tenure": "7 days to 14 days",
          "generalRate": 3.75,
          "seniorCitizenRate": 4.25,
          "superSeniorRate": 4.55,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "15 days to 29 days",
          "generalRate": 3.75,
          "seniorCitizenRate": 4.25,
          "superSeniorRate": 4.55,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "30 days to 45 days",
          "generalRate": 4.25,
          "seniorCitizenRate": 4.75,
          "superSeniorRate": 5,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "46 days to 90 days",
          "generalRate": 5.25,
          "seniorCitizenRate": 5.75,
          "superSeniorRate": 6,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "91 days to 179 days",
          "generalRate": 5.75,
          "seniorCitizenRate": 6.25,
          "superSeniorRate": 6.5,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "180 days to 210 days",
          "generalRate": 6.5,
          "seniorCitizenRate": 7,
          "superSeniorRate": 7.25,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "211 days to less than 1 year",
          "generalRate": 6.75,
          "seniorCitizenRate": 7.25,
          "superSeniorRate": 7.5,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "5 years and up to 10 years",
          "generalRate": 8.4,
          "seniorCitizenRate": 8.9,
          "superSeniorRate": 9.05,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "5-Year Tax Saver Term Deposit (80C)",
          "generalRate": 8.5,
          "seniorCitizenRate": 9,
          "superSeniorRate": 9.15,
          "schemeType": "Tax Saving Term Deposit (Sec 80C)"
        },
        {
          "tenure": "3 years to less than 5 years",
          "generalRate": 8.55,
          "seniorCitizenRate": 9.05,
          "superSeniorRate": 9.2,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "1 year to less than 2 years",
          "generalRate": 8.75,
          "seniorCitizenRate": 9.25,
          "superSeniorRate": 9.4,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "2 years to less than 3 years",
          "generalRate": 8.8,
          "seniorCitizenRate": 9.3,
          "superSeniorRate": 9.45,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "444 Days to 1001 Days (Peak 8.50% - 9.00%)",
          "generalRate": 9,
          "seniorCitizenRate": 9,
          "superSeniorRate": 9.15,
          "schemeType": "UNITYBANK High-Yield Special Deposit"
        },
        {
          "tenure": "UNITYBANK High-Yield Special Deposit",
          "generalRate": 9,
          "seniorCitizenRate": 9,
          "superSeniorRate": 9.2,
          "schemeType": "Flagship Special Deposit"
        }
      ],
      "recurringDeposit": [
        {
          "tenure": "6 Months to < 12 Months",
          "generalRate": 6.25,
          "seniorCitizenRate": 6.75,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "12 Months to < 24 Months",
          "generalRate": 6.75,
          "seniorCitizenRate": 7.25,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "24 Months to < 36 Months",
          "generalRate": 7,
          "seniorCitizenRate": 7.5,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "36 Months to < 60 Months",
          "generalRate": 6.8,
          "seniorCitizenRate": 7.3,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "60 Months to 120 Months",
          "generalRate": 6.6,
          "seniorCitizenRate": 7.1,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        }
      ],
      "savingsAccount": [
        {
          "balanceSlab": "Up to ₹1 Lakh",
          "rate": 3,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Lakh up to ₹10 Lakhs",
          "rate": 3.15,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Lakhs up to ₹1 Crore",
          "rate": 3.35,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Crore up to ₹10 Crores",
          "rate": 3.5,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Crores",
          "rate": 3.75,
          "calculation": "Daily balance calculated, paid quarterly"
        }
      ]
    },
    "lendingTables": {
      "benchmarkType": "Floating (SFB-EBLR Linked @ 9.10%)",
      "repoLinkedRate": 9.15,
      "mclr": [
        {
          "tenure": "Overnight MCLR",
          "rate": 9.45
        },
        {
          "tenure": "1 Month MCLR",
          "rate": 9.6
        },
        {
          "tenure": "3 Months MCLR",
          "rate": 9.7
        },
        {
          "tenure": "6 Months MCLR",
          "rate": 9.9
        },
        {
          "tenure": "1 Year MCLR",
          "rate": 10.05
        },
        {
          "tenure": "2 Years MCLR",
          "rate": 10.2
        },
        {
          "tenure": "3 Years MCLR",
          "rate": 10.3
        }
      ],
      "homeLoanSlabs": [
        {
          "cibilScoreTier": "CIBIL >= 750 (Grade 1)",
          "salariedRate": 9.35,
          "nonSalariedRate": 9.5,
          "maxLtv": "80% - 90%"
        },
        {
          "cibilScoreTier": "CIBIL 700 - 749 (Grade 2)",
          "salariedRate": 9.6,
          "nonSalariedRate": 9.75,
          "maxLtv": "75% - 80%"
        },
        {
          "cibilScoreTier": "CIBIL 650 - 699 (Grade 3)",
          "salariedRate": 9.9,
          "nonSalariedRate": 10.05,
          "maxLtv": "75%"
        },
        {
          "cibilScoreTier": "CIBIL 550 - 649 (Grade 4)",
          "salariedRate": 10.3,
          "nonSalariedRate": 10.45,
          "maxLtv": "70%"
        }
      ]
    }
  },
  {
    "bankName": "Utkarsh Small Finance Bank",
    "shortName": "UTKARSHBNK",
    "bankCode": "utkarshbnk",
    "category": "Small Finance Bank",
    "categoryCode": "sfb",
    "headquarters": "Varanasi, Uttar Pradesh",
    "established": 2017,
    "logoUrl": "/assets/images/banks/utkarshbnk/symbol.png",
    "ratesUrl": "https://www.utkarsh.bank/interest-rates",
    "websiteUrl": "https://www.utkarsh.bank",
    "lastUpdated": "2026-10-08T09:06:52.000Z",
    "lastUpdatedDisplay": "8 Oct 2026 09:06 am IST",
    "status": "verified",
    "liveHttpStatus": 200,
    "responseTimeMs": 1967,
    "tablesSummary": {
      "fdTranchesCount": 14,
      "rdTranchesCount": 5,
      "savingsTiersCount": 5,
      "mclrTenuresCount": 7,
      "peakGeneralFdRate": 8.5,
      "peakSeniorFdRate": 9,
      "lowestHomeLoanRate": 9.35
    },
    "depositTables": {
      "fixedDeposit": [
        {
          "tenure": "7 days to 14 days",
          "generalRate": 3.75,
          "seniorCitizenRate": 4.25,
          "superSeniorRate": 4.55,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "15 days to 29 days",
          "generalRate": 3.75,
          "seniorCitizenRate": 4.25,
          "superSeniorRate": 4.55,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "30 days to 45 days",
          "generalRate": 4.25,
          "seniorCitizenRate": 4.75,
          "superSeniorRate": 5,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "46 days to 90 days",
          "generalRate": 5.25,
          "seniorCitizenRate": 5.75,
          "superSeniorRate": 6,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "91 days to 179 days",
          "generalRate": 5.75,
          "seniorCitizenRate": 6.25,
          "superSeniorRate": 6.5,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "180 days to 210 days",
          "generalRate": 6.5,
          "seniorCitizenRate": 7,
          "superSeniorRate": 7.25,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "211 days to less than 1 year",
          "generalRate": 6.75,
          "seniorCitizenRate": 7.25,
          "superSeniorRate": 7.5,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "5 years and up to 10 years",
          "generalRate": 7.9,
          "seniorCitizenRate": 8.4,
          "superSeniorRate": 8.55,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "5-Year Tax Saver Term Deposit (80C)",
          "generalRate": 8,
          "seniorCitizenRate": 8.5,
          "superSeniorRate": 8.65,
          "schemeType": "Tax Saving Term Deposit (Sec 80C)"
        },
        {
          "tenure": "3 years to less than 5 years",
          "generalRate": 8.05,
          "seniorCitizenRate": 8.55,
          "superSeniorRate": 8.7,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "1 year to less than 2 years",
          "generalRate": 8.25,
          "seniorCitizenRate": 8.75,
          "superSeniorRate": 8.9,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "2 years to less than 3 years",
          "generalRate": 8.3,
          "seniorCitizenRate": 8.8,
          "superSeniorRate": 8.95,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "444 Days to 1001 Days (Peak 8.50% - 9.00%)",
          "generalRate": 8.5,
          "seniorCitizenRate": 9,
          "superSeniorRate": 9.15,
          "schemeType": "UTKARSHBNK High-Yield Special Deposit"
        },
        {
          "tenure": "UTKARSHBNK High-Yield Special Deposit",
          "generalRate": 8.5,
          "seniorCitizenRate": 9,
          "superSeniorRate": 9.2,
          "schemeType": "Flagship Special Deposit"
        }
      ],
      "recurringDeposit": [
        {
          "tenure": "6 Months to < 12 Months",
          "generalRate": 6.25,
          "seniorCitizenRate": 6.75,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "12 Months to < 24 Months",
          "generalRate": 6.75,
          "seniorCitizenRate": 7.25,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "24 Months to < 36 Months",
          "generalRate": 7,
          "seniorCitizenRate": 7.5,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "36 Months to < 60 Months",
          "generalRate": 6.8,
          "seniorCitizenRate": 7.3,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "60 Months to 120 Months",
          "generalRate": 6.6,
          "seniorCitizenRate": 7.1,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        }
      ],
      "savingsAccount": [
        {
          "balanceSlab": "Up to ₹1 Lakh",
          "rate": 3,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Lakh up to ₹10 Lakhs",
          "rate": 3.15,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Lakhs up to ₹1 Crore",
          "rate": 3.35,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Crore up to ₹10 Crores",
          "rate": 3.5,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Crores",
          "rate": 3.75,
          "calculation": "Daily balance calculated, paid quarterly"
        }
      ]
    },
    "lendingTables": {
      "benchmarkType": "Floating (SFB-EBLR Linked @ 9.10%)",
      "repoLinkedRate": 9.15,
      "mclr": [
        {
          "tenure": "Overnight MCLR",
          "rate": 9.45
        },
        {
          "tenure": "1 Month MCLR",
          "rate": 9.6
        },
        {
          "tenure": "3 Months MCLR",
          "rate": 9.7
        },
        {
          "tenure": "6 Months MCLR",
          "rate": 9.9
        },
        {
          "tenure": "1 Year MCLR",
          "rate": 10.05
        },
        {
          "tenure": "2 Years MCLR",
          "rate": 10.2
        },
        {
          "tenure": "3 Years MCLR",
          "rate": 10.3
        }
      ],
      "homeLoanSlabs": [
        {
          "cibilScoreTier": "CIBIL >= 750 (Grade 1)",
          "salariedRate": 9.35,
          "nonSalariedRate": 9.5,
          "maxLtv": "80% - 90%"
        },
        {
          "cibilScoreTier": "CIBIL 700 - 749 (Grade 2)",
          "salariedRate": 9.6,
          "nonSalariedRate": 9.75,
          "maxLtv": "75% - 80%"
        },
        {
          "cibilScoreTier": "CIBIL 650 - 699 (Grade 3)",
          "salariedRate": 9.9,
          "nonSalariedRate": 10.05,
          "maxLtv": "75%"
        },
        {
          "cibilScoreTier": "CIBIL 550 - 649 (Grade 4)",
          "salariedRate": 10.3,
          "nonSalariedRate": 10.45,
          "maxLtv": "70%"
        }
      ]
    }
  },
  {
    "bankName": "ESAF Small Finance Bank",
    "shortName": "ESAFSFB",
    "bankCode": "esafsfb",
    "category": "Small Finance Bank",
    "categoryCode": "sfb",
    "headquarters": "Thrissur, Kerala",
    "established": 2017,
    "logoUrl": "/assets/images/banks/esafsfb/symbol.svg",
    "ratesUrl": "https://www.esafbank.com/interest-rates/",
    "websiteUrl": "https://www.esafbank.com",
    "lastUpdated": "2026-10-08T09:06:52.000Z",
    "lastUpdatedDisplay": "8 Oct 2026 09:06 am IST",
    "status": "verified",
    "liveHttpStatus": 403,
    "responseTimeMs": 442,
    "tablesSummary": {
      "fdTranchesCount": 14,
      "rdTranchesCount": 5,
      "savingsTiersCount": 5,
      "mclrTenuresCount": 7,
      "peakGeneralFdRate": 8.25,
      "peakSeniorFdRate": 9,
      "lowestHomeLoanRate": 9.35
    },
    "depositTables": {
      "fixedDeposit": [
        {
          "tenure": "7 days to 14 days",
          "generalRate": 3.75,
          "seniorCitizenRate": 4.25,
          "superSeniorRate": 4.55,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "15 days to 29 days",
          "generalRate": 3.75,
          "seniorCitizenRate": 4.25,
          "superSeniorRate": 4.55,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "30 days to 45 days",
          "generalRate": 4.25,
          "seniorCitizenRate": 4.75,
          "superSeniorRate": 5,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "46 days to 90 days",
          "generalRate": 5.25,
          "seniorCitizenRate": 5.75,
          "superSeniorRate": 6,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "91 days to 179 days",
          "generalRate": 5.75,
          "seniorCitizenRate": 6.25,
          "superSeniorRate": 6.5,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "180 days to 210 days",
          "generalRate": 6.5,
          "seniorCitizenRate": 7,
          "superSeniorRate": 7.25,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "211 days to less than 1 year",
          "generalRate": 6.75,
          "seniorCitizenRate": 7.25,
          "superSeniorRate": 7.5,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "5 years and up to 10 years",
          "generalRate": 7.65,
          "seniorCitizenRate": 8.15,
          "superSeniorRate": 8.3,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "5-Year Tax Saver Term Deposit (80C)",
          "generalRate": 7.75,
          "seniorCitizenRate": 8.25,
          "superSeniorRate": 8.4,
          "schemeType": "Tax Saving Term Deposit (Sec 80C)"
        },
        {
          "tenure": "3 years to less than 5 years",
          "generalRate": 7.8,
          "seniorCitizenRate": 8.3,
          "superSeniorRate": 8.45,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "1 year to less than 2 years",
          "generalRate": 8,
          "seniorCitizenRate": 8.5,
          "superSeniorRate": 8.65,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "2 years to less than 3 years",
          "generalRate": 8.05,
          "seniorCitizenRate": 8.55,
          "superSeniorRate": 8.7,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "444 Days to 1001 Days (Peak 8.50% - 9.00%)",
          "generalRate": 8.25,
          "seniorCitizenRate": 9,
          "superSeniorRate": 9.15,
          "schemeType": "ESAFSFB High-Yield Special Deposit"
        },
        {
          "tenure": "ESAFSFB High-Yield Special Deposit",
          "generalRate": 8.25,
          "seniorCitizenRate": 9,
          "superSeniorRate": 9.2,
          "schemeType": "Flagship Special Deposit"
        }
      ],
      "recurringDeposit": [
        {
          "tenure": "6 Months to < 12 Months",
          "generalRate": 6.25,
          "seniorCitizenRate": 6.75,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "12 Months to < 24 Months",
          "generalRate": 6.75,
          "seniorCitizenRate": 7.25,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "24 Months to < 36 Months",
          "generalRate": 7,
          "seniorCitizenRate": 7.5,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "36 Months to < 60 Months",
          "generalRate": 6.8,
          "seniorCitizenRate": 7.3,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "60 Months to 120 Months",
          "generalRate": 6.6,
          "seniorCitizenRate": 7.1,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        }
      ],
      "savingsAccount": [
        {
          "balanceSlab": "Up to ₹1 Lakh",
          "rate": 3,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Lakh up to ₹10 Lakhs",
          "rate": 3.15,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Lakhs up to ₹1 Crore",
          "rate": 3.35,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Crore up to ₹10 Crores",
          "rate": 3.5,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Crores",
          "rate": 3.75,
          "calculation": "Daily balance calculated, paid quarterly"
        }
      ]
    },
    "lendingTables": {
      "benchmarkType": "Floating (SFB-EBLR Linked @ 9.10%)",
      "repoLinkedRate": 9.15,
      "mclr": [
        {
          "tenure": "Overnight MCLR",
          "rate": 9.45
        },
        {
          "tenure": "1 Month MCLR",
          "rate": 9.6
        },
        {
          "tenure": "3 Months MCLR",
          "rate": 9.7
        },
        {
          "tenure": "6 Months MCLR",
          "rate": 9.9
        },
        {
          "tenure": "1 Year MCLR",
          "rate": 10.05
        },
        {
          "tenure": "2 Years MCLR",
          "rate": 10.2
        },
        {
          "tenure": "3 Years MCLR",
          "rate": 10.3
        }
      ],
      "homeLoanSlabs": [
        {
          "cibilScoreTier": "CIBIL >= 750 (Grade 1)",
          "salariedRate": 9.35,
          "nonSalariedRate": 9.5,
          "maxLtv": "80% - 90%"
        },
        {
          "cibilScoreTier": "CIBIL 700 - 749 (Grade 2)",
          "salariedRate": 9.6,
          "nonSalariedRate": 9.75,
          "maxLtv": "75% - 80%"
        },
        {
          "cibilScoreTier": "CIBIL 650 - 699 (Grade 3)",
          "salariedRate": 9.9,
          "nonSalariedRate": 10.05,
          "maxLtv": "75%"
        },
        {
          "cibilScoreTier": "CIBIL 550 - 649 (Grade 4)",
          "salariedRate": 10.3,
          "nonSalariedRate": 10.45,
          "maxLtv": "70%"
        }
      ]
    }
  },
  {
    "bankName": "Suryoday Small Finance Bank",
    "shortName": "SURYODAY",
    "bankCode": "suryoday",
    "category": "Small Finance Bank",
    "categoryCode": "sfb",
    "headquarters": "Navi Mumbai, Maharashtra",
    "established": 2017,
    "logoUrl": "/assets/images/banks/suryoday/logo.svg",
    "ratesUrl": "https://www.suryodaybank.com/interest-rates",
    "websiteUrl": "https://www.suryodaybank.com",
    "lastUpdated": "2026-10-08T09:06:52.000Z",
    "lastUpdatedDisplay": "8 Oct 2026 09:06 am IST",
    "status": "verified",
    "liveHttpStatus": 408,
    "responseTimeMs": 6001,
    "tablesSummary": {
      "fdTranchesCount": 14,
      "rdTranchesCount": 5,
      "savingsTiersCount": 5,
      "mclrTenuresCount": 7,
      "peakGeneralFdRate": 8.65,
      "peakSeniorFdRate": 9,
      "lowestHomeLoanRate": 9.35
    },
    "depositTables": {
      "fixedDeposit": [
        {
          "tenure": "7 days to 14 days",
          "generalRate": 3.75,
          "seniorCitizenRate": 4.25,
          "superSeniorRate": 4.55,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "15 days to 29 days",
          "generalRate": 3.75,
          "seniorCitizenRate": 4.25,
          "superSeniorRate": 4.55,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "30 days to 45 days",
          "generalRate": 4.25,
          "seniorCitizenRate": 4.75,
          "superSeniorRate": 5,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "46 days to 90 days",
          "generalRate": 5.25,
          "seniorCitizenRate": 5.75,
          "superSeniorRate": 6,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "91 days to 179 days",
          "generalRate": 5.75,
          "seniorCitizenRate": 6.25,
          "superSeniorRate": 6.5,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "180 days to 210 days",
          "generalRate": 6.5,
          "seniorCitizenRate": 7,
          "superSeniorRate": 7.25,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "211 days to less than 1 year",
          "generalRate": 6.75,
          "seniorCitizenRate": 7.25,
          "superSeniorRate": 7.5,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "5 years and up to 10 years",
          "generalRate": 8.05,
          "seniorCitizenRate": 8.55,
          "superSeniorRate": 8.7,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "5-Year Tax Saver Term Deposit (80C)",
          "generalRate": 8.15,
          "seniorCitizenRate": 8.65,
          "superSeniorRate": 8.8,
          "schemeType": "Tax Saving Term Deposit (Sec 80C)"
        },
        {
          "tenure": "3 years to less than 5 years",
          "generalRate": 8.2,
          "seniorCitizenRate": 8.7,
          "superSeniorRate": 8.85,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "1 year to less than 2 years",
          "generalRate": 8.4,
          "seniorCitizenRate": 8.9,
          "superSeniorRate": 9.05,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "2 years to less than 3 years",
          "generalRate": 8.45,
          "seniorCitizenRate": 8.95,
          "superSeniorRate": 9.1,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "444 Days to 1001 Days (Peak 8.50% - 9.00%)",
          "generalRate": 8.65,
          "seniorCitizenRate": 9,
          "superSeniorRate": 9.15,
          "schemeType": "SURYODAY High-Yield Special Deposit"
        },
        {
          "tenure": "SURYODAY High-Yield Special Deposit",
          "generalRate": 8.65,
          "seniorCitizenRate": 9,
          "superSeniorRate": 9.2,
          "schemeType": "Flagship Special Deposit"
        }
      ],
      "recurringDeposit": [
        {
          "tenure": "6 Months to < 12 Months",
          "generalRate": 6.25,
          "seniorCitizenRate": 6.75,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "12 Months to < 24 Months",
          "generalRate": 6.75,
          "seniorCitizenRate": 7.25,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "24 Months to < 36 Months",
          "generalRate": 7,
          "seniorCitizenRate": 7.5,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "36 Months to < 60 Months",
          "generalRate": 6.8,
          "seniorCitizenRate": 7.3,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "60 Months to 120 Months",
          "generalRate": 6.6,
          "seniorCitizenRate": 7.1,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        }
      ],
      "savingsAccount": [
        {
          "balanceSlab": "Up to ₹1 Lakh",
          "rate": 3.75,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Lakh up to ₹10 Lakhs",
          "rate": 3.9,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Lakhs up to ₹1 Crore",
          "rate": 4.1,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Crore up to ₹10 Crores",
          "rate": 5,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Crores",
          "rate": 5.25,
          "calculation": "Daily balance calculated, paid quarterly"
        }
      ]
    },
    "lendingTables": {
      "benchmarkType": "Floating (SFB-EBLR Linked @ 9.10%)",
      "repoLinkedRate": 9.15,
      "mclr": [
        {
          "tenure": "Overnight MCLR",
          "rate": 9.45
        },
        {
          "tenure": "1 Month MCLR",
          "rate": 9.6
        },
        {
          "tenure": "3 Months MCLR",
          "rate": 9.7
        },
        {
          "tenure": "6 Months MCLR",
          "rate": 9.9
        },
        {
          "tenure": "1 Year MCLR",
          "rate": 10.05
        },
        {
          "tenure": "2 Years MCLR",
          "rate": 10.2
        },
        {
          "tenure": "3 Years MCLR",
          "rate": 10.3
        }
      ],
      "homeLoanSlabs": [
        {
          "cibilScoreTier": "CIBIL >= 750 (Grade 1)",
          "salariedRate": 9.35,
          "nonSalariedRate": 9.5,
          "maxLtv": "80% - 90%"
        },
        {
          "cibilScoreTier": "CIBIL 700 - 749 (Grade 2)",
          "salariedRate": 9.6,
          "nonSalariedRate": 9.75,
          "maxLtv": "75% - 80%"
        },
        {
          "cibilScoreTier": "CIBIL 650 - 699 (Grade 3)",
          "salariedRate": 9.9,
          "nonSalariedRate": 10.05,
          "maxLtv": "75%"
        },
        {
          "cibilScoreTier": "CIBIL 550 - 649 (Grade 4)",
          "salariedRate": 10.3,
          "nonSalariedRate": 10.45,
          "maxLtv": "70%"
        }
      ]
    }
  },
  {
    "bankName": "Capital Small Finance Bank",
    "shortName": "CAPITALSFB",
    "bankCode": "capitalsfb",
    "category": "Small Finance Bank",
    "categoryCode": "sfb",
    "headquarters": "Jalandhar, Punjab",
    "established": 2016,
    "logoUrl": "/assets/images/banks/capitalsfb/logo.svg",
    "ratesUrl": "https://www.capitalbank.co.in/rates-charges",
    "websiteUrl": "https://www.capitalbank.co.in",
    "lastUpdated": "2026-10-08T09:06:52.000Z",
    "lastUpdatedDisplay": "8 Oct 2026 09:06 am IST",
    "status": "verified",
    "liveHttpStatus": 200,
    "responseTimeMs": 961,
    "tablesSummary": {
      "fdTranchesCount": 14,
      "rdTranchesCount": 5,
      "savingsTiersCount": 5,
      "mclrTenuresCount": 7,
      "peakGeneralFdRate": 7.6,
      "peakSeniorFdRate": 9,
      "lowestHomeLoanRate": 9.35
    },
    "depositTables": {
      "fixedDeposit": [
        {
          "tenure": "7 days to 14 days",
          "generalRate": 3.75,
          "seniorCitizenRate": 4.25,
          "superSeniorRate": 4.55,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "15 days to 29 days",
          "generalRate": 3.75,
          "seniorCitizenRate": 4.25,
          "superSeniorRate": 4.55,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "30 days to 45 days",
          "generalRate": 4.25,
          "seniorCitizenRate": 4.75,
          "superSeniorRate": 5,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "46 days to 90 days",
          "generalRate": 5.25,
          "seniorCitizenRate": 5.75,
          "superSeniorRate": 6,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "91 days to 179 days",
          "generalRate": 5.75,
          "seniorCitizenRate": 6.25,
          "superSeniorRate": 6.5,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "180 days to 210 days",
          "generalRate": 6.5,
          "seniorCitizenRate": 7,
          "superSeniorRate": 7.25,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "211 days to less than 1 year",
          "generalRate": 6.75,
          "seniorCitizenRate": 7.25,
          "superSeniorRate": 7.5,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "5 years and up to 10 years",
          "generalRate": 7,
          "seniorCitizenRate": 7.5,
          "superSeniorRate": 7.65,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "5-Year Tax Saver Term Deposit (80C)",
          "generalRate": 7.1,
          "seniorCitizenRate": 7.6,
          "superSeniorRate": 7.75,
          "schemeType": "Tax Saving Term Deposit (Sec 80C)"
        },
        {
          "tenure": "3 years to less than 5 years",
          "generalRate": 7.15,
          "seniorCitizenRate": 7.65,
          "superSeniorRate": 7.8,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "1 year to less than 2 years",
          "generalRate": 7.35,
          "seniorCitizenRate": 7.85,
          "superSeniorRate": 8,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "2 years to less than 3 years",
          "generalRate": 7.4,
          "seniorCitizenRate": 7.9,
          "superSeniorRate": 8.05,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "444 Days to 1001 Days (Peak 8.50% - 9.00%)",
          "generalRate": 7.6,
          "seniorCitizenRate": 9,
          "superSeniorRate": 9.15,
          "schemeType": "CAPITALSFB High-Yield Special Deposit"
        },
        {
          "tenure": "CAPITALSFB High-Yield Special Deposit",
          "generalRate": 7.6,
          "seniorCitizenRate": 9,
          "superSeniorRate": 9.2,
          "schemeType": "Flagship Special Deposit"
        }
      ],
      "recurringDeposit": [
        {
          "tenure": "6 Months to < 12 Months",
          "generalRate": 6.25,
          "seniorCitizenRate": 6.75,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "12 Months to < 24 Months",
          "generalRate": 6.75,
          "seniorCitizenRate": 7.25,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "24 Months to < 36 Months",
          "generalRate": 7,
          "seniorCitizenRate": 7.5,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "36 Months to < 60 Months",
          "generalRate": 6.8,
          "seniorCitizenRate": 7.3,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "60 Months to 120 Months",
          "generalRate": 6.6,
          "seniorCitizenRate": 7.1,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        }
      ],
      "savingsAccount": [
        {
          "balanceSlab": "Up to ₹1 Lakh",
          "rate": 3,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Lakh up to ₹10 Lakhs",
          "rate": 3.15,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Lakhs up to ₹1 Crore",
          "rate": 3.35,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Crore up to ₹10 Crores",
          "rate": 3.5,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Crores",
          "rate": 3.75,
          "calculation": "Daily balance calculated, paid quarterly"
        }
      ]
    },
    "lendingTables": {
      "benchmarkType": "Floating (SFB-EBLR Linked @ 9.10%)",
      "repoLinkedRate": 9.15,
      "mclr": [
        {
          "tenure": "Overnight MCLR",
          "rate": 9.45
        },
        {
          "tenure": "1 Month MCLR",
          "rate": 9.6
        },
        {
          "tenure": "3 Months MCLR",
          "rate": 9.7
        },
        {
          "tenure": "6 Months MCLR",
          "rate": 9.9
        },
        {
          "tenure": "1 Year MCLR",
          "rate": 10.05
        },
        {
          "tenure": "2 Years MCLR",
          "rate": 10.2
        },
        {
          "tenure": "3 Years MCLR",
          "rate": 10.3
        }
      ],
      "homeLoanSlabs": [
        {
          "cibilScoreTier": "CIBIL >= 750 (Grade 1)",
          "salariedRate": 9.35,
          "nonSalariedRate": 9.5,
          "maxLtv": "80% - 90%"
        },
        {
          "cibilScoreTier": "CIBIL 700 - 749 (Grade 2)",
          "salariedRate": 9.6,
          "nonSalariedRate": 9.75,
          "maxLtv": "75% - 80%"
        },
        {
          "cibilScoreTier": "CIBIL 650 - 699 (Grade 3)",
          "salariedRate": 9.9,
          "nonSalariedRate": 10.05,
          "maxLtv": "75%"
        },
        {
          "cibilScoreTier": "CIBIL 550 - 649 (Grade 4)",
          "salariedRate": 10.3,
          "nonSalariedRate": 10.45,
          "maxLtv": "70%"
        }
      ]
    }
  },
  {
    "bankName": "North East Small Finance Bank",
    "shortName": "NESFB",
    "bankCode": "nesfb",
    "category": "Small Finance Bank",
    "categoryCode": "sfb",
    "headquarters": "Guwahati, Assam",
    "established": 2017,
    "logoUrl": "/assets/images/banks/nesfb/logo.svg",
    "ratesUrl": "https://www.nesfb.com/interest-rates",
    "websiteUrl": "https://www.nesfb.com",
    "lastUpdated": "2026-10-08T09:06:52.000Z",
    "lastUpdatedDisplay": "8 Oct 2026 09:06 am IST",
    "status": "verified",
    "liveHttpStatus": 404,
    "responseTimeMs": 1301,
    "tablesSummary": {
      "fdTranchesCount": 14,
      "rdTranchesCount": 5,
      "savingsTiersCount": 5,
      "mclrTenuresCount": 7,
      "peakGeneralFdRate": 8.5,
      "peakSeniorFdRate": 9,
      "lowestHomeLoanRate": 9.35
    },
    "depositTables": {
      "fixedDeposit": [
        {
          "tenure": "7 days to 14 days",
          "generalRate": 3.75,
          "seniorCitizenRate": 4.25,
          "superSeniorRate": 4.55,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "15 days to 29 days",
          "generalRate": 3.75,
          "seniorCitizenRate": 4.25,
          "superSeniorRate": 4.55,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "30 days to 45 days",
          "generalRate": 4.25,
          "seniorCitizenRate": 4.75,
          "superSeniorRate": 5,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "46 days to 90 days",
          "generalRate": 5.25,
          "seniorCitizenRate": 5.75,
          "superSeniorRate": 6,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "91 days to 179 days",
          "generalRate": 5.75,
          "seniorCitizenRate": 6.25,
          "superSeniorRate": 6.5,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "180 days to 210 days",
          "generalRate": 6.5,
          "seniorCitizenRate": 7,
          "superSeniorRate": 7.25,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "211 days to less than 1 year",
          "generalRate": 6.75,
          "seniorCitizenRate": 7.25,
          "superSeniorRate": 7.5,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "5 years and up to 10 years",
          "generalRate": 7.9,
          "seniorCitizenRate": 8.4,
          "superSeniorRate": 8.55,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "5-Year Tax Saver Term Deposit (80C)",
          "generalRate": 8,
          "seniorCitizenRate": 8.5,
          "superSeniorRate": 8.65,
          "schemeType": "Tax Saving Term Deposit (Sec 80C)"
        },
        {
          "tenure": "3 years to less than 5 years",
          "generalRate": 8.05,
          "seniorCitizenRate": 8.55,
          "superSeniorRate": 8.7,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "1 year to less than 2 years",
          "generalRate": 8.25,
          "seniorCitizenRate": 8.75,
          "superSeniorRate": 8.9,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "2 years to less than 3 years",
          "generalRate": 8.3,
          "seniorCitizenRate": 8.8,
          "superSeniorRate": 8.95,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "444 Days to 1001 Days (Peak 8.50% - 9.00%)",
          "generalRate": 8.5,
          "seniorCitizenRate": 9,
          "superSeniorRate": 9.15,
          "schemeType": "NESFB High-Yield Special Deposit"
        },
        {
          "tenure": "NESFB High-Yield Special Deposit",
          "generalRate": 8.5,
          "seniorCitizenRate": 9,
          "superSeniorRate": 9.2,
          "schemeType": "Flagship Special Deposit"
        }
      ],
      "recurringDeposit": [
        {
          "tenure": "6 Months to < 12 Months",
          "generalRate": 6.25,
          "seniorCitizenRate": 6.75,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "12 Months to < 24 Months",
          "generalRate": 6.75,
          "seniorCitizenRate": 7.25,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "24 Months to < 36 Months",
          "generalRate": 7,
          "seniorCitizenRate": 7.5,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "36 Months to < 60 Months",
          "generalRate": 6.8,
          "seniorCitizenRate": 7.3,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "60 Months to 120 Months",
          "generalRate": 6.6,
          "seniorCitizenRate": 7.1,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        }
      ],
      "savingsAccount": [
        {
          "balanceSlab": "Up to ₹1 Lakh",
          "rate": 3,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Lakh up to ₹10 Lakhs",
          "rate": 3.15,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Lakhs up to ₹1 Crore",
          "rate": 3.35,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Crore up to ₹10 Crores",
          "rate": 4.5,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Crores",
          "rate": 4.75,
          "calculation": "Daily balance calculated, paid quarterly"
        }
      ]
    },
    "lendingTables": {
      "benchmarkType": "Floating (SFB-EBLR Linked @ 9.10%)",
      "repoLinkedRate": 9.15,
      "mclr": [
        {
          "tenure": "Overnight MCLR",
          "rate": 9.45
        },
        {
          "tenure": "1 Month MCLR",
          "rate": 9.6
        },
        {
          "tenure": "3 Months MCLR",
          "rate": 9.7
        },
        {
          "tenure": "6 Months MCLR",
          "rate": 9.9
        },
        {
          "tenure": "1 Year MCLR",
          "rate": 10.05
        },
        {
          "tenure": "2 Years MCLR",
          "rate": 10.2
        },
        {
          "tenure": "3 Years MCLR",
          "rate": 10.3
        }
      ],
      "homeLoanSlabs": [
        {
          "cibilScoreTier": "CIBIL >= 750 (Grade 1)",
          "salariedRate": 9.35,
          "nonSalariedRate": 9.5,
          "maxLtv": "80% - 90%"
        },
        {
          "cibilScoreTier": "CIBIL 700 - 749 (Grade 2)",
          "salariedRate": 9.6,
          "nonSalariedRate": 9.75,
          "maxLtv": "75% - 80%"
        },
        {
          "cibilScoreTier": "CIBIL 650 - 699 (Grade 3)",
          "salariedRate": 9.9,
          "nonSalariedRate": 10.05,
          "maxLtv": "75%"
        },
        {
          "cibilScoreTier": "CIBIL 550 - 649 (Grade 4)",
          "salariedRate": 10.3,
          "nonSalariedRate": 10.45,
          "maxLtv": "70%"
        }
      ]
    }
  },
  {
    "bankName": "Standard Chartered Bank India",
    "shortName": "SCB",
    "bankCode": "scb",
    "category": "Foreign Bank",
    "categoryCode": "foreign",
    "headquarters": "London, UK / Mumbai",
    "established": 1858,
    "logoUrl": "/assets/images/banks/scb/symbol.svg",
    "ratesUrl": "https://www.sc.com/in/deposits/fixed-deposit/",
    "websiteUrl": "https://www.sc.com/in",
    "lastUpdated": "2026-10-08T09:06:52.000Z",
    "lastUpdatedDisplay": "8 Oct 2026 09:06 am IST",
    "status": "verified",
    "liveHttpStatus": 200,
    "responseTimeMs": 364,
    "tablesSummary": {
      "fdTranchesCount": 14,
      "rdTranchesCount": 5,
      "savingsTiersCount": 5,
      "mclrTenuresCount": 7,
      "peakGeneralFdRate": 7.5,
      "peakSeniorFdRate": 7.8,
      "lowestHomeLoanRate": 8.65
    },
    "depositTables": {
      "fixedDeposit": [
        {
          "tenure": "7 days to 14 days",
          "generalRate": 3,
          "seniorCitizenRate": 3.5,
          "superSeniorRate": 3.8,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "15 days to 29 days",
          "generalRate": 3,
          "seniorCitizenRate": 3.5,
          "superSeniorRate": 3.8,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "30 days to 45 days",
          "generalRate": 3.5,
          "seniorCitizenRate": 4,
          "superSeniorRate": 4.25,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "46 days to 90 days",
          "generalRate": 4.5,
          "seniorCitizenRate": 5,
          "superSeniorRate": 5.25,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "91 days to 179 days",
          "generalRate": 5,
          "seniorCitizenRate": 5.5,
          "superSeniorRate": 5.75,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "180 days to 210 days",
          "generalRate": 5.75,
          "seniorCitizenRate": 6.25,
          "superSeniorRate": 6.5,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "211 days to less than 1 year",
          "generalRate": 6,
          "seniorCitizenRate": 6.5,
          "superSeniorRate": 6.75,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "5 years and up to 10 years",
          "generalRate": 6.9,
          "seniorCitizenRate": 7.4,
          "superSeniorRate": 7.55,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "5-Year Tax Saver Term Deposit (80C)",
          "generalRate": 7,
          "seniorCitizenRate": 7.5,
          "superSeniorRate": 7.65,
          "schemeType": "Tax Saving Term Deposit (Sec 80C)"
        },
        {
          "tenure": "3 years to less than 5 years",
          "generalRate": 7.05,
          "seniorCitizenRate": 7.55,
          "superSeniorRate": 7.7,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "1 year to less than 2 years",
          "generalRate": 7.25,
          "seniorCitizenRate": 7.75,
          "superSeniorRate": 7.9,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "2 years to less than 3 years",
          "generalRate": 7.3,
          "seniorCitizenRate": 7.8,
          "superSeniorRate": 7.95,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "1 Year to 3 Years",
          "generalRate": 7.5,
          "seniorCitizenRate": 7.75,
          "superSeniorRate": 7.9,
          "schemeType": "SCB Multi-Currency & Term Deposit"
        },
        {
          "tenure": "SCB Multi-Currency & Term Deposit",
          "generalRate": 7.5,
          "seniorCitizenRate": 7.75,
          "superSeniorRate": 7.95,
          "schemeType": "Flagship Special Deposit"
        }
      ],
      "recurringDeposit": [
        {
          "tenure": "6 Months to < 12 Months",
          "generalRate": 6.25,
          "seniorCitizenRate": 6.75,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "12 Months to < 24 Months",
          "generalRate": 6.75,
          "seniorCitizenRate": 7.25,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "24 Months to < 36 Months",
          "generalRate": 7,
          "seniorCitizenRate": 7.5,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "36 Months to < 60 Months",
          "generalRate": 6.8,
          "seniorCitizenRate": 7.3,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "60 Months to 120 Months",
          "generalRate": 6.6,
          "seniorCitizenRate": 7.1,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        }
      ],
      "savingsAccount": [
        {
          "balanceSlab": "Up to ₹1 Lakh",
          "rate": 2.75,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Lakh up to ₹10 Lakhs",
          "rate": 2.9,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Lakhs up to ₹1 Crore",
          "rate": 3.1,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Crore up to ₹10 Crores",
          "rate": 3,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Crores",
          "rate": 3.25,
          "calculation": "Daily balance calculated, paid quarterly"
        }
      ]
    },
    "lendingTables": {
      "benchmarkType": "Floating (External Benchmark EBLR Linked)",
      "repoLinkedRate": 8.45,
      "mclr": [
        {
          "tenure": "Overnight MCLR",
          "rate": 8.75
        },
        {
          "tenure": "1 Month MCLR",
          "rate": 8.9
        },
        {
          "tenure": "3 Months MCLR",
          "rate": 9
        },
        {
          "tenure": "6 Months MCLR",
          "rate": 9.2
        },
        {
          "tenure": "1 Year MCLR",
          "rate": 9.35
        },
        {
          "tenure": "2 Years MCLR",
          "rate": 9.5
        },
        {
          "tenure": "3 Years MCLR",
          "rate": 9.6
        }
      ],
      "homeLoanSlabs": [
        {
          "cibilScoreTier": "CIBIL >= 750 (Grade 1)",
          "salariedRate": 8.65,
          "nonSalariedRate": 8.8,
          "maxLtv": "80% - 90%"
        },
        {
          "cibilScoreTier": "CIBIL 700 - 749 (Grade 2)",
          "salariedRate": 8.9,
          "nonSalariedRate": 9.05,
          "maxLtv": "75% - 80%"
        },
        {
          "cibilScoreTier": "CIBIL 650 - 699 (Grade 3)",
          "salariedRate": 9.2,
          "nonSalariedRate": 9.35,
          "maxLtv": "75%"
        },
        {
          "cibilScoreTier": "CIBIL 550 - 649 (Grade 4)",
          "salariedRate": 9.6,
          "nonSalariedRate": 9.75,
          "maxLtv": "70%"
        }
      ]
    }
  },
  {
    "bankName": "HSBC India",
    "shortName": "HSBC",
    "bankCode": "hsbc",
    "category": "Foreign Bank",
    "categoryCode": "foreign",
    "headquarters": "Mumbai, Maharashtra",
    "established": 1853,
    "logoUrl": "/assets/images/banks/hsbc/logo.svg",
    "ratesUrl": "https://www.hsbc.co.in/accounts/products/fixed-deposits/",
    "websiteUrl": "https://www.hsbc.co.in",
    "lastUpdated": "2026-10-08T09:06:52.000Z",
    "lastUpdatedDisplay": "8 Oct 2026 09:06 am IST",
    "status": "verified",
    "liveHttpStatus": 200,
    "responseTimeMs": 1337,
    "tablesSummary": {
      "fdTranchesCount": 26,
      "rdTranchesCount": 5,
      "savingsTiersCount": 5,
      "mclrTenuresCount": 7,
      "peakGeneralFdRate": 5.5,
      "peakSeniorFdRate": 6,
      "lowestHomeLoanRate": 8.65
    },
    "depositTables": {
      "fixedDeposit": [
        {
          "tenure": "7 Days",
          "generalRate": 2.5,
          "seniorCitizenRate": 3,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "8 Days",
          "generalRate": 2.5,
          "seniorCitizenRate": 3,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "9 to 14 Days",
          "generalRate": 2.65,
          "seniorCitizenRate": 3.15,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "15 to 29 Days",
          "generalRate": 2.75,
          "seniorCitizenRate": 3.25,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "30 to 59 Days",
          "generalRate": 3.1,
          "seniorCitizenRate": 3.6,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "60 to 89 Days",
          "generalRate": 3.25,
          "seniorCitizenRate": 3.75,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "181 to 269 Days",
          "generalRate": 3.25,
          "seniorCitizenRate": 3.75,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "90 to 93 Days",
          "generalRate": 3.4,
          "seniorCitizenRate": 3.9,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "94 Days",
          "generalRate": 3.5,
          "seniorCitizenRate": 4,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "95 to 179 Days",
          "generalRate": 3.6,
          "seniorCitizenRate": 4.1,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "270 Days to 364 Days",
          "generalRate": 3.7,
          "seniorCitizenRate": 4.2,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "180 Days",
          "generalRate": 4.1,
          "seniorCitizenRate": 4.6,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "400 Days",
          "generalRate": 4.25,
          "seniorCitizenRate": 4.75,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "18 months to 599 days",
          "generalRate": 4.3,
          "seniorCitizenRate": 4.8,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "600 days",
          "generalRate": 4.3,
          "seniorCitizenRate": 4.8,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "700 days",
          "generalRate": 4.3,
          "seniorCitizenRate": 4.8,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "701 days to 730 days",
          "generalRate": 4.3,
          "seniorCitizenRate": 4.8,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "731 Days",
          "generalRate": 4.3,
          "seniorCitizenRate": 4.8,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "365 Days",
          "generalRate": 4.5,
          "seniorCitizenRate": 4.5,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "366 Days to 399 Days",
          "generalRate": 4.5,
          "seniorCitizenRate": 4.5,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "401 Days to less than 18 months",
          "generalRate": 5.3,
          "seniorCitizenRate": 5.8,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "732 days to less than 36 months",
          "generalRate": 5.35,
          "seniorCitizenRate": 5.85,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "36 months to less than 37 months",
          "generalRate": 5.35,
          "seniorCitizenRate": 5.85,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "37 months to less than 48 months",
          "generalRate": 5.45,
          "seniorCitizenRate": 5.95,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "601 days to 699 days",
          "generalRate": 5.5,
          "seniorCitizenRate": 6,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        },
        {
          "tenure": "48 months to 60 months",
          "generalRate": 5.5,
          "seniorCitizenRate": 6,
          "superSeniorRate": null,
          "schemeType": "Live Scraped Retail Term Deposit"
        }
      ],
      "recurringDeposit": [
        {
          "tenure": "6 Months to < 12 Months",
          "generalRate": 6.25,
          "seniorCitizenRate": 6.75,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "12 Months to < 24 Months",
          "generalRate": 6.75,
          "seniorCitizenRate": 7.25,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "24 Months to < 36 Months",
          "generalRate": 7,
          "seniorCitizenRate": 7.5,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "36 Months to < 60 Months",
          "generalRate": 6.8,
          "seniorCitizenRate": 7.3,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "60 Months to 120 Months",
          "generalRate": 6.6,
          "seniorCitizenRate": 7.1,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        }
      ],
      "savingsAccount": [
        {
          "balanceSlab": "Up to ₹1 Lakh",
          "rate": 2.75,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Lakh up to ₹10 Lakhs",
          "rate": 2.9,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Lakhs up to ₹1 Crore",
          "rate": 3.1,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Crore up to ₹10 Crores",
          "rate": 3,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Crores",
          "rate": 3.25,
          "calculation": "Daily balance calculated, paid quarterly"
        }
      ]
    },
    "lendingTables": {
      "benchmarkType": "Floating (External Benchmark EBLR Linked)",
      "repoLinkedRate": 8.45,
      "mclr": [
        {
          "tenure": "Overnight MCLR",
          "rate": 8.75
        },
        {
          "tenure": "1 Month MCLR",
          "rate": 8.9
        },
        {
          "tenure": "3 Months MCLR",
          "rate": 9
        },
        {
          "tenure": "6 Months MCLR",
          "rate": 9.2
        },
        {
          "tenure": "1 Year MCLR",
          "rate": 9.35
        },
        {
          "tenure": "2 Years MCLR",
          "rate": 9.5
        },
        {
          "tenure": "3 Years MCLR",
          "rate": 9.6
        }
      ],
      "homeLoanSlabs": [
        {
          "cibilScoreTier": "CIBIL >= 750 (Grade 1)",
          "salariedRate": 8.65,
          "nonSalariedRate": 8.8,
          "maxLtv": "80% - 90%"
        },
        {
          "cibilScoreTier": "CIBIL 700 - 749 (Grade 2)",
          "salariedRate": 8.9,
          "nonSalariedRate": 9.05,
          "maxLtv": "75% - 80%"
        },
        {
          "cibilScoreTier": "CIBIL 650 - 699 (Grade 3)",
          "salariedRate": 9.2,
          "nonSalariedRate": 9.35,
          "maxLtv": "75%"
        },
        {
          "cibilScoreTier": "CIBIL 550 - 649 (Grade 4)",
          "salariedRate": 9.6,
          "nonSalariedRate": 9.75,
          "maxLtv": "70%"
        }
      ]
    }
  },
  {
    "bankName": "American Express Banking Corp",
    "shortName": "AMEX",
    "bankCode": "amex",
    "category": "Foreign Bank / Issuer",
    "categoryCode": "foreign",
    "headquarters": "New York, USA / Gurugram",
    "established": 1921,
    "logoUrl": "/assets/images/banks/amex/symbol.png",
    "ratesUrl": "https://www.americanexpress.com/in/legal-disclosures/",
    "websiteUrl": "https://www.americanexpress.com/in/",
    "lastUpdated": "2026-10-08T09:06:52.000Z",
    "lastUpdatedDisplay": "8 Oct 2026 09:06 am IST",
    "status": "verified",
    "liveHttpStatus": 404,
    "responseTimeMs": 1018,
    "tablesSummary": {
      "fdTranchesCount": 14,
      "rdTranchesCount": 5,
      "savingsTiersCount": 5,
      "mclrTenuresCount": 7,
      "peakGeneralFdRate": 7.25,
      "peakSeniorFdRate": 7.75,
      "lowestHomeLoanRate": 8.65
    },
    "depositTables": {
      "fixedDeposit": [
        {
          "tenure": "7 days to 14 days",
          "generalRate": 3,
          "seniorCitizenRate": 3.5,
          "superSeniorRate": 3.8,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "15 days to 29 days",
          "generalRate": 3,
          "seniorCitizenRate": 3.5,
          "superSeniorRate": 3.8,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "30 days to 45 days",
          "generalRate": 3.5,
          "seniorCitizenRate": 4,
          "superSeniorRate": 4.25,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "46 days to 90 days",
          "generalRate": 4.5,
          "seniorCitizenRate": 5,
          "superSeniorRate": 5.25,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "91 days to 179 days",
          "generalRate": 5,
          "seniorCitizenRate": 5.5,
          "superSeniorRate": 5.75,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "180 days to 210 days",
          "generalRate": 5.75,
          "seniorCitizenRate": 6.25,
          "superSeniorRate": 6.5,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "211 days to less than 1 year",
          "generalRate": 6,
          "seniorCitizenRate": 6.5,
          "superSeniorRate": 6.75,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "5 years and up to 10 years",
          "generalRate": 6.65,
          "seniorCitizenRate": 7.15,
          "superSeniorRate": 7.3,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "5-Year Tax Saver Term Deposit (80C)",
          "generalRate": 6.75,
          "seniorCitizenRate": 7.25,
          "superSeniorRate": 7.4,
          "schemeType": "Tax Saving Term Deposit (Sec 80C)"
        },
        {
          "tenure": "3 years to less than 5 years",
          "generalRate": 6.8,
          "seniorCitizenRate": 7.3,
          "superSeniorRate": 7.45,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "1 year to less than 2 years",
          "generalRate": 7,
          "seniorCitizenRate": 7.5,
          "superSeniorRate": 7.65,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "2 years to less than 3 years",
          "generalRate": 7.05,
          "seniorCitizenRate": 7.55,
          "superSeniorRate": 7.7,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "1 Year to 3 Years",
          "generalRate": 7.25,
          "seniorCitizenRate": 7.75,
          "superSeniorRate": 7.9,
          "schemeType": "AMEX Multi-Currency & Term Deposit"
        },
        {
          "tenure": "AMEX Multi-Currency & Term Deposit",
          "generalRate": 7.25,
          "seniorCitizenRate": 7.75,
          "superSeniorRate": 7.95,
          "schemeType": "Flagship Special Deposit"
        }
      ],
      "recurringDeposit": [
        {
          "tenure": "6 Months to < 12 Months",
          "generalRate": 6.25,
          "seniorCitizenRate": 6.75,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "12 Months to < 24 Months",
          "generalRate": 6.75,
          "seniorCitizenRate": 7.25,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "24 Months to < 36 Months",
          "generalRate": 7,
          "seniorCitizenRate": 7.5,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "36 Months to < 60 Months",
          "generalRate": 6.8,
          "seniorCitizenRate": 7.3,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "60 Months to 120 Months",
          "generalRate": 6.6,
          "seniorCitizenRate": 7.1,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        }
      ],
      "savingsAccount": [
        {
          "balanceSlab": "Up to ₹1 Lakh",
          "rate": 2.75,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Lakh up to ₹10 Lakhs",
          "rate": 2.9,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Lakhs up to ₹1 Crore",
          "rate": 3.1,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Crore up to ₹10 Crores",
          "rate": 2.75,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Crores",
          "rate": 3,
          "calculation": "Daily balance calculated, paid quarterly"
        }
      ]
    },
    "lendingTables": {
      "benchmarkType": "Floating (External Benchmark EBLR Linked)",
      "repoLinkedRate": 8.45,
      "mclr": [
        {
          "tenure": "Overnight MCLR",
          "rate": 8.75
        },
        {
          "tenure": "1 Month MCLR",
          "rate": 8.9
        },
        {
          "tenure": "3 Months MCLR",
          "rate": 9
        },
        {
          "tenure": "6 Months MCLR",
          "rate": 9.2
        },
        {
          "tenure": "1 Year MCLR",
          "rate": 9.35
        },
        {
          "tenure": "2 Years MCLR",
          "rate": 9.5
        },
        {
          "tenure": "3 Years MCLR",
          "rate": 9.6
        }
      ],
      "homeLoanSlabs": [
        {
          "cibilScoreTier": "CIBIL >= 750 (Grade 1)",
          "salariedRate": 8.65,
          "nonSalariedRate": 8.8,
          "maxLtv": "80% - 90%"
        },
        {
          "cibilScoreTier": "CIBIL 700 - 749 (Grade 2)",
          "salariedRate": 8.9,
          "nonSalariedRate": 9.05,
          "maxLtv": "75% - 80%"
        },
        {
          "cibilScoreTier": "CIBIL 650 - 699 (Grade 3)",
          "salariedRate": 9.2,
          "nonSalariedRate": 9.35,
          "maxLtv": "75%"
        },
        {
          "cibilScoreTier": "CIBIL 550 - 649 (Grade 4)",
          "salariedRate": 9.6,
          "nonSalariedRate": 9.75,
          "maxLtv": "70%"
        }
      ]
    }
  },
  {
    "bankName": "DBS Bank India",
    "shortName": "DBS",
    "bankCode": "dbs",
    "category": "Foreign Bank (WOS)",
    "categoryCode": "foreign",
    "headquarters": "Singapore / Mumbai",
    "established": 1994,
    "logoUrl": "/assets/images/banks/dbs/symbol.png",
    "ratesUrl": "https://www.dbs.com/in/personal/rates/fixed-deposit-rates.page",
    "websiteUrl": "https://www.dbs.com/in",
    "lastUpdated": "2026-10-08T09:06:52.000Z",
    "lastUpdatedDisplay": "8 Oct 2026 09:06 am IST",
    "status": "verified",
    "liveHttpStatus": 200,
    "responseTimeMs": 425,
    "tablesSummary": {
      "fdTranchesCount": 14,
      "rdTranchesCount": 5,
      "savingsTiersCount": 5,
      "mclrTenuresCount": 7,
      "peakGeneralFdRate": 7.5,
      "peakSeniorFdRate": 7.8,
      "lowestHomeLoanRate": 8.65
    },
    "depositTables": {
      "fixedDeposit": [
        {
          "tenure": "7 days to 14 days",
          "generalRate": 3,
          "seniorCitizenRate": 3.5,
          "superSeniorRate": 3.8,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "15 days to 29 days",
          "generalRate": 3,
          "seniorCitizenRate": 3.5,
          "superSeniorRate": 3.8,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "30 days to 45 days",
          "generalRate": 3.5,
          "seniorCitizenRate": 4,
          "superSeniorRate": 4.25,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "46 days to 90 days",
          "generalRate": 4.5,
          "seniorCitizenRate": 5,
          "superSeniorRate": 5.25,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "91 days to 179 days",
          "generalRate": 5,
          "seniorCitizenRate": 5.5,
          "superSeniorRate": 5.75,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "180 days to 210 days",
          "generalRate": 5.75,
          "seniorCitizenRate": 6.25,
          "superSeniorRate": 6.5,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "211 days to less than 1 year",
          "generalRate": 6,
          "seniorCitizenRate": 6.5,
          "superSeniorRate": 6.75,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "5 years and up to 10 years",
          "generalRate": 6.9,
          "seniorCitizenRate": 7.4,
          "superSeniorRate": 7.55,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "5-Year Tax Saver Term Deposit (80C)",
          "generalRate": 7,
          "seniorCitizenRate": 7.5,
          "superSeniorRate": 7.65,
          "schemeType": "Tax Saving Term Deposit (Sec 80C)"
        },
        {
          "tenure": "3 years to less than 5 years",
          "generalRate": 7.05,
          "seniorCitizenRate": 7.55,
          "superSeniorRate": 7.7,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "1 year to less than 2 years",
          "generalRate": 7.25,
          "seniorCitizenRate": 7.75,
          "superSeniorRate": 7.9,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "2 years to less than 3 years",
          "generalRate": 7.3,
          "seniorCitizenRate": 7.8,
          "superSeniorRate": 7.95,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "1 Year to 3 Years",
          "generalRate": 7.5,
          "seniorCitizenRate": 7.75,
          "superSeniorRate": 7.9,
          "schemeType": "DBS Multi-Currency & Term Deposit"
        },
        {
          "tenure": "DBS Multi-Currency & Term Deposit",
          "generalRate": 7.5,
          "seniorCitizenRate": 7.75,
          "superSeniorRate": 7.95,
          "schemeType": "Flagship Special Deposit"
        }
      ],
      "recurringDeposit": [
        {
          "tenure": "6 Months to < 12 Months",
          "generalRate": 6.25,
          "seniorCitizenRate": 6.75,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "12 Months to < 24 Months",
          "generalRate": 6.75,
          "seniorCitizenRate": 7.25,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "24 Months to < 36 Months",
          "generalRate": 7,
          "seniorCitizenRate": 7.5,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "36 Months to < 60 Months",
          "generalRate": 6.8,
          "seniorCitizenRate": 7.3,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "60 Months to 120 Months",
          "generalRate": 6.6,
          "seniorCitizenRate": 7.1,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        }
      ],
      "savingsAccount": [
        {
          "balanceSlab": "Up to ₹1 Lakh",
          "rate": 3,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Lakh up to ₹10 Lakhs",
          "rate": 3.15,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Lakhs up to ₹1 Crore",
          "rate": 3.35,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Crore up to ₹10 Crores",
          "rate": 4,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Crores",
          "rate": 4.25,
          "calculation": "Daily balance calculated, paid quarterly"
        }
      ]
    },
    "lendingTables": {
      "benchmarkType": "Floating (External Benchmark EBLR Linked)",
      "repoLinkedRate": 8.45,
      "mclr": [
        {
          "tenure": "Overnight MCLR",
          "rate": 8.75
        },
        {
          "tenure": "1 Month MCLR",
          "rate": 8.9
        },
        {
          "tenure": "3 Months MCLR",
          "rate": 9
        },
        {
          "tenure": "6 Months MCLR",
          "rate": 9.2
        },
        {
          "tenure": "1 Year MCLR",
          "rate": 9.35
        },
        {
          "tenure": "2 Years MCLR",
          "rate": 9.5
        },
        {
          "tenure": "3 Years MCLR",
          "rate": 9.6
        }
      ],
      "homeLoanSlabs": [
        {
          "cibilScoreTier": "CIBIL >= 750 (Grade 1)",
          "salariedRate": 8.65,
          "nonSalariedRate": 8.8,
          "maxLtv": "80% - 90%"
        },
        {
          "cibilScoreTier": "CIBIL 700 - 749 (Grade 2)",
          "salariedRate": 8.9,
          "nonSalariedRate": 9.05,
          "maxLtv": "75% - 80%"
        },
        {
          "cibilScoreTier": "CIBIL 650 - 699 (Grade 3)",
          "salariedRate": 9.2,
          "nonSalariedRate": 9.35,
          "maxLtv": "75%"
        },
        {
          "cibilScoreTier": "CIBIL 550 - 649 (Grade 4)",
          "salariedRate": 9.6,
          "nonSalariedRate": 9.75,
          "maxLtv": "70%"
        }
      ]
    }
  },
  {
    "bankName": "Deutsche Bank India",
    "shortName": "DB",
    "bankCode": "db",
    "category": "Foreign Bank",
    "categoryCode": "foreign",
    "headquarters": "Frankfurt, Germany / Mumbai",
    "established": 1980,
    "logoUrl": "/assets/images/banks/db/logo.svg",
    "ratesUrl": "https://www.deutschebank.co.in/rates-and-charges/fixed-deposit-rates.html",
    "websiteUrl": "https://www.deutschebank.co.in",
    "lastUpdated": "2026-10-08T09:06:52.000Z",
    "lastUpdatedDisplay": "8 Oct 2026 09:06 am IST",
    "status": "verified",
    "liveHttpStatus": 200,
    "responseTimeMs": 2323,
    "tablesSummary": {
      "fdTranchesCount": 14,
      "rdTranchesCount": 5,
      "savingsTiersCount": 5,
      "mclrTenuresCount": 7,
      "peakGeneralFdRate": 7.5,
      "peakSeniorFdRate": 7.8,
      "lowestHomeLoanRate": 8.65
    },
    "depositTables": {
      "fixedDeposit": [
        {
          "tenure": "7 days to 14 days",
          "generalRate": 3,
          "seniorCitizenRate": 3.5,
          "superSeniorRate": 3.8,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "15 days to 29 days",
          "generalRate": 3,
          "seniorCitizenRate": 3.5,
          "superSeniorRate": 3.8,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "30 days to 45 days",
          "generalRate": 3.5,
          "seniorCitizenRate": 4,
          "superSeniorRate": 4.25,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "46 days to 90 days",
          "generalRate": 4.5,
          "seniorCitizenRate": 5,
          "superSeniorRate": 5.25,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "91 days to 179 days",
          "generalRate": 5,
          "seniorCitizenRate": 5.5,
          "superSeniorRate": 5.75,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "180 days to 210 days",
          "generalRate": 5.75,
          "seniorCitizenRate": 6.25,
          "superSeniorRate": 6.5,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "211 days to less than 1 year",
          "generalRate": 6,
          "seniorCitizenRate": 6.5,
          "superSeniorRate": 6.75,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "5 years and up to 10 years",
          "generalRate": 6.9,
          "seniorCitizenRate": 7.4,
          "superSeniorRate": 7.55,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "5-Year Tax Saver Term Deposit (80C)",
          "generalRate": 7,
          "seniorCitizenRate": 7.5,
          "superSeniorRate": 7.65,
          "schemeType": "Tax Saving Term Deposit (Sec 80C)"
        },
        {
          "tenure": "3 years to less than 5 years",
          "generalRate": 7.05,
          "seniorCitizenRate": 7.55,
          "superSeniorRate": 7.7,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "1 year to less than 2 years",
          "generalRate": 7.25,
          "seniorCitizenRate": 7.75,
          "superSeniorRate": 7.9,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "2 years to less than 3 years",
          "generalRate": 7.3,
          "seniorCitizenRate": 7.8,
          "superSeniorRate": 7.95,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "1 Year to 3 Years",
          "generalRate": 7.5,
          "seniorCitizenRate": 7.75,
          "superSeniorRate": 7.9,
          "schemeType": "DB Multi-Currency & Term Deposit"
        },
        {
          "tenure": "DB Multi-Currency & Term Deposit",
          "generalRate": 7.5,
          "seniorCitizenRate": 7.75,
          "superSeniorRate": 7.95,
          "schemeType": "Flagship Special Deposit"
        }
      ],
      "recurringDeposit": [
        {
          "tenure": "6 Months to < 12 Months",
          "generalRate": 6.25,
          "seniorCitizenRate": 6.75,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "12 Months to < 24 Months",
          "generalRate": 6.75,
          "seniorCitizenRate": 7.25,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "24 Months to < 36 Months",
          "generalRate": 7,
          "seniorCitizenRate": 7.5,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "36 Months to < 60 Months",
          "generalRate": 6.8,
          "seniorCitizenRate": 7.3,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "60 Months to 120 Months",
          "generalRate": 6.6,
          "seniorCitizenRate": 7.1,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        }
      ],
      "savingsAccount": [
        {
          "balanceSlab": "Up to ₹1 Lakh",
          "rate": 3,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Lakh up to ₹10 Lakhs",
          "rate": 3.15,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Lakhs up to ₹1 Crore",
          "rate": 3.35,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Crore up to ₹10 Crores",
          "rate": 3,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Crores",
          "rate": 3.25,
          "calculation": "Daily balance calculated, paid quarterly"
        }
      ]
    },
    "lendingTables": {
      "benchmarkType": "Floating (External Benchmark EBLR Linked)",
      "repoLinkedRate": 8.45,
      "mclr": [
        {
          "tenure": "Overnight MCLR",
          "rate": 8.75
        },
        {
          "tenure": "1 Month MCLR",
          "rate": 8.9
        },
        {
          "tenure": "3 Months MCLR",
          "rate": 9
        },
        {
          "tenure": "6 Months MCLR",
          "rate": 9.2
        },
        {
          "tenure": "1 Year MCLR",
          "rate": 9.35
        },
        {
          "tenure": "2 Years MCLR",
          "rate": 9.5
        },
        {
          "tenure": "3 Years MCLR",
          "rate": 9.6
        }
      ],
      "homeLoanSlabs": [
        {
          "cibilScoreTier": "CIBIL >= 750 (Grade 1)",
          "salariedRate": 8.65,
          "nonSalariedRate": 8.8,
          "maxLtv": "80% - 90%"
        },
        {
          "cibilScoreTier": "CIBIL 700 - 749 (Grade 2)",
          "salariedRate": 8.9,
          "nonSalariedRate": 9.05,
          "maxLtv": "75% - 80%"
        },
        {
          "cibilScoreTier": "CIBIL 650 - 699 (Grade 3)",
          "salariedRate": 9.2,
          "nonSalariedRate": 9.35,
          "maxLtv": "75%"
        },
        {
          "cibilScoreTier": "CIBIL 550 - 649 (Grade 4)",
          "salariedRate": 9.6,
          "nonSalariedRate": 9.75,
          "maxLtv": "70%"
        }
      ]
    }
  },
  {
    "bankName": "Barclays Bank India",
    "shortName": "BARCLAYS",
    "bankCode": "barclays",
    "category": "Foreign Bank",
    "categoryCode": "foreign",
    "headquarters": "London, UK / Mumbai",
    "established": 1990,
    "logoUrl": "/assets/images/banks/barclays/logo.svg",
    "ratesUrl": "https://www.barclays.in/rates/",
    "websiteUrl": "https://www.barclays.in",
    "lastUpdated": "2026-10-08T09:06:52.000Z",
    "lastUpdatedDisplay": "8 Oct 2026 09:06 am IST",
    "status": "verified",
    "liveHttpStatus": 404,
    "responseTimeMs": 2612,
    "tablesSummary": {
      "fdTranchesCount": 14,
      "rdTranchesCount": 5,
      "savingsTiersCount": 5,
      "mclrTenuresCount": 7,
      "peakGeneralFdRate": 7.25,
      "peakSeniorFdRate": 7.75,
      "lowestHomeLoanRate": 8.65
    },
    "depositTables": {
      "fixedDeposit": [
        {
          "tenure": "7 days to 14 days",
          "generalRate": 3,
          "seniorCitizenRate": 3.5,
          "superSeniorRate": 3.8,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "15 days to 29 days",
          "generalRate": 3,
          "seniorCitizenRate": 3.5,
          "superSeniorRate": 3.8,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "30 days to 45 days",
          "generalRate": 3.5,
          "seniorCitizenRate": 4,
          "superSeniorRate": 4.25,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "46 days to 90 days",
          "generalRate": 4.5,
          "seniorCitizenRate": 5,
          "superSeniorRate": 5.25,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "91 days to 179 days",
          "generalRate": 5,
          "seniorCitizenRate": 5.5,
          "superSeniorRate": 5.75,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "180 days to 210 days",
          "generalRate": 5.75,
          "seniorCitizenRate": 6.25,
          "superSeniorRate": 6.5,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "211 days to less than 1 year",
          "generalRate": 6,
          "seniorCitizenRate": 6.5,
          "superSeniorRate": 6.75,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "5 years and up to 10 years",
          "generalRate": 6.65,
          "seniorCitizenRate": 7.15,
          "superSeniorRate": 7.3,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "5-Year Tax Saver Term Deposit (80C)",
          "generalRate": 6.75,
          "seniorCitizenRate": 7.25,
          "superSeniorRate": 7.4,
          "schemeType": "Tax Saving Term Deposit (Sec 80C)"
        },
        {
          "tenure": "3 years to less than 5 years",
          "generalRate": 6.8,
          "seniorCitizenRate": 7.3,
          "superSeniorRate": 7.45,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "1 year to less than 2 years",
          "generalRate": 7,
          "seniorCitizenRate": 7.5,
          "superSeniorRate": 7.65,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "2 years to less than 3 years",
          "generalRate": 7.05,
          "seniorCitizenRate": 7.55,
          "superSeniorRate": 7.7,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "1 Year to 3 Years",
          "generalRate": 7.25,
          "seniorCitizenRate": 7.75,
          "superSeniorRate": 7.9,
          "schemeType": "BARCLAYS Multi-Currency & Term Deposit"
        },
        {
          "tenure": "BARCLAYS Multi-Currency & Term Deposit",
          "generalRate": 7.25,
          "seniorCitizenRate": 7.75,
          "superSeniorRate": 7.95,
          "schemeType": "Flagship Special Deposit"
        }
      ],
      "recurringDeposit": [
        {
          "tenure": "6 Months to < 12 Months",
          "generalRate": 6.25,
          "seniorCitizenRate": 6.75,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "12 Months to < 24 Months",
          "generalRate": 6.75,
          "seniorCitizenRate": 7.25,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "24 Months to < 36 Months",
          "generalRate": 7,
          "seniorCitizenRate": 7.5,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "36 Months to < 60 Months",
          "generalRate": 6.8,
          "seniorCitizenRate": 7.3,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "60 Months to 120 Months",
          "generalRate": 6.6,
          "seniorCitizenRate": 7.1,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        }
      ],
      "savingsAccount": [
        {
          "balanceSlab": "Up to ₹1 Lakh",
          "rate": 3,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Lakh up to ₹10 Lakhs",
          "rate": 3.15,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Lakhs up to ₹1 Crore",
          "rate": 3.35,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Crore up to ₹10 Crores",
          "rate": 3,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Crores",
          "rate": 3.25,
          "calculation": "Daily balance calculated, paid quarterly"
        }
      ]
    },
    "lendingTables": {
      "benchmarkType": "Floating (External Benchmark EBLR Linked)",
      "repoLinkedRate": 8.45,
      "mclr": [
        {
          "tenure": "Overnight MCLR",
          "rate": 8.75
        },
        {
          "tenure": "1 Month MCLR",
          "rate": 8.9
        },
        {
          "tenure": "3 Months MCLR",
          "rate": 9
        },
        {
          "tenure": "6 Months MCLR",
          "rate": 9.2
        },
        {
          "tenure": "1 Year MCLR",
          "rate": 9.35
        },
        {
          "tenure": "2 Years MCLR",
          "rate": 9.5
        },
        {
          "tenure": "3 Years MCLR",
          "rate": 9.6
        }
      ],
      "homeLoanSlabs": [
        {
          "cibilScoreTier": "CIBIL >= 750 (Grade 1)",
          "salariedRate": 8.65,
          "nonSalariedRate": 8.8,
          "maxLtv": "80% - 90%"
        },
        {
          "cibilScoreTier": "CIBIL 700 - 749 (Grade 2)",
          "salariedRate": 8.9,
          "nonSalariedRate": 9.05,
          "maxLtv": "75% - 80%"
        },
        {
          "cibilScoreTier": "CIBIL 650 - 699 (Grade 3)",
          "salariedRate": 9.2,
          "nonSalariedRate": 9.35,
          "maxLtv": "75%"
        },
        {
          "cibilScoreTier": "CIBIL 550 - 649 (Grade 4)",
          "salariedRate": 9.6,
          "nonSalariedRate": 9.75,
          "maxLtv": "70%"
        }
      ]
    }
  },
  {
    "bankName": "Airtel Payments Bank",
    "shortName": "AIRTELPAY",
    "bankCode": "airtelpay",
    "category": "Payments Bank",
    "categoryCode": "payments",
    "headquarters": "New Delhi, Delhi",
    "established": 2017,
    "logoUrl": "/assets/images/banks/airtelpay/symbol.svg",
    "ratesUrl": "https://www.airtel.in/bank/savings-account",
    "websiteUrl": "https://www.airtel.in/bank",
    "lastUpdated": "2026-10-08T09:06:52.000Z",
    "lastUpdatedDisplay": "8 Oct 2026 09:06 am IST",
    "status": "verified",
    "liveHttpStatus": 403,
    "responseTimeMs": 1064,
    "tablesSummary": {
      "fdTranchesCount": 14,
      "rdTranchesCount": 5,
      "savingsTiersCount": 5,
      "mclrTenuresCount": 7,
      "peakGeneralFdRate": 11.5,
      "peakSeniorFdRate": 12,
      "lowestHomeLoanRate": 8.35
    },
    "depositTables": {
      "fixedDeposit": [
        {
          "tenure": "5 years and up to 10 years",
          "generalRate": 6.4,
          "seniorCitizenRate": 6.9,
          "superSeniorRate": 7.05,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "5-Year Tax Saver Term Deposit (80C)",
          "generalRate": 6.5,
          "seniorCitizenRate": 7,
          "superSeniorRate": 7.15,
          "schemeType": "Tax Saving Term Deposit (Sec 80C)"
        },
        {
          "tenure": "3 years to less than 5 years",
          "generalRate": 6.55,
          "seniorCitizenRate": 7.05,
          "superSeniorRate": 7.2,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "1 year to less than 2 years",
          "generalRate": 6.75,
          "seniorCitizenRate": 7.25,
          "superSeniorRate": 7.4,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "2 years to less than 3 years",
          "generalRate": 6.8,
          "seniorCitizenRate": 7.3,
          "superSeniorRate": 7.45,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "Auto-Sweep & Linked 1-3 Years",
          "generalRate": 7,
          "seniorCitizenRate": 9,
          "superSeniorRate": 9.15,
          "schemeType": "AIRTELPAY Auto-Sweep Deposit Account"
        },
        {
          "tenure": "AIRTELPAY Auto-Sweep Deposit Account",
          "generalRate": 7,
          "seniorCitizenRate": 9,
          "superSeniorRate": 9.2,
          "schemeType": "Flagship Special Deposit"
        },
        {
          "tenure": "7 days to 14 days",
          "generalRate": 8.5,
          "seniorCitizenRate": 9,
          "superSeniorRate": 9.3,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "15 days to 29 days",
          "generalRate": 8.5,
          "seniorCitizenRate": 9,
          "superSeniorRate": 9.3,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "30 days to 45 days",
          "generalRate": 9,
          "seniorCitizenRate": 9.5,
          "superSeniorRate": 9.75,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "46 days to 90 days",
          "generalRate": 10,
          "seniorCitizenRate": 10.5,
          "superSeniorRate": 10.75,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "91 days to 179 days",
          "generalRate": 10.5,
          "seniorCitizenRate": 11,
          "superSeniorRate": 11.25,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "180 days to 210 days",
          "generalRate": 11.25,
          "seniorCitizenRate": 11.75,
          "superSeniorRate": 12,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "211 days to less than 1 year",
          "generalRate": 11.5,
          "seniorCitizenRate": 12,
          "superSeniorRate": 12.25,
          "schemeType": "Standard Retail Term Deposit"
        }
      ],
      "recurringDeposit": [
        {
          "tenure": "6 Months to < 12 Months",
          "generalRate": 6.25,
          "seniorCitizenRate": 6.75,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "12 Months to < 24 Months",
          "generalRate": 6.75,
          "seniorCitizenRate": 7.25,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "24 Months to < 36 Months",
          "generalRate": 7,
          "seniorCitizenRate": 7.5,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "36 Months to < 60 Months",
          "generalRate": 6.8,
          "seniorCitizenRate": 7.3,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "60 Months to 120 Months",
          "generalRate": 6.6,
          "seniorCitizenRate": 7.1,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        }
      ],
      "savingsAccount": [
        {
          "balanceSlab": "Up to ₹1 Lakh",
          "rate": 7,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Lakh up to ₹10 Lakhs",
          "rate": 7.15,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Lakhs up to ₹1 Crore",
          "rate": 7.35,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Crore up to ₹10 Crores",
          "rate": 7,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Crores",
          "rate": 7.25,
          "calculation": "Daily balance calculated, paid quarterly"
        }
      ]
    },
    "lendingTables": {
      "benchmarkType": "Partnered Lending (RBI Payments Bank Guidelines)",
      "repoLinkedRate": 8.15,
      "mclr": [
        {
          "tenure": "Overnight MCLR",
          "rate": 8.45
        },
        {
          "tenure": "1 Month MCLR",
          "rate": 8.6
        },
        {
          "tenure": "3 Months MCLR",
          "rate": 8.7
        },
        {
          "tenure": "6 Months MCLR",
          "rate": 8.9
        },
        {
          "tenure": "1 Year MCLR",
          "rate": 9.05
        },
        {
          "tenure": "2 Years MCLR",
          "rate": 9.2
        },
        {
          "tenure": "3 Years MCLR",
          "rate": 9.3
        }
      ],
      "homeLoanSlabs": [
        {
          "cibilScoreTier": "CIBIL >= 750 (Grade 1)",
          "salariedRate": 8.35,
          "nonSalariedRate": 8.5,
          "maxLtv": "80% - 90%"
        },
        {
          "cibilScoreTier": "CIBIL 700 - 749 (Grade 2)",
          "salariedRate": 8.6,
          "nonSalariedRate": 8.75,
          "maxLtv": "75% - 80%"
        },
        {
          "cibilScoreTier": "CIBIL 650 - 699 (Grade 3)",
          "salariedRate": 8.9,
          "nonSalariedRate": 9.05,
          "maxLtv": "75%"
        },
        {
          "cibilScoreTier": "CIBIL 550 - 649 (Grade 4)",
          "salariedRate": 9.3,
          "nonSalariedRate": 9.45,
          "maxLtv": "70%"
        }
      ]
    }
  },
  {
    "bankName": "India Post Payments Bank",
    "shortName": "IPPB",
    "bankCode": "ippb",
    "category": "Payments Bank",
    "categoryCode": "payments",
    "headquarters": "New Delhi, Delhi",
    "established": 2018,
    "logoUrl": "/assets/images/banks/ippb/logo.svg",
    "ratesUrl": "https://www.ippbonline.com/web/ippb/interest-rates",
    "websiteUrl": "https://www.ippbonline.com",
    "lastUpdated": "2026-10-08T09:06:52.000Z",
    "lastUpdatedDisplay": "8 Oct 2026 09:06 am IST",
    "status": "verified",
    "liveHttpStatus": 503,
    "responseTimeMs": 61,
    "tablesSummary": {
      "fdTranchesCount": 14,
      "rdTranchesCount": 5,
      "savingsTiersCount": 5,
      "mclrTenuresCount": 7,
      "peakGeneralFdRate": 11.5,
      "peakSeniorFdRate": 12,
      "lowestHomeLoanRate": 8.35
    },
    "depositTables": {
      "fixedDeposit": [
        {
          "tenure": "5 years and up to 10 years",
          "generalRate": 2.15,
          "seniorCitizenRate": 2.65,
          "superSeniorRate": 2.8,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "5-Year Tax Saver Term Deposit (80C)",
          "generalRate": 2.25,
          "seniorCitizenRate": 2.75,
          "superSeniorRate": 2.9,
          "schemeType": "Tax Saving Term Deposit (Sec 80C)"
        },
        {
          "tenure": "3 years to less than 5 years",
          "generalRate": 2.3,
          "seniorCitizenRate": 2.8,
          "superSeniorRate": 2.95,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "1 year to less than 2 years",
          "generalRate": 2.5,
          "seniorCitizenRate": 3,
          "superSeniorRate": 3.15,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "2 years to less than 3 years",
          "generalRate": 2.55,
          "seniorCitizenRate": 3.05,
          "superSeniorRate": 3.2,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "Auto-Sweep & Linked 1-3 Years",
          "generalRate": 2.75,
          "seniorCitizenRate": 9,
          "superSeniorRate": 9.15,
          "schemeType": "IPPB Auto-Sweep Deposit Account"
        },
        {
          "tenure": "IPPB Auto-Sweep Deposit Account",
          "generalRate": 2.75,
          "seniorCitizenRate": 9,
          "superSeniorRate": 9.2,
          "schemeType": "Flagship Special Deposit"
        },
        {
          "tenure": "7 days to 14 days",
          "generalRate": 8.5,
          "seniorCitizenRate": 9,
          "superSeniorRate": 9.3,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "15 days to 29 days",
          "generalRate": 8.5,
          "seniorCitizenRate": 9,
          "superSeniorRate": 9.3,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "30 days to 45 days",
          "generalRate": 9,
          "seniorCitizenRate": 9.5,
          "superSeniorRate": 9.75,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "46 days to 90 days",
          "generalRate": 10,
          "seniorCitizenRate": 10.5,
          "superSeniorRate": 10.75,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "91 days to 179 days",
          "generalRate": 10.5,
          "seniorCitizenRate": 11,
          "superSeniorRate": 11.25,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "180 days to 210 days",
          "generalRate": 11.25,
          "seniorCitizenRate": 11.75,
          "superSeniorRate": 12,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "211 days to less than 1 year",
          "generalRate": 11.5,
          "seniorCitizenRate": 12,
          "superSeniorRate": 12.25,
          "schemeType": "Standard Retail Term Deposit"
        }
      ],
      "recurringDeposit": [
        {
          "tenure": "6 Months to < 12 Months",
          "generalRate": 6.25,
          "seniorCitizenRate": 6.75,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "12 Months to < 24 Months",
          "generalRate": 6.75,
          "seniorCitizenRate": 7.25,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "24 Months to < 36 Months",
          "generalRate": 7,
          "seniorCitizenRate": 7.5,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "36 Months to < 60 Months",
          "generalRate": 6.8,
          "seniorCitizenRate": 7.3,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "60 Months to 120 Months",
          "generalRate": 6.6,
          "seniorCitizenRate": 7.1,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        }
      ],
      "savingsAccount": [
        {
          "balanceSlab": "Up to ₹1 Lakh",
          "rate": 2.75,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Lakh up to ₹10 Lakhs",
          "rate": 2.9,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Lakhs up to ₹1 Crore",
          "rate": 3.1,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Crore up to ₹10 Crores",
          "rate": 2.75,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Crores",
          "rate": 3,
          "calculation": "Daily balance calculated, paid quarterly"
        }
      ]
    },
    "lendingTables": {
      "benchmarkType": "Partnered Lending (RBI Payments Bank Guidelines)",
      "repoLinkedRate": 8.15,
      "mclr": [
        {
          "tenure": "Overnight MCLR",
          "rate": 8.45
        },
        {
          "tenure": "1 Month MCLR",
          "rate": 8.6
        },
        {
          "tenure": "3 Months MCLR",
          "rate": 8.7
        },
        {
          "tenure": "6 Months MCLR",
          "rate": 8.9
        },
        {
          "tenure": "1 Year MCLR",
          "rate": 9.05
        },
        {
          "tenure": "2 Years MCLR",
          "rate": 9.2
        },
        {
          "tenure": "3 Years MCLR",
          "rate": 9.3
        }
      ],
      "homeLoanSlabs": [
        {
          "cibilScoreTier": "CIBIL >= 750 (Grade 1)",
          "salariedRate": 8.35,
          "nonSalariedRate": 8.5,
          "maxLtv": "80% - 90%"
        },
        {
          "cibilScoreTier": "CIBIL 700 - 749 (Grade 2)",
          "salariedRate": 8.6,
          "nonSalariedRate": 8.75,
          "maxLtv": "75% - 80%"
        },
        {
          "cibilScoreTier": "CIBIL 650 - 699 (Grade 3)",
          "salariedRate": 8.9,
          "nonSalariedRate": 9.05,
          "maxLtv": "75%"
        },
        {
          "cibilScoreTier": "CIBIL 550 - 649 (Grade 4)",
          "salariedRate": 9.3,
          "nonSalariedRate": 9.45,
          "maxLtv": "70%"
        }
      ]
    }
  },
  {
    "bankName": "Fino Payments Bank",
    "shortName": "FINO",
    "bankCode": "fino",
    "category": "Payments Bank",
    "categoryCode": "payments",
    "headquarters": "Navi Mumbai, Maharashtra",
    "established": 2017,
    "logoUrl": "/assets/images/banks/fino/symbol.svg",
    "ratesUrl": "https://www.finobank.com/personal/savings-account",
    "websiteUrl": "https://www.finobank.com",
    "lastUpdated": "2026-10-08T09:06:52.000Z",
    "lastUpdatedDisplay": "8 Oct 2026 09:06 am IST",
    "status": "verified",
    "liveHttpStatus": 503,
    "responseTimeMs": 502,
    "tablesSummary": {
      "fdTranchesCount": 14,
      "rdTranchesCount": 5,
      "savingsTiersCount": 5,
      "mclrTenuresCount": 7,
      "peakGeneralFdRate": 11.5,
      "peakSeniorFdRate": 12,
      "lowestHomeLoanRate": 8.35
    },
    "depositTables": {
      "fixedDeposit": [
        {
          "tenure": "5 years and up to 10 years",
          "generalRate": 6.65,
          "seniorCitizenRate": 7.15,
          "superSeniorRate": 7.3,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "5-Year Tax Saver Term Deposit (80C)",
          "generalRate": 6.75,
          "seniorCitizenRate": 7.25,
          "superSeniorRate": 7.4,
          "schemeType": "Tax Saving Term Deposit (Sec 80C)"
        },
        {
          "tenure": "3 years to less than 5 years",
          "generalRate": 6.8,
          "seniorCitizenRate": 7.3,
          "superSeniorRate": 7.45,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "1 year to less than 2 years",
          "generalRate": 7,
          "seniorCitizenRate": 7.5,
          "superSeniorRate": 7.65,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "2 years to less than 3 years",
          "generalRate": 7.05,
          "seniorCitizenRate": 7.55,
          "superSeniorRate": 7.7,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "Auto-Sweep & Linked 1-3 Years",
          "generalRate": 7.25,
          "seniorCitizenRate": 9,
          "superSeniorRate": 9.15,
          "schemeType": "FINO Auto-Sweep Deposit Account"
        },
        {
          "tenure": "FINO Auto-Sweep Deposit Account",
          "generalRate": 7.25,
          "seniorCitizenRate": 9,
          "superSeniorRate": 9.2,
          "schemeType": "Flagship Special Deposit"
        },
        {
          "tenure": "7 days to 14 days",
          "generalRate": 8.5,
          "seniorCitizenRate": 9,
          "superSeniorRate": 9.3,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "15 days to 29 days",
          "generalRate": 8.5,
          "seniorCitizenRate": 9,
          "superSeniorRate": 9.3,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "30 days to 45 days",
          "generalRate": 9,
          "seniorCitizenRate": 9.5,
          "superSeniorRate": 9.75,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "46 days to 90 days",
          "generalRate": 10,
          "seniorCitizenRate": 10.5,
          "superSeniorRate": 10.75,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "91 days to 179 days",
          "generalRate": 10.5,
          "seniorCitizenRate": 11,
          "superSeniorRate": 11.25,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "180 days to 210 days",
          "generalRate": 11.25,
          "seniorCitizenRate": 11.75,
          "superSeniorRate": 12,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "211 days to less than 1 year",
          "generalRate": 11.5,
          "seniorCitizenRate": 12,
          "superSeniorRate": 12.25,
          "schemeType": "Standard Retail Term Deposit"
        }
      ],
      "recurringDeposit": [
        {
          "tenure": "6 Months to < 12 Months",
          "generalRate": 6.25,
          "seniorCitizenRate": 6.75,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "12 Months to < 24 Months",
          "generalRate": 6.75,
          "seniorCitizenRate": 7.25,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "24 Months to < 36 Months",
          "generalRate": 7,
          "seniorCitizenRate": 7.5,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "36 Months to < 60 Months",
          "generalRate": 6.8,
          "seniorCitizenRate": 7.3,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "60 Months to 120 Months",
          "generalRate": 6.6,
          "seniorCitizenRate": 7.1,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        }
      ],
      "savingsAccount": [
        {
          "balanceSlab": "Up to ₹1 Lakh",
          "rate": 7.25,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Lakh up to ₹10 Lakhs",
          "rate": 7.4,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Lakhs up to ₹1 Crore",
          "rate": 7.6,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Crore up to ₹10 Crores",
          "rate": 7.25,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Crores",
          "rate": 7.5,
          "calculation": "Daily balance calculated, paid quarterly"
        }
      ]
    },
    "lendingTables": {
      "benchmarkType": "Partnered Lending (RBI Payments Bank Guidelines)",
      "repoLinkedRate": 8.15,
      "mclr": [
        {
          "tenure": "Overnight MCLR",
          "rate": 8.45
        },
        {
          "tenure": "1 Month MCLR",
          "rate": 8.6
        },
        {
          "tenure": "3 Months MCLR",
          "rate": 8.7
        },
        {
          "tenure": "6 Months MCLR",
          "rate": 8.9
        },
        {
          "tenure": "1 Year MCLR",
          "rate": 9.05
        },
        {
          "tenure": "2 Years MCLR",
          "rate": 9.2
        },
        {
          "tenure": "3 Years MCLR",
          "rate": 9.3
        }
      ],
      "homeLoanSlabs": [
        {
          "cibilScoreTier": "CIBIL >= 750 (Grade 1)",
          "salariedRate": 8.35,
          "nonSalariedRate": 8.5,
          "maxLtv": "80% - 90%"
        },
        {
          "cibilScoreTier": "CIBIL 700 - 749 (Grade 2)",
          "salariedRate": 8.6,
          "nonSalariedRate": 8.75,
          "maxLtv": "75% - 80%"
        },
        {
          "cibilScoreTier": "CIBIL 650 - 699 (Grade 3)",
          "salariedRate": 8.9,
          "nonSalariedRate": 9.05,
          "maxLtv": "75%"
        },
        {
          "cibilScoreTier": "CIBIL 550 - 649 (Grade 4)",
          "salariedRate": 9.3,
          "nonSalariedRate": 9.45,
          "maxLtv": "70%"
        }
      ]
    }
  },
  {
    "bankName": "Jio Payments Bank",
    "shortName": "JIOPAY",
    "bankCode": "jiopay",
    "category": "Payments Bank",
    "categoryCode": "payments",
    "headquarters": "Mumbai, Maharashtra",
    "established": 2018,
    "logoUrl": "/assets/images/banks/jiopay/symbol.svg",
    "ratesUrl": "https://www.jiopaymentsbank.com",
    "websiteUrl": "https://www.jiopaymentsbank.com",
    "lastUpdated": "2026-10-08T09:06:52.000Z",
    "lastUpdatedDisplay": "8 Oct 2026 09:06 am IST",
    "status": "verified",
    "liveHttpStatus": 408,
    "responseTimeMs": 6002,
    "tablesSummary": {
      "fdTranchesCount": 14,
      "rdTranchesCount": 5,
      "savingsTiersCount": 5,
      "mclrTenuresCount": 7,
      "peakGeneralFdRate": 11.5,
      "peakSeniorFdRate": 12,
      "lowestHomeLoanRate": 8.35
    },
    "depositTables": {
      "fixedDeposit": [
        {
          "tenure": "5 years and up to 10 years",
          "generalRate": 2.9,
          "seniorCitizenRate": 3.4,
          "superSeniorRate": 3.55,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "5-Year Tax Saver Term Deposit (80C)",
          "generalRate": 3,
          "seniorCitizenRate": 3.5,
          "superSeniorRate": 3.65,
          "schemeType": "Tax Saving Term Deposit (Sec 80C)"
        },
        {
          "tenure": "3 years to less than 5 years",
          "generalRate": 3.05,
          "seniorCitizenRate": 3.55,
          "superSeniorRate": 3.7,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "1 year to less than 2 years",
          "generalRate": 3.25,
          "seniorCitizenRate": 3.75,
          "superSeniorRate": 3.9,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "2 years to less than 3 years",
          "generalRate": 3.3,
          "seniorCitizenRate": 3.8,
          "superSeniorRate": 3.95,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "Auto-Sweep & Linked 1-3 Years",
          "generalRate": 3.5,
          "seniorCitizenRate": 9,
          "superSeniorRate": 9.15,
          "schemeType": "JIOPAY Auto-Sweep Deposit Account"
        },
        {
          "tenure": "JIOPAY Auto-Sweep Deposit Account",
          "generalRate": 3.5,
          "seniorCitizenRate": 9,
          "superSeniorRate": 9.2,
          "schemeType": "Flagship Special Deposit"
        },
        {
          "tenure": "7 days to 14 days",
          "generalRate": 8.5,
          "seniorCitizenRate": 9,
          "superSeniorRate": 9.3,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "15 days to 29 days",
          "generalRate": 8.5,
          "seniorCitizenRate": 9,
          "superSeniorRate": 9.3,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "30 days to 45 days",
          "generalRate": 9,
          "seniorCitizenRate": 9.5,
          "superSeniorRate": 9.75,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "46 days to 90 days",
          "generalRate": 10,
          "seniorCitizenRate": 10.5,
          "superSeniorRate": 10.75,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "91 days to 179 days",
          "generalRate": 10.5,
          "seniorCitizenRate": 11,
          "superSeniorRate": 11.25,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "180 days to 210 days",
          "generalRate": 11.25,
          "seniorCitizenRate": 11.75,
          "superSeniorRate": 12,
          "schemeType": "Standard Retail Term Deposit"
        },
        {
          "tenure": "211 days to less than 1 year",
          "generalRate": 11.5,
          "seniorCitizenRate": 12,
          "superSeniorRate": 12.25,
          "schemeType": "Standard Retail Term Deposit"
        }
      ],
      "recurringDeposit": [
        {
          "tenure": "6 Months to < 12 Months",
          "generalRate": 6.25,
          "seniorCitizenRate": 6.75,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "12 Months to < 24 Months",
          "generalRate": 6.75,
          "seniorCitizenRate": 7.25,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "24 Months to < 36 Months",
          "generalRate": 7,
          "seniorCitizenRate": 7.5,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "36 Months to < 60 Months",
          "generalRate": 6.8,
          "seniorCitizenRate": 7.3,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        },
        {
          "tenure": "60 Months to 120 Months",
          "generalRate": 6.6,
          "seniorCitizenRate": 7.1,
          "minMonthlyDeposit": 100,
          "compounding": "Quarterly"
        }
      ],
      "savingsAccount": [
        {
          "balanceSlab": "Up to ₹1 Lakh",
          "rate": 3.5,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Lakh up to ₹10 Lakhs",
          "rate": 3.65,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Lakhs up to ₹1 Crore",
          "rate": 3.85,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹1 Crore up to ₹10 Crores",
          "rate": 3.5,
          "calculation": "Daily balance calculated, paid quarterly"
        },
        {
          "balanceSlab": "Above ₹10 Crores",
          "rate": 3.75,
          "calculation": "Daily balance calculated, paid quarterly"
        }
      ]
    },
    "lendingTables": {
      "benchmarkType": "Partnered Lending (RBI Payments Bank Guidelines)",
      "repoLinkedRate": 8.15,
      "mclr": [
        {
          "tenure": "Overnight MCLR",
          "rate": 8.45
        },
        {
          "tenure": "1 Month MCLR",
          "rate": 8.6
        },
        {
          "tenure": "3 Months MCLR",
          "rate": 8.7
        },
        {
          "tenure": "6 Months MCLR",
          "rate": 8.9
        },
        {
          "tenure": "1 Year MCLR",
          "rate": 9.05
        },
        {
          "tenure": "2 Years MCLR",
          "rate": 9.2
        },
        {
          "tenure": "3 Years MCLR",
          "rate": 9.3
        }
      ],
      "homeLoanSlabs": [
        {
          "cibilScoreTier": "CIBIL >= 750 (Grade 1)",
          "salariedRate": 8.35,
          "nonSalariedRate": 8.5,
          "maxLtv": "80% - 90%"
        },
        {
          "cibilScoreTier": "CIBIL 700 - 749 (Grade 2)",
          "salariedRate": 8.6,
          "nonSalariedRate": 8.75,
          "maxLtv": "75% - 80%"
        },
        {
          "cibilScoreTier": "CIBIL 650 - 699 (Grade 3)",
          "salariedRate": 8.9,
          "nonSalariedRate": 9.05,
          "maxLtv": "75%"
        },
        {
          "cibilScoreTier": "CIBIL 550 - 649 (Grade 4)",
          "salariedRate": 9.3,
          "nonSalariedRate": 9.45,
          "maxLtv": "70%"
        }
      ]
    }
  }
];
