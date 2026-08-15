# CauseBase Golden Corpus v1

This committed manifest defines governed evaluation cases; it deliberately does
not publish PDFs, page images, raw model I/O or archive contents. A harness
resolves `archive_locator` under `CAUSEBASE_ARCHIVE_ROOT`. A missing archive
fixture is `SKIPPED / UNAVAILABLE`, never a failed or silently substituted case.

`accepted_gold` contains independently accepted assertions and may be scored.
`review_required` is diagnostic only: extractor output can inform a compact
review packet but cannot become gold automatically. Cases are selected for
failure-mode coverage, not prevalence. The seven retained private report PDFs
are sufficient for this bounded bake-off; no new documents were acquired.
