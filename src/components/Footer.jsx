import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-700 mt-8">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-3">

        {/* Left side */}
        <div className="text-sm" style={{ fontFamily: "inherit" }}>
          © {new Date().getFullYear()} Njoroge's Tyde Watch Site
        </div>

        {/* Right side */}
        <div
          className="text-xs sm:text-sm flex flex-col sm:flex-row gap-2"
          style={{ fontFamily: "inherit" }}
        >
          <span>Built with ❤️</span>
          <span className="hidden sm:block">·</span>
          <span>Offline-ready</span>
          <span className="hidden sm:block">·</span>
          <span>IndexedDB</span>
        </div>

      </div>
    </footer>
  );
}
