import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mx = window.innerWidth / 2
    let my = window.innerHeight / 2
    let rx = mx, ry = my
    let raf

    const move = (e) => {
      mx = e.clientX
      my = e.clientY
      dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`
    }
    const down = () => document.body.classList.add('c-click')
    const up = () => document.body.classList.remove('c-click')

    const tick = () => {
      rx += (mx - rx) * 0.18
      ry += (my - ry) * 0.18
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`
      raf = requestAnimationFrame(tick)
    }
    tick()

    const over = (e) => {
      const t = e.target
      if (t.closest('a, button, .svc, .faq-item, .work-slab, input, textarea, select')) {
        document.body.classList.add('c-hover')
      }
    }
    const out = (e) => {
      const t = e.target
      if (t.closest('a, button, .svc, .faq-item, .work-slab, input, textarea, select')) {
        document.body.classList.remove('c-hover')
      }
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('mousedown', down)
    window.addEventListener('mouseup', up)
    document.addEventListener('mouseover', over)
    document.addEventListener('mouseout', out)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mousedown', down)
      window.removeEventListener('mouseup', up)
      document.removeEventListener('mouseover', over)
      document.removeEventListener('mouseout', out)
    }
  }, [])

  return (
    <>
      <div className="cursor" ref={dotRef} />
      <div className="cursor-ring" ref={ringRef} />
    </>
  )
}
