# CauseBase to CharityGraph inventory

Generated during Task 1 on 2026-08-22 from a case-insensitive scan of the Builder, Data, and Viewer repositories, excluding private runtime, virtual-environment, dependency, and Git metadata directories.

| Area | Classification | Treatment |
| --- | --- | --- |
| Repository names, remotes, clone links, badges, workflow checkout references, and Pages URLs | Rename now | `charitygraph`, `charitygraph-data`, and `charitygraph-viewer`; GitHub Pages uses the renamed Viewer repository URL. |
| Builder package, distribution, CLI, active environment variables, output names, user-facing help, and new taxonomy filename | Rename now | `charitygraph`, `charitygraph` CLI, `CHARITYGRAPH_*`, and `charitygraph.*`. |
| Current README, AGENTS, Pages metadata, sitemap/robots, deployment workflow, and new architecture/contract documents | Rename now | CharityGraph is the only active public product name. |
| `causebase_id`, `causebase_summary`, `causebase_geography`, source-record locators containing `cb_`, and 0.5 card fields | Retain temporarily as a compatibility alias | The legacy fields are externally meaningful. A successor contract must prefer neutral identifiers, not create `charitygraph_id`. |
| Legacy Builder import, CLI, and environment variables | Retain temporarily as a compatibility alias | They warn and are scheduled for removal at the next pre-1.0 breaking release. |
| `src/charitygraph/phase2*`, `v05`, old taxonomy-review work, and release-input readers | Retain as historical provenance | These are retained only to validate/reproduce legacy material; they are not the active CharityGraph contract. |
| `releases/v0.5.0-2026-08-15/**` and its manifest/checksums | Immutable—do not modify | Original branding, schema IDs, filenames, and card fields remain verifiable history. |
| Earlier release directories, legacy Viewer release snapshots, governed historical inputs, and historical RC documentation | Retain as historical provenance | Historical names are not current-facing branding. |

## Scan coverage and allowlist

The brand lint scans active package metadata, configuration, source entry points, workflows, Pages metadata, top-level current documentation, and the vNext schemas. It permits legacy references only in migration/history material, compatibility tests, declared legacy pipeline modules, and immutable releases. The final verification records any remaining paths and classifies them with this table.

## Pages and GitHub metadata

At inventory time, only the Viewer repository had Pages enabled, from `gh-pages`, with no CNAME and no custom domain. No CauseBase custom domain is controlled or retained. The legacy Pages endpoint is replaced by the renamed repository's GitHub Pages endpoint; it must not host a competing CauseBase-branded site after deployment.
