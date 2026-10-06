/**
 * Rate Radar - Homepage Financial Tables Interactions
 * Enhances the pre-rendered HTML tables with smooth navigation,
 * table sorting, and real-time status indicators.
 */

document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll for quick navigation links
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
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }
    });
  });

  // Client-side quick filter across all tables
  const tableSearchInput = document.getElementById("table-live-filter");
  if (tableSearchInput) {
    tableSearchInput.addEventListener("input", (e) => {
      const query = e.target.value.toLowerCase().trim();
      document.querySelectorAll(".financial-tables-stream table.data-table tbody tr").forEach(row => {
        const text = row.textContent.toLowerCase();
        row.style.display = text.includes(query) ? "" : "none";
      });
    });
  }

  // Bank category filter buttons
  document.querySelectorAll(".bank-filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".bank-filter-btn").forEach(b => {
        b.classList.remove("active");
        b.style.background = "#f1f5f9";
        b.style.color = "#475569";
        b.style.border = "1px solid #cbd5e1";
      });
      btn.classList.add("active");
      btn.style.background = "var(--accent-blue, #0284c7)";
      btn.style.color = "#ffffff";
      btn.style.border = "none";

      const filter = btn.getAttribute("data-filter");
      const bankRows = document.querySelectorAll("#all-indian-banks-table tbody tr");
      bankRows.forEach(row => {
        const cat = row.getAttribute("data-bank-cat");
        if (filter === "all" || cat === filter) {
          row.style.display = "";
        } else {
          row.style.display = "none";
        }
      });
    });
  });

  // Credit Card Multi-Facet Filtering (Issuer + Category + Instant Search)
  const cardSearchInput = document.getElementById("credit-card-search");
  const cardCountDisplay = document.getElementById("card-count-display");
  let activeCardBank = "all";
  let activeCardCat = "all";
  let activeCardQuery = "";

  function filterCreditCards() {
    const cardRows = document.querySelectorAll("#all-credit-cards-table tbody tr");
    let visibleCount = 0;

    cardRows.forEach(row => {
      const bank = row.getAttribute("data-card-bank") || "";
      const cat = (row.getAttribute("data-card-cat") || "").toLowerCase();
      const text = row.textContent.toLowerCase();

      // Bank Issuer check
      let matchesBank = (activeCardBank === "all");
      if (activeCardBank === "psb") {
        matchesBank = ["canbk", "ubi", "pnb", "boi", "indianbk", "cbi"].includes(bank);
      } else if (activeCardBank === "other") {
        matchesBank = ["sib", "kvb", "ktk", "bandhan", "csb", "sbm"].includes(bank);
      } else if (activeCardBank !== "all") {
        matchesBank = (bank === activeCardBank);
      }

      // Category check
      let matchesCat = (activeCardCat === "all");
      if (activeCardCat === "metal") {
        matchesCat = cat.includes("metal") || cat.includes("luxury") || cat.includes("super-premium");
      } else if (activeCardCat === "cashback") {
        matchesCat = cat.includes("cashback") || cat.includes("shopping") || cat.includes("retail") || cat.includes("grocery") || cat.includes("ecommerce");
      } else if (activeCardCat === "travel") {
        matchesCat = cat.includes("travel") || cat.includes("miles") || cat.includes("aviation") || cat.includes("flight") || cat.includes("hotel") || cat.includes("air");
      } else if (activeCardCat === "dining") {
        matchesCat = cat.includes("dining") || cat.includes("movie") || cat.includes("entertainment") || cat.includes("food");
      } else if (activeCardCat === "fuel") {
        matchesCat = cat.includes("fuel") || cat.includes("utility");
      } else if (activeCardCat === "ltf") {
        matchesCat = cat.includes("ltf") || cat.includes("lifetime free") || text.includes("lifetime free");
      } else if (activeCardCat === "rupay") {
        matchesCat = cat.includes("rupay") || cat.includes("upi") || text.includes("rupay") || text.includes("upi");
      }

      // Text Search check
      const matchesSearch = !activeCardQuery || text.includes(activeCardQuery);

      if (matchesBank && matchesCat && matchesSearch) {
        row.style.display = "";
        visibleCount++;
      } else {
        row.style.display = "none";
      }
    });

    if (cardCountDisplay) {
      cardCountDisplay.textContent = visibleCount;
    }
  }

  // Card Issuer filter buttons
  document.querySelectorAll(".card-filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".card-filter-btn").forEach(b => {
        b.classList.remove("active");
        b.style.background = "#e0f2fe";
        b.style.color = "#0369a1";
        b.style.border = "1px solid #bae6fd";
      });
      btn.classList.add("active");
      btn.style.background = "var(--accent-blue, #0284c7)";
      btn.style.color = "#ffffff";
      btn.style.border = "none";

      activeCardBank = btn.getAttribute("data-card-filter") || "all";
      filterCreditCards();
    });
  });

  // Card Category filter buttons
  document.querySelectorAll(".card-cat-filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".card-cat-filter-btn").forEach(b => {
        b.classList.remove("active");
        b.style.background = "#ffffff";
        b.style.color = "#475569";
        b.style.border = "1px solid #cbd5e1";
      });
      btn.classList.add("active");
      btn.style.background = "#0f172a";
      btn.style.color = "#ffffff";
      btn.style.border = "1px solid #0f172a";

      activeCardCat = btn.getAttribute("data-card-cat-filter") || "all";
      filterCreditCards();
    });
  });

  // Card Search input
  if (cardSearchInput) {
    cardSearchInput.addEventListener("input", (e) => {
      activeCardQuery = e.target.value.toLowerCase().trim();
      filterCreditCards();
    });
  }
});
