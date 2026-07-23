import SectionTitle from './SectionTitle.jsx'
import { SkillIcon } from './skillIcons.jsx'
import { skills } from '../data.js'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <SectionTitle icon="code" title="SKILLS" />
      <div className="skills__grid">
        {skills.map((group) => (
          <article key={group.category} className="skills__card">
            <h3 style={{ '--accent': group.accent }}>
              <span className="skills__dot" />
              {group.category}
            </h3>
            <div className="skills__items">
              {group.items.map((item) => (
                <div key={item} className="skill-tile" title={item}>
                  <SkillIcon name={item} size={26} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
