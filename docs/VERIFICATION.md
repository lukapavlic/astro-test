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

- The initial fictional event was replaced with user-confirmed real event information on 5 November 2026; see the update below.
- Four core members and five external collaborators use designed initials profiles; add authorized real photographs if available.
- Some official member pages have no research-interest detail; those profiles remain concise and do not invent tags.
- Set the real `SITE_URL` (and `BASE_PATH` for project Pages) at deployment to generate production canonicals and sitemap. Without an origin, development intentionally has relative metadata and an empty sitemap.
- Static calendar selection advances when rebuilt; no runtime event API or scheduled deployment was added.

## Reference expansion — 4 November 2026

- `npm run verify` passed after the publication and template changes: **0 errors, 0 warnings, 0 hints** across 23 files; **72 static HTML pages**, **70 translated routes**, **2,313 internal links/assets**, and all **5 calendar cases** passed.
- An additional assertion pass over generated HTML confirmed all four new publications link bidirectionally with every mapped author profile and research area in **both languages**, the new testing review is featured on both homepages, and the chapter page range is present in both languages.
- Safari desktop visual review: inspected the Slovenian reference list and selected **Objave**; the accessible live message reported **6** publications. Inspected the new Springer chapter detail, including the wrapping title, summary, linked author, book/series information, page range, DOI, distinct Crossref/Springer source labels and related research link. Followed that research link and confirmed the AI4SE page lists its four related publications.
- During the development review, the running server initially retained an outdated content schema and omitted the newly added relationship/page fields. Restarting alone did not refresh it; changing the content configuration triggered a full content resync. The chapter then returned HTTP 200 and rendered the new fields and links correctly. Debug logging was removed. Static verification passed independently.
- No mobile-width review or additional theme audit was performed for this change; the earlier mobile verification limitation remains. No deployment or push occurred.

## Past-event archive — 4 November 2026

- Final `npm run verify` passed: **0 errors, 0 warnings, 0 hints** across 24 files; **78 static HTML pages**, **76 translated routes**, **2,571 internal links/assets**; all **5 calendar cases** passed.
- Additional generated-HTML assertions passed for all three events in both languages: explicit past/non-demo status; archive placement in reverse chronological order; absence from the upcoming homepage feature; bidirectional links with every mapped core speaker profile, research area and publication. Nadica Uzunova remains credited without inventing a profile or membership.
- Safari desktop: visually inspected the past-event archive, including the September 2026 cards and their historical labels; the accessibility tree confirmed all three archived entries and verified dates. Opened the Evolucija.AI talk and visually inspected the full supplied Slovenian abstract, status/date/venue/Programi metadata and research links. Followed the linked speaker to Luka Pavlič’s profile and confirmed the reciprocal event entry in its “Predavanja in delavnice” section.
- The new conference-talk label is bilingual. Existing demo event cards now explicitly say “Fictional demo event” / “Izmišljen demo dogodek”, matching the detail-page warning.
- `git diff --check` passed. No mobile-width or additional theme audit was performed for this update. No deployment or push occurred.

## Homepage affiliation strip — 4 November 2026

- Removed the affiliation strip and its unused desktop/mobile CSS from the shared bilingual homepage template.
- `npm run verify` passed: 0 errors/warnings/hints; 78 static pages, 76 translated routes, 2,569 internal links/assets, and all 5 calendar cases.
- Safari desktop visual review confirmed the Slovenian hero now leads directly into the six research perspectives, with normal section spacing and no affiliation strip.

## Real upcoming event — 5 November 2026

- `npm run verify` passed: 0 errors/warnings/hints across 24 files; 78 static pages, 76 translated routes, 2,569 internal links/assets; all 5 calendar cases passed.
- Both translations now use the user-confirmed title, description, topics and 3 December 2026, 09:00–13:00 Ljubljana timestamps, with `demo: false`. Existing URLs, location and admission are preserved. Featured cards, related rows and detail metadata share the localized date/time-range formatter; date-only archive entries keep date-only labels.
- Safari desktop: visually inspected the Slovenian detail heading, description and date/time panel; switched to the equivalent English page and inspected the description/program layout. Accessibility state confirmed both updated titles, date/time range, all 11 topics per language, upcoming status and absence of a fictional-event notice.
- No mobile-width or additional theme audit was performed. No deployment or push occurred. Browser work uses Safari, as requested.

## People tags — 5 November 2026

- `npm run verify` passed: 0 errors/warnings/hints; 78 static pages, 76 translated routes, 2,569 internal links/assets and all 5 calendar cases.
- Generated-HTML assertions confirmed all tags render on the three updated profiles in both languages, without duplicate tags. No old “Agilne metode” / “Agile Methods” label remains in people content.
- Safari desktop visual review of Luka Pavlič’s English profile confirmed the seven tags wrap cleanly, including Software Engineering and Agile Development Methods. Other profiles were checked in generated HTML; no additional mobile or theme review was performed.

## Event registration — 6 November 2026

- `npm run verify` passed: 0 errors/warnings/hints across 24 files; 78 static pages, 76 translated routes, 2,569 internal links/assets; all 5 calendar cases passed. `git diff --check` passed.
- Generated-HTML assertions confirmed the registration CTA and exact DIGI-SI destination on both homepages, both event lists and both event details.
- Safari desktop visual review: inspected the Slovenian event detail and its registration button beneath the metadata; inspected the English event list with the registration button beside the event-details link. Buttons, venue and pricing text render cleanly. Safari accessibility state confirmed the exact registration destination.
- The development server initially omitted the new schema field; changing the content-config comment triggered a full resync and the CTA then appeared. Static generation already contained the field.
- No mobile-width or additional theme audit was performed. No registration was submitted, and no deployment or push occurred.

