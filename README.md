# Shuntyard

Marketing website for Shuntyard, a software development company.

A static site introducing what we do, the projects we've delivered, the
technology we prefer, and how to get in touch.

## Tools

- **[Hugo](https://gohugo.io/)** (extended, v0.164+), static site generator
- **[Pico CSS](https://picocss.com/)** (v2), minimal, classless-friendly CSS
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

## Pricing reference

Our published rate is **$950 per day (ex GST)**, set in `content/pricing.md`.

### NSW / Sydney market benchmarks (found 2026-07-20)

Indicative market figures for web/software development rates in NSW, gathered
from salary and recruitment sources (aggregated data, not direct competitor
quotes). Day-rate equivalents assume an 8-hour day.

| Segment | Typical rate | Day-rate equivalent |
|---|---|---|
| NSW web developers (agency/contract) | AU$90 to $150/hr | ~$720 to $1,200/day |
| Australian agencies (general) | AU$100 to $160/hr | ~$800 to $1,280/day |
| Sydney enterprise / high-end firms | AU$200 to $300/hr | ~$1,600 to $2,400/day |
| Sydney full-stack contractor day rates | $1,000 to $1,150/day + super | $1,000 to $1,150/day |
| Senior software engineer contracts (Sydney) | up to $1,100 to $1,200/day | $1,100 to $1,200/day |

Context: a fully-burdened senior in-house developer in Sydney costs roughly
AU$185k to $200k+/year (salary, super, leave, overheads). Sydney rates typically
run 20 to 30% above regional NSW.

Sources:

- Clicks IT Recruitment, Web Developer salary & rates: https://clicks.com.au/job-salary/web-developer/
- DevTechnosys, cost to hire web developers by Australian state: https://devtechnosys.com/insights/cost-to-hire-web-developers-in-australia/
- PayScale, Web Development hourly rate (Australia): https://www.payscale.com/research/AU/Industry=Web_Development/Hourly_Rate
- SEEK, senior software engineer contract/temp roles: https://www.seek.com.au/senior-software-engineer-jobs/contract-temp
- Indeed, software developer day-rate jobs (Australia): https://au.indeed.com/q-software-developer-day-rate-jobs.html
- Abbacus Technologies, how much does a developer cost in Australia: https://www.abbacustechnologies.com/how-much-does-a-developer-cost-in-australia/
