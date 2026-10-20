import { connectedFiberCaseStudy as cs } from '../data/connectedFiberCaseStudy'

export default function ConnectedFiberCaseStudy() {
  return (
    <section className="cfs-case" id="connected-fiber-case-study">
      <div className="wrap">
        <div className="cfs-kicker-row">
          <p>{cs.eyebrow}</p>
          <span>CONFIDENTIALITY-SAFE / SELECTED DETAILS OMITTED</span>
        </div>

        <div className="cfs-hero">
          <div>
            <p className="case-type">{cs.subtitle}</p>
            <h2>{cs.title}</h2>
          </div>
          <p className="cfs-thesis">{cs.thesis}</p>
        </div>

        <div className="cfs-role-grid">
          <div>
            <span>MY ROLE</span>
            <ul>{cs.role.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
          <div>
            <span>TRANSFORMATION LENS</span>
            <p>Operations → event visibility → digital workflow → integration → decision rhythm → adoption.</p>
          </div>
          <div>
            <span>DISCLOSURE</span>
            <p>This portfolio version intentionally abstracts organization-specific systems, vendors, routes and internal metrics.</p>
          </div>
        </div>

        <div className="case-block">
          <div className="case-block-label"><span>01</span><p>THE OPERATING PROBLEM</p></div>
          <div className="cfs-problem-grid">
            <h3>Complex supply networks fail at the handoffs between field reality, transactions and systems.</h3>
            <div className="cfs-problem-list">
              {cs.problem.map((item, i) => (
                <article key={item}>
                  <span>0{i+1}</span>
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="case-block">
          <div className="case-block-label"><span>02</span><p>TRANSFORMATION ARCHITECTURE</p></div>
          <div className="cfs-flow">
            <div><span>01</span><strong>FIELD EVENT</strong><p>Loading · movement · checkpoint · arrival · unloading</p></div>
            <b>→</b>
            <div><span>02</span><strong>CAPTURE</strong><p>Mobile · tracking · identifiers · operational input</p></div>
            <b>→</b>
            <div><span>03</span><strong>INTEGRATE</strong><p>Operational systems · transactions · status exchange</p></div>
            <b>→</b>
            <div><span>04</span><strong>INTERPRET</strong><p>Milestones · exceptions · reconciliation · visibility</p></div>
            <b>→</b>
            <div><span>05</span><strong>ACT</strong><p>Dispatch · escalation · review · improvement</p></div>
          </div>
          <p className="cfs-flow-note">
            Public-safe abstraction: the pattern shows how the work is structured without exposing proprietary system names, interfaces or operating thresholds.
          </p>
        </div>

        <div className="case-block">
          <div className="case-block-label"><span>03</span><p>SELECTED WORKSTREAMS</p></div>
          <div className="cfs-workstreams">
            {cs.workstreams.map((item) => (
              <article key={item.no}>
                <span>{item.no}</span>
                <h4>{item.title}</h4>
                <p>{item.copy}</p>
                <div>{item.tags.map((tag) => <small key={tag}>{tag}</small>)}</div>
              </article>
            ))}
          </div>
        </div>

        <div className="case-block">
          <div className="case-block-label"><span>04</span><p>DESIGN PRINCIPLES</p></div>
          <div className="cfs-principles">
            {cs.designPrinciples.map((item, i) => (
              <article key={item.title}>
                <span>0{i+1}</span>
                <h4>{item.title}</h4>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="case-block cfs-adoption">
          <div className="case-block-label"><span>05</span><p>GO-LIVE ≠ CHANGE</p></div>
          <div className="cfs-adoption-grid">
            <div>
              <p className="cfs-big-statement">A system can be live while the operating model is still changing.</p>
            </div>
            <div className="cfs-loop">
              <div><span>1</span><strong>DEPLOY</strong><small>Release the capability</small></div>
              <div><span>2</span><strong>OBSERVE</strong><small>Watch real usage and exceptions</small></div>
              <div><span>3</span><strong>STABILIZE</strong><small>Resolve workflow and data gaps</small></div>
              <div><span>4</span><strong>ADOPT</strong><small>Build routine and ownership</small></div>
              <div><span>5</span><strong>IMPROVE</strong><small>Use evidence to refine the process</small></div>
            </div>
          </div>
        </div>

        <div className="case-block cfs-firewall">
          <div className="case-block-label"><span>06</span><p>PUBLIC-SAFE FIREWALL</p></div>
          <div className="cfs-firewall-grid">
            <h3>What is intentionally not published.</h3>
            <ul>
              {cs.publicSafe.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </div>

        <div className="case-block">
          <div className="case-block-label"><span>07</span><p>WHAT THIS PROJECT DEMONSTRATES</p></div>
          <div className="cfs-demonstrates">
            {cs.demonstrates.map((item, i) => (
              <div key={item}><span>0{i+1}</span><strong>{item}</strong></div>
            ))}
          </div>
        </div>

        <div className="cfs-outcome">
          <p className="case-type">PORTFOLIO OUTCOME</p>
          <h3>From isolated digital initiatives to a connected operating-system mindset.</h3>
          <p>
            This case study is intentionally framed around transformation architecture, delivery logic and operating lessons—not confidential performance claims.
          </p>
        </div>
      </div>
    </section>
  )
}
