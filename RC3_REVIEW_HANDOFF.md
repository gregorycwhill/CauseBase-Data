# Phase 2B RC3 review handoff

Candidate: `phase2b-2026-08-13-rc3`. This is a local human-review candidate only; do not push or deploy it yet.

- Scope remains the existing 120-card corpus.
- All cards have public ACNC profile locators and latest-AIS coverage: 101 submitted AIS document locators; 19 explicit `not_available_from_source` states where the public profile contains no submitted AIS.
- Static source-native check: 307 referenced sidecars, zero missing.
- EJA keeps its exact ACNC profile and adds report-backed programs, participation, funding and detailed 2024-25 financial lines. Fundraising expenditure remains honestly unavailable from the selected evidence.
- RC3 made no summary calls. RC2 summary telemetry: 120 requests; 327,726 input tokens; 222,747 output tokens; estimated USD 0.527423. RC3 refreshed semantic vectors from existing card text: 120 embeddings, 32,654 input tokens, 240 thresholded similarity rows.

Validation passed: Builder 55 tests, Viewer 12 tests, candidate validation, static Pages bundle preparation, JavaScript syntax check, and source-native link crawl. The Google Form correction flow was previously passed in a clean session.
