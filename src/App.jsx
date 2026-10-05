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
    document.documentElement.style.backgroundColor = isDarkMode ? '#022c22' : '#f0fdf4'
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
            ? 'dark bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-950 text-emerald-50'
            : 'bg-gradient-to-br from-emerald-50 via-teal-50 to-emerald-100 text-emerald-950'
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
