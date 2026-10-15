import { useEffect, useState } from 'react'

// Mobile-only floating button: appears after the hero, hides at the form.
export default function StickyCTA() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const onScroll = () => {
      const contact = document.getElementById('contact')
      const pastHero = window.scrollY > window.innerHeight * 0.8
      const atContact = contact && contact.getBoundingClientRect().top < window.innerHeight * 0.9
      setShow(pastHero && !atContact)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <a href="#contact" className={`sticky-cta ${show ? 'is-shown' : ''}`} aria-hidden={!show} tabIndex={show ? 0 : -1}>
      Start a Project
    </a>
  )
}
