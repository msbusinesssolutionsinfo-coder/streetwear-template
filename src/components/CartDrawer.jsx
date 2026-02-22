import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiShoppingBag } from 'react-icons/fi';

const CartDrawer = ({ isOpen, onClose, cartItems, clearCart }) => {
  const [isCheckoutComplete, setIsCheckoutComplete] = useState(false);

  const subtotal = cartItems.reduce((total, item) => {
    const price = Number(item.price.replace(/[^0-9.-]+/g,""));
    return total + price;
  }, 0);

  const handleCheckout = () => {
    setIsCheckoutComplete(true);
  };

  const handleReturnToShop = () => {
    clearCart();
    onClose();
  };

  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => {
        setIsCheckoutComplete(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          />
          <motion.div
            className="fixed top-0 right-0 h-full w-full sm:w-96 bg-zinc-950 text-white z-50 flex flex-col"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <div className="flex items-center justify-between p-6 border-b border-zinc-800">
              <h2 className="text-xl font-bold uppercase tracking-tighter">{isCheckoutComplete ? 'Order Confirmed' : 'Your Cart'}</h2>
              <button onClick={onClose} className="text-zinc-400 hover:text-white">
                <FiX size={24} />
              </button>
            </div>

            <div className="flex-grow flex flex-col overflow-y-auto">
              <AnimatePresence mode="wait">
                {!isCheckoutComplete ? (
                  <motion.div
                    key="cart-contents"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col flex-grow"
                  >
                    <div className="p-6 flex-grow">
                      {cartItems.length > 0 ? (
                        <ul className="space-y-4">
                          {cartItems.map((item) => (
                            <li key={item.id} className="flex items-center space-x-4">
                              <div className="w-20 h-20 bg-zinc-800 rounded-md flex-shrink-0">
                                <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover rounded-md" />
                              </div>
                              <div className="flex-grow">
                                <p className="font-semibold text-base">{item.name}</p>
                                <p className="text-zinc-400">{item.price}</p>
                              </div>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <div className="flex flex-col items-center justify-center h-full text-center">
                          <FiShoppingBag size={48} className="text-zinc-600 mb-4" />
                          <h3 className="text-xl font-bold">Your cart is empty.</h3>
                          <p className="text-zinc-400 max-w-xs">Looks like you haven't added anything to your cart yet.</p>
                        </div>
                      )}
                    </div>

                    {cartItems.length > 0 && (
                      <div className="p-6 border-t border-zinc-800">
                        <div className="flex justify-between items-center mb-4">
                          <span className="text-zinc-400 text-lg">Subtotal</span>
                          <span className="text-green-500 font-bold text-xl">${subtotal.toFixed(2)}</span>
                        </div>
                        <button onClick={handleCheckout} className="w-full bg-white text-black py-4 px-4 rounded-md font-bold uppercase tracking-wider hover:bg-zinc-800 hover:text-white transition-all">
                          Checkout
                        </button>
                      </div>
                    )}
                  </motion.div>
                ) : (
                  <motion.div
                    key="success-message"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center h-full p-6 text-center"
                  >
                    <h3 className="text-xl font-bold uppercase mb-4">THANK YOU. YOUR ORDER IS BEING PROCESSED.</h3>
                    <button onClick={handleReturnToShop} className="w-full bg-red-500 text-white py-3 px-4 rounded-md font-bold uppercase tracking-wider hover:bg-red-600 transition-colors">
                      Return to Shop
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;