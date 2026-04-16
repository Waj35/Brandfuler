import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'

const words = ['design', 'develop', 'optimize', 'launch', 'scale']

export default function Hero() {
  return (
    <section className="hero" id="top">
      <motion.div
        className="blob blob-1"
        animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="blob blob-2"
        animate={{ x: [0, -50, 30, 0], y: [0, 40, -20, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="eyebrow"><span className="dot" /> Accepting new projects for Q2 2026</span>
        </motion.div>

        <h1 className="hero-title">
          <motion.span
            style={{ display: 'block' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            We craft brands
          </motion.span>
          <motion.span
            style={{ display: 'block' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            that <span className="grad">refuse</span> to
          </motion.span>
          <motion.span
            style={{ display: 'block' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            be forgotten.
          </motion.span>
        </h1>

        <motion.p
          className="hero-sub"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Brandfuler is a full-stack creative studio helping ambitious brands win with
          SEO, websites, games, graphics, UI/UX, and social that actually moves the needle.
        </motion.p>

        <motion.div
          className="hero-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
        >
          <a href="#contact" className="btn btn-primary">
            Get free strategy call <ArrowRight size={16} />
          </a>
          <a href="#work" className="btn btn-ghost">
            <Play size={14} /> See our work
          </a>
        </motion.div>

        <motion.div
          className="hero-marquee"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="marquee-track">
            {[...Array(2)].map((_, i) => (
              <span key={i}>
                {words.flatMap((w, j) => [
                  <span key={`${i}-${j}-w`}>{w}</span>,
                  <span key={`${i}-${j}-s`} className="sep" />
                ])}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
