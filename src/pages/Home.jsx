import { home, projects, reasons } from '../data/site.js'
import { Link } from '../router.jsx'
import Video from '../components/Video.jsx'
import Clients from '../components/Clients.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import FAQ from '../components/FAQ.jsx'
import CTA from '../components/CTA.jsx'

export default function Home() {
  const bg = home.heroVideo
  const featured = projects.filter((p) => p.featured).slice(0, 6)

  return (
    <>
      {/* Hero: full-screen looping reel */}
      <section className="hero">
        <div className="hero__media" aria-hidden="true">
          <img className="hero__poster" src={`https://i.ytimg.com/vi/${bg}/maxresdefault.jpg`} alt="" onError={(e) => (e.currentTarget.style.display = 'none')} />
          <iframe
            className="hero__video"
            src={`https://www.youtube-nocookie.com/embed/${bg}?autoplay=1&mute=1&loop=1&playlist=${bg}&controls=0&rel=0&modestbranding=1&playsinline=1&disablekb=1&iv_load_policy=3`}
            title="Background reel"
            tabIndex={-1}
            allow="autoplay; encrypted-media"
          />
          <div className="hero__shade" />
        </div>
        <div className="hero__content container">
          <h1 className="hero__title">GET Media Productions</h1>
          <p className="hero__tag">{home.tagline}</p>
          <div className="hero__ctas">
            <Link to="/portfolio/businesses" className="btn btn--gold-outline">See Our Work</Link>
            <Link to="/contact" className="btn btn--gold">Start a Project</Link>
          </div>
        </div>
        <svg className="hero__curve" viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 0C0 0 360 90 720 90C1080 90 1440 0 1440 0V90H0Z" />
        </svg>
      </section>

      {/* Intro + reel */}
      <section className="intro">
        <div className="container intro__grid">
          <div className="reveal">
            <h2 className="section-title section-title--left">{home.introTitle}</h2>
            <p className="lead">{home.intro}</p>
            <p className="intro__kicker">{home.introKicker}</p>
          </div>
          <div className="reveal" style={{ '--d': '120ms' }}>
            <Video video={home.reel} title="GET Media Productions showreel" />
          </div>
        </div>
      </section>

      <Clients />

      {/* Selected work */}
      <section className="grid-section grid-section--tint">
        <div className="container">
          <div className="row-head reveal">
            <h2 className="section-title section-title--left">Selected Work</h2>
            <Link to="/portfolio/businesses" className="arrow-link">View full portfolio →</Link>
          </div>
          <div className="pgrid">
            {featured.map((p, i) => (
              <ProjectCard key={p.slug} project={p} i={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Why brands work with us */}
      <section className="why">
        <div className="container">
          <h2 className="section-title reveal">Why Brands Work With Us</h2>
          <div className="why__grid">
            <div className="why__photo reveal">
              <img src="images/team.jpg" alt="A GET Media shooter filming on location with a cinema camera" />
            </div>
            <ol className="why__list">
              {reasons.map((r, i) => (
                <li className="reveal" key={r.title} style={{ '--d': `${i * 70}ms` }}>
                  <span className="why__num">{i + 1}</span>
                  <div>
                    <h3>{r.title}</h3>
                    <p>{r.copy}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <FAQ />
      <CTA />
    </>
  )
}
