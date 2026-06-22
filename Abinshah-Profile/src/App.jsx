import React from 'react';
import Navbar from '@/layout/Navbar';
import Footer from '@/layout/Footer';
import Hero from '@/sections/Hero';
import About from '@/sections/About';
import Projects from '@/sections/Projects';
import Experience from '@/sections/Experience';
import Testimonials from '@/sections/Testimonials';
import Contact from '@/sections/Contact';

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden font-sans bg-background text-ink">
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
