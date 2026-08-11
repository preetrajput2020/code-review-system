import { Link } from 'react-router-dom'

const variants = {
  primary:
    'bg-ink text-white hover:bg-accent-dark border border-ink hover:border-accent-dark',
  secondary:
    'bg-transparent text-ink border border-line hover:border-ink',
  ghost:
    'bg-transparent text-subtle hover:text-ink border border-transparent',
}

export default function Button({
  children,
  variant = 'primary',
  to,
  href,
  onClick,
  type = 'button',
  className = '',
}) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-colors focus-ring'
  const classes = `${base} ${variants[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
