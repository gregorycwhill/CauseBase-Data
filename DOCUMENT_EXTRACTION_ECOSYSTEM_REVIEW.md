# Document extraction ecosystem review — Golden Corpus v1

**Reviewed:** 2026-08-15. The machine-readable inventory is
`golden/document-extraction-ecosystem-v1.json`.

Discovery used official project documentation, repositories, releases, PyPI
metadata and installation guidance across native extraction, object/layout,
tables, document-understanding, OCR, rendering and routed stacks. It screened
ten candidates; popularity was not used as a quality measure.

## Serious shortlist

| Candidate | Role | Local Windows result | Licence / key constraint |
| --- | --- | --- | --- |
| pdfplumber 0.11.10 | primary native syntax | installed; selected financial baseline | MIT |
| PyMuPDF 1.28.2 | alternate native/layout/render | installed and benchmarked | AGPL/commercial, so not a default dependency |
| Camelot 2.0.0 stream | digital-table specialist | installed and benchmarked with generic statement-page routing | MIT |
| Camelot 2.0.0 lattice | ruled-table specialist | installed and benchmarked with generic statement-page routing | MIT |
| Tesseract 5.5.3 | low-text OCR | installed and benchmarked | Apache-2.0; stable subprocess |
| RapidOCR ONNX 1.2.3 | low-text OCR with word boxes | installed and benchmarked | Apache-2.0 |
| local vector colour/geometry | page-scoped vector-chart specialist | validated on EJA page 29 | local-only; no model/service licence |

Docling was a serious integrated candidate: its official documentation supports
Windows and local processing, but installation into this OneDrive path failed
at Windows' path-length limit after resolving a large Torch/model dependency
tree. It is an environment exclusion, not a claim about extraction quality.
Unstructured and OCRmyPDF remain viable longlist alternatives but were not
shortlisted because they added no tested advantage over the local routes in
this bounded Windows run; OCRmyPDF additionally needs a broader native stack.
Hosted parsers were excluded because private charity reports must not be sent
to an uncontrolled third party.

## Outcome

The benchmark evidence selects `pdfplumber` for normal digital PDF source
syntax and source-faithful financial reconstruction. Camelot did not replace
it: it is retained only as an optional future specialist, because its generic
scan added operational cost without displacing the financial hard-gold route.
Tesseract is the default local OCR fallback; RapidOCR remains an alternative
where word boxes justify its substantially higher cold-path cost. The local
vector colour/geometry route passed the EJA 4/4 chart hard gold with legend and
value bounding boxes. A hosted/model vision route was not selected because it
is unnecessary for this validated vector-chart class and would transmit a
private page.
