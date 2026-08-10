# CauseBase Implementation Plan

**Status:** Accepted product direction; implementation details remain adaptable  
**Updated:** 2026-08-10

## Current increment: reality-spike evidence and provisional-contract validation

## Phase 2A completion record

1. The 120-subject heterogeneous, reproducible cohort uses authoritative ACNC promotion only and records selection strata/provenance privately.
2. Enrichment uses bounded current website/report evidence, cache-aware `gpt-5-mini` synthesis, CauseBase-native Taxonomy v0 and production embeddings.
3. The public candidate is allowlisted and contains cards, indices, taxonomy, aggregate coverage, semantic neighbours and an agent retrieval guide; source archives and model inputs stay private.
4. Viewer consumes the generated release, keeps similarity descriptive, and hands corrections to a configurable external intake URL using the documented prefill contract.

## Phase 2A.1 human-test hardening

Treat published release `phase2a-2026-08-10` as historical. Any corrected public-card content uses a new release version and separately recorded Viewer deployment commit. Maintain `main` -> manual validated bundle -> static-only `gh-pages`; no ordinary push deploys. Human feedback is a private external form with generic and field-specific prefill, while the 30-case review pack remains local/private.

1. Establish three repository boundaries and configure these path classes:
   - durable OneDrive archive for completed source and processed evidence;
   - local mutable runtime for state, temp, cache, logs and staging;
   - public Data publication destination.
2. Replace the provisional one-ABN identity assumption with a stable opaque `causebase_id`, `subject_kind`, `external_identifiers[]` and explicit `relationships[]`.
3. Preserve synthetic fixtures, but label all current schemas and rendered outputs as provisional.
4. Make publication staging isolated and allowlisted; preserve the previous valid candidate on failure.
5. Add ACNC/AIS/DGR structured-source interfaces sufficient for a 30–50 subject reality spike.
6. Select a deliberately awkward cohort; record selection rationale rather than treating it as a representative national sample.
7. Acquire representative structured, report and website evidence; record failures as domain findings.
8. Produce and maintain a Codex-to-ChatGPT handoff before stabilising public v0.x card, identity or evidence schemas.

### Reality-spike completion record

- The full 36-seed cohort has been processed through current ACNC and AIS extracts (8 resolved, 26 candidate, 2 ambiguous), with no name-only promotion.
- Three reports and two web snapshots are retained/extracted privately; five governed real cards pass registry-gated staging validation.
- The DGR source is available through the ABR national bulk extract but is intentionally deferred to a separately governed national ingest because it is not a cohort-scale feed.

## Phase 1 completion record

- National ACNC, AIS and ABR/DGR sources are privately archived with retrieval metadata, hashes and licence information.
- National normalisation writes private source-record records and diagnostics without forcing subject resolution.
- The safe Phase 1 staging candidate publishes only public registry and aggregate structural metadata; raw source content remains excluded.

## Web evidence pipeline

Website ingestion is a core enrichment stage, separate from report processing. It starts with homepage, About/What we do, programs, volunteer/get involved, events, governance, news/blog, feeds and selected opportunity pages. It produces stable-understanding evidence separately from transient current-activity and opportunity observations, each with independent freshness/refresh policies.

## Enriched-card outputs

For a real enriched subject, treat classification, embedding and similarity outputs as related derived products. Use production embeddings only for real enriched cards; synthetic hash embeddings must never be presented as public semantic similarity.

## Correction delivery sequence

The Phase 2/3 enriched-card release requires basic private intake with prefilled card/field/release context and a traceable acknowledgement. Public proposal records, moderation decisions and full history arrive later. No raw intake payload is automatically public.

## Contract discipline

The project is contract-led, not contract-frozen. Public schema versions may deliberately break before public 1.0, with clear versioning and migration/release notes. The reality spike determines when a contract is sufficiently grounded to stabilise.
