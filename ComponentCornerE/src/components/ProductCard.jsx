function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.name}
        className="product-image"
      />

      <div className="product-details">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>${product.price}</p>

        <button onClick={() => onAddToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard
