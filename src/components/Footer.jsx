import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-blue-400 text-white shadow-inner mt-6">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
        
        {/* Left side */}
        <div className="font-handwritten text-sm sm:text-base">
          © {new Date().getFullYear()} Njoroge's Tyde Watch Site
        </div>

        {/* Right side */}
        <div className="font-slanted text-xs sm:text-sm flex flex-col sm:flex-row gap-1 sm:gap-2 mt-1 md:mt-0">
          <span>Built with ❤️</span>
          <span>· Offline-ready</span>
          <span>· IndexedDB</span>
        </div>

      </div>
    </footer>
  );
}
