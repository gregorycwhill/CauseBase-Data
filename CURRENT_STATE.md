# CauseBase Current State

Updated: 2026-08-14

## Current release — Phase 2B RC4 fundraising projection correction

- Live Viewer dataset: `phase2b-2026-08-14-rc4-fundraising-projection-correction`, deployed from Viewer commit `77d84be`. It remains a 120-card projection from immutable `phase2a-2026-08-10-h1`; accepted RC2 summaries and embeddings were reused without model calls.
- RC4 preserves complete source-native primary financial statements, visual functional allocations and public source-native sidecars. Funding & fundraising is now a narrow analytic projection: EJA reports Donations, gifts & bequests of AUD 2,101,817 (41.9% of AUD 5,016,000 total income), from the full printed rows `Donations, Fundraisings, Lectures` and `Donations - Future Fund`; its direct Fundraising allocation is 10% with an approximate AUD 585k mechanical implication.
- Viewer separates participation action destinations from evidence URLs, presents Funding & fundraising before Financial reports, retains full statements/functional allocation under Financial reports, uses table-level citations where appropriate, and keeps Sources & data compact.
- RC4 validation: Builder 63 tests, Viewer 18 tests, candidate/publication validation and source-native static-link checks passed. `RC4_REVIEW_HANDOFF.md` records the detailed acceptance evidence.
- CauseBase Data now owns the immutable RC4 archive at `releases/rc4-2026-08-14`, verified against Viewer commit `77d84befa90c1079346e146f82504ff2ef0d9f26`; Viewer preparation selects that release explicitly. This is an ownership repair only, not an RC4 semantic change or new deployment.

## Current product direction

- CauseBase is neutral public charity-information infrastructure. Its users, channels and scales are documented in PRODUCT.md and EXPERIENCES.md; consumer LLMs are a first-order distribution channel, not CauseBase's own chatbot thesis.
- The next work is dependency-gated: define public-contract and golden-corpus success first; then technology spikes; then evidence/identity work; distribution/taxonomy/LLM validation; Viewer redesign; corpus machinery; and only then progressive scale. See ROADMAP.md and IMPLEMENTATION_PLAN.md.

## Current next gates

- The public-contract design decisions are closed and recorded in `PUBLIC_CONTRACT_CONSOLIDATION_PROPOSAL.md`. Draft public contract `0.5`, its RC4 compatibility matrix, modular draft schemas and four representative examples are now available for product review in `PUBLIC_SCHEMA_VNEXT_SPEC.md`, `RC4_TO_VNEXT_COMPATIBILITY.md`, `schemas/vnext/` and `examples/vnext/`. No migration, rebuild or corpus expansion is authorised; the next task after approval is bounded Builder adapters/validators against frozen fixtures.
- Run the selected technology spikes only after those packages are accepted; their outcomes remain decision inputs, not pre-authorised implementation directions.

# Historical release and implementation record

The records below preserve prior release evidence and implementation history. Candidate, deployment and human-gate language in these sections is historical and must not be executed as a current instruction.

## Historical — Phase 2B RC2 human-review remediation candidate

- Candidate `phase2b-2026-08-12-rc2` retains the same 120-card scope. It preserves both `phase2a-2026-08-10-h1` and failed `phase2b-2026-08-12-rc1` as immutable Viewer release snapshots.
- All summaries were deliberately regenerated under editorial contract `phase2b-rc2-1` / policy `0.3-rc2`; unchanged evidence alone is no longer a basis for summary reuse. The private migration cache records 120 `gpt-5-mini` calls, 327,726 input tokens, 222,747 output tokens and estimated USD 0.527423.
- RC2 introduces a card-wide stable evidence-number registry, controlled navigation geography, separated CauseBase and ACNC navigation facets, persistent two-pane Viewer layout, direct ABN/ACNC/website/card links and always-visible funding/fundraising coverage states.
- The Google Forms correction mapping now matches the externally verified prefill IDs and `usp=pp_url` grammar. Automated URL-contract coverage passed; its former clean-incognito human release gate is historical and superseded.

## Historical — Phase 2B longitudinal one-stop data candidate

- Candidate `phase2b-2026-08-12-rc1` is an append-only projection of the 120-card `phase2a-2026-08-10-h1` release. h1 is retained as a historical static release and is not rewritten.
- Cards now expose public-safe source-native ACNC Register and AIS sidecars, annual financial observation history, temporal relationship fields, funding-source observations, derivative reuse/refresh assessments and direct source-record links. The initial projection reuses all existing summaries, classifications, embeddings and neighbours after a deterministic assessment; no model calls were made.
- The candidate includes a public government-source inventory and gap report. ASIC is explicitly not integrated pending its access/cost/terms assessment; CauseBase does not bypass paywalls or access controls.
- Viewer candidate adds free-text search, stacked facets, taxonomy navigation, browser history, stable card hashes, source/evidence versus convenience links, JSON/Markdown and source-record access, history, funding/fundraising rendering and accessible technical help.

## Historical — Phase 2A governed enriched corpus candidate complete

