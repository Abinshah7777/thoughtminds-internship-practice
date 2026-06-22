import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Catalogue Management System',
      desc: 'A robust, full-stack application engineered with Flask and RESTful API structures to handle inventory workflows seamlessly.',
      image: 'https://images.unsplash.com/photo-1618401471353-b98aedd07871?q=80&w=600&auto=format&fit=crop', // Replace with your static asset paths later
      tags: ['Flask', 'Python', 'RESTful API', 'SQLite'],
      link: '#'
    },
    {
      title: 'Real-Time Telemetry Tracker',
      desc: 'An analytical data dashboard designed to intercept incoming multi-threaded client operations and stream status outputs live.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop',
      tags: ['React.js', 'TailwindCSS', 'JavaScript'],
      link: '#'
    }
  ];

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm text-primary tracking-wider uppercase font-medium">Featured Work</span>
          <h2 className="text-4xl font-bold mt-2">Projects That <span className="font-serif italic text-muted-foreground">Drive Solutions</span></h2>
          <p className="text-muted-foreground mt-4 text-sm max-w-xl mx-auto">
            A handpicked selection of production-ready builds, ranging from backend API controllers to rich front-end interfaces.
          </p>
        </div>

        {/* Grid System */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((proj, idx) => (
            <div 
              key={idx} 
              className="group glass rounded-2xl overflow-hidden border border-white/5 hover:border-primary/20 transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${(idx + 1) * 150}ms` }}
            >
              {/* Image Frame with Dynamic Scale */}
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={proj.image} 
                  alt={proj.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60" />
              </div>

              {/* Text Meta Content Block */}
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold text-white group-hover:text-primary transition-colors duration-300">{proj.title}</h3>
                  <a href={proj.link} className="p-1 rounded-lg text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                    <ArrowUpRight size={20} />
                  </a>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed h-12 overflow-hidden">{proj.desc}</p>
                
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {proj.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs rounded-full bg-surface text-muted-foreground border border-white/5 group-hover:border-primary/20 transition-colors duration-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}