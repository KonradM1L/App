import { products } from '../products.js'

export function ProductsPage({ username, onLogout, favorites, setFavorites, cart, setCart, quantities, setQuantities, searchQuery, setSearchQuery, minPrice, setMinPrice, maxPrice, setMaxPrice }) {
  const getQuantity = (productId) => {
    return quantities[productId] || 1
  }

  const increaseQuantity = (productId) => {
    setQuantities({
      ...quantities,
      [productId]: getQuantity(productId) + 1
    })
  }

  const decreaseQuantity = (productId) => {
    const currentQuantity = getQuantity(productId)
    if (currentQuantity > 1) {
      setQuantities({
        ...quantities,
        [productId]: currentQuantity - 1
      })
    }
  }

  const toggleFavorite = (productId) => {
    const newFavorites = new Set(favorites)
    if (newFavorites.has(productId)) {
      newFavorites.delete(productId)
    } else {
      newFavorites.add(productId)
    }
    setFavorites(newFavorites)
  }

  const addToCart = (product) => {
    const quantity = getQuantity(product.id)
    const newCart = [...cart]
    for (let i = 0; i < quantity; i++) {
      newCart.push(product)
    }
    setCart(newCart)
    alert(`${product.name} x${quantity} dodano do koszyka!`)
    setQuantities({
      ...quantities,
      [product.id]: 1
    })
  }

  return (
    <>
      <header className="header">
        <h1>Sklep Online</h1>
        <div className="header-info">
          <span className="cart-counter">Koszyk: {cart.length}</span>
          <span className="username">Zalogowany: {username}</span>
          <button className="logout-btn" onClick={onLogout}>Wyloguj</button>
        </div>
      </header>
      
      <div className="products-container">
        <h2>Dostępne Produkty</h2>
        
        <div className="filter-section">
          <h3>Filtry</h3>
          <div className="filter-group">
            <label>
              Cena od:
              <input 
                type="number" 
                value={minPrice} 
                onChange={(e) => setMinPrice(parseInt(e.target.value) || 0)}
                placeholder="Cena min"
              />
            </label>
            <label>
              do:
              <input 
                type="number" 
                value={maxPrice} 
                onChange={(e) => setMaxPrice(parseInt(e.target.value) || 10000)}
                placeholder="Cena max"
              />
            </label>
            <button 
              className="reset-filters-btn"
              onClick={() => {
                setMinPrice(0)
                setMaxPrice(10000)
                setSearchQuery('')
              }}
            >
              Resetuj filtry
            </button>
          </div>
        </div>

        <div className="products-grid">
          {products
            .filter(product => {
              if (!searchQuery && minPrice === 0 && maxPrice === 10000) return true
              
              const matchesSearch = !searchQuery || 
                product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                product.description.toLowerCase().includes(searchQuery.toLowerCase())
              
              const matchesPrice = product.price >= minPrice && product.price <= maxPrice
              
              return matchesSearch && matchesPrice
            })
            .map(product => (
            <div key={product.id} className="product-card">
              <button
                className={`favorite-btn ${favorites.has(product.id) ? 'active' : ''}`}
                onClick={() => toggleFavorite(product.id)}
                title={favorites.has(product.id) ? 'Usuń z ulubionych' : 'Dodaj do ulubionych'}
              >
                ★
              </button>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="description">{product.description}</p>
                <p className="price">{product.price} zł</p>
              </div>
              <div className="quantity-controls">
                <button 
                  className="qty-btn minus-btn"
                  onClick={() => decreaseQuantity(product.id)}
                >
                  −
                </button>
                <span className="quantity">{getQuantity(product.id)}</span>
                <button 
                  className="qty-btn plus-btn"
                  onClick={() => increaseQuantity(product.id)}
                >
                  +
                </button>
              </div>
              <button 
                className="add-to-cart-btn"
                onClick={() => addToCart(product)}
              >
                Dodaj do koszyka
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
