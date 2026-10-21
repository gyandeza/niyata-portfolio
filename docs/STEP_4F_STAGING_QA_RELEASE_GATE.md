# STEP 4F — Staging QA & Release Gate

**Status: HOLD — automated checks PASS, visual/content acceptance pending.**  
**Staging deployment:** https://niyata-portfolio-preview-58jq7rie8-giona.vercel.app  
**Vercel project:** `giona/niyata-portfolio-preview`  
**Deployment ID:** `dpl_EWj71feEh1WyNLbNuazbsXaWzNGA`  
**Git source:** `gyandeza/niyata-portfolio` / `main` @ `bdbea16e9bc32f11458532a4bb1d7cdc9d995239`  
**Recorded:** 2026-10-21

## A. Evidence verified

| Gate | Evidence | Result |
| --- | --- | --- |
| Repository isolation | Legacy `gyandeza/Niyata` is private; new repo public and clean-history | PASS |
| Clean source | 61/61 selected v3 source blobs match approved migration; nine HTML pages; no legacy standalone files in new repo | PASS |
| Build and CI | GitHub Actions run `39514416864` success, includes build, 5 deterministic Flow Lab fixtures, navigation smoke and artifact guard | PASS |
| Vercel build | Staging deployment `READY`; build output reports completed, no warning/error matches in build events | PASS |
| Deployment target | Explicit `staging`; initial accidental production-target build was canceled before completion | PASS |
| Access configuration | Vercel Authentication enabled for **all** deployments, including staging and Vercel production URLs | CONFIG PASS; external unauthorized-user test pending |
| Navigation source | Shared mobile menu mounted across all nine entrypoints; 10 menu links and keyboard Escape handler present | STATIC PASS; visual/touch test pending |
| RouteRisk | Six-factor prototype with bounded model and illustrative/safety wording in source | STATIC PASS; interaction test pending |
| Supply Chain Flow Lab | Deterministic model; 13 scenario inputs; five fixture scenarios pass | AUTOMATED PASS; browser interaction pending |
| Live website rendering | Browser-level access behind Vercel authentication unavailable in this review | NOT TESTED |
| Content owner signoff | Employer-safe copy, evidence labels, achievements/credentials and external links need owner acceptance | PENDING |
| Production/domain cutover | Not authorized | BLOCKED |

## B. Manual staging test matrix — perform after Vercel login

Use iPhone Safari at ~390px width, tablet at ~768px and desktop browser at >=1280px. For each, verify the page loads, title and body are readable, images/illustrations load, there is no horizontal overflow or overlap, and internal navigation returns to the intended destination.

1. `/` or `/index.html` — hero, Selected Work anchors, case studies, footer.
2. `/about.html` — biography, career narrative and back navigation.
3. `/research.html` — research/writing labels, no unverified claims.
4. `/teaching.html` — teaching/speaking section, no unsupported credentials.
5. `/credentials.html` — achieved credentials distinct from in-progress applications.
6. `/collaborate.html` — contact and external link destinations.
7. `/labs.html` — lab cards and correct links to both active labs.
8. `/routerisk.html` — modify all six factors; score/band should update; explanatory boundaries remain visible.
9. `/flowlab.html` — test presets and input controls; observe transport/source/buffer constraints; reset/adjust values; verify mobile inputs do not clip.

Across all nine pages, open the floating `EXPLORE` mobile menu, follow two links, verify close state, return to current page, and test the Escape key with an external keyboard if available. Test back/forward browser navigation, keyboard focus and touch targets.

## C. Privacy and access acceptance

- In a signed-out/private browser window, staging URL must require Vercel Authentication; verify that content is **not** visible before sign-in.
- Confirm the older Netlify sites and cached legacy pages are separately handled; private GitHub visibility does not retract prior copies or third-party deployments.
- No personal-finance legacy HTML, tokens, secrets or non-public employer operations may appear in new website pages, JS bundles, source files, screenshots or public documentation.
- The artifact guard uses signature-based checks and does not replace a manual review of confidential text or visual assets.
- No production/custom-domain deployment, removal of protection, or merge until explicit approval.

## D. Release decision

**HOLD / NO-GO.** Automated source and build gates are green. Browser-level visual QA, unauthorized-access test, owner content approval and legacy-hosting review are still open. A `READY` Vercel deployment does not establish UX acceptance.

**Next required evidence:** screenshot(s) or owner feedback for homepage and mobile navigation, plus confirmation that the unauthenticated staging URL presents an authentication challenge. Then resolve any visual or content defects on this QA branch, rerun CI, and request a separate explicit GO decision for production.

