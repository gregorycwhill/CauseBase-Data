# CauseBase Data

**Status:** Foundation repository — public schema remains provisional through the reality spike

CauseBase Data is the public, versioned data sub-product of CauseBase. It publishes releases, cards, datasets, taxonomies, schemas, manifests and governed public correction records when those records are introduced.

It does not own the CauseBase product contract. CauseBase Data, Builder and Viewer are sibling sub-products governed by the shared CauseBase product contract.

## Current role

This repository is established early to provide one public-contract and publication boundary. The synthetic bootstrap is not evidence that the domain model is correct. No public v0.x identity, card or evidence schema is stable until the 30–50 subject reality spike is reviewed.

## Shared product-contract documents

- `PRODUCT.md`
- `PRINCIPLES.md`
- `EXPERIENCES.md`

The workspace-level roadmap, implementation plan and test plan remain at the CauseBase workspace root during the foundation increment. Builder and Viewer implementation documents defer to these shared contracts.

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
