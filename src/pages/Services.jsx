import { services, retainer, process } from '../data/site.js'
import { Link } from '../router.jsx'
import PageHero from '../components/PageHero.jsx'
import CTA from '../components/CTA.jsx'

export default function Services() {
  return (
    <>
      <PageHero title="Services" sub="Full-service video and photo production in Northeast Ohio." />

      <section className="services">
        <div className="container sgrid">
          {services.map((s, i) => (
            <article className="scard reveal" key={s.name} style={{ '--d': `${(i % 3) * 80}ms` }}>
              <span className="scard__num">{String(i + 1).padStart(2, '0')}</span>
              <h2>{s.name}</h2>
              <p>{s.copy}</p>
              <span className="scard__price">Custom Quoted</span>
            </article>
          ))}
        </div>
      </section>

      <section className="retainer">
        <div className="container retainer__inner reveal">
          <div>
            <p className="kicker kicker--left">For businesses that post every week</p>
            <h2 className="retainer__title">{retainer.title}</h2>
            <p>{retainer.copy}</p>
          </div>
          <Link to="/contact" className="btn btn--dark">Ask About Monthly Content</Link>
        </div>
      </section>

      <section className="process">
        <div className="container">
          <h2 className="section-title reveal">How It Works</h2>
          <ol className="process__steps">
            {process.map((p, i) => (
              <li className="reveal" key={p.title} style={{ '--d': `${i * 80}ms` }}>
                <span className="process__num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{p.title}</h3>
                <p>{p.copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CTA />
    </>
  )
}
