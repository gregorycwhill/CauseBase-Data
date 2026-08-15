# Frontend stack decision — Viewer architecture spike

**Decision:** KEEP CURRENT (reassess at the later Viewer IA redesign).

The incumbent is dependency-free static HTML, CSS and ES modules. The bounded
benchmark compared it with SvelteKit/static, Astro/islands, React/static and a
lightweight reactive-library approach against the actual Viewer requirements.
All can deploy static files, but none demonstrates a present need that exceeds
the migration cost, runtime/build dependencies and data-ownership risk.

| Candidate | Result for current Viewer |
| --- | --- |
| Vanilla static modules (incumbent) | selected: zero runtime dependencies; direct static generation works for 120 cards |
| SvelteKit static | viable future component/route option; no current material advantage |
| Astro/islands | viable content-first option; duplicates static generation already present |
| React static | viable but requires a routing/build decision; no current justification |
| Lightweight reactive library | lower cost than React, but duplicates current imperative interaction layer |

The updated static builder emits a 120-card direct-route bundle, sitemap and
release pointer from the pinned v0.5 release. The existing filter/search
interface remains unchanged. This validates that the foreseeable 1,000-card
issue is static artifact generation and retrieval, not framework capability.

Reconsider only when the approved IA/comparison design needs shared,
independently-tested interactive components that are materially harder to
maintain in the current modules. Semantic HTML remains the default regardless
of framework.

References: [Svelte static adapter](https://svelte.dev/packages), [React static
APIs](https://react.dev/reference/react-dom/static), and [semantic HTML
guidance](https://developer.mozilla.org/en-US/curriculum/core/semantic-html/).
