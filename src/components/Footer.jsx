import Icon from './Icons.jsx'
import { profile } from '../data.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <p className="footer__logo">
            <Icon name="code" size={18} /> {profile.name}
          </p>
          <p className="footer__tagline">
            Crafting fast, reliable APIs, sturdy server-side architectures, and refined user
            interfaces.
          </p>
          <div className="footer__socials">
            {profile.socials.slice(0, 5).map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                style={{ color: s.color }}
              >
                <Icon name={s.icon} size={16} />
              </a>
            ))}
          </div>
        </div>
        <div className="footer__nav">
          <h4>Navigation</h4>
          <div className="footer__links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#languages">Languages</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        <div className="footer__status">
          <h4>System Status</h4>
          <ul>
            <li>
              <span>Environment</span> <b className="teal">Production</b>
            </li>
            <li>
              <span>Uptime</span> <b className="teal">Active 24/7</b>
            </li>
            <li>
              <span>Build Version</span> <b>v1.0.0</b>
            </li>
            <li>
              <span>Stack</span> <b>React + Vite</b>
            </li>
          </ul>
        </div>
      </div>
      <p className="footer__copy">
        © {new Date().getFullYear()} {profile.name} — All Rights Reserved
      </p>
    </footer>
  )
}
