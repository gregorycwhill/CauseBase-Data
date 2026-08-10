# CauseBase Product Roadmap

**Status:** Accepted product direction  
**Updated:** 2026-08-10

CauseBase is one product with three sub-products: CauseBase Data, CauseBase Builder and CauseBase Viewer. The shared CauseBase product contract governs all three. Documents may live in the CauseBase Data repository for convenience, but CauseBase Data is not the parent product.

## Phase 0 — Foundations

- establish separate Builder, Data and Viewer repositories and durable/archive versus mutable/runtime storage;
- maintain a provisional CauseBase subject, card, evidence and provenance model;
- retain synthetic fixtures for deterministic testing and publication-safety work;
- make Builder/Viewer baseline behaviour reproducible and credential-free;
- establish shared documentation, release safety and agent-oriented public-data conventions.

No public schema is frozen in this phase.

## Phase 0.5 — Reality spike

Process 30–50 deliberately heterogeneous Australian charities through structured ACNC/AIS/DGR evidence, representative annual or financial reports, and selected website evidence. Include identity, reporting, web-presence and accounting edge cases. Use observed failures to revise the provisional identity, card, financial-period, evidence, provenance and coverage models. Produce a product handoff before stabilising v0.x public contracts.

**Current completion evidence:** 36 seeds processed; current ACNC/AIS outcomes retained privately; three reports and two website snapshots acquired; five governed real-card staging builds validated. DGR is explicitly deferred to a separately governed ABR national-bulk ingest, rather than inferred from its absence in a small spike.

## Phase 1 — National structured backbone

Build national structured coverage from authoritative ACNC, AIS, DGR/ABR or equivalent sources. Record external identifiers and source relationships without assuming a one-ABN-one-subject model. This backbone may be published or downloadable before the distinctive enriched-card experience launches.

## Phase 2 — Real enriched slice

Build roughly 100–1,000 real enriched cards using report and web evidence, the fundraising-estimation ladder, GPT-5-mini synthesis, CauseBase taxonomy v0, external taxonomies, real embeddings, precomputed semantic neighbours and basic correction intake. CauseBase taxonomy v0 is designed and tested in parallel with the reality spike.

## Phase 3 — Public launch

Launch CauseBase Data and Viewer around a visibly distinctive enriched-card experience: dense neutral cards, provenance, estimation method, multiple taxonomies, real semantic exploration where reliable, and a working low-friction "Suggest correction" intake. Do not present CauseBase merely as a cleaned regulator mirror.

## Phase 4 — Scale enrichment

Expand toward roughly 10,000 enriched cards with incremental refresh, source/evidence hashing, website and feed refresh, current opportunities, model routing/cost controls and a larger evaluation corpus.

## Phase 5 — Governance depth

Add governed public proposal records, review/status history, discussion integration, taxonomy contribution governance, richer provenance/history and correction-dependent rebuilds. Raw correction submissions remain private until moderated.

## Phase 6 — Agent ecosystem

Improve discoverability, stable entity/card URLs, per-entity JSON and Markdown, licence/schema/provenance metadata, selective retrieval examples and citation conventions. Add API or MCP services only when demonstrated demand justifies them; static public artefacts remain independently usable.

## Phase 2A completion note

A 120-card governed candidate is validated and staged for the Viewer with private website/report evidence processing, `gpt-5-mini` synthesis, Taxonomy v0, `text-embedding-3-small` neighbours, per-card JSON/Markdown, an agent guide and a configurable correction-intake contract. Human evaluation assessment and live endpoint configuration remain follow-on operational work.
