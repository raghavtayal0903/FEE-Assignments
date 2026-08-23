function Productcard({ name, price, specs, stock, category, image, addToCart, ...product }) {
  return (
    <article className="product-card">
      <div className="product-image">
        <img src={image} alt={name} />
        <small>{category}</small>
      </div>

      <div className="product-details">
        <p className="stock">{stock} in stock</p>
        <h3>{name}</h3>
        <p>{specs}</p>

        <div className="card-footer">
          <strong>Rs. {price.toLocaleString("en-IN")}</strong>
          <button
            onClick={() =>
              addToCart({ ...product, name, price, specs, stock, category, image })
            }
          >
            Add to cart
          </button>
        </div>
      </div>
    </article>
  );
}

export default Productcard;
