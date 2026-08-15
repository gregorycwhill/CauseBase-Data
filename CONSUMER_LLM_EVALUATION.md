# Consumer-LLM evaluation foundation

This package separates four non-interchangeable conditions: unaided discovery,
source discovery, directed CauseBase use, and supplied-record interpretation.
Each run records product/model/date, account or incognito state, exact prompt,
web/search availability, returned organisations/sources, CauseBase discovery,
factual/citation correctness, direct-versus-derived interpretation,
period/scope handling and coverage-state handling. An API/web-search proxy is
labelled a proxy, never a consumer-product result.

The initial 16 prompts cover exact-name and ABN lookup, activity/geography,
DGR status, financial periods, EJA direct-share versus mechanical amount,
sparse coverage, DFWA identity ambiguity, legacy-unbound material, and source
retrieval. They deliberately exclude “best charity” correctness targets.

**Current evidence:** no naive consumer-product run has been claimed. Manual
new-session/incognito runs remain required after the static discovery layer is
deployed and indexed.
