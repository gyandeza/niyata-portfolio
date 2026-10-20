import { teachingSpeaking as ts } from '../data/knowledge'

function TeachingNav() {
  return (
    <header className="knowledge-nav">
      <a className="knowledge-brand" href="./index.html">
        <span>N</span><div><strong>NIYATA</strong><small>TEACHING & SPEAKING</small></div>
      </a>
      <nav>
        <a href="#teaching">Teaching</a><a href="#themes">Themes</a>
        <a href="#format">Method</a><a href="#formats">Formats</a>
      </nav>
      <a className="knowledge-nav-cta" href="./research.html">Research & writing ↗</a>
    </header>
  )
}

export default function TeachingSpeakingPage() {
  return (
    <div className="knowledge-page teaching-page" id="top">
      <TeachingNav />
      <main>
        <section className="knowledge-hero teaching-hero">
          <div className="knowledge-hero-grid">
            <div><p className="knowledge-kicker">{ts.hero.eyebrow}</p><h1>{ts.hero.title}</h1></div>
            <div className="knowledge-hero-copy">
              <p>{ts.hero.copy}</p>
              <div className="teaching-format-mini">
                {ts.formats.map((item) => <span key={item}>{item}</span>)}
              </div>
            </div>
          </div>
        </section>

        <section className="knowledge-strip">
          <span>REAL CASE</span><b>→</b><span>FRAMEWORK</span><b>→</b>
          <span>DISCUSSION</span><b>→</b><span>APPLICATION</span><b>→</b>
          <span>REUSABLE PRINCIPLE</span>
        </section>

        <section className="knowledge-section" id="teaching">
          <div className="knowledge-section-label"><span>01</span><p>TEACHING EXPERIENCE</p></div>
          <div className="teaching-current-grid">
            <div>
              <p className="knowledge-kicker">CURRENT</p>
              <h2>Teaching should connect theory to the decisions people actually face.</h2>
            </div>
            <div className="teaching-current-card">
              {ts.current.map((item) => (
                <article key={item.institution}>
                  <div><span>{item.role}</span><small>{item.period}</small></div>
                  <h3>{item.institution}</h3>
                  <ul>{item.subjects.map((subject) => <li key={subject}>{subject}</li>)}</ul>
                  <p>{item.note}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="teaching-earlier">
            <span>EARLIER PRACTITIONER TEACHING</span>
            <div>{ts.earlier.map((item, i) => <p key={item}><small>0{i+1}</small><strong>{item}</strong></p>)}</div>
          </div>
        </section>

        <section className="knowledge-section teaching-theme-section" id="themes">
          <div className="knowledge-section-label"><span>02</span><p>TEACHING & SPEAKING THEMES</p></div>
          <div className="teaching-theme-list">
            {ts.themes.map((item) => (
              <article key={item.id}>
                <div><span>{item.id}</span><small>{item.audience}</small></div>
                <h3>{item.title}</h3><p>{item.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="knowledge-section teaching-method-section" id="format">
          <div className="knowledge-section-label"><span>03</span><p>HOW I STRUCTURE A SESSION</p></div>
          <div className="teaching-method-layout">
            <div>
              <p className="knowledge-kicker">PRACTITIONER FORMAT</p>
              <h2>Less lecture theatre. More decision context.</h2>
            </div>
            <ol>
              {ts.formatPrinciples.map((item, index) => (
                <li key={item}><span>0{index+1}</span><p>{item}</p></li>
              ))}
            </ol>
          </div>
        </section>

        <section className="knowledge-section teaching-formats-section" id="formats">
          <div className="knowledge-section-label"><span>04</span><p>FORMATS</p></div>
          <div className="teaching-formats-grid">
            {ts.formats.map((item, index) => (
              <div key={item}><span>0{index+1}</span><strong>{item}</strong></div>
            ))}
          </div>
        </section>

        <section className="knowledge-close teaching-close">
          <div><p className="knowledge-kicker">SESSION THESIS</p><h2>People remember frameworks better when they can see where the framework breaks.</h2></div>
          <div><p>For university classes, professional communities and selected practitioner sessions.</p><a href="./collaborate.html">Discuss a session ↗</a></div>
        </section>
      </main>
      <footer className="knowledge-footer">
        <div><strong>NIYATA</strong><span>Teaching & Speaking</span></div><a href="#top">Back to top ↑</a>
      </footer>
    </div>
  )
}
