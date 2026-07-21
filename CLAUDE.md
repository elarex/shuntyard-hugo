# CLAUDE.md

Working notes for this project: context, conventions, and things to circle back
to between sessions.

## Writing rules

- **Never use em-dashes (—) anywhere, ever.** Not in site copy, content, data,
  config, comments, commit messages, or these notes. Rewrite with commas,
  colons, full stops, or restructured sentences instead. (Client preference.)

## What this is

Marketing site for **Shuntyard** (software development company, Australian
business). Hugo + Pico CSS. Custom layouts, no external Hugo theme.

## Key conventions

- **Hugo 0.164**, using the current template system: templates live at
  `layouts/baseof.html`, `layouts/home.html`, `layouts/page.html`, and
  `layouts/<section>/section.html`. Partials are in `layouts/_partials/`.
  (Not the legacy `_default/` + `partials/` layout.)
- **Card content is data-driven.** Services, showcase, and technology render
  from `data/*.yaml`, not from per-item content files. Add/edit cards there.
  Prose intros live in the matching `content/<section>/_index.md` front matter
  (`lead`) and body.
- **Assets** are processed through Hugo Pipes in `_partials/head.html`: Pico +
  `custom.css` are concatenated → minified → fingerprinted. Edit
  `assets/css/custom.css`, never the built bundle. Pico is vendored (no CDN).
- **Nav:** always-visible sticky top bar; collapses to a hamburger **below
  1024px** (`assets/js/nav.js` + media queries in `custom.css`). The 1024px
  breakpoint is intentional (client request).
- **Locale** is `en-au` (set via `locale`, not the deprecated `languageCode`).
- Taxonomies are disabled (`disableKinds`), no tags/categories on this site.
- `markup.goldmark.renderer.unsafe = true` is on so inline HTML (e.g. the
  contact form) renders from Markdown.

## Content source

Real content was migrated from the existing WordPress site at
https://www.shuntyard.com/ (single-page site). Copy, showcase projects,
service descriptions, and contact details are taken verbatim from there.
Company name is **Shuntyard Technologies**; tagline **"Business Systems.
Business Sense."**

- Services (3): Application Development, Artificial Intelligence, Expert
  Assistance. `data/services.yaml`, icons in `assets/images/services/`. Mobile
  Development and Business Intelligence were removed per Jean's request
  (specializes in web applications).
- Showcase (3): Oome (oome.com.au), Conductor (conductor-app.com), Nomolos
  Architecture (nomolos.co.nz), `data/showcase.yaml`, images in
  `assets/images/showcase/`.
- Contact: phone (+61) 402 005 372; emails info@ / sales@ / support@; single
  office in Newcastle, NSW (265 Wharf Road, Newcastle NSW 2300). The old Cape
  Town branch was dropped at Jean's request, no longer listed, and the contact
  map image was removed. No contact form: uses direct `mailto:` and `tel:` links
  plus a "What to expect" process list.

## Tech logos

`assets/images/tech/` logos were refreshed with current official versions from
Wikimedia Commons (mostly SVG; JavaScript and Linux/Tux are PNG). Each tech in
`data/technology.yaml` has a `url` to its official site. If refreshing again,
Wikimedia's `Special:FilePath/<Filename>` redirect is the reliable fetch route
(direct `/wikipedia/commons/x/xx/` hash paths often 404).

## Favicons

Favicons generated (SVG + PNG variants) and stored in `assets/images/` and
`static/`, but **not yet wired into head.html**. To complete: add these lines
to `layouts/_partials/head.html` after the canonical link:

```html
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
```

(SVG is served from assets as favicon.svg; 32px and 180px PNGs are in assets;
favicon.ico is in static/ for legacy browser fallback.)

## Footer

ACN 669 558 427 displayed in footer with company legal name "Shuntyard
Technologies Pty Ltd" and a verified badge icon. Removed from copyright text,
which now reads only "© YEAR Shuntyard Technologies Pty Ltd. All rights
reserved."

## Deployment

Site is live at **https://shuntyard.com/** on DigitalOcean App Platform (static
site, auto-deploys on push to main). HTTP redirects to HTTPS. DNS is DO-managed.

- **Apex domain (shuntyard.com):** Active, Let's Encrypt cert valid, resolves to
  app IPs (172.66.0.96 / 162.159.140.98).
- **www.shuntyard.com:** Attached as alias, auto-configured for 301 redirect to
  apex. DNS propagating through public resolvers (TTL cache expiry ~1 hour from
  2026-07-20). Authoritative DO nameserver shows correct CNAME. If www still
  serves old droplet IP, wait for TTL to expire; do not force it.

Build command uses HUGO_VERSION=0.164.0 (extended) to ensure WebP processing
works. baseURL is https://shuntyard.com/ (production apex, not preview). No
noindex or preview env vars set.

## Pricing & rates

Day rate is **$950 ex GST** (`content/pricing.md`). NSW rate benchmarks, sources,
and positioning notes are recorded in `README.md` (found 2026-07-20).

## Commands

```sh
hugo server -D    # dev (Jean typically runs this themselves)
hugo --gc         # production build; check output for WARN/deprecated lines
```

## Pending tasks

- **Favicon wiring:** Favicon files exist but not linked in head.html. See
  "Favicons" section above for the exact lines to add.

## Open questions / future

- Only social channel is LinkedIn for now; `[[params.socials]]` is a list so
  more can be appended.
- No About page yet, not requested, but a natural addition.
- Consider individual showcase detail pages (leaf bundles) if projects need
  more than a card; would move from `data/showcase.yaml` to
  `content/showcase/<project>/`.
- www.shuntyard.com DNS propagation: as of 2026-07-20, old public resolvers
  (1.1.1.1, 9.9.9.9) still serving stale cached IP (170.64.140.133). Will
  resolve naturally in ~1 hour when old TTL (3600s) expires. Authoritative
  DO zone is correct. No action needed unless old IP is still cached after
  ~2 hours from 2026-07-20.
