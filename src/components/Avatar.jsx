export function Avatar({ className, alt, decorative = false }) {
  return (
    <img
      className={className}
      src="/avatar.svg"
      alt={decorative ? '' : alt}
      width={120}
      height={120}
      decoding="async"
      {...(decorative ? { 'aria-hidden': true } : {})}
    />
  )
}
