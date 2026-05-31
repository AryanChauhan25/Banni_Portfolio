export function Button({ href, variant = 'solid', children }) {
  const className = `button button-${variant}`

  if (href) {
    return (
      <a className={className} href={href} data-cursor="hover">
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={className}>
      {children}
    </button>
  )
}
