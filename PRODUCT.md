# CauseBase Product Contract

**Status:** Canonical shared CauseBase product contract  
**Version:** 0.1-draft

This document is housed in CauseBase Data for convenience. It governs CauseBase Data, CauseBase Builder and CauseBase Viewer equally; CauseBase Data is not the parent product.

## Purpose

CauseBase is open, inspectable and machine-legible public infrastructure about Australian charities. It helps people, software and AI agents discover, search, inspect, understand, cite, correct, classify, analyse and integrate charity information.

CauseBase is not a recommendation, charity-rating, donation-optimisation, payment, persuasion or behaviour-change product. Those choices belong to downstream products.

CauseBase publishes source observations and defensible derived measurements. It does not publish charity rankings, fundraising-efficiency ratings, cost-to-raise-a-dollar, fundraising ROI, donor-acquisition efficiency or causal assertions linking fundraising expenditure to particular income. Downstream products may make evaluative use of the published ingredients under their own methodology, assumptions, branding and disclosures.

## Users, channels and question scale

CauseBase serves four intent groups: funders (individual donors, family offices, trusts/foundations and institutions) who find, understand, compare and diligence organisations; product builders who use CauseBase as a charity-intelligence data layer; researchers/analysts who study organisations, sectors, geography, service ecosystems and change; and charities/their advisers who inspect and contest their representation.

Intent, interaction channel and question scale are orthogonal. Channels are Viewer/web; general-purpose consumer LLMs such as ChatGPT, Gemini, Claude and Grok; spreadsheets and analytical tools (CSV/XLSX, Python/R/BI and Parquet); and product/system integration (JSON, bulk data and future programmatic access). Question scale is organisation, portfolio/comparison or ecosystem/corpus.

LLMs are a major distribution channel, not merely an implementation technology. A dominant user path may be funder → consumer LLM → CauseBase evidence/data → downstream LLM synthesis or recommendation, without a Viewer visit. CauseBase does not therefore need to host its own chatbot. It must make its public records discoverable and legible to general-purpose assistants without CauseBase-specific training.

## Core object and identity

The CauseBase Card is the conceptual knowledge object. JSON, JSONL, CSV, Parquet, Markdown, Viewer displays, embeddings and similarities are projections of one underlying understanding.

Each subject has an opaque stable `causebase_id`, `subject_kind`, `external_identifiers[]`, `registrations[]`, `tax_statuses[]` and, where needed, explicit relationships. Supported kinds are organisation, organisation group, legal entity, organisational unit, fund and program. ABN, ACNC registration ID, ACN, domains and other identifiers are external identifiers; registrations and DGR are roles/statuses, not kinds. CauseBase must not assume that a public-facing organisation, legal entity, registered charity, fund, branch, program or operating unit maps one-to-one to an ABN or ACNC record.

Source records have identities independent of CauseBase subjects. Their resolution records status, basis, confidence, supporting/conflicting signals and review state. A source with an ambiguous or medium-confidence name match cannot silently populate a public card.

The model is pre-1.0 and remains revisable. RC4 and the upcoming public-contract consolidation provide its current basis; the 30–50 subject reality spike is historical validation work, not the current product gate.

## Evidence, estimates and coverage

CauseBase combines authoritative records, organisation self-report, independent references, community contributions and CauseBase derivations. Material assertions expose appropriate evidence and epistemic status.

For the approved vNext direction, claim basis explains why a proposition is justified (`direct`, `mechanically_derived`, `inferred` or `estimated`); extraction method explains how evidence was recovered (for example API, text, table, OCR, vision, LLM or manual). An LLM or vision extraction does not by itself make a directly reported source fact inferred or estimated. This direction is not yet an implemented RC4 schema change.

Fundraising expenditure is a required capability and coverage field for an enriched subject, assessed on a best-effort basis. Publish only a defensible method and preserve that method visibly: direct disclosure, deterministic/mechanical reconstruction, defensible attribution bounds or specifically governed interpretation, then unavailable/null. There is no universal fallback percentage, broad prior, peer-imputation fill, forced point estimate or automatic midpoint; null is the correct result when no defensible result exists. The generic derivation vocabulary may retain `peer_imputation` for a separately approved future domain, but it is not permitted for CauseBase fundraising expenditure.

Coverage is represented as explicit capabilities—such as regulatory, financials, annual report, website, current activity, taxonomy and embedding—rather than treating an enrichment label as the primary truth.

The approved next-phase design keeps organisational Ethos separate from
`service_or_mission_orientation`, which records how an ethos enters service,
formation, worship, proselytising or advocacy. The preferred public name for
the neutral collection of contextual observations formerly discussed as
Notability is `notable_context`; it is not a score or reputation judgement.
Neither construct is part of the immutable v0.5 release. Fundraising-industry
material is an approved experimental public source category for a bounded,
review-only pilot; it does not authorise national crawling, public sidecar
republication or automatic identity binding.

A capability is `observed` when CauseBase has a defensible governed observation satisfying it, even where the source did not print an exact preferred scalar. Current financial views may be explicitly labelled pointers over retained observations, with a scope-safe selection policy; they are never independent or silently selected “best” values. Sparse cards may have no summary where structured authoritative evidence is the honest available record.

Canonical financial observations retain exact-decimal source amount/currency/unit scale and exact-decimal normalised amount/currency. Bare floats are not canonical amounts. Unit normalisation is not currency conversion, and any future FX conversion is an explicit derived value with provenance.

For the approved vNext direction, ordinary canonical financial magnitudes such as revenue, expenses, assets, liabilities and fundraising expenditure are non-negative. Surplus/deficit and net assets/equity retain economically meaningful signs. Source statement rows always retain their printed/accounting signs.

Where legitimate source observations differ, CauseBase retains all observations and exposes their reconciliation status. v0.x does not apply universal source precedence or manufacture reconciled values; downstream work requiring one scalar remains unresolved unless it declares an explicit selection/reconciliation policy.

## Taxonomies and semantics

Multiple taxonomies coexist. Every classification identifies taxonomy, version, stable term, assignment method, evidence and confidence where relevant. CauseBase taxonomy v0 is designed and tested with the reality spike and enriched-card work; it must not be forced to mimic regulator categories.

Embeddings and similarity are descriptive, versioned artefacts. Fake fixture vectors are never public semantic functionality. For real enriched cards, classification, embedding and precomputed similarity are related outputs.

## Corrections and rights

Published cards are generated outputs. People can challenge them through correction proposals. The first public enriched-card experience provides low-friction private intake with prefilled context and acknowledgement. Raw submissions are not automatically public; moderation produces governed public proposal and decision records where appropriate.

CauseBase-originated data, cards and taxonomies are intended to be broadly reusable. Upstream licences, attribution and third-party copyright remain applicable. Raw reports and website copies may be retained for reproducibility without being republished.

## Agent usability

Public releases provide stable subject/card URLs, per-subject JSON and Markdown, schema and licence metadata, provenance/freshness/version conventions, current-release discovery and compact selective retrieval. Static public artefacts remain independently usable without an API or MCP service.

Machine legibility is a first-order product requirement: semantic crawlable HTML, stable canonical URLs/identifiers, manifests, taxonomy/geography semantics, direct-versus-derived observation status, reporting period/scope, coverage/absence states and freshness/version must work across the corpus, not just at a known card URL.
