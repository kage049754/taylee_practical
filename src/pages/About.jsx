function About({ isDarkMode }) {
  return (
    <section className="mx-auto max-w-3xl px-4 py-12">
      <h1 className={`text-3xl font-extrabold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>About</h1>
      <div
        className={`mt-6 rounded-2xl border p-6 shadow-sm ${
          isDarkMode
            ? 'border-slate-700 bg-slate-800 text-slate-200'
            : 'border-slate-200 bg-white text-slate-600'
        }`}
      >
        <p>
          Taylee Team Directory is a React laboratory project demonstrating client-side routing,
          reusable components, local data, state management, loading and error states, search,
          favorites, and theme switching.
        </p>
        <p className="mt-4">
          The application uses React Router for navigation and Tailwind CSS for responsive styling.
        </p>
      </div>
    </section>
  )
}

export default About
