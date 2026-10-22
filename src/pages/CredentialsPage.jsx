import { credentials as c } from '../data/credentials'

function CredNav() {
  return (
    <header className="cred-nav">
      <a className="cred-brand" href="./index.html"><span>N</span><div><strong>NIYATA</strong><small>CREDENTIALS</small></div></a>
      <nav><a href="#credentials">Credentials</a><a href="#pathways">Pathways</a><a href="#organizations">Organizations</a></nav>
      <a className="cred-nav-cta" href="./collaborate.html">Collaborate ↗</a>
    </header>
  )
}

export default function CredentialsPage() {
  return (
    <div className="cred-page" id="top">
      <CredNav />
      <main>
        <section className="cred-hero">
          <div className="cred-hero-grid">
            <div><p className="cred-kicker">{c.hero.eyebrow}</p><h1>{c.hero.title}</h1></div>
            <div>
              <p className="cred-hero-copy">{c.hero.copy}</p>
              <div className="cred-status-key">
                <div><span>ACHIEVED</span><p>Credential completed.</p></div>
                <div><span>PRACTICAL EXPERIENCE</span><p>Used / trained capability; not presented as a formal credential.</p></div>
                <div><span>PROFESSIONAL DEVELOPMENT</span><p>Future credential pathway; not an achieved certification.</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="cred-strip"><span>FOUNDATION</span><b>→</b><span>PRACTICE</span><b>→</b><span>EVIDENCE</span><b>→</b><span>CREDENTIAL</span><b>→</b><span>CONTINUED DEVELOPMENT</span></section>

        <section className="cred-section" id="credentials">
          <div className="cred-section-label"><span>01</span><p>SELECTED CREDENTIALS & CAPABILITIES</p></div>
          <div className="cred-intro"><h2>Grouped by professional use, not by badge count.</h2><p>The portfolio case studies show application. This page provides the supporting professional and technical context.</p></div>
          <div className="cred-groups">
            {c.groups.map((group) => (
              <article key={group.code}>
                <div className="cred-group-head"><span>{group.code}</span><small>{group.title}</small></div>
                <p>{group.purpose}</p>
                <div>
                  {group.items.map((item) => (
                    <div className="cred-item" key={item.name}>
                      <div><strong>{item.name}</strong><small>{item.type}</small></div>
                      <span>{item.status}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="cred-section cred-pathway-section" id="pathways">
          <div className="cred-section-label"><span>02</span><p>CREDENTIAL PATHWAYS</p></div>
          <div className="cred-pathway-layout">
            <div><p className="cred-kicker">STATUS DISCIPLINE</p><h2>Future credentials are shown as pathways, never as completed achievements.</h2></div>
            <div className="cred-pathways">
              {c.pathways.map((item) => (
                <article key={item.title}><div><span>{item.status}</span><strong>{item.title}</strong></div><p>{item.copy}</p></article>
              ))}
            </div>
          </div>
        </section>

        <section className="cred-section cred-org-section" id="organizations">
          <div className="cred-section-label"><span>03</span><p>SELECTED PROFESSIONAL INVOLVEMENT</p></div>
          <div className="cred-org-layout">
            <h2>Professional communities extend the work beyond a single organization.</h2>
            <div className="cred-org-list">
              {c.organizations.map((item, index) => (
                <article key={item.name}><span>0{index+1}</span><div><small>{item.group}</small><h3>{item.name}</h3><p>{item.context}</p></div></article>
              ))}
            </div>
          </div>
        </section>

        <section className="cred-close">
          <div><p className="cred-kicker">CREDIBILITY PRINCIPLE</p><h2>Evidence first. Credential second. Continuous development always.</h2></div>
          <div><p>For the full picture, read the work and professional narrative rather than the credential list alone.</p><a href="./about.html">View professional narrative ↗</a></div>
        </section>
      </main>
      <footer className="cred-footer"><div><strong>NIYATA</strong><span>Credentials & Professional Involvement</span></div><a href="#top">Back to top ↑</a></footer>
    </div>
  )
}
