# CharityGraph naming

CharityGraph is the current project name. Use `CharityGraph` for product-facing prose and `charitygraph` for new code, packages, CLI commands, environment variables, current output names, and active repository URLs.

The neutral data-contract identifiers `entity_id`, `source_record_id`, `subject_binding_id`, `observation_id`, `evidence_id`, `taxonomy_id`, `schema_version`, `claim_basis`, and `extraction_method` are not product-brand identifiers and must remain neutral.

`causebase_id` is a legacy identifier in the immutable 0.5 release. It remains readable as a deprecated compatibility alias until the first post-0.5 compatibility release; it is not a template for a new `charitygraph_id` entity field.

Historical CauseBase names may occur only in the migration and history material, compatibility tests/fixtures, and immutable releases.
