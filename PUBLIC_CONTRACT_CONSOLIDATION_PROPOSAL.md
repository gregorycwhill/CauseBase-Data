# CauseBase Public-Contract Consolidation Proposal

**Status:** PROPOSAL — NOT YET CANONICAL  
**Date:** 2026-08-14  
**Basis:** accepted 120-card RC4 Viewer publication, `phase2b-2026-08-14-rc4-fundraising-projection-correction`

## 1. Executive summary

RC4 demonstrates that CauseBase is already more than a flat charity directory: it is a versioned, evidence-bound card publication with source-native records, selective canonicalisation, and derived material. The core direction is sound. The current `0.1` card, however, has accumulated overlapping presentation fields and multiple partially-general observation patterns while RC2–RC4 added capabilities.

This proposal recommends a deliberately modest pre-1.0 consolidation:

1. make a three-layer contract explicit: source-native records, canonical observations, and derived projections;
2. use small shared envelopes for provenance, time, coverage and derivation, while retaining explicit domain structures for financial statements, participation, programs, relationships and classifications;
3. make epistemic status (`direct`, `mechanically_derived`, `heuristic`, `llm_interpreted`, `peer_imputed`) independent of extraction method (`api`, `document_text`, `vision`, `manual`, `llm`, etc.);
4. preserve complete source-native financial statements and retain canonical headline metrics and analytic aggregates as separate objects; and
5. publish one authoritative RC4 release tree in CauseBase Data before any vNext migration work.

No production contract has changed. This document is an approval package, not a schema specification to implement.

### Ground-truth caveat

The accepted RC4 manifest and 120 cards are currently present in `CauseBase-Viewer/public/data`, with dataset version `phase2b-2026-08-14-rc4-fundraising-projection-correction`. CauseBase Data’s checked-in `releases/` directory currently ends at RC3. This makes Viewer the artefact-level ground truth for this review, but is itself a release-governance defect: CauseBase Data should own the authoritative immutable release before a public vNext contract is approved.

## 2. Evidence inspected

Shared product documents: `PRODUCT.md`, `PRINCIPLES.md`, `EXPERIENCES.md`, `CURRENT_STATE.md`, `ROADMAP.md`, `IMPLEMENTATION_PLAN.md`, `TEST_PLAN.md`, and `CODEX_TO_CHATGPT_HANDOFF.md`.

Artefacts inspected: RC4 Viewer `manifest.json`, cards, Markdown projections, JSON/JSONL/CSV/Parquet references, source-record sidecars, taxonomy, schema, coverage and release-history artefacts; RC3 CauseBase Data release artefacts for comparison.

Implementation inspected: Builder `models.py`, publication rendering/validation, Phase 2A/2B/2D projection paths, source structures and registry rules; Viewer search and presentation modules. Private archive boundaries were inspected only through the implementation’s declared inputs and publication safeguards; no archive was changed or copied.

Representative validation cases:

- **Environmental Justice Australia (EJA)** — rich report/AIS case, RC4 card `cb_604da7f26c6c48dd934e713edc493e9f`.
- **Multicultural Senior Digital Support QLD Inc** — sparse card, `cb_1ed4d44d34e949098005cf9c6ca1885c`.
- **Defence Force Welfare Association – National Inc** — branch/membership language without an asserted relationship, `cb_408c113ff48c4b4f91c7697b00b211dd`.
- **EJA again** — legitimate different financial observations for 2022–23 AIS and 2024–25 report, demonstrating retention rather than scalar overwrite.

## 3. Current-state schema map

