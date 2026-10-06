import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const INDEX_PATH = path.join(ROOT_DIR, 'index.html');
const DASHBOARD_HTML_PATH = path.join(ROOT_DIR, 'data/html/all-sections-dashboard.html');

export function updateIndexHtmlTables() {
  if (!fs.existsSync(INDEX_PATH) || !fs.existsSync(DASHBOARD_HTML_PATH)) {
    console.error("Missing index.html or dashboard html");
    return;
  }

  const dashboardHtml = fs.readFileSync(DASHBOARD_HTML_PATH, 'utf8');
  let indexHtml = fs.readFileSync(INDEX_PATH, 'utf8');

  const quickNav = `
        <!-- Live Table Filter & Quick Jump -->
        <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; margin-bottom: 16px;">
          <div style="flex: 1; min-width: 260px; max-width: 450px;">
            <input type="text" id="table-live-filter" class="filter-input" placeholder="Filter rows across all tables (e.g. Repo, SBI, Gold, Petrol, USD)..." style="width: 100%; padding: 9px 14px; border-radius: var(--radius-md); border: 1px solid var(--border-color); font-size: 13.5px;" />
          </div>
          <div style="display: flex; align-items: center; gap: 10px; font-size: 12.5px; color: var(--text-subtle);">
            <span>Displaying 9 Official Scraped Tables</span>
            <span class="meta-sep">·</span>
            <span class="verified-badge-pill" style="font-size: 10px; padding: 2px 7px;">Pure Tabular View</span>
          </div>
        </div>

        <!-- Table Quick Navigation Bar -->
        <div class="table-quick-nav" aria-label="Jump to financial table">
          <a href="#rbi-table-wrapper" class="table-quick-link">🏛️ RBI Rates</a>
          <a href="#home-loans-table-wrapper" class="table-quick-link">🏠 Home Loans</a>
          <a href="#fd-table-wrapper" class="table-quick-link">💰 Fixed Deposits</a>
          <a href="#government-schemes-table-wrapper" class="table-quick-link">📜 Govt Schemes</a>
          <a href="#metals-table-wrapper" class="table-quick-link">🪙 Gold & Silver</a>
          <a href="#currency-table-wrapper" class="table-quick-link">💱 Currency (FBIL)</a>
          <a href="#energy-table-wrapper" class="table-quick-link">⛽ Fuel & Energy</a>
          <a href="#market-table-wrapper" class="table-quick-link">📈 Market Benchmarks</a>
          <a href="#calendar-table-wrapper" class="table-quick-link">📅 Financial Calendar</a>
        </div>
  `;

  const newTablesSection = `
        <!-- OFFICIAL_TABLES_START -->
${quickNav}
        <div class="financial-tables-stream">
${dashboardHtml}
        </div>
        <!-- OFFICIAL_TABLES_END -->
  `;

  if (indexHtml.includes('<!-- OFFICIAL_TABLES_START -->')) {
    indexHtml = indexHtml.replace(
      /<!-- OFFICIAL_TABLES_START -->[\s\S]*?<!-- OFFICIAL_TABLES_END -->/,
      newTablesSection.trim()
    );
  } else {
    // Replace the old card sections between the hero section and </main>
    const heroEndIdx = indexHtml.indexOf('</p>\n        </div>');
    const mainEndIdx = indexHtml.indexOf('</div>\n    </main>');

    if (heroEndIdx !== -1 && mainEndIdx !== -1) {
      const cutStart = heroEndIdx + '</p>\n        </div>'.length;
      indexHtml = indexHtml.slice(0, cutStart) + '\n\n' + newTablesSection + '\n      ' + indexHtml.slice(mainEndIdx);
    }
  }

  fs.writeFileSync(INDEX_PATH, indexHtml, 'utf8');
  console.log("✓ Injected official scraped data tables directly into index.html!");
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  updateIndexHtmlTables();
}
