import { useState } from 'react'
import { site, projectTypes, budgets } from '../data/site.js'

const empty = { name: '', email: '', company: '', type: '', budget: '', timeline: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(empty)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  const submit = async (e) => {
    e.preventDefault()
    if (!site.formEndpoint) {
      // No form service configured yet: open the visitor's email app pre-filled.
      const body = [
        `Name: ${form.name}`,
        `Email: ${form.email}`,
        `Business: ${form.company}`,
        `Project type: ${form.type}`,
        `Budget: ${form.budget}`,
        `Timeline: ${form.timeline}`,
        '',
        form.message,
      ].join('\n')
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
        `Project inquiry: ${form.type || 'New project'}${form.company ? ` (${form.company})` : ''}`
      )}&body=${encodeURIComponent(body)}`
      setStatus('sent')
      return
    }
    setStatus('sending')
    try {
      const res = await fetch(site.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...form, _subject: `New inquiry: ${form.type || 'project'}` }),
      })
      if (!res.ok) throw new Error()
      setStatus('sent')
      setForm(empty)
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="section contact" id="contact">
      <div className="container contact__grid">
        <div className="contact__intro reveal">
          <p className="eyebrow">Start a Project</p>
          <h2 className="h2">Let's make<br />something <span className="gold">worth<br />watching.</span></h2>
          <p className="lede">
            Tell us a little about what you're planning. We reply within two business days with next steps and, if it's a
            fit, a time for a quick discovery call.
          </p>
          <ul className="contact__details">
            <li>
              <span>Email</span>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <span>Based in</span>
              {site.location} · serving {site.region}
            </li>
          </ul>
          {site.bookingUrl && (
            <a className="btn btn--ghost" href={site.bookingUrl} target="_blank" rel="noreferrer">
              Book a Discovery Call
            </a>
          )}
        </div>

        <form className="form reveal" onSubmit={submit}>
          {status === 'sent' ? (
            <div className="form__done" role="status">
              <h3 className="h3">Thanks, we got it.</h3>
              <p>
                {site.formEndpoint
                  ? "Your message is in. We'll be in touch within two business days."
                  : 'Your email app should have opened with your details. Hit send and we will take it from there.'}
              </p>
              <button type="button" className="btn btn--ghost" onClick={() => setStatus('idle')}>Send another</button>
            </div>
          ) : (
            <>
              <div className="form__row">
                <label>
                  <span>Name *</span>
                  <input required value={form.name} onChange={set('name')} autoComplete="name" />
                </label>
                <label>
                  <span>Email *</span>
                  <input required type="email" value={form.email} onChange={set('email')} autoComplete="email" />
                </label>
              </div>
              <label>
                <span>Business or organization</span>
                <input value={form.company} onChange={set('company')} autoComplete="organization" />
              </label>

              <fieldset className="chips">
                <legend>What are you looking for? *</legend>
                {projectTypes.map((t) => (
                  <label key={t} className={`chip ${form.type === t ? 'is-on' : ''}`}>
                    <input type="radio" name="type" value={t} checked={form.type === t} onChange={set('type')} required />
                    {t}
                  </label>
                ))}
              </fieldset>

              <div className="form__row">
                <label>
                  <span>Budget range</span>
                  <select value={form.budget} onChange={set('budget')}>
                    <option value="">Select…</option>
                    {budgets.map((b) => <option key={b}>{b}</option>)}
                  </select>
                </label>
                <label>
                  <span>Ideal timeline</span>
                  <input value={form.timeline} onChange={set('timeline')} placeholder="e.g. Launch in March" />
                </label>
              </div>
              <label>
                <span>Tell us about the project *</span>
                <textarea required rows={5} value={form.message} onChange={set('message')} placeholder="What are you promoting, who is it for, and where will the video live?" />
              </label>

              {status === 'error' && (
                <p className="form__error" role="alert">
                  Something went wrong sending that. Email us directly at <a href={`mailto:${site.email}`}>{site.email}</a>.
                </p>
              )}
              <button className="btn btn--gold btn--full" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : 'Send Inquiry'}
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  )
}