| Concept | RC4 form and creation | Public status/layer | Assessment |
| --- | --- | --- | --- |
| Identity | `causebase_id`, `subject_kind`, legal/display/operating/former names, external identifiers, registrations, tax statuses; Builder registry and source normalisation | Public; canonical | Stable semantic direction. `acnc_profile_url`/`acnc_ais_url` duplicate generic source URLs. |
| Source records | `source_native_records[]` with family, dataset version, URL, retrieved/observed/effective dates, fields/payload, mappings and evidence IDs; rendered as card content and deduplicated sidecars | Public-safe source-native; private raw archives excluded | Correct layer, but a full public API payload can be very large and field mappings are strings rather than typed links. |
| Evidence | `evidence[]` / `EvidenceRef`: ID, source type, title, publisher, URL, observed date, reporting period, page/section/hash | Public; evidence/provenance | Useful common reference, but source location and time are too thin for all observation types. |
| Coverage | `coverage[]`: capability, eight-state status, optional source/evidence, observed date, freshness note | Public; canonical capability observation | Sound state vocabulary. “one effective state per capability” is enforced, but transition/history semantics are implicit and capability strings are open. |
| Financial sources | `financial_records[]`, line-item projections, ordered rows, statements, comparatives and `MoneyObservation` | Public; mixed source-native/canonical | Best-developed area. There are overlapping breakdowns, headline fields and statements; their hierarchy is not explicit in JSON. |
| Financial canon | `financial_metrics[]` with multiple observations/reconciliation, canonical annotations on rows | Public; canonical | Correctly preserves conflicts, but duplicates direct headline fields in `financial_records`. |
| Fundraising | `fundraising_expenditure`, `funding_sources`, `fundraising_methods`, report-level `donations_gifts_bequests` | Public; derived/canonical mix | Direction is good. The four representations need a common derivation envelope and clearer scope/time links. RC4 correctly leaves expenditure null for all 120 where no defensible amount exists. |
| Participation | legacy `participation_modes[]`, richer `participation_observations[]`, dated `opportunities[]` | Public; canonical observations | Correct evidence/action distinction in richer object; duplicate legacy list should not remain canonical. |
| Programs | `programs[]` nested observations with stable local program IDs, status, source URL/evidence | Public; canonical observation | Correct default: not every program is a subject. It lacks explicit promotion/relationship criteria. |
| Classification | taxonomy ID/version/term/method/confidence/evidence; private taxonomy-maintenance signals excluded from public output | Public canonical classification; private review signals | Stable multi-taxonomy direction. Assignment method currently conflates a model process with the fact’s epistemic status. |
| Geography | descriptive `geography[]`, provenance-aware observations in Builder, and controlled `navigation_geography[]` | Public; canonical projection | Two valid jobs but card serialisation still exposes the unprovenanced display list. |
| Relationships/history | relationship type, target ID, evidence, note, valid/observed dates, confidence/status; source resolutions separately retain ambiguity | Public canonical observations | Stable identity principles. Merge/split/tombstone are registry concepts but lack a published continuity representation. |
| Derivatives | summary, taxonomy, fundraising, embedding, similarities assessments with input hash/reuse reason; synthesis metadata separately records model/prompt/evidence hash | Public derived metadata | Validity inputs are split across two models; `assessment_method` strings hide a reusable contract. |
| Publication | card JSON/Markdown, source-record sidecars, bulk JSON/JSONL/CSV/Parquet, taxonomy/schema, manifest and release history | Public projections | Intended one-card/many-projections rule is correct. Current Data/Viewer RC3/RC4 split violates the single authoritative-release boundary. |

### RC4 card shape

The card has 45 top-level properties, including identity, display/navigation conveniences, evidence, canonical facts, source-native records, financial structures and publication metadata. Required schema fields are only `causebase_id`, legal/display name, entity status, summary, dataset version and build time. This permissiveness is appropriate before 1.0, but it means consumers need conventions rather than schema constraints to know which fields are authoritative, derived, historical or optional.

## 4. Problems and accidental complexity

