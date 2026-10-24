# v0.6.0 adoption

- Non-destructive shared hooks for existing Services feature cards, product cards, form fields and callouts. Existing markup, events and styling remain in control.
- Existing Workplace course-card shared classes remain in use.
- Edge-aware geometry: `data-results-edge-panel` on a rounded panel; `edge-panels.js` measures its real viewport intersection and adds `results-edge-flush` only when touching an edge. No arbitrary width breakpoint.
- Showcase: `showcase/index.html` (serve from repository root with a local static server). Parent and public palettes are proposals.
- Form submission, commerce, Supabase, and course-data logic are not moved into the library.
- This is an adoption layer, not a claim that all legacy markup has been converted.
