/**
 * Rate Radar - Dashboard Data Engine
 * Fetches every registry JSON file under data/registries/ and renders it
 * into the static table skeletons in index.html using the DataTable class.
 */

function formatPercent(num, decimals = 2) {
  if (num === null || num === undefined || isNaN(num)) return "—";
  return `${Number(num).toFixed(decimals)}%`;
}

function changeClass(value) {
  const num = parseFloat(String(value).replace(/[^0-9.\-]/g, ""));
  if (isNaN(num)) return "trend-neutral";
  return num > 0 ? "trend-up" : (num < 0 ? "trend-down" : "trend-neutral");
}

function statusBadge(status) {
  const label = {
    verified: "✓ Verified",
    requires_manual_update: "Manual Update",
    requires_api: "Licensed API Required",
    requires_license: "Licensed API Required"
  }[status] || "Verified";
  const bg = status === "verified" ? "#ecfdf5" : "#fef3c7";
  const color = status === "verified" ? "#047857" : "#b45309";
  const border = status === "verified" ? "#a7f3d0" : "#fde68a";
  return `<span class="verified-badge-pill" style="background: ${bg}; color: ${color}; border: 1px solid ${border};">${label}</span>`;
}

function renderFooterNote(sectionId, data) {
  const el = document.getElementById(`${sectionId}-footer`);
  if (!el) return;
  const first = Array.isArray(data) ? data[0] : data;
  const display = first && (first.lastUpdatedDisplay || first.lastUpdated);
  el.textContent = display ? `Last synced: ${display}` : "";
}

function renderLoadError(tableId, columnCount, message) {
  const table = document.getElementById(tableId);
  if (!table) return;
  const tbody = table.querySelector("tbody");
  if (tbody) {
    tbody.innerHTML = `<tr><td colspan="${columnCount}" style="text-align:center; padding: 24px; color: var(--text-subtle);">${escapeHtml(message || "Unable to load live data right now.")}</td></tr>`;
  }
}

