# CauseBase End-to-End Experiences

**Status:** Canonical shared CauseBase product contract  
**Version:** 0.1-draft

## Discover

A person or agent should quickly identify CauseBase’s purpose, non-goals, licence, current release, schemas, provenance conventions, correction path and available artefacts.

## Find and inspect

Viewer provides understandable search and filters over the public index. Selecting a result presents a CauseBase Card with identity, external identifiers, neutral summary, self-description, activities, beneficiaries, geography, participation, opportunities/freshness, financials, estimates, taxonomies, evidence and release metadata.

## Explore

Text/faceted retrieval and, once real enriched-card embeddings exist, semantic neighbours/search help users navigate the information space. Neither implies that a result is better or should be supported.

## Correct

A user can challenge a material field without re-entering subject, field, current value or release. First launch uses private, traceable intake. Later, moderated public proposal records show appropriate status, decisions and incorporated releases.

## Reuse

Researchers, developers and agents can retrieve a release manifest, compact index, individual JSON/Markdown cards, taxonomies and analytical formats. They can cite versions and provenance without downloading the whole corpus when they need one subject.

## Downstream use

Downstream experiences may apply their own preferences, ranking, recommendation and transaction logic. CauseBase supplies inspectable evidence and structure, not those value judgments.

## Intent × channel × scale

| Intent | Viewer/web | Consumer LLM | Analytical tools | Product integration |
| --- | --- | --- | --- | --- |
| Funder | Inspect one organisation or compare a shortlist | Ask a realistic funding question and receive evidence-grounded synthesis | Compare a portfolio | Bring charity intelligence into a giving workflow |
| Product builder | Inspect/reference contract behaviour | Validate downstream LLM behaviour | Explore data quality/corpus shape | Consume JSON, bulk data or future API access |
| Researcher/analyst | Inspect records and provenance | Research with public evidence | Analyse sector, geography and ecosystem/corpus patterns | Reuse governed datasets |
| Charity | Inspect and contest its representation | Understand how public data may be interpreted | Review/export its data | Integrate correction/release workflows |

Organisation, portfolio/comparison and ecosystem/corpus are independent scales. Funder × consumer LLM × organisation is a first-order experience; Viewer remains the reference, debugging and inspection surface for it.
