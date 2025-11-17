import React, { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-800 via-blue-600 to-blue-800 text-white shadow-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Brand - Centered on mobile */}
          <div className="flex-shrink-0 flex items-center mx-auto md:mx-0">
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
              Njoroge
            </h1>
          </div>

          {/* Desktop Action Button */}
          <div className="hidden md:flex">
            <button className="bg-white text-blue-700 px-6 py-2.5 rounded-lg font-semibold shadow-lg hover:bg-gray-50 hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 border border-blue-200">
              Add Item
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden absolute right-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="focus:outline-none p-2 rounded-lg hover:bg-blue-700 transition bg-blue-600/50"
            >
              <svg
                className="w-6 h-6 text-white"
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

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-blue-700/95 backdrop-blur-sm rounded-lg mt-2 shadow-2xl border border-blue-500">
            <div className="px-2 pt-2 pb-3">
              <div className="pb-1">
                <button 
                  className="w-full bg-white text-blue-700 px-4 py-3 rounded-lg font-semibold text-base shadow-lg hover:bg-gray-50 transition transform hover:scale-105"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Add New Item
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}