import banniImage from '../assets/banni.png'

export function Avatar({ className, alt, decorative = false }) {
  return (
    <img
      className={className}
      src={banniImage}
      alt={decorative ? '' : alt}
      width={120}
      height={120}
      decoding="async"
      {...(decorative ? { 'aria-hidden': true } : {})}
    />
  )
}
