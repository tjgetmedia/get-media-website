import { categories, projects } from '../data/site.js'
import { Link } from '../router.jsx'
import PageHero from '../components/PageHero.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import CTA from '../components/CTA.jsx'

export default function Portfolio({ category }) {
  const cat = category || categories[0]
  const items = projects.filter((p) => p.category === cat.slug)

  return (
    <>
      <PageHero title={cat.title} sub={cat.sub}>
        <nav className="tabs" aria-label="Portfolio categories">
          {categories.map((c) => (
            <Link key={c.slug} to={`/portfolio/${c.slug}`} className={`tab ${c.slug === cat.slug ? 'is-active' : ''}`}>
              {c.name}
            </Link>
          ))}
        </nav>
      </PageHero>

      <section className="prose-block prose-block--tight">
        <div className="container container--text reveal">
          <p className="lead">{cat.intro}</p>
        </div>
      </section>

      <section className="grid-section">
        <div className="container pgrid">
          {items.map((p, i) => (
            <ProjectCard key={p.slug} project={p} i={i} />
          ))}
        </div>
      </section>

      <CTA title="Have a project in mind?" sub="We'd love to hear about it." button="Start a Conversation" />
    </>
  )
}
