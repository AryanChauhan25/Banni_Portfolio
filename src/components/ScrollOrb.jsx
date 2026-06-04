import { useEffect, useRef } from 'react'

export function ScrollOrb() {
  const orbRef = useRef(null)

  useEffect(() => {
    const node = orbRef.current
    if (!node) return undefined

    let rafId = 0

    const update = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0
      const clamped = Math.max(0, Math.min(1, progress))
      node.style.setProperty('--scroll-fill', clamped.toFixed(4))
    }

    const onScroll = () => {
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      ref={orbRef}
      type="button"
      className="scroll-orb"
      aria-label="Scroll back to top"
      onClick={scrollToTop}
      style={{ '--scroll-fill': 0 }}
    >
      <span className="scroll-orb-ring" aria-hidden="true" />
      <span className="scroll-orb-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24">
          <path
            className="hourglass-frame"
            d="M6.5 3.5h11v2.1l-3.8 4.2c1.2 1.2 2.5 2.7 3.8 4.4v6.3h-11v-6.3c1.3-1.7 2.6-3.2 3.8-4.4L6.5 5.6V3.5Z"
          />
          <path
            className="hourglass-sand-top"
            d="M8.3 5.4h7.4l-3.7 3.8-3.7-3.8Z"
          />
          <path
            className="hourglass-sand-bottom"
            d="M8.3 18.6h7.4l-3.7-3.8-3.7 3.8Z"
          />
          <path className="hourglass-stream" d="M12 9.7v4.6" />
          <circle className="hourglass-spill hourglass-spill-a" cx="9.2" cy="19.9" r="0.45" />
          <circle className="hourglass-spill hourglass-spill-b" cx="14.8" cy="19.3" r="0.45" />
          <circle className="hourglass-spill hourglass-spill-c" cx="12" cy="20.7" r="0.35" />
        </svg>
      </span>
    </button>
  )
}
