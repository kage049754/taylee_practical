function Button({
  label,
  onClick,
  variant = 'primary',
  children,
  type = 'button',
}) {
  const variantClasses =
    variant === 'danger'
      ? 'bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500'
      : 'bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-500'

  return (
    <button
      type={type}
      aria-label={label}
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 font-semibold shadow-sm transition hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${variantClasses}`}
    >
      {children}
    </button>
  )
}

export default Button
