function ErrorMessage({ message = 'Something went wrong.' }) {
  return (
    <div
      className="rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-center text-red-700 dark:border-red-900/60 dark:bg-red-950/40 dark:text-red-300"
      role="alert"
    >
      {message}
    </div>
  )
}

export default ErrorMessage
