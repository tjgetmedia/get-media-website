import { useEffect, useState } from 'react'
import { Link } from '../router.jsx'

// Mobile-only floating "Start a Project" button after the first screen.
export default function StickyCTA({ hidden }) {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const on = () => setShow(window.scrollY > window.innerHeight * 0.7)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  const visible = show && !hidden
  return (
    <Link to="/contact" className={`sticky-cta ${visible ? 'is-shown' : ''}`} aria-hidden={!visible} tabIndex={visible ? 0 : -1}>
      Start a Project
    </Link>
  )
}
