# Results Design System v0.4.0

Shared UI foundation for the Results website family. Version 0.4 adds opt-in reusable CSS components and dependency-free progressive-enhancement interactions while retaining the existing footer v0.3 contract.

Read `docs/COMPONENTS.md` before adopting components. The library does not include business logic or replace any live website build script. Themes remain business-specific.

Shared header: `components/header.html` + `components/header.css`. The per-site `data/header.json` supplies nav, logo wording and CTA. A `showcase/index.html` provides static reference examples. Do not publish this library until testing the site patches with a local build.
