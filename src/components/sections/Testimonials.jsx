import React from 'react';

const reviews = [
  { name: 'Happy Customer', text: 'My phone screen was completely broken. They fixed it very quickly and the price was very genuine. Great service!', rating: 5 },
  { name: 'Satisfied Client', text: 'Changed my battery here. My phone works perfectly fine now and the battery backup is amazing. Highly recommended.', rating: 5 },
  { name: 'Local Guide', text: 'Very polite technician and excellent repair quality. They told me the exact problem and fixed my charging port in front of me.', rating: 5 },
];

export default function Testimonials() {
  return (
    <section className="py-32 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-3">Customer Feedback</p>
          <h2 className="text-4xl md:text-5xl font-black text-white">Trusted by Many</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {reviews.map((r, i) => (
            <div key={i} className="p-10 bg-gray-900 rounded-3xl border border-gray-800 shadow-xl hover:-translate-y-2 transition-transform duration-300">
              <div className="flex text-orange-500 mb-6">
                {[...Array(r.rating)].map((_, idx) => (
                  <span key={idx} className="material-symbols-outlined text-xl">star</span>
                ))}
              </div>
              <p className="text-gray-300 text-lg italic mb-8 leading-relaxed">"{r.text}"</p>
              <p className="font-bold text-cyan-400 tracking-wide">— {r.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
