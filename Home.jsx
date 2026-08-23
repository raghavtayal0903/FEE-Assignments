import { useState } from "react";
import Productcard from "./productcard";

export const products = [
  { id: 1, name: "Samsung Galaxy S25", price: 100000, specs: "12GB / 512GB", stock: 5, category: "Phone", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=85" },
  { id: 2, name: "iPhone 17", price: 120000, specs: "12GB / 256GB", stock: 8, category: "Phone", image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=900&q=85" },
  { id: 3, name: "Google Pixel 10", price: 85000, specs: "12GB / 256GB", stock: 12, category: "Phone", image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?auto=format&fit=crop&w=900&q=85" },
  { id: 4, name: "OnePlus 14", price: 75000, specs: "16GB / 512GB", stock: 7, category: "Phone", image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=900&q=85" },
  { id: 5, name: "Xiaomi 16 Pro", price: 68000, specs: "12GB / 512GB", stock: 10, category: "Phone", image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=85" },
  { id: 6, name: "Nothing Phone 4", price: 55000, specs: "12GB / 256GB", stock: 15, category: "Phone", image: "https://images.unsplash.com/photo-1605236453806-6ff36851218e?auto=format&fit=crop&w=900&q=85" },
  { id: 7, name: "MacBook Air M4", price: 115000, specs: "16GB / 512GB", stock: 6, category: "Laptop", image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=900&q=85" },
  { id: 8, name: "ASUS Zenbook 14", price: 89000, specs: "16GB / 1TB", stock: 9, category: "Laptop", image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=85" },
  { id: 9, name: "Sony WH-1000XM6", price: 32000, specs: "Wireless ANC", stock: 20, category: "Audio", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=85" },
  { id: 10, name: "AirPods Pro 3", price: 25000, specs: "USB-C / ANC", stock: 18, category: "Audio", image: "https://images.unsplash.com/photo-1606741965429-9c616a2b1d1c?auto=format&fit=crop&w=900&q=85" },
];

function Home({ products, addToCart, setPage }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", ...new Set(products.map((product) => product.category))];
  const visibleProducts = selectedCategory === "All"
    ? products
    : products.filter((product) => product.category === selectedCategory);

  return <>
    <section className="shop-hero">
      <div>
        <p className="eyebrow">Tech, selected for you</p>
        <h1>Upgrade your everyday.</h1>
        <p>Premium devices, simple shopping, and delivery on us.</p>
        <button onClick={() => setPage("categories")}>Browse categories</button>
      </div>
      <span className="hero-orb">*</span>
    </section>
    <section className="catalog">
      <div className="section-heading"><div><p className="eyebrow">Latest arrivals</p><h2>Shop products</h2></div><span>{visibleProducts.length} products</span></div>
      <div className="filter-buttons">
        {categories.map((category) => <button key={category} className={selectedCategory === category ? "selected" : ""} onClick={() => setSelectedCategory(category)}>{category}</button>)}
      </div>
      <div className="product-grid">{visibleProducts.map((product) => <Productcard key={product.id} {...product} addToCart={addToCart} />)}</div>
    </section>
  </>;
}

export default Home;
