import { reasons, site } from '../data/site.js'
import PageHero from '../components/PageHero.jsx'
import Clients from '../components/Clients.jsx'
import CTA from '../components/CTA.jsx'

export default function About() {
  return (
    <>
      <PageHero title="About" sub={`A production team based in ${site.location}.`} />

      <section className="about">
        <div className="container about__grid">
          <div className="about__photo reveal">
            <img src="images/team.jpg" alt="A GET Media shooter filming on location with a cinema camera" />
          </div>
          <div className="reveal" style={{ '--d': '120ms' }}>
            <h2 className="kicker kicker--left">Who We Are</h2>
            <p className="lead">
              GET Media Productions is a full-service video and photo production company based in {site.location}. We work
              with businesses, brands, and couples across {site.region}, from launch campaigns and event coverage to wedding
              films.
            </p>
            <p>
              We're a small, hands-on crew with cinema cameras, lighting, audio, and drone. Every project starts with a
              conversation about what it's for, and the same people you meet on the first call are the ones on set and in the
              edit.
            </p>
          </div>
        </div>
      </section>

      <section className="why why--plain">
        <div className="container container--mid">
          <h2 className="section-title reveal">What You Can Expect</h2>
          <ol className="why__list why__list--two">
            {reasons.map((r, i) => (
              <li className="reveal" key={r.title} style={{ '--d': `${(i % 2) * 80}ms` }}>
                <span className="why__num">{i + 1}</span>
                <div>
                  <h3>{r.title}</h3>
                  <p>{r.copy}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Clients />
      <CTA />
    </>
  )
}
