import React, { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      quote: "Abinshah approaches system structures with exceptional clarity. His modular backend logic and clean database management patterns dramatically sped up our project deployment pipelines during development workflows.",
      author: "Yash",
      role: "Engineering Collaborator"
    },
    {
      quote: "Exceptional mastery over backend data micro-frameworks. He consistently translates high-level database specifications into simple, fast, and structured API layers without adding technical bloat.",
      author: "Technical Trainee Review",
      role: "Litmus7 Project Evaluation"
    }
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[activeIndex];

  return (
    <section id="testimonials" className="py-32 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        
        <div className="text-center mb-16">
          <span className="text-sm text-primary font-medium uppercase tracking-wider">Vouches</span>
          <h2 className="text-4xl font-bold mt-2">Peer <span className="font-serif italic text-muted-foreground">Endorsements</span></h2>
        </div>

        {/* Carousel Layout Box */}
        <div className="relative glass p-8 md:p-12 rounded-3xl border border-primary/10 shadow-2xl animate-fade-in">
          {/* Static Backdrop Floating Icon */}
          <div className="absolute -top-5 left-8 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/20">
            <Quote className="w-5 h-5 text-background fill-background" />
          </div>

          <blockquote className="text-lg md:text-xl font-medium text-white leading-relaxed font-serif pt-4">
            "{current.quote}"
          </blockquote>

          <div className="mt-8 flex items-center gap-4">
            <div>
              <p className="font-semibold text-white">{current.author}</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mt-0.5">{current.role}</p>
            </div>
          </div>
        </div>

        {/* Controls Bar */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <button onClick={handlePrev} className="p-3 rounded-full glass border border-white/5 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all">
            <ChevronLeft size={20} />
          </button>

          {/* Pagination Indicators */}
          <div className="flex gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${idx === activeIndex ? 'w-8 bg-primary' : 'w-2 bg-muted-foreground/30'}`}
              />
            ))}
          </div>

          <button onClick={handleNext} className="p-3 rounded-full glass border border-white/5 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all">
            <ChevronRight size={20} />
          </button>
        </div>

      </div>
    </section>
  );
}