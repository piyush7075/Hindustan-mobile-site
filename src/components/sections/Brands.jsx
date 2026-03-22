import React from 'react';

export default function Brands() {
  const brands = ['APPLE', 'SAMSUNG', 'GOOGLE', 'XIAOMI', 'VIVO', 'OPPO'];
  return (
    <section className="py-20 bg-black border-y border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-gray-500 font-bold mb-12 tracking-[0.3em] uppercase text-xs">We Repair All Major Brands</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 items-center opacity-40 hover:opacity-100 transition-opacity duration-700">
          {brands.map((b, i) => (
            <div key={i} className="flex justify-center text-2xl font-black text-white tracking-widest uppercase cursor-default hover:text-cyan-400 transition-colors">
              {b}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
