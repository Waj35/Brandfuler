import { ArrowUpRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="cta-banner" id="cta">
      <div className="container">
        <h2 className="mega reveal">
          Let&rsquo;s <em>burn</em> <span className="ic" aria-hidden /> some rubber.
        </h2>
        <div className="row reveal">
          <a href="#contact" className="btn">
            Start a project <ArrowUpRight size={14} className="ic" />
          </a>
          <a href="#work" className="btn">Explore the dossier</a>
        </div>
        <p className="sub reveal">Two partner slots open · Q3 2026</p>
      </div>
    </section>
  )
}
