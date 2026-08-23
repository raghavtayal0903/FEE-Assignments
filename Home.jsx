import { useState } from 'react'
import './App.css'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <main className="counter-page">
      <section className="counter-card" aria-labelledby="counter-title">
        <h1 id="counter-title">Counter</h1>
        <p className="count-value" aria-live="polite">{count}</p>
        <div className="counter-actions">
          <button
            type="button"
            onClick={() => setCount((value) => Math.max(0, value - 1))}
          >
            −
          </button>
          <button type="button" onClick={() => setCount((value) => value + 1)}>
            +
          </button>
        </div>
      </section>
    </main>
  )
}

export default Home
