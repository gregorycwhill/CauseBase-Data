# RC4 to public contract 0.5 migration audit

**Status:** Gate A passed; immutable v0.5 release assembled

This audit was run against the immutable RC4 release at
`releases/rc4-2026-08-14`. It performed no source acquisition, model call,
corpus expansion or mutation of that release.

## Inventory

- RC4 cards: 120
- RC4 public source-record sidecars: 228
- RC4 top-level card fields: 44, each classified by
  `RC4_TO_VNEXT_COMPATIBILITY.md`; no unclassified field category was found.

## Provenance recovery and legacy preservation

The approved v0.5 contract requires domain observations to retain governed
provenance. The approved migration rules also prohibit promoting legacy display
arrays or strings to evidence-bound v0.5 observations when provenance is
absent, and prohibit silent material data loss.

The immutable RC4 cards contain these observation records without evidence IDs.
The approved treatment is exact deterministic recovery from an existing public
sidecar when a unique literal match exists; all other values are retained in
the transitional domain-grouped `legacy_unbound` container, without an
invented evidence reference or claim basis.

| RC4 field | Records | Records without evidence IDs |
| --- | ---: | ---: |
| `activity_observations` | 402 | 402 |
| `beneficiary_observations` | 226 | 226 |
| `geography_observations` | 218 | 218 |
| `classifications` | 813 | 573 |

The initial exact public-sidecar pass produced:

| Domain | Unbound input | Exact recovered | `legacy_unbound` |
| --- | ---: | ---: | ---: |
| Activities | 402 | 0 | 402 |
| Beneficiaries | 226 | 0 | 226 |
| Descriptive geography | 218 | 20 | 198 |
| Classifications | 573 | 0 | 573 |

Recovery requires one unique literal value in a public RC4 `source_fields` or
`source_payload` location and records a deterministic v0.5 evidence locator
with that JSON-pointer location. It does not use fuzzy matching, semantic
similarity, a model, or an organisation-specific rule. An exact classification
term-label match is not sufficient: no deterministic taxonomy-mapping rule is
available, so all 573 provenance-free classifications remain legacy material.

The 120-card staging adapter preserves all 13 participation observations, 211
programs and 240 evidence-bound classifications as canonical observations. It
also retains the one funding-source and five fundraising-method records in
`legacy_unbound` pending their explicit canonical reconstruction; their
presence does not make the corresponding capability observed.

Of 88 RC4 financial records, two have source-sidecar evidence that resolves
within immutable RC4 and are represented as v0.5 reports with retained
statements, allocations and 11 structured financial observations. The remaining
86 historical AIS records have evidence IDs that do not resolve to one of the
228 immutable source sidecars. They are retained byte-for-byte as
`legacy_unbound.financial_records`; the adapter does not bind them to a newer
AIS snapshot or treat legacy preservation as observed coverage.

## Consequence

The provenance blocker is resolved by the approved preservation mechanism.
Immutable `releases/v0.5.0-2026-08-15` contains 120 cards and 228 public
source sidecars. Its 349-artefact manifest, complete JSON Schema run,
source-reference checks and losslessness audit all pass. Viewer migration is
validated locally; deployment and the live-release-pointer update remain
operational steps.

The Builder v0.5 implementation and the current frozen-fixture adapter remain
useful pre-promotion work, but cannot be used to claim a lossless 120-card
release under the approved rules.
