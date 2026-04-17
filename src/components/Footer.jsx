export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container">
        <div className="foot-top">
          <div>
            <p>
              <strong style={{ color: 'var(--paper)', fontWeight: 700 }}>Brandfueler</strong> is an independent creative studio running on high-octane ideas. We make <em>brands, interfaces, games and search</em> for founders who refuse to idle.
            </p>
          </div>
          <div>
            <h5>Studio</h5>
            <ul>
              <li><a href="#work">Work</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#process">Process</a></li>
              <li><a href="#voices">Voices</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h5>Elsewhere</h5>
            <ul>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Twitter / X</a></li>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">Dribbble</a></li>
              <li><a href="mailto:hello@brandfueler.com">hello@brandfueler.com</a></li>
            </ul>
          </div>
        </div>

        <div className="foot-mega">
          Brand<em>fueler.</em>
        </div>

        <div className="foot-bottom">
          <span>&copy; {year} Brandfueler Studio · All rights reserved</span>
          <span>Set in Bricolage Grotesque, Cormorant Garamond, Archivo &amp; JetBrains Mono</span>
          <a href="#top">Back to top &uarr;</a>
        </div>
      </div>
    </footer>
  )
}
