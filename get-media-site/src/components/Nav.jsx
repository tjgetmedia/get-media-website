import { useEffect, useState } from 'react'

const links = [
  ['Work', '#work'],
  ['Services', '#services'],
  ['Process', '#process'],
  ['About', '#about'],
  ['FAQ', '#faq'],
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <header className={`nav ${scrolled ? 'nav--solid' : ''} ${open ? 'nav--open' : ''}`}>
      <div className="nav__inner">
        <a href="#top" className="nav__logo" aria-label="GET Media Productions, back to top" onClick={() => setOpen(false)}>
          <img src="images/logo-light.png" alt="GET Media Productions" width="150" height="60" />
        </a>

        <nav className="nav__links" aria-label="Main">
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a href="#contact" className="btn btn--gold btn--sm" onClick={() => setOpen(false)}>
            Start a Project
          </a>
        </nav>

        <button
          className="nav__toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
