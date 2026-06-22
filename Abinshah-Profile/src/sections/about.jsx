import React from 'react';
import { Code, Zap, Users, Lightbulb } from 'lucide-react';

export default function About() {
  const highlights = [
    { icon: Code, title: 'Clean Code', desc: 'Writing predictable, maintainable, and self-documenting code structures.' },
    { icon: Zap, title: 'Performance', desc: 'Optimizing execution queries, algorithms, and micro-framework overhead.' },
    { icon: Users, title: 'Collaboration', desc: 'Working across cross-functional engineering teams with modern Git versioning.' },
    { icon: Lightbulb, title: 'Innovation', desc: 'Applying structured analytical solutions to real-world infrastructure problems.' }
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Column - Text Bio */}
        <div className="space-y-8 animate-fade-in">
          <div>
            <span className="text-sm text-primary tracking-wider uppercase font-medium">About Me</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2">
              Building the Future <span className="font-serif italic text-muted-foreground block md:inline">One System at a Time</span>
            </h2>
          </div>
          
          <div className="space-y-4 text-muted-foreground text-base">
            <p>
              I am a Computer Science and Engineering student specializing in AI and Data Science. My primary engineering focus revolves around crafting optimized backend components and reliable API infrastructures.
            </p>
            <p>
              I bridge theoretical compute logic with scalable real-world architectures—translating structured data frameworks into performant, clean-running services.
            </p>
          </div>

          {/* Mission Card */}
          <div className="glass p-6 rounded-3xl border border-primary/20 shadow-xl shadow-primary/5">
            <p className="text-lg font-medium italic text-white font-serif">
              "My mission is to engineer high-throughput data layers and maintain absolute code clarity under high traffic loads."
            </p>
          </div>
        </div>

        {/* Right Column - Highlight Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {highlights.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={idx} 
                className="glass p-6 rounded-2xl border border-white/5 group hover:border-primary/30 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all duration-300">
                  <IconComponent className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}