import { researchWriting as rw } from '../data/knowledge'

function KnowledgeNav() {
  return (
    <header className="knowledge-nav">
      <a className="knowledge-brand" href="./index.html">
        <span>N</span>
        <div><strong>NIYATA</strong><small>RESEARCH & WRITING</small></div>
      </a>
      <nav>
        <a href="#themes">Research</a>
        <a href="#writing">Writing</a>
        <a href="#pipeline">Publishing</a>
        <a href="#firewall">Boundary</a>
      </nav>
      <a className="knowledge-nav-cta" href="./teaching.html">Teaching & speaking ↗</a>
    </header>
  )
}

export default function ResearchWritingPage() {
  return (
    <div className="knowledge-page" id="top">
      <KnowledgeNav />
      <main>
        <section className="knowledge-hero">
          <div className="knowledge-hero-grid">
            <div>
              <p className="knowledge-kicker">{rw.hero.eyebrow}</p>
              <h1>{rw.hero.title}</h1>
            </div>
            <div className="knowledge-hero-copy">
              <p>{rw.hero.copy}</p>
              <div className="knowledge-status-legend">
                {rw.statusLegend.map((item) => (
                  <div key={item.label}><span>{item.label}</span><p>{item.meaning}</p></div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="knowledge-strip">
          <span>OPERATIONS</span><b>×</b><span>SUPPLY CHAIN</span><b>×</b>
          <span>DECISION INTELLIGENCE</span><b>×</b><span>DIGITAL TRANSFORMATION</span><b>×</b>
          <span>APPLIED AI</span>
        </section>

        <section className="knowledge-section" id="themes">
          <div className="knowledge-section-label"><span>01</span><p>RESEARCH THEMES</p></div>
          <div className="knowledge-section-intro">
            <h2>Research directions, not inflated publication claims.</h2>
            <p>
              The public portfolio shows the questions and knowledge domains I am
              developing while keeping unpublished novelty and enterprise evidence protected.
            </p>
          </div>
          <div className="research-theme-list">
            {rw.researchThemes.map((item) => (
              <article key={item.id}>
                <div className="research-theme-meta"><span>{item.id}</span><small>{item.status}</small></div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
                <div className="research-boundary"><span>BOUNDARY</span><p>{item.boundary}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section className="knowledge-section writing-section" id="writing">
          <div className="knowledge-section-label"><span>02</span><p>WRITING ARCHITECTURE</p></div>
          <div className="writing-grid">
            {rw.writingStreams.map((item) => (
              <article key={item.code}>
                <div><span>{item.code}</span><small>STREAM</small></div>
                <h3>{item.title}</h3>
                <p>{item.purpose}</p>
                <ul>{item.examples.map((example) => <li key={example}>{example}</li>)}</ul>
              </article>
            ))}
          </div>
        </section>

        <section className="knowledge-section publication-section" id="pipeline">
          <div className="knowledge-section-label"><span>03</span><p>PUBLICATION PIPELINE</p></div>
          <div className="publication-layout">
            <div>
              <p className="knowledge-kicker">FROM SIGNAL → KNOWLEDGE</p>
              <h2>Not every useful thought should become a paper. Every public claim should earn its status.</h2>
            </div>
            <div className="publication-steps">
              {rw.publicationArchitecture.map((item) => (
                <article key={item.stage}>
                  <span>{item.stage}</span><div><h3>{item.title}</h3><p>{item.copy}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="knowledge-section firewall-section" id="firewall">
          <div className="knowledge-section-label"><span>04</span><p>RESEARCH & IP FIREWALL</p></div>
          <div className="firewall-layout">
            <h2>Public knowledge should not compromise unpublished research or enterprise trust.</h2>
            <ul>{rw.firewall.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
        </section>

        <section className="knowledge-close">
          <div>
            <p className="knowledge-kicker">KNOWLEDGE THESIS</p>
            <h2>Good practice creates evidence. Good research makes the evidence transferable.</h2>
          </div>
          <div>
            <p>Teaching and speaking are the next layer: turning the same knowledge into useful conversations.</p>
            <a href="./teaching.html">Explore teaching & speaking ↗</a>
          </div>
        </section>
      </main>
      <footer className="knowledge-footer">
        <div><strong>NIYATA</strong><span>Research & Writing</span></div><a href="#top">Back to top ↑</a>
      </footer>
    </div>
  )
}
