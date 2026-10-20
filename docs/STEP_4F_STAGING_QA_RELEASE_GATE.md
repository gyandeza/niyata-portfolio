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
