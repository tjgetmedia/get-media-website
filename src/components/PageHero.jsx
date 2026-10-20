export default function PageHero({ title, eyebrow, sub, children }) {
  return (
    <section className="phero">
      <div className="container phero__inner">
        <h1 className="phero__title">{title}</h1>
        {eyebrow && <p className="phero__eyebrow">{eyebrow}</p>}
        {sub && <p className="phero__sub">{sub}</p>}
        {children}
      </div>
    </section>
  )
}
