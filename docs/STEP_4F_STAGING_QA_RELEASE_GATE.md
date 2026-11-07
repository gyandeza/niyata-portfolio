# STEP 4F — Staging QA & Release Gate

**Current disposition: HOLD — evidence closure and release planning remain pending.**
**Updated:** 2026-11-07 (Asia/Jakarta).
**Acceptance owner:** project/content owner, acting through the project conversation.
**Scope of this update:** documentation and PR description only, authorized by the owner's continuation after the read-only audit. No application, dependency, CI or hosting configuration changes are included.

This consolidated record supersedes earlier pending-status summaries in this document. Historical owner reports remain owner-confirmed evidence; they are not upgraded to independent verification. Private artifact names, titles, contact details and historical-host investigation URLs have been minimized. Earlier Git history is unchanged; this edit does not establish removal of prior disclosures.

## 1. Audited application candidate

| Item | Verified evidence from the 2026-11-07 read-only audit |
| --- | --- |
| Repository / PR | `gyandeza/niyata-portfolio`, PR #1 |
| Branch | `qa/step-4f-staging-release-gate` |
| Audited application commit | `9a659b63da07b317299b735d25007cf6d8412fe1` |
| Base main commit | `bdbea16e9bc32f11458532a4bb1d7cdc9d995239` |
| PR state | Open, draft, unmerged; auto-merge inactive |
| Comparison | 34 commits ahead, 0 behind; 19 changed files, +513 / -80; mergeable/clean |
| GitHub review | No review submissions or assigned reviewers at audit time |
| Main enforcement | Branch API reported protected=false; ruleset collection empty |
| CI | [Run 39804224085](https://github.com/gyandeza/niyata-portfolio/actions/runs/39804224085), success on audited application commit |
| Candidate deployment | `dpl_H9SNKFQkuQX63BhVFCeQa4nrMUwt`, READY, target=null |
| Immutable candidate URL | https://niyata-portfolio-preview-83k184u6i-giona.vercel.app |
| Candidate branch alias | https://niyata-portfolio-preview-git-qa-step-4f-staging-re-861f83-giona.vercel.app |
| Vercel project | `giona/niyata-portfolio-preview` / `prj_OZBnzcrv8TJZPeYySZ5TQQsudTiS` |
| Access configuration | SSO enabled for all deployments; password protection disabled |

A documentation commit after the audited application commit changes the PR HEAD. The CI and deployment above belong to the audited application commit, not automatically to a later documentation HEAD. Recheck the latest HEAD and required checks before any merge decision. A branch alias is mutable.

## 2. Verified source and CI evidence

All 19 changed files were reviewed against the base: one QA document, four components/styles under components, six data modules, two lab stylesheets, four pages and two test files.

The changes address mobile navigation overlap, RouteRisk safety/access hard stops, Flow Lab initial-capacity warnings, and owner-approved public content. No API, database, tracking, dependency or deployment-configuration additions were observed in the diff.

- Mobile navigation moves from a bottom overlay to the header across nine entrypoints; narrow-screen header CTAs are suppressed.
- RouteRisk retains the weighted score but returns HOLD when accessibility or safety is 90. If both apply, accessibility has message priority. The model remains illustrative and is not an operational safety standard.
- Flow Lab exposes initialStockExcess separately, including when the end-of-day balance returns within capacity. Intraday stock peaks are not modeled.
- Education uses S.T. and M.M.; achieved credentials, practical experience and professional development are distinct. PMP is retained in pathways rather than duplicated as achieved.
- Teaching uses the approved institutions without period or current/former claims; the page and data keys are aligned.
- Research remains ongoing; ILRAS is positioned as a working pilot, with equal-weight baseline, future expert/AHP validation and GIS/runtime limitations.
- Commit `9a659b63da07b317299b735d25007cf6d8412fe1` renders maturityStatement in `src/components/IlrasCaseStudy.jsx`. This supersedes the historical section Q display caveat. Source rendering is verified; independent visual QA was not performed.
- The earlier section Q authorization covered data and documentation. The later UI commit is separately identified; the available cached chat did not independently reconstruct its historical implementation authorization.

CI logs for the audited application commit confirm:
- Build success.
- 7 Flow Lab fixtures and 3 RouteRisk decision fixtures PASS.
- Nine HTML entrypoints and 75 internal links PASS.
- Artifact guard PASS for expected output pages, excluded legacy files and selected token signatures.
- npm installation reported 0 vulnerabilities on 2026-10-22. This is historical installation evidence, not a current dependency security assessment.
- Deprecation warnings were present for action runtimes and punycode. Success does not mean warning-free.

CSS/source assertions do not establish browser layout or accessibility. The signature guard is limited and does not establish comprehensive secret/confidentiality coverage. No blocking regression was identified in the reviewed diff and existing CI; this is not complete end-to-end coverage.

## 3. Owner-confirmed acceptance and limits

| Acceptance | Evidence classification and scope |
| --- | --- |
| Header navigation overlay remediation | Historical owner iPhone screenshots accepted the relocated menu and unobscured hero |
| RouteRisk access hard stop | Historical targeted owner screenshot: low weighted score with blocked access correctly produced HOLD |
| Flow Lab starting-capacity warning | Historical targeted owner screenshot: starting stock 25 t above capacity was explicitly flagged |
| Signed-out preview challenge, STEP 4F.1 | Owner-reported Safari Private authentication challenge; no independent HTTP trace |
| Mobile navigation, STEP 4F.2 | Owner reported all requested navigation successful, no notes |
| Employer naming, STEP 4F.3 | Owner approved APRIL Group and PT Shimano Batam as employment history; Connected Fiber Supply restricted to abstract public-safe material |
| Historical hosting, STEP 4F.4B/C | Owner reported current published-file and historical deployment checks clear on both reviewed sites, within owner-inspected scope only |
| Teaching, STEP 4F.5C | Owner approved Universitas Terbuka (Online Tutor), Politeknik Negeri Batam (Practitioner Lecturer), Universitas Trunojoyo Madura and Universitas Singaperbangsa Karawang (Industry Practitioner / Praktisi Mengajar), without period/current status |
| Tablet/desktop and accessibility checks, STEP 4F.6 | Owner supplied tablet screenshots and confirmed desktop, keyboard and zoom checks OK; no independent WCAG certification |
| Education/credentials, STEP 4F.7A/B | Owner approved official S.T./M.M. degrees, IPP and Six Sigma Green Belt as achieved, tools as practical experience, PMP and IPP-to-IPM as professional development; organizations without roles or periods |
| Research/ILRAS content, STEP 4F.7C | Recorded owner decisions: Research approve; ILRAS positioning approve; GIS conservative; confidentiality retain |
| Research & ILRAS final visual | Owner-confirmed in the continuation request; not independently observed |
| About & Credentials final visual | Owner-confirmed in the referenced conversation and continuation request; not independently observed |

The project/content owner is the final QA acceptance owner. This does not constitute a GitHub review approval. Issuers, original certificates, external affiliations and live GIS integrations were not independently audited.

The available final visual confirmations do not explicitly identify an immutable URL and SHA. Binding them to the audited application candidate remains pending; this document does not infer that binding.

## 4. Privacy and confidentiality closure

The reviewed diff showed no newly added token, personal financial value or confidential employer operating detail. Public employer naming is limited to the approved employment-history context. The case study must remain abstract: no confidential metrics, vendor/commercial details, internal systems, route-level details, proprietary diagrams/screenshots or unverified performance claims.

Historical hosting initially remained unresolved and was subsequently reported clear by the owner within the inspected current and historical deployment scope. Tool fetch/DNS failures from earlier checks were inconclusive and are not evidence of HTTP 404, takedown or safety. No exhaustive internet/CDN/cache removal is claimed.

Private investigation metadata has been minimized in this revision. Original private content is not reproduced. Repository privacy does not revoke copies previously published elsewhere; previous public Git history is not rewritten by this update.

## 5. Baseline and recovery evidence

| Object | Verified state | Permitted description |
| --- | --- | --- |
| Main source | `bdbea16e9bc32f11458532a4bb1d7cdc9d995239` | Source baseline |
| Existing baseline deployment | `dpl_EWj71feEh1WyNLbNuazbsXaWzNGA`, READY, target=staging, same main SHA | Verified staging baseline |
| Baseline immutable URL | https://niyata-portfolio-preview-58jq7rie8-giona.vercel.app | Staging baseline URL |
| Project/main aliases | `niyata-portfolio-preview-giona.vercel.app` and `niyata-portfolio-preview-git-main-giona.vercel.app` map to that staging deployment | Alias names do not establish production |
| Production-target history returned for this project | Only `dpl_6p39aEWUMjE5ZxViqEwcutVX1bfE`, CANCELED, same main SHA | No successful production baseline found in this project's returned history |
| Production rollback eligibility | Candidate query returned 403; Vercel CLI unavailable | Pending; no verified production rollback target |

The baseline main/staging build predates navigation and lab safeguards. Reverting to it would restore earlier behavior. Do not label it a tested production rollback.

Before release, establish the intended production project/environment/domains, whether merging main triggers deployment or alias changes, the first-release procedure and a recovery plan with an eligible deployment or explicitly tested restoration procedure. Recheck these before executing any release.

## 6. Release evidence checklist

- [x] Audit application HEAD/base, full 19-file diff and branch relationship.
- [x] Verify application-commit CI and candidate deployment identity.
- [x] Verify current Vercel SSO configuration.
- [x] Record owner acceptance separately from verified source/platform evidence.
- [x] Correct the maturity-statement display caveat.
- [x] Consolidate current status and minimize private investigation metadata.
- [ ] Verify latest documentation HEAD checks and preview after this update.
- [ ] Bind final owner visual acceptance explicitly to the audited application SHA/immutable URL.
- [ ] Resolve or explicitly accept dependency reproducibility and branch-enforcement risks.
- [ ] Establish merge-trigger behavior, production target and recovery procedure.
- [ ] Obtain separate explicit merge approval.
- [ ] Obtain separate explicit production-release approval.

## 7. Residual risk register

| Risk | Severity / scope | Owner and closure |
| --- | --- | --- |
| Prior public investigation metadata remains in Git history | Medium privacy residual | Owner decides whether further remediation is necessary; no history rewrite authorized |
| No lockfile; npm install with dependency ranges | Medium build reproducibility | Maintainer remedies under separate code/CI scope or owner explicitly accepts rebuild variability |
| Main unprotected and checks not enforced | Medium release control | Owner authorizes enforcement changes or explicitly accepts documented manual controls |
| Final visual evidence lacks immutable candidate binding | Evidence gap | Owner identifies candidate SHA/URL covered by acceptance |
| No verified production baseline/rollback | High for release | Release owner establishes first-release and recovery plan |
| Security/visual/credential/legacy evidence has limited coverage | Scope limitation | Preserve evidence labels; do not claim independent certification or exhaustive clearance |
| CI deprecation warnings | Low maintenance risk | Maintainer schedules action/runtime hardening separately |
| Later UI implementation authorization not reconstructed from cached chat | Historical evidence gap | Owner may acknowledge the recorded UI scope; no new UI change is authorized here |

## 8. Final pre-merge recommendation and next gate

**HOLD for merge and production.** The audited implementation and CI support continued closure work. Owner acceptance is recorded within its stated scope; independent visual QA is not claimed.

Next gate: verify this documentation revision and its checks, obtain explicit candidate binding and disposition of residual build/control risks, and complete read-only production/merge-trigger/recovery planning. Code/CI changes, branch protection changes and hosting changes require separate scope authorization.

Merge, production deployment/promotion, Vercel protection changes and destructive historical-hosting actions remain separately gated. Documentation approval or a READY preview does not authorize them.
