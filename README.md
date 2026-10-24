# Results Website Family — Shared Design Library

**Starter v0.1.0 — non-breaking, opt-in.** This is a standalone design repository, **not** a monorepo. All website repositories and Cloudflare Pages projects stay separate.

## What is included
- `tokens/foundations.css`: namespaced type, layout, spacing and radius tokens.
- `themes/`: separate Workplace and Services theme tokens.
- `components/`: opt-in shared footer, button, and hero CSS using `results-*` classes.
- `config/contact.json`: shared default contact information; individual sites may override it.
- `docs/RESULTS-DESIGN-SYSTEM.md`: reference specification and caveats.

## IMPORTANT: no site changes yet
Nothing in this repo is loaded by the existing websites automatically. No Cloudflare or Workers changes are required now. Avoid linking directly to GitHub raw files in production.

## Suggested rollout
1. Commit this starter into `resultsfirstaid/results-design-system`.
2. Tag the reviewed library `v0.1.0` after confirming its contents.
3. Pilot **one component**, starting with the Services footer. Copy/pin library files at build time using a locked dependency or an explicit tagged archive, then check the generated `dist` output.
4. After testing, migrate Workplace. Keep site-specific content and brand themes local.
5. Future sites can consume the same versioned library. Each site upgrades only when approved.

### Example markup (for future migration, not existing site markup)
```html
<footer class="results-footer">
  <div class="results-container results-footer__inner">
    <a class="results-footer__brand" href="/">...logo...</a>
    <div class="results-footer__contact">
      <a class="results-footer__phone" href="tel:1300661065">1300 661 065</a>
      <a class="results-footer__email" href="mailto:training@resultsfirstaid.com">training@resultsfirstaid.com</a>
    </div>
  </div>
</footer>
```

### Load order for future consumers
`tokens/foundations.css`, then one theme, then component CSS, then any site-specific overrides. Apply `class="results-theme-services"` or `class="results-theme-workplace"` to a shared ancestor (such as `<body>`).

## Design-system guardrails
- Hero corners are square **whenever the panel is truly full-bleed**, irrespective of device category. Apply `.results-hero--fullbleed` in the layout that actually reaches viewport edges; do not rely on a guessed breakpoint.
- Keep genuine photos, accessible navigation, strong CTA hierarchy, and minimal decoration.
- Do not assume a shared phone/email will always be identical across businesses.
- Do not migrate business logic, checkout, Supabase, booking, Workers or content into this repo.
