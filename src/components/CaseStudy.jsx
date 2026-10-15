import { caseStudy } from '../data/site.js'

export default function CaseStudy({ onOpen }) {
  return (
    <section className="section case" id="case-study">
      <div className="container">
        <div className="case__head reveal">
          <p className="eyebrow">Case Study · {caseStudy.client}</p>
          <h2 className="h2">From product launch<br />to paid ads.</h2>
          <p className="case__tagline">{caseStudy.tagline}</p>
          <p className="lede">{caseStudy.brief}</p>
        </div>

        {caseStudy.projects.map((p) => (
          <article className="case__project reveal" key={p.number}>
            <button
              className="case__media"
              disabled={!p.youtube}
              onClick={() => p.youtube && onOpen({ type: 'youtube', id: p.youtube, title: p.title })}
              aria-label={p.youtube ? `Play ${p.title}` : `${p.title} film coming soon`}
            >
              {p.youtube ? (
                <img src={`https://i.ytimg.com/vi/${p.youtube}/maxresdefault.jpg`} alt="" loading="lazy" />
              ) : (
                <div className="titlecard"><span className="titlecard__name">{p.title}</span></div>
              )}
              {p.youtube && <span className="card__play" aria-hidden="true" />}
            </button>
            <div className="case__body">
              <span className="case__num">{p.number}</span>
              <h3 className="h3">{p.title}</h3>
              <dl className="case__stats">
                {p.stats.map(([k, v]) => (
                  <div key={k}>
                    <dt>{k}</dt>
                    <dd>{v}</dd>
                  </div>
                ))}
              </dl>
              <p className="case__story">{p.story}</p>
            </div>
          </article>
        ))}

        <div className="case__cta reveal">
          <p>Want results like this for your brand?</p>
          <a href="#contact" className="btn btn--gold">Let's Build Yours</a>
        </div>
      </div>
    </section>
  )
}
