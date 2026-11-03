# Agentic Lab specification

## S01 — Architecture and delivery
- **AC01.1** Fully static Astro + TypeScript + Tailwind, with native components and minimal JavaScript; no backend, auth, database, CMS or client framework.
- **AC01.2** Build locally in the repository root. Output `dist/` works on Cloudflare Pages, Netlify and GitHub Pages, including a configurable base path.
- **AC01.3** Provide README, AGENTS, SPEC, PLAN, source provenance and honest verification records. Do not push or deploy.

## S02 — Language and navigation
- **AC02.1** Complete Slovenian and English homepages and sections under `/sl/` and `/en/`; equivalent detail routes switch language without losing context.
- **AC02.2** Navigation: Research, References, Events, People, Industry Collaboration, About; corresponding Slovenian labels. Logo links to current-language home. No separate Home item.
- **AC02.3** Compact sticky header, accessible SL/EN controls, keyboard-accessible mobile menu.

## S03 — Visual identity
- **AC03.1** Contemporary, readable editorial design, lively but restrained. Body approximately 18–20px on desktop; moderate heading scale. No starter/SaaS/cyberpunk look.
- **AC03.2** Central font, colour, spacing and theme tokens. Six distinct accents: violet agentic, blue AI4SE, teal quality, orange DevOps, coral architecture, ochre UX.
- **AC03.3** Intentionally designed light/dark/system themes, system default, explicit preference persisted and applied before first paint.
- **AC03.4** Distinct section compositions. Meaningful research → experiments → patterns/evidence → pilots → good practices graphic; no generic AI illustrations.

## S04 — Content model and homepage
- **AC04.1** Markdown collections: research, references, events, people, services; page narratives also editable in Markdown. Optional fields and absent photographs render gracefully.
- **AC04.2** Homepage: exact English headline “Building software with AI agents.”, polished Slovenian equivalent, supporting text, Research/Education/Industry, research and collaboration CTAs.
- **AC04.3** Homepage sequence: hero, six research areas, research-to-practice, featured references selected by metadata, next upcoming event selected by date, collaboration preview, 4–6 people with photographs, institutional footer.

## S05 — Research
- **AC05.1** Six substantial areas: Agentic SE; AI4SE; Quality/Analytics; DevOps/DevSecOps/Automation; Modern Software/IS Architectures; UX/Accessibility/Acceptance. Include the topic lists provided in the brief.
- **AC05.2** Research page separates focus and activities. Seven activities: agentic processes, tool/model evaluation, patterns/practices, agent-ready repositories, experiments, prototypes/pilots, research transfer.
- **AC05.3** Explain agents in their engineering/organizational context; systematic, measurable, reusable approaches. Show software lifecycle from idea through evolution.

## S06 — References and evidence
- **AC06.1** Use “References”, never “Projects” as section name. Support research-project, publication, experiment, prototype, case-study, method, pattern, tool; metadata and simple accessible filtering.
- **AC06.2** Populate seven supplied investigation topics; distinguish research intentions from established results.
- **AC06.3** Include exact MDPI sources for 14(1),319 and 14(24),12006. Verify metadata against publisher/DOI records; record sources. No invented data. Publication pages show authors, journal, year, volume, issue, article number, DOI and source.

## S07 — Events
- **AC07.1** Support eight requested event types, upcoming/past, date/end date/location/links/speakers. Upcoming first; archive remains accessible.
- **AC07.2** Fictional demo public talk on 26 November 2026: Demystifying Agentic Software Development / Demistifikacija agentnega razvoja. Free, Maribor location TBA, talk/demo/Q&A, audience and topics from brief. No fabricated venue/organizer/speakers; visibly identify demo.

## S08 — People and institutional facts
- **AC08.1** Eight supplied core members in separate translated Markdown files. Individual profiles with photograph/default, name, lab role, verified academic role, concise profile, supported research tags, institutional email and verified links.
- **AC08.2** Luka Pavlič leads Agentic Lab and LIS. Other core people are members; institutional pages cannot override this prompt.
- **AC08.3** Five supplied external collaborators in a separate section with initials image and role; no unsupported biography/employer/contact.
- **AC08.4** Link related references by contributor key. Use real official photos when available; otherwise tasteful profile fallback. Do not synthesize people.

## S09 — Collaboration and About
- **AC09.1** Six collaboration formats: assessment, pilots, training, consulting, architecture/engineering, joint R&D. Research-lab tone, understated CTA, verified institutional contact.
- **AC09.2** Explain Agentic Lab → LIS → Institute of Informatics → Faculty of Electrical Engineering and Computer Science → University of Maribor. Integrate broader LIS research agenda, people/organization context, transfer and strategic goals into coherent prose.

## S10 — Accessibility, SEO and verification
- **AC10.1** Semantic HTML, one page h1, skip link, useful alt text, focus visibility, keyboard controls, sufficient contrast, reduced motion and responsive layout.
- **AC10.2** Titles, descriptions, OpenGraph, canonical/hreflang, favicon, configurable sitemap/robots. No invented production origin, analytics or cookie banner.
- **AC10.3** Install; check types and build; audit internal and content external links; check translations, themes, navigation, filters, default images, optional fields, mobile and final visual design. Record actual results and remaining limits.
