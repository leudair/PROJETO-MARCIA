# Amani Miami — Website Scaffold

A static (no-build, no-Node-required) implementation of the Amani Miami luxury
website brief: vanilla HTML/CSS/JS, a shared design system, a CMS-shaped data
layer, and a component-style card/render system that keeps every page in sync
from one source of truth.

## Why static HTML instead of Next.js/React/TypeScript

The master brief calls for a React/Next.js/TypeScript stack. This machine has
no Node.js/npm installed, so that stack could not be installed, built, or
verified here. Per your choice, this was built as a static HTML/CSS/JS site
instead — fully functional today, no install step required. If you later want
the real Next.js/TypeScript version, this scaffold's structure (design tokens,
component patterns, data models, page inventory, copy) translates directly:
`assets/js/data.js` → CMS/data layer, each card renderer → a React component,
each page → a route.

## Running it

No build step. Either:

- Double-click `index.html` to open it directly in a browser, or
- Serve it locally for the most accurate behavior: `npx serve .` or
  `python -m http.server 8000`, then visit `http://localhost:8000`.

## Structure

```
amani-miami/
  index.html                  Home (all 16 sections from the brief)
  cars.html                   Fleet listing (filter/sort, query-param aware)
  cars/lamborghini-huracan-evo.html    Vehicle detail TEMPLATE
  services.html                Services overview (13 services)
  services/vip-airport-pickup.html     Service detail TEMPLATE
  yachts.html                  Yacht charter overview
  yachts/azure-horizon-82.html         Yacht detail TEMPLATE
  properties.html              Property overview (Amani VIP Estates)
  properties/brickell-sky-residence.html   Property detail TEMPLATE
  about.html, partners.html, vehicle-partners.html
  blog.html                    Article listing (14 supplied topics)
  blog/miamis-roaring-beasts-lamborghini-rentals.html   Article TEMPLATE
  faq.html, contact.html, personalized-requests.html
  terms-and-conditions.html, privacy-policy.html
  404.html, thank-you.html
  robots.txt, sitemap.xml
  assets/
    css/style.css              Full design system (tokens, type, components)
    js/icons.js                 Shared inline SVG icon set
    js/data.js                  CMS-shaped placeholder data (see below)
    js/chrome.js                 Injects header, mobile menu, footer, sticky bar
    js/render.js                 Card/grid renderers driven by data.js
    js/main.js                   Header scroll, menus, accordions, forms, reveal
```

## Template pattern — what's fully built vs. what to replicate

Building all ~40 pages the brief lists (6 service details, 10 vehicle
details, 5 yacht details, 4 property details, 14 articles, per-brand and
per-category landing pages, etc.) by hand would mean dozens of pages that are
structurally identical with different copy dropped in. Instead, **one fully
production-quality example of each detail-page type was built**, and it is
meant to be duplicated:

| Type | Built example | Replicate for |
|---|---|---|
| Vehicle detail | `cars/lamborghini-huracan-evo.html` | The other 9 sample vehicles in `data.js` |
| Service detail | `services/vip-airport-pickup.html` | Long-Term Rentals, Chauffeur, Wedding, Photoshoots/Productions, Corporate (copy direction for each is already specified in the master brief, section 15) |
| Yacht detail | `yachts/azure-horizon-82.html` | The other 4 sample yachts |
| Property detail | `properties/brickell-sky-residence.html` | The other 3 sample properties |
| Blog article | `blog/miamis-roaring-beasts-lamborghini-rentals.html` | The other 13 supplied topics |

To replicate: copy the template file, update the `<title>`/meta description/
canonical, swap the copy and spec table, and add a matching entry (or confirm
one already exists) in `assets/js/data.js` so the card grids and "related"
sections pick it up automatically. Card rendering, favorites, forms, reveal
animation and the header/footer are all inherited automatically — nothing
else needs to change.

Category and brand landing pages (`/cars/[brand]`, `/cars/[category]`) are
not built as separate pages; the mega menu and fleet filters link to
`cars.html?category=...&brand=...`, which pre-filters the grid client-side.
Dedicated SEO landing pages per location (section 34) are likewise a
next step, not yet built.

