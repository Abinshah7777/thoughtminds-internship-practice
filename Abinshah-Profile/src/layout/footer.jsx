import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-background/50 backdrop-blur-md py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
        
        <div>
          <p>&copy; {currentYear} Abinshah P M. All rights reserved.</p>
        </div>

        {/* Quick Back-to-Top Anchor Triggers */}
        <div className="flex gap-6">
          <a href="#" className="hover:text-primary transition-colors duration-300">Top</a>
          <a href="#about" className="hover:text-primary transition-colors duration-300">About</a>
          <a href="#projects" className="hover:text-primary transition-colors duration-300">Projects</a>
          <a href="#contact" className="hover:text-primary transition-colors duration-300">Contact</a>
        </div>

      </div>
    </footer>
  );
}