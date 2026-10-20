import { site } from '../data/site.js'
import PageHero from '../components/PageHero.jsx'
import ContactForm from '../components/ContactForm.jsx'

export default function ContactPage() {
  return (
    <>
      <PageHero title="Contact" sub="Interested in working together? Fill out some info and we'll be in touch shortly." />
      <section className="contact">
        <div className="container contact__grid">
          <aside className="contact__aside reveal">
            <h2 className="kicker kicker--left">Get In Touch</h2>
            <p className="lead">Tell us what you're planning. We reply within two business days with next steps and, if it's a fit, a time for a quick discovery call.</p>
            <dl className="contact__dl">
              <div><dt>Email</dt><dd><a href={`mailto:${site.email}`}>{site.email}</a></dd></div>
              <div><dt>Based In</dt><dd>{site.location}</dd></div>
              <div><dt>Serving</dt><dd>{site.region} and beyond</dd></div>
            </dl>
            {site.bookingUrl && <a className="btn btn--outline" href={site.bookingUrl} target="_blank" rel="noreferrer">Book a Discovery Call</a>}
          </aside>
          <div className="reveal" style={{ '--d': '120ms' }}>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
