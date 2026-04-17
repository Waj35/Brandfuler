import { process } from '../data'

export default function Process() {
  return (
    <section className="sec" id="method">
      <div className="container">
        <div className="sec-head reveal-up">
          <span className="eyebrow">Section B &middot; Method</span>
          <h2 className="sec-title">
            A four-beat <em>tempo</em>
          </h2>
          <span className="trail">Workflow &middot; 04 stages</span>
        </div>

        <div className="process-grid reveal-up">
          {process.map((p, i) => (
            <div className="proc-cell" key={p.title}>
              <span className="proc-id">Beat {String(i + 1).padStart(2, '0')} &middot; &nbsp;{p.title.slice(0, 3).toUpperCase()}</span>
              <span className="proc-num">
                {String(i + 1).padStart(2, '0')}
                {i === 0 && <em>&rsaquo;</em>}
              </span>
              <h4 className="proc-title">{p.title}</h4>
              <p className="proc-desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
