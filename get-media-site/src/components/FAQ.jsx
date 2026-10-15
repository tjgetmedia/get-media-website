import { useState } from 'react'
import { faqs } from '../data/site.js'

export default function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <section className="section faq" id="faq">
      <div className="container faq__grid">
        <div className="section-head reveal">
          <p className="eyebrow">FAQ</p>
          <h2 className="h2">Questions,<br />answered.</h2>
          <p className="lede">Don't see yours? <a href="#contact" className="link">Ask us directly.</a></p>
        </div>
        <div className="faq__list reveal">
          {faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <div className={`faq__item ${isOpen ? 'is-open' : ''}`} key={f.q}>
                <h3>
                  <button aria-expanded={isOpen} aria-controls={`faq-${i}`} onClick={() => setOpen(isOpen ? -1 : i)}>
                    {f.q}
                    <span className="faq__icon" aria-hidden="true" />
                  </button>
                </h3>
                <div className="faq__answer" id={`faq-${i}`} role="region">
                  <div><p>{f.a}</p></div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
