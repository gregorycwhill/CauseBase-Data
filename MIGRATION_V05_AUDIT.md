# RC4 to public contract 0.5 migration audit

**Status:** Gate A blocked — deterministic provenance gap in immutable RC4

This audit was run against the immutable RC4 release at
`releases/rc4-2026-08-14`. It performed no source acquisition, model call,
corpus expansion or mutation of that release.

## Inventory

- RC4 cards: 120
- RC4 public source-record sidecars: 228
- RC4 top-level card fields: 44, each classified by
  `RC4_TO_VNEXT_COMPATIBILITY.md`; no unclassified field category was found.

## Gate A blocker

The approved v0.5 contract requires domain observations to retain governed
provenance. The approved migration rules also prohibit promoting legacy display
arrays or strings to evidence-bound v0.5 observations when provenance is
absent, and prohibit silent material data loss.

The immutable RC4 cards contain these observation records without evidence IDs:

| RC4 field | Records | Records without evidence IDs |
| --- | ---: | ---: |
| `activity_observations` | 402 | 402 |
| `beneficiary_observations` | 226 | 226 |
| `geography_observations` | 218 | 218 |
| `classifications` | 813 | 573 |

Participation, programs, funding sources and fundraising methods have explicit
evidence where present. However, the unbound records above cannot
deterministically be represented as direct v0.5 observations without inventing
evidence or changing their claim basis. Removing them would be unexplained
material data loss. The immutable RC4 public release contains insufficient
governed data to choose between those outcomes.

## Consequence

Gate A cannot pass. No immutable v0.5 public release, Viewer migration,
deployment, or current-release-pointer update may occur until an explicit
product decision establishes the approved treatment for these provenance-free
legacy values.

The Builder v0.5 implementation and the current frozen-fixture adapter remain
useful pre-promotion work, but cannot be used to claim a lossless 120-card
release under the approved rules.
