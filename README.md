# CauseBase Data

**Status:** Public schema remains provisional through pre-1.0 public-contract consolidation and golden-corpus review

CauseBase Data is the public, versioned data sub-product of CauseBase. It publishes releases, cards, datasets, taxonomies, schemas, manifests and governed public correction records when those records are introduced.

It does not own the CauseBase product contract. CauseBase Data, Builder and Viewer are sibling sub-products governed by the shared CauseBase product contract.

## Current role

This repository is established to provide one public-contract and publication boundary. The synthetic bootstrap and historical 30–50 subject reality spike informed the model but did not make it stable. No public v0.x identity, card or evidence schema is stable until public-contract consolidation and golden-corpus review are complete.

## Shared product-contract documents

- `PRODUCT.md`
- `PRINCIPLES.md`
- `EXPERIENCES.md`
- `CURRENT_STATE.md` — current cross-product status
- `ROADMAP.md` — phased product direction
- `IMPLEMENTATION_PLAN.md` — current implementation sequence
- `TEST_PLAN.md` — cross-product release/test strategy
- `CODEX_TO_CHATGPT_HANDOFF.md` — latest product/implementation handoff

These are the canonical shared CauseBase documents. Builder and Viewer retain only component-owned implementation documentation and link here for project state and plans.

## Intended public release shape

```text
releases/<version>/
  manifest.json
  index.json
  cards/<safe-locator>.json
  cards/<safe-locator>.md
  taxonomies/
  schemas/
  causebase.jsonl
  causebase.csv
  causebase.parquet
```

The exact v0.x format remains provisional. Each record uses an opaque `causebase_id`; ABN and ACNC identifiers are external identifiers.

## Durable subject registry

`subject-registry.json` is governed project identity state. It records opaque CauseBase subject IDs, promotion provenance and append-only lifecycle history. IDs are minted only through an explicit Builder promotion operation after resolved evidence; source records and external identifiers are never used as CauseBase IDs. Merged, split and void identities remain resolvable in the registry.

## Licence and upstream material

CauseBase-originated data and content are licensed under [CC BY 4.0](LICENSE). This does not license third-party regulator data, annual reports, website content, trademarks or other source evidence. Raw upstream material and private processing archives are excluded; downstream users must comply with the relevant upstream terms and attribution requirements.
