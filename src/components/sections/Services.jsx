import React from 'react';

const services = [
  { icon: 'smartphone', title: 'Display Replacement', desc: 'High-quality screen replacements restoring original touch response and true colors.' },
  { icon: 'battery_charging_full', title: 'Battery Replacement', desc: 'Genuine high-capacity batteries to bring back all-day power and reliability.' },
  { icon: 'cable', title: 'Charging Repair', desc: 'Fixing loose ports and charging IC faults so your device powers up seamlessly.' },
  { icon: 'volume_up', title: 'Speaker & Mic Repair', desc: 'Crystal clear audio restoration for calls, media, and voice recording.' },
  { icon: 'camera', title: 'Camera Repair', desc: 'Lens replacement and focus calibration for perfect photos and smooth videos.' },
  { icon: 'system_update', title: 'Software Update', desc: 'OS flashing, bug fixes, and system unlocking for maximum device performance.' }
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-3">Our Expertise</p>
          <h2 className="text-4xl md:text-5xl font-black text-white">Premium Services</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc, idx) => (
            <div key={idx} className="bg-gray-900 border border-gray-800 p-8 rounded-2xl hover:border-cyan-500/40 hover:shadow-[0_0_25px_rgba(0,212,255,0.07)] hover:-translate-y-1 transition-all group cursor-pointer">
              <div className="w-14 h-14 bg-gray-800 group-hover:bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6 transition-colors border border-transparent group-hover:border-cyan-500/20">
                <span className="material-symbols-outlined text-cyan-400 text-3xl">{svc.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{svc.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">{svc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
