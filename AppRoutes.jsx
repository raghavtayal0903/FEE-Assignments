import { Route, Routes } from 'react-router'
import Home from './components/Home'
import Contact from './components/Contact'
import Products from './components/Products'
import Cart from './components/Cart'

export default function AppRoutes({ cartItems, onAddToCart, onRemoveFromCart, onDecreaseQuantity }) {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products cartItems={cartItems} cartCount={cartItems.reduce((total, item) => total + item.quantity, 0)} onAddToCart={onAddToCart} onDecreaseQuantity={onDecreaseQuantity} />} />
      <Route path="/cart" element={<Cart cartItems={cartItems} onRemoveFromCart={onRemoveFromCart} />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Home />} />
    </Routes>
  )
}
