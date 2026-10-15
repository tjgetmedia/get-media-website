import { useEffect, useRef } from 'react'

export default function MediaModal({ media, onClose }) {
  const closeRef = useRef(null)

  useEffect(() => {
    if (!media) return
    const prev = document.activeElement
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
      prev?.focus?.()
    }
  }, [media, onClose])

  if (!media) return null

  let content
  if (media.type === 'youtube') {
    content = (
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${media.id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
        title={media.title}
        allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
        allowFullScreen
      />
    )
  } else if (media.type === 'vimeo') {
    content = (
      <iframe
        src={`https://player.vimeo.com/video/${media.id}?autoplay=1&title=0&byline=0&portrait=0`}
        title={media.title}
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      />
    )
  } else {
    content = <img src={media.src} alt={media.title} />
  }

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-label={media.title} onClick={onClose}>
      <button ref={closeRef} className="modal__close" onClick={onClose} aria-label="Close">
        <span />
        <span />
      </button>
      <div className={`modal__frame ${media.type === 'image' ? 'modal__frame--image' : ''}`} onClick={(e) => e.stopPropagation()}>
        {content}
      </div>
    </div>
  )
}