| Finding | Classification | Recommendation |
| --- | --- | --- |
| Accepted RC4 lives in Viewer while Data release tree ends at RC3 | RESTRUCTURE | Establish Data as authoritative immutable release owner before vNext. Viewer should copy/consume that release, not become its sole canonical location. |
| `card_schema_version` remains `0.1` although Builder Phase 2 paths set later internal versions | RENAME / RESTRUCTURE | Define one public contract version source in the manifest and schema; do not derive it from an implementation constant. |
| `acnc_profile_url`, `acnc_ais_url`, `website`, evidence URLs and source-record URLs overlap | MERGE | Retain `website` as organisation self-link; move regulator/document locators under source records/evidence and derive convenience links. |
| `geography`, activities, beneficiaries and participation modes coexist with richer observation objects | DEPRECATE | Preserve display projections during migration, but make evidence-bound observations canonical. |
| `income_breakdown`, `expense_breakdown`, balance-sheet breakdown, ordered line items, statement rows and headline fields overlap | RESTRUCTURE | Statements/rows are source truth; headline annotations and analytics reference row IDs. Convenience breakdowns become generated views. |
| EJA represents total expenses as positive in the headline and negative in the statement allocation denominator | NEEDS PRODUCT DECISION | Define whether canonical expense magnitudes are always positive and preserve statement sign separately, or retain signed accounting values everywhere with explicit semantics. Do not silently coerce historical data. |
| `direct_observation: bool`, derivation method and extraction method are mixed in finance and classifications | MERGE / RENAME | Introduce separate `claim_basis` and `extraction_method` fields everywhere a claim is published. |
| Arbitrary coverage capability strings and one-current-state overwrite behaviour | RESTRUCTURE | Register capability IDs, retain historical coverage observations privately or in a history stream, and publish a current projection with explicit effective time. |
| `source_payload` can expose a large full API response in each card plus sidecar | PRIVATE-ONLY / KEEP | Keep public structured regulator payload where terms permit, but place it in a single sidecar; cards carry an ID and selected mapping, not a duplicate payload. |
| `source_resolutions` appear on cards despite being source-record-level review state | RESTRUCTURE | Keep resolution assertions in a source-record collection; project only resolved bindings or explicit unresolved notices to cards. |
| `taxonomy_maintenance_signals` appears in generated schema despite model comment that it is private | PRIVATE-ONLY | Remove from public schema in a future breaking version; retain only private review packet structures. |
| `enrichment_level` is a coarse label alongside precise coverage | DEPRECATE | Keep as a generated UI badge only if needed; do not treat it as contract truth. |
| Named participation action source URL versus evidence URL is already separate | KEEP | Preserve and formalise the distinction. |
| Nested program records are not automatically subjects | KEEP | Formalise promotion/relationship criteria; do not create a generic graph. |

No consolidation is warranted for opaque IDs, external identifier separation, multi-taxonomy support, raw source labels, exact-decimal money, retained conflicting financial observations, or the static artefact publication model.

## 5. Proposed conceptual model

### 5.1 Three layers

**Layer 1 — source-native.** A source record describes what one acquired public source said at a time. It preserves source family, source ID, locator, retrieval/published/effective time, original field labels/payload where republishable, and source-specific structure. Reports, snapshots, prompts, credentials and raw operational traces remain private unless there is a clear public right and product purpose.

**Layer 2 — canonical/harmonised observations.** These are selective CauseBase concepts that make sources interoperable: subject identity, external IDs, registration/DGR status, controlled navigation geography, coverage, taxonomy assignment, relationship, financial headline annotation and participation path. They never erase the source record they depend on.

**Layer 3 — derived/analytic projections.** These include neutral summaries, donations/gifts/bequests aggregates/shares, mechanically calculated fundraising amounts, classification where not source-native, embeddings, similarities and “current” selections. Each identifies governing inputs and method.

RC4 already follows this model in spirit. The vNext contract should state the layer on every published record/object rather than relying on field location or a Viewer convention.

### 5.2 Small common observation grammar

Use a shared envelope only where the semantics truly recur:

```json
{
  "observation_id": "obs:...",
  "subject_id": "cb_...",
  "kind": "financial_statement_row | participation | relationship | coverage | ...",
  "basis": "direct | mechanically_derived | heuristic | llm_interpreted | peer_imputed",
  "extraction_method": "api | document_text | vision | manual | llm | deterministic",
  "evidence_ids": ["ev:..."],
  "source_record_ids": ["src:..."],
  "time": {"reported_at": null, "valid_from": null, "valid_to": null, "observed_at": null},
  "confidence": "high | medium | low | null",
  "warnings": [],
  "derivation": null
}
```

This is an embedded envelope, not a universal EAV table. Financial rows keep financial fields; relationships keep their target and type; coverage keeps its state; classifications keep taxonomy terms. `derivation` is required when `basis` is not `direct` and contains method/version, input observation IDs, formula/rule or bounded model policy, and optional uncertainty.

### 5.3 Claim basis is not extraction method

| Situation | `basis` | `extraction_method` |
| --- | --- | --- |
| ACNC API reports total revenue | `direct` | `api` |
| Report text explicitly states a value | `direct` | `document_text` |
| Report chart says “Fundraising 10%” and vision recovers it | `direct` | `vision` |
| 10% × reported total expenses | `mechanically_derived` | `deterministic` |
| Published rule estimates an amount from known components | `heuristic` | `deterministic` |
| Model identifies a relationship expressed ambiguously in evidence | `llm_interpreted` | `llm` |

This preserves the key RC4 rule: an LLM may recover a directly reported fact; it does not thereby turn the fact into a CauseBase estimate.

### 5.4 Time

