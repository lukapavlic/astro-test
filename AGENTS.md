# Agentic Lab — repository instructions

- Keep a fully static Astro site. Prefer native Astro, TypeScript and minimal browser JavaScript. No React, Vue, Svelte, backend, database, CMS or authentication without explicit requirements.
- Put editable content in `src/content/<collection>/<sl|en>/*.md`. Pair translations using the same `key` and filename. Update both languages together. Keep the same section/key URL in both languages.
- Schemas: `src/content.config.ts`. Routing, URL/base helpers and labels: `src/lib/site.ts`. Calendar day logic: `src/lib/events.ts`. Page composition: `src/pages`. Reusable UI: `src/components`.
- Design source of truth: `src/styles/tokens.css`. Configure font families and research accent colours there; never scatter font declarations or research hex codes across components. Preserve light/dark/system themes, persistence and first-paint handling.
- Preserve keyboard access, contrast, semantic headings, responsive layouts, reduced-motion support, sticky navigation and equivalent-page language switching.
- Do not invent factual biographies, titles, contacts, publications, research results, funding, clients or events. See `docs/SOURCES.md`. Research directions are investigations, not validated results. The November 2026 demo event is fictional and must stay visibly labelled until replaced.
- Authoritative leadership: Luka Pavlič is Head of Agentic Lab and Head of the Information Systems Laboratory. All other core people are members. This repository and the user’s leadership information override outdated public institutional leadership claims.
- Core people: Luka Pavlič, Marjan Heričko, Tina Beranič, Viktor Taneski, Alen Rajšp, Vasilka Saklamaeva, Lidija Vincekovič, Luka Četina. External collaborators: Tjan Kazar, Tanej Buhin, Matic Kuhar, Patrik Kocmut, Ismar Mujezinović. Do not add unsupported collaborator details.
- Use real verified professional portraits or the initials fallback. Do not add generic AI art, node networks, robots or decorative circuit graphics.
- Keep dependencies minimal. Do not add unrequested features, analytics or cookie banners.
- Run `npm run verify` before completing changes. Inspect the result visually for layout changes. Always use Safari for browser work. Update `docs/PLAN.md` and `docs/VERIFICATION.md` when relevant. Do not claim unperformed checks passed.
- Do not deploy or push unless explicitly requested. Production origin and base are supplied through `SITE_URL` and `BASE_PATH`; never invent a production domain.
