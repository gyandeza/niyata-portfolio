import assert from 'node:assert/strict'
import { readFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(fileURLToPath(new URL('..', import.meta.url)))
const source = (path) => readFileSync(resolve(root, path), 'utf8')

const pageSources = {
  'index.html': ['src/App.jsx', 'src/components/Nav.jsx', 'src/components/IlrasCaseStudy.jsx', 'src/components/ConnectedFiberCaseStudy.jsx', 'src/components/AIHQCaseStudy.jsx'],
  'about.html': ['src/pages/AboutPage.jsx'],
  'research.html': ['src/pages/ResearchWritingPage.jsx'],
  'teaching.html': ['src/pages/TeachingSpeakingPage.jsx'],
  'credentials.html': ['src/pages/CredentialsPage.jsx'],
  'collaborate.html': ['src/pages/CollaboratePage.jsx'],
  'labs.html': ['src/pages/LabsPage.jsx'],
  'routerisk.html': ['src/pages/RouteRiskCaseStudy.jsx', 'src/components/RouteRiskCalculator.jsx'],
  'flowlab.html': ['src/pages/SupplyChainFlowLab.jsx'],
}
const pageEntries = {
  'index.html': 'src/main.jsx',
  'about.html': 'src/about-main.jsx',
  'research.html': 'src/research-main.jsx',
  'teaching.html': 'src/teaching-main.jsx',
  'credentials.html': 'src/credentials-main.jsx',
  'collaborate.html': 'src/collaborate-main.jsx',
  'labs.html': 'src/labs-main.jsx',
  'routerisk.html': 'src/routerisk-main.jsx',
  'flowlab.html': 'src/flowlab-main.jsx',
}
const idsByPage = Object.fromEntries(Object.entries(pageSources).map(([page, files]) => [
  page,
  new Set(files.flatMap((file) => [...source(file).matchAll(/\bid=["']([^"']+)["']/g)].map((match) => match[1])))
]))

let checked = 0
for (const [page, files] of Object.entries(pageSources)) {
  const html = source(page)
  assert.match(html, /<title>[^<]+<\/title>/, `${page}: missing page title`)
  assert.match(html, /name=["']description["']/i, `${page}: missing description`)
  assert.match(html, /name=["']viewport["']/i, `${page}: missing viewport`)
  const entry = source(pageEntries[page])
  assert.match(entry, /SiteMobileNav/, `${page}: missing shared mobile navigation`)
  assert.match(entry, /<SiteMobileNav\s*\/>/, `${page}: mobile navigation not mounted`)

  for (const file of files) {
    for (const match of source(file).matchAll(/\bhref=["']([^"']+)["']/g)) {
      const href = match[1]
      if (/^(https?:|mailto:|tel:)/i.test(href)) continue
      const [targetPath, fragment] = href.split('#')
      const target = targetPath ? targetPath.replace(/^\.\//, '') : page
      assert.ok(existsSync(resolve(root, target)), `${file}: missing target ${href}`)
      if (fragment) {
        assert.ok(idsByPage[target]?.has(fragment),
          `${file}: missing anchor ${href} in ${target}`)
      }
      checked++
    }
  }
}

for (const dataFile of ['src/data/content.js', 'src/data/labs.js']) {
  for (const match of source(dataFile).matchAll(/\bhref:\s*['"]([^'"]+)['"]/g)) {
    const href = match[1]
    const [targetPath, fragment] = href.split('#')
    const target = targetPath ? targetPath.replace(/^\.\//, '') : 'index.html'
    assert.ok(existsSync(resolve(root, target)), `${dataFile}: missing project target ${href}`)
    if (fragment) assert.ok(idsByPage[target]?.has(fragment), `${dataFile}: missing project anchor ${href}`)
    checked++
  }
}
assert.ok(existsSync(resolve(root, 'src/components/site-mobile-nav.css')))
const mobileNavCss = source('src/components/site-mobile-nav.css')
assert.match(mobileNavCss, /top:\s*12px/, 'mobile navigation must dock at header, not bottom overlay')
assert.match(mobileNavCss, /flex-direction:\s*column-reverse/, 'mobile menu should open below trigger')
assert.match(mobileNavCss, /\.rr-nav-action[\s\S]*?\.flowlab-nav-cta[\s\S]*?display:\s*none/, 'mobile header CTA collision must be prevented')
assert.doesNotMatch(mobileNavCss, /bottom:\s*calc\(16px/, 'bottom floating nav must not return')
assert.ok(existsSync(resolve(root, 'src/components/SiteMobileNav.jsx')))
assert.ok(!existsSync(resolve(root, 'Finance.html')), 'private legacy finance asset must not be inside new app')
console.log(`PASS: 9 HTML entries, mobile nav mounting, metadata and ${checked} internal links`)
