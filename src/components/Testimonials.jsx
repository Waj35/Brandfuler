import { testimonials } from '../data'

const highlights = [
  ['tripled our signups', 'a single quarter'],
  ['viral', '2M+ plays'],
  ['exceeded expectations', '380%'],
]

function emphasize(text, phrases) {
  let out = text
  phrases.forEach((p) => {
    out = out.replace(p, `@@${p}@@`)
  })
  const parts = out.split('@@')
  return parts.map((seg, i) =>
    i % 2 === 1 ? <em key={i}>{seg}</em> : <span key={i}>{seg}</span>
  )
}

export default function Testimonials() {
  return (
    <section className="sec" id="voices">
      <div className="container">
        <div className="sec-head reveal-up">
          <span className="eyebrow">Section D &middot; Voices</span>
          <h2 className="sec-title">
            What the desk <em>hears back.</em>
          </h2>
          <span className="trail">Letters to the editor &middot; unedited</span>
        </div>

        <div className="quotes">
          {testimonials.map((t, i) => (
            <figure className="quote reveal-up" key={t.name}>
              <span className="q-mark" aria-hidden>&ldquo;</span>
              <blockquote className="q-body">{emphasize(t.quote, highlights[i] || [])}</blockquote>
              <figcaption className="q-attr">
                <span className="q-avatar">{t.initial}</span>
                <div>
                  <strong>{t.name}</strong> &nbsp;/&nbsp; <span>{t.role}</span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
