import { ArrowUpRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="sec" style={{ paddingTop: 40, paddingBottom: 40 }}>
      <div className="container">
        <div className="cta-block reveal-up">
          <div className="cta-inner">
            <h2 className="cta-h">
              Ready to burn <em>a little rubber?</em>
            </h2>
            <div className="cta-side">
              <p>A brief, a sketch, a Slack thread &mdash; however you start, we&rsquo;ll meet you there within the week.</p>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                <a href="#desk" className="btn btn-lime">Start the engine <ArrowUpRight size={14} className="arrow" /></a>
                <a href="#dossier" className="btn btn-ghost" style={{ color: '#ebe4d2', borderColor: '#ebe4d2' }}>Read the dossier</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
