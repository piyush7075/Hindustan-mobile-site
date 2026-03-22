import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#131313]/90 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-center md:justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-cyan-500 text-3xl">bolt</span>
          <span className="text-xl font-bold text-cyan-400 uppercase tracking-widest font-sans">
            Hindustan <span className="text-white">Mobile</span>
          </span>
        </div>
        <div className="hidden md:flex gap-8 items-center">
          <a href="#" className="text-gray-200 font-medium hover:text-cyan-400 transition-colors">Home</a>
          <a href="#services" className="text-gray-400 hover:text-cyan-400 transition-colors">Services</a>
          <a href="#parts" className="text-gray-400 hover:text-cyan-400 transition-colors">Parts</a>
          <a href="#contact" className="text-gray-400 hover:text-cyan-400 transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
}
