import Icon from './Icons.jsx'
import SectionTitle from './SectionTitle.jsx'
import { projects } from '../data.js'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <SectionTitle icon="rocket" title="PROJECTS" />
      <div className="projects__grid">
        {projects.map((p) => (
          <article key={p.title} className="project__card">
            <h3>{p.title}</h3>
            <p className="project__desc">{p.description}</p>
            <div className="project__tech">
              {p.tech.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <p className="project__highlight">
              <Icon name="spark" size={14} /> {p.highlight}
            </p>
            <div className="project__links">
              {p.github && (
                <a href={p.github} target="_blank" rel="noreferrer" className="btn btn--ghost">
                  <Icon name="github" size={15} /> GitHub
                </a>
              )}
              {p.demo && (
                <a href={p.demo} target="_blank" rel="noreferrer" className="btn btn--demo">
                  <Icon name="external" size={15} /> Live Demo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
