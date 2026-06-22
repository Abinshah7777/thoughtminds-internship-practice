import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Button from '@/components/button';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'glass-strong py-3' : 'bg-transparent py-5'}`}>
      <nav className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-xl font-bold tracking-tight text-white hover:text-primary transition-colors">
          Abinshah<span className="text-primary">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <div className="glass rounded-full px-4 py-1.5 flex items-center gap-1">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="text-sm px-4 py-1.5 text-muted-foreground hover:text-white rounded-full hover:bg-surface transition-all duration-300">
                {link.label}
              </a>
            ))}
          </div>
          <a href="#contact"><Button size="sm">Contact Me</Button></a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in absolute top-full left-0 w-full p-6 flex flex-col gap-4">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-lg text-muted-foreground hover:text-white py-2">
              {link.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}><Button size="md" className="w-full">Contact Me</Button></a>
        </div>
      )}
    </header>
  );
}