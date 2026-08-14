// Draft-contract validation only. This intentionally does not modify production data or consumers.
import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";

const root = new URL("../..", import.meta.url);
const examples = new URL("../../examples/vnext/", import.meta.url);
const requiredCard = ["causebase_id", "contract_version", "subject_kind", "identity", "release", "source_record_refs", "coverage", "evidence"];
const bases = new Set(["direct", "mechanically_derived", "inferred", "estimated"]);
const methods = new Set(["api", "document_text", "table", "ocr", "vision", "manual", "deterministic_parser", "llm"]);
const coverage = new Set(["observed", "not_found_in_source", "not_available_from_source", "not_applicable", "retrieval_failed", "not_yet_processed", "stale", "unknown"]);
const errors = [];
const requireKeys = (value, keys, file, path) => keys.forEach(key => { if (!(key in value)) errors.push(`${file}: ${path}.${key} is required`); });
const checkObservation = (observation, file, path) => {
  requireKeys(observation, ["observation_id", "subject_id", "kind", "claim_basis", "source_record_ids", "evidence_ids", "time", "warnings"], file, path);
  if (!bases.has(observation.claim_basis)) errors.push(`${file}: ${path}.claim_basis is invalid`);
  if (observation.extraction_method && !methods.has(observation.extraction_method)) errors.push(`${file}: ${path}.extraction_method is invalid`);
  if (observation.claim_basis !== "direct" && !observation.derivation) errors.push(`${file}: ${path} requires derivation for non-direct claim basis`);
};

for (const schema of ["common.schema.json", "financial.schema.json", "source-record.schema.json", "release.schema.json", "card.schema.json"]) {
  try { JSON.parse(await readFile(new URL(schema, import.meta.url), "utf8")); } catch (error) { errors.push(`${schema}: invalid JSON: ${error.message}`); }
}
for (const file of (await readdir(examples)).filter(name => name.endsWith(".json"))) {
  const card = JSON.parse(await readFile(new URL(file, examples), "utf8"));
  requireKeys(card, requiredCard, file, "card");
  if (card.contract_version !== "0.5") errors.push(`${file}: contract_version must be 0.5`);
  requireKeys(card.identity ?? {}, ["legal_name", "display_name", "external_identifiers", "registrations", "tax_statuses"], file, "identity");
  requireKeys(card.release ?? {}, ["release_id", "dataset_version", "generated_at"], file, "release");
  if (!Array.isArray(card.coverage?.current)) errors.push(`${file}: coverage.current must be an array`);
  const capabilities = new Set();
  for (const item of card.coverage?.current ?? []) {
    requireKeys(item, ["capability", "status", "assessed_at"], file, "coverage.current[]");
    if (!coverage.has(item.status)) errors.push(`${file}: invalid coverage status ${item.status}`);
    if (capabilities.has(item.capability)) errors.push(`${file}: duplicate current coverage ${item.capability}`);
    capabilities.add(item.capability);
  }
  for (const report of card.financial_reports ?? []) for (const statement of report.statements ?? []) for (const [index, row] of (statement.rows ?? []).entries()) checkObservation(row, file, `financial_reports[].statements[].rows[${index}]`);
  for (const [index, projection] of (card.analytic_projections ?? []).entries()) checkObservation(projection, file, `analytic_projections[${index}]`);
  for (const item of card.participation ?? []) if (item.action_url && !/^https?:\/\//.test(item.action_url)) errors.push(`${file}: participation action_url must be absolute HTTP(S)`);
}
if (errors.length) { console.error(errors.join("\n")); process.exit(1); }
console.log("Draft v0.5 schemas parse and all representative examples satisfy offline contract checks.");
