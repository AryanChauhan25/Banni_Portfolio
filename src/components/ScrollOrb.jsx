export function ScrollOrb({ progress }) {
  const clamped = Math.max(0, Math.min(1, progress))

  return (
    <div className="scroll-orb" aria-hidden="true" style={{ '--scroll-fill': clamped }}>
      <span className="scroll-orb-ring" />
      <span className="scroll-orb-fluid" />
      <span className="scroll-orb-spill spill-left" />
      <span className="scroll-orb-spill spill-right" />
      <span className="scroll-orb-core" />
    </div>
  )
}
