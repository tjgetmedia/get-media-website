import { reasons, site } from '../data/site.js'

export default function Why() {
  return (
    <section className="section why" id="about">
      <div className="container why__grid">
        <figure className="why__photo reveal">
          <img src="images/team.jpg" alt="A GET Media shooter filming on location with a cinema camera" />
          <figcaption>On location · {site.region}</figcaption>
        </figure>
        <div>
          <div className="section-head reveal">
            <p className="eyebrow">Why GET Media</p>
            <h2 className="h2">Why brands<br />work with us.</h2>
            <p className="lede">
              We're a full-service production company based in {site.location}. Every project gets a cinematic eye and a
              focus on what your audience actually feels watching it. We bring the gear, the team, and the vision. You bring
              the story.
            </p>
          </div>
          <ol className="why__list">
            {reasons.map((r, i) => (
              <li className="reveal" key={r.title}>
                <span className="why__num">{i + 1}</span>
                <div>
                  <h3 className="why__title">{r.title}</h3>
                  <p>{r.copy}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
