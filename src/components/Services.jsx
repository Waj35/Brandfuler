import { useRef } from 'react'
import { services } from '../data'
import { ArrowUpRight } from 'lucide-react'

const subs = ['ranking, patiently', 'shipping, relentlessly', 'worlds, playfully', 'marks, carefully', 'flows, obsessively', 'stories, daily']

function TiltCard({ s, i }) {
  const ref = useRef(null)
  const Icon = s.icon

  const onMove = (e) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    el.style.transform = `rotateX(${(-y * 10).toFixed(2)}deg) rotateY(${(x * 12).toFixed(2)}deg) translateZ(0)`
  }
  const onLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.transform = 'rotateX(0) rotateY(0)'
  }

  return (
    <article className="svc reveal" ref={ref} onMouseMove={onMove} onMouseLeave={onLeave}>
      <div className="svc-top">
        <span className="svc-num">N&deg; {String(i + 1).padStart(2, '0')} / 06</span>
        <span className="svc-ic"><Icon size={22} /></span>
      </div>
      <h3 className="svc-h">
        {s.title}
        <em>{subs[i]}</em>
      </h3>
      <p className="svc-p">{s.desc}</p>
      <div className="svc-tags">
        {s.tags.map((t) => <span key={t}>{t}</span>)}
      </div>
    </article>
  )
}

export default function Services() {
  return (
    <section className="sec" id="services">
      <div className="container">
        <div className="sec-head reveal">
          <span className="sec-eye"><span className="num">01</span> Services</span>
          <h2 className="sec-title">
            Six <span className="outline">fluencies,</span><br /><em>one studio.</em>
          </h2>
          <span className="sec-meta">Identity / Interfaces<br />Engineering / Games<br />Search / Social</span>
        </div>

        <div className="svc-grid">
          {services.map((s, i) => <TiltCard key={s.title} s={s} i={i} />)}
        </div>

        <p className="reveal" style={{
          marginTop: 36, textAlign: 'center',
          fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.22em',
          textTransform: 'uppercase', color: 'rgba(243, 231, 207, 0.55)'
        }}>
          ↑ Hover any card — they tilt. Click one to brief us.
          <ArrowUpRight size={12} style={{ display: 'inline', marginLeft: 8, verticalAlign: 'middle' }} />
        </p>
      </div>
    </section>
  )
}
