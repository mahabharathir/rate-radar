/**
 * Rate Radar - Site Configuration
 * Supports deployment to custom domains (basePath: "") 
 * and GitHub Pages project sites (basePath: "/rate-radar").
 */
const SITE_CONFIG = {
  siteName: "Rate Radar",
  // Base path for project sites. If empty string, links start from root "/".
  // Auto-detects if running on username.github.io/repository-name/
  basePath: (function () {
    if (typeof window !== "undefined" && window.RATE_RADAR_BASE_PATH !== undefined) {
      return window.RATE_RADAR_BASE_PATH;
    }
    if (typeof window !== "undefined" && window.location) {
      const hostname = window.location.hostname;
      const pathname = window.location.pathname;
      if (hostname.endsWith("github.io")) {
        const parts = pathname.split("/").filter(Boolean);
        if (parts.length > 0) {
          return "/" + parts[0];
        }
      }
    }
    return "";
  })(),
  canonicalUrl: "https://rateradar.org",
  version: "1.0.0",
  currentDate: "2026-10-01"
};

/**
 * Resolves an internal application path with the configured basePath
 * @param {string} path - Internal route e.g. "/rates/fd/"
 * @returns {string} - Absolute path with basePath prepended e.g. "/rate-radar/rates/fd/"
 */
function getUrl(path) {
  if (!path) return SITE_CONFIG.basePath || "/";
  if (path.startsWith("http://") || path.startsWith("https://") || path.startsWith("#") || path.startsWith("mailto:")) {
    return path;
  }
  const cleanPath = path.startsWith("/") ? path : "/" + path;
  return (SITE_CONFIG.basePath || "") + cleanPath;
}

if (typeof window !== "undefined") {
  window.SITE_CONFIG = SITE_CONFIG;
  window.getUrl = getUrl;
}
