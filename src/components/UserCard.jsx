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
    <article className="flex h-full flex-col rounded-xl border border-emerald-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-emerald-900 dark:bg-emerald-900/70">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
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
