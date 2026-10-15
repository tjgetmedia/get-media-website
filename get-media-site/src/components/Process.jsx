import { process } from '../data/site.js'

export default function Process() {
  return (
    <section className="section process" id="process">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">How It Works</p>
          <h2 className="h2">Simple on your end.<br />Cinematic on screen.</h2>
        </div>
        <ol className="process__steps">
          {process.map((p, i) => (
            <li className="step reveal" key={p.step} style={{ '--d': `${i * 90}ms` }}>
              <span className="step__num">{p.step}</span>
              <h3 className="step__title">{p.title}</h3>
              <p>{p.copy}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
