import { useEffect, useRef } from 'react'

// Wistia media IDs are embedded in their delivery/media URLs; when we can find one,
// the Wistia iframe player is more reliable across browsers than raw HLS playback.
function getWistiaMediaId(url) {
  const match = url.match(/wistia\.com\/embed\/medias\/([a-z0-9]+)/i)
  return match ? match[1] : null
}

function VideoModal({ url, onClose }) {
  const videoRef = useRef(null)
  const wistiaId = getWistiaMediaId(url)

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [onClose])

  useEffect(() => {
    if (wistiaId) return undefined
    const video = videoRef.current
    if (!video) return undefined

    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = url
      video.play().catch(() => {})
      return undefined
    }

    let hls
    let cancelled = false
    import('hls.js').then(({ default: Hls }) => {
      if (cancelled || !Hls.isSupported()) return
      hls = new Hls()
      hls.loadSource(url)
      hls.attachMedia(video)
      hls.on(Hls.Events.MANIFEST_PARSED, () => video.play().catch(() => {}))
    })

    return () => {
      cancelled = true
      if (hls) hls.destroy()
    }
  }, [url, wistiaId])

  return (
    <div className="video-modal" role="dialog" aria-modal="true">
      <button type="button" className="video-modal__backdrop" aria-label="Close video" onClick={onClose} />
      <div className="video-modal__frame">
        <button type="button" className="video-modal__close" aria-label="Close video" onClick={onClose}>&times;</button>
        {wistiaId ? (
          <iframe
            className="video-modal__iframe"
            src={`https://fast.wistia.net/embed/iframe/${wistiaId}?autoPlay=true`}
            title="Video"
            allow="autoplay; fullscreen"
            allowFullScreen
          />
        ) : (
          <video ref={videoRef} className="video-modal__video" controls autoPlay playsInline />
        )}
      </div>
    </div>
  )
}

export default VideoModal
