# Verification — 3 November 2026

## Automated checks actually run

| Check | Actual result |
| --- | --- |
| `npm install` | Installed dependencies; updated Astro after initial audit exposed older-version advisories. Lockfile included. |
| `npm run check` (part of final `npm run verify`) | **0 errors, 0 warnings, 0 hints** across 23 checked files. |
| `npm run build` (part of final verification) | **Passed: 64 static HTML pages.** No backend adapter or runtime service. |
| `node scripts/verify.mjs` | **Passed:** 62 translated routes, 1,989 internal links/assets; equivalent language routes, correct language metadata, titles/descriptions, single h1, no skipped heading levels, alt attributes, local images, cross-page anchors, default portraits and collaborators with absent optional fields. |
| `node scripts/check-calendar.mjs` | **Passed:** 5 local-day, timezone, multi-day, explicit past-status and date-only cases. |
| Subpath build: `SITE_URL=https://agentic-lab.test BASE_PATH=/agentic-lab npm run verify` | **Passed:** 64 pages, 62 translated routes and 1,863 internal links/assets. Absolute metadata links are excluded from the internal-link count. The `.test` origin was used only for this check; no production domain is claimed. |
| Additional subpath metadata inspection | **Passed:** 62 sitemap URLs with the test origin/base, correct canonical, language and photograph URL generation. Rebuilt afterward with normal local configuration. |
| `npm audit --json` with network access | **Passed: 0 vulnerabilities.** An initial sandbox DNS failure was rerun successfully with network permission. |
| Python HTMLParser pass over generated HTML | **Passed:** unique IDs, main landmarks, image alternatives and no unrequested embedded services/forms across 64 pages. |
| Contrast calculation from actual theme tokens | **Passed:** 22 foreground/background pairs meet **4.5:1**; lowest tested pair **4.56:1**. Values in `contrast.json`. This is a token-level calculation, not a complete automated browser accessibility audit. |
| Content/institution external URL requests | **24 URLs checked.** Institutional pages, Crossref, GitHub and ORCID: 200. MDPI/DOI: 403; LinkedIn: 999 automated-access restriction. Raw results in `external-links.json`; provenance in `SOURCES.md`. |

The final normal-base build is in `dist/`; no test origin is embedded in it. There is no lint command configured, and no lint result is claimed.

## Safari review actually performed

Using the requested Safari browser through native computer-use controls:

- Viewed English and Slovenian homepages; reviewed hero typography, thematic research composition, section rhythm, official portraits and footer.
- Inspected the About page and individual Luka Pavlič profile, including the correct leadership role, verified contact and automatically related publications.
- Clicked SL on the English person detail page and verified navigation to the equivalent Slovenian profile and translated interface/content.
- Selected Dark using the keyboard, visually reviewed its surfaces, text, thematic accents and focus outline; navigated to References and verified persistence.
- Selected explicit Light and visually inspected it. Selected System afterward and observed the light system appearance. Live OS-theme switching was not tested by changing the user's OS settings.
- Selected Publications and verified that exactly two entries remained, the selected state updated and the accessible live message announced “2 references shown”. Also observed the restored full list.
- Scrolled the homepage and References; the compact header remained visible.
- Reviewed keyboard operation of the theme select and its visible focus state. Full screen-reader testing is not claimed.
- Tried Safari's available zoom and window-sizing controls. Zoom exercised the compact navigation breakpoint, but did **not** provide a reliable phone-size viewport for a full mobile visual review. Returned the site to Actual Size and System theme.

### Visual fixes made

1. Applied the central base size to the root so rem-based body text matches the intended readable scale.
2. Corrected collaboration-section hash links and added cross-page anchor checks.
3. Put default heading/paragraph margins in Tailwind's base layer so spacing utilities work as intended.
4. Added section h2 headings where list rows otherwise skipped from h1 to h3.
5. Added zero-minimum hero grid tracks to avoid intrinsic-width overflow at intermediate sizes.
6. Tuned compact header controls and retained content-specific section compositions.

## Remaining verification limit

**A true mobile-width Safari visual review and mobile-menu interaction test remain pending.** Safari's developer menu is disabled. A request to temporarily enable “Show features for web developers” for the responsive preview was sent; it has not yet been approved. The preference has not been changed. Responsive CSS is implemented for desktop, tablet and phone widths, but implementation alone is not recorded as a passed visual check.

No Playwright/Lighthouse/axe audit, real-device test, broad cross-browser test or production hosting test was run. No deployment or remote push occurred.

## Remaining replaceable content/configuration

- The 26 November 2026 event is explicitly fictional and labelled on all event presentations. Replace it with verified real event information when ready.
- Four core members and five external collaborators use designed initials profiles; add authorized real photographs if available.
- Some official member pages have no research-interest detail; those profiles remain concise and do not invent tags.
- Set the real `SITE_URL` (and `BASE_PATH` for project Pages) at deployment to generate production canonicals and sitemap. Without an origin, development intentionally has relative metadata and an empty sitemap.
- Static calendar selection advances when rebuilt; no runtime event API or scheduled deployment was added.
