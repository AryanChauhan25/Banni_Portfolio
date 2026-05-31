import { useEffect, useState } from 'react'

const initialState = {
  x: 0,
  y: 0,
  active: false,
  hidden: true,
}

export function Cursor() {
  const [cursor, setCursor] = useState(initialState)

  useEffect(() => {
    const isFinePointer = window.matchMedia('(pointer: fine)').matches
    if (!isFinePointer) return undefined

    let rafId = 0
    const state = { ...initialState, hidden: false }

    const onMove = (event) => {
      state.x = event.clientX
      state.y = event.clientY
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
    <div
      className={`cursor ${cursor.active ? 'cursor-active' : ''}`}
      style={{ transform: `translate3d(${cursor.x}px, ${cursor.y}px, 0)` }}
      aria-hidden="true"
    >
      <span className="cursor-ring" />
      <span className="cursor-dot" />
    </div>
  )
}
