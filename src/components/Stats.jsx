import { useEffect, useRef, useState } from 'react'
import { stats } from '../data'

function Counter({ to }) {
  const ref = useRef(null)
  const [val, setVal] = useState(0)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          io.unobserve(el)
          const duration = 1800
          const start = performance.now()
          const tick = (now) => {
            const t = Math.min(1, (now - start) / duration)
            const eased = 1 - Math.pow(1 - t, 3)
            setVal(Math.floor(to * eased))
            if (t < 1) requestAnimationFrame(tick)
            else setVal(to)
          }
          requestAnimationFrame(tick)
        })
      },
      { threshold: 0.3 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [to])
  return <span ref={ref}>{val}</span>
}

export default function Stats() {
  return (
    <section className="stats-strip reveal-up" aria-label="Figures">
      <div className="container">
        <div className="stats-row">
          {stats.map((s, i) => (
            <div className="stat-cell" key={s.label}>
              <span className="stat-id">Fig. 0{i + 1}</span>
              <span className="stat-num">
                <Counter to={s.num} /><sup>{s.suffix}</sup>
              </span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
