import { useState } from 'react'
import { Mail, Phone, MapPin, CheckCircle2, ArrowUpRight } from 'lucide-react'
import { services } from '../data'

const stampText = 'BRANDFUELER · NEW PROJECT · 2026 · '

export default function Contact() {
  const [sent, setSent] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    setSent(true)
    e.currentTarget.reset()
    setTimeout(() => setSent(false), 4200)
  }

  return (
    <section className="sec" id="contact">
      <div className="container">
        <div className="sec-head reveal">
          <span className="sec-eye"><span className="num">06</span> The Desk</span>
          <h2 className="sec-title">
            Write <em>to us.</em><br />We write back.
          </h2>
          <span className="sec-meta">Replies within<br />one working day</span>
        </div>

        <div className="contact-grid">
          <div className="reveal">
            <h3 className="contact-h">
              Send a<br /><em>brief</em> or<br /><em>hunch.</em>
            </h3>
            <p className="contact-p">
              One-pagers, Figma links, voice memos at 2am — we read it all. Pick the channel that suits you and we&rsquo;ll be there.
            </p>
            <div className="contact-lines">
              <a href="mailto:hello@brandfueler.com">
                <span className="ic"><Mail size={16} /></span>
                <div>
                  <div className="k">Email</div>
                  <div className="v">hello@brandfueler.com</div>
                </div>
                <span className="arr">&rarr;</span>
              </a>
              <a href="tel:+14155550199">
                <span className="ic"><Phone size={16} /></span>
                <div>
                  <div className="k">Switchboard</div>
                  <div className="v">+1 (415) 555&ndash;0199</div>
                </div>
                <span className="arr">&rarr;</span>
              </a>
              <a href="#">
                <span className="ic"><MapPin size={16} /></span>
                <div>
                  <div className="k">Bureaus</div>
                  <div className="v">SF &middot; London &middot; Bangalore</div>
                </div>
                <span className="arr">&rarr;</span>
              </a>
            </div>
          </div>

          <form className="form reveal" onSubmit={submit}>
            <div className="form-stamp" aria-hidden>
              <svg viewBox="0 0 100 100" width="80" height="80" style={{ position: 'absolute', inset: 0 }}>
                <defs>
                  <path id="circlePath" d="M 50,50 m -34,0 a 34,34 0 1,1 68,0 a 34,34 0 1,1 -68,0" />
                </defs>
                <text fontFamily="JetBrains Mono" fontSize="9" letterSpacing="2" fill="currentColor" fontWeight="600">
                  <textPath href="#circlePath">{stampText.repeat(2)}</textPath>
                </text>
              </svg>
              <span style={{ fontSize: 18, lineHeight: 1, position: 'relative' }}>↯</span>
            </div>

            <div>
              <label className="form-label"><span className="pn">1</span> Your name</label>
              <input required placeholder="Jane Doe" />
            </div>
            <div className="row-2">
              <div>
                <label className="form-label"><span className="pn">2</span> Email</label>
                <input type="email" required placeholder="jane@company.com" />
              </div>
              <div>
                <label className="form-label"><span className="pn">3</span> Company</label>
                <input placeholder="Acme Inc." />
              </div>
            </div>
            <div>
              <label className="form-label"><span className="pn">4</span> What do you need?</label>
              <select defaultValue="">
                <option value="" disabled>Choose a fluency&hellip;</option>
                {services.map((s) => <option key={s.title}>{s.title}</option>)}
                <option>A little bit of everything</option>
              </select>
            </div>
            <div>
              <label className="form-label"><span className="pn">5</span> The brief</label>
              <textarea required placeholder="Timelines, goals, budget, dreams&hellip;" />
            </div>
            <button type="submit" className="btn btn-lime submit">
              {sent ? <>Dispatched · we&rsquo;ll reply shortly <CheckCircle2 size={14} /></> : <>Send the brief <ArrowUpRight size={14} className="ic" /></>}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
