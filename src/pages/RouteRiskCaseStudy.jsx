import RouteRiskCalculator from '../components/RouteRiskCalculator'

const decisions = [
  {
    no: '01',
    title: 'One visible formula',
    copy: 'The migrated demo now uses the same six-factor weighting shown in the methodology instead of a separate four-factor calculator.',
  },
  {
    no: '02',
    title: 'No unsupported performance claims',
    copy: 'Legacy percentages and anonymous testimonials are removed from the portfolio evidence layer unless a source can be attached later.',
  },
  {
    no: '03',
    title: 'Risk color is functional',
    copy: 'Green, amber and red appear only in the decision instrument. The surrounding case study stays inside the Niyata editorial system.',
  },
  {
    no: '04',
    title: 'Prototype boundary stays visible',
    copy: 'The page explains that the weights and factor values are illustrative and cannot replace field safety controls.',
  },
]

const legacyFindings = [
  ['FORMULA DRIFT', 'The legacy methodology showed six factors, while the calculator used only four with different weights.'],
  ['UNVERIFIED IMPACT', '35%, 28% and 18% were presented as pilot / target scenarios without attached evidence.'],
  ['ANONYMOUS PROOF', 'Testimonials were written as anonymous role quotes and are not suitable as public evidence.'],
  ['DESIGN DRIFT', 'The previous page used rounded cards, gradients, badges and repeated panels that no longer match Niyata v2.'],
]

export default function RouteRiskCaseStudy() {
  return (
    <div className="rr-page">
      <header className="rr-nav">
        <a className="rr-brand" href="./index.html">
          <span>N</span>
          <div>
            <strong>NIYATA</strong>
            <small>ROUTERISK / LABS</small>
          </div>
        </a>
        <nav>
          <a href="#problem">Problem</a>
          <a href="#model">Model</a>
          <a href="#interactive-demo">Demo</a>
          <a href="#migration">Migration</a>
        </nav>
        <a className="rr-nav-action" href="#interactive-demo">Try model ↓</a>
      </header>

      <main>
        <section className="rr-hero">
          <div className="rr-hero-grid">
            <div className="rr-hero-copy">
              <div className="rr-hero-meta">
                <span>RR-03</span>
                <span>Niyata Labs</span>
                <span>Prototype</span>
              </div>
              <p className="rr-kicker">OPERATIONAL ROUTE DECISION INSTRUMENT</p>
              <h1>
                RouteRisk turns route conditions into
                <em> transparent dispatch guidance.</em>
              </h1>
              <p className="rr-lead">
                A public-safe prototype exploring how road, weather, access,
                traffic, terrain and safety conditions can be combined into a
                simple, inspectable risk recommendation.
              </p>
              <div className="rr-hero-actions">
                <a href="#interactive-demo" className="rr-primary-button">Use the prototype</a>
                <a href="#problem" className="rr-text-link">Read the case ↓</a>
              </div>
            </div>

            <div className="rr-instrument-map" aria-label="Illustrative route risk diagram">
              <div className="rr-map-top">
                <span>ROUTE / SIMULATION</span>
                <span>NOT LIVE DATA</span>
              </div>
              <svg viewBox="0 0 560 420" role="img">
                <path className="rr-grid-route" d="M48 320 C130 190, 195 255, 275 160 S430 95, 510 170" />
                <path className="rr-route-low" d="M48 320 C130 190, 195 255, 275 160" />
                <path className="rr-route-watch" d="M275 160 C345 112, 405 95, 448 116" />
                <path className="rr-route-high" d="M448 116 C472 130, 493 149, 510 170" />
                <circle cx="48" cy="320" r="9" className="rr-node-start" />
                <circle cx="275" cy="160" r="8" className="rr-node-low" />
                <circle cx="448" cy="116" r="8" className="rr-node-watch" />
                <circle cx="510" cy="170" r="9" className="rr-node-end" />
                <text x="48" y="348">ORIGIN</text>
                <text x="460" y="198">DESTINATION</text>
              </svg>
              <div className="rr-map-output">
                <span>MODEL OUTPUT</span>
                <strong>VERIFY CONDITIONS BEFORE DISPATCH</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="rr-marquee">
          <span>ROAD 22%</span><b>→</b>
          <span>WEATHER 20%</span><b>→</b>
          <span>ACCESS 18%</span><b>→</b>
          <span>TRAFFIC 14%</span><b>→</b>
          <span>TERRAIN 14%</span><b>→</b>
          <span>SAFETY 12%</span>
        </section>

        <section className="rr-section" id="problem">
          <div className="rr-section-label"><span>01</span><p>THE PROBLEM</p></div>
          <div className="rr-two-col">
            <h2>Dispatch decisions become fragile when route knowledge is scattered.</h2>
            <div className="rr-body-copy">
              <p>
                Route conditions may be discussed across weather updates, field
                calls, road observations and informal experience. The prototype
                asks a narrower question: can those conditions be translated
                into a shared, inspectable risk language?
              </p>
              <p>
                The goal is not to automate safety authority. The goal is to
                make the assumptions behind a recommendation visible enough to
                discuss, challenge and improve.
              </p>
            </div>
          </div>
        </section>

        <section className="rr-section rr-model-section" id="model">
          <div className="rr-section-label"><span>02</span><p>THE PROTOTYPE MODEL</p></div>
          <div className="rr-model-grid">
            <div>
              <p className="rr-kicker">ONE MODEL / ONE UI</p>
              <h2>Six factors. One weighted score. Clear action language.</h2>
            </div>
            <div className="rr-band-table">
              <div><span>00–34</span><strong>LOW</strong><p>Proceed + monitor</p></div>
              <div><span>35–69</span><strong>WATCH</strong><p>Verify before dispatch</p></div>
              <div><span>70–100</span><strong>HIGH</strong><p>Delay / reroute / escalate</p></div>
            </div>
          </div>
        </section>

        <RouteRiskCalculator />

        <section className="rr-section" id="migration">
          <div className="rr-section-label"><span>03</span><p>MIGRATION REVIEW</p></div>
          <div className="rr-two-col">
            <h2>What changed from the original RouteRisk page.</h2>
            <div className="rr-findings">
              {legacyFindings.map(([title, copy], index) => (
                <article key={title}>
                  <span>0{index + 1}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="rr-section rr-dark-section">
          <div className="rr-section-label"><span>04</span><p>PRODUCT DECISIONS</p></div>
          <div className="rr-decision-grid">
            {decisions.map((item) => (
              <article key={item.no}>
                <span>{item.no}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rr-section">
          <div className="rr-section-label"><span>05</span><p>WHAT THIS PROJECT DEMONSTRATES</p></div>
          <div className="rr-outcome">
            <p className="rr-outcome-big">
              Operations thinking.<br />
              Transparent assumptions.<br />
              Better prototype discipline.
            </p>
            <div>
              <p>
                RouteRisk is useful in the portfolio because it shows the
                translation from an operational question into a decision model
                and an interactive instrument.
              </p>
              <p>
                Its value is the reasoning and interface pattern—not an
                unsupported claim that the current formula is a validated
                enterprise safety model.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="rr-footer">
        <div>
          <strong>NIYATA / ROUTERISK</strong>
          <span>Operational Field Instrument world</span>
        </div>
        <a href="./index.html">Back to portfolio ↑</a>
      </footer>
    </div>
  )
}
