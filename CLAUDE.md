# CLAUDE.md

Working notes for this project — context, conventions, and things to circle back
to between sessions.

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
- Taxonomies are disabled (`disableKinds`) — no tags/categories on this site.
- `markup.goldmark.renderer.unsafe = true` is on so inline HTML (e.g. the
  contact form) renders from Markdown.

## Placeholders to replace with real values

These are stand-ins the client (Jean) needs to confirm:

- **ABN** `00 000 000 000` and legal name `Shuntyard Pty Ltd` — `hugo.toml`
  `[params.business]`.
- **LinkedIn URL** — guessed as `/company/shuntyard` in `hugo.toml`
  `[[params.socials]]`.
- **Contact form** posts to a placeholder Formspree endpoint — the `action` URL
  in `content/contact.md` needs a real form handler.
- **Showcase projects** in `data/showcase.yaml` are all placeholders.
- Email is `hello@shuntyard.com` (in `hugo.toml`). Confirm this is monitored.

## Commands

```sh
hugo server -D    # dev (Jean typically runs this themselves)
hugo --gc         # production build; check output for WARN/deprecated lines
```

## Open questions / future

- Only social channel is LinkedIn for now; `[[params.socials]]` is a list so
  more can be appended.
- No About page yet — not requested, but a natural addition.
- Consider individual showcase detail pages (leaf bundles) if projects need
  more than a card; would move from `data/showcase.yaml` to
  `content/showcase/<project>/`.
