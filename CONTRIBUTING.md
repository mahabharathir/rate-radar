# Contributing to Rate Radar

Thank you for your interest in contributing to Rate Radar! We welcome community contributions that help keep financial information transparent, accessible, and fast.

## Principles

1. **Strictly Static**: All contributions must adhere to the static architecture. Do not introduce backend servers, database drivers, or server-side frameworks.
2. **Zero Private API Keys**: Never commit credentials, private tokens, or scraping scripts.
3. **Vanilla Web Technologies**: Use HTML5, modern CSS3, and standard vanilla JavaScript.
4. **Data Verification**: When updating `/data/*.json` files, ensure figures match the official cited source and update the `"lastUpdated"` timestamp.

## Submitting Pull Requests

1. Fork the repository on GitHub.
2. Create a topic branch (`git checkout -b feature/update-fd-rates`).
3. Validate your changes:
   - Ensure all JSON files in `data/` are syntactically valid JSON.
   - Verify table column alignment, responsive layouts, and mobile views.
4. Commit with descriptive messages.
5. Push your branch and open a Pull Request.

## Code Style

- Use 2 spaces for indentation in HTML, CSS, JS, and JSON.
- Maintain semantic HTML elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<table>`, `<footer>`).
- Always include `lastUpdated` and `source` objects for every financial metric.
