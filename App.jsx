import Navbar from './components/Navbar'
import './App.css'
import AppRoutes from './AppRoutes'
import { useState } from 'react'

function App() {
  const [cartItems, setCartItems] = useState([])

  function addToCart(product) {
    setCartItems((items) => {
      const itemInCart = items.find((item) => item.id === product.id)
      if (itemInCart) {
        return items.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
      }
      return [...items, { ...product, quantity: 1 }]
    })
  }

  function removeFromCart(productId) {
    setCartItems((items) => items.filter((item) => item.id !== productId))
  }

  function decreaseQuantity(productId) {
    setCartItems((items) => items.flatMap((item) => {
      if (item.id !== productId) return [item]
      return item.quantity > 1 ? [{ ...item, quantity: item.quantity - 1 }] : []
    }))
  }

  return (
    <>
      <Navbar />
      <AppRoutes
        cartItems={cartItems}
        onAddToCart={addToCart}
        onRemoveFromCart={removeFromCart}
        onDecreaseQuantity={decreaseQuantity}
      />
    </>
  )
}

export default App
