# CauseBase Product Contract

**Status:** Canonical shared CauseBase product contract  
**Version:** 0.1-draft

This document is housed in CauseBase Data for convenience. It governs CauseBase Data, CauseBase Builder and CauseBase Viewer equally; CauseBase Data is not the parent product.

## Purpose

CauseBase is open, inspectable and machine-legible public infrastructure about Australian charities. It helps people, software and AI agents discover, search, inspect, understand, cite, correct, classify, analyse and integrate charity information.

CauseBase is not a recommendation, charity-rating, donation-optimisation, payment, persuasion or behaviour-change product. Those choices belong to downstream products.

## Core object and identity

The CauseBase Card is the conceptual knowledge object. JSON, JSONL, CSV, Parquet, Markdown, Viewer displays, embeddings and similarities are projections of one underlying understanding.

Each subject has an opaque stable `causebase_id`, `subject_kind`, `external_identifiers[]`, `registrations[]`, `tax_statuses[]` and, where needed, explicit relationships. Supported kinds are organisation, organisation group, legal entity, organisational unit, fund and program. ABN, ACNC registration ID, ACN, domains and other identifiers are external identifiers; registrations and DGR are roles/statuses, not kinds. CauseBase must not assume that a public-facing organisation, legal entity, registered charity, fund, branch, program or operating unit maps one-to-one to an ABN or ACNC record.

Source records have identities independent of CauseBase subjects. Their resolution records status, basis, confidence, supporting/conflicting signals and review state. A source with an ambiguous or medium-confidence name match cannot silently populate a public card.

The current model remains provisional through the 30–50 subject reality spike.

## Evidence, estimates and coverage

CauseBase combines authoritative records, organisation self-report, independent references, community contributions and CauseBase derivations. Material assertions expose appropriate evidence and epistemic status.

Fundraising expenditure is a required best estimate for an enriched subject. Direct disclosure, deterministic reconstruction, documented heuristics, LLM interpretation, peer imputation and a documented fallback prior are distinct methods and must remain visible.

Coverage is represented as explicit capabilities—such as regulatory, financials, annual report, website, current activity, taxonomy and embedding—rather than treating an enrichment label as the primary truth.

Canonical financial observations retain exact-decimal source amount/currency/unit scale and exact-decimal normalised amount/currency. Bare floats are not canonical amounts. Unit normalisation is not currency conversion, and any future FX conversion is an explicit derived value with provenance.

Where legitimate source observations differ, CauseBase retains all observations and exposes their reconciliation status. v0.x does not apply universal source precedence or manufacture reconciled values; downstream work requiring one scalar remains unresolved unless it declares an explicit selection/reconciliation policy.

## Taxonomies and semantics

Multiple taxonomies coexist. Every classification identifies taxonomy, version, stable term, assignment method, evidence and confidence where relevant. CauseBase taxonomy v0 is designed and tested with the reality spike and enriched-card work; it must not be forced to mimic regulator categories.

Embeddings and similarity are descriptive, versioned artefacts. Fake fixture vectors are never public semantic functionality. For real enriched cards, classification, embedding and precomputed similarity are related outputs.

## Corrections and rights

Published cards are generated outputs. People can challenge them through correction proposals. The first public enriched-card experience provides low-friction private intake with prefilled context and acknowledgement. Raw submissions are not automatically public; moderation produces governed public proposal and decision records where appropriate.

CauseBase-originated data, cards and taxonomies are intended to be broadly reusable. Upstream licences, attribution and third-party copyright remain applicable. Raw reports and website copies may be retained for reproducibility without being republished.

## Agent usability

Public releases provide stable subject/card URLs, per-subject JSON and Markdown, schema and licence metadata, provenance/freshness/version conventions, current-release discovery and compact selective retrieval. Static public artefacts remain independently usable without an API or MCP service.
