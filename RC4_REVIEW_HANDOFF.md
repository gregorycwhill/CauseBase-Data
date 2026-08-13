# RC4 review handoff

Status: locally validated RC4 visual-escalation candidate; not human-approved or deployed.

Candidate: `C:\CauseBase-runtime\staging\phase2b-2026-08-14-rc4-visual-escalation-human-review`

Isolated Viewer bundle: `C:\CauseBase-runtime\staging\viewer-rc4-visual-human-review`

## Evidence outcomes

- Scope remains 120 existing cards, projected from immutable `phase2a-2026-08-10-h1`; summaries and embeddings were reused with no model calls.
- Production Builder has no organisation-specific enrichment strings or conditional path.
- ACNC acquisition recorded 120 latest-AIS coverage outcomes: 101 actual public AIS-detail payloads and 19 explicit no-submitted-AIS outcomes. The private audit is `archive/processed/phase2b/2026-08-14/rc4-audit.json`.
- Seven acquired reports were extracted through one deterministic, page-diagnostic pipeline: two reference reports and five reports across four additional existing cards.
- The reference financial report’s printed p.8 row is source-preserved as `Donations, Fundraisings, Lectures`: 2025 `2,051,817 AUD`, comparative 2024 `1,838,542 AUD`. It has no narrow donations mapping.
- Financial statements retain source order, printed labels, comparative amounts, totals/headings, source location, extraction metadata and optional canonical annotations. Cash-flow and equity statements are retained source-native.
- The generic PDF pipeline now classifies image-only/scanned pages and visually unresolved relationships. It uses local OCR first and invokes configured vision only for the selected page/crop.
- One annual-report chart escalation was made: PDF p.29 recovered `Legal Programs 50%`, `Operations & Management 31%`, `Campaigns & Communications 9%`, and `Fundraising 10%`. The shares sum to 100% and reconcile to independently extracted AUD `5,852,789` total expenses. Fundraising is a direct reported allocation; AUD `585,279` is explicitly a mechanically derived rounded estimate.
- Viewer source now renders headline metrics plus report-labelled statement tables; participation observations with a public source URL render as links.

## Automated evidence

- Builder: 60 passing tests.
- Viewer: 13 passing tests.
- Candidate publication validation: passed.
- Coverage-state consistency, AIS date consistency and program merge checks: passed (no conflicts).
- Static Viewer bundle preparation: passed (120 cards, RC4 visual-escalation dataset).
- Source-native static-link check: passed.
- LHS density: headless desktop inspection at 1440×900 showed 11 full result rows before scrolling after consolidating filters under one accessible disclosure.

## Required human gates still open

1. Review the reference card, its financial tables and the reported functional-allocation table in the isolated local Viewer bundle.
2. Review remaining structured display-value provenance residues before calling RC4 release-ready. The schema migration removed safe terminal qualifiers; a corpus diagnostic still reports 15 activities, three beneficiaries, two geography values and 17 participation-mode values containing source-narration phrases embedded in substantive prose. These require evidence-aware editorial review, not blanket deletion.

The handoff does not authorise deployment.
