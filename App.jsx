import { useState } from "react";
import Home, { products } from "./Home";
import "./App.css";

function Categories({ setPage }) {
  const categories = ["Phones", "Laptops", "Audio", "Wearables"];
  return (
    <section className="page-section">
      <p className="eyebrow">Browse by department</p>
      <h1>Find your next favourite</h1>
      <div className="category-grid">
        {categories.map((category, index) => (
          <button className="category-card" key={category} onClick={() => setPage("shop")}>
            <span>{["📱", "💻", "🎧", "⌚"][index]}</span>
            <strong>{category}</strong>
            <small>Explore collection →</small>
          </button>
        ))}
      </div>
    </section>
  );
}

function Cart({ cart, updateQuantity, setPage }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return (
    <section className="page-section narrow-page">
      <p className="eyebrow">Your bag</p>
      <h1>Shopping cart</h1>
      {cart.length === 0 ? (
        <div className="empty-state"><p>Your cart is waiting for something great.</p><button onClick={() => setPage("shop")}>Continue shopping</button></div>
      ) : <>
        <div className="cart-list">
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <div><strong>{item.name}</strong><span>{item.specs}</span></div>
              <div className="quantity-control"><button onClick={() => updateQuantity(item.id, -1)}>−</button><span>{item.quantity}</span><button onClick={() => updateQuantity(item.id, 1)}>+</button></div>
              <strong>₹{(item.price * item.quantity).toLocaleString("en-IN")}</strong>
            </div>
          ))}
        </div>
        <div className="order-summary"><span>Total <strong>₹{total.toLocaleString("en-IN")}</strong></span><button onClick={() => setPage("checkout")}>Proceed to checkout</button></div>
      </>}
    </section>
  );
}

function Checkout({ cart, setPage }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return (
    <section className="page-section narrow-page">
      <p className="eyebrow">Almost there</p>
      <h1>Checkout</h1>
      {cart.length === 0 ? <div className="empty-state"><p>Add an item before checking out.</p><button onClick={() => setPage("shop")}>Shop products</button></div> :
        <div className="checkout-card"><h2>Order summary</h2><p>{cart.reduce((count, item) => count + item.quantity, 0)} item(s) · Free delivery</p><div><span>Amount to pay</span><strong>₹{total.toLocaleString("en-IN")}</strong></div><button onClick={() => alert("Order placed successfully!")}>Place order</button></div>}
    </section>
  );
}

function App() {
  const [page, setPage] = useState("shop");
  const [cart, setCart] = useState([]);
  const addToCart = (product) => setCart((current) => {
    const found = current.find((item) => item.id === product.id);
    return found ? current.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item) : [...current, { ...product, quantity: 1 }];
  });
  const updateQuantity = (id, change) => setCart((current) => current.map((item) => item.id === id ? { ...item, quantity: item.quantity + change } : item).filter((item) => item.quantity > 0));
  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);
  const content = page === "shop" ? <Home products={products} addToCart={addToCart} setPage={setPage} /> : page === "categories" ? <Categories setPage={setPage} /> : page === "cart" ? <Cart cart={cart} updateQuantity={updateQuantity} setPage={setPage} /> : <Checkout cart={cart} setPage={setPage} />;

  return <div className="app-shell"><header><button className="brand" onClick={() => setPage("shop")}>Shoppping<span>.com</span></button><nav>{[["shop", "Shop"], ["categories", "Categories"], ["cart", `Cart (${cartCount})`], ["checkout", "Checkout"]].map(([id, label]) => <button className={page === id ? "active" : ""} onClick={() => setPage(id)} key={id}>{label}</button>)}</nav></header><main>{content}</main></div>;
}

export default App;

