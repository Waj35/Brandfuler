import { motion } from 'framer-motion'
import { useState } from 'react'
import { Mail, Globe, MapPin, Send, CheckCircle2 } from 'lucide-react'
import { services } from '../data'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    e.currentTarget.reset()
  }

  return (
    <section className="section" id="contact">
      <div className="container">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">Let's talk</span>
          <h2 className="section-title" style={{ marginTop: 18 }}>
            Got an idea? <span style={{
              background: 'linear-gradient(90deg, #a855f7, #06b6d4)',
              WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent'
            }}>Let's make it real.</span>
          </h2>
        </motion.div>

        <div className="contact-wrap">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
          >
            <h3>Reach out directly</h3>
            <p>We respond within 1 business day. Or book a 30-min strategy call — on the house.</p>
            <a href="mailto:brandfueler11@gmail.com" className="contact-detail">
              <div className="contact-detail-icon"><Mail size={18} /></div>
              <div>
                <strong>brandfueler11@gmail.com</strong>
                <span>Drop us a note anytime</span>
              </div>
            </a>
            <a href="https://brandfuler.vercel.app/" target="_blank" rel="noopener noreferrer" className="contact-detail">
              <div className="contact-detail-icon"><Globe size={18} /></div>
              <div>
                <strong>brandfuler.vercel.app</strong>
                <span>Browse the portfolio</span>
              </div>
            </a>
            <div className="contact-detail">
              <div className="contact-detail-icon"><MapPin size={18} /></div>
              <div>
                <strong>Remote-first, globally</strong>
                <span>Working with clients worldwide</span>
              </div>
            </div>
          </motion.div>

          <motion.form
            className="form"
            onSubmit={submit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
          >
            <div className="form-row">
              <div className="field">
                <label>Your name</label>
                <input required placeholder="Jane Doe" />
              </div>
              <div className="field">
                <label>Email</label>
                <input type="email" required placeholder="jane@company.com" />
              </div>
            </div>
            <div className="form-row">
              <div className="field">
                <label>Company</label>
                <input placeholder="Acme Inc." />
              </div>
              <div className="field">
                <label>Service</label>
                <select defaultValue="">
                  <option value="" disabled>Choose one…</option>
                  {services.map(s => <option key={s.title}>{s.title}</option>)}
                  <option>Something else</option>
                </select>
              </div>
            </div>
            <div className="field">
              <label>Tell us about your project</label>
              <textarea required placeholder="Timelines, goals, budget, dreams…" />
            </div>
            <button type="submit" className="btn btn-primary" style={{ justifyContent: 'center', padding: '15px 22px' }}>
              {sent ? <>Message sent <CheckCircle2 size={16} /></> : <>Send message <Send size={15} /></>}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
