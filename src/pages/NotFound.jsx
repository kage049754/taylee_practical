import { Link } from 'react-router-dom'

function NotFound({ isDarkMode }) {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center px-4 text-center">
      <p className="text-7xl font-black text-blue-600">404</p>
      <h1 className={`mt-4 text-3xl font-extrabold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
        Page not found
      </h1>
      <p className={`mt-3 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
        The page you requested does not exist.
      </p>
      <Link
        to="/"
        className="mt-7 rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
      >
        Return Home
      </Link>
    </section>
  )
}

export default NotFound
