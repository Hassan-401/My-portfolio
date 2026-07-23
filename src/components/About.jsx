import Icon from './Icons.jsx'
import SectionTitle from './SectionTitle.jsx'
import { about, aboutIntro, aboutTimeline } from '../data.js'
import hassanPhoto from '../assets/images/hassan.png'

export default function About() {
  return (
    <section id="about" className="section">
      <SectionTitle icon="user" title="ABOUT ME" subtitle={aboutIntro} />

      <div className="about__top">
        <div className="about__photo">
          <span className="about__ring" aria-hidden="true" />
          <span className="about__ring-dot about__ring-dot--1" aria-hidden="true" />
          <span className="about__ring-dot about__ring-dot--2" aria-hidden="true" />
          <img src={hassanPhoto} alt="Hassan Mohamed" />
        </div>

        <ul className="about__timeline">
          {aboutTimeline.map((item) => (
            <li key={item.label} className="about__tl-item" style={{ '--tl': item.color }}>
              <span className="about__tl-icon">
                <Icon name={item.icon} size={18} />
              </span>
              <div className="about__tl-body">
                <span className="about__tl-label">{item.label}</span>
                <h3>{item.title}</h3>
                {item.meta && (
                  <p className="about__tl-meta">
                    {item.meta}
                    {item.location && <span> • {item.location}</span>}
                  </p>
                )}
                {item.text && <p className="about__tl-text">{item.text}</p>}
                {item.tag && <span className="about__tl-tag">{item.tag}</span>}
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="about__divider" aria-hidden="true" />

      <div className="about__grid">
        {about.map((item) => (
          <article key={item.title} className="about__card">
            <h3>
              <span className="about__icon">
                <Icon name={item.icon} size={18} />
              </span>
              {item.title}
            </h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
