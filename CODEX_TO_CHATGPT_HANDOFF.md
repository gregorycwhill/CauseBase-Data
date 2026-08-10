# CauseBase — Codex to ChatGPT Handoff

Updated: 2026-08-10 — Phase 1 complete

## Completed

- Built a reproducible national structured backbone from current ACNC Register, ACNC AIS and ABR/DGR sources.
- Archived source files privately with retrieval metadata, hashes, URLs, publisher and licence records.
- Normalised source records privately with stable source-record IDs independent of CauseBase subjects.
- Produced a validated safe staging candidate containing only public registry entries, aggregate coverage metadata, schema and manifest.

## National corpus statistics

- ACNC Register: 65,472 records / 65,472 ABNs.
- AIS: 53,465 financial observations / 53,465 ABNs.
- DGR: 31,593 observations from the dated 2026-08-05 ABR bulk extract, plus two independently retained ABN Lookup checks.
- Registry: 5 durable promoted subjects.

## Identity/resolution findings

- 5 ACNC records bind to existing reviewed registry promotions; 65,467 remain `candidate` with no subject promotion.
- National normalisation performs only authoritative ABN joins between source records. It does not use name similarity to resolve a subject.
- The Salvation Army and Royal Flying Doctor Service remain recorded multiplicity examples; no automatic group aggregation was introduced.

## AIS/financial findings

- 44,699 reporting periods are approximately annual; 573 are nonstandard; 8,193 lack usable report dates.
- Consolidation values: 1,249 true, 11,719 false, 40,497 unknown.
- 50,403 AIS records join an ACNC register ABN; 3,062 do not. This remains source coverage, not a negative claim.
- Money uses exact decimal source and normalised values. No precedence/reconciliation scalar is derived nationally.

## DGR findings

- Current ABR source is retained as two private bulk archives with SHA-256 hashes and CC BY 3.0 Australia metadata.
- DGR is a dated external tax-status observation, never CauseBase identity.
- Absence is meaningful only relative to this dated complete bulk extract; no general negative claim is inferred.

## Coverage/provenance findings

- Private diagnostics include source counts, identifiers, coverage, period/consolidation distributions, duplicate patterns, parser failures, drift baseline and major identity multiplicity examples.
- Raw source archives and private normalised source records are excluded from staging and Git publication boundaries.

## Tests/validation

- Builder: 36 tests passing.
- Viewer: 3 tests passing.
- `phase1-structured-backbone` staging candidate structural validation passed.

## Decisions made locally

- Used a compact safe public projection rather than publishing regulator rows or raw archives.
- Used a full dated ABR bulk pass to make national DGR coverage semantics defensible.
- Kept first-baseline source drift as `not_assessed`; meaningful drift requires a subsequent refresh.

## NEW questions requiring product decision

None. The remaining work is operational refresh/release design and enrichment scope under the accepted product direction.

## Known limitations

- ACNC/AIS source dates are current baseline acquisitions, not a scheduled refresh service.
- No public national card corpus is implied by the backbone; only five reviewed subjects are promoted.
- DGR parser currently records endorsed presence; richer fund/item/date field mapping can be added without changing identity semantics.

## Recommended Phase 2 increment

Build a governed real enriched slice (roughly 100–1,000 subjects) using targeted report and website evidence, taxonomy work, real embeddings and correction intake, while retaining this backbone as the source/coverage layer.
