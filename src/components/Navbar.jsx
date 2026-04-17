import { useEffect, useState } from 'react'
import { Menu, ArrowUpRight } from 'lucide-react'

const links = [
  { num: '01', label: 'Fluencies', href: '#fluencies' },
  { num: '02', label: 'Method', href: '#method' },
  { num: '03', label: 'Dossier', href: '#dossier' },
  { num: '04', label: 'Voices', href: '#voices' },
  { num: '05', label: 'Desk', href: '#desk' },
]

function useClock() {
  const [now, setNow] = useState(new Date())
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])
  return now
}

export default function Navbar() {
  const now = useClock()
  const time = now.toLocaleTimeString('en-GB', {
    hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false,
  })
  return (
    <div className="masthead-wrap">
      <div className="container masthead">
        <div className="mast-left">
          <a href="#top" className="mast-logo" aria-label="Brandfueler">
            Brandfueler<em>.</em>
          </a>
          <div className="mast-meta">
            <span className="live-dot" />
            <span>Vol. IV</span>
            <span className="sep">/</span>
            <span>Issue 04 · 2026</span>
            <span className="sep">/</span>
            <span>{time} UTC</span>
          </div>
        </div>
        <nav className="mast-nav" aria-label="Primary">
          {links.map((l) => (
            <a key={l.label} href={l.href} data-num={l.num}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="mast-right">
          <a href="#desk" className="btn btn-ghost">
            File a brief <ArrowUpRight size={14} className="arrow" />
          </a>
          <button className="mast-menu" aria-label="Open menu"><Menu size={16} /></button>
        </div>
      </div>
    </div>
  )
}
