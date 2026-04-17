import { ArrowUpRight } from 'lucide-react'

const tickerWords = [
  'Identity', 'Interfaces', 'Engineering', 'Search', 'Games', 'Film', 'Social', 'Strategy'
]

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container">
        {/* Deck */}
        <div className="hero-deck">
          <div className="deck-col">
            <span className="label">The Publication</span>
            <span className="value">An independent studio engineering <em>brand velocity</em> for founders in motion.</span>
          </div>
          <div className="deck-sep" />
          <div className="deck-col">
            <span className="label">Dateline</span>
            <span className="value">Filed from everywhere &middot; <em>Spring 2026</em></span>
          </div>
          <div className="deck-sep" />
          <div className="deck-col">
            <span className="label">Price of Entry</span>
            <span className="value">A conversation &mdash; <em>no retainer required</em></span>
          </div>
        </div>

        {/* Headline */}
        <div className="hero-headline">
          <div className="hero-kicker">
            <span><span className="bullet" />Cover Story &middot; N&deg; 04</span>
            <span>Filed by the Brandfueler Studio</span>
          </div>

          <h1 className="hero-h1">
            <span className="row">
              <span className="char-reveal" style={{ '--d': '0.1s' }}><span>Fuel</span></span>{' '}
              <span className="char-reveal" style={{ '--d': '0.2s' }}><span>for</span></span>{' '}
              <span className="char-reveal" style={{ '--d': '0.3s' }}><span className="ampersand">brands</span></span>
            </span>
            <span className="row">
              <span className="char-reveal" style={{ '--d': '0.45s' }}><span>that</span></span>{' '}
              <span className="char-reveal" style={{ '--d': '0.55s' }}><span><em>refuse</em></span></span>{' '}
              <span className="char-reveal" style={{ '--d': '0.65s' }}><span>to</span></span>
            </span>
            <span className="row">
              <span className="char-reveal" style={{ '--d': '0.8s' }}><span className="outlined">idle</span></span>{' '}
              <span className="char-reveal" style={{ '--d': '0.9s' }}><span>in</span></span>{' '}
              <span className="char-reveal" style={{ '--d': '1s' }}><span>neutral.</span></span>
            </span>
          </h1>

          <div className="hero-foot">
            <p className="hero-sub reveal-up">
              We are a small, <em>sharp-elbowed</em> studio practicing six disciplines under one roof &mdash; identity, interfaces, engineering, games, search, and social &mdash; for founders who believe the brand <em>is</em> the product.
            </p>

            <div className="hero-side reveal-up">
              <div className="line"><span>Disciplines</span><span>06</span></div>
              <div className="line"><span>Time zones served</span><span>09</span></div>
              <div className="line"><span>Avg. engagement</span><span>14 wks</span></div>
              <div className="line"><span>Next opening</span><span>Q3 &apos;26</span></div>
            </div>

            <div className="hero-cta reveal-up">
              <a href="#desk" className="btn">Commission a project <ArrowUpRight size={14} className="arrow" /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Ticker */}
      <div className="ticker">
        <div className="ticker-rail">
          {[...Array(3)].flatMap((_, i) => [
            ...tickerWords.flatMap((w, j) => [
              <span key={`w-${i}-${j}`}>{w}</span>,
              <span key={`p-${i}-${j}`} className="pip">{'* * *'}</span>,
            ]),
            <em key={`em-${i}`}>fuel for brands in motion</em>,
            <span key={`p2-${i}`} className="pip">{'* * *'}</span>,
          ])}
        </div>
      </div>
    </section>
  )
}
