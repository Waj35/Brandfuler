import { work } from '../data'

const spans = ['span-7 tall', 'span-5', 'span-4', 'span-4', 'span-4', 'span-5 tall', 'span-7', 'span-12']

export default function Work() {
  return (
    <section className="sec" id="dossier">
      <div className="container">
        <div className="sec-head reveal-up">
          <span className="eyebrow">Section C &middot; Dossier</span>
          <h2 className="sec-title">
            Selected <em>fieldwork,</em><br />filed and open.
          </h2>
          <span className="trail">{String(work.length).padStart(2, '0')} projects &middot; public</span>
        </div>

        <div className="work-grid reveal-up">
          {work.map((w, i) => (
            <a
              key={w.title}
              href={w.url || '#'}
              target={w.url ? '_blank' : undefined}
              rel={w.url ? 'noopener noreferrer' : undefined}
              className={`work-card ${spans[i] || 'span-4'}`}
            >
              <div className="bg" style={{ background: w.gradient }} />
              <div className="noise" />
              <div className="meta">
                <div className="top">
                  <span className="id">{String(i + 1).padStart(2, '0')} / {String(work.length).padStart(2, '0')}</span>
                  <span className="cat">{w.cat}</span>
                </div>
                <div className="title">
                  <span>{w.title}</span>
                  <span className="arr">&#8599;</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
