import { labs } from '../data/labs'

function LabsNav() {
  return (
    <header className="labs-nav">
      <a className="labs-brand" href="./index.html">
        <span>N</span><div><strong>NIYATA</strong><small>LABS</small></div>
      </a>
      <nav><a href="#labs">Experiments</a><a href="#rules">Admission Rule</a></nav>
      <a className="labs-nav-cta" href="./index.html#work">Flagship work ↗</a>
    </header>
  )
}

export default function LabsPage() {
  return (
    <div className="labs-page" id="top">
      <LabsNav />
      <main>
        <section className="labs-hero">
          <div className="labs-hero-grid">
            <div><p className="labs-kicker">{labs.hero.eyebrow}</p><h1>{labs.hero.title}</h1></div>
            <div>
              <p>{labs.hero.copy}</p>
              <div className="labs-state-key">
                <div><span>ACTIVE LAB</span><p>Public experiment already aligned with Niyata.</p></div>
                <div><span>MIGRATION CANDIDATE</span><p>Useful legacy logic selected for redesign and validation.</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="labs-strip">
          <span>QUESTION</span><b>→</b><span>MODEL</span><b>→</b><span>INTERACTION</span><b>→</b><span>ASSUMPTION</span><b>→</b><span>LEARNING</span>
        </section>

        <section className="labs-section" id="labs">
          <div className="labs-section-label"><span>01</span><p>PUBLIC LABS</p></div>
          <div className="labs-intro">
            <h2>Fewer experiments. Stronger reasons for each one.</h2>
            <p>Legacy files are not promoted automatically. A prototype enters Labs only when it adds a distinct learning signal and can be shown safely.</p>
          </div>
          <div className="labs-grid">
            {labs.publicLabs.map((item) => (
              <article key={item.id}>
                <div className="labs-card-meta"><span>{item.id}</span><small>{item.status}</small></div>
                <p className="labs-type">{item.type}</p>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
                <div className="labs-evidence"><span>EVIDENCE STATE</span><strong>{item.evidence}</strong></div>
                {item.href ? <a href={item.href}>Open experiment ↗</a> : <span className="labs-pending">Migration planned</span>}
              </article>
            ))}
          </div>
        </section>

        <section className="labs-section labs-rules-section" id="rules">
          <div className="labs-section-label"><span>02</span><p>LAB ADMISSION RULE</p></div>
          <div className="labs-rules-layout">
            <h2>Labs is not an archive.</h2>
            <ol>{labs.rules.map((item, index) => <li key={item}><span>0{index+1}</span><p>{item}</p></li>)}</ol>
          </div>
        </section>

        <section className="labs-close">
          <div><p className="labs-kicker">EXPERIMENT PRINCIPLE</p><h2>A prototype is valuable when its assumptions are inspectable and its learning can survive the demo.</h2></div>
          <div><p>Archived and retired legacy artifacts remain outside the public Labs surface.</p><a href="./index.html#work">Return to selected work ↗</a></div>
        </section>
      </main>
      <footer className="labs-footer"><div><strong>NIYATA</strong><span>Labs & Experiments</span></div><a href="#top">Back to top ↑</a></footer>
    </div>
  )
}
