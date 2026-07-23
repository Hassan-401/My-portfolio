import Icon from './Icons.jsx'
import SectionTitle from './SectionTitle.jsx'
import { education } from '../data.js'

export default function Education() {
  return (
    <section id="education" className="section">
      <SectionTitle icon="cap" title="EDUCATION" subtitle={education.note} />
      <div className="edu__card">
        <div className="edu__main">
          <h3>{education.degree}</h3>
          <p className="edu__school">
            {education.school} <span className="edu__location">• {education.location}</span>
          </p>
          <span className="edu__tag">
            <Icon name="cap" size={14} /> Computer Science Track
          </span>
        </div>
        <span className="edu__period">{education.period}</span>
      </div>
    </section>
  )
}
