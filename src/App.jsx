import { useEffect, useState, useCallback } from 'react'
import { useRoute } from './router.jsx'
import { projects, categories } from './data/site.js'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import StickyCTA from './components/StickyCTA.jsx'
import MediaModal from './components/MediaModal.jsx'
import Home from './pages/Home.jsx'
import Portfolio from './pages/Portfolio.jsx'
import Project from './pages/Project.jsx'
import Services from './pages/Services.jsx'
import About from './pages/About.jsx'
import ContactPage from './pages/ContactPage.jsx'
import NotFound from './pages/NotFound.jsx'

const TITLE = 'GET Media Productions'

export default function App() {
  const path = useRoute()
  const [media, setMedia] = useState(null)
  const openMedia = useCallback((m) => setMedia(m), [])
  const closeMedia = useCallback(() => setMedia(null), [])

  const [, section, slug] = path.split('/')
  let page
  let title = `${TITLE} | Video & Photo Production in Kent, Ohio`

  if (path === '/') page = <Home />
  else if (section === 'portfolio') {
    const cat = categories.find((c) => c.slug === slug) || null
    page = <Portfolio category={cat} />
    title = `${cat ? cat.title : 'Portfolio'} | ${TITLE}`
  } else if (section === 'work') {
    const p = projects.find((x) => x.slug === slug)
    page = p ? <Project project={p} onOpen={openMedia} /> : <NotFound />
    if (p) title = `${p.name} | ${TITLE}`
  } else if (section === 'services') {
    page = <Services />
    title = `Services | ${TITLE}`
  } else if (section === 'about') {
    page = <About />
    title = `About | ${TITLE}`
  } else if (section === 'contact') {
    page = <ContactPage />
    title = `Contact | ${TITLE}`
  } else page = <NotFound />

  useEffect(() => {
    document.title = title
  }, [title])

  // Fade-up on scroll for anything with .reveal (re-scans on page change).
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            io.unobserve(e.target)
          }
        }),
      { rootMargin: '0px 0px -6% 0px' }
    )
    const id = requestAnimationFrame(() => document.querySelectorAll('.reveal').forEach((el) => io.observe(el)))
    return () => {
      cancelAnimationFrame(id)
      io.disconnect()
    }
  }, [path])

  return (
    <>
      <Nav path={path} />
      <main key={path} className="page">{page}</main>
      <Footer />
      <StickyCTA hidden={section === 'contact'} />
      <MediaModal media={media} onClose={closeMedia} />
    </>
  )
}
