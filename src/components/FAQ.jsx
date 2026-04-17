import { useState } from 'react'

const faqs = [
  {
    q: 'How fast can we actually start?',
    em: 'actually start',
    a: 'Most engagements kick off within 7–10 days of a signed brief. If you have a launch deadline, tell us first — we routinely re-shape scope to hit a date.',
  },
  {
    q: 'Do you do one-offs, or only retainers?',
    em: 'only retainers',
    a: 'Both. We’ll happily run a 2-week identity sprint, or a 9-month product engagement. Anything smaller than a sprint we decline politely.',
  },
  {
    q: 'Who owns the work after delivery?',
    em: 'owns the work',
    a: 'You do. 100%. We hand over source files, repos, Figma, and everything else in organised, documented folders. No license traps, ever.',
  },
  {
    q: 'Can you plug into our in-house team?',
    em: 'plug into',
    a: 'Yes — we work inside Slack, Linear, GitHub, Figma, whatever you already run. Weekly demos, transparent roadmaps, no black boxes.',
  },
  {
    q: 'What does a project usually cost?',
    em: 'usually cost',
    a: 'Landing sites start around $12k. Full identity + product engagements typically land $40k–$180k depending on scope. We’ll scope to budget.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <section className="sec" id="faq">
      <div className="container">
        <div className="sec-head reveal">
          <span className="sec-eye"><span className="num">05</span> FAQ</span>
          <h2 className="sec-title">
            Questions we get<br /><em>pretty often.</em>
          </h2>
          <span className="sec-meta">Still stuck? Write to<br />the desk below &darr;</span>
        </div>

        <div className="faq-list">
          {faqs.map((f, i) => {
            const before = f.q.split(f.em)[0]
            const after = f.q.split(f.em)[1] || ''
            return (
              <div
                key={f.q}
                className={`faq-item ${open === i ? 'open' : ''}`}
                onClick={() => setOpen(open === i ? -1 : i)}
              >
                <div className="faq-q">
                  <span>
                    <span style={{ opacity: 0.55, fontFamily: 'var(--mono)', fontSize: '0.45em', letterSpacing: '0.2em', marginRight: 14, verticalAlign: 'middle' }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {before}<em>{f.em}</em>{after}
                  </span>
                  <span className="faq-sign" aria-hidden />
                </div>
                <div className="faq-a">{f.a}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
