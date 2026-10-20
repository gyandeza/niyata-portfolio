import assert from 'node:assert/strict'
import { readFileSync, readdirSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const project = resolve(fileURLToPath(new URL('..', import.meta.url)))
const output = resolve(project, 'dist')
assert.ok(existsSync(output), 'Missing dist/ — run npm run build first')

const sitePages = [
  'index.html', 'about.html', 'research.html', 'teaching.html',
  'credentials.html', 'collaborate.html', 'labs.html',
  'routerisk.html', 'flowlab.html',
]
const deprecated = ['Finance.html', 'GardenVilla.html', 'dashboard.html', 'meta.html', 'simulator.html', 'RouteRisk.html']
const paths = readdirSync(output)
for (const filename of sitePages) {
  assert.ok(paths.includes(filename), 'Missing multipage build output: ' + filename)
  const markup = readFileSync(resolve(output, filename), 'utf8')
  assert.match(markup, /<title>[^<]+<\/title>/, filename + ': missing title')
  assert.match(markup, /<meta\s+[^>]*name=["\']description["\'][^>]*content=["\'][^"\']+["\'][^>]*>/i, filename + ': missing description')
}
for (const filename of deprecated) {
  assert.ok(!paths.includes(filename), 'Legacy asset must never be deployed: ' + filename)
}
const runtimeDir = resolve(output, 'assets')
assert.ok(existsSync(runtimeDir), 'Vite runtime assets are missing')

const inspect = [
  ...sitePages.map((file) => [file, readFileSync(resolve(output,file), 'utf8')]),
  ...readdirSync(runtimeDir).filter((file) => /\.js$/i.test(file)).map(
    (file) => ['assets/'+file,readFileSync(resolve(runtimeDir,file),'utf8')]
  ),
]
for (const [file,source] of inspect) {
  for (const [name, pattern] of [
    ['private key',/-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/],
    ['GitHub access token',/gh[psu]_[a-zA-Z0-9]{30,}/],
    ['AWS access key',/AKIA[0-9A-Z]{16}/],
    ['personal email address',/[a-z0-9._%+-]+@gmail\.com/i],
  ]) {
    assert.ok(!pattern.test(source), file + ': possible ' + name + ' in publishable artifact')
  }
}
console.log('PASS: nine output pages, no legacy files, runtime assets present, no high-risk token signatures')
