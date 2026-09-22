import { useState } from 'react'
import { Link } from 'react-router'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="navbar">
      <span className="brand">
        Online Store
      </span>

      <button
        className="menu-toggle"
        type="button"
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span /><span /><span />
      </button>

      <nav className={isOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/products" onClick={() => setIsOpen(false)}>Products</Link>
        <Link to="/cart" onClick={() => setIsOpen(false)}>Cart</Link>
        <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
      </nav>
    </header>
  )
}
