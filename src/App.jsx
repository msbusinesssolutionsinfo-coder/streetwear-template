import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ProductGrid from './components/ProductGrid';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    setCartItems(prevItems => [...prevItems, product]);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  return (
    <div className="min-h-screen bg-zinc-900">
      <Navbar cartItems={cartItems} openCart={openCart} />
      
      <div className="flex flex-col items-center justify-center text-center py-20">
        {/* A sleek, glowing badge */}
        <div className="mb-4 px-4 py-1 rounded-full border border-zinc-800 bg-zinc-900 text-xs font-bold tracking-widest text-zinc-400 uppercase">
          V 1.0 — Master Template
        </div>

        {/* The massive streetwear headline */}
        <h1 className="text-6xl font-black tracking-tighter text-white mb-6">
          VELOCITY <span className="text-red-500">KICKS.</span>
        </h1>

        <p className="text-zinc-400 text-lg mb-10 max-w-md text-center">
          Premium streetwear and limited edition sneakers. Designed for the bold.
        </p>

        {/* The call to action button */}
        <button className="bg-white text-black px-8 py-4 font-bold uppercase tracking-wider hover:bg-zinc-200 transition-colors">
          Shop Collection
        </button>
      </div>

      <ProductGrid addToCart={addToCart} />

      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={closeCart} 
        cartItems={cartItems} 
        clearCart={clearCart} 
      />
      <Footer />
      <ScrollToTop />
    </div>
  )
}