## E. iPhone Safari screenshot review (owner-provided)

Four owner screenshots show the homepage hero, expanded EXPLORE menu, RouteRisk hero and Flow Lab hero. Typography, grid, navigation content and editorial styling are visually consistent. **P1 defect:** the fixed bottom-right EXPLORE trigger visibly overlaps body copy and CTA area on the RouteRisk and Flow Lab heroes. The expanded menu is visible and populated, but link clicks were not demonstrated by screenshots. No evidence yet of calculator interactions or a signed-out access test.

**QA branch remediation:** dock EXPLORE at the top-right of a sticky mobile header, suppress conflicting header CTAs on narrow viewports, open the menu below its trigger, and update the homepage system-map version label to V3.0. Automated regression assertions added to `tests/premerge-smoke.mjs`. **This is a code change on the QA branch only**, not the existing staging deployment. A new preview and repeat iPhone screenshot check are required before marking the visual gate PASS.

## F. iPhone Safari retest — header-docked navigation (owner-provided, 2026-10-21)

Two screenshots from the **QA preview** show the homepage with EXPLORE closed and open. Observed:

- **PASS (visual):** EXPLORE is in the upper-right header rather than bottom-right over hero text; Connect no longer competes for that header space.
- **PASS (visual):** open panel begins immediately below header, stays within the viewport horizontally and displays all ten navigation entries; CLOSE is visible.
- **PASS (visual):** homepage hero and primary CTA remain unobscured with the menu closed.
- **PASS (visual):** System Map footer reads `V3.0`, confirming the corrected build is loaded.
- **OBSERVATION:** a separate circular black floating control is visible on the right edge at mid-screen; likely associated with the preview environment, but attribution and production absence **not verified**.
- **NOT TESTED:** link destination clicks, keyboard interaction, route-risk calculator, flow-lab controls, desktop/tablet responsive layouts, signed-out authentication challenge, and owner content signoff.

**Disposition:** close the original **P1 mobile bottom-overlay defect** based on visual retest. Keep **STEP 4F release gate HOLD / NO-GO** until remaining functional, privacy, and content acceptance checks pass. The PR remains draft; no merge or production promotion.

## G. Interactive Labs mobile screenshot review (owner-provided, 2026-10-21)

**RouteRisk screenshot:** iPhone renders editable factor selectors, accessibility `Blocked / unverified — 90`, and weighted output `42/100 WATCH`. This exposes a P0/P1 model-semantics defect: a blocked/unverified route could be shown as merely WATCH because a weighted average dilutes an access hard stop. **QA branch fix:** retain the inspectable weighted score but override dispatch action to `DO NOT DISPATCH / VERIFY ACCESS` when accessibility = 90, and similarly hold on critical safety warning = 90. Both are explicitly illustrative safeguards; not a certified dispatch safety rule. Regression tests added.

**Flow Lab screenshot:** `initialStock=825 t`, `stockpileCapacity=800 t`, `destinationDemand=225 t/day`; interface displays `BUFFER OVERFLOW`. This is consistent with the existing end-of-day overflow model, but the starting condition itself is already 25 t above stated physical capacity. **QA branch fix:** expose `initialStockExcess` separately, warn even if end-of-day inventory is later below capacity, and clarify that intraday stock peaks are not modeled. Regression tests added.

**UI observation:** Input labels, units and output sections remain readable on the supplied mobile screenshots. The circular black right-edge widget remains unverified as an environment control, not yet a confirmed NIYATA element.

**QA evidence boundary:** screenshots show input/output states, but do not establish complete input-change causality or correctness of all 13 Flow Lab inputs. CI and fresh preview must pass after these changes, followed by another mobile check. Production remains HOLD.

## H. Owner mobile retest — PASS (2026-10-21, iPhone)

The owner supplied two new iPhone screenshots from the updated Vercel QA preview:

- **RouteRisk:** `Accessibility = Blocked / unverified — 90` with low values on other visible factors; weighted score `26/100` but action correctly reads `DO NOT DISPATCH / VERIFY ACCESS` with a HOLD state. **Acceptance: PASS for access hard-stop semantics.** The HOLD state text is partly hidden by Safari's bottom toolbar in the screenshot; verify visibility by scrolling and improve contrast/spacing if needed.
- **Flow Lab:** `Source buffer capacity = 800 t`, `Initial source stock = 825 t`; result reads `BUFFER OVERFLOW` and the warning correctly identifies **25 t above capacity**. **Acceptance: PASS for starting-inventory warning.**

