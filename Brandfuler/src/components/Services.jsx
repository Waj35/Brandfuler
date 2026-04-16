import { motion } from 'framer-motion'
import { services } from '../data'

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">What we do</span>
          <h2 className="section-title" style={{ marginTop: 18 }}>
            Six disciplines. <span style={{
              background: 'linear-gradient(90deg, #a855f7, #06b6d4)',
              WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent'
            }}>One creative team.</span>
          </h2>
          <p className="section-sub">
            From first pixel to final click, we cover the full stack of creative and technical services
            your brand needs to break out.
          </p>
        </motion.div>

        <div className="services-grid">
          {services.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.title}
                className="service-card"
                style={{ '--glow-color': s.glow }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
              >
                <div className="service-glow" />
                <div className="service-icon"><Icon size={26} /></div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div className="service-tags">
                  {s.tags.map(t => <span key={t}>{t}</span>)}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
