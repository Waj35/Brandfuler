import { work } from '../data'
import { ArrowUpRight } from 'lucide-react'

const blurbs = [
  'An end-to-end influencer marketing platform — identity, product UI, engineering and launch. Now onboarding 10k+ creators a week.',
  'The command centre for performance marketers. Dashboard UX, motion system and brand refresh for a SaaS in growth mode.',
  'Campaign management tooling re-imagined — from sprawling spreadsheets to a focused, opinionated workspace.',
  'Brand and product for a social-first creator community. We drew the mascot, shipped the app and wrote the launch film.',
  'A bite-sized single-page marketing experience that over-delivers on craft and loads in under a second.',
  'Real-time streaming alerts, reimagined. We handled identity, engineering and the creator-facing web app end to end.',
  'SERP API as a polished developer product — docs, dashboard, pricing and a brand that doesn&rsquo;t read as enterprise beige.',
  'Real-time messaging rebuilt from the ground up — brand, UI, engineering and the onboarding that actually converts.',
]
const tagSets = [
  ['Brand', 'Product UI', 'Engineering', 'Launch'],
  ['Dashboard', 'Motion', 'System'],
  ['UX', 'Design ops', 'Copy'],
  ['Identity', 'App', 'Film'],
  ['Landing', 'Micro-site'],
  ['Brand', 'Product', 'Web app'],
  ['Docs', 'Dashboard', 'Pricing'],
  ['Brand', 'UI', 'Engineering'],
]

export default function Work() {
  return (
    <section className="sec" id="work">
      <div className="container">
        <div className="sec-head reveal">
          <span className="sec-eye"><span className="num">03</span> Dossier</span>
          <h2 className="sec-title">
            Fieldwork,<br /><em>receipts included.</em>
          </h2>
          <span className="sec-meta">{String(work.length).padStart(2, '0')} projects<br />public &amp; open</span>
        </div>

        <div className="work-stack">
          {work.map((w, i) => (
            <article
              key={w.title}
              className="work-slab"
              style={{ top: `${100 + i * 16}px` }}
            >
              <div className="left">
                <div>
                  <span className="w-id">Case {String(i + 1).padStart(2, '0')} / {String(work.length).padStart(2, '0')} &middot; Live</span>
                  <div className="w-cat">{w.cat}</div>
                  <h3 className="w-h">{w.title}.</h3>
                  <p className="w-p" dangerouslySetInnerHTML={{ __html: blurbs[i] || '' }} />
                </div>
                <div className="w-foot">
                  <div className="tags">
                    {(tagSets[i] || []).map((t) => <span key={t}>{t}</span>)}
                  </div>
                  <a href={w.url || '#'} target="_blank" rel="noopener noreferrer" className="btn btn-lime">
                    Visit site <ArrowUpRight size={14} className="ic" />
                  </a>
                </div>
              </div>
              <div className="right">
                <div className="grad" style={{ background: w.gradient }} />
                <div className="noi" />
                <div className="floating">{w.url ? w.url.replace(/^https?:\/\//, '') : 'Case study'}</div>
                <div className="tile-title">{w.title}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
