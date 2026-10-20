import Nav from './components/Nav'
import HeroSystem from './components/HeroSystem'
import ProjectCard from './components/ProjectCard'
import IlrasCaseStudy from './components/IlrasCaseStudy'
import ConnectedFiberCaseStudy from './components/ConnectedFiberCaseStudy'
import AIHQCaseStudy from './components/AIHQCaseStudy'
import {
  capabilities,
  projects,
  journey,
  researchTopics,
  teachingTopics,
} from './data/content'

function SectionLabel({ index, children }) {
  return (
    <div className="section-label">
      <span>{index}</span>
      <p>{children}</p>
    </div>
  )
}

export default function App() {
  return (
    <div className="page-shell" id="top">
      <Nav />

      <main>
        <section className="hero wrap">
          <div className="hero-copy">
            <div className="hero-meta">
              <span className="availability"><i /> PROFESSIONAL PORTFOLIO</span>
              <span>INDONESIA · 2026</span>
            </div>
            <p className="hero-name">GILANG YANDEZA</p>
            <h1>
              I build practical systems
              <span> for complex operations.</span>
            </h1>
            <p className="hero-subtitle">
              Industrial Engineering × Supply Chain × Digital Transformation ×
              Project Management × Applied AI.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#work">Explore selected work</a>
              <a className="text-link" href="./about.html">View my operating journey ↗</a>
            </div>
          </div>

          <HeroSystem />
        </section>

        <section className="marquee-strip">
          <div className="wrap marquee-inner">
            <span>OPERATIONS</span><b>×</b>
            <span>SUPPLY CHAIN</span><b>×</b>
            <span>DIGITAL SYSTEMS</span><b>×</b>
            <span>PROJECT DELIVERY</span><b>×</b>
            <span>DECISION INTELLIGENCE</span>
          </div>
        </section>

        <section className="section wrap" id="about">
          <SectionLabel index="01">WHAT I WORK ON</SectionLabel>
          <div className="section-intro">
            <h2>I work where operations, technology and decisions meet.</h2>
            <p>
              The goal is not digitization for its own sake. I focus on making
              work clearer, decisions faster, ownership visible and improvement
              sustainable.
            </p>
          </div>

          <div className="capability-grid">
            {capabilities.map((item) => (
              <article className="capability-card" key={item.index}>
                <div className="capability-index">{item.index}</div>
                <div>
                  <p className="capability-kicker">{item.kicker}</p>
                  <h3>{item.title}</h3>
                </div>
                <ul>
                  {item.items.map((entry) => <li key={entry}>{entry}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-dark" id="work">
          <div className="wrap">
            <SectionLabel index="02">SELECTED WORK</SectionLabel>
            <div className="section-intro section-intro-dark">
              <h2>Projects that connect systems, people and decisions.</h2>
              <p>
                A curated set of enterprise work, decision tools and independent
                products. Confidential enterprise cases are intentionally
                presented at a public-safe level.
              </p>
            </div>

            <div className="project-grid" id="case-studies">
              {projects.map((project) => (
                <ProjectCard project={project} key={project.code} />
              ))}
            </div>
          </div>
        </section>

        <IlrasCaseStudy />

        <ConnectedFiberCaseStudy />

        <AIHQCaseStudy />

        <section className="section wrap journey-section">
          <SectionLabel index="03">PROFESSIONAL EVOLUTION</SectionLabel>
          <div className="journey-layout">
            <div className="journey-heading">
              <h2>Engineering foundation. Operational lens. Strategic trajectory.</h2>
              <p>
                My career has expanded from solving production problems to
                designing connected operating systems and decision environments.
              </p>
            </div>

            <div className="journey-list">
              {journey.map((item, i) => (
                <article className="journey-item" key={item.title}>
                  <span className="journey-number">0{i + 1}</span>
                  <div>
                    <p className="journey-period">{item.period}</p>
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section research-section" id="research">
          <div className="wrap">
            <SectionLabel index="04">RESEARCH & KNOWLEDGE</SectionLabel>
            <div className="research-layout">
              <div>
                <p className="eyebrow-accent">FROM PRACTICE → KNOWLEDGE</p>
                <h2>Real operating problems should become reusable knowledge.</h2>
                <p className="research-copy">
                  Niyata will also become the public home for selected research,
                  writing, academic work and professional thinking.
                </p>
              </div>

              <div className="topic-stack">
                {researchTopics.map((topic, i) => (
                  <div className="topic-row" key={topic}>
                    <span>0{i + 1}</span>
                    <strong>{topic}</strong>
                    <b>↗</b>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section wrap" id="teaching">
          <SectionLabel index="05">TEACHING & SPEAKING</SectionLabel>
          <div className="teaching-grid">
            <div>
              <h2>Industry practice translated into learning.</h2>
            </div>
            <div className="teaching-panel">
              <p>
                I teach and share practical perspectives around operations,
                management and digital transformation—connecting frameworks with
                how work actually happens.
              </p>
              <div className="teaching-tags">
                {teachingTopics.map((topic) => <span key={topic}>{topic}</span>)}
              </div>
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="wrap contact-grid">
            <div>
              <p className="contact-label">06 / CONNECT</p>
              <h2>Let’s work on difficult operational problems.</h2>
            </div>
            <div className="contact-panel">
              <p>
                Open to professional collaboration, research discussion,
                knowledge exchange and selected speaking opportunities.
              </p>
              <div className="contact-actions">
                <a className="button button-light" href="./collaborate.html">
                  Collaboration options ↗
                </a>
                <a className="text-link text-link-light" href="#top">
                  Back to top ↑
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer-inner">
          <div>
            <strong>NIYATA</strong>
            <span>Professional digital home of Gilang Yandeza</span>
          </div>
          <div>
            <a href="./labs.html">Niyata Labs ↗</a>
            <span>Editorial × Engineering × Strategy</span>
            <span>V3.0 / 2026</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
