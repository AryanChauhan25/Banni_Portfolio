import { useEffect, useRef, useState } from 'react'

const initialState = {
  x: 0,
  y: 0,
  active: false,
  hidden: true,
}

export function Cursor() {
  const [cursor, setCursor] = useState(initialState)
  const [sparks, setSparks] = useState([])
  const lastPointRef = useRef({ x: 0, y: 0 })
  const lastEmitRef = useRef(0)

  useEffect(() => {
    const isFinePointer = window.matchMedia('(pointer: fine)').matches
    if (!isFinePointer) return undefined

    let rafId = 0
    const state = { ...initialState, hidden: false }

    const onMove = (event) => {
      const now = performance.now()
      const dx = event.clientX - lastPointRef.current.x
      const dy = event.clientY - lastPointRef.current.y
      const distance = Math.hypot(dx, dy)

      state.x = event.clientX
      state.y = event.clientY

      if (!state.hidden && distance > 3 && now - lastEmitRef.current > 18) {
        const angle = (Math.atan2(dy, dx) * 180) / Math.PI + 180
        const duration = 480 + Math.round(Math.random() * 260)
        const buildSpark = (offset = 0) => ({
          id: `${now}-${offset}-${Math.random().toString(36).slice(2, 8)}`,
          x: event.clientX - dx * offset,
          y: event.clientY - dy * offset,
          angle: angle + offset * 8,
          distance: 24 + Math.round(Math.random() * 34),
          size: 9 + Math.round(Math.random() * 10),
          duration,
        })

        lastEmitRef.current = now
        setSparks((current) => [...current.slice(-19), buildSpark(0), buildSpark(0.28)])
      }

      lastPointRef.current = { x: event.clientX, y: event.clientY }
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => {
        setCursor({ ...state })
      })
    }

    const onPointerOver = (event) => {
      const hoverTarget = event.target.closest('[data-cursor="hover"]')
      if (!hoverTarget) return
      state.active = true
      setCursor({ ...state })
    }

    const onPointerOut = (event) => {
      const hoverTarget = event.target.closest('[data-cursor="hover"]')
      if (!hoverTarget) return
      if (event.relatedTarget && hoverTarget.contains(event.relatedTarget)) return
      state.active = false
      setCursor({ ...state })
    }

    const onLeave = () => {
      state.hidden = true
      setSparks([])
      setCursor({ ...state })
    }

    const onEnter = () => {
      state.hidden = false
      setCursor({ ...state })
    }

    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerenter', onEnter)
    window.addEventListener('pointerleave', onLeave)
    document.addEventListener('pointerover', onPointerOver)
    document.addEventListener('pointerout', onPointerOut)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerenter', onEnter)
      window.removeEventListener('pointerleave', onLeave)
      document.removeEventListener('pointerover', onPointerOver)
      document.removeEventListener('pointerout', onPointerOut)
    }
  }, [])

  if (cursor.hidden) return null

  return (
    <div className="cursor-layer" aria-hidden="true">
      {sparks.map((spark) => (
        <span
          key={spark.id}
          className="cursor-spark"
          style={{
            left: `${spark.x}px`,
            top: `${spark.y}px`,
            '--spark-angle': `${spark.angle}deg`,
            '--spark-distance': `${spark.distance}px`,
            '--spark-duration': `${spark.duration}ms`,
            '--spark-size': `${spark.size}px`,
          }}
          onAnimationEnd={() => {
            setSparks((current) => current.filter((item) => item.id !== spark.id))
          }}
        >
          <span className="cursor-spark-star" />
        </span>
      ))}
      <div
        className={`cursor ${cursor.active ? 'cursor-active' : ''}`}
        style={{ transform: `translate3d(${cursor.x}px, ${cursor.y}px, 0)` }}
      >
        <span className="cursor-ring" />
        <span className="cursor-star" aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <path d="M12 2.8 13.7 9l6.2 1.7-6.2 1.7L12 18.6l-1.7-6.2L4.1 10.7 10.3 9 12 2.8Z" />
            <path d="M18.6 4.8 19.3 7l2.2.7-2.2.7-.7 2.2-.7-2.2-2.2-.7 2.2-.7.7-2.2Z" />
          </svg>
        </span>
      </div>
    </div>
  )
}
