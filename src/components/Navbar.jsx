import { useEffect, useState } from 'react'
import Icon from './Icons.jsx'
import { profile } from '../data.js'

const links = ['Home', 'About', 'Skills', 'Projects', 'Contact']

function getInitialTheme() {
  if (typeof window === 'undefined') return 'dark'
  const saved = localStorage.getItem('theme')
  return saved === 'light' || saved === 'dark' ? saved : 'dark'
}

export default function Navbar() {
  const [active, setActive] = useState('Home')
  const [scrolled, setScrolled] = useState(false)
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10)
      const sections = links.map((l) => document.getElementById(l.toLowerCase()))
      const pos = window.scrollY + window.innerHeight / 3
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && sections[i].offsetTop <= pos) {
          setActive(links[i])
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <nav className="navbar__inner">
        <a href="#home" className="navbar__logo">
          {profile.initials}
        </a>
        <ul className="navbar__links">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className={active === link ? 'active' : ''}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="navbar__theme"
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={16} />
        </button>
      </nav>
    </header>
  )
}
