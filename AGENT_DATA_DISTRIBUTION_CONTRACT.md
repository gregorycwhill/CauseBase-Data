# Agent and data distribution contract — v0.5

An unfamiliar machine consumer starts at `current-release.json`, follows its
immutable manifest URL, and uses the manifest’s dataset/contract version before
retrieving any record. It must not infer a “latest” release.

- **Subject identity:** `causebase_id`; canonical HTML is
  `/charity/<causebase_id>/`.
- **Representations:** each direct page links to card JSON, Markdown, schema,
  manifest, source-native records and evidence links.
- **Interpretation:** `claim_basis` distinguishes direct, mechanically derived,
  inferred and estimated material; `extraction_method` describes how source
  syntax was recovered. Reporting period, scope, source labels and signs stay
  with financial observations.
- **Epistemic states:** coverage is capability-specific. `unknown`,
  `not_yet_processed`, `not_available_from_source`, `retrieval_failed` and
  `not_applicable` are not negative claims.
- **Citation:** cite the CauseBase direct URL, dataset and contract version,
  then the linked evidence/source record for a source assertion. Do not cite a
  derived amount as though it were a direct source value.
- **Related records:** use explicit relationships, source bindings and
  source-native links; never resolve from a name/domain alone.

The Viewer is a generated static projection of one explicitly pinned immutable
Data release. It owns no charity facts and provides no backend/API guarantee.
