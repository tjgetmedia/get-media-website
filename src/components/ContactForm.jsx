import { useState } from 'react'
import { site, projectTypes, budgets } from '../data/site.js'

const empty = { name: '', email: '', company: '', type: '', budget: '', message: '' }

export default function ContactForm() {
  const [form, setForm] = useState(empty)
  const [status, setStatus] = useState('idle')
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  const submit = async (e) => {
    e.preventDefault()
    if (!site.formEndpoint) {
      const body = [`Name: ${form.name}`, `Email: ${form.email}`, `Business: ${form.company}`, `Project type: ${form.type}`, `Budget: ${form.budget}`, '', form.message].join('\n')
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(`Project inquiry: ${form.type || 'New project'}`)}&body=${encodeURIComponent(body)}`
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

  if (status === 'sent') {
    return (
      <div className="form form--done" role="status">
        <h3>Thanks, we got it.</h3>
        <p>
          {site.formEndpoint
            ? "We'll be in touch within two business days."
            : 'Your email app should have opened with your details filled in. Hit send and we will take it from there.'}
        </p>
        <button className="btn btn--outline" onClick={() => setStatus('idle')}>Send another</button>
      </div>
    )
  }

  return (
    <form className="form" onSubmit={submit}>
      <div className="form__row">
        <label><span>Name *</span><input required value={form.name} onChange={set('name')} autoComplete="name" /></label>
        <label><span>Email *</span><input required type="email" value={form.email} onChange={set('email')} autoComplete="email" /></label>
      </div>
      <label><span>Business or organization</span><input value={form.company} onChange={set('company')} autoComplete="organization" /></label>
      <fieldset className="chips">
        <legend>What are you looking for?</legend>
        {projectTypes.map((t) => (
          <label key={t} className={`chip ${form.type === t ? 'is-on' : ''}`}>
            <input type="radio" name="type" value={t} checked={form.type === t} onChange={set('type')} />
            {t}
          </label>
        ))}
      </fieldset>
      <label>
        <span>Budget range</span>
        <select value={form.budget} onChange={set('budget')}>
          <option value="">Select…</option>
          {budgets.map((b) => <option key={b}>{b}</option>)}
        </select>
      </label>
      <label><span>Message *</span><textarea required rows={5} value={form.message} onChange={set('message')} placeholder="What are you promoting, who is it for, and where will the video live?" /></label>
      {status === 'error' && (
        <p className="form__error" role="alert">Something went wrong. Email us at <a href={`mailto:${site.email}`}>{site.email}</a>.</p>
      )}
      <button className="btn btn--gold btn--full" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Submit'}</button>
    </form>
  )
}
