# RC3 release-gate evidence

Candidate: `phase2b-2026-08-13-rc3`.

## Automated gates

- Builder: 55 tests passed.
- Viewer: 13 tests passed.
- Candidate validation passed.
- Pages bundle preparation passed.
- Rendered source-native static HTTP crawler: 326/326 returned HTTP 200.
- Corpus invariants: 120 cards; 120 clean canonical CauseBase URLs; 120 ACNC profile locators; 101 submitted AIS locators; 19 explicit no-submitted-AIS coverage states.

## Regression-card inspection

| Fixture | Purpose | Observed result |
| --- | --- | --- |
| Environmental Justice Australia | golden card/report/participation | DGR, current AIS, program, participation, funding and two financial observations |
| Australian Rural Youth Foundation | sparse/no-AIS/non-DGR | ACNC profile; no submitted AIS and no DGR are explicit absence states |
| Ann Street Presbyterian Church | parish/religious body | ACNC profile, AIS, program and financial observation |
| Australian Conservation Foundation | major provider/DGR | ACNC profile, AIS, two programs, DGR, financial observation |
| Accelerated Evolution – The Break | multiple programs | ACNC profile, AIS and ten program observations |
| Australia Chung Tai Buddhist Foundation | DGR/religious body | ACNC profile, AIS, program, DGR and financial observation |
| Access Church | non-DGR | ACNC profile, AIS, program, financial observation; no DGR assertion |
| Biopixel Oceans Foundation | multiple programs | ACNC profile, AIS, nine program observations, DGR |
| Catholic Church Insurance | identity-complex legal form | ACNC profile, AIS, program and financial observation |

Manual post-deployment spot checks remain required for visual layout and external-service behaviour: EJA’s direct ACNC profile link, first narrative citation `[1]`, correction-form prefill, and compact LHS browsing.
