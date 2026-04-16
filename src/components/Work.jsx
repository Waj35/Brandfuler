import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { work } from '../data'

export default function Work() {
  return (
    <section className="section" id="work">
      <div className="container">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">Selected work</span>
          <h2 className="section-title" style={{ marginTop: 18 }}>
            Recent launches we're proud of.
          </h2>
        </motion.div>

        <div className="work-grid">
          {work.map((w, i) => (
            <motion.div
              key={w.title}
              className="work-item"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
            >
              <div className="work-bg" style={{ background: w.gradient }}>
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.25 }}>
                  <defs>
                    <pattern id={`p${i}`} width="40" height="40" patternUnits="userSpaceOnUse">
                      <circle cx="20" cy="20" r="1.5" fill="#fff" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill={`url(#p${i})`} />
                </svg>
              </div>
              <div className="work-overlay">
                <span className="work-cat">{w.cat}</span>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                  <h4>{w.title}</h4>
                  <div style={{
                    width: 44, height: 44, borderRadius: 12,
                    background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)',
                    display: 'grid', placeItems: 'center', color: '#fff'
                  }}>
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
