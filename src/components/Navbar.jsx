import { NavLink } from 'react-router-dom'

function Navbar({ favoriteCount, isDarkMode, onToggleDarkMode }) {
  const linkClasses = ({ isActive }) =>
    `rounded-md px-3 py-2 text-sm font-medium transition ${
      isActive
        ? 'bg-blue-600 text-white underline underline-offset-4'
        : isDarkMode
          ? 'text-slate-200 hover:bg-slate-700'
          : 'text-slate-700 hover:bg-slate-100'
    }`

  return (
    <header
      className={`sticky top-0 z-10 border-b backdrop-blur ${
        isDarkMode
          ? 'border-slate-700 bg-slate-900/95'
          : 'border-slate-200 bg-white/95'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-4">
        <NavLink
          to="/"
          className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}
        >
          Taylee Team Directory
        </NavLink>

        <div className="flex flex-wrap items-center gap-1">
          <NavLink to="/" className={linkClasses}>Home</NavLink>
          <NavLink to="/users" className={linkClasses}>Users</NavLink>
          <NavLink to="/about" className={linkClasses}>About</NavLink>
          <span
            className={`ml-2 rounded-full px-3 py-1 text-xs font-semibold ${
              isDarkMode ? 'bg-slate-700 text-slate-100' : 'bg-slate-100 text-slate-700'
            }`}
          >
            Favorites: {favoriteCount}
          </span>
          <button
            type="button"
            onClick={onToggleDarkMode}
            className={`ml-2 rounded-lg border px-3 py-2 text-sm font-semibold transition ${
              isDarkMode
                ? 'border-slate-600 text-slate-100 hover:bg-slate-700'
                : 'border-slate-300 text-slate-700 hover:bg-slate-100'
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
