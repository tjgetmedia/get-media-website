import { services, retainer } from '../data/site.js'

export default function Services() {
  return (
    <section className="section services" id="services">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">Services</p>
          <h2 className="h2">One crew.<br />Every format.</h2>
        </div>

        <div className="retainer reveal">
          <div className="retainer__copy">
            <p className="eyebrow">{retainer.eyebrow}</p>
            <h3 className="h3">{retainer.title}</h3>
            <p>{retainer.copy}</p>
            <a href="#contact" className="btn btn--gold">Ask About Monthly Content</a>
          </div>
          <ul className="retainer__list">
            {retainer.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>

        <ol className="services__grid">
          {services.map((s, i) => (
            <li className="service reveal" key={s.name} style={{ '--d': `${(i % 3) * 80}ms` }}>
              <span className="service__num">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="service__name">{s.name}</h3>
              <p>{s.copy}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
