import { testimonials } from '../data'
import { ArrowUpRight, Star } from 'lucide-react'

const hi = [
  ['tripled our signups', 'single quarter'],
  ['went viral', '2M+ plays'],
  ['exceeded expectations', '380%'],
]

function emph(text, phrases) {
  let out = text
  phrases.forEach((p) => {
    out = out.split(p).join(`@@${p}@@`)
  })
  return out.split('@@').map((seg, i) =>
    i % 2 === 1 ? <em key={i}>{seg}</em> : <span key={i}>{seg}</span>
  )
}

export default function Testimonials() {
  return (
    <section className="sec" id="voices">
      <div className="container">
        <div className="sec-head reveal">
          <span className="sec-eye"><span className="num">04</span> Voices</span>
          <h2 className="sec-title">
            What the <em>desk hears</em><br />back, unedited.
          </h2>
          <span className="sec-meta">Letters from<br />the partners</span>
        </div>

        <div className="bento">
          <div className="cell cell-t1">
            <div className="cq">
              &ldquo;{emph(testimonials[0].quote, hi[0])}&rdquo;
            </div>
            <div className="ca">
              <span className="av">{testimonials[0].initial}</span>
              <div>
                <strong style={{ fontWeight: 700 }}>{testimonials[0].name}</strong><br />
                <span style={{ opacity: 0.6 }}>{testimonials[0].role}</span>
              </div>
            </div>
          </div>

          <div className="cell cell-t2">
            <div className="cq">
              &ldquo;{emph(testimonials[1].quote, hi[1])}&rdquo;
            </div>
            <div className="ca">
              <span className="av">{testimonials[1].initial}</span>
              <div>
                <strong>{testimonials[1].name}</strong><br />
                <span style={{ opacity: 0.7 }}>{testimonials[1].role}</span>
              </div>
            </div>
          </div>

          <div className="cell cell-t3">
            <div className="big">4.9<em>/5</em></div>
            <div className="sub"><Star size={12} fill="currentColor" style={{ display: 'inline', verticalAlign: 'middle', marginRight: 6 }} />across 48 engagements</div>
          </div>

          <div className="cell cell-t4">
            <div className="cq">
              &ldquo;{emph(testimonials[2].quote, hi[2])}&rdquo;
            </div>
            <div className="ca">
              <span className="av">{testimonials[2].initial}</span>
              <div>
                <strong>{testimonials[2].name}</strong><br />
                <span style={{ opacity: 0.7 }}>{testimonials[2].role}</span>
              </div>
            </div>
          </div>

          <div className="cell cell-t5">
            <div className="big"><em>98</em>%</div>
            <div className="sub">Clients who keep coming back</div>
          </div>

          <a href="#contact" className="cell cell-t6">
            <div className="left">
              <div className="k">New engagements · Q3 2026</div>
              <div className="v">Two partner slots open.<br />Want to talk? <em style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', color: 'var(--orange)' }}>let&rsquo;s.</em></div>
            </div>
            <span className="arr">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  )
}
