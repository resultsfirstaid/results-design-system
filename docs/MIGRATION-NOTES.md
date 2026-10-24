# Migration notes

This package intentionally does **not** change existing sites. The class names in the shared library are new, scoped, and opt-in.

## Before connecting a site
- Compare the site’s effective CSS against the new tokens. Existing pages have historical overrides.
- Inspect the real build entry point and how HTML is generated or copied.
- Add a pinned dependency or a pinned tagged artifact fetch during build, **not** a live CDN dependency.
- Convert one shared component at a time, checking desktop/tablet/mobile and the `dist` output.
- Maintain a release note and version tag for every approved shared change.

## Current implementation differences
- Workplace Training: `scripts/build-courses.mjs` generates pages from Supabase data.
- First Aid Services: `scripts/build.mjs` copies source pages and applies its own footer logic.
- Both sites retain independent Cloudflare Pages deployments and Workers.

## Design decisions requiring review
- Precise shared button metrics and header interactions need visual/computed-style comparison.
- The shared footer component is a proposed, opt-in migration target, not a claim that current HTML already uses it.
- The parent and public-booking site themes are not yet defined.
