import { motion } from 'framer-motion'
import { process } from '../data'

export default function Process() {
  return (
    <section className="section" id="process">
      <div className="container">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">Our process</span>
          <h2 className="section-title" style={{ marginTop: 18 }}>
            Simple, structured, results-first.
          </h2>
          <p className="section-sub">
            A proven four-step workflow that keeps projects on time, on budget, and on brand.
          </p>
        </motion.div>

        <div className="process-list">
          {process.map((p, i) => {
            const Icon = p.icon
            return (
              <motion.div
                key={p.title}
                className="process-item"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div className="process-num">0{i + 1}</div>
                  <Icon size={24} style={{ color: 'var(--accent)' }} />
                </div>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
