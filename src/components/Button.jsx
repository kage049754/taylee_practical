function Button({
  label,
  onClick,
  variant = 'primary',
  children,
  type = 'button',
}) {
  const variantClasses =
    variant === 'danger'
      ? 'bg-rose-700 text-white hover:bg-rose-800 focus-visible:ring-rose-500'
      : 'bg-teal-700 text-white hover:bg-teal-800 focus-visible:ring-teal-500'

  return (
    <button
      type={type}
      aria-label={label}
      title={label}
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 font-semibold shadow-sm transition hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${variantClasses}`}
    >
      {children}
    </button>
  )
}

export default Button
