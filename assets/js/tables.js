/**
 * Rate Radar - Table Rendering & Sorting Utilities
 */

class DataTable {
  constructor(options) {
    this.tableId = options.tableId;
    this.data = options.data || [];
    this.columns = options.columns || [];
    this.currentSort = { key: options.defaultSortKey || "", order: options.defaultSortOrder || "asc" };
    this.filterFn = options.filterFn || null;
    this.searchTerm = "";

    this.tableElement = document.getElementById(this.tableId);
    if (this.tableElement) {
      this.init();
    }
  }

  init() {
    this.renderHeader();
    this.renderBody();
  }

  setData(newData) {
    this.data = newData;
    this.renderBody();
  }

  setSearchTerm(term) {
    this.searchTerm = (term || "").toLowerCase().trim();
    this.renderBody();
  }

  sort(key) {
    if (this.currentSort.key === key) {
      this.currentSort.order = this.currentSort.order === "asc" ? "desc" : "asc";
    } else {
      this.currentSort.key = key;
      this.currentSort.order = "asc";
    }
    this.renderHeader();
    this.renderBody();
  }

  renderHeader() {
    const thead = this.tableElement.querySelector("thead");
    if (!thead) return;

    let html = "<tr>";
    this.columns.forEach(col => {
      const isSorted = this.currentSort.key === col.key;
      const arrow = isSorted ? (this.currentSort.order === "asc" ? " ▲" : " ▼") : "";
      const sortableClass = col.sortable ? "sortable" : "";
      const alignClass = col.align ? `align-${col.align}` : "";
      html += `<th class="${sortableClass} ${alignClass}" data-key="${col.key || ''}">${col.title}${arrow}</th>`;
    });
    html += "</tr>";
    thead.innerHTML = html;

    // Attach click listeners to sortable th
    thead.querySelectorAll("th.sortable").forEach(th => {
      th.addEventListener("click", () => {
        const key = th.getAttribute("data-key");
        if (key) this.sort(key);
      });
    });
  }

  renderBody() {
    const tbody = this.tableElement.querySelector("tbody");
    if (!tbody) return;

    let filtered = [...this.data];

    // Search filter
    if (this.searchTerm) {
      filtered = filtered.filter(row => {
        return Object.values(row).some(val => {
          if (val === null || val === undefined) return false;
          if (typeof val === "object") return JSON.stringify(val).toLowerCase().includes(this.searchTerm);
          return String(val).toLowerCase().includes(this.searchTerm);
        });
      });
    }

    // Custom external filter
    if (this.filterFn) {
      filtered = filtered.filter(this.filterFn);
    }

    // Sort
    if (this.currentSort.key) {
      const key = this.currentSort.key;
      const order = this.currentSort.order;
      filtered.sort((a, b) => {
        let valA = a[key];
        let valB = b[key];
        if (typeof valA === "string") valA = valA.toLowerCase();
        if (typeof valB === "string") valB = valB.toLowerCase();
        if (valA < valB) return order === "asc" ? -1 : 1;
        if (valA > valB) return order === "asc" ? 1 : -1;
        return 0;
      });
    }

    if (filtered.length === 0) {
      tbody.innerHTML = `<tr><td colspan="${this.columns.length}" style="text-align: center; padding: 32px; color: var(--text-subtle);">No matching financial data found.</td></tr>`;
      return;
    }

    tbody.innerHTML = filtered.map(row => {
      let trHtml = "<tr>";
      this.columns.forEach(col => {
        const alignClass = col.align ? `align-${col.align}` : "";
        let cellVal = col.render ? col.render(row) : (row[col.key] !== undefined ? row[col.key] : "—");
        trHtml += `<td class="${alignClass}">${cellVal}</td>`;
      });
      trHtml += "</tr>";
      return trHtml;
    }).join("");
  }
}

if (typeof window !== "undefined") {
  window.DataTable = DataTable;
}