These are screenshot-based confirmations of two targeted acceptance cases, not a complete mobile accessibility audit or validation of every interactive state. Remaining release blockers: verify all major pages/navigation and link targets on actual mobile, anonymous access/preview protection, privacy/content signoff and production authorization. **Do not merge or promote on the basis of these screenshots alone.**

## I. Release gate audit — 2026-10-21 (follow-on)

### Automated/source evidence — PASS with limits

- `gyandeza/Niyata` repository API confirms **private**, GitHub Pages disabled; `gyandeza/niyata-portfolio` confirms **public**, GitHub Pages disabled. Old Netlify and any other external deployments are **not** covered by GitHub visibility changes.
- PR #1 remains **open, draft, unmerged**. CI run `39526839250` passed on QA branch commit `142e1a48eaed4aa3bba54ca5a5919e497bd001cd`.
- Vercel project `niyata-portfolio-preview`: `ssoProtection.enabled=true`, `deploymentType=all`; `passwordProtection.enabled=false`. Latest QA preview `https://niyata-portfolio-preview-g5yv0fk7c-giona.vercel.app` READY, Git SHA `142e1a48eaed4aa3bba54ca5a5919e497bd001cd`, `target=null` (not production).
- Source-level navigation inspection confirms 10 mobile entries pointing to nine HTML entrypoints and a `#work` anchor; menu has `aria-expanded`, `aria-controls`, and Escape-to-close. CI premerge smoke covers internal paths/anchors. **Actual mobile link taps, focus navigation and desktop viewport still not verified.**
- A targeted public-source inspection of the case-study and portfolio data plus 17 further source/doc files found no obvious inline API token pattern, hardcoded email address or personal-finance amount in the inspected material. **This is not a comprehensive secrets scan or a substitute for owner content approval.**
- The public source intentionally mentions `APRIL Group` and `PT Shimano Batam` as professional history, and links to the public `gyandeza/ilras` GitHub repo. No confidential employer figures were observed in the reviewed Connected Fiber Supply data, but **owner approval is still required** for public professional claims and employer references.

### Release blockers — HOLD / NO-GO

1. **Signed-out browser challenge:** configuration is confirmed, but independent anonymous HTTP access test was unavailable; external fetch tools could not retrieve the protected deployment. The owner must test the QA URL in a genuinely signed-out/private session and confirm it redirects to Vercel authentication (without a bypass token).
2. **Real-device link/function matrix:** tap Home, Selected work, About, RouteRisk, Flow Lab, Collaborate from EXPLORE; verify page titles, anchor offset, return navigation and interaction.
3. **Owner content and privacy signoff:** professional employer naming, academic/research statuses, outbound project links, and public-safe case studies; check old Netlify deployments separately.
4. **Production authorization:** keep PR draft and `main` unchanged until explicit owner approval. No release or alias promotion.

**Result:** navigation and two lab acceptance screenshots PASS; configuration and CI PASS; production release remains **HOLD**.

## J. STEP 4F.1 — Owner privacy gate result (2026-10-21)

**Owner-reported test:** iPhone Safari Private opened the protected NIYATA QA URL without an authenticated session and was presented with **Vercel Authentication**, not the portfolio content.

**Decision: PASS — unauthenticated preview challenge, owner-tested.** This resolves the specific signed-out access blocker recorded in section I. The Vercel project API independently confirms `ssoProtection.enabled=true` with `deploymentType=all`.

**Evidence scope:** owner attestation of a single Safari Private access path, not an independently captured HTTP trace, multi-browser penetration test, or confirmation that unrelated historical hosts are inaccessible. No bypass tokens or protection changes were requested.

### Next evaluation — STEP 4F.2 Navigation & interaction acceptance

Status: **PENDING**. Test on authenticated iPhone Safari using the latest QA branch preview. For each step, record PASS/FAIL and the observed destination or defect:

| Case | Action | Expected |
| --- | --- | --- |
| NAV-01 | Open EXPLORE; tap About | `about.html` opens, correct header, menu closed |
| NAV-02 | Open EXPLORE; tap Selected work | Homepage `#work` section visible, anchor not hidden by sticky header |
| NAV-03 | Tap Research & writing, Teaching & speaking, Credentials | Each matching page opens with readable hero and no horizontal overflow |
| NAV-04 | Tap Niyata Labs, then RouteRisk and Flow Lab | Both labs load with correct page identity |
| NAV-05 | Tap Collaborate | Contact page opens and LinkedIn/GitHub external targets are as expected |
| NAV-06 | Browser back/forward; open/close EXPLORE | State and scroll remain usable; menu does not obscure controls when closed |
| LAB-01 | Change one RouteRisk factor from a non-blocked baseline, then set Accessibility=Blocked | Score updates; access hard-stop overrides weighted risk label |
| LAB-02 | In Flow Lab, change initial stock above/below source buffer limit | Initial-overflow warning appears and clears appropriately |
| LAB-03 | Flow Lab preset changes and resets | Outputs track inputs; no clipped slider values or units |

