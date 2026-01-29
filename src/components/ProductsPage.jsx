import { products } from '../products.js'

export function ProductsPage({ username, onLogout, favorites, setFavorites, cart, setCart, quantities, setQuantities, searchQuery, setSearchQuery }) {
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
        <div className="products-grid">
          {products
            .filter(product => {
              if (!searchQuery) return true
              const q = searchQuery.toLowerCase()
              return product.name.toLowerCase().includes(q) || product.description.toLowerCase().includes(q)
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
