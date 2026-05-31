export function LoadingIntro({ active, step, label, words }) {
  if (!active) return null

  return (
    <div className="loading-intro" aria-hidden="true">
      <div className="loading-intro-card">
        <p className="loading-intro-label">{label}</p>
        <div className="loading-intro-words">
          {words.map((word, index) => (
            <span
              key={word}
              className={`loading-word ${step === index ? 'is-active' : ''}`}
            >
              {word}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
