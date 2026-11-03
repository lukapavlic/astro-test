# Agentic Lab

A complete bilingual research-lab website for Agentic Lab, connected to the Information Systems Laboratory (LIS), Institute of Informatics, UM FERI, University of Maribor.

Built with **Astro, TypeScript, Tailwind CSS and Astro Content Collections**. Every page is prerendered. No backend, CMS, database, client framework, tracking or runtime API requests. Professional portraits and the variable Manrope font are served locally.

## Run locally

Use **Node.js 22.23.4+** (Node 24 LTS or newer recommended) and npm.

```sh
npm ci
npm run dev
```

Open the printed local URL (normally `http://127.0.0.1:4321`). `/` forwards to `/sl/`; `/en/` is the English homepage. The default server listens on loopback only.

```sh
npm run check    # Astro and TypeScript diagnostics
npm run build    # static output in dist/
npm run preview  # serve the production build
npm run verify   # check + build + internal links/content assertions
npm audit       # dependency security advisory check
```

## Repository map

```text
src/
  content.config.ts       validated collection schemas
  content/
    research/{sl,en}/     six focus areas and topics
    references/{sl,en}/   investigations, methods, publications, etc.
    events/{sl,en}/       events, including explicitly fictional demo
    people/{sl,en}/       core profiles and external collaborators
    services/{sl,en}/     six industry collaboration formats
    pages/{sl,en}/        editable page introductions and narratives
  components/             native Astro UI and small browser scripts
  layouts/Layout.astro    shared HTML, first-paint theme, metadata
  lib/site.ts             navigation, labels, URLs
  lib/events.ts           timezone-aware static calendar selection
  pages/                  static list/detail routes, sitemap and 404
  styles/tokens.css       font, colour, spacing and theme source of truth
  styles/global.css       shared composition and responsive rules
public/images/            four institutional portraits and social image
scripts/verify.mjs        generated-page, link, language and fallback checks
docs/                     specification, plan, provenance, verification
```

## Edit content without knowing Astro

Open a `.md` file in `src/content`. The block between `---` lines is metadata; text below it is Markdown. Quoted strings, lists and booleans are ordinary YAML. Existing examples use JSON-style quoted values, which are valid YAML too. Copying a similar existing file is the easiest starting point.

Every entry has `lang`, `key`, `title`, `shortDescription` and `order`. Lower `order` appears first. The **same filename and `key`** must exist in `sl/` and `en/`. Translate prose and labels; keep identifiers, contributor keys, dates, source links and factual bibliographic data aligned. English and Slovenian files sit beside one another inside each collection. UI labels and navigation live in `src/lib/site.ts` and native components.

URLs deliberately use stable section/key identifiers in both languages: `/sl/references/agent-ready-repositories/` ↔ `/en/references/agent-ready-repositories/`. SL/EN preserves the current page. No translation plugin is needed.

### Add or edit a research area

Copy `research/en/agentic.md` and its `sl` partner. Choose a unique `key`, set `accent` to `agentic`, `ai4se`, `quality`, `devops`, `architecture` or `ux`; edit `topics`, description and body. The research list and detail page update automatically. The six homepage short names correspond to the initial research order in `src/pages/[lang]/index.astro`; adjust those only when changing the portfolio structure.

### Add a reference

Copy a matching entry under `references/en/` and `references/sl/`. Supported `type` values:

```text
research-project  publication  experiment  prototype
case-study       method       pattern     tool
```

Set `featured: true` to show it on the homepage. Optional fields include `year`, `status`, `authors`, `contributors`, `externalUrl`, `doi`, `image`; use a theme `accent` and `tags`. `contributors` contains person **keys**, not names, and automatically connects references to person pages. Filter groups are assigned from type in `src/lib/site.ts`. Do not present an investigated pattern as a proven finding.

### Add a scientific publication

Copy `references/en/agile-effort-estimation.md` and its Slovenian partner. Keep the official title and author spelling. Set `type: publication`, `year` (journal issue year), `journal`, `volume`, `issue`, `articleNumber`, `doi`, `externalUrl`, `publishedOnline` (ISO date), `authors` and `sources`. Write a short original summary supported by the source, translate it and record verification in `docs/SOURCES.md`. The first initial paper was published online in December 2023 in a 2024 issue; the site distinguishes both dates.

### Add an event

Copy the existing demo into both language directories. Choose `eventType`: `public-talk`, `invited-talk`, `workshop`, `seminar`, `conference`, `research-seminar`, `industry-event` or `training`. Supply an ISO `date` (include timezone if using a time), optional `endDate`, `location`, `status: upcoming` or `past`, `price`, optional `speakers` and `externalUrl`. Use `demo: false` only for a verified real event.

Events are sorted by date. The homepage selects the earliest upcoming entry automatically **at build time**; old dates also move to the archive even if their status has not been edited. A date remains current through its event day. **Rebuild regularly to advance a static event calendar.** With no upcoming event the homepage block is omitted and the Events page explains the empty state. The initial 26 November 2026 event is fictional, labelled in source and every public event presentation, and has no registration or fabricated venue.