Minimum public fields are source URL/ID, `retrieved_at` where public acquisition freshness matters, source publication/report date when known, `observed_at`, reporting-period start/end/label, and `valid_from`/`valid_to` for temporal relationships or statuses. A release has `generated_at`, release/version and immutable manifest hash. Private-only metadata includes retry attempts, cache timestamps, parser diagnostics, raw snapshot paths and detailed spend telemetry.

Subjects persist through ordinary name, status, address or program changes. Attributes and relationships are time-bounded observations. Merge/split/tombstone must be represented as identity-continuity assertions with evidence, rather than minting a new subject for each changed attribute.

### 5.5 Coverage

Canonical states remain: `observed`, `not_found_in_source`, `not_available_from_source`, `not_applicable`, `retrieval_failed`, `not_yet_processed`, `stale`, and `unknown`.

Public coverage projection:

```json
{"capability":"fundraising_expenditure","state":"not_available_from_source",
 "as_of":"2025-10-01","source_record_ids":["src:..."],"evidence_ids":["ev:..."],
 "note":"Rounded chart category; no defensible dollar amount published."}
```

Invariants: each current card has at most one current projection per registered capability; `observed` requires evidence or a source record; an output requiring a source cannot coexist with `not_yet_processed` for that capability; an extracted fundraising share cannot coexist with fundraising coverage `not_available_from_source`; `stale` retains the prior observation and adds freshness context, rather than silently changing it. Private operations retain attempts, retries and failure classifications. A capability registry is preferable to arbitrary strings, but its initial contents should be a product-approved small list.

## 6. Domain treatment

### Financials

Financial source truth is a `financial_report` with scope, period, evidence and one or more source-faithful statements. A statement has ordered rows, headings/subtotals/totals, original labels, current/comparative amounts, page/location and extraction metadata. Cash flow and equity statements remain supported even if not present in every release.

Canonical headline annotations (`revenue`, `total_expenses`, `surplus_deficit`, `assets`, `liabilities`, `net_assets`) refer to source-row observation IDs and carry a reconciliation set when legitimate observations conflict. A canonical headline is not another source row.

Functional allocations are direct source observations when a chart/table reports a percentage. A calculated amount is a separate mechanically-derived observation whose denominator and rounding warning are explicit. Funding-source observations retain their original row/label and may be linked to a controlled analytic category. `Donations, gifts & bequests` is an analytic aggregate: it lists components, denominator row, formula and share; it must not replace the printed source rows.

The EJA RC4 allocation denominator also exposes a sign-convention decision: its statement-derived total expenses is negative (`(5,852,789)`), while the headline `total_expenses` is positive. The vNext contract must choose and document one canonical magnitude convention, retaining the original printed/accounting sign on source rows. This is a product-contract decision because it affects downstream calculations and machine interpretation.

Fundraising expenditure is a separate analytic projection. It may be direct, mechanical, heuristic, LLM-interpreted or approved peer-imputed, but its extraction method and basis must remain separate. An unavailable/null result is valid and is the RC4 outcome for the corpus.

### Participation

`participation` is a canonical observation with mode, label, evidence IDs, optional `action_url`, status and effective/observed time. Evidence proves the claim; `action_url` is a user destination and may be absent. A dated event or vacancy remains an `opportunity`, not proof that the general participation path is current.

### Programs and subject boundary

Default to a nested program observation. Promote to a durable subject only when it has a durable independent identity/role, evidence supports it being separately useful to users, and its relationship to the parent is evidenced. Use `program_of` only for an explicit relationship assertion. Name similarity alone neither promotes nor merges. Ambiguity remains unresolved and is published as such where material.

### Identity and relationships

Retain opaque permanent `causebase_id`; ABN/ACNC/domain/name are external identifiers. Registration and DGR are roles/statuses. A relationship assertion has type, source/target IDs, evidence, status, confidence and valid/observed times. For a merge, split or tombstone, retain the old ID as resolvable with an explicit continuity assertion; do not rewrite history or turn every source record into one organisation.

### Classifications, geography and derivatives

Classification remains domain-specific: taxonomy ID/version, stable term ID/label, assignment basis, evidence and confidence. Source-native classification is direct; an LLM-assisted classification is derived and needs lineage. Descriptive geography remains human-friendly, while controlled navigation geography stays a distinct canonical navigation projection.

