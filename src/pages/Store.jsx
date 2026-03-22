import React, { useState } from 'react';
import { products, categories, brands } from '../data/products';

export default function Store() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedBrand, setSelectedBrand] = useState('All Brands');

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase()) || 
                          product.model.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesBrand = selectedBrand === 'All Brands' || product.brand === selectedBrand;
    return matchesSearch && matchesCategory && matchesBrand;
  });

  const handleWhatsAppOrder = (productName) => {
    const message = encodeURIComponent(`Hello! I would like to inquire about ordering: ${productName}. Is it available?`);
    window.open(`https://wa.me/919214868470?text=${message}`, '_blank');
  };

  return (
    <main className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Spare <span className="text-orange-500">Parts Store</span></h1>
          <p className="text-gray-400 max-w-2xl mx-auto">Find premium quality spare parts for all major smartphone brands.</p>
        </div>

        {/* Filter Section */}
        <div className="bg-[#1a1a1a] p-6 rounded-2xl border border-gray-800 mb-12 flex flex-col gap-6">
          <div className="relative">
            <span className="material-symbols-outlined absolute left-4 top-3.5 text-gray-500">search</span>
            <input 
              type="text" 
              placeholder="Search parts by name or model..." 
              className="w-full bg-[#222] border border-gray-700 text-white pl-12 pr-4 py-3 rounded-xl focus:outline-none focus:border-orange-500 transition-colors"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-4">
            {/* Category Filter */}
            <div className="flex gap-2 overflow-x-auto pb-2 [&::-webkit-scrollbar]:hidden">
              {categories.map(c => (
                <button
                  key={c}
                  onClick={() => setSelectedCategory(c)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors
                    ${selectedCategory === c 
                      ? 'bg-orange-500 text-white border-orange-500' 
                      : 'bg-[#222] text-gray-400 hover:text-white hover:bg-gray-800 border-gray-700 hover:border-orange-500/50'} border`}
                >
                  {c}
                </button>
              ))}
            </div>
            
            {/* Brand Filter */}
            <div className="flex gap-2 overflow-x-auto pb-2 [&::-webkit-scrollbar]:hidden">
              {brands.map(b => (
                <button
                  key={b}
                  onClick={() => setSelectedBrand(b)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors
                    ${selectedBrand === b 
                      ? 'bg-cyan-500 text-white border-cyan-500' 
                      : 'bg-[#222] text-gray-400 hover:text-white hover:bg-gray-800 border-gray-700 hover:border-cyan-500/50'} border`}
                >
                  {b}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center text-gray-400 py-12">
            <span className="material-symbols-outlined text-6xl text-gray-600 mb-4 block">inventory_2</span>
            <p className="text-xl">No products found matching your criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map(product => (
              <div key={product.id} className="bg-[#1a1a1a] border border-gray-800 rounded-2xl overflow-hidden hover:border-orange-500/30 transition-all group">
                <div className="relative h-48 overflow-hidden bg-[#222]">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center backdrop-blur-sm">
                      <span className="text-red-500 font-bold px-4 py-2 border border-red-500/50 rounded-lg bg-red-500/10">Out of Stock</span>
                    </div>
                  )}
                  <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-orange-400 border border-orange-500/20">
                    {product.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-white leading-tight">{product.name}</h3>
                  </div>
                  <p className="text-sm text-gray-400 mb-4">{product.brand} {product.model}</p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-bold text-cyan-400">₹{product.price.toLocaleString('en-IN')}</span>
                    {product.inStock ? (
                      <span className="text-xs text-green-400 bg-green-400/10 px-2 py-1 rounded">In Stock</span>
                    ) : (
                      <span className="text-xs text-red-400 bg-red-400/10 px-2 py-1 rounded">Out of Stock</span>
                    )}
                  </div>
                  
                  <button 
                    onClick={() => handleWhatsAppOrder(product.name)}
                    disabled={!product.inStock}
                    className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm uppercase tracking-wider transition-all
                      ${product.inStock 
                        ? 'bg-[#25D366] hover:bg-[#1da851] text-white shadow-[0_5px_15px_rgba(37,211,102,0.3)]' 
                        : 'bg-gray-800 text-gray-500 cursor-not-allowed'}`}
                  >
                    <span className="material-symbols-outlined text-lg">chat</span>
                    Order on WhatsApp
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
