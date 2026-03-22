import React from 'react';

const reasons = [
  { icon: 'speed', title: 'Fast Repair', desc: 'Quick and reliable repair service. Most mobile issues fixed perfectly on the same day.' },
  { icon: 'verified', title: 'Genuine Parts', desc: 'We only use high-quality and genuine spare parts for your complete peace of mind.' },
  { icon: 'payments', title: 'Affordable Price', desc: 'Honest pricing with zero hidden charges. Get the best repair value in Kota.' },
  { icon: 'handshake', title: 'Trusted Service', desc: 'Thousands of satisfied customers across Kota trust us with their devices.' },
  { icon: 'engineering', title: 'Experienced Technician', desc: 'Expert staff with years of experience repairing all major smartphone faults.' },
  { icon: 'devices', title: 'Multi-Brand Support', desc: 'We repair Apple, Samsung, Vivo, Oppo, Xiaomi, OnePlus, and all other brands.' }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-3">Our Promise</p>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
            Why Choose <span className="text-cyan-400">Us</span>
          </h2>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <div key={i} className="bg-gray-900 border border-gray-800 p-8 rounded-2xl flex gap-5 hover:border-orange-500/30 transition-colors">
              <span className="material-symbols-outlined text-orange-500 text-4xl shrink-0">{r.icon}</span>
              <div>
                <h4 className="font-bold text-white text-lg mb-2">{r.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
