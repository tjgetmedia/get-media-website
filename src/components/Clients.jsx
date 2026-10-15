import { clients } from '../data/site.js'

export default function Clients() {
  // Rendered twice so the marquee loops seamlessly.
  const row = (hidden) =>
    clients.map((c, i) => (
      <li key={`${hidden}-${i}`} className="clients__item" aria-hidden={hidden || undefined}>
        {c.logo ? (
          <img src={c.logo} alt={hidden ? '' : c.name} className={`clients__logo clients__logo--${c.tone}`} loading="lazy" />
        ) : (
          <span className="clients__word">{c.name}</span>
        )}
      </li>
    ))

  return (
    <section className="clients" aria-label="Clients we've worked with">
      <p className="eyebrow clients__label">Trusted by brands across Northeast Ohio</p>
      <div className="clients__track">
        <ul className="clients__row">
          {row(false)}
          {row(true)}
        </ul>
      </div>
    </section>
  )
}
