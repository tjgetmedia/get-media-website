import { useState } from 'react'
import { faqs } from '../data/site.js'

export default function FAQ() {
  const [open, setOpen] = useState(-1)
  return (
    <section className="faq">
      <div className="container container--narrow">
        <h2 className="section-title section-title--light reveal">Frequently Asked Questions</h2>
        <div className="faq__list">
          {faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <div className={`faq__item reveal ${isOpen ? 'is-open' : ''}`} key={f.q}>
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
