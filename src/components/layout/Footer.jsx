import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black w-full py-16 px-6 border-t border-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-8">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-cyan-500 text-3xl">bolt</span>
          <span className="text-xl font-bold text-cyan-400 uppercase tracking-widest font-sans">
            Hindustan <span className="text-gray-300">Mobile</span>
          </span>
        </div>
        <p className="text-sm text-gray-500 max-w-xl leading-relaxed">
          © 2026 Hindustan Mobile Repairing Center. All rights reserved.<br/>
          Mobile Repair & Genuine Parts | Kota, Rajasthan
        </p>
        <div className="flex flex-wrap justify-center gap-10">
          <a className="text-gray-500 hover:text-cyan-400 transition-colors text-xs uppercase tracking-[0.2em] font-bold" href="#">Terms of Service</a>
          <a className="text-gray-500 hover:text-cyan-400 transition-colors text-xs uppercase tracking-[0.2em] font-bold" href="#">Privacy Protocol</a>
          <a className="text-gray-500 hover:text-cyan-400 transition-colors text-xs uppercase tracking-[0.2em] font-bold" href="#">Warranty Shield</a>
        </div>
      </div>
    </footer>
  );
}
