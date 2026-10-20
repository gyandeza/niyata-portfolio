import { collaboration as c } from '../data/credentials'

function CollabNav() {
  return (
    <header className="cred-nav">
      <a className="cred-brand" href="./index.html"><span>N</span><div><strong>NIYATA</strong><small>COLLABORATE</small></div></a>
      <nav><a href="#lanes">Areas</a><a href="#boundary">Boundary</a><a href="#channels">Contact</a></nav>
      <a className="cred-nav-cta" href="./credentials.html">Credentials ↗</a>
    </header>
  )
}

export default function CollaboratePage() {
  return (
    <div className="cred-page collab-page" id="top">
      <CollabNav />
      <main>
        <section className="cred-hero collab-hero">
          <div className="cred-hero-grid">
            <div><p className="cred-kicker">{c.hero.eyebrow}</p><h1>{c.hero.title}</h1></div>
            <div><p className="cred-hero-copy">{c.hero.copy}</p><a className="collab-primary" href="#lanes">Find the right collaboration ↓</a></div>
          </div>
        </section>

        <section className="cred-strip"><span>CONTEXT</span><b>→</b><span>PROBLEM</span><b>→</b><span>FIT</span><b>→</b><span>CONVERSATION</span><b>→</b><span>NEXT STEP</span></section>

        <section className="cred-section" id="lanes">
          <div className="cred-section-label"><span>01</span><p>COLLABORATION LANES</p></div>
          <div className="collab-intro"><h2>Start with why we should talk.</h2><p>These are the areas where my operating experience, research direction and portfolio are most relevant.</p></div>
          <div className="collab-lanes">
            {c.lanes.map((item) => (
              <article key={item.id}>
                <div className="collab-lane-head"><span>{item.id}</span><small>COLLABORATION</small></div>
                <h3>{item.title}</h3><p>{item.prompt}</p>
                <ul>{item.fit.map((fit) => <li key={fit}>{fit}</li>)}</ul>
              </article>
            ))}
          </div>
        </section>

        <section className="cred-section collab-boundary" id="boundary">
          <div className="cred-section-label"><span>02</span><p>BOUNDARY</p></div>
          <div className="collab-boundary-grid">
            <h2>Professional openness does not mean unrestricted disclosure.</h2>
            <div><p className="cred-kicker">NOT A FIT</p><ul>{c.notFit.map((item) => <li key={item}>{item}</li>)}</ul></div>
          </div>
        </section>

        <section className="cred-section collab-channel-section" id="channels">
          <div className="cred-section-label"><span>03</span><p>CONTACT CHANNELS</p></div>
          <div className="collab-channel-layout">
            <div><p className="cred-kicker">KEEP IT SIMPLE</p><h2>Use the channel that carries enough context.</h2><p>A public email address is intentionally not exposed in this build. LinkedIn is the preferred professional introduction channel.</p></div>
            <div className="collab-channels">
              {c.channels.map((item) => (
                <a href={item.url} key={item.name}>
                  <span>{item.name}</span><p>{item.copy}</p><strong>OPEN ↗</strong>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="cred-close collab-close">
          <div><p className="cred-kicker">BEFORE REACHING OUT</p><h2>A useful first message explains the problem, context and why the conversation might matter.</h2></div>
          <div><p>That is enough. A complete proposal is not required for the first conversation.</p><a href="https://id.linkedin.com/in/gilangyandeza">Connect on LinkedIn ↗</a></div>
        </section>
      </main>
      <footer className="cred-footer"><div><strong>NIYATA</strong><span>Contact & Collaboration</span></div><a href="#top">Back to top ↑</a></footer>
    </div>
  )
}
