# CauseBase Current State

Updated: 2026-08-10

## Phase 1 — National Structured Backbone complete

CauseBase now has a reproducible, private national structured-source backbone. It preserves the separation between source record, resolution assertion, CauseBase subject and evidence/observation; it does not attempt to turn every regulator row into a finished card.

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
