# Results component library — v0.4.0

## Scope
This is a **library release**, not a replacement for either live site's build files. It extends v0.3.0 without changing the existing footer contract. Keep existing production CSS and build logic in place until individual components have been migrated and visually reviewed.

## Loading
Include existing foundations, your site theme, then `components/library.css`. For interactive primitives, load `interactions/results-ui.js` with `defer`. CSS selectors are opt-in (`r-*`) to minimize collisions. The script initializes controls with `data-r-*` attributes and may be called again after dynamic content insertion via `ResultsUI.init(container)`.

## Categories and contracts
- Layout: `r-container`, `r-section`, `r-stack`, `r-grid`, `r-split`, `r-cluster`.
- Typography: `r-heading`, `r-eyebrow`, `r-muted`.
- Content: `r-card`, `r-card--tint`, `r-media`, `r-pill`.
- Actions: `r-btn`, `r-btn--outline`, `r-btn--quiet`, `r-btn--small`.
- Forms: `r-field`, `r-label`, `r-input`, `r-select`, `r-textarea`, `r-check`, `r-help`, `r-error`, `r-form-grid`. Use real labels, name attributes, and server-side validation.
- Commerce: `r-product`, `r-product__image`, `r-product__body`, `r-price`, `r-quantity`.
- Interactive: native `details.r-accordion`, accessible tablist, modal `dialog.r-modal`, toast region, skeletons, alerts.
- Data: `r-table-wrap`, `r-table`.
- Header: `r-header`, `r-header__inner`, `r-header__brand`, `r-header__nav`, `r-header__actions`, `r-header__cta`, `r-header__menu`, `r-header__mobile`.

## Header example
```html
<header class="r-header results-theme-services">
  <div class="r-header__inner">
    <a class="r-header__brand" href="/">RESULTS FIRST AID SERVICES</a>
    <nav class="r-header__nav" aria-label="Main"><a href="/services/">Services</a></nav>
    <div class="r-header__actions">
      <a class="r-btn r-header__cta" href="/contact/">Let's talk ↗</a>
      <button class="r-icon-btn r-header__menu" type="button" data-r-menu aria-expanded="false" aria-controls="r-mobile-nav" aria-label="Toggle navigation">☰</button>
    </div>
  </div>
  <nav class="r-header__mobile" id="r-mobile-nav" aria-label="Mobile" hidden><a href="/services/">Services</a><a href="/contact/">Contact</a></nav>
</header>
```
At <=950px navigation collapses, but CTA and hamburger stay together at right. At <=650px CTA hides. Keep each site's current header until its markup and scroll behaviour have been migrated.

## Tabs example
```html
<div data-r-tabs>
  <div class="r-tabs" role="tablist" aria-label="Details">
    <button class="r-tab" role="tab" id="t1" aria-controls="p1" aria-selected="true" tabindex="0">Overview</button>
    <button class="r-tab" role="tab" id="t2" aria-controls="p2" aria-selected="false" tabindex="-1">Specifications</button>
  </div>
  <section class="r-panel" id="p1" role="tabpanel" aria-labelledby="t1">Overview content</section>
  <section class="r-panel" id="p2" role="tabpanel" aria-labelledby="t2" hidden>Specifications content</section>
</div>
```

## Modal example
```html
<button type="button" data-r-open-modal="help-dialog">Help</button>
<dialog class="r-modal" id="help-dialog" aria-labelledby="help-title">
 <div class="r-modal__body"><h2 id="help-title">How can we help?</h2><p>Contact us for assistance.</p><button type="button" data-r-close-modal>Close</button></div>
</dialog>
```

## Product quantity example
```html
<div class="r-quantity" data-r-quantity>
 <button type="button" data-r-step="-1" aria-label="Decrease quantity">−</button>
 <input type="number" name="quantity" value="1" min="1" aria-label="Quantity">
 <button type="button" data-r-step="1" aria-label="Increase quantity">+</button>
</div>
```

## Boundaries
No checkout, payment, inventory, cart persistence, form submission, authentication, pricing logic, course booking, or Supabase integration is included. These must remain site-specific and server-validated. Avoid using demo text as production content. Verify contrast, keyboard operation, mobile overflow, and generated pages in browser before migration.

## Next integration
Use up-to-date snapshots of both site repositories (after v0.3.0 deployment). Migrate header first, preserving sticky/scroll/menu behavior and business-specific navigation. Then buttons/forms, then marketing, then commerce and application components. Pin each website to an explicit release tag and test both desktop and mobile.
