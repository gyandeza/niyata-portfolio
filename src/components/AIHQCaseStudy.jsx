import { useState } from 'react'
import { aiHQCaseStudy as cs } from '../data/aiHQCaseStudy'

export default function AIHQCaseStudy() {
  const [active, setActive] = useState(0)
  const module = cs.modules[active]

  return (
    <section className="aihq-case" id="gilanga-ai-hq-case-study">
      <div className="wrap">
        <div className="aihq-kicker-row">
          <p>{cs.eyebrow}</p>
          <span>PERSONAL SYSTEM / SAFE PUBLIC VIEW</span>
        </div>

        <div className="aihq-hero">
          <div>
            <p className="case-type">{cs.subtitle}</p>
            <h2>{cs.title}</h2>
          </div>
          <p className="aihq-thesis">{cs.thesis}</p>
        </div>

        <div className="aihq-role-grid">
          <div>
            <span>MY ROLE</span>
            <ul>{cs.role.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
          <div>
            <span>CORE IDEA</span>
            <p>AI should operate through explicit tasks, boundaries and logs—not through one unlimited assistant with invisible authority.</p>
          </div>
          <div>
            <span>STACK DIRECTION</span>
            <p>React / Vite interface · n8n orchestration · connected tools · modular agent workers · approval-aware workflows.</p>
          </div>
        </div>

        <div className="case-block">
          <div className="case-block-label"><span>01</span><p>THE PROBLEM</p></div>
          <div className="aihq-two-col">
            <h3>Personal AI becomes chaotic when every workflow is a separate chatbot, shortcut or automation.</h3>
            <div>
              <p>
                Email maintenance, finance capture, research, content, planning
                and business scanning all have different data, risk and execution
                requirements.
              </p>
              <p>
                AI HQ reframes these as modules inside one operating model:
                standardized task intake, routing, execution, approval and logs.
              </p>
            </div>
          </div>
        </div>

        <div className="case-block">
          <div className="case-block-label"><span>02</span><p>SYSTEM ARCHITECTURE</p></div>
          <div className="aihq-architecture">
            <div><span>01</span><strong>INTAKE</strong><p>Chat · Telegram · schedule · connected apps</p></div>
            <b>→</b>
            <div><span>02</span><strong>TASK CONTRACT</strong><p>Task · agent · domain · risk · approval</p></div>
            <b>→</b>
            <div><span>03</span><strong>ROUTER / GATE</strong><p>Route ownership · check consequence · admit execution</p></div>
            <b>→</b>
            <div><span>04</span><strong>WORKER</strong><p>Agent-specific workflow · tools · data access</p></div>
            <b>→</b>
            <div><span>05</span><strong>STATE & OUTPUT</strong><p>Result · status · run log · next action</p></div>
          </div>
          <p className="aihq-architecture-note">
            The system is intentionally modular: shared orchestration does not imply shared credentials or unrestricted data access.
          </p>
        </div>

        <div className="case-block">
          <div className="case-block-label"><span>03</span><p>TASK CONTRACT</p></div>
          <div className="aihq-contract-layout">
            <div className="aihq-contract-card">
              <div className="aihq-contract-top"><span>SCHEMA_VERSION</span><strong>0.1</strong></div>
              <dl>
                <div><dt>task_id</dt><dd>task_test_001</dd></div>
                <div><dt>agent_id</dt><dd>hq_foundation_test</dd></div>
                <div><dt>data_domain</dt><dd>SYSTEM_TEST</dd></div>
                <div><dt>risk_level</dt><dd>GREEN</dd></div>
                <div><dt>task_status</dt><dd>COMPLETED</dd></div>
                <div><dt>approval_required</dt><dd>false</dd></div>
              </dl>
            </div>
            <div className="aihq-contract-explain">
              <p className="aihq-small-label">WHY IT MATTERS</p>
              <h3>Automation should know what it is allowed to do before it runs.</h3>
              <p>
                The task contract gives every worker a shared language for
                ownership, data domain, risk and lifecycle state. This makes the
                system easier to inspect and safer to expand.
              </p>
            </div>
          </div>
        </div>

        <div className="case-block">
          <div className="case-block-label"><span>04</span><p>MODULE EXPLORER</p></div>
          <div className="aihq-module-explorer">
            <div className="aihq-module-nav">
              {cs.modules.map((item, index) => (
                <button
                  type="button"
                  className={index === active ? 'active' : ''}
                  onClick={() => setActive(index)}
                  key={item.code}
                >
                  <span>{item.code}</span>
                  <strong>{item.title}</strong>
                </button>
              ))}
            </div>
            <div className="aihq-module-detail">
              <p className="aihq-small-label">{module.status}</p>
              <h3>{module.title}</h3>
              <p>{module.copy}</p>
              <div>
                <span>DATA BOUNDARY</span>
                <strong>{module.boundary}</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="case-block">
          <div className="case-block-label"><span>05</span><p>DESIGN PRINCIPLES</p></div>
          <div className="aihq-principles">
            {cs.principles.map((item, index) => (
              <article key={item.title}>
                <span>0{index + 1}</span>
                <h4>{item.title}</h4>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="case-block aihq-evidence-section">
          <div className="case-block-label"><span>06</span><p>WHAT EXISTS TODAY</p></div>
          <div className="aihq-evidence-grid">
            {cs.evidence.map((item) => (
              <article key={item.label}>
                <div><span>{item.label}</span><strong>{item.state}</strong></div>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="case-block aihq-boundary">
          <div className="case-block-label"><span>07</span><p>BOUNDARY OF THE CLAIM</p></div>
          <div className="aihq-boundary-grid">
            <h3>AI HQ is an operating-system prototype—not a claim of autonomous general intelligence.</h3>
            <div>
              <p className="aihq-small-label">NOT CLAIMED</p>
              <ul>{cs.notClaimed.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          </div>
        </div>

        <div className="aihq-outcome">
          <p className="case-type">PORTFOLIO OUTCOME</p>
          <h3>From scattered AI tools to a governed personal automation architecture.</h3>
          <p>
            The project demonstrates product architecture, workflow thinking,
            automation governance and practical AI integration—while keeping
            human authority and sensitive-data boundaries explicit.
          </p>
        </div>
      </div>
    </section>
  )
}
