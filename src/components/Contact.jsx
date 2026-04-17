import { useState } from 'react'
import { Mail, Phone, MapPin, CheckCircle2, ArrowUpRight } from 'lucide-react'
import { services } from '../data'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    setSent(true)
    e.currentTarget.reset()
    setTimeout(() => setSent(false), 4200)
  }

  return (
    <section className="sec" id="desk">
      <div className="container">
        <div className="sec-head reveal-up">
          <span className="eyebrow">Section E &middot; The Desk</span>
          <h2 className="sec-title">
            Write to the <em>editor.</em>
          </h2>
          <span className="trail">Replies within 24 hours</span>
        </div>

        <div className="contact-grid">
          <div className="contact-info reveal-up">
            <h3>Send a brief,<br />or just a <em>hunch.</em></h3>
            <p>
              We read every note ourselves. Whether it&rsquo;s a one-pager, a Figma link, or a voice memo at 2 a.m. &mdash; we&rsquo;ll write you back within a working day.
            </p>

            <ul className="contact-list">
              <li>
                <span className="ic"><Mail size={16} /></span>
                <div>
                  <div className="l-title">Correspondence</div>
                  <div className="l-val">hello@brandfueler.com</div>
                </div>
                <span className="ar">&rarr;</span>
              </li>
              <li>
                <span className="ic"><Phone size={16} /></span>
                <div>
                  <div className="l-title">Switchboard</div>
                  <div className="l-val">+1 (415) 555&ndash;0199</div>
                </div>
                <span className="ar">&rarr;</span>
              </li>
              <li>
                <span className="ic"><MapPin size={16} /></span>
                <div>
                  <div className="l-title">Bureaus</div>
                  <div className="l-val">San Francisco &middot; London &middot; Bangalore</div>
                </div>
                <span className="ar">&rarr;</span>
              </li>
            </ul>
          </div>

          <form className="form reveal-up" onSubmit={submit}>
            <div className="form-row">
              <div className="field">
                <label>01 &middot; Name</label>
                <input required placeholder="Jane Doe" />
              </div>
              <div className="field">
                <label>02 &middot; Email</label>
                <input type="email" required placeholder="jane@company.com" />
              </div>
            </div>
            <div className="form-row">
              <div className="field">
                <label>03 &middot; Company</label>
                <input placeholder="Acme Inc." />
              </div>
              <div className="field">
                <label>04 &middot; Discipline</label>
                <select defaultValue="">
                  <option value="" disabled>Choose a fluency&hellip;</option>
                  {services.map((s) => <option key={s.title}>{s.title}</option>)}
                  <option>Something else</option>
                </select>
              </div>
            </div>
            <div className="field">
              <label>05 &middot; The Brief</label>
              <textarea required placeholder="Timelines, goals, budget, dreams&hellip;" />
            </div>
            <button type="submit" className="btn" style={{ justifyContent: 'center', padding: '16px 22px' }}>
              {sent ? <>Dispatched to the desk <CheckCircle2 size={14} /></> : <>Send the brief <ArrowUpRight size={14} className="arrow" /></>}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
