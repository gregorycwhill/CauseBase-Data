# Evidence Engine v1 — bounded Golden Corpus pilot

**Status:** private capability validation complete; no public release change.

The first integrated Evidence Engine run is deliberately bounded to twelve
selected website subjects, using retained private snapshots only. It evaluates
all applicable Golden Corpus document, identity and fundraising cases without
modifying cards, rebuilding the corpus, or treating a review candidate as gold.

## Computed pilot result

- **Documents:** all seven retained Golden Corpus PDFs completed through
  Document Pipeline v2.3; the report records page routes and visual pages.
- **Web:** twelve selected subjects were assessed. Retained snapshots became
  hash-addressed normalised source evidence when available; snapshot absence is
  an explicit coverage/failure state. The run produced 102 review-only source
  candidates with selector, URL, role, freshness and extraction-method data.
- **Identity:** all 21 cases were exercised. Existing canonical subjects are
  reported only as existing; ambiguity/former-name/related-organisation cases
  remain `review_required`; unbound cases remain unresolved. No subject was
  minted and no name-only or shared-domain resolution occurs.
- **Fundraising:** all 21 cases were prepared as direct-source candidates,
  additivity-blocked, unavailable, or not applicable. The package asks
  `definite / possible / excluded?`; it does not calculate a new estimate,
  ROI, or efficiency measure.

## Website contract

Discovery is same-origin, deterministic and bounded: homepage plus at most
one of About, activities, programs, participation, events, governance, news
and contact. Normalised evidence retains requested/final URLs, content hash,
retrieval time, page role, stable/transient class, title, headings,
substantive blocks, links, selectors and warnings. Navigation boilerplate is
excluded. A potential donation/volunteer link is tagged as a potential action,
never automatically assigned as an action URL; evidence and action roles stay
separate.

Raw HTML, PDFs, OCR text, caches and integrated-run output remain private.
This pilot does not authorise web crawling, semantic publication, a new release
or Viewer deployment.
