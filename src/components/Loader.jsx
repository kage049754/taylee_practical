function Loader() {
  return (
    <div className="flex items-center justify-center py-12 text-emerald-800 dark:text-emerald-200" role="status" aria-live="polite">
      <div className="mr-3 h-8 w-8 animate-spin rounded-full border-4 border-emerald-200 border-t-teal-600" />
      <span className="font-medium">Loading...</span>
    </div>
  )
}

export default Loader
