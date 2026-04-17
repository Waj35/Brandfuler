import { useEffect, useRef } from 'react'
import { process } from '../data'

const longs = [
  'First we listen. Hard. We audit brand, competitors, metrics, goals — and write it all back to you in one sharp page.',
  'Then we plot the route: positioning, scope, a sprint plan with weekly demos, and a budget that respects your runway.',
  'Now we ship. Design, code, copy, art — everything made in public channels, demoed every Friday at noon.',
  'Once live, we watch the numbers, iterate weekly, and keep the fire going long after the launch party ends.',
]

const progress = ['25%', '50%', '75%', '100%']

export default function Process() {
  const railRef = useRef(null)
  const trackRef = useRef(null)

  useEffect(() => {
    const rail = railRef.current
    const track = trackRef.current
    if (!rail || !track) return

    const update = () => {
      const r = rail.getBoundingClientRect()
      const vh = window.innerHeight
      const totalScroll = rail.offsetHeight - vh
      const scrolled = Math.max(0, Math.min(totalScroll, -r.top))
      const ratio = totalScroll ? scrolled / totalScroll : 0
      const max = track.scrollWidth - window.innerWidth
      track.style.transform = `translateX(${-max * ratio}px)`
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return (
    <section className="sec" id="process" style={{ padding: '120px 0 0' }}>
      <div className="container">
        <div className="sec-head reveal">
          <span className="sec-eye"><span className="num">02</span> Process</span>
          <h2 className="sec-title">
            Four <em>beats</em> —<br /><span className="outline">zero theater.</span>
          </h2>
          <span className="sec-meta">Scroll to advance<br />the tempo &darr;</span>
        </div>
      </div>

      <div className="proc-rail" ref={railRef}>
        <div className="proc-sticky">
          <div className="proc-track" ref={trackRef}>
            {process.map((p, i) => (
              <div className="proc-card" key={p.title}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="id"><span className="b" /> Beat {String(i + 1).padStart(2, '0')} / 04</span>
                  <span className="id">{p.title.slice(0, 3).toUpperCase()}</span>
                </div>
                <div>
                  <div className="big">
                    {p.title}
                    <em>{longs[i].split('.')[0]}.</em>
                  </div>
                  <p className="desc">{longs[i]}</p>
                </div>
                <div className="proc-bar"><i style={{ '--w': progress[i] }} /></div>
              </div>
            ))}
          </div>

          <div className="proc-hint">
            <div className="track">
              {[...Array(10)].map((_, i) => (
                <span key={i}>↓ scroll to drive · {String(i + 1).padStart(2, '0')}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
