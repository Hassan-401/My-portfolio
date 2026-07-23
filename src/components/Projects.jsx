import { useState } from 'react'
import Icon from './Icons.jsx'
import SectionTitle from './SectionTitle.jsx'
import { projects, PROJECTS_PER_PAGE } from '../data.js'

export default function Projects() {
  const [page, setPage] = useState(1)

  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE)
  const start = (page - 1) * PROJECTS_PER_PAGE
  const visible = projects.slice(start, start + PROJECTS_PER_PAGE)

  const goTo = (next) => {
    if (next < 1 || next > totalPages || next === page) return
    setPage(next)
    // Bring the user back to the top of the section after switching pages.
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="projects" className="section">
      <SectionTitle
        icon="rocket"
        title="PROJECTS"
        subtitle={`Showing ${start + 1}–${start + visible.length} of ${projects.length} projects`}
      />

      <div className="projects__grid">
        {visible.map((p) => (
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

      {totalPages > 1 && (
        <nav className="pagination" aria-label="Projects pagination">
          <button
            type="button"
            className="pagination__arrow"
            onClick={() => goTo(page - 1)}
            disabled={page === 1}
            aria-label="Previous page"
          >
            <Icon name="chevron-left" size={13} />
          </button>

          <ul className="pagination__pages">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <li key={n}>
                <button
                  type="button"
                  className={`pagination__page ${n === page ? 'active' : ''}`}
                  onClick={() => goTo(n)}
                  aria-label={`Go to page ${n}`}
                  aria-current={n === page ? 'page' : undefined}
                >
                  {n}
                </button>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="pagination__arrow"
            onClick={() => goTo(page + 1)}
            disabled={page === totalPages}
            aria-label="Next page"
          >
            <Icon name="chevron-right" size={13} />
          </button>
        </nav>
      )}
    </section>
  )
}
