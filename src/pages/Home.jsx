import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'

function Home({ isDarkMode }) {
  const navigate = useNavigate()

  return (
    <section className="relative mx-auto flex min-h-[76vh] max-w-5xl flex-col items-center justify-center overflow-hidden px-4 py-16 text-center">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-100/70 blur-3xl dark:bg-emerald-950/50" />
      <div className="relative">
      <span className="mb-4 rounded-full bg-emerald-100 px-4 py-1 text-sm font-semibold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
        React + Vite + Tailwind CSS
      </span>
      <h1 className={`text-4xl font-extrabold tracking-tight sm:text-6xl ${isDarkMode ? 'text-white' : 'text-emerald-950'}`}>
        Meet the Taylee Team
      </h1>
      <p className={`mt-5 max-w-2xl text-lg ${isDarkMode ? 'text-slate-300' : 'text-emerald-800'}`}>
        Browse team members, search by name, save favorites, and open a dedicated details page for each person.
      </p>
      <div className="mt-8">
        <Button label="Open Users page" onClick={() => navigate('/users')}>
          View Team Directory
        </Button>
      </div>
      <div className="relative mt-12 flex flex-wrap justify-center gap-3 text-sm text-slate-500 dark:text-slate-400">
        <span className="rounded-full border border-slate-200 px-4 py-2 dark:border-slate-800">10 team members</span>
        <span className="rounded-full border border-slate-200 px-4 py-2 dark:border-slate-800">Search &amp; filter</span>
        <span className="rounded-full border border-slate-200 px-4 py-2 dark:border-slate-800">Favorites</span>
      </div>
    </section>
  )
}

export default Home