const SECTIONS = [
  {
    id: "rbi",
    file: "rbi-rates-register.json",
    tableId: "rbi-table",
    columns: [
      { key: "name", title: "Policy Benchmark / Ratio", sortable: true, render: r => `<strong>${escapeHtml(r.name)}</strong><br/><span style="font-size:11px;color:var(--text-muted);">${escapeHtml(r.code || "")}</span>` },
      { key: "currentRate", title: "Current Rate", align: "right", sortable: true, render: r => `<span class="font-mono" style="font-weight:700;">${escapeHtml(r.rateDisplay || formatPercent(r.currentRate))}</span>` },
      { key: "previousRate", title: "Previous Rate", align: "right", sortable: true, render: r => formatPercent(r.previousRate) },
      { key: "changeDisplay", title: "Change", align: "center", render: r => escapeHtml(r.changeDisplay || "—") },
      { key: "effectiveDate", title: "Effective Date", render: r => escapeHtml(r.effectiveDate || "—") },
      { key: "description", title: "Monetary Purpose", render: r => `<span style="font-size:12px;">${escapeHtml(r.description || "")}</span>` }
    ]
  },
  {
    id: "currency",
    file: "forex-rates-register.json",
    tableId: "forex-table",
    columns: [
      { key: "pair", title: "Currency Pair", sortable: true, render: r => `${r.flag || ""} <strong>${escapeHtml(r.pair)}</strong><br/><span style="font-size:11px;color:var(--text-muted);">${escapeHtml(r.currencyName || "")}</span>` },
      { key: "rate", title: "Rate (INR)", align: "right", sortable: true, render: r => `<span class="font-mono" style="font-weight:700;">${escapeHtml(r.rateDisplay || formatRupees(r.rate))}</span>` },
      { key: "inverseRate", title: "Inverse Rate", align: "right", render: r => escapeHtml(r.inverseRateDisplay || "—") },
      { key: "category", title: "Category", render: r => escapeHtml(r.category || "—") },
      { key: "centralBankSource", title: "Source", render: r => r.sourceUrl ? `<a href="${escapeHtml(r.sourceUrl)}" target="_blank" rel="noopener" style="color: var(--accent-blue); text-decoration: underline;">${escapeHtml(r.centralBankSource || "Source")} &nearr;</a>` : escapeHtml(r.centralBankSource || "—") },
      { key: "status", title: "Status", render: r => statusBadge(r.status) }
    ]
  },
  {
    id: "market",
    file: "market-indices-register.json",
    tableId: "market-table",
    columns: [
      { key: "index", title: "Index", sortable: true, render: r => `<strong>${escapeHtml(r.index)}</strong>` },
      { key: "last", title: "Last", align: "right", sortable: true, render: r => `<span class="font-mono">${formatNumber(r.last)}</span>` },
      { key: "change", title: "Change", align: "right", render: r => `<span class="${changeClass(r.change)}">${escapeHtml(String(r.change ?? "—"))}</span>` },
      { key: "pChange", title: "% Change", align: "right", render: r => `<span class="${changeClass(r.pChange)}">${escapeHtml(String(r.pChange ?? "—"))}</span>` },
      { key: "pe", title: "P/E", align: "right", render: r => escapeHtml(String(r.pe ?? "—")) },
      { key: "pb", title: "P/B", align: "right", render: r => escapeHtml(String(r.pb ?? "—")) },
      { key: "status", title: "Status", render: r => statusBadge(r.status) }
    ]
  },
  {
    id: "fd",
    file: "fd-rates-register.json",
    tableId: "fd-table",
    columns: [
      { key: "bank", title: "Bank Name", sortable: true, render: r => `<strong>${escapeHtml(r.bank)}</strong>` },
      { key: "tenure", title: "Deposit Tenure", render: r => escapeHtml(r.tenure || "—") },
      { key: "generalRate", title: "General Public (p.a.)", align: "right", sortable: true, render: r => `<span class="font-mono" style="font-weight:700; color:#047857;">${formatPercent(r.generalRate)}</span>` },
      { key: "seniorCitizenRate", title: "Senior Citizens (p.a.)", align: "right", sortable: true, render: r => `<span class="font-mono" style="font-weight:600; color:#b45309;">${formatPercent(r.seniorCitizenRate)}</span>` },
      { key: "specialScheme", title: "Scheme Category", render: r => escapeHtml(r.specialScheme || "—") },
      { key: "effectiveDate", title: "Effective Date", render: r => escapeHtml(r.effectiveDate || "—") }
    ]
  },
  {
    id: "loans",
    file: "home-loan-register.json",
    tableId: "home-loans-table",
    columns: [
      { key: "bank", title: "Bank Name", sortable: true, render: r => r.source && r.source.url ? `<a href="${escapeHtml(r.source.url)}" target="_blank" rel="noopener" style="color: var(--accent-blue); font-weight:600;">${escapeHtml(r.bank)} &nearr;</a>` : `<strong>${escapeHtml(r.bank)}</strong>` },
      { key: "product", title: "Loan Scheme", render: r => escapeHtml(r.product || "—") },
      { key: "minRate", title: "Effective Rate (p.a.)", align: "right", sortable: true, render: r => `<span class="font-mono" style="font-weight:700;">${formatPercent(r.minRate)} - ${formatPercent(r.maxRate)}</span>` },
      { key: "benchmarkType", title: "Lending Benchmark", render: r => `<span style="font-size:12px;">${escapeHtml(r.benchmarkType || "—")}</span>` },
      { key: "processingFee", title: "Processing Fee", render: r => `<span style="font-size:12px;">${escapeHtml(r.processingFee || "—")}</span>` },
      { key: "tenure", title: "Max Tenure", render: r => escapeHtml(r.tenure || "—") }
    ]
  },
  {
    id: "schemes",
    file: "government-schemes-register.json",
    tableId: "schemes-table",
    columns: [
      { key: "schemeName", title: "Scheme", sortable: true, render: r => `<strong>${escapeHtml(r.schemeName)}</strong><br/><span style="font-size:11px;color:var(--text-muted);">${escapeHtml(r.schemeCode || "")}</span>` },
      { key: "interestRate", title: "Rate", align: "right", sortable: true, render: r => `<span class="font-mono" style="font-weight:700; color:#047857;">${escapeHtml(r.rateDisplay || formatPercent(r.interestRate))}</span>` },
      { key: "compoundingFrequency", title: "Compounding", render: r => escapeHtml(r.compoundingFrequency || "—") },
      { key: "tenure", title: "Tenure", render: r => escapeHtml(r.tenure || "—") },
      { key: "depositLimitsDisplay", title: "Deposit Limits", render: r => `<span style="font-size:12px;">${escapeHtml(r.depositLimitsDisplay || "—")}</span>` },
      { key: "taxBenefit", title: "Tax Benefit", render: r => `<span style="font-size:12px;">${escapeHtml(r.taxBenefit || "—")}</span>` }
    ]
  },
  {
    id: "credit",
    file: "credit-cards-register.json",
    tableId: "credit-table",
    columns: [
      { key: "bank", title: "Bank & Card Name", sortable: true, render: r => `<span class="badge" style="background:#e0f2fe;color:#0369a1;">${escapeHtml(r.bank)}</span><br/><strong style="font-size:13px;">${escapeHtml(r.card)}</strong>` },
      { key: "category", title: "Category", render: r => `<span class="badge" style="background:#f3e8ff;color:#7e22ce;">${escapeHtml(r.category || "—")}</span>` },
      { key: "annualFee", title: "Joining & Annual Fee", render: r => `<div style="font-weight:600;">Join: ${escapeHtml(r.joiningFee || "—")}</div><div style="color:var(--text-muted); font-size:11px;">Annual: ${escapeHtml(r.annualFee || "—")}</div>` },
      { key: "rewards", title: "Rewards & Welcome Perks", render: r => `<div style="color:#047857;font-weight:500;font-size:12px;">${escapeHtml(r.welcomeBenefit || "")}</div><div style="font-size:12px;margin-top:3px;">${escapeHtml(r.rewards || "")}</div>` },
      { key: "loungeAccess", title: "Lounge Access", render: r => `<span style="font-size:12px;">${escapeHtml(r.loungeAccess || "—")}</span>` },
      { key: "forexMarkup", title: "Forex & APR", align: "right", sortable: true, render: r => `<div style="font-weight:600;color:#b45309;">Forex: ${escapeHtml(r.forexMarkup || "—")}</div><div style="color:var(--text-muted);font-size:11px;">${escapeHtml(r.monthlyInterest || "—")}</div>` },
      { key: "productUrl", title: "Official Link", render: r => r.productUrl ? `<a href="${escapeHtml(r.productUrl)}" target="_blank" rel="noopener" style="color: var(--accent-blue); text-decoration: underline;">Apply / Portal &nearr;</a>` : "—" }
    ]
  },
  {
    id: "banks",
    file: "bank-register.json",
    tableId: "banks-table",
    columns: [
      { key: "bankName", title: "Bank Name & Code", sortable: true, render: r => `<span class="badge" style="background:#f1f5f9;color:#475569;">${escapeHtml(r.category || "")}</span><br/><strong style="font-size:13.5px;">${escapeHtml(r.bankName)}</strong> <span style="font-size:11px;color:var(--text-muted);">(${escapeHtml(r.shortName || "")})</span>` },
      { key: "benchmarkRate", title: "Home Loan Rates (p.a.)", render: r => `<div style="font-weight:600;color:#0284c7;font-size:12px;">${escapeHtml((r.homeLoan && r.homeLoan.rateRange) || r.benchmarkRate || "N/A")}</div>` },
      { key: "topFdRate", title: "Fixed Deposit Yield", align: "right", sortable: true, render: r => `<div style="font-weight:700;color:#047857;">${escapeHtml(r.topFdRate || "—")}</div>` },
      { key: "savingsRate", title: "Savings Rate", align: "right", render: r => `<span style="font-size:12px;">${escapeHtml(r.savingsRate || "—")}</span>` },
      { key: "headquarters", title: "Headquarters & Key Offerings", render: r => `<div style="font-size:11.5px;color:var(--text-subtle);">${escapeHtml(r.headquarters || "—")} · Est. ${escapeHtml(String(r.established || ""))}</div><div style="font-size:11px;margin-top:3px;max-width:220px;">${escapeHtml(r.keyOffering || "")}</div>` },
      { key: "websiteUrl", title: "Official Portals", render: r => `<a href="${escapeHtml(r.websiteUrl || "#")}" target="_blank" rel="noopener" style="color: var(--accent-blue); text-decoration: underline; margin-right:6px;">Home &nearr;</a>${r.cardsUrl ? `<a href="${escapeHtml(r.cardsUrl)}" target="_blank" rel="noopener" style="color:#7e22ce;text-decoration:underline;">Cards &nearr;</a>` : ""}` },
      { key: "status", title: "Status", render: r => statusBadge(r.status) }
    ]
  },
  {
    id: "sources",
    file: "sources-register.json",
    tableId: "sources-table",
    columns: [
      { key: "authority", title: "Authority", sortable: true, render: r => `<strong>${escapeHtml(r.authority)}</strong>` },
      { key: "coverage", title: "Coverage", render: r => `<span style="font-size:12px;">${escapeHtml(r.coverage || "—")}</span>` },
      { key: "url", title: "URL", render: r => r.url ? `<a href="${escapeHtml(r.url)}" target="_blank" rel="noopener" style="color: var(--accent-blue); text-decoration: underline;">Visit &nearr;</a>` : "—" },
      { key: "method", title: "Method", render: r => escapeHtml(r.method || "—") },
      { key: "status", title: "Status", render: r => statusBadge(r.status) },
      { key: "notes", title: "Notes", render: r => `<span style="font-size:12px;">${escapeHtml(r.notes || "—")}</span>` }
    ]
  }
];

const CALENDAR_CONFIG = {
  id: "calendar",
  file: "calendars-register.json",
  mpcTableId: "mpc-table",
  holidaysTableId: "holidays-table",
  mpcColumns: [
    { key: "resolution", title: "Bi-Monthly Resolution", sortable: true, render: r => `<strong>${escapeHtml(r.resolution)}</strong>` },
    { key: "dates", title: "Dates", render: r => escapeHtml(r.dates || "—") },
    { key: "status", title: "Status", render: r => escapeHtml(r.status || "—") },
    { key: "repoRate", title: "Repo Rate", align: "right", render: r => escapeHtml(r.repoRate || "—") },
    { key: "stance", title: "Stance", render: r => `<span style="font-size:12px;">${escapeHtml(r.stance || "—")}</span>` }
  ],
  holidaysColumns: [
    { key: "date", title: "Date", sortable: true, render: r => `<strong>${escapeHtml(r.date)}</strong>` },
    { key: "day", title: "Day", render: r => escapeHtml(r.day || "—") },
    { key: "occasion", title: "Occasion", render: r => escapeHtml(r.occasion || "—") },
    { key: "exchange", title: "Exchange", render: r => escapeHtml(r.exchange || "—") },
    { key: "session", title: "Session", render: r => escapeHtml(r.session || "—") }
  ]
};

