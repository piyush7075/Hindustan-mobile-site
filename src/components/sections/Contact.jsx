import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-[#131313]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        <div>
          <p className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-3">Visit Us</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Hindustan Mobile Repairing Center</h2>
          <p className="text-lg text-gray-400 leading-relaxed mb-10">
            Professional mobile repair services and genuine spare parts. We fix all major problems including broken screens, dead batteries, charging issues, and motherboard faults quickly and reliably.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-5 bg-gray-900 p-4 rounded-2xl border border-gray-800">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center shrink-0 border border-cyan-500/20">
                <span className="material-symbols-outlined text-cyan-400">location_on</span>
              </div>
              <span className="text-gray-200">Shop No. 3, Near Power House, Rawatbhata Road, Gumanpura, Kota, Rajasthan 324007</span>
            </div>

            <div className="flex items-center gap-5 bg-gray-900 p-4 rounded-2xl border border-gray-800">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center shrink-0 border border-cyan-500/20">
                <span className="material-symbols-outlined text-cyan-400">call</span>
              </div>
              <span className="text-xl font-bold text-cyan-400 tracking-wide">+91 92148 68470</span>
            </div>

            <div className="flex items-center gap-5 bg-gray-900 p-4 rounded-2xl border border-gray-800">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center shrink-0 border border-cyan-500/20">
                <span className="material-symbols-outlined text-cyan-400">schedule</span>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-200">Mon - Sat: 11:00 AM - 9:00 PM</span>
                <span className="text-gray-400 text-sm">Sun: 11:00 AM - 4:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 rounded-3xl overflow-hidden min-h-[400px] relative border border-gray-800 shadow-2xl flex items-center justify-center group">
          <div className="absolute inset-0 bg-[#0a0a0a]">
            {/* Minimal Map Overlay Background Placeholder */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800 to-black opacity-50"></div>
          </div>

          <div className="relative z-10 text-center bg-[#131313]/80 backdrop-blur-md p-10 rounded-3xl border border-gray-800 shadow-2xl transition-transform group-hover:-translate-y-2 duration-500 w-11/12 max-w-sm">
            <div className="w-20 h-20 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(0,212,255,0.4)]">
              <span className="material-symbols-outlined text-black text-4xl">pin_drop</span>
            </div>
            <h3 className="font-bold text-3xl text-white mb-6">Visit Our Shop</h3>
            <div className="flex flex-col gap-4">
              <a href="https://maps.google.com/?q=Hindustan+Mobile+Repairing+Center,+Shop+No.+3,+Near+Power+House,+Rawatbhata+Road,+Gumanpura,+Kota,+Rajasthan+324007" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold shadow-[0_5px_20px_rgba(249,115,22,0.4)] transition-all uppercase tracking-widest text-sm">
                <span className="material-symbols-outlined">directions</span>
                Get Directions
              </a>
              <a href="https://wa.me/919214868470" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white px-8 py-4 rounded-xl font-bold shadow-[0_5px_20px_rgba(37,211,102,0.4)] transition-all uppercase tracking-widest text-sm">
                <span className="material-symbols-outlined">chat</span>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
