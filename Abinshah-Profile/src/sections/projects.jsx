import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import SectionTag from '@/components/SectionTag';
import ProjectCover from '@/components/ProjectCover';
import useReveal from '@/hooks/useReveal';

const projects = [
  {
    title: 'LearnHub — Course Management Portal',
    label: 'LMS',
    desc: 'A full LMS with JWT auth, role-based access control, Multer file uploads, and PDFKit-generated certificates on completion.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'PDFKit'],
    link: '#',
  },
  {
    title: 'Catalogue Management System',
    label: 'API',
    desc: 'A full-stack inventory system built with Flask and a RESTful API layer to handle stock workflows end to end.',
    tags: ['Flask', 'Python', 'REST API', 'SQLite'],
    link: '#',
  },
  {
    title: 'Forever — E-commerce Frontend',
    label: 'UI',
    desc: 'A React + Vite storefront with Tailwind CSS, built from a guided tutorial and extended with independent component work.',
    tags: ['React', 'Vite', 'Tailwind CSS'],
    link: '#',
  },
  {
    title: 'Real-Time Telemetry Tracker',
    label: 'DASH',
    desc: 'A live dashboard that ingests multi-threaded client operations and streams status updates to the UI in real time.',
    tags: ['React', 'Tailwind CSS', 'JavaScript'],
    link: '#',
  },
];

export default function Projects() {
  const [ref, isVisible] = useReveal();

  return (
    <section id="projects" className="py-28 bg-surface border-y border-border">
      <div ref={ref} className="container mx-auto px-6">
        <div className={`max-w-2xl mb-16 ${isVisible ? 'reveal' : 'opacity-0'}`}>
          <SectionTag>projects</SectionTag>
          <h2 className="font-display text-4xl md:text-5xl text-ink leading-tight">
            Things I've <span className="italic text-muted">shipped.</span>
          </h2>
          <p className="text-muted mt-4 leading-relaxed">
            A mix of guided builds extended past their tutorials, and independent
            projects built to solve a specific backend or data problem.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((proj, idx) => (
            <a
              href={proj.link}
              key={proj.title}
              className={`group card card-hover overflow-hidden flex flex-col ${isVisible ? 'reveal' : 'opacity-0'}`}
              style={{ animationDelay: `${idx * 90}ms` }}
            >
              <div className="aspect-[16/9] overflow-hidden border-b border-border">
                <ProjectCover label={proj.label} />
              </div>
              <div className="p-6 flex flex-col gap-3 flex-1">
                <div className="flex justify-between items-start gap-3">
                  <h3 className="font-medium text-ink leading-snug">{proj.title}</h3>
                  <ArrowUpRight
                    size={18}
                    className="text-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-0.5"
                  />
                </div>
                <p className="text-sm text-muted leading-relaxed">{proj.desc}</p>
                <div className="flex flex-wrap gap-2 pt-1 mt-auto">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs px-2.5 py-1 rounded-full bg-accent-soft text-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