**Other pending release gates:** owner approval of public employer/career/credential/research statements; audit of old Netlify and any other historical hosting; tablet/desktop responsiveness; explicit production authorization. Draft PR #1 remains open, unmerged. Do not deploy to production or alter protection.

**Release disposition after STEP 4F.1:** **HOLD / NO-GO** for production. The *privacy sub-gate* is PASS, but full release acceptance is not complete.

## K. STEP 4F.2 — Owner mobile navigation acceptance (2026-10-21)

**Owner result:** `Semua navigasi berhasil. Catatan: Tidak ada.` The owner completed the requested iPhone Safari navigation acceptance and reported all tested navigation passed with no issues.

**Decision: PASS — owner-tested mobile navigation click-through.** Combined with the earlier screenshot checks, the targeted mobile navigation acceptance gate is closed. Scope: reported navigation paths in STEP 4F.2, not an independent cross-browser, tablet, desktop or automated end-to-end test.

**No change to production:** PR #1 remains draft; no merge, production deployment, alias cutover or authentication changes authorized.

## L. STEP 4F.3 — Public content & legacy hosting pre-signoff audit (2026-10-21)

### Source inspection results

- **Current public repo:** `gyandeza/niyata-portfolio` remains public with isolated clean history and nine site entrypoints. The old `gyandeza/Niyata` repository is private with GitHub Pages disabled.
- **Legacy risk:** `Finance.html` remains in the old private repository. The legacy `index.html` contains personal WhatsApp contact links. Private GitHub status does not establish that older Netlify or cached third-party copies are gone. No exact historical Netlify hostname or site identifier was found in available project records or the old repository metadata; **legacy-hosting takedown cannot be verified**.
- **Employer/career references requiring owner signoff:** `src/data/about.js` explicitly names APRIL Group and PT Shimano Batam. `src/data/connectedFiberCaseStudy.js` describes six abstract workstreams without detailed operating figures/vendor names in the inspected content. Employer-safe wording remains an owner judgment, not a technical guarantee.
- **Professional/research claims requiring owner signoff:** teaching and institutional names, achieved IPP / Six Sigma GB, PMP `IN PREPARATION`, IPM `DEVELOPMENT PATH`, and ILRAS prototype/methodology limitations. The data files explicitly distinguish in-progress and achieved statuses.
- **Outbound references requiring owner signoff:** LinkedIn `https://id.linkedin.com/in/gilangyandeza`, GitHub `https://github.com/gyandeza`, and public ILRAS repo `https://github.com/gyandeza/ilras`. Review their public visibility and suitability separately.
- **Source inspection limitations:** text-level spot review of principal content modules and outbound URLs; not an exhaustive security scan, browser link crawl, screenshot review or owner approval.

### Pending signoffs / controls

1. **Owner content approval:** employer names and professional history, credentials and institution references, product/research claims and external links.
2. **Legacy Netlify inventory:** obtain exact site URLs or Netlify dashboard project names and verify whether each historical deployment is offline, access-protected, or contains archived sensitive pages; do not assume a suspended site remains offline.
3. **Additional responsiveness:** tablet/desktop and accessibility, especially RouteRisk HOLD-state legibility under mobile Safari controls.
4. **Explicit production GO:** separately required even after all prior checks pass.

**Disposition:** STEP 4F.1 privacy PASS; STEP 4F.2 navigation PASS; two targeted lab scenarios PASS; STEP 4F.3 content/legacy-hosting review **PENDING OWNER SIGNOFF**. Overall **HOLD / NO-GO**.

## M. STEP 4F.3 — Employer naming approval and historical-hosting follow-up (2026-10-21)

### Owner-approved scope

The owner **explicitly approves** keeping `APRIL Group` and `PT Shimano Batam` as **employment history** on the public portfolio. The `Connected Fiber Supply` case study is permitted **only in public-safe, abstract form**: no confidential operating figures, vendor identities/commercial terms, internal systems, route-level details, proprietary diagrams, screenshots, or unverified performance claims.

**Disposition: PASS — employer-name/content-boundary signoff for the existing inspected text only.** This is not permission to publish private enterprise files or expand operational specificity. The current `src/data/about.js` professional anchors and `src/data/connectedFiberCaseStudy.js` abstractions fit this stated scope in the source-level review; do not silently expand the content.

### Additional credentials/research audit

