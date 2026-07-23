import { useEffect, useState } from 'react'
import Icon from './Icons.jsx'
import { SplineScene } from './ui/splite.tsx'
import { profile } from '../data.js'
import cvFile from '../assets/pdfs/Hassan_Mohamed_CV.pdf'

const phrases = ['Clean Code Advocate', 'Server-Side Specialist', 'Creative Problem Solver', 'End-to-End Developer']

function useTypewriter() {
  const [text, setText] = useState('')
  const [phraseIdx, setPhraseIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const phrase = phrases[phraseIdx]
    const delay = deleting ? 40 : text === phrase ? 1600 : 90
    const timer = setTimeout(() => {
      if (!deleting && text === phrase) {
        setDeleting(true)
      } else if (deleting && text === '') {
        setDeleting(false)
        setPhraseIdx((i) => (i + 1) % phrases.length)
      } else {
        setText(phrase.slice(0, text.length + (deleting ? -1 : 1)))
      }
    }, delay)
    return () => clearTimeout(timer)
  }, [text, deleting, phraseIdx])

  return text
}

export default function Hero() {
  const typed = useTypewriter()

  return (
    <section id="home" className="hero">
      <div className="hero__card">
        <div className="hero__visual">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
        <div className="hero__content">
          <h1 className="hero__name">{profile.name}</h1>
          <p className="hero__role">{profile.role}</p>
          <p className="hero__typed">
            [{typed}
            <span className="hero__cursor">|</span>]
          </p>
          <p className="hero__bio">{profile.bio}</p>
          <div className="hero__socials">
            {profile.socials.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                title={s.label}
                style={{ color: s.color }}
              >
                <Icon name={s.icon} size={18} />
              </a>
            ))}
          </div>
          <div className="hero__actions">
            <a
              href={cvFile}
              download="Hassan_Mohamed_CV.pdf"
              className="btn btn--primary"
            >
              Download CV <Icon name="download" size={16} />
            </a>
            <a href="#projects" className="btn btn--outline">
              Explore My Work <Icon name="rocket" size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
