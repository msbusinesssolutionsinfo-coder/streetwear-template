import React from 'react';
import { FiShoppingBag } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Navbar = ({ cartItems, openCart }) => {
  return (
    <nav className="bg-zinc-950/50 backdrop-blur-lg sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl sm:text-3xl font-black tracking-tighter text-white">VELOCITY.</h1>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#" className="text-zinc-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">New Drops</a>
              <a href="#" className="text-zinc-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Men</a>
              <a href="#" className="text-zinc-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Women</a>
              <a href="#" className="text-zinc-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Sale</a>
            </div>
          </div>

          {/* Cart Icon */}
          <div className="flex items-center">
            <motion.button 
              onClick={openCart} 
              className="relative text-zinc-300 hover:text-white"
              whileTap={{ scale: 0.9 }}
            >
              <FiShoppingBag size={24} />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                  {cartItems.length}
                </span>
              )}
            </motion.button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;