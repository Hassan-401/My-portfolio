import Icon from "./Icons.jsx";
import SectionTitle from "./SectionTitle.jsx";
import { profile } from "../data.js";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <SectionTitle icon="mail" title="GET IN TOUCH" />
      <div className="contact__panel">
        <p className="contact__lead">
          <span className="contact__badge">
            AVAILABLE FOR LARGE-SCALE PROJECTS
          </span>
        </p>
        <div className="contact__grid">
          {profile.socials.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noreferrer"
              className="contact__card"
            >
              <span className="contact__icon" style={{ color: s.color }}>
                <Icon name={s.icon} size={18} />
              </span>
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
