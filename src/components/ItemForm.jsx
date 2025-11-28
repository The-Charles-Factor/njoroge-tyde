import React, { useState } from "react";

export default function Navbar({ onAddItemClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 border-b border-gray-800 text-white shadow-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center h-16">

          {/* Brand */}
          <div className="flex-shrink-0 flex items-center mx-auto md:mx-0">
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
              Njoroge
            </h1>
          </div>

          {/* Desktop Action */}
          <div className="hidden md:flex">
            <button
              onClick={onAddItemClick}  // <--- call parent callback
              className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-semibold shadow-lg 
                hover:bg-blue-500 hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-150 
                border border-blue-500/40"
            >
              Add Item
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden absolute right-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="focus:outline-none p-2 rounded-lg bg-gray-800 hover:bg-gray-700 
                border border-gray-700 transition"
            >
              <svg
                className="w-6 h-6 text-gray-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 border border-gray-700 rounded-lg mt-2 shadow-2xl">
            <div className="px-2 pt-2 pb-3">
              <button
                onClick={() => { 
                  onAddItemClick(); // <--- call parent callback
                  setIsMenuOpen(false); 
                }}
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold text-base 
                  shadow-lg hover:bg-blue-500 hover:shadow-xl transform hover:scale-105 
                  transition-all duration-150"
              >
                Add New Item
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
