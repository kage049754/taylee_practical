import { Link } from 'react-router-dom'
import Button from './Button'

function UserCard({
  id,
  name,
  email,
  company,
  role,
  isFavorite,
  onToggleFavorite,
}) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-lg dark:border-slate-800 dark:bg-zinc-950 dark:hover:border-emerald-800">
      <div className="absolute inset-x-0 top-0 h-1 bg-emerald-700" />
      <div className="mb-4 flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-sm font-bold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
            {name.split(' ').map((part) => part[0]).join('').slice(0, 2)}
          </div>
          <div className="min-w-0">
          <h2 className="text-xl font-bold text-emerald-950 dark:text-white">{name}</h2>
          <p className="mt-1 text-sm font-medium text-teal-700 dark:text-teal-300">{role}</p>
        </div>
        <span className="rounded-full bg-teal-50 px-2.5 py-1 text-xs font-semibold text-teal-800 dark:bg-teal-900/40 dark:text-teal-300">
          Team
        </span>
      </div>

      <div className="space-y-2 text-sm text-emerald-800 dark:text-emerald-200">
        <p>
          <span className="font-semibold">Email:</span>{' '}
          <a
            href={`mailto:${email}`}
            className="text-teal-700 underline underline-offset-2 hover:text-teal-800 dark:text-teal-300"
          >
            {email}
          </a>
        </p>
        <p><span className="font-semibold">Company:</span> {company}</p>
      </div>

      <div className="mt-auto flex flex-wrap items-center gap-2 pt-5">
        <Link
          to={`/users/${id}`}
          className="rounded-lg border border-emerald-300 px-4 py-2 font-semibold text-emerald-800 transition hover:bg-emerald-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 dark:border-emerald-700 dark:text-emerald-50 dark:hover:bg-emerald-900"
        >
          View Details
        </Link>
        <Button
          label={isFavorite ? `Remove ${name} from favorites` : `Add ${name} to favorites`}
          onClick={onToggleFavorite}
          variant={isFavorite ? 'danger' : 'primary'}
        >
          {isFavorite ? '★ Favorite' : '☆ Favorite'}
        </Button>
      </div>
    </article>
  )
}

export default UserCard
