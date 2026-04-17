import { ArrowUpRight, Play } from 'lucide-react'

function Rail({ direction = 'l', className = '', speed = 1, children }) {
  return (
    <div className={`rail ${direction === 'r' ? 'reverse' : ''} ${className}`}>
      <div className={`rail-track rail-${speed}`}>
        {children}{children}
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container" style={{ zIndex: 2 }}>
        <div className="hero-center">
          <span className="hero-badge"><span className="d" /> Booking engagements · Q3 2026</span>
        </div>
      </div>

      <div className="hero-rails" aria-hidden>
        <Rail direction="l" speed={1}>
          <span>Design</span>
          <span className="pip" />
          <span className="ws">Code</span>
          <span className="pip" />
          <span><em>Fuel</em></span>
          <span className="pip" />
          <span>Launch</span>
          <span className="pip" />
          <span className="ws">Scale</span>
          <span className="pip" />
          <span>Ignite</span>
          <span className="pip" />
        </Rail>
        <Rail direction="r" speed={2}>
          <span>Brands</span>
          <span className="pip" />
          <span><em>that move</em></span>
          <span className="pip" />
          <span className="ws">fast</span>
          <span className="pip" />
          <span>and</span>
          <span className="pip" />
          <span>refuse</span>
          <span className="pip" />
          <span className="ws">to stall</span>
          <span className="pip" />
        </Rail>
        <Rail direction="l" speed={3}>
          <span>Search</span>
          <span className="pip" />
          <span>Identity</span>
          <span className="pip" />
          <span><em>Games</em></span>
          <span className="pip" />
          <span className="ws">Interface</span>
          <span className="pip" />
          <span>Engineering</span>
          <span className="pip" />
          <span>Social</span>
          <span className="pip" />
        </Rail>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="hero-deck">
          <p className="hero-blurb">
            Brandfueler is a <em>six-discipline</em> creative studio for founders who treat the brand like the <em>product</em>. We ship identity, interfaces, code, games, search and social — all under one roof, at full throttle.
          </p>

          <div className="hero-center">
            <div className="hero-cta">
              <a href="#contact" className="btn btn-dark">
                Commission a project <ArrowUpRight size={14} className="ic" />
              </a>
              <a href="#work" className="btn">
                <Play size={14} /> Watch reel
              </a>
            </div>
          </div>

          <div className="hero-side">
            <div className="line"><span>Est.</span><strong>2019</strong></div>
            <div className="line"><span>Projects shipped</span><strong>240+</strong></div>
            <div className="line"><span>Time-zones</span><strong>09</strong></div>
            <div className="line"><span>Avg. turnaround</span><strong>14 wks</strong></div>
          </div>
        </div>
      </div>

      <div className="sticker" style={{ top: '18%', right: '6%' }}>New<br />Reel<br />↯ 2026</div>
    </section>
  )
}
