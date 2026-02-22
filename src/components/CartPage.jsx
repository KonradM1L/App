import { products } from '../products.js'

export function CartPage({ username, onLogout, cart, setCart, currentPage, setCurrentPage }) {
  const removeFromCart = (index) => {
    const newCart = cart.filter((_, i) => i !== index)
    setCart(newCart)
  }

  const removeAllOfProduct = (productId) => {
    const newCart = cart.filter(product => product.id !== productId)
    setCart(newCart)
  }

  const clearCart = () => {
    if (confirm('Czy na pewno chcesz opróżnić koszyk?')) {
      setCart([])
    }
  }

  const getCartSummary = () => {
    let summary = {}
    cart.forEach(product => {
      if (!summary[product.id]) {
        summary[product.id] = {
          product,
          quantity: 0,
          totalPrice: 0
        }
      }
      summary[product.id].quantity += 1
      summary[product.id].totalPrice += product.price
    })
    return Object.values(summary)
  }

  const getTotalPrice = () => {
    return cart.reduce((sum, product) => sum + product.price, 0)
  }

  const checkout = () => {
    if (cart.length === 0) {
      alert('Koszyk jest pusty!')
      return
    }
    alert(`Dziękujemy za zakup! Razem: ${getTotalPrice()} zł`)
    setCart([])
  }

  const cartSummary = getCartSummary()
  const totalPrice = getTotalPrice()

  return (
    <>
      <header className="header">
        <h1>Mój Koszyk</h1>
        <div className="header-info">
          <span className="cart-counter">Produkty: {cart.length}</span>
          <span className="username">Zalogowany: {username}</span>
          <button className="logout-btn" onClick={onLogout}>Wyloguj</button>
        </div>
      </header>

      <div className="products-container">
        {cart.length === 0 ? (
          <div className="empty-cart">
            <p>Koszyk jest pusty</p>
            <button 
              className="nav-btn"
              onClick={() => setCurrentPage('products')}
            >
              Wróć do produktów
            </button>
          </div>
        ) : (
          <>
            <h2>Zawartość koszyka</h2>
            
            <div className="cart-items">
              {cartSummary.map((item, idx) => (
                <div key={item.product.id} className="cart-item">
                  <div className="item-info">
                    <h3>{item.product.name}</h3>
                    <p className="description">{item.product.description}</p>
                    <p className="price">
                      {item.product.price} zł × {item.quantity} = <strong>{item.totalPrice} zł</strong>
                    </p>
                  </div>
                  <div className="item-actions">
                    <button 
                      className="remove-btn"
                      onClick={() => {
                        const indexToRemove = cart.findIndex(p => p.id === item.product.id)
                        if (indexToRemove !== -1) {
                          removeFromCart(indexToRemove)
                        }
                      }}
                    >
                      Usuń 1 szt.
                    </button>
                    <button 
                      className="remove-all-btn"
                      onClick={() => removeAllOfProduct(item.product.id)}
                    >
                      Usuń wszystkie
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <h3>Podsumowanie</h3>
              <p className="total-price">Razem: <strong>{totalPrice} zł</strong></p>
              <div className="cart-actions">
                <button 
                  className="checkout-btn"
                  onClick={checkout}
                >
                  Przejdź do kasy
                </button>
                <button 
                  className="clear-cart-btn"
                  onClick={clearCart}
                >
                  Opróżnij koszyk
                </button>
                <button 
                  className="nav-btn"
                  onClick={() => setCurrentPage('products')}
                >
                  Kontynuuj zakupy
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  )
}
