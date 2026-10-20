import { clients } from '../data/site.js'

export default function Clients() {
  const row = (hidden) =>
    clients.map((c, i) => (
      <li key={`${hidden}-${i}`} className="clients__item" aria-hidden={hidden || undefined}>
        {c.logo ? (
          <img src={c.logo} alt={hidden ? '' : c.name} className={`clients__logo ${c.light ? 'clients__logo--light' : ''}`} loading="lazy" />
        ) : (
          <span className="clients__word">{c.name}</span>
        )}
      </li>
    ))
  return (
    <section className="clients" aria-label="Previous clients">
      <h2 className="section-title reveal">Previous Clients</h2>
      <div className="clients__track">
        <ul className="clients__row">
          {row(false)}
          {row(true)}
        </ul>
      </div>
    </section>
  )
}