### Add or edit a person / replace a photo

Edit `people/<lang>/<key>.md`. Use `memberType: core`, verified `academicRole`, institutional `email`, `researchAreas` and only verified links. For an image, add a properly licensed/authorized professional photo under `public/images/` and set `image: /images/filename.jpg` in both files. Source attribution for existing official photographs is recorded in `docs/SOURCES.md`; no broader image licence is claimed. Photos are cropped with `object-fit: cover`; adjust `object-position` in `global.css` if necessary.

Omit `image` to use the designed initials profile. It does not impersonate a person and works in both themes. Omit unavailable fields entirely; do not use empty fake URLs. Four core people have official photos; the other four and all collaborators use initials. Core members automatically receive detail pages. Add `contributors: ["person-key"]` to a reference to show it on that profile.

**Leadership truth:** Luka Pavlič is Head of Agentic Lab and Head of LIS. All other core members are members. Older institutional leadership text cannot override this repository.

### Add an external collaborator

Copy `people/en/tjan-kazar.md` and the Slovenian version. Set name/key, `memberType: collaborator`, translated collaborator role and `order`. A name and role are enough; do not invent affiliation, email, biography or interests. Collaborators appear in a separate section and do not get empty detail pages.

### Edit Industry Collaboration and About

Edit `services/{en,sl}/*.md` for assessment, pilots, workshops, consulting, architecture and joint R&D. Edit `pages/{en,sl}/industry.md` for the opening and shared approach. `pages/{en,sl}/about.md` holds the institutional context and mission; `research.md` holds research philosophy and activities. Page introductions for all sections are in `pages`. Common CTA copy and presentation labels live in their small Astro components. Contact uses the verified `luka.pavlic@um.si` address; no special lab inbox is invented.

## Design, typography and themes

**Manrope Variable** is self-hosted through `@fontsource-variable/manrope`; no visitor request goes to Google Fonts. Change **`--font-body`** in `src/styles/tokens.css` to change the site font in one place. `--font-display` inherits it. When installing a different font, also replace the package import at the top of `src/styles/global.css`.

Research theme colours, matching soft backgrounds, and dark-theme equivalents are all in **`tokens.css`**. The six accent names are also content metadata; components use `data-accent`, not scattered hex codes. The same file holds base text size, line height, width, gutters, section spacing and corner radius. Layout-specific responsive rules remain with their components/shared CSS. Tailwind provides small layout utilities; the identity is expressed through centralized tokens.

The palette uses warm paper neutrals and olive for the lab identity, with violet, blue, teal, orange, coral and ochre for research. Dark mode uses green charcoal surfaces and individually tuned lighter accents. Diagrams encode engineering processes and evidence transfer; no decorative AI imagery.

Theme starts in **System**. A synchronous script in `Layout.astro` applies the OS preference before content paints. The compact labelled native select provides System/Light/Dark; explicit choices persist as `agentic-theme` in localStorage. Selecting System removes that override. OS changes are observed live; storage failures do not break the site. Reduced-motion preference disables movement. The mobile menu uses native `<details>` and closes with Escape; navigation works without JavaScript. Reference filters progressively enhance an already visible full list.

## Static deployment

Set the actual production origin using `SITE_URL`; do not add a guessed lab domain. This enables absolute canonical, OpenGraph/hreflang, sitemap and robots URLs. Without it, development uses relative URLs and the sitemap is intentionally empty. Astro loads `.env` in local builds, or set host build environment variables. `BASE_PATH` defaults to `/`.

**Cloudflare Pages:** build `npm run build`, output `dist`, supported Node version, no adapter or Workers needed.

**Netlify:** the included `netlify.toml` uses the same command/output. Set `SITE_URL` to the actual site origin.

**GitHub Pages:** use the included workflow (Actions permissions are limited to Pages deployment). For project Pages set the repository variable `BASE_PATH=/repository-name` and `SITE_URL=https://your-account.github.io`; use `/` for custom-domain/user Pages. Enable Pages via GitHub Actions, then manually run the workflow when you intend to deploy. No deploy is performed by local development or verification. If using your own workflow, upload only `dist/` after `npm ci && npm run build`.

```sh
SITE_URL=https://your-actual-domain.example npm run build
# Example project subpath; replace with real values:
SITE_URL=https://your-account.github.io BASE_PATH=/repository-name npm run build
```

The second example is illustrative configuration, not a claimed deployment. Internal routes, language links, assets and metadata use the same base helper. There are no SPA rewrites or runtime requirements.

## Sources and checks

See `docs/SOURCES.md` for institutional/publisher provenance, portrait credits and factual limitations, and `docs/VERIFICATION.md` for actual checks. `docs/SPEC.md` has stable acceptance IDs; `docs/PLAN.md` tracks implementation. No external service is needed to build from the committed content and local assets.