async function renderSection(section) {
  const data = await fetchData(`registries/${section.file}`);
  if (!data) {
    renderLoadError(section.tableId, section.columns.length, "Unable to load live data right now.");
    return;
  }
  new DataTable({ tableId: section.tableId, data, columns: section.columns });
  renderFooterNote(section.id, data);
}

async function renderCalendarSection() {
  const data = await fetchData(`registries/${CALENDAR_CONFIG.file}`);
  if (!data) {
    renderLoadError(CALENDAR_CONFIG.mpcTableId, CALENDAR_CONFIG.mpcColumns.length, "Unable to load calendar data right now.");
    renderLoadError(CALENDAR_CONFIG.holidaysTableId, CALENDAR_CONFIG.holidaysColumns.length, "Unable to load calendar data right now.");
    return;
  }
  new DataTable({ tableId: CALENDAR_CONFIG.mpcTableId, data: data.mpcMeetings || [], columns: CALENDAR_CONFIG.mpcColumns });
  new DataTable({ tableId: CALENDAR_CONFIG.holidaysTableId, data: data.holidays || [], columns: CALENDAR_CONFIG.holidaysColumns });
  renderFooterNote(CALENDAR_CONFIG.id, data);
}

function setupGlobalTableFilter() {
  const tableSearchInput = document.getElementById("table-live-filter");
  if (!tableSearchInput) return;
  tableSearchInput.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase().trim();
    document.querySelectorAll(".financial-tables-stream table.data-table tbody tr").forEach(row => {
      const text = row.textContent.toLowerCase();
      row.style.display = text.includes(query) ? "" : "none";
    });
  });
}

function setupQuickLinkSmoothScroll() {
  document.querySelectorAll(".table-quick-link").forEach(link => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href");
      if (targetId && targetId.startsWith("#")) {
        e.preventDefault();
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          const headerOffset = 80;
          const elementPosition = targetEl.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", async () => {
  setupQuickLinkSmoothScroll();
  setupGlobalTableFilter();

  await Promise.all([
    ...SECTIONS.map(renderSection),
    renderCalendarSection()
  ]);
});
