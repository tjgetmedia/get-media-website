import { Link } from '../router.jsx'

export default function CTA({ title = "Let's work together.", sub = "Every project is scoped individually. Reach out and let's talk.", button = 'Get In Touch' }) {
  return (
    <section className="cta">
      <div className="container cta__inner reveal">
        <h2 className="cta__title">{title}</h2>
        <p>{sub}</p>
        <Link to="/contact" className="btn btn--gold">{button}</Link>
      </div>
    </section>
  )
}
