import { useState } from 'react'
import { work, workCategories } from '../data/site.js'

function Thumb({ item }) {
  if (item.image) return <img src={item.image} alt="" loading="lazy" />
  if (item.youtube) return <img src={`https://i.ytimg.com/vi/${item.youtube}/hqdefault.jpg`} alt="" loading="lazy" />
  if (item.vimeo) return <img src={`https://vumbnail.com/${item.vimeo}.jpg`} alt="" loading="lazy" />
  // No media yet: a branded title card so the grid never looks empty.
  return (
    <div className="titlecard" aria-hidden="true">
      <span className="titlecard__name">{item.client}</span>
    </div>
  )
}

export default function Work({ onOpen }) {
  const [filter, setFilter] = useState('All')
  const items = filter === 'All' ? work : work.filter((w) => w.category === filter)

  const activate = (item) => {
    if (item.youtube) return onOpen({ type: 'youtube', id: item.youtube, title: item.title })
    if (item.vimeo) return onOpen({ type: 'vimeo', id: item.vimeo, title: item.title })
    if (item.image) return onOpen({ type: 'image', src: item.image, title: item.title })
    if (item.caseStudy) document.getElementById('case-study')?.scrollIntoView({ behavior: 'smooth' })
  }

  const label = (item) =>
    item.youtube || item.vimeo ? 'Watch' : item.image ? 'View' : item.caseStudy ? 'Case Study' : 'Film coming soon'

  return (
    <section className="section work" id="work">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">Selected Work</p>
          <h2 className="h2">Work that earns<br />the second look.</h2>
        </div>

        <div className="filters reveal" role="tablist" aria-label="Filter work by category">
          {workCategories.map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={filter === c}
              className={`filter ${filter === c ? 'is-active' : ''}`}
              onClick={() => setFilter(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <ul className="work__grid" key={filter}>
          {items.map((item, i) => {
            const clickable = item.youtube || item.vimeo || item.image || item.caseStudy
            return (
              <li
                key={item.title}
                className={`card ${i === 0 && filter === 'All' ? 'card--feature' : ''}`}
                style={{ '--i': i }}
              >
                <button className="card__btn" onClick={() => activate(item)} disabled={!clickable} aria-label={`${label(item)}: ${item.title}`}>
                  <div className="card__media">
                    <Thumb item={item} />
                    {(item.youtube || item.vimeo) && <span className="card__play" aria-hidden="true" />}
                  </div>
                  <div className="card__meta">
                    <div>
                      <h3 className="card__title">{item.title}</h3>
                      <p className="card__tags">{item.tags.join(' · ')}</p>
                    </div>
                    <span className="card__cta">{label(item)}</span>
                  </div>
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
