import { Zap } from 'lucide-react'

const tokens = [
  '240+ launches',
  '98% retention',
  '45M+ reached',
  '12+ industries',
  '6 disciplines',
  '9 time-zones',
]

export default function Stats() {
  return (
    <>
      <div className="ticker-strip" aria-hidden>
        <div className="track">
          {[...Array(2)].map((_, i) => (
            <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 40 }}>
              {tokens.flatMap((t, j) => [
                <span key={`t-${i}-${j}`}>{t}</span>,
                <span key={`s-${i}-${j}`} className="star">★</span>,
              ])}
              <em>Fuel for brands in motion</em>
              <span className="star">★</span>
            </span>
          ))}
        </div>
      </div>

      <section className="manifesto">
        <div className="container">
          <p className="sec-eye" style={{ marginBottom: 28 }}>
            <span className="num">00</span> Manifesto
            <Zap size={14} style={{ color: 'var(--lime)' }} />
          </p>
          <h2 className="manifesto-type reveal">
            We don&rsquo;t make <em>pretty decks.</em> We build brands that <span className="hl">move product</span>, <span className="outline">launch games</span>, rank first &mdash; and refuse to idle.
          </h2>

          <div className="manifesto-foot reveal">
            <div className="col">
              <div className="k">&sect; 01 Our bias</div>
              <div className="v">Ship it hot.<br />Refine in public.</div>
            </div>
            <div className="col">
              <div className="k">&sect; 02 Team size</div>
              <div className="v">Small, senior,<br />sharp-elbowed.</div>
            </div>
            <div className="col">
              <div className="k">&sect; 03 No middle</div>
              <div className="v">Strategist to shipper,<br />one handshake.</div>
            </div>
            <div className="col">
              <div className="k">&sect; 04 Promise</div>
              <div className="v">Weekly demos.<br />No dark rooms.</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
