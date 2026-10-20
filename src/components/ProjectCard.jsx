export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-top">
        <span className="mono">{project.code}</span>
        <span className="status-pill">{project.status}</span>
      </div>
      <div className="project-body">
        <p className="project-type">{project.type}</p>
        <h3>{project.name}</h3>
        <p className="project-description">{project.description}</p>
      </div>
      <div className="tag-row">
        {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
      </div>
      <p className="project-note">{project.note}</p>
      <a
        className="project-link"
        href={project.href || '#case-studies'}
        aria-label={`${project.name} case study`}
      >
        <span>CASE STUDY</span>
        <span>{project.href ? 'EXPLORE ↓' : 'COMING NEXT'}</span>
      </a>
    </article>
  )
}
