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

- Services (4): Application Development, Mobile Development, Business
  Intelligence, Assistance, `data/services.yaml`, icons in
  `assets/images/services/`.
- Showcase (3): Oome (oome.com.au), Conductor (conductor-app.com), Nomolos
  Architecture (nomolos.co.nz), `data/showcase.yaml`, images in
  `assets/images/showcase/`.
- Contact: phone (+61) 402 005 372; emails info@ / sales@ / support@; single
  office in Newcastle, NSW (the old Cape Town branch was dropped at Jean's
  request, no longer listed, and the contact map image was removed).

## Tech logos

`assets/images/tech/` logos were refreshed with current official versions from
Wikimedia Commons (mostly SVG; JavaScript and Linux/Tux are PNG). Each tech in
`data/technology.yaml` has a `url` to its official site. If refreshing again,
Wikimedia's `Special:FilePath/<Filename>` redirect is the reliable fetch route
(direct `/wikipedia/commons/x/xx/` hash paths often 404).

## Placeholders still to replace

- **Contact form** posts to a placeholder Formspree endpoint, the `action` URL
  in `content/contact.md` needs a real form handler.
- No ABN is shown (the old site didn't publish one). Add to
  `[params.business]` + footer if wanted.

## Commands

```sh
hugo server -D    # dev (Jean typically runs this themselves)
hugo --gc         # production build; check output for WARN/deprecated lines
```

## Open questions / future

- Only social channel is LinkedIn for now; `[[params.socials]]` is a list so
  more can be appended.
- No About page yet, not requested, but a natural addition.
- Consider individual showcase detail pages (leaf bundles) if projects need
  more than a card; would move from `data/showcase.yaml` to
  `content/showcase/<project>/`.
