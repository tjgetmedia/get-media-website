import { Link } from '../router.jsx'
import { thumbFor } from './Video.jsx'

export const coverFor = (p) => p.cover || thumbFor(p.parts?.find((x) => x.video && (x.video.youtube || x.video.vimeo))?.video)

export default function ProjectCard({ project, i = 0 }) {
  const cover = coverFor(project)
  const isPhoto = !!project.gallery && !project.parts
  return (
    <Link to={`/work/${project.slug}`} className="pcard reveal" style={{ '--d': `${(i % 3) * 80}ms` }}>
      <div className="pcard__media">
        {cover ? (
          <img src={cover} alt="" loading="lazy" />
        ) : (
          <div className="titlecard"><span className="titlecard__name">{project.name}</span></div>
        )}
      </div>
      <div className="pcard__body">
        <h3 className="pcard__title">{project.name}</h3>
        <p className="pcard__label">{isPhoto ? 'View Gallery' : 'Watch Film'} <span aria-hidden="true">→</span></p>
      </div>
    </Link>
  )
}
