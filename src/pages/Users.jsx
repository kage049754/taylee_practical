import { useEffect, useState } from 'react'
import usersData from '../data/users'
import ErrorMessage from '../components/ErrorMessage'
import Loader from '../components/Loader'
import UserCard from '../components/UserCard'

function Users({ favorites, onToggleFavorite, isDarkMode }) {
  const [users, setUsers] = useState([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => {
      setUsers(usersData)
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const normalizedSearch = search.trim().toLowerCase()

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(normalizedSearch),
  )

  useEffect(() => {
    document.title = `Users (${filteredUsers.length})`
  }, [filteredUsers.length])

  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <div className="mb-7 flex flex-col gap-4 border-b border-slate-200 pb-7 sm:flex-row sm:items-end sm:justify-between dark:border-slate-800">
        <div>
          <h1 className={`text-3xl font-extrabold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Users</h1>
          <p className={`mt-2 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            {filteredUsers.length} team member{filteredUsers.length === 1 ? '' : 's'} displayed
          </p>
        </div>
        <span className="w-fit rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
          {favorites.length} favorite{favorites.length === 1 ? '' : 's'}
        </span>
      </div>

      <label
        htmlFor="user-search"
        className={`mb-6 block text-sm font-semibold ${isDarkMode ? 'text-slate-200' : 'text-slate-700'}`}
      >
        Search by name
        <input
          id="user-search"
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Type a name..." autoComplete="off"
          className={`mt-2 w-full rounded-lg border px-4 py-3 outline-none transition focus:border-emerald-600 focus:ring-4 focus:ring-emerald-500/10 ${
            isDarkMode
              ? 'border-slate-700 bg-zinc-950 text-white placeholder:text-slate-400'
              : 'border-slate-300 bg-white text-slate-900 placeholder:text-slate-400'
          }`}
        />
      </label>

      {loading ? (
        <Loader />
      ) : filteredUsers.length === 0 ? (
        <ErrorMessage
          message={users.length === 0 ? 'No users found.' : 'No users found matching your search.'}
        />
      ) : (
        <div
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          aria-label="Team member cards"
        >
          {filteredUsers.map((user) => (
            <UserCard
              key={user.id}
              id={user.id}
              name={user.name}
              email={user.email}
              company={user.company}
              role={user.role}
              isFavorite={favorites.includes(user.id)}
              onToggleFavorite={() => onToggleFavorite(user.id)}
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default Users
