import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Parts from './components/sections/Parts';
import Brands from './components/sections/Brands';
import WhyChooseUs from './components/sections/WhyChooseUs';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import WhatsAppButton from './components/ui/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-[#131313] font-sans text-gray-200">
      <Navbar />
      <main className="overflow-x-hidden pb-32">
        <Hero />
        <Services />
        <Parts />
        <Brands />
        <WhyChooseUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
