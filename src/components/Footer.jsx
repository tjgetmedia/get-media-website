import { site } from '../data/site.js'
import { Link } from '../router.jsx'

const icons = {
  instagram: <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm5 5.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Zm0 2a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM17.5 5.8a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z" />,
  facebook: <path d="M14 8h3V4h-3a4 4 0 0 0-4 4v2H8v4h2v8h4v-8h3l1-4h-4V8.5c0-.3.2-.5.5-.5Z" />,
  linkedin: <path d="M4 9h4v12H4V9Zm2-6a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm4 6h4v1.7c.6-1 1.9-2 3.9-2 4 0 4.1 2.6 4.1 6V21h-4v-5.6c0-1.4 0-3.1-2-3.1s-2 1.5-2 3V21h-4V9Z" />,
  email: <path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm1 2.4V17h16V7.4l-8 5.3-8-5.3ZM5.6 7 12 11.2 18.4 7H5.6Z" />,
}

export default function Footer() {
  const links = [...Object.entries(site.socials).filter(([, u]) => u), ['email', `mailto:${site.email}`]]
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <Link to="/" className="footer__brand">GET Media Productions</Link>
        <div className="footer__social">
          {links.map(([name, url]) => (
            <a key={name} href={url} aria-label={name} target={name === 'email' ? undefined : '_blank'} rel="noreferrer">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">{icons[name]}</svg>
            </a>
          ))}
        </div>
        <a className="footer__email" href={`mailto:${site.email}`}>{site.email}</a>
      </div>
      <div className="container footer__legal">
        <span>© {new Date().getFullYear()} GET Media Productions LLC · {site.location}</span>
        <nav aria-label="Footer">
          <Link to="/portfolio/businesses">Portfolio</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </footer>
  )
}
