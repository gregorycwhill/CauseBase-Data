# Wikimedia source spike

**Decision:** DEFER broad ingestion; permit a future bounded, attributed
Wikidata discovery/corroboration adapter only.

The 120-card identifier-first test queried Wikidata property P3548 (Australian
Business Number) without name-only matching. It found 7 exact ABN matches
(5.8%), 113 no matches, and 2 English-Wikipedia article links. This coverage is
too sparse to support corpus-wide enrichment and does not justify resolving
identity through Wikidata.

Useful future fields are a Wikidata QID, aliases, official website, dates,
location and relationship assertions—but only as dated external observations
with item URL, revision/retrieval metadata and their own evidence. They are
corroboration/discovery leads, not replacements for ACNC/ABR or organisation
evidence. Wikipedia prose is a source lead only: it is narrative, mutable and
requires CC BY-SA attribution for reuse. Wikidata structured data is CC0, but
is still community-maintained rather than authoritative.

Any future API process must use identifier-first queries, meaningful client
identification, serial/batched requests, caching, and revision-aware
provenance. No Wikimedia observation is published from this spike.

References: [Wikidata licensing](https://www.wikidata.org/wiki/Wikidata:Licensing),
[Wikimedia API access policy](https://www.mediawiki.org/wiki/Wikimedia_APIs/Access_policy),
and [API etiquette](https://www.mediawiki.org/wiki/API:Etiquette/en).
