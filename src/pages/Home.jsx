import React from 'react';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import Parts from '../components/sections/Parts';
import Brands from '../components/sections/Brands';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import Testimonials from '../components/sections/Testimonials';
import Contact from '../components/sections/Contact';

export default function Home() {
  return (
    <main className="overflow-x-hidden pb-32">
      <Hero />
      <Services />
      <Parts />
      <Brands />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
    </main>
  );
}
