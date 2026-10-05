import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Users from './pages/Users'
import UserDetails from './pages/UserDetails'
import About from './pages/About'
import NotFound from './pages/NotFound'

function App() {
  const [favorites, setFavorites] = useState([])
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleFavorite = (userId) => {
    setFavorites((currentFavorites) => {
      if (currentFavorites.includes(userId)) {
        return currentFavorites.filter((id) => id !== userId)
      }

      return [...currentFavorites, userId]
    })
  }

  useEffect(() => {
    document.documentElement.style.backgroundColor = isDarkMode ? '#0f172a' : '#f8fafc'
  }, [isDarkMode])

  const routes = [
    { path: '/', element: <Home isDarkMode={isDarkMode} /> },
    {
      path: '/users',
      element: (
        <Users
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
          isDarkMode={isDarkMode}
        />
      ),
    },
    { path: '/users/:id', element: <UserDetails isDarkMode={isDarkMode} /> },
    { path: '/about', element: <About isDarkMode={isDarkMode} /> },
    { path: '*', element: <NotFound isDarkMode={isDarkMode} /> },
  ]

  return (
    <BrowserRouter>
      <div
        className={`min-h-screen transition-colors ${
          isDarkMode
            ? 'dark bg-slate-900 text-slate-100'
            : 'bg-slate-50 text-slate-900'
        }`}
      >
        <Navbar
          favoriteCount={favorites.length}
          isDarkMode={isDarkMode}
          onToggleDarkMode={() => setIsDarkMode((current) => !current)}
        />

        <main>
          <Routes>
            {routes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
