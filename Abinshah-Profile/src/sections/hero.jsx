import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import Button from '@/components/button';

export default function Hero() {
  // Generate random drifting points safely inside the component
  const dots = Array.from({ length: 30 }).map((_, i) => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    duration: `${15 + Math.random() * 20}s`,
    delay: `${Math.random() * -5}s`
  }));

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-32 pb-20">
      {/* Background Dots Canvas */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {dots.map((dot, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-primary rounded-full opacity-40 animate-slow-drift"
            style={{
              left: dot.left,
              top: dot.top,
              animationDuration: dot.duration,
              animationDelay: dot.delay
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-fade-in">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary font-medium">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Full-Stack Backend Developer
          </span>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Crafting Systems with <span className="text-primary italic font-serif">Precision</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg">
            Specializing in high-performance application architectures, relational data modeling, and robust API frameworks.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#contact">
              <Button size="lg" className="flex items-center gap-2">
                Let's Talk <ArrowRight size={18} />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}