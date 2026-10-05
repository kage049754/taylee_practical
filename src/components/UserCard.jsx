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
    <article className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-700 dark:bg-slate-800">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">{name}</h2>
          <p className="mt-1 text-sm font-medium text-blue-600 dark:text-blue-400">{role}</p>
        </div>
        <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
          Team
        </span>
      </div>

      <div className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
        <p>
          <span className="font-semibold">Email:</span>{' '}
          <a
            href={`mailto:${email}`}
            className="text-blue-600 underline underline-offset-2 hover:text-blue-700 dark:text-blue-400"
          >
            {email}
          </a>
        </p>
        <p><span className="font-semibold">Company:</span> {company}</p>
      </div>

      <div className="mt-auto flex flex-wrap items-center gap-2 pt-5">
        <Link
          to={`/users/${id}`}
          className="rounded-lg border border-slate-300 px-4 py-2 font-semibold text-slate-700 transition hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-slate-600 dark:text-slate-100 dark:hover:bg-slate-700"
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