- 120 deliberately heterogeneous ACNC-authoritative subjects have been promoted under `acnc-authoritative-v1`; automated promotions retain `subject_kind: unknown`, opaque CauseBase IDs and source-record/ABN provenance. The original five reviewed subjects remain unchanged.
- The validated Phase 2A candidate contains 120 enriched cards, CauseBase Taxonomy v0, external ACNC classifications kept separately, per-subject JSON/Markdown, coverage, agent guide, Parquet/CSV/JSONL, manifest and 162 descriptive semantic-neighbour links.
- Evidence remains private by default. Cohort website collection observed 82 sites and recorded failures explicitly; five directly linked annual-report PDFs (180 pages) were extracted privately, with one retrieval failure retained. No raw websites, reports, prompts, vectors in Markdown, or credentials are published.
- Synthesis uses `gpt-5-mini-2025-08-07`, prompt `phase2a-0.4`, evidence hashes and private cache metadata. Real `text-embedding-3-small` embeddings back semantic links. Candidate validation passed with zero errors; Builder has 42 passing tests and Viewer has 3.
- Fundraising expenditure remains `not available from selected evidence` where no defensible ladder-method estimate exists; no universal fallback has been introduced.

## Historical — Phase 2A.1 human-test hardening candidate ready

- A new, not-yet-deployed release candidate `phase2a-2026-08-10-h1` preserves the historical `phase2a-2026-08-10` human-test release.
- It removes duplicate effective coverage states, strips public request/token/cost telemetry, removes ambiguous blanket evidence IDs from CauseBase-native classifications, and corrects sparse-evidence language through nine bounded synthesis reruns.
- Diagnostics: 120 cards; zero duplicate capabilities; zero native-classification evidence leakage; zero operational telemetry fields; zero classification-exclusion negative statements; 161 semantic links; zero broken public evidence URLs.
- A private 30-case local human-review pack is prepared. The private Google Forms responder endpoint and all six card-context prefill fields are configured; the form owner confirmed private/reviewer handling. The corrected human-test release is deployed at `https://gregorycwhill.github.io/CauseBase-Viewer/` through the manual `main` → `gh-pages` boundary: dataset `phase2a-2026-08-10-h1`, Viewer commit `a97b99951915a3c92a03da48352f94ad727db511`.

## Historical — Phase 1 National Structured Backbone complete

CauseBase now has a reproducible, private national structured-source backbone. It preserves the separation between source record, resolution assertion, CauseBase subject and evidence/observation; it does not attempt to turn every regulator row into a finished card.

## Historical — Taxonomy Review v0.1 first governed corpus review complete

- The frozen baseline remains CauseBase taxonomy `0.1-phase2a` (7 dimensions, 23 terms). No canonical taxonomy file, public card classification or Viewer taxonomy was changed.
- Builder now provides a private, non-mutating `causebase taxonomy-review` process. Pass A is taxonomy-blind and excludes ACNC classifications, labels, mappings and cohort strata; Pass B critiques the frozen vocabulary only after independent discovery; ACNC is a post-hoc diagnostic annex.
- First review used the private 120-card `phase2a-2026-08-10-h1` candidate. Its private decision package contains deterministic diagnostics, blind concepts, a complete 23-term audit, eight ranked unapproved proposals (4 HIGH, 3 MEDIUM, 1 WATCH), definition/boundary profiles and migration analysis.
- At that time, the review package awaited a product/human taxonomy decision. No proposed term became canonical and no reclassification was authorised by that review alone.

## Historical — durable taxonomy workflow PREPARE demonstration complete

- The historical v0.1 and facet-purity/Sol packages remain immutable advisory evidence; their proposals were not implemented.
- Builder now separates deterministic `taxonomy-review-prepare`, optional advisory `taxonomy-review-model-review`, human decision records, and non-mutating `taxonomy-review-validate`.
- The initial deterministic packet reviews the 120-card `phase2a-2026-08-10-h1` corpus against frozen `0.1-phase2a`; it creates pressure questions, diagnostics and bounded cases only. No API request, taxonomy mutation, card regeneration, embedding run, Viewer change or publication occurred.

## Historical — national baseline

- ACNC Register: 65,472 normalised source records, each with a stable opaque source-record ID.
- ACNC AIS: 53,465 financial observations with exact-decimal money, report dates, consolidation state and source-to-register ABN linkage.
- ABR DGR: current 2026-08-05 two-part bulk extract archived privately, SHA-256 verified and streamed into 31,593 dated DGR observations. DGR remains an external status observation, never subject identity.
- National resolution: 5 manually promoted durable CauseBase subjects; 5 resolved registry bindings and 65,467 candidate source records. No name-only promotion or forced resolution occurs.
- Diagnostics retain coverage, period/consolidation distributions, duplicate patterns, parser failures, source provenance/licences and known identity multiplicity cases.

## Historical — publication and validation

- `C:\CauseBase-runtime\staging\phase1-structured-backbone` is a validated, publication-safe candidate containing only registry entries, aggregate coverage, schema and manifest.
- Raw regulator files, bulk DGR archives and private normalised source records remain outside publication and Git boundaries.
- Builder: 36 tests passing. Viewer: 3 tests passing.

## Historical — deliberate limits

- This is evidence infrastructure, not national enrichment: no report crawl, website crawl, GPT synthesis, embeddings, recommendation logic or backend has been introduced.
- Public schemas remain provisional. A scheduled source refresh and drift comparison are still operational work, not a reason to stabilise the public card contract.
