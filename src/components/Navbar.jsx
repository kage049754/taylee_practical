import { NavLink } from 'react-router-dom'

function Navbar({ favoriteCount, isDarkMode, onToggleDarkMode }) {
  const linkClasses = ({ isActive }) =>
    `rounded-md px-3 py-2 text-sm font-medium transition ${
      isActive
        ? 'bg-emerald-700 text-white underline underline-offset-4'
        : isDarkMode
          ? 'text-emerald-100 hover:bg-emerald-900'
          : 'text-emerald-800 hover:bg-emerald-50'
    }`

  return (
    <header
      className={`sticky top-0 z-10 border-b backdrop-blur ${
        isDarkMode
          ? 'border-emerald-900 bg-emerald-950/95'
          : 'border-emerald-200 bg-white/95'
      }`}
    >
      <nav aria-label="Primary navigation" className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-4">
        <NavLink
          to="/"
          className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-emerald-950'}`}
        >
          Taylee Team Directory
        </NavLink>

        <div className="flex flex-wrap items-center gap-1">
          <NavLink to="/" end className={linkClasses}>Home</NavLink>
          <NavLink to="/users" className={linkClasses}>Users</NavLink>
          <NavLink to="/about" className={linkClasses}>About</NavLink>
          <span
            className={`ml-2 rounded-full px-3 py-1 text-xs font-semibold ${
              isDarkMode ? 'bg-emerald-900 text-emerald-100' : 'bg-emerald-100 text-emerald-800'
            }`}
          >
            Favorites: {favoriteCount}
          </span>
          <button
            type="button"
            aria-pressed={isDarkMode}
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            onClick={onToggleDarkMode}
            className={`ml-2 rounded-lg border px-3 py-2 text-sm font-semibold transition ${
              isDarkMode
                ? 'border-emerald-700 text-emerald-100 hover:bg-emerald-900'
                : 'border-emerald-300 text-emerald-800 hover:bg-emerald-50'
            }`}
          >
            {isDarkMode ? '☀ Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
