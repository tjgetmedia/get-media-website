import { useEffect, useState, useCallback } from 'react'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Clients from './components/Clients.jsx'
import Work from './components/Work.jsx'
import CaseStudy from './components/CaseStudy.jsx'
import Services from './components/Services.jsx'
import Process from './components/Process.jsx'
import Why from './components/Why.jsx'
import FAQ from './components/FAQ.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import MediaModal from './components/MediaModal.jsx'
import StickyCTA from './components/StickyCTA.jsx'

export default function App() {
  // One shared player for every video and photo on the page.
  const [media, setMedia] = useState(null)
  const openMedia = useCallback((m) => setMedia(m), [])
  const closeMedia = useCallback(() => setMedia(null), [])

  // Fade-up on scroll for anything with the .reveal class.
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            io.unobserve(e.target)
          }
        }),
      { rootMargin: '0px 0px -8% 0px' }
    )
    const watch = () => document.querySelectorAll('.reveal:not(.is-visible)').forEach((el) => io.observe(el))
    watch()
    const mo = new MutationObserver(watch)
    mo.observe(document.body, { childList: true, subtree: true })
    return () => {
      io.disconnect()
      mo.disconnect()
    }
  }, [])

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Nav />
      <main id="main">
        <Hero onPlay={openMedia} />
        <Clients />
        <Work onOpen={openMedia} />
        <CaseStudy onOpen={openMedia} />
        <Services />
        <Process />
        <Why />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <StickyCTA />
      <MediaModal media={media} onClose={closeMedia} />
    </>
  )
}
