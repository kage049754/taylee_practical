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
    setFavorites((currentFavorites) =>
      currentFavorites.includes(userId)
        ? currentFavorites.filter((id) => id !== userId)
        : [...currentFavorites, userId],
    )
  }

  useEffect(() => {
    document.documentElement.style.backgroundColor = isDarkMode ? '#0f172a' : '#f8fafc'
  }, [isDarkMode])

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
            <Route path="/" element={<Home isDarkMode={isDarkMode} />} />
            <Route
              path="/users"
              element={
                <Users
                  favorites={favorites}
                  onToggleFavorite={toggleFavorite}
                  isDarkMode={isDarkMode}
                />
              }
            />
            <Route path="/users/:id" element={<UserDetails isDarkMode={isDarkMode} />} />
            <Route path="/about" element={<About isDarkMode={isDarkMode} />} />
            <Route path="*" element={<NotFound isDarkMode={isDarkMode} />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
