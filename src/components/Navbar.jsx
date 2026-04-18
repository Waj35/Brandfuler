import { motion } from 'framer-motion'
import { Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <motion.nav
      className="nav"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="nav-inner">
        <a href="#top" className="logo">
          <span className="logo-mark">B</span>
          Brandfueler
        </a>
        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#mockups">Mockups</a>
          <a href="#process">Process</a>
          <a href="#testimonials">Clients</a>
          <a href="#contact">Contact</a>
        </div>
        <a href="#contact" className="btn btn-primary">Start a project →</a>
        <button className="menu-btn" aria-label="Open menu"><Menu size={18} /></button>
      </div>
    </motion.nav>
  )
}
