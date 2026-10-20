import { useState } from 'react'

export const hasVideo = (v) => !!(v && (v.youtube || v.vimeo))

export const thumbFor = (v) =>
  v?.youtube ? `https://i.ytimg.com/vi/${v.youtube}/hqdefault.jpg` : v?.vimeo ? `https://vumbnail.com/${v.vimeo}.jpg` : ''

// Shows a thumbnail with a play button; loads the real player on click.
// Keeps pages fast even with several embeds.
export default function Video({ video, title }) {
  const [play, setPlay] = useState(false)

  if (!hasVideo(video)) {
    return (
      <div className="video video--empty">
        <div className="titlecard">
          <span className="titlecard__name">{title}</span>
          <span className="titlecard__note">Film coming soon</span>
        </div>
      </div>
    )
  }

  const src = video.youtube
    ? `https://www.youtube-nocookie.com/embed/${video.youtube}?autoplay=1&rel=0&modestbranding=1&playsinline=1`
    : `https://player.vimeo.com/video/${video.vimeo}?autoplay=1&title=0&byline=0&portrait=0${video.hash ? `&h=${video.hash}` : ''}`

  const poster = video.youtube ? `https://i.ytimg.com/vi/${video.youtube}/maxresdefault.jpg` : thumbFor(video)

  return (
    <div className="video">
      {play ? (
        <iframe src={src} title={title} allow="autoplay; encrypted-media; fullscreen; picture-in-picture" allowFullScreen />
      ) : (
        <button className="video__poster" onClick={() => setPlay(true)} aria-label={`Play ${title}`}>
          <img
            src={poster}
            alt=""
            loading="lazy"
            onError={(e) => {
              // maxresdefault doesn't exist for every upload; fall back once.
              if (video.youtube && !e.currentTarget.dataset.fb) {
                e.currentTarget.dataset.fb = 1
                e.currentTarget.src = thumbFor(video)
              }
            }}
          />
          <span className="play" aria-hidden="true" />
        </button>
      )}
    </div>
  )
}
