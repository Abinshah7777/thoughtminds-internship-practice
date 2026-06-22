import React from 'react';

export default function Experience() {
  const experiences = [
    { period: '2025 - Present', role: 'Software Engineering Intern', company: 'Litmus7', desc: 'Developed transactional Catalogue Management Systems using Python and Flask micro-frameworks.', tech: ['Python', 'Flask', 'REST APIs', 'SQL'] },
    { period: '2024 - 2028', role: 'B.Tech Student (AI & Data Science)', company: 'KTU', desc: 'Deepening foundations in structural algorithm complexities, data pipelines, and machine learning models.', tech: ['C', 'C++', 'Java', 'Data Structures'] }
  ];

  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-16">
          <span className="text-sm text-primary tracking-wider uppercase font-medium">Career Journey</span>
          <h2 className="text-4xl font-bold mt-2">Professional <span className="font-serif italic text-muted-foreground">History</span></h2>
        </div>

        <div className="relative border-l md:border-l-0 md:after:absolute md:after:top-0 md:after:bottom-0 md:after:left-1/2 md:after:w-[2px] md:after:bg-surface">
          {experiences.map((exp, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div key={idx} className="relative mb-12 md:grid md:grid-cols-2 md:gap-8 items-center">
                <div className={`pl-8 md:pl-0 ${isEven ? 'md:text-right md:pr-16' : 'md:col-start-2 md:pl-16'}`}>
                  <div className="glass p-6 rounded-2xl border border-primary/20 hover:border-primary/50 transition-all duration-300">
                    <span className="text-sm text-primary font-medium">{exp.period}</span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground text-sm font-medium">{exp.company}</p>
                    <p className="text-muted-foreground text-sm mt-3">{exp.desc}</p>
                    <div className={`flex flex-wrap gap-2 mt-4 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                      {exp.tech.map((t) => (
                        <span key={t} className="px-2.5 py-1 text-xs rounded-full bg-surface text-muted-foreground">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Central Timeline Hub Dot */}
                <div className="absolute left-0 top-6 md:left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1.5 ring-4 ring-background z-10" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}