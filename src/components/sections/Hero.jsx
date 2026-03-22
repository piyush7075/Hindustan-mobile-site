import React from 'react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#131313]">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[100px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left z-10 mt-10 lg:mt-0">
          <div className="inline-block py-1.5 px-4 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-bold tracking-widest uppercase mb-6 shadow-[0_0_15px_rgba(0,212,255,0.1)]">
            Trusted Mobile Repair Shop
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight tracking-tight">
            Hindustan Mobile <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 text-3xl md:text-5xl lg:text-6xl block mt-4">
              Mobile Repair & Genuine Parts
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Display change, battery replacement, charging issue, speaker problem, software update aur mobile parts ek hi jagah.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <a href="tel:+919214868470" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-xl shadow-[0_5px_20px_rgba(249,115,22,0.4)] transition-all hover:-translate-y-1 flex items-center justify-center gap-2 cursor-pointer">
              <span className="material-symbols-outlined">call</span>
              Call Now
            </a>
            <a href="https://wa.me/919214868470" target="_blank" rel="noopener noreferrer" className="bg-gray-900 hover:bg-gray-800 text-cyan-400 border border-gray-700 hover:border-cyan-500/50 font-bold py-4 px-8 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer">
              <span className="material-symbols-outlined">chat</span>
              WhatsApp Now
            </a>
          </div>
        </div>
        
        <div className="relative hidden lg:block z-10">
          {/* Aesthetic geometric representation of a phone/chip */}
          <div className="relative w-full max-w-[320px] mx-auto aspect-[1/2] bg-gray-900 rounded-[3rem] border-8 border-[#0a0a0a] p-4 shadow-2xl overflow-hidden hover:-translate-y-2 transition-transform duration-500">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjMWYyOTM3Ij48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDBMMCA0TDQgNEw0IDBaIiBmaWxsPSIjMTExODI3Ij48L3BhdGg+Cjwvc3ZnPg==')] opacity-30"></div>
            <div className="absolute top-0 w-full h-1/2 bg-gradient-to-b from-cyan-500/10 to-transparent"></div>
            
            <div className="absolute top-6 left-6 w-20 h-20 bg-black rounded-3xl border border-gray-800 p-2 grid grid-cols-2 gap-2">
              <div className="bg-gray-900 rounded-full border border-gray-700 shadow-inner"></div>
              <div className="bg-gray-900 rounded-full border border-gray-700 shadow-inner"></div>
              <div className="bg-gray-900 rounded-full border border-gray-700 shadow-inner"></div>
            </div>
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-black border border-cyan-500/30 rounded-2xl flex items-center justify-center shadow-[0_0_40px_rgba(0,212,255,0.15)] backdrop-blur-sm">
              <span className="material-symbols-outlined text-cyan-400 text-5xl animate-pulse">memory</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
