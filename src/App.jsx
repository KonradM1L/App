import { useState } from 'react'
import './App.css'
import { RegistrationForm } from './components/RegistrationForm'
import { ProductsPage } from './components/ProductsPage'
import { FavoritesPage } from './components/FavoritesPage'
import { CartPage } from './components/CartPage'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState('')
  const [currentPage, setCurrentPage] = useState('products')
  const [searchQuery, setSearchQuery] = useState('')
  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(10000)
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
              ★ Ulubione ({favorites.size})
            </button>
            <button 
              className={`nav-btn ${currentPage === 'cart' ? 'active' : ''}`}
              onClick={() => setCurrentPage('cart')}
            >
              🛒 Koszyk ({cart.length})
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
              minPrice={minPrice}
              setMinPrice={setMinPrice}
              maxPrice={maxPrice}
              setMaxPrice={setMaxPrice}
            />
          ) : currentPage === 'favorites' ? (
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
              minPrice={minPrice}
              setMinPrice={setMinPrice}
              maxPrice={maxPrice}
              setMaxPrice={setMaxPrice}
            />
          ) : (
            <CartPage 
              username={username} 
              onLogout={handleLogout}
              cart={cart}
              setCart={setCart}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          )}
        </>
      )}
    </>
  )
}

export default App
