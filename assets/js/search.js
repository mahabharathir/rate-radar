/**
 * Rate Radar - Single-Page Client-Side Search
 */

const SEARCH_INDEX_ITEMS = [
  { title: "RBI Policy Rates", category: "Monetary Policy", url: "#rbi", description: "Repo Rate, SDF, MSF, Bank Rate, CRR & SLR set by the Reserve Bank of India.", keywords: "rbi repo rate reverse repo sdf msf bank rate crr slr monetary policy" },
  { title: "Foreign Exchange Rates", category: "Currency", url: "#currency", description: "Live USD, EUR, GBP, AED, SGD and other major currency pairs against the Indian Rupee.", keywords: "forex currency exchange rate usd eur gbp aed sgd dollar rupee" },
  { title: "Stock Market Benchmarks & Sectors", category: "Markets", url: "#market", description: "NIFTY 50, NIFTY BANK and other key sectoral equity indices.", keywords: "nifty sensex market index stock equity bank it auto fmcg pharma metal midcap smallcap" },
  { title: "Fixed Deposit Rates", category: "Banking", url: "#fd", description: "Commercial bank fixed deposit interest rates for general public and senior citizens.", keywords: "fd fixed deposit interest rate tenure senior citizen bank" },
  { title: "Home Loan Rates", category: "Banking", url: "#loans", description: "Retail home loan interest rates and external benchmark linkages across Indian banks.", keywords: "home loan rate eblr rllr brlr mortgage interest bank" },
  { title: "Government Savings Schemes", category: "Savings", url: "#schemes", description: "PPF, SSY, SCSS, NSC, POMIS, KVP and other small savings scheme interest rates.", keywords: "ppf sukanya samriddhi scss nsc kvp pomis government savings scheme" },
  { title: "Credit Cards Charges & Tariffs", category: "Banking", url: "#credit", description: "Joining fees, annual fees, rewards, lounge access and forex markup across 159 credit cards.", keywords: "credit card joining fee annual fee rewards lounge forex markup" },
  { title: "All Indian Banks Directory", category: "Banking", url: "#banks", description: "Directory of all 53 scheduled commercial banks with rates, categories and official portals.", keywords: "bank directory psb private sfb foreign payments bank sbi hdfc icici axis" },
  { title: "Trading Holidays & RBI MPC Calendar", category: "Calendar", url: "#calendar", description: "NSE/BSE trading holidays and RBI Monetary Policy Committee meeting schedule.", keywords: "trading holiday calendar mpc meeting schedule nse bse rbi" },
  { title: "Official Sources & Scraper Directory", category: "Transparency", url: "#sources", description: "Full provenance directory of every official source, method and status used by Rate Radar.", keywords: "sources provenance scraper directory official transparency method status" }
];

let searchIndexData = [];
let selectedSearchIndex = -1;

function loadSearchIndex() {
  if (searchIndexData.length === 0) {
    searchIndexData = SEARCH_INDEX_ITEMS;
  }
}

function openSearchModal() {
  const modal = document.getElementById("search-modal");
  const input = document.getElementById("search-input");
  if (modal && input) {
    modal.classList.add("open");
    loadSearchIndex();
    input.value = "";
    renderSearchResults("");
    setTimeout(() => input.focus(), 50);
  }
}

function closeSearchModal() {
  const modal = document.getElementById("search-modal");
  if (modal) {
    modal.classList.remove("open");
    selectedSearchIndex = -1;
  }
}

function renderSearchResults(query) {
  const resultsContainer = document.getElementById("search-results");
  if (!resultsContainer) return;

  const cleanQuery = (query || "").trim().toLowerCase();
  let matches = [];

  if (!cleanQuery) {
    // Show top popular recommendations
    matches = searchIndexData.slice(0, 6);
  } else {
    matches = searchIndexData.filter(item => {
      const titleMatch = item.title.toLowerCase().includes(cleanQuery);
      const descMatch = item.description.toLowerCase().includes(cleanQuery);
      const kwMatch = item.keywords.toLowerCase().includes(cleanQuery);
      const catMatch = item.category.toLowerCase().includes(cleanQuery);
      return titleMatch || descMatch || kwMatch || catMatch;
    });
  }

  if (matches.length === 0) {
    resultsContainer.innerHTML = `
      <div style="padding: 24px; text-align: center; color: var(--text-subtle); font-size: 13.5px;">
        No results found for "<strong>${escapeHtml(cleanQuery)}</strong>". Try searching for "Repo Rate", "FD", "Gold", or "Petrol".
      </div>
    `;
    return;
  }

  resultsContainer.innerHTML = matches.map((item, idx) => {
    const itemUrl = item.url.startsWith('#') ? item.url : getUrl(item.url);
    return `
      <a href="${itemUrl}" class="search-item ${idx === selectedSearchIndex ? 'selected' : ''}" data-idx="${idx}">
        <div class="search-item-title">
          <span>${escapeHtml(item.title)}</span>
          <span class="search-item-category">${escapeHtml(item.category)}</span>
        </div>
        <div class="search-item-desc">${escapeHtml(item.description)}</div>
      </a>
    `;
  }).join("");
}

function scrollToAnchor(hash) {
  const target = document.querySelector(hash);
  if (target) {
    const headerOffset = 80;
    const elementPosition = target.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const triggerBtn = document.getElementById("search-trigger");
  const modal = document.getElementById("search-modal");
  const input = document.getElementById("search-input");
  const resultsContainer = document.getElementById("search-results");

  if (triggerBtn) {
    triggerBtn.addEventListener("click", openSearchModal);
  }

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeSearchModal();
      }
    });
  }

  if (resultsContainer) {
    resultsContainer.addEventListener("click", (e) => {
      const link = e.target.closest("a.search-item");
      if (link) {
        const href = link.getAttribute("href");
        if (href && href.startsWith("#")) {
          e.preventDefault();
          closeSearchModal();
          scrollToAnchor(href);
        }
      }
    });
  }

  if (input) {
    input.addEventListener("input", (e) => {
      selectedSearchIndex = -1;
      renderSearchResults(e.target.value);
    });

    input.addEventListener("keydown", (e) => {
      const items = document.querySelectorAll(".search-item");
      if (e.key === "ArrowDown") {
        e.preventDefault();
        if (items.length > 0) {
          selectedSearchIndex = (selectedSearchIndex + 1) % items.length;
          updateSelectedSearchResult(items);
        }
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        if (items.length > 0) {
          selectedSearchIndex = (selectedSearchIndex - 1 + items.length) % items.length;
          updateSelectedSearchResult(items);
        }
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (selectedSearchIndex >= 0 && items[selectedSearchIndex]) {
          const href = items[selectedSearchIndex].getAttribute("href");
          closeSearchModal();
          if (href && href.startsWith("#")) {
            scrollToAnchor(href);
          } else if (href) {
            window.location.href = href;
          }
        }
      } else if (e.key === "Escape") {
        closeSearchModal();
      }
    });
  }

  document.addEventListener("keydown", (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === "k") {
      e.preventDefault();
      openSearchModal();
    }
  });
});

function updateSelectedSearchResult(items) {
  items.forEach((item, idx) => {
    if (idx === selectedSearchIndex) {
      item.classList.add("selected");
      item.scrollIntoView({ block: "nearest" });
    } else {
      item.classList.remove("selected");
    }
  });
}
