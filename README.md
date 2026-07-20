# Shuntyard

Marketing website for Shuntyard, a software development company.

A static site introducing what we do, the projects we've delivered, the
technology we prefer, and how to get in touch.

## Tools

- **[Hugo](https://gohugo.io/)** (extended, v0.164+) — static site generator
- **[Pico CSS](https://picocss.com/)** (v2) — minimal, classless-friendly CSS
  framework, vendored at `assets/css/pico.min.css`
- Vanilla JavaScript for the responsive navigation toggle
- Hugo Pipes for bundling, minifying, and fingerprinting CSS/JS assets

## Structure

```
content/            Page content (Markdown + front matter)
data/               Editable card data: services, showcase, technology
layouts/            Templates (baseof, home, page, per-section) + _partials
assets/css|js       Pico, custom styles, and the nav script
assets/images/      Logo and other images
hugo.toml           Site config: menus, params (business details, socials)
```

Structured card content lives in `data/*.yaml` so copy can be edited without
touching templates.

## Develop

```sh
hugo server -D      # live-reload dev server at http://localhost:1313
hugo --gc           # production build into public/
```

## Deploy

Build with `hugo` and publish the generated `public/` directory to any static
host.
