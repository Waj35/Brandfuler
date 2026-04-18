import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { mockups } from '../data'

export default function Mockups() {
  const [active, setActive] = useState(null)

  useEffect(() => {
    if (active === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') setActive(null)
      if (e.key === 'ArrowRight') setActive((i) => (i + 1) % mockups.length)
      if (e.key === 'ArrowLeft') setActive((i) => (i - 1 + mockups.length) % mockups.length)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [active])

  return (
    <section className="section" id="mockups">
      <div className="container">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">UI & Brand Mockups</span>
          <h2 className="section-title" style={{ marginTop: 18 }}>
            Design work in the wild.
          </h2>
          <p className="section-sub">
            A curated look at brand and social mockups we've shipped for clients across industries.
          </p>
        </motion.div>

        <div className="mockups-grid">
          {mockups.map((m, i) => (
            <motion.button
              key={m.src}
              type="button"
              className="mockup-card"
              onClick={() => setActive(i)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: (i % 6) * 0.06 }}
              aria-label={`Open ${m.title} mockup`}
            >
              <img src={m.src} alt={m.title} loading="lazy" />
              <div className="mockup-overlay">
                <span className="work-cat">{m.cat}</span>
                <h4>{m.title}</h4>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <button
              className="lightbox-btn lightbox-close"
              onClick={(e) => { e.stopPropagation(); setActive(null) }}
              aria-label="Close"
            >
              <X size={22} />
            </button>
            <button
              className="lightbox-btn lightbox-prev"
              onClick={(e) => { e.stopPropagation(); setActive((i) => (i - 1 + mockups.length) % mockups.length) }}
              aria-label="Previous"
            >
              <ChevronLeft size={26} />
            </button>
            <motion.img
              key={mockups[active].src}
              src={mockups[active].src}
              alt={mockups[active].title}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="lightbox-btn lightbox-next"
              onClick={(e) => { e.stopPropagation(); setActive((i) => (i + 1) % mockups.length) }}
              aria-label="Next"
            >
              <ChevronRight size={26} />
            </button>
            <div className="lightbox-caption">
              <strong>{mockups[active].title}</strong>
              <span> · {mockups[active].cat}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
