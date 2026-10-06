/**
 * Rate Radar - Filtering Utilities
 */

function setupTableFilter(tableInstance, inputId, bankSelectId = null, tenureSelectId = null) {
  const searchInput = document.getElementById(inputId);
  const bankSelect = bankSelectId ? document.getElementById(bankSelectId) : null;
  const tenureSelect = tenureSelectId ? document.getElementById(tenureSelectId) : null;

  function applyFilters() {
    const selectedBank = bankSelect ? bankSelect.value : "";
    const selectedTenure = tenureSelect ? tenureSelect.value : "";

    tableInstance.filterFn = (row) => {
      let matchesBank = true;
      let matchesTenure = true;

      if (selectedBank && selectedBank !== "all") {
        matchesBank = row.bank === selectedBank;
      }

      if (selectedTenure && selectedTenure !== "all") {
        matchesTenure = row.tenure && row.tenure.toLowerCase().includes(selectedTenure.toLowerCase());
      }

      return matchesBank && matchesTenure;
    };

    if (searchInput) {
      tableInstance.setSearchTerm(searchInput.value);
    } else {
      tableInstance.renderBody();
    }
  }

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      tableInstance.setSearchTerm(e.target.value);
    });
  }

  if (bankSelect) {
    bankSelect.addEventListener("change", applyFilters);
  }

  if (tenureSelect) {
    tenureSelect.addEventListener("change", applyFilters);
  }
}

if (typeof window !== "undefined") {
  window.setupTableFilter = setupTableFilter;
}
