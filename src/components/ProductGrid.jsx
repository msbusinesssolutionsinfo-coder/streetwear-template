import React from 'react';
import { motion } from 'framer-motion';

const products = [
  {
    id: 1,
    name: 'Heavyweight Acid Wash Hoodie',
    price: '$85',
    imageUrl: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=600',
  },
  {
    id: 2,
    name: 'Tactical Cargo Pants',
    price: '$120',
    imageUrl: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=600',
  },
  {
    id: 3,
    name: 'Oversized Vintage Tee',
    price: '$65',
    imageUrl: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=600',
  },
  {
    id: 4,
    name: 'Chunky Platform Sneakers',
    price: '$150',
    imageUrl: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=600',
  },
];

const ProductCard = ({ product, addToCart }) => {
    return (
        <motion.div 
            className="bg-zinc-800 rounded-lg overflow-hidden group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <div className="overflow-hidden">
                <img 
                    src={product.imageUrl} 
                    alt={product.name} 
                    className="w-full h-80 object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-500"
                />
            </div>
            <div className="p-4">
                <h3 className="text-white text-lg font-semibold">{product.name}</h3>
                <p className="text-zinc-400 mt-1">{product.price}</p>
                <motion.button 
                    onClick={() => addToCart(product)}
                    className="mt-4 w-full bg-red-500 text-white py-2 px-4 rounded-md font-bold uppercase tracking-wider hover:bg-red-600 transition-colors"
                    whileTap={{ scale: 0.95 }}
                >
                    Add to Cart
                </motion.button>
            </div>
        </motion.div>
    )
}

const ProductGrid = ({ addToCart }) => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-baseline justify-between mb-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-thin tracking-widest text-white uppercase">
              New Drops
            </h2>
            <a href="#" className="text-red-500 hover:text-red-400 font-bold whitespace-nowrap">
                View All
            </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;