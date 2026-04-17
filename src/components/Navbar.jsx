import { Menu, ArrowUpRight } from 'lucide-react'

const links = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Voices', href: '#voices' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  return (
    <div className="nav-wrap">
      <nav className="nav" aria-label="Primary">
        <a href="#top" className="nav-brand">
          <span className="mark">B</span>
          Brandfueler<span style={{ color: 'var(--orange)' }}>.</span>
        </a>
        <div className="nav-links">
          {links.map((l) => (
            <a key={l.label} href={l.href}>
              <span className="dot" />{l.label}
            </a>
          ))}
        </div>
        <a href="#contact" className="nav-cta">
          Start a project <ArrowUpRight size={14} />
        </a>
        <button className="nav-menu" aria-label="Open menu"><Menu size={16} /></button>
      </nav>
    </div>
  )
}
