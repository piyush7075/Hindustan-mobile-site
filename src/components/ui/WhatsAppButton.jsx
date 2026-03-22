import React from 'react';

export default function WhatsAppButton() {
  return (
    <a 
      href="https://wa.me/919214868470" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-24 md:bottom-8 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_10px_25px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform flex items-center justify-center animate-bounce"
      aria-label="Chat on WhatsApp"
    >
      <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png" alt="WhatsApp" className="w-8 h-8"/>
    </a>
  );
}