## Design system

- **Palette**: near-black canvas (`#0a0a0b`), champagne gold accent
  (`#c6a15b`), soft white text — restrained, not a bright-yellow "gold."
- **Type**: Fraunces (display serif, editorial) + Manrope (body/UI sans) —
  deliberately not Inter/Roboto/Arial/Space Grotesk.
- **No glassmorphism / no purple gradients** — hierarchy comes from size,
  weight and color; cards use a hairline border, not blur.
- Full token set (spacing, type scale, motion easing) lives at the top of
  `assets/css/style.css`.

## Content & data — everything here is a placeholder

Per the brief's own instruction ("do not invent fleet inventory, prices,
policies, addresses or testimonials"), **all business data in
`assets/js/data.js` is sample/CMS-shaped placeholder data**, clearly
commented as such in the file:

- **Vehicles, yachts, properties**: real-world model names/brands are used
  for realism, but the specific inventory, colors and specs are illustrative
  samples, not Amani Miami's actual fleet. Every price is `null` → renders as
  "Request Pricing."
- **Reviews**: no testimonial quotes or names are fabricated. The homepage
  and any review section show the official 5.0 / 81+ figures only, with a
  notice that individual review cards are pending a live Google Reviews
  integration.
- **Images**: there is no licensed photography available in this
  environment, so every image slot is an honest, labeled placeholder (dark
  gradient panel + caption, e.g. "Cinematic hero photography — pending final
  asset") rather than a fake or AI-looking stock photo standing in as real.
- **Legal pages**: Terms and Privacy are placeholder structures explicitly
  marked `noindex` and flagged for legal counsel review — not usable as-is.

Replace all of the above from verified CMS/business sources before launch.

## Forms

The lead-capture forms (`data-inquiry-form="..."`) were removed sitewide —
no backend/CRM was connected to receive them, so every page now points
visitors straight to Call, WhatsApp and email instead (plus a floating
WhatsApp bubble injected by `assets/js/chrome.js` on every page). The
footer newsletter signup (`data-newsletter-form` in `blog.html`) is
unrelated and still client-side only. If a real backend/CRM is connected
later, inquiry forms can be reintroduced on any page the same way they
were removed — this scaffold's original form markup is in git history.

## QA checklist (brief section 43, status against this scaffold)

**Brand** — Amani Miami name, black/gold/white system and tone are
consistent site-wide via the shared design system. ✅ Logo mark is a generic
placeholder sparkle icon — swap for the real logo file. ⚠

**Contact** — (305) 990-8111, info@amanimiami.com, and
instagram.com/luxury2008 are correct and driven from one place
(`SITE` object in `data.js`) so they can't drift between pages. ✅

**Content** — no invented pricing, testimonials, fleet inventory or
addresses; all marked as placeholder where real data is missing. ✅ Content
is in professional American English throughout. ✅

**UX** — keyboard-navigable menus, visible focus states, accessible mobile
menu/FAQ accordion, sticky mobile action bar, `prefers-reduced-motion`
respected. ✅ Formal automated accessibility audit (axe/Lighthouse) not yet
run — recommended before launch. ⚠

**Technical** — unique titles/meta descriptions per built page, canonical
tags, `robots.txt`, `sitemap.xml`, one `LocalBusiness` JSON-LD block on the
homepage (kept minimal deliberately — no `Offer`/`AggregateRating` schema on
listings, since pricing and per-item review data aren't verified). No
JavaScript build/bundle step to break. ✅ Real performance/Core Web Vitals
testing, and swapping placeholder panels for optimized real imagery, are
next steps once photography is available. ⚠

## Suggested next steps

1. Supply verified fleet/yacht/property inventory and real photography;
   replace `assets/js/data.js` and placeholder media blocks.
2. Connect forms to a real CRM/email endpoint.
3. Connect a live Google Reviews integration.
4. Replicate the five detail-page templates for the remaining sample items
   and the six service pages named in section 15.
5. Legal review of `terms-and-conditions.html` and `privacy-policy.html`.
6. If a dynamic backend/CMS is wanted later, migrate this structure to
   Next.js + TypeScript once Node.js is available in the environment.
