import { useEffect } from 'react'
import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Services from './components/Services'
import Process from './components/Process'
import Work from './components/Work'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12 }
    )
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <div className="bg-glow" />
      <div className="bg-noise" />
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Process />
        <Work />
        <Testimonials />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
