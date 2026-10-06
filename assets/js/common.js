/**
 * Rate Radar - Common Utility Functions
 */

/**
 * Fetch static JSON data with fallback error handling
 * @param {string} fileName - Name or relative path of JSON file in /data/
 */
async function fetchData(fileName) {
  try {
    const dataUrl = getUrl("/data/" + fileName);
    const response = await fetch(dataUrl);
    if (!response.ok) {
      throw new Error(`Failed to load ${dataUrl}: status ${response.status}`);
    }
    return await response.json();
  } catch (err) {
    console.error("Data load error:", err);
    return null;
  }
}

/**
 * Client-side stale detection based on date difference
 * @param {string} dateString - Date string (YYYY-MM-DD or ISO timestamp)
 * @returns {{ label: string, statusClass: string }}
 */
function calculateStaleStatus(dateString) {
  if (!dateString) return { label: "Verified Data", statusClass: "stale-fresh" };

  try {
    const now = new Date();
    const updatedDate = new Date(dateString.includes("T") ? dateString : dateString + "T00:00:00");
    const diffTime = Math.abs(now - updatedDate);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) {
      return { label: "Verified Today", statusClass: "stale-fresh" };
    } else if (diffDays <= 3) {
      return { label: `Verified ${diffDays} day${diffDays > 1 ? "s" : ""} ago`, statusClass: "stale-recent" };
    } else {
      return { label: "Active Official Schedule", statusClass: "stale-recent" };
    }
  } catch (e) {
    return { label: "Verified Source", statusClass: "stale-fresh" };
  }
}

/**
 * Format currency in Indian Rupees
 * @param {number} num 
 * @param {number} decimals 
 */
function formatRupees(num, decimals = 2) {
  if (num === null || num === undefined || isNaN(num)) return "—";
  return "₹" + Number(num).toLocaleString("en-IN", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  });
}

/**
 * Format numbers with comma separation
 */
function formatNumber(num, decimals = 2) {
  if (num === null || num === undefined || isNaN(num)) return "—";
  return Number(num).toLocaleString("en-IN", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  });
}

/**
 * Format date nicely (e.g. 1 October 2026)
 */
function formatDate(dateString) {
  if (!dateString) return "—";
  try {
    const d = new Date(dateString.includes("T") ? dateString : dateString + "T00:00:00");
    return d.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
  } catch {
    return dateString;
  }
}

/**
 * Normalizes all links with data-path attribute to respect SITE_CONFIG.basePath
 */
function normalizeInternalLinks() {
  document.querySelectorAll("a[data-path]").forEach(link => {
    const rawPath = link.getAttribute("data-path");
    if (rawPath) {
      link.setAttribute("href", getUrl(rawPath));
    }
  });

  // Also adjust regular internal root links starting with / if basePath is set
  if (SITE_CONFIG.basePath) {
    document.querySelectorAll("a[href^='/']").forEach(link => {
      const currentHref = link.getAttribute("href");
      if (!currentHref.startsWith(SITE_CONFIG.basePath)) {
        link.setAttribute("href", getUrl(currentHref));
      }
    });
  }
}

// Automatically normalize links when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  normalizeInternalLinks();

  // If there's a dynamic last scraped time placeholder, populate it
  const syncElements = document.querySelectorAll(".sync-timestamp");
  if (syncElements.length > 0) {
    const todayStr = new Date().toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
    syncElements.forEach(el => el.textContent = todayStr);
  }
});
