function Loader() {
  return (
    <div className="flex items-center justify-center py-12 text-slate-600 dark:text-slate-300" role="status" aria-live="polite">
      <div className="mr-3 h-8 w-8 animate-spin rounded-full border-4 border-slate-200 border-t-blue-600" />
      <span className="font-medium">Loading...</span>
    </div>
  )
}

export default Loader
