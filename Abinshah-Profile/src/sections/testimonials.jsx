import React, { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionTag from '@/components/SectionTag';
import useReveal from '@/hooks/useReveal';

const testimonials = [
  {
    quote:
      "Abinshah approaches system structure with real clarity. His modular backend logic and clean data patterns noticeably sped up our deployment pipeline.",
    author: 'Yash',
    role: 'Engineering Collaborator',
  },
  {
    quote:
      "Exceptional grip on backend micro-frameworks. He consistently turns high-level specs into simple, fast, structured API layers without adding bloat.",
    author: 'Project Evaluation',
    role: 'Litmus7',
  },
];

export default function Testimonials() {
  const [ref, isVisible] = useReveal();
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => setActiveIndex((p) => (p + 1) % testimonials.length);
  const handlePrev = () => setActiveIndex((p) => (p - 1 + testimonials.length) % testimonials.length);
  const current = testimonials[activeIndex];

  return (
    <section id="testimonials" className="py-28 bg-surface border-y border-border">
      <div ref={ref} className="container mx-auto px-6 max-w-3xl">
        <div className={`text-center mb-14 ${isVisible ? 'reveal' : 'opacity-0'}`}>
          <SectionTag>
            <span className="mx-auto">testimonials</span>
          </SectionTag>
          <h2 className="font-display text-4xl md:text-5xl text-ink leading-tight">
            What people <span className="italic text-muted">say.</span>
          </h2>
        </div>

        <div className={`card p-8 md:p-12 relative ${isVisible ? 'reveal' : 'opacity-0'}`} style={{ animationDelay: '100ms' }}>
          <div className="absolute -top-5 left-8 w-11 h-11 rounded-full bg-accent flex items-center justify-center">
            <Quote className="w-5 h-5 text-white fill-white" />
          </div>

          <blockquote className="font-display text-xl text-ink leading-relaxed pt-4">
            "{current.quote}"
          </blockquote>

          <div className="mt-7">
            <p className="font-medium text-ink">{current.author}</p>
            <p className="font-mono text-xs text-muted mt-0.5">{current.role}</p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-6 mt-8">
          <button
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="p-3 rounded-full border border-border text-muted hover:text-accent hover:border-accent transition-all"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === activeIndex ? 'w-7 bg-accent' : 'w-1.5 bg-border'
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            aria-label="Next testimonial"
            className="p-3 rounded-full border border-border text-muted hover:text-accent hover:border-accent transition-all"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
