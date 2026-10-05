import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'

function Home({ isDarkMode }) {
  const navigate = useNavigate()

  return (
    <section className="mx-auto flex min-h-[70vh] max-w-4xl flex-col items-center justify-center px-4 py-16 text-center">
      <span className="mb-4 rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
        React + Vite + Tailwind CSS
      </span>
      <h1 className={`text-4xl font-extrabold tracking-tight sm:text-6xl ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
        Meet the Taylee Team
      </h1>
      <p className={`mt-5 max-w-2xl text-lg ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
        Browse team members, search by name, save favorites, and open a dedicated details page for each person.
      </p>
      <div className="mt-8">
        <Button label="Open Users page" onClick={() => navigate('/users')}>
          View Team Directory
        </Button>
      </div>
    </section>
  )
}

export default Home
