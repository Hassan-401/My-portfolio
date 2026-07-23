import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import { DemoOne } from './components/ui/demo.tsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Languages from './components/Languages.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <div className="shader-bg" aria-hidden="true">
        <DemoOne />
      </div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Languages />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