- `src/data/credentials.js`: IPP and Six Sigma Green Belt marked `ACHIEVED`; PMP marked `IN PREPARATION`; IPM marked `DEVELOPMENT PATH`. These are clearly distinguished; owner still needs to approve public claims and organization memberships.
- `src/data/knowledge.js`: Universitas Terbuka tutor role and prior lecturer institutions; research directions marked `IN PROGRESS` or `WORKING NOTE`, not misrepresented as publications. Owner signoff still pending.
- `src/data/ilrasCaseStudy.js`: explicitly identifies pilot limitations, no validated production-level persistence and no claimed government adoption or quantified impact.
- The source-level public-safety assessment is not a guarantee of completeness or external employer approval.

### Historical hosting investigation

- Historical chat references a deployed Netlify hostname `https://opvis.netlify.app`. This is a **candidate legacy deployment**; whether it is the same repository/build or ever included `Finance.html` has **not been established**.
- Historical portfolio material also referenced `https://gyandeza.github.io/Niyata/index.html`; the legacy GitHub repository is now private and GitHub Pages is disabled, but historical page/cache availability was not independently established.
- Attempted read-only checks of `https://opvis.netlify.app/`, `https://opvis.netlify.app/Finance.html`, `https://gyandeza.github.io/Niyata/index.html` and `https://gyandeza.github.io/Niyata/Finance.html`. Public webpage fetch returned inaccessible/cache-miss, and independent HTTP HEAD probes failed due to DNS resolution limits in the execution environment. **Do not interpret these tool failures as proof of HTTP 404, site takedown, or safety.**
- Legacy `Finance.html` remains in the **private** `gyandeza/Niyata` repository. No deletion or history rewrite authorized. A private repository does not revoke older Netlify/CDN builds.

**Action required for legacy gate:** owner should check Netlify site inventory and any historical public deployment domains, including the `opvis.netlify.app` candidate, and report whether each site is unpublished/disabled or still accessible. If any legacy build exposes private material, hold release and obtain explicit authorization for hosting-side remediation; do not access or disclose its contents in the public QA notes.

**Still pending:** owner credentials/teaching/research signoff, Netlify hosting exposure verification, optional additional device/accessibility review, and explicit production GO. Overall release remains **HOLD / NO-GO**. Draft PR only; no merge, production deploy or protection change.

## N. STEP 4F.4 — Legacy Netlify hosting owner report (2026-10-21)

**Owner report:** `Masih ada site atau deployment aktif.` No site names, URLs, project identifiers, exposure checks or screenshots supplied.

**Gate result: HOLD — active historical deployment reported; scope and exposure unverified.** Do not infer that sensitive information is actually public, but do not mark legacy hosting cleared. A live deployment may serve files from older deploy artifacts independently of the now-private legacy GitHub repository.

### Controlled read-only verification sequence

1. **Identify each active site** in the owner's Netlify dashboard. Record site name and public `*.netlify.app` URL; optionally associated custom domain. Keep tokens, admin links, billing and credentials private.
2. **Classify linkage:** whether each site is the old NIYATA/RouteRisk portfolio, unrelated project, or unknown; check connected repository and publish directory in Netlify dashboard, without changing settings.
3. **Check exposure without disclosing content:** use signed-out/private browser to see whether the site homepage is publicly reachable. For confirmed old NIYATA deployments only, check whether legacy sensitive page paths can be accessed. Report only `accessible`, `404`, `auth required`, `unavailable` or `unknown`, not sensitive page contents.
4. **If sensitive content is accessible:** classify as a privacy incident candidate; prioritize explicit owner-authorized unpublish/password protection/removal on the hosting platform. A repository visibility change alone is not sufficient. Avoid redistributing screenshots or sensitive data in a public PR.
5. **If all historical deployments are proven absent/inaccessible:** record owner evidence and re-evaluate the legacy hosting gate; check any additional custom domains and historical aliases separately.

**No destructive action authorized:** no Netlify delete, disable, unpublish, DNS modification, credential change, GitHub merge, production deployment, or Vercel protection change.

### Release status

- STEP 4F.1 signed-out Safari Private authentication: PASS (owner-tested).
- STEP 4F.2 mobile navigation: PASS (owner-tested).
- RouteRisk access hard-stop and Flow Lab starting-capacity warning: PASS (targeted screenshots).
- Employer history naming with public-safe Connected Fiber Supply boundary: APPROVED (owner).
- Credentials/teaching/research public claims: owner signoff pending.
- Legacy Netlify exposure: **HOLD**, exact active site inventory missing.
- Production: **NO-GO**. Draft PR stays unmerged.
