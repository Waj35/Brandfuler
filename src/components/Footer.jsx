export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#a79c8a' }}>
          <span>&mdash; Colophon</span>
          <span>Vol. IV &middot; Issue 04 &middot; {year}</span>
          <a href="#top">Back to top &uarr;</a>
        </div>
        <h2 className="foot-brand">Brandfueler<em>.</em></h2>

        <div className="foot-grid">
          <div className="foot-col">
            <h5>Editor&rsquo;s Note</h5>
            <p className="foot-blurb">
              An independent creative studio made for <em>founders in motion</em>. Six disciplines, one desk, zero jargon. Filed from wherever the work demands &mdash; shipped back on time.
            </p>
          </div>
          <div className="foot-col">
            <h5>Fluencies</h5>
            <ul>
              <li><a href="#fluencies">Search</a></li>
              <li><a href="#fluencies">Engineering</a></li>
              <li><a href="#fluencies">Games</a></li>
              <li><a href="#fluencies">Identity</a></li>
              <li><a href="#fluencies">Interfaces</a></li>
              <li><a href="#fluencies">Social</a></li>
            </ul>
          </div>
          <div className="foot-col">
            <h5>Studio</h5>
            <ul>
              <li><a href="#dossier">Dossier</a></li>
              <li><a href="#method">Method</a></li>
              <li><a href="#voices">Voices</a></li>
              <li><a href="#desk">The Desk</a></li>
            </ul>
          </div>
          <div className="foot-col">
            <h5>Correspondence</h5>
            <ul>
              <li><a href="mailto:hello@brandfueler.com">hello@brandfueler.com</a></li>
              <li><a href="#">Instagram &darr;</a></li>
              <li><a href="#">Twitter / X &darr;</a></li>
              <li><a href="#">LinkedIn &darr;</a></li>
              <li><a href="#">Dribbble &darr;</a></li>
            </ul>
          </div>
        </div>

        <div className="foot-bottom">
          <span>&copy; {year} Brandfueler Studio. All rights reserved.</span>
          <span className="center">Set in <em style={{ fontStyle: 'italic', color: '#ebe4d2' }}>Fraunces</em>, Instrument Serif, Inter Tight &amp; JetBrains Mono.</span>
          <span className="right">Printed on the open web &middot; no trees harmed.</span>
        </div>
      </div>
    </footer>
  )
}
