import { aboutNarrative as about, capabilityProof } from '../data/about'

function AboutNav() {
  return (
    <header className="about-nav">
      <a className="about-brand" href="./index.html">
        <span>N</span>
        <div>
          <strong>NIYATA</strong>
          <small>GILANG YANDEZA / ABOUT</small>
        </div>
      </a>
      <nav>
        <a href="#journey">Journey</a>
        <a href="#capabilities">Capabilities</a>
        <a href="#method">How I Work</a>
        <a href="#teaching">Teaching</a>
      </nav>
      <a className="about-nav-cta" href="./index.html#work">Selected work ↗</a>
    </header>
  )
}

export default function AboutPage() {
  return (
    <div className="about-page" id="top">
      <AboutNav />

      <main>
        <section className="about-hero">
          <div className="about-hero-grid">
            <div>
              <div className="about-meta">
                <span>ABOUT / PROFESSIONAL NARRATIVE</span>
                <span>INDUSTRIAL ENGINEERING → OPERATING SYSTEMS</span>
              </div>
              <p className="about-name">{about.name}</p>
              <h1>{about.headline}</h1>
            </div>
            <div className="about-intro">
              <p>{about.intro}</p>
              <div className="about-anchor-stack">
                <div className="about-professional-anchors">
                  <span>PROFESSIONAL ANCHORS</span>
                  {about.professionalAnchors.map((item) => (
                    <div key={item.label}>
                      <small>{item.label}</small>
                      <strong>{item.title}</strong>
                      <p>{item.detail}</p>
                    </div>
                  ))}
                </div>
                <div className="about-education">
                  <span>EDUCATION</span>
                  {about.education.map((item) => <strong key={item}>{item}</strong>)}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-strip">
          <span>PROCESS</span><b>→</b>
          <span>OPERATIONS</span><b>→</b>
          <span>SUPPLY CHAIN</span><b>→</b>
          <span>DIGITAL SYSTEMS</span><b>→</b>
          <span>PROJECT DELIVERY</span><b>→</b>
          <span>DECISION INTELLIGENCE</span><b>→</b>
          <span>APPLIED AI</span>
        </section>

        <section className="about-section" id="journey">
          <div className="about-section-label"><span>01</span><p>PROFESSIONAL EVOLUTION</p></div>
          <div className="about-journey-layout">
            <div className="about-sticky-copy">
              <p className="about-kicker">CAREER EVOLUTION, NOT A JOB LIST</p>
              <h2>Each stage expanded the size of the system I was trying to improve.</h2>
              <p>
                The thread is consistent: understand how work happens, make the
                system visible, improve the decision, then help the change survive
                real operating conditions.
              </p>
            </div>
            <div className="about-chapters">
              {about.chapters.map((chapter) => (
                <article key={chapter.no}>
                  <div className="about-chapter-index">
                    <span>{chapter.no}</span>
                    <small>{chapter.label}</small>
                  </div>
                  <div>
                    <h3>{chapter.title}</h3>
                    <p>{chapter.copy}</p>
                    <strong>{chapter.signal}</strong>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-section about-capability-section" id="capabilities">
          <div className="about-section-label"><span>02</span><p>CAPABILITY MAP</p></div>
          <div className="about-cap-intro">
            <h2>Capability is more useful when it is tied to evidence.</h2>
            <p>
              This map does not try to list every tool I have used. It shows the
              recurring abilities that appear across the work and where each one
              is demonstrated.
            </p>
          </div>

          <div className="about-cap-map">
            {about.capabilities.map((cap) => (
              <article key={cap.code}>
                <div className="about-cap-head">
                  <span>{cap.code}</span>
                  <small>{cap.mode}</small>
                </div>
                <h3>{cap.title}</h3>
                <p>{cap.description}</p>
                <div className="about-cap-skills">
                  {cap.skills.map((skill) => <span key={skill}>{skill}</span>)}
                </div>
                <div className="about-cap-evidence">
                  <small>PROOF</small>
                  <strong>{cap.evidence.join(' · ')}</strong>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="about-section about-proof-section">
          <div className="about-section-label"><span>03</span><p>FOUR PROJECTS / ONE THESIS</p></div>
          <div className="about-proof-layout">
            <div>
              <h2>The projects are different. The operating logic is not.</h2>
              <p>
                Each flagship case addresses a different scale of problem, but
                they all connect operating context, structured information and
                better decisions.
              </p>
            </div>
            <div className="about-proof-table">
              {capabilityProof.map((item) => (
                <div key={item.id}>
                  <span>{item.id}</span>
                  <strong>{item.project}</strong>
                  <p>{item.proof.join(' · ')}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="about-section about-method-section" id="method">
          <div className="about-section-label"><span>04</span><p>HOW I WORK</p></div>
          <div className="about-method-header">
            <h2>Start with reality. End with a system people can actually use.</h2>
          </div>
          <div className="about-operating-model">
            {about.operatingModel.map((item) => (
              <article key={item.step}>
                <span>{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="about-section about-credentials">
          <div className="about-section-label"><span>05</span><p>SELECTED CREDENTIALS & TOOLS</p></div>
          <div className="about-credential-layout">
            <div>
              <h2>Credentials support the work. They are not the portfolio.</h2>
              <p>
                I keep this section deliberately compact. The case studies show
                how the capabilities are applied.
              </p>
            </div>
            <div className="about-credential-list">
              {about.selectedCredentials.map((item, index) => (
                <div key={item}><span>0{index + 1}</span><strong>{item}</strong></div>
              ))}
            </div>
          </div>
        </section>

        <section className="about-section about-teaching" id="teaching">
          <div className="about-section-label"><span>06</span><p>TEACHING & KNOWLEDGE</p></div>
          <div className="about-teaching-grid">
            <div>
              <p className="about-kicker">PRACTICE → KNOWLEDGE</p>
              <h2>{about.teaching.headline}</h2>
              <p>{about.teaching.copy}</p>
            </div>
            <div className="about-institutions">
              {about.teaching.institutions.map((item, index) => (
                <div key={item}><span>0{index + 1}</span><strong>{item}</strong></div>
              ))}
            </div>
          </div>
        </section>

        <section className="about-close">
          <div>
            <p className="about-kicker">PROFESSIONAL THESIS</p>
            <h2>
              Better operations come from connecting process, people, technology
              and decisions—not optimizing them in isolation.
            </h2>
          </div>
          <div>
            <p>
              Niyata is where I document the systems, experiments and ideas that
              sit at that intersection.
            </p>
            <a href="./credentials.html">View credentials & professional involvement ↗</a>
          </div>
        </section>
      </main>

      <footer className="about-footer">
        <div>
          <strong>NIYATA</strong>
          <span>Professional digital home of Gilang Yandeza</span>
        </div>
        <a href="#top">Back to top ↑</a>
      </footer>
    </div>
  )
}
