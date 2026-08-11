# CauseBase Current State

Updated: 2026-08-10

## Phase 2A — governed enriched corpus candidate complete

- 120 deliberately heterogeneous ACNC-authoritative subjects have been promoted under `acnc-authoritative-v1`; automated promotions retain `subject_kind: unknown`, opaque CauseBase IDs and source-record/ABN provenance. The original five reviewed subjects remain unchanged.
- The validated Phase 2A candidate contains 120 enriched cards, CauseBase Taxonomy v0, external ACNC classifications kept separately, per-subject JSON/Markdown, coverage, agent guide, Parquet/CSV/JSONL, manifest and 162 descriptive semantic-neighbour links.
- Evidence remains private by default. Cohort website collection observed 82 sites and recorded failures explicitly; five directly linked annual-report PDFs (180 pages) were extracted privately, with one retrieval failure retained. No raw websites, reports, prompts, vectors in Markdown, or credentials are published.
- Synthesis uses `gpt-5-mini-2025-08-07`, prompt `phase2a-0.4`, evidence hashes and private cache metadata. Real `text-embedding-3-small` embeddings back semantic links. Candidate validation passed with zero errors; Builder has 42 passing tests and Viewer has 3.
- Fundraising expenditure remains `not available from selected evidence` where no defensible ladder-method estimate exists; no universal fallback has been introduced.

## Phase 2A.1 — human-test hardening candidate ready

- A new, not-yet-deployed release candidate `phase2a-2026-08-10-h1` preserves the historical `phase2a-2026-08-10` human-test release.
- It removes duplicate effective coverage states, strips public request/token/cost telemetry, removes ambiguous blanket evidence IDs from CauseBase-native classifications, and corrects sparse-evidence language through nine bounded synthesis reruns.
- Diagnostics: 120 cards; zero duplicate capabilities; zero native-classification evidence leakage; zero operational telemetry fields; zero classification-exclusion negative statements; 161 semantic links; zero broken public evidence URLs.
- A private 30-case local human-review pack is prepared. The private Google Forms responder endpoint and all six card-context prefill fields are configured; the form owner confirmed private/reviewer handling. The corrected human-test release is deployed at `https://gregorycwhill.github.io/CauseBase-Viewer/` through the manual `main` → `gh-pages` boundary: dataset `phase2a-2026-08-10-h1`, Viewer commit `a97b99951915a3c92a03da48352f94ad727db511`.

## Phase 1 — National Structured Backbone complete

CauseBase now has a reproducible, private national structured-source backbone. It preserves the separation between source record, resolution assertion, CauseBase subject and evidence/observation; it does not attempt to turn every regulator row into a finished card.

## Taxonomy Review v0.1 — first governed corpus review complete

- The frozen baseline remains CauseBase taxonomy `0.1-phase2a` (7 dimensions, 23 terms). No canonical taxonomy file, public card classification or Viewer taxonomy was changed.
- Builder now provides a private, non-mutating `causebase taxonomy-review` process. Pass A is taxonomy-blind and excludes ACNC classifications, labels, mappings and cohort strata; Pass B critiques the frozen vocabulary only after independent discovery; ACNC is a post-hoc diagnostic annex.
- First review used the private 120-card `phase2a-2026-08-10-h1` candidate. Its private decision package contains deterministic diagnostics, blind concepts, a complete 23-term audit, eight ranked unapproved proposals (4 HIGH, 3 MEDIUM, 1 WATCH), definition/boundary profiles and migration analysis.
- The review package is awaiting a product/human taxonomy decision. No proposed term is canonical and no reclassification is authorised by this review alone.

## National baseline

- ACNC Register: 65,472 normalised source records, each with a stable opaque source-record ID.
- ACNC AIS: 53,465 financial observations with exact-decimal money, report dates, consolidation state and source-to-register ABN linkage.
- ABR DGR: current 2026-08-05 two-part bulk extract archived privately, SHA-256 verified and streamed into 31,593 dated DGR observations. DGR remains an external status observation, never subject identity.
- National resolution: 5 manually promoted durable CauseBase subjects; 5 resolved registry bindings and 65,467 candidate source records. No name-only promotion or forced resolution occurs.
- Diagnostics retain coverage, period/consolidation distributions, duplicate patterns, parser failures, source provenance/licences and known identity multiplicity cases.

## Publication and validation

- `C:\CauseBase-runtime\staging\phase1-structured-backbone` is a validated, publication-safe candidate containing only registry entries, aggregate coverage, schema and manifest.
- Raw regulator files, bulk DGR archives and private normalised source records remain outside publication and Git boundaries.
- Builder: 36 tests passing. Viewer: 3 tests passing.

## Deliberate limits

- This is evidence infrastructure, not national enrichment: no report crawl, website crawl, GPT synthesis, embeddings, recommendation logic or backend has been introduced.
- Public schemas remain provisional. A scheduled source refresh and drift comparison are still operational work, not a reason to stabilise the public card contract.
