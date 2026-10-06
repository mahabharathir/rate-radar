import fs from 'node:fs';

/**
 * Overwrites a scripts/data/*-registry.mjs catalog file with freshly scraped values,
 * keeping the fallback catalog in sync with the last successful live scrape.
 */
export function writeCatalogFile(filePath, headerComment, namedExports) {
  const blocks = Object.entries(namedExports)
    .map(([name, value]) => `export const ${name} = ${JSON.stringify(value, null, 2)};`)
    .join('\n\n');
  fs.writeFileSync(filePath, `${headerComment}\n\n${blocks}\n`, 'utf8');
}
