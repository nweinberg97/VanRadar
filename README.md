# VanRadar

**Discover what's being built in Vancouver.**

VanRadar is a lightweight discovery radar for the Vancouver tech ecosystem. Open it and start finding companies you didn't know existed — no accounts, no onboarding, no profiles.

Each company is intentionally tiny:

- name
- mark (a monogram tile)
- one-line description
- category
- website link

The restraint is the product. Funding, headcount, founders, reviews and contact details are deliberately out of scope.

## What's in it

- **Radar scope** — every company is a blip. Twelve categories map to twelve 30° sectors. Click a sector to filter, click a blip to jump to that company.
- **Search** — word-start matching with query expansion, so `AI` also finds robotics and voice companies, `healthcare` finds clinics and medtech, `climate` finds hydrogen and carbon capture. Matches are highlighted. Press `/` to focus, `Esc` to clear.
- **Category filters** — chips with live counts that follow the current search.
- **Feed** — a dense index of signal cards. Default order is "Today's mix" (a shuffle that changes once a day), plus A–Z and Shuffle.
- Light and dark themes, reduced-motion support, works at phone width. `#bio`, `#climate`, etc. deep-link to a category.

## Run it

No build step and no dependencies. Open `index.html` in a browser, or serve the folder:

```sh
python3 -m http.server 8000
# then visit http://localhost:8000
```

It deploys as-is to GitHub Pages, Netlify, Vercel or any static host.

## Project layout

```
index.html          page shell
styles.css          design tokens + layout (light/dark)
app.js              search, filters, feed rendering, radar scope
data/companies.js   the seed index
```

## Adding a company

Append an entry to `data/companies.js`:

```js
{ n: "Company Name", l: "One plain-language line about what it does", c: "ai", u: "https://example.com", k: "hidden search keywords" }
```

Category ids: `ai`, `quantum`, `bio`, `health`, `climate`, `fintech`, `software`, `marketing`, `commerce`, `mobility`, `media`, `earth`.

Inclusion bar: headquartered or substantially operating in Greater Vancouver, building technology, and still independent and operating.

## About the data

The seed index is hand-curated from public information as of October 2026. Companies change — get acquired, rebrand, move — so treat entries as a starting point and correct them freely. Marks are generated monograms rather than official logos.

## Roadmap

- Automated discovery from public sources (accelerator cohorts, BC tech news, job boards, incorporation filings) feeding a review queue
- Real logos via favicon/brand fetch with monogram fallback
- "New this month" signals
