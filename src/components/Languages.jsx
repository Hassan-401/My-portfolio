import SectionTitle from './SectionTitle.jsx'
import { languages } from '../data.js'

export default function Languages() {
  return (
    <section id="languages" className="section">
      <SectionTitle icon="globe" title="LANGUAGES" />
      <div className="langs__grid">
        {languages.map((lang, i) => (
          <article key={lang.name} className={`lang__card lang__card--${i % 2 === 0 ? 'teal' : 'purple'}`}>
            <h3>{lang.name}</h3>
            <p className="lang__level">{lang.level}</p>
            <div className="lang__bar">
              <span style={{ width: `${lang.percent}%` }} />
            </div>
            <span className="lang__percent">{lang.percent}%</span>
          </article>
        ))}
      </div>
    </section>
  )
}
