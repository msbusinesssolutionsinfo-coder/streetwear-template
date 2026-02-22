import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-zinc-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Newsletter */}
          <div className="md:col-span-1">
            <h2 className="text-2xl font-black tracking-tighter text-white mb-4">VELOCITY.</h2>
            <p className="mb-4">Get the latest drops and deals straight to your inbox.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="bg-zinc-800 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-red-500 w-full"
              />
              <button className="bg-red-500 text-white font-bold uppercase tracking-wider px-4 py-2 rounded-r-md hover:bg-red-600">
                Join the cult
              </button>
            </form>
          </div>

          {/* Links */}
          <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white font-bold mb-4">Shop</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">New Arrivals</a></li>
                <li><a href="#" className="hover:text-white">Apparel</a></li>
                <li><a href="#" className="hover:text-white">Sneakers</a></li>
                <li><a href="#" className="hover:text-white">Collections</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Press</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Terms</a></li>
                <li><a href="#" className="hover:text-white">Privacy</a></li>
                <li><a href="#" className="hover:text-white">Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-zinc-800 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} VELOCITY KICKS. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
