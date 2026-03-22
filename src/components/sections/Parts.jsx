import React from 'react';

const parts = [
  { icon: 'smartphone', title: 'Display', desc: 'High-quality screen replacements that work just like your original phone display.' },
  { icon: 'battery_full', title: 'Battery', desc: 'Safe and long-lasting mobile batteries to fix fast draining and swelling issues.' },
  { icon: 'power_plug', title: 'Charger', desc: 'Durable and fast charging adapters to keep your phone safely powered up.' },
  { icon: 'phone_android', title: 'Back Panel', desc: 'New back glass and panels to make your broken smartphone look brand new.' },
  { icon: 'cable', title: 'Charging Port', desc: 'Reliable charging flex cables and port replacements for loose connections.' },
  { icon: 'shield', title: 'Covers', desc: 'Strong protective cases and beautiful covers to keep your device safe from falls.' }
];

export default function Parts() {
  return (
    <section id="parts" className="py-24 px-6 bg-[#131313]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-3">Genuine Spares</p>
          <h2 className="text-4xl md:text-5xl font-black text-white">Mobile Parts</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {parts.map((part, idx) => (
            <div key={idx} className="bg-gray-900 border border-gray-800 p-8 rounded-2xl hover:border-cyan-500/40 shadow-xl hover:shadow-[0_0_20px_rgba(0,212,255,0.1)] hover:-translate-y-1 transition-all group cursor-pointer relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-[#1a1a1a] group-hover:bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6 transition-colors border border-gray-800 group-hover:border-cyan-500/30">
                  <span className="material-symbols-outlined text-cyan-400 text-3xl">{part.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{part.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{part.desc}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="/store" className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl font-bold uppercase tracking-wider hover:shadow-[0_0_30px_rgba(249,115,22,0.3)] hover:-translate-y-1 transition-all">
            <span className="material-symbols-outlined text-xl">storefront</span>
            Shop All Spare Parts
          </a>
        </div>
      </div>
    </section>
  );
}
