# CauseBase Test Plan

**Status:** Accepted product direction  
**Updated:** 2026-08-10

## Cross-product release gates

- publication allowlist and absence of raw/private/working artefacts;
- manifest integrity, versioning and artefact hashes;
- evidence-reference and identity consistency;
- taxonomy/version/term validity;
- source-drift anomalies and failure isolation;
- preservation of the previous valid release after a failed build;
- correction-dependent regeneration when governed corrections are introduced;
- agent usability: an unfamiliar coding/AI agent can discover the current release and correctly retrieve and interpret one subject without downloading the national corpus.

## Data tests

Validate JSON, JSONL, CSV and Parquet against their shared canonical values. Treat Markdown as a rendering: test required displayed values, provenance display, renderer behaviour and absence of raw vectors rather than attempting Markdown round trips. Validate per-subject retrieval, stable URLs, coverage/capability metadata, taxonomy artefacts and release discovery.

## Builder tests

Test opaque identity creation and external identifier/relationship handling; source parsing; archive/runtime/staging separation; evidence and provenance resolution; fundraising ladder branches; taxonomy validation; fresh isolated staging; allowlist enforcement; manifest generation; incremental invalidation; source drift; and error isolation.

## Reality-spike fixtures

Maintain small sanitised or permitted fixtures from awkward real-world cases: multiple names/identifiers, funds and branches, renamed/deregistered subjects, dead websites, scanned PDFs, separate reports, thin records, unusual accounting and no fundraising disclosure. Current retained regressions include Merri Creek's nine-month reporting transition, Fitted for Work related-record ambiguity and Red Cross non-comparable report/AIS revenue observations. These cases are regression tests for the evolving model, not a frozen schema proof.

## LLM evaluation

Maintain a human-reviewed evaluation set for neutrality, factual grounding, PR-language suppression, activity/beneficiary/geography extraction, taxonomy assignment, uncertainty, attribution, conflicting evidence and financial/fundraising interpretation. Run it for material model or prompt changes; valid JSON alone is not a quality signal.

Phase 2A adds a private 30-case representative evaluation corpus, weighted toward sparse/failed websites and report-bearing subjects. It records source evidence IDs, model/prompt/evidence hashes, review focus and a reviewer-assessment slot; it is the regression basis for later prompt/model changes.

## Viewer tests

Test static data loading with optional-artifact failure, retrieval/search/filter semantics, deep links, exact card fidelity, estimate/provenance visibility, correction context, safe URL/text rendering, keyboard and mobile behaviour, and absence of recommendation framing.
