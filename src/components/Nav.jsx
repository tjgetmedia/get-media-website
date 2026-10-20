import { useEffect, useRef, useState } from 'react'
import { Link } from '../router.jsx'
import { categories } from '../data/site.js'

export default function Nav({ path }) {
  const [open, setOpen] = useState(false) // mobile menu
  const [drop, setDrop] = useState(false) // portfolio dropdown
  const [scrolled, setScrolled] = useState(false)
  const timer = useRef()

  useEffect(() => {
    setOpen(false)
    setDrop(false)
  }, [path])

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 10)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  const active = (p) => (path.startsWith(p) ? 'is-active' : '')
  const enter = () => {
    clearTimeout(timer.current)
    setDrop(true)
  }
  const leave = () => {
    timer.current = setTimeout(() => setDrop(false), 220)
  }

  return (
    <header className={`nav ${scrolled ? 'nav--shadow' : ''} ${open ? 'nav--open' : ''}`}>
      <div className="nav__inner">
        <Link to="/" className="nav__logo" aria-label="GET Media Productions home">
          <img src="images/logo-dark.png" alt="GET Media Productions" width="140" height="56" />
        </Link>

        <nav className="nav__links" aria-label="Main">
          <div className={`drop ${drop ? 'is-open' : ''}`} onMouseEnter={enter} onMouseLeave={leave}>
            <button
              className={`nav__link drop__btn ${active('/portfolio') || active('/work')}`}
              aria-expanded={drop}
              onClick={() => setDrop(!drop)}
            >
              Portfolio <span className="chev" aria-hidden="true" />
            </button>
            <div className="drop__menu">
              {categories.map((c) => (
                <Link key={c.slug} to={`/portfolio/${c.slug}`}>
                  {c.name}
                </Link>
              ))}
            </div>
          </div>
          <Link to="/services" className={`nav__link ${active('/services')}`}>Services</Link>
          <Link to="/about" className={`nav__link ${active('/about')}`}>About</Link>
          <Link to="/contact" className={`nav__link ${active('/contact')}`}>Contact</Link>
          <Link to="/contact" className="btn btn--dark btn--sm nav__cta">Start a Project</Link>
        </nav>

        <button className="nav__toggle" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
