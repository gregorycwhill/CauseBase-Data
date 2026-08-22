# CharityGraph Data

CharityGraph Data is the public, versioned home for CharityGraph contracts, schemas, taxonomies, releases, cards, manifests, and shared project memory. CharityGraph publishes structured, provenance-aware Australian charity data and is unaffiliated with the unrelated Australian project using the former CauseBase name.

## Architecture

The project separates source-native records, canonical observations/subject bindings/evidence, and derived projections. JSON and Markdown cards with their sidecars are authoritative; CSV and Parquet are convenience projections. See [architecture](docs/architecture.md), [data contract](docs/data-contract.md), and [naming](docs/naming.md).

## Releases and compatibility

`releases/v0.5.0-2026-08-15` is immutable historical material. Its original paths, filenames, checksums, and `causebase_id` identifiers remain intact for verification. Successor work uses CharityGraph naming; the legacy identifier is a temporary compatibility alias documented in the [migration guide](docs/migration/causebase-to-charitygraph.md).

## Shared product documents

`CURRENT_STATE.md`, `ROADMAP.md`, `IMPLEMENTATION_PLAN.md`, `TEST_PLAN.md`, and `CODEX_TO_CHATGPT_HANDOFF.md` are the canonical cross-product documents. Component-specific implementation material stays with its owning repository.

## Licence and upstream material

CharityGraph-originated data and content are licensed under [CC BY 4.0](LICENSE). The licence does not grant rights in third-party regulator data, annual reports, website content, trademarks, or other source evidence. Raw upstream material and private processing archives are excluded; downstream users remain responsible for applicable terms and attribution.