## Footer institutional links — 6 November 2026

- `npm run verify` passed: 0 errors/warnings/hints; 78 static pages, 76 translated routes, 2,569 internal links/assets; all 5 calendar cases passed. `git diff --check` passed.
- Safari desktop: visually inspected the English footer; laboratory, institute and faculty names retain their line spacing, and the university is a separate correctly labelled link. Accessibility state confirmed all four destinations. Shared bilingual template applies the same URLs to Slovenian labels.
- The institute URL was omitted in the request (its name was repeated); the supplied `https://ii.feri.um.si/sl/` is used for both laboratory and institute, including the existing bottom-row institute link. No mobile-width or additional theme review was performed.

## People roles — 6 November 2026

- `npm run verify` passed: 0 errors/warnings/hints; 78 static pages, 76 translated routes, 2,569 internal links/assets; all 5 calendar cases passed. `git diff --check` passed.
- Generated HTML confirms corrected roles in all four translated profiles and both people lists. Lidija’s short description and body also use the new role.
- Safari desktop: visually inspected Lidija’s Slovenian profile, including the role and updated description; accessibility state confirmed Viktor’s Slovenian profile says Docent. No mobile-width or additional theme review was performed.

## Reference-derived logo — 6 November 2026

- Final `npm run verify` passed: 0 errors/warnings/hints across 24 files; 78 static pages, 76 translated routes, 2,646 internal links/assets; all 5 calendar cases passed. `git diff --check` passed.
- Safari desktop: visually reviewed the generated header symbol alongside the existing wordmark, navigation and language/theme controls in light/system and dark appearances. The mask follows the central brand token; restored System afterward. An initial cached missing-image response was resolved with the versioned asset URL.
- Confirmed the generated master has alpha transparency and created matching 256px header and 32px/192px icon assets. Shared layout uses base-aware PNG favicon links. Safari continued displaying its cached old tab icon during this session; updated browser-tab rendering is not claimed as visually verified. No phone-width review was performed.
- Source, prompt and output paths are documented in `BRANDING.md`. No deployment or push occurred.

## Logo colour-only revision - 6 November 2026

- `npm run verify` passed: 0 errors/warnings/hints; 78 static pages, 76 translated routes, 2,723 internal links/assets; all 5 calendar cases passed. `git diff --check` passed.
- Visually compared the generated edit with the original: the eight-node arrangement, upright rounded square, robot and connector paths are retained, with darker olive robot/lines and lighter sage nodes and shading. Pixel-identical geometry is not claimed for the generative edit.
- Safari desktop light/system: confirmed the complete shaded logo renders beside the wordmark without disturbing navigation. Dark brightness is configured centrally, but the selector interaction did not switch themes; a new dark visual review is not claimed. No mobile-width review was performed.
- Matching 32px and 192px PNG favicon assets use the base helper and new filenames. Safari still showed its cached tab icon; refreshed browser-tab rendering is not claimed. Source and exact built-in generation prompt are in `BRANDING.md`.

## Branding cleanup - 6 November 2026

- Removed the four superseded simplified-logo PNGs and old `public/favicon.svg`; updated the root redirect page to the current favicon. Original reference, recoloured master and three active image assets remain.
- `npm run verify` passed: 0 errors/warnings/hints; 78 static pages, 76 translated routes, 2,723 internal links/assets; all 5 calendar cases passed. `git diff --check` passed. No references to deleted assets remain in source or current branding documentation.
- No layout change or new browser review; no deployment or push occurred.

## Favicon compatibility - 6 November 2026

- Existing 32px PNG and new versioned ICO URLs returned HTTP 200 with correct image/png and image/x-icon types. The ICO contains 16px, 32px and 48px entries; the Apple touch icon is 180px. Both were resized from the current recoloured master without redesign.
- Added shared `Favicon.astro` declarations, including versioned URLs, to the root redirect and main layout. Conventional root `favicon.ico` and `apple-touch-icon.png` are available too. Apple icon guidance: https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html
- Safari desktop: opened a fresh tab at http://localhost:4321/sl/ and visually confirmed the current eight-node olive logo beside the tab title. The existing 127.0.0.1 tab still showed the old icon, consistent with retained browser favicon state. Browser caches/settings were not cleared or changed.
- `npm run verify` passed: 0 errors/warnings/hints across 25 files; 78 static pages, 76 translated routes, 2,880 internal links/assets; all 5 calendar cases passed. `git diff --check` passed. No deployment or push occurred.

## Footer wordmark - 6 November 2026

- Footer lab suffix now uses font-weight 450, matching the header. The dot retains its brand colour and agentic retains the existing bold weight. Shared footer applies to both languages.
- `npm run verify` passed: 0 errors/warnings/hints; 78 static pages, 76 translated routes, 2,880 internal links/assets; all 5 calendar cases passed. `git diff --check` passed.
- Safari desktop: visually confirmed the Slovenian homepage footer displays bold agentic with a lighter lab suffix, with normal footer spacing. No additional mobile/theme review, deployment or push.
