import { projects, categories } from '../data/site.js'
import { Link } from '../router.jsx'
import Video from '../components/Video.jsx'
import CTA from '../components/CTA.jsx'

export default function Project({ project: p, onOpen }) {
  // "Next project" stays within the same category, looping around.
  const siblings = projects.filter((x) => x.category === p.category)
  const next = siblings[(siblings.indexOf(p) + 1) % siblings.length]
  const cat = categories.find((c) => c.slug === p.category)
  const multi = (p.parts?.length || 0) > 1

  return (
    <>
      {/* Header */}
      <section className="phero phero--project">
        <div className="container phero__inner">
          <Link to={`/portfolio/${p.category}`} className="crumb">← {cat?.name}</Link>
          <h1 className="phero__title">{p.name}</h1>
          <p className="phero__eyebrow">{p.services.join(' • ')}</p>
          {p.tagline && <p className="phero__sub">{p.tagline}</p>}
        </div>
      </section>

      {/* The Client */}
      {p.client && (
        <section className="prose-block">
          <div className="container container--text reveal">
            <h2 className="kicker">The Client</h2>
            <p>{p.client}</p>
          </div>
        </section>
      )}

      {/* Projects / deliverables */}
      {p.parts?.map((part, i) => (
        <div key={part.title + i}>
          {(multi || part.details.length > 0) && (
            <section className={`band ${i === 0 && p.client ? 'band--angled' : ''}`}>
              <div className="container container--mid reveal">
                {multi && <p className="band__num">Project {String(i + 1).padStart(2, '0')}</p>}
                <h2 className="band__title">{part.title}</h2>
                <p className="band__sub">{part.subtitle}</p>
              </div>
            </section>
          )}

          <section className="feature">
            <div className={`container feature__grid ${part.details.length ? '' : 'feature__grid--solo'}`}>
              <div className="reveal">
                <Video video={part.video} title={part.title} />
              </div>
              {part.details.length > 0 && (
                <dl className="specs reveal" style={{ '--d': '120ms' }}>
                  {part.details.map(([k, v]) => (
                    <div key={k}>
                      <dt>{k}</dt>
                      <dd>{v}</dd>
                    </div>
                  ))}
                </dl>
              )}
            </div>
            {part.story && (
              <div className="container container--text feature__story reveal">
                <h3 className="kicker">The Work</h3>
                <p>{part.story}</p>
              </div>
            )}
          </section>
        </div>
      ))}

      {/* Photo gallery */}
      {p.gallery && (
        <section className="gallery">
          <div className="container gallery__grid">
            {p.gallery.map((src, i) => (
              <button key={src} className="gallery__item reveal" style={{ '--d': `${(i % 3) * 70}ms` }} onClick={() => onOpen({ type: 'image', src, title: p.name })}>
                <img src={src} alt={`${p.name}, photo ${i + 1}`} loading="lazy" />
              </button>
            ))}
          </div>
        </section>
      )}

      {/* Next project */}
      {next && next !== p && (
        <section className="next">
          <div className="container">
            <Link to={`/work/${next.slug}`} className="next__link">
              <span className="next__label">Next Project</span>
              <span className="next__name">{next.name} <span className="next__arrow" aria-hidden="true">›</span></span>
            </Link>
          </div>
        </section>
      )}

      <CTA title={p.category === 'weddings' ? "Let's talk about your day." : 'Want results like this for your brand?'} sub={p.category === 'weddings' ? 'Tell us about your plans and we will put together a package that fits.' : "Let's build something together."} />
    </>
  )
}
