import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import ProductCard from './components/ProductCard'
import CartItem from './components/CartItem'
import Footer from './components/Footer'

function App() {
  const [cart, setCart] = useState([])

  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 99.99,
      image: "https://placehold.co/600x400",
      description: "Premium noise-cancelling headphones with 30-hour battery life"
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 249.99,
      image: "https://placehold.co/600x400",
      description: "Fitness tracker with heart rate monitor and GPS"
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      price: 79.99,
      image: "https://placehold.co/600x400",
      description: "Portable waterproof speaker with 360-degree sound"
    },
    {
      id: 4,
      name: "Laptop Stand",
      price: 49.99,
      image: "https://placehold.co/600x400",
      description: "Ergonomic aluminum stand for laptops and tablets"
    },
    {
      id: 5,
      name: "Webcam",
      price: 129.99,
      image: "https://placehold.co/600x400",
      description: "4K webcam with auto-focus and noise reduction"
    },
    {
      id: 6,
      name: "Mechanical Keyboard",
      price: 159.99,
      image: "https://placehold.co/600x400",
      description: "RGB backlit keyboard with custom switches"
    }
  ]

  // ✅ Add to cart
  const addToCart = (product) => {
    console.log('Added to cart:', product)
    setCart(prevCart => [...prevCart, product])
  }

  // ✅ Remove from cart (filter out by id)
  const removeFromCart = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id))
  }

  // ✅ Cart total (sum prices using reduce)
  const cartTotal = cart.reduce((total, item) => total + item.price, 0)

  return (
    <div className="app">
      <Header cartCount={cart.length} />

      <Hero
        title="Tech You’ll Love"
        subtitle="Discover the latest gadgets at unbeatable prices."
        ctaText="Shop Now"
        image="https://placehold.co/1200x400/667eea/ffffff?text=Shop+Tech"
      />

      <h2>Featured Products</h2>

      <div className="product-list">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={addToCart}
          />
        ))}
      </div>

      {/* 🛒 Cart Section */}
      <section className="cart-section">
        <h2>Your Cart</h2>

        {/* ✅ Empty cart conditional rendering */}
        {cart.length === 0 ? (
          <p className="empty-cart">Your cart is empty. Add some items!</p>
        ) : (
          <>
            <div className="cart-items">
              {cart.map(item => (
                <CartItem
                  key={item.id}
                  item={item}
                  onRemove={removeFromCart}
                />
              ))}
            </div>

            {/* ✅ Display total */}
            <div className="cart-total">
              <strong>Total:</strong> ${cartTotal.toFixed(2)}
            </div>
          </>
        )}
      </section>

      <Footer
        storeName="Tech Store"
        address="123 Innovation Drive, Tech City, USA"
        email="support@techstore.com"
        phone="555-123-4567"
      />
    </div>
  )
}

export default App
