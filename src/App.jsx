import { useState } from 'react'
import './App.css'
import { RegistrationForm } from './components/RegistrationForm'
import { ProductsPage } from './components/ProductsPage'
import { FavoritesPage } from './components/FavoritesPage'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState('')
  const [currentPage, setCurrentPage] = useState('products')
  const [searchQuery, setSearchQuery] = useState('')
  const [cart, setCart] = useState([])
  const [quantities, setQuantities] = useState({})
  const [favorites, setFavorites] = useState(new Set())

  const handleRegister = (name) => {
    setUsername(name)
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setUsername('')
    setCurrentPage('products')
  }

  return (
    <>
      {!isLoggedIn ? (
        <RegistrationForm onRegister={handleRegister} />
      ) : (
        <>
          <nav className="navigation">
            <input
              type="text"
              className="search-input"
              placeholder="Szukaj produktów..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button 
              className={`nav-btn ${currentPage === 'products' ? 'active' : ''}`}
              onClick={() => setCurrentPage('products')}
            >
              Wszystkie Produkty
            </button>
            <button 
              className={`nav-btn ${currentPage === 'favorites' ? 'active' : ''}`}
              onClick={() => setCurrentPage('favorites')}
            >
              Ulubione ({favorites.size})
            </button>
          </nav>
          {currentPage === 'products' ? (
            <ProductsPage 
              username={username} 
              onLogout={handleLogout}
              favorites={favorites}
              setFavorites={setFavorites}
              cart={cart}
              setCart={setCart}
              quantities={quantities}
              setQuantities={setQuantities}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          ) : (
            <FavoritesPage 
              username={username} 
              onLogout={handleLogout}
              favorites={favorites}
              setFavorites={setFavorites}
              cart={cart}
              setCart={setCart}
              quantities={quantities}
              setQuantities={setQuantities}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          )}
        </>
      )}
    </>
  )
}

export default App
