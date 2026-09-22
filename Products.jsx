import { useEffect, useState } from 'react'

export default function Products({ cartItems, cartCount, onAddToCart, onDecreaseQuantity }) {
  const [products, setProducts] = useState([])
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    const controller = new AbortController()
    async function loadProducts() {
      try {
        const categories = ['laptops', 'smartphones', 'mobile-accessories']
        const responses = await Promise.all(
          categories.map((category) => fetch(
            `https://dummyjson.com/products/category/${category}?limit=4`,
            { signal: controller.signal },
          )),
        )

        if (responses.some((response) => !response.ok)) {
          throw new Error('Could not load products')
        }

        const data = await Promise.all(responses.map((response) => response.json()))
        setProducts(data.flatMap((category) => category.products))
        setStatus('success')
      } catch (error) {
        if (error.name !== 'AbortError') setStatus('error')
      }
    }
    loadProducts()
    return () => controller.abort()
  }, [])

  if (status === 'loading') return <p className="status">Loading products...</p>
  if (status === 'error') return <p className="status">Products could not be loaded. Please try again.</p>

  return (
    <section className="products-page">
      <p className="page-label">DummyJSON API</p>
      <h1>Tech picks</h1>
      <p className="page-intro">Browse laptops, smartphones, and mobile accessories loaded from a public dummy API.</p>
      <p className="cart-count">Cart: {cartCount} item{cartCount !== 1 ? 's' : ''}</p>

      <div className="product-grid">
        {products.map((product) => (
          <article className="product-card" key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <div className="product-info">
              <p className="product-category">{product.category.replace('-', ' ')}</p>
              <h2>{product.title}</h2>
              <p className="product-price">${product.price}</p>
              <div className="cart-controls">
                <button
                  type="button"
                  className="quantity-button"
                  onClick={() => onDecreaseQuantity(product.id)}
                  disabled={!cartItems.some((item) => item.id === product.id)}
                  aria-label={`Decrease ${product.title} quantity`}
                >
                  -
                </button>
                <button type="button" className="add-cart" onClick={() => onAddToCart(product)}>
                  Add to cart
                </button>
                <button
                  type="button"
                  className="quantity-button"
                  onClick={() => onAddToCart(product)}
                  aria-label={`Increase ${product.title} quantity`}
                >
                  +
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
