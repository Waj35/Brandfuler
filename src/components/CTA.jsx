import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="container" style={{ padding: '40px 24px' }}>
      <motion.div
        className="cta"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8 }}
      >
        <h2>Ready to <span style={{
          background: 'linear-gradient(90deg, #a855f7, #06b6d4)',
          WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent'
        }}>fuel your brand?</span></h2>
        <p>Whether you're launching tomorrow or planning a rebrand for next year, we'll help you move faster, smarter, and bolder.</p>
        <div className="cta-actions">
          <a href="#contact" className="btn btn-primary">Start a project <ArrowRight size={16} /></a>
          <a href="#work" className="btn btn-ghost">See case studies</a>
        </div>
      </motion.div>
    </section>
  )
}
