import { ilrasCaseStudy as cs } from '../data/ilrasCaseStudy'

export default function IlrasCaseStudy() {
  return (
    <section className="ilras-case" id="ilras-case-study">
      <div className="wrap">
        <div className="case-kicker-row">
          <p>{cs.eyebrow}</p>
          <a href="https://github.com/gyandeza/ilras">View repository ↗</a>
        </div>

        <div className="case-hero">
          <div>
            <p className="case-type">{cs.subtitle}</p>
            <h2>{cs.title}</h2>
          </div>
          <p className="case-thesis">{cs.thesis}</p>
        </div>

        <div className="case-facts">
          <div>
            <span>ROLE</span>
            <ul>{cs.role.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
          <div>
            <span>PRODUCT PRINCIPLE</span>
            <p>Explain the decision logic. Preserve uncertainty. Never fake evidence.</p>
          </div>
          <div>
            <span>BUILD MODE</span>
            <p>Product-led, AI-assisted implementation with iterative architecture and methodology review.</p>
          </div>
        </div>

        <div className="case-block">
          <div className="case-block-label">
            <span>01</span>
            <p>THE PROBLEM</p>
          </div>
          <div className="case-two-col">
            <h3>Regional readiness is not useful if the score cannot be explained.</h3>
            <div className="case-copy">
              <p>
                ILRAS was framed around a decision problem: how can regional
                readiness be compared without reducing the answer to an opaque
                dashboard number?
              </p>
              <p>
                The system therefore combines readiness scoring with source
                traceability, GIS context, cross-district comparison, scenario
                testing and a methodology page that exposes how the score works.
              </p>
            </div>
          </div>
        </div>

        <div className="case-block">
          <div className="case-block-label">
            <span>02</span>
            <p>CONSTRAINTS</p>
          </div>
          <div className="constraint-grid">
            {cs.constraints.map((item, i) => (
              <article key={item}>
                <span>0{i + 1}</span>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="case-block">
          <div className="case-block-label">
            <span>03</span>
            <p>SYSTEM ARCHITECTURE</p>
          </div>
          <div className="architecture-flow">
            {cs.architecture.map((item, i) => (
              <div className="architecture-node" key={item.step}>
                <div className="architecture-node-top">
                  <span>{item.step}</span>
                  {i < cs.architecture.length - 1 && <b>→</b>}
                </div>
                <strong>{item.label}</strong>
                <p>{item.detail}</p>
              </div>
            ))}
          </div>
          <p className="architecture-note">
            Scoring is deliberately centralized in the backend. Scenario
            simulation re-enters the same ILRI engine instead of duplicating
            logic in the UI.
          </p>
        </div>

        <div className="case-block">
          <div className="case-block-label">
            <span>04</span>
            <p>7-DIMENSION ILRI MODEL</p>
          </div>
          <div className="dimension-band">
            {cs.dimensions.map((item, i) => (
              <div key={item}>
                <span>0{i + 1}</span>
                <strong>{item}</strong>
                <small>1/7 baseline weight</small>
              </div>
            ))}
          </div>
          <div className="method-note">
            <span>METHODOLOGY v1.1</span>
            <p>
              Equal weighting is treated as a transparent baseline, with a
              documented future path toward expert-based AHP validation rather
              than being presented as a final truth.
            </p>
          </div>
        </div>

        <div className="case-block">
          <div className="case-block-label">
            <span>05</span>
            <p>WHAT THE SYSTEM CAN DO</p>
          </div>
          <div className="capability-case-grid">
            {cs.capabilities.map((item) => (
              <article key={item.no}>
                <span>{item.no}</span>
                <h4>{item.title}</h4>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="case-block">
          <div className="case-block-label">
            <span>06</span>
            <p>KEY PRODUCT DECISIONS</p>
          </div>
          <div className="decision-list">
            {cs.decisions.map((item, i) => (
              <article key={item.title}>
                <span>0{i + 1}</span>
                <h4>{item.title}</h4>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="case-block case-evidence">
          <div className="case-block-label">
            <span>07</span>
            <p>EVIDENCE & SOURCE DISCIPLINE</p>
          </div>
          <div className="case-two-col">
            <h3>Real sources where possible. Explicit gaps where not.</h3>
            <div className="source-stack">
              <div><span>OSM</span><p>Major road geometry through Overpass, with measured geodesic road lengths.</p></div>
              <div><span>BNPB</span><p>InaRisk hazard overlay with source disclaimer retained in the experience.</p></div>
              <div><span>BIG</span><p>Official kecamatan boundary service path with schema-level verification and runtime caveat.</p></div>
              <div><span>REGISTRY</span><p>Indicators link to identifiable sources; missing online documents remain visibly unavailable instead of using fake links.</p></div>
            </div>
          </div>
        </div>

        <div className="case-block case-limits">
          <div className="case-block-label">
            <span>08</span>
            <p>WHAT IS NOT SOLVED YET</p>
          </div>
          <div className="limits-layout">
            <h3>A portfolio case study should show the boundary of the system, not hide it.</h3>
            <div>
              <ol>
                {cs.limits.map((item) => <li key={item}>{item}</li>)}
              </ol>
              <p>{cs.maturityStatement}</p>
            </div>
          </div>
        </div>

        <div className="case-block case-outcome">
          <div className="case-block-label">
            <span>09</span>
            <p>OUTCOME</p>
          </div>
          <div className="outcome-panel">
            <p className="outcome-big">
              Working prototype.<br />
              Explainable architecture.<br />
              No invented impact.
            </p>
            <p>{cs.proof}</p>
          </div>
        </div>

        <div className="case-footer">
          <div>
            <p className="case-type">WHAT THIS PROJECT DEMONSTRATES</p>
            <h3>
              Systems thinking × product framing × decision intelligence ×
              evidence discipline.
            </h3>
          </div>
          <a className="button button-dark" href="https://github.com/gyandeza/ilras">
            Explore ILRAS repository ↗
          </a>
        </div>
      </div>
    </section>
  )
}
