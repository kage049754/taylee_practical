import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import usersData from '../data/users'
import ErrorMessage from '../components/ErrorMessage'
import Loader from '../components/Loader'

function UserDetails({ isDarkMode }) {
  const { id } = useParams()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => {
      const foundUser = usersData.find((item) => item.id === Number(id))
      setUser(foundUser || null)
      setLoading(false)
    }, 300)

    return () => clearTimeout(timer)
  }, [id])

  useEffect(() => {
    document.title = user ? `User: ${user.name}` : 'User Not Found'
  }, [user])

  return (
    <section className="mx-auto max-w-3xl px-4 py-10">
      <Link
        to="/users"
        className="mb-6 inline-flex font-semibold text-emerald-700 underline underline-offset-4 hover:text-emerald-800 dark:text-emerald-400 dark:hover:text-emerald-300"
      >
        ← Back to Users
      </Link>

      {loading ? (
        <div aria-live="polite">
          <Loader />
        </div>
      ) : user ? (
        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-zinc-950">
          <div className="h-2 bg-emerald-700" />
          <div className="p-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">Team Member</p>
          <h1 className={`mt-2 text-4xl font-extrabold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            {user.name}
          </h1>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <div>
              <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">Email</p>
              <p className="mt-1 text-slate-800 dark:text-slate-100">{user.email}</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">Company</p>
              <p className="mt-1 text-slate-800 dark:text-slate-100">{user.company}</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">Role</p>
              <p className="mt-1 text-slate-800 dark:text-slate-100">{user.role}</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">User ID</p>
              <p className="mt-1 text-slate-800 dark:text-slate-100">{user.id}</p>
            </div>
            </div>
          </div>
        </article>
      ) : (
        <ErrorMessage message="User not found." />
      )}
    </section>
  )
}

export default UserDetails
