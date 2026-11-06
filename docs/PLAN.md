# Implementation plan

1. [x] Inspect repository and verify official profiles/publications; preserve authoritative leadership. (AC01.3, AC06.3, AC08.1–3)
2. [x] Set up static Astro, Tailwind, TypeScript, self-hosted typography and current minimal dependencies. (AC01.1–2, AC03.1–2)
3. [x] Define typed content collections and populate both languages for research, references, events, people, services and page narratives. (AC04.1, AC05.1–3, AC06.1–3, AC07.1–2, AC08.1–4, AC09.1–2)
4. [x] Build shared layout, sticky navigation, equivalent language switching and persistent system/light/dark themes. (AC02.1–3, AC03.3)
5. [x] Implement editorial homepage, six section pages and research/reference/event/person detail pages. (AC03.4, AC04.2–3, AC05–9)
6. [x] Add profile images/fallbacks, metadata, social image, sitemap and deployment/base configuration. (AC08.4, AC10.1–2)
7. [x] Document content editing, design, provenance and deployment. (AC01.3, AC04.1)
8. [x] Run final type/build/link/content checks, inspect desktop/themes in Safari, fix findings and record actual verification. (AC10.3)
9. [ ] Complete phone-width Safari visual review and mobile-menu interaction after approval for the temporary responsive-preview setting. See `VERIFICATION.md`; this check is not claimed as passed. (AC10.3)

## Reference expansion — 4 November 2026

- [x] Verify the four requested publications against publisher-deposited metadata and the accessible Springer abstract; retain raw Crossref records.
- [x] Add matching Slovenian and English entries, with original titles, verified authors, DOI, publication dates and summaries.
- [x] Connect publications bidirectionally with relevant research areas and existing author profiles; feature the latest testing review on the homepage.
- [x] Support chapter page ranges and bibliography without empty issue fields.
- [x] Run `npm run verify` and inspect the updated pages in Safari (details in `VERIFICATION.md`).

## Past-event archive — 4 November 2026

- [x] Verify dates, locations, presenters and workshop descriptions using official event sources and the user's talk abstract.
- [x] Add three past events in Slovenian and English, preserving date-only values and the complete supplied Slovenian abstract.
- [x] Connect event details with existing speaker profiles, research areas and related publications in both directions.
- [x] Distinguish archive cards from upcoming events, retain the fictional demo label, and support reusable compact event rows on related pages.
- [x] Run static verification, assert event relationships and archive placement, and review actual Safari rendering; record results in `VERIFICATION.md`.

## Homepage affiliation strip — 4 November 2026

- [x] Remove the UM FERI / Information Systems Laboratory affiliation strip between the hero and six research perspectives in both languages, including unused CSS.

## Real upcoming event — 5 November 2026

- [x] Replace the fictional demo with user-confirmed bilingual titles, descriptions and topics for 3 December 2026, 09:00–13:00; preserve URLs and other metadata.
- [x] Display the event time range on featured cards, related rows and event details using the Ljubljana timezone.
- [x] Run `npm run verify` and visually review the updated event in Safari.

## People tags — 5 November 2026

- [x] Update the user-specified tags for Luka Pavlič, Marjan Heričko and Luka Četina in both languages, including the agile development methods label.
- [x] Run verification, confirm all six generated profiles and visually inspect tag wrapping on Luka Pavlič’s English profile in Safari.

## Event registration — 6 November 2026

- [x] Add the user-supplied DIGI-SI registration URL to both translations and expose it on featured event cards and event details.
- [x] Update the venue and replace unconditional free-admission wording with pricing/conditions on DIGI-SI, based on the published registration page.
- [x] Run verification and inspect the updated pages in Safari.
