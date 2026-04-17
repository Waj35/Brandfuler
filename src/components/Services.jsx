import { services } from '../data'

const italicSub = [
  'ranking, patiently',
  'shipping, relentlessly',
  'worlds, playfully',
  'marks, carefully',
  'flows, obsessively',
  'stories, daily',
]

export default function Services() {
  return (
    <section className="sec" id="fluencies">
      <div className="container">
        <div className="sec-head reveal-up">
          <span className="eyebrow">Section A &middot; Fluencies</span>
          <h2 className="sec-title">
            Six disciplines,<br /> <em>one desk.</em>
          </h2>
          <span className="trail">{String(services.length).padStart(2, '0')} / {String(services.length).padStart(2, '0')}</span>
        </div>

        <div className="services">
          {services.map((s, i) => (
            <a key={s.title} className="srv-row reveal-up" href="#desk">
              <span className="srv-num">N&deg; {String(i + 1).padStart(2, '0')}</span>
              <h3 className="srv-title">
                {s.title}
                <em>{italicSub[i]}</em>
              </h3>
              <p className="srv-desc">{s.desc}</p>
              <div className="srv-tags">
                {s.tags.slice(0, 3).map((t) => (
                  <span key={t} className="tag-chip">{t}</span>
                ))}
              </div>
              <span className="srv-arrow" aria-hidden>&rarr;</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
