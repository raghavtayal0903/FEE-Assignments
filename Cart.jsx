export default function Cart({ cartItems, onRemoveFromCart }) {
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0)

  return (
    <main className="page-content">
      <p className="page-label">Your cart</p>
      <h1>Shopping cart</h1>
      <p>{totalItems} item{totalItems !== 1 ? 's' : ''} in your cart.</p>

      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <div className="cart-list">
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.thumbnail} alt={item.title} />
              <div>
                <h2>{item.title}</h2>
                <p>${item.price} × {item.quantity}</p>
                <button className="remove-cart" type="button" onClick={() => onRemoveFromCart(item.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  )
}
