import { Instagram, Twitter, Linkedin, Github, Dribbble } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#top" className="logo">
              <span className="logo-mark">B</span>
              Brandfueler
            </a>
            <p>A full-stack creative studio fueling ambitious brands with design, code, and strategy.</p>
          </div>
          <div>
            <h5>Services</h5>
            <ul>
              <li><a href="#services">SEO</a></li>
              <li><a href="#services">Web Development</a></li>
              <li><a href="#services">Game Development</a></li>
              <li><a href="#services">Graphic Design</a></li>
              <li><a href="#services">UI / UX Design</a></li>
              <li><a href="#services">Social Media</a></li>
            </ul>
          </div>
          <div>
            <h5>Studio</h5>
            <ul>
              <li><a href="#work">Work</a></li>
              <li><a href="#process">Process</a></li>
              <li><a href="#testimonials">Clients</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <h5>Resources</h5>
            <ul>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press kit</a></li>
              <li><a href="#">Privacy</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Brandfueler Studio. All rights reserved.</span>
          <div className="socials">
            <a href="#" aria-label="Instagram"><Instagram size={16} /></a>
            <a href="#" aria-label="Twitter"><Twitter size={16} /></a>
            <a href="#" aria-label="LinkedIn"><Linkedin size={16} /></a>
            <a href="#" aria-label="Dribbble"><Dribbble size={16} /></a>
            <a href="#" aria-label="GitHub"><Github size={16} /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}
