import { hero, site } from '../data/site.js'

export default function Hero({ onPlay }) {
  const bg = hero.backgroundYoutube
  return (
    <section className="hero" id="top">
      <div className="hero__media" aria-hidden="true">
        {/* Poster shows instantly (and on devices that block autoplay). */}
        <img className="hero__poster" src={`https://i.ytimg.com/vi/${bg}/maxresdefault.jpg`} alt="" onError={(e) => (e.currentTarget.style.display = 'none')} />
        <iframe
          className="hero__video"
          src={`https://www.youtube-nocookie.com/embed/${bg}?autoplay=1&mute=1&loop=1&playlist=${bg}&controls=0&rel=0&modestbranding=1&playsinline=1&disablekb=1&iv_load_policy=3`}
          title="Background reel"
          tabIndex={-1}
          allow="autoplay; encrypted-media"
        />
        <div className="hero__shade" />
      </div>

      <div className="hero__content container">
        <p className="eyebrow hero__eyebrow">{hero.eyebrow}</p>
        <h1 className="hero__title">
          <span className="line">{hero.headlineTop}</span>
          <span className="line gold">{hero.headlineAccent}</span>
          <span className="line">{hero.headlineBottom}</span>
        </h1>
        <p className="hero__sub">{hero.sub}</p>
        <div className="hero__ctas">
          <a href="#contact" className="btn btn--gold">Start a Project</a>
          <button className="btn btn--ghost" onClick={() => onPlay({ type: 'youtube', id: hero.reelYoutube, title: 'GET Media Showreel' })}>
            <span className="play-dot" aria-hidden="true" /> Watch the Reel
          </button>
        </div>
      </div>

      <div className="hero__foot container">
        <span>Based in {site.location}</span>
        <span className="hero__rule" />
        <span>Cinema cameras · Lighting · Audio · Drone</span>
        <a href="#work" className="hero__scroll" aria-label="Scroll to our work">Scroll</a>
      </div>
    </section>
  )
}
