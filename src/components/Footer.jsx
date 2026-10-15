import { site } from '../data/site.js'

export default function Footer() {
  const socials = Object.entries(site.socials).filter(([, url]) => url)
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <img src="images/logo-light.png" alt="GET Media Productions" className="footer__logo" width="160" height="64" loading="lazy" />
        <nav className="footer__links" aria-label="Footer">
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          {socials.map(([name, url]) => (
            <a key={name} href={url} target="_blank" rel="noreferrer" className="footer__social">
              {name}
            </a>
          ))}
        </nav>
        <p className="footer__legal">
          © {new Date().getFullYear()} GET Media Productions LLC · {site.location}
        </p>
      </div>
    </footer>
  )
}
