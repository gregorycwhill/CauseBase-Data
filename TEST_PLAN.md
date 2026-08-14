# CauseBase Test Plan

**Status:** Accepted product direction  
**Updated:** 2026-08-14

## Cross-product release gates

- publication allowlist and absence of raw/private/working artefacts;
- manifest integrity, versioning and artefact hashes;
- evidence-reference and identity consistency;
- taxonomy/version/term validity;
- source-drift anomalies and failure isolation;
- preservation of the previous valid release after a failed build;
- correction-dependent regeneration when governed corrections are introduced;
- agent usability: an unfamiliar coding/AI agent can discover the current release and correctly retrieve and interpret one subject without downloading the national corpus.
- append-only annual observations, temporal relationship validity and current-projection selection;
- source-native sidecar provenance and source-field/canonical-field separation;
- deterministic change profiles, dependency decisions and recorded derivative reuse;
- source inventory, historical-release ledger and exact deployment-bundle safety.
- immutable-release ownership: a Data-owned release reproduces an isolated Viewer bundle from an explicitly selected path, with manifest/card/sidecar hash equality and no implicit “latest” lookup.

## Data tests

Validate JSON, JSONL, CSV and Parquet against their shared canonical values. Treat Markdown as a rendering: test required displayed values, provenance display, renderer behaviour and absence of raw vectors rather than attempting Markdown round trips. Validate per-subject retrieval, stable URLs, coverage/capability metadata, taxonomy artefacts and release discovery.

For an ownership repair/import, validate the source manifest hashes, entity count, card IDs, source-native records, taxonomy and selected financial fixture values before and after import. An archival import must not rewrite RC4 semantics.

For the proposed v0.5 contract, parse every draft schema and validate EJA, sparse, identity-binding and multiple-financial-period examples. Fixture tests must additionally assert reference resolution, version agreement, coverage-state invariants, source-row label/order/sign preservation, financial-pointer coherence, direct-versus-derived separation, public/private exclusion and participation action/evidence separation. These are design-fixture tests until approved Builder validators exist.

## Builder tests

Test opaque identity creation and external identifier/relationship handling; source parsing; archive/runtime/staging separation; evidence and provenance resolution; fundraising ladder branches; taxonomy validation; fresh isolated staging; allowlist enforcement; manifest generation; incremental invalidation; source drift; and error isolation.

## Reality-spike fixtures

Maintain small sanitised or permitted fixtures from awkward real-world cases: multiple names/identifiers, funds and branches, renamed/deregistered subjects, dead websites, scanned PDFs, separate reports, thin records, unusual accounting and no fundraising disclosure. Current retained regressions include Merri Creek's nine-month reporting transition, Fitted for Work related-record ambiguity and Red Cross non-comparable report/AIS revenue observations. These cases are regression tests for the evolving model, not a frozen schema proof.

## LLM evaluation

Maintain a human-reviewed evaluation set for neutrality, factual grounding, PR-language suppression, activity/beneficiary/geography extraction, taxonomy assignment, uncertainty, attribution, conflicting evidence and financial/fundraising interpretation. Run it for material model or prompt changes; valid JSON alone is not a quality signal.

Phase 2A adds a private 30-case representative evaluation corpus, weighted toward sparse/failed websites and report-bearing subjects. It records source evidence IDs, model/prompt/evidence hashes, review focus and a reviewer-assessment slot; it is the regression basis for later prompt/model changes.

Phase 2A.1 adds corpus-level assertions for one effective public coverage state per capability, no public operational synthesis telemetry, no blanket CauseBase taxonomy evidence IDs, sparse-evidence wording and broken public evidence URLs. Viewer tests cover unavailable/real fundraising estimates, observation currency, conflicting financial values and friendly taxonomy separation.

## Taxonomy-review tests

Taxonomy review must preserve the frozen baseline and never mutate canonical taxonomy files or card classifications. Test deterministic corpus diagnostics and stable input hashes; exclude ACNC classification fields, current CauseBase assignments, taxonomy labels and organisation names from taxonomy-blind Pass A; validate proposal operation types, compact review limits, support-count/representative-ID bounds and proposed-term definition profiles; retain future unmapped-concept and taxonomy-ambiguity signals privately; and ensure ACNC comparison occurs only after independent discovery.

For the durable workflow, separately test that PREPARE is API-free and bounded, MODEL-REVIEW cannot create a decision record, decision outcomes validate against the governed schema, and VALIDATE reports candidate impacts without changing cards, taxonomy files or public releases.

## Viewer tests

Test static data loading with optional-artifact failure, retrieval/search/filter semantics, deep links, exact card fidelity, estimate/provenance visibility, correction context, safe URL/text rendering, keyboard and mobile behaviour, and absence of recommendation framing.

Phase 2B additionally tests stacked facets, clickable taxonomy navigation, source-record links, funding/fundraising display, history/reuse display and accessible help controls.

## Post-RC4 evaluation and distribution tests

The golden corpus must contain governed representative and awkward cases for source-native financial preservation, reports/charts/scans, identity/group ambiguity, thin or failed websites, coverage states, derived projections and editorial/provenance review. It is the shared benchmark for document-stack, website-pipeline and Viewer changes; quality/cost evidence from it gates technology selection and scale.

Consumer-LLM testing uses scarce genuinely naive contexts deliberately. Prepare canonical prompts and scoring criteria before use, and record model/product, date, account/context condition, exact prompt, web/search availability, selected sources, organisations returned, factual errors, citations and whether CauseBase changed the result. Test four conditions separately: unaided discovery (no CauseBase mention), source discovery, directed CauseBase use and interpretation of supplied CauseBase records/URLs. Eventual routine model familiarity/indexing is product success, not permanent contamination.

Machine-distribution acceptance includes corpus-level discoverability, crawlable semantic HTML, stable canonical URLs, per-card JSON/Markdown, manifests, taxonomy/geography semantics, direct-versus-derived and period/scope fields, provenance, coverage/absence and freshness/version. A key acceptance question is whether a general-purpose consumer AI can discover relevant CauseBase records and accurately answer a realistic funder question.

Viewer human design acceptance includes the anti-marketplace test: does the interface appear to persuade a user to favour, trust or donate to an organisation? If yes, it fails. Test accessibility, density, speed and inspectability alongside this qualitative criterion.
