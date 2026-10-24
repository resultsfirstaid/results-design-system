# Results Website Family — Design System
Version 1.0 · 24 October 2026 · Source: supplied Workplace Training and First Aid Services repository snapshots.

## 1. Brand architecture and purpose
**Results Training** (`resultstraining.com.au`) is the planned parent / routing site. It should explain the company and present three unmistakable choices, not duplicate specialist content.

- **Results First Aid** (`resultsfirstaid.com`): individual learners finding and booking public training. Currently live on Wix; planned replacement last.
- **Results Workplace Training** (`resultsworkplacetraining.com`): workplace course information, corporate training enquiries and account relationships. Reference implementation.
- **Results First Aid Services** (`resultsfirstaidservices.com`): first aid equipment, kits, defibrillators, sales, servicing, replenishment and store.

Each site has one clear primary user journey. Use contextually relevant cross-links and a shared, quiet footer discovery pattern; do not crowd the primary navigation with the whole ecosystem.

## 2. Shared visual philosophy
Premium, restrained, warm, Apple-inspired, easy to navigate. Strong typography, generous whitespace, authentic Results photography, carefully composed split-layout heroes, legible text, restrained motion. Avoid decorative dividers, excess borders, redundant messages and stock-photo clichés. Preserve each site's individual personality.

## 3. Verified foundations and proposed shared standards
| Token / pattern | Standard | Evidence / caveat |
|---|---|---|
| Body type | `DM Sans`, sans-serif | Explicit in Services CSS; Workplace homepage loads font resources; verify exact effective styles in browser |
| Display type | `Manrope`, sans-serif | Explicit in Services CSS and referenced in Workplace styling |
| Main container | `.wrap { max-width: 1320px; padding: 0 42px; margin: auto; }` | Present in Services stylesheet; use as common reference, confirm Workplace computed styles |
| Tablet navigation breakpoint | `950px` | Existing media queries in Services and Workplace |
| Small-screen breakpoint | `650px` | Existing media queries; Services also has 600px/750px refinements |
| Brand symbol | `/assets/brand/results-symbol.png`, 44 × 40 HTML dimensions | Both current header partials |
| Full-bleed hero corners | **Zero radius whenever hero touches viewport edges** | Approved design rule; use geometry-aware CSS, not arbitrary device classification |
| Footer | Clickable, un-underlined logo; prominent phone and email; business description; privacy/contact; discreet ecosystem navigation | Workplace latest footer is baseline |

**Important implementation nuance:** A `1320px` *outer* `.wrap` with horizontal padding may still leave a gutter; a hero can also become full-bleed through negative margins or a different wrapper. Never assume viewport width alone proves full-bleed. Match the actual edge-to-edge state in each site's CSS and test near the transition width.

## 4. Brand themes: tokens are site-specific
### Workplace Training
Current generated page styling contains navy / maroon / blush tones, including values such as `#23394b`, `#253d4e`, `#7d3c55`, `#f7f3f5`, and pale blue `#dbe6eb`. **Do not blindly copy all discovered hex values**: the homepage and generator retain earlier green declarations, and cascade order matters. Establish canonical semantic tokens during consolidation.

### First Aid Services
Effective late CSS overrides use teal `#176f70`, light mint `#bce9db`, dark teal footer `#103335`, white/light backgrounds and muted green-grey text. Earlier rules still include `#244e40` and `#d7f28b`; these are historical declarations, not automatically the approved palette.

### Parent and Public Training
Brand tokens to be defined after reviewing their respective implementations/requirements. Share spacing and layout language without imposing a single colour scheme.

## 5. Component contracts
### Header
- White, legible, sticky navigation where appropriate; shared logo dimensions and lockup arrangement.
- Logo links to the site's homepage. Primary nav is *site-specific* and short.
- Clear primary CTA, matching button shape/weight across sites.
- Responsive mobile menu: accessible toggle, visible focus, appropriate `aria-expanded`, no horizontal overflow.
- Preserve approved desktop top-gap / scroll behaviour when implementing on a new site; inspect the reference code before copying.

### Hero
- Prefer confident heading, concise supporting copy, one clear action, genuine photograph or purposeful graphic.
- Use the same layout vocabulary across the family; vary imagery, headline, colour and message.
- **Corners: rounded only with visible external gutters; square at any viewport where the hero is full-bleed.** Check actual parent width and margins, including desktop/tablet transition.
- Group photos must not sacrifice subjects at both edges to `object-fit:cover`; where needed use a sharp contained image over a darkened blurred fill.
- Mobile layouts should be composed intentionally, not just shrunk.

### Content sections
- Use consistent maximum widths, section rhythm, headings and image proportions.
- Avoid gratuitous top/bottom borders and maroon accent strokes.
- Reuse testimonial, logo strip, proof and enquiry patterns only where they serve the page's goal.

### Buttons and forms
- Consistent button geometry, focus/hover states, clear labels, accessible contrast and generous tap targets.
- Public Training prioritizes booking; Workplace Training prioritizes enquiry; Services prioritizes shopping and service booking. Do not unify their business logic.

### Footer
- Reference: Workplace Training `partials/footer.html` (supplied Oct 2026).
- Shared structure: linked Results logo, contact block with large phone and visible email, small business descriptor, legal links, and (when agreed) compact family-site discovery links.
- Phone: `1300 661 065`, `tel:1300661065`. Email: `training@resultsfirstaid.com`, `mailto:training@resultsfirstaid.com` **confirmed for Workplace Training**. Confirm contact details for Services and future sites before reuse.
- Logo link and its brand text must never be underlined. Keep business-specific palette.

## 6. Implementation discipline
1. Read the *current* repository, not just the handbook.
2. Identify effective CSS rules (later overrides, specificity, inline styles), generated pages and shared partials.
3. Preserve business identity, routes, forms, stores and integrations.
4. Make targeted patches; ZIP only changed files, preserving paths.
5. Run syntax checks and inspect build output when possible; never claim visual testing or deployment unless performed.
6. When shared component changes, evaluate whether to propagate them to other sites, but never automatically overwrite unique branding.
7. Document approved changes in the change log / handoff.

## 7. Outstanding standardization decisions
- Extract canonical *computed* design tokens for both sites, replacing historical CSS overrides only after testing.
- Confirm exact hero edge-to-edge breakpoint for each layout and page.
- Agree on shared ecosystem footer link arrangement before implementation.
- Establish Services-specific contact details and shop integration requirements.
- Define parent-site palette and individual-booking site requirements when those projects begin.