Derivative lineage is a reusable envelope with `derivative_kind`, generated/released time, input IDs/hashes, contract version, editorial/rule/prompt version, model where material, disposition and invalidation reason. Summary, taxonomy/classification, embedding and similarity may need distinct validity rules; do not force all into one generic recomputation engine.

## 7. Public and private boundary

Public: stable subject identity; public-safe source records; useful canonical observations; derived projections; evidence/provenance needed to inspect claims; current coverage/freshness; release/schema/taxonomy metadata; public source URLs; JSON/Markdown/bulk artefacts and schemas.

Private: credentials; raw prompts and excerpts; raw website/PDF archives where republication is not appropriate; cache/retry/log/staging state; unmoderated correction submissions; detailed token/spend telemetry; parser diagnostics; review notes; taxonomy-maintenance signals; full private source archive locations.

RC4’s largest boundary risk is duplicated full `source_payload` in cards and source-record sidecars. The proposed contract should publish a source record once and have cards reference it. Public source payload is retained only when both the source terms and the product need justify it.

## 8. Representative before/after examples

### A. EJA — rich report case

**RC4:** EJA has both an AIS 2022–23 financial record and a report 2024–25 record. The latter carries `$5,016,000` revenue, `$5,852,789` total expenses, printed income rows including “Donations, fundraisings and lectures” `$2,051,817`, report-statement rows, a fundraising chart allocation and a null fundraising-expenditure projection. The card also carries separate `financial_metrics`, a `donations_gifts_bequests` analytic object, source-native ACNC payload, program observations and a participation observation.

**vNext proposal:** retain the two distinct `financial_report` observations. Within the 2024–25 report, preserve the printed row and statement order; create `canonical_metric: revenue` referencing the total income row; create `analytic_aggregate: donations_gifts_bequests` referencing that printed income row and revenue denominator; preserve the reported fundraising percentage as `basis: direct, extraction_method: vision`; only create a dollar amount when a stated formula permits it, as a distinct `basis: mechanically_derived` observation. Keep expenditure null with the explicit coverage state. This prevents a report row, canonical metric and analytic aggregate from being mistaken for three different facts.

### B. Sparse case — Multicultural Senior Digital Support QLD Inc

**RC4:** the sparse card retains regulator identity and source-native information but has limited report/web enrichment.

**vNext proposal:** publish the regulator source record, resolved subject binding, registration and external identifiers; retain available canonical financial/regulatory fields; set each unprocessed or unavailable capability explicitly. Do not manufacture a summary, fundraising amount, participation action or program merely to satisfy a rich-card layout. A general-purpose LLM can distinguish “no report processed” from “the organisation does not have a report.”

### C. Identity/relationship — Defence Force Welfare Association – National Inc

**RC4:** website evidence refers to branch membership and branch activity. The card is a national subject, but no evidenced branch subjects or `branch_of` relationships are asserted.

**vNext proposal:** keep the national card and the source-native/website observations. Treat branch language as a descriptive participation/funding observation unless a branch has a durable subject and evidence supports a relationship. If a later branch subject is promoted, publish a `branch_of` assertion with evidence, time and confidence. Do not infer a network graph from names or prose.

### D. Multiple observations — EJA financial conflict/non-comparability

**RC4:** the AIS 2022–23 revenue is `$7,770,242`; the report 2024–25 revenue is `$5,016,000`. Neither should overwrite the other because the reporting periods differ. Within a single period, different scope or rounded sources may also legitimately diverge.

**vNext proposal:** observations retain reporting period/scope/source and the metric reconciliation object says `non_comparable`, `divergent`, or `precision_consistent` as applicable. The card may expose a clearly labelled latest/direct projection, but it must identify the selection policy. No universal “best value” scalar is introduced.

## 9. Breaking-change and migration inventory

| Change | Compatibility / impact | Risk |
| --- | --- | --- |
| Move source-native payload from card to referenced sidecar | Breaking for consumers reading `source_native_records[].source_payload` | Medium; improves size and ownership clarity. |
| Replace legacy display arrays with observation projections | Backward-compatible aliases possible for one pre-1.0 release | Medium; Viewer/search read these arrays today. |
| Restructure financial records around statements/row IDs and annotations | Breaking for consumers of convenience breakdowns/headline fields | High; must be validated against EJA and sparse AIS cards. |
| Add claim-basis/extraction-method separation | Additive initially; becomes required later | Low/medium; semantics gain is substantial. |
| Capability registry/current coverage projection | Additive for states; breaking for arbitrary custom capability strings | Medium. |
| Move source resolution and private taxonomy signals out of public card | Breaking only for consumers of implementation leakage | Low. |
| Standardise public release ownership/version source | Reversible publication cleanup, not a product-semantic change | Medium operationally, high governance value. |

