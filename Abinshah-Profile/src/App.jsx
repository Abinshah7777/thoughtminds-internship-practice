import React from 'react';
import Navbar from '@/layout/navbar';
import Footer from '@/layout/footer';
import Hero from '@/sections/hero';
import About from '@/sections/about';
import Projects from '@/sections/projects';
import Experience from '@/sections/experience';
import Testimonials from '@/sections/testimonials';
import Contact from '@/sections/contact';

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}