Eventual Builder work: new vNext models/validators, projection adapters, coverage invariants, typed source-record references, statement/annotation conversion, derivative-lineage validation, and publication ownership checks. Eventual Viewer work: accept vNext projections, render claim basis/period/coverage, use sidecar source records, and avoid dependence on legacy arrays. Eventual Data work: immutable RC4 import, vNext schema/release path, compatibility documentation, migration fixture corpus and checksum validation.

## 10. Open product decisions

1. **Public source-native payload breadth.** Current behaviour can publish full structured regulator payloads. Options: (A) retain public-safe full payloads in sidecars; (B) publish selected fields only; (C) source-family policy. Trade-off is inspectability versus size/upstream terms. **Recommendation:** C, with one source-record sidecar rather than card duplication.
2. **Coverage capability registry.** Current capability names are implementation strings. Options: (A) fixed public registry; (B) namespaced extensible registry; (C) free strings. **Recommendation:** A small namespaced registry with an extension mechanism, approved before schema freeze.
3. **“Current” financial projection.** Current behaviour retains observations and does not impose precedence. Options: (A) no current scalar; (B) publish a labelled latest-by-policy convenience projection; (C) domain-specific selector. **Recommendation:** A for 0.x unless B can be made explicit and scope-safe; never silently choose.
4. **Public relationship continuity.** Current model supports relationships but not a released merge/split/tombstone projection. Options: (A) reserve fields; (B) publish continuity assertions when first needed; (C) create a public identity-history file now. **Recommendation:** B; reserve stable semantics but do not build empty machinery.
5. **Required summary for sparse cards.** Current Builder enriched-card invariant expects a summary. Options: (A) require sourced neutral summary; (B) allow null/structured sparse summary; (C) keep generated fallback. **Recommendation:** B for the public contract, so sparse records do not pressure fabricated enrichment.
6. **Public model/prompt lineage granularity.** Current synthesis metadata publishes model, prompt version and evidence hash. Options range from aggregate policy version to detailed public prompt/run identifiers. **Recommendation:** publish policy/prompt version and input hash, keep raw prompts/telemetry private.
7. **Canonical financial sign convention.** RC4 currently has both positive headline expenses and negative statement-accounting expenses for EJA. Options: (A) canonical metrics/analytic magnitudes are non-negative while source rows preserve original sign; (B) retain signed values throughout and require consumers to understand debit/credit semantics. **Recommendation:** A; it is more legible for users and LLMs while preserving source fidelity.

## 11. Recommended approval and implementation sequence

1. **Approve or amend this proposal** and resolve the product decisions above. No corpus work before this gate.
2. **Repair release ownership:** verify and import/copy the accepted immutable RC4 artefacts into CauseBase Data with manifest hashes; make Viewer consume the same artefact boundary. This is release-governance cleanup, not a semantic migration.
3. **Write the vNext public contract/schema and compatibility matrix** from approved decisions; retain a frozen RC4 fixture suite.
4. **Implement adapters and validators** in Builder against a small representative fixture set, especially EJA, sparse, relationship and conflicting-observation cards.
5. **Update Viewer only after Builder projection validates**, preserving an explicit RC4 compatibility mode during pre-1.0 transition.
6. **Run a controlled rebuild only after approval**, compare RC4/vNext record-by-record, human-review differences and publish a migration/release note.

### Abstraction check

The proposed observation envelope solves several demonstrated problems: duplicated provenance/time semantics, direct-versus-extraction confusion, and derivative traceability. It does not turn the contract into generic EAV: financial statements, relationships, programs, coverage and classifications remain explicit structures. No graph database, event sourcing, generic knowledge graph, backend service or API is proposed. Where RC4 has one proven use only (identity continuity and some derivative kinds), the proposal reserves a small representation rather than introducing a framework.

## 12. Review conclusion

The smallest defensible next move is approval of a precise vNext contract direction plus repair of the RC4 authoritative-release boundary. The pre-1.0 consolidation should improve explicitness for humans and general-purpose LLMs—identity, source, evidence, direct/derived status, period, coverage and freshness—without discarding source-native detail or inventing a universal ontology.

**NO production schema migration performed.**  
**NO public release changed.**  
**NO corpus processing or model calls performed.**
