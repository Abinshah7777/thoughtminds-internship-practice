import React, { useEffect, useState } from 'react';
import { ArrowRight, Download } from 'lucide-react';
import Button from '@/components/Button';

const LOG_LINES = [
  '$ whoami',
  '> abinshah — software engineer',
  '$ status --current',
  '> intern @ litmus7 · b.tech AI & DS, ktu',
  '$ stack --primary',
  '> python · flask · react · node · mongodb',
];

export default function Hero() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (visibleLines >= LOG_LINES.length) return;
    const timer = setTimeout(() => setVisibleLines((v) => v + 1), 450);
    return () => clearTimeout(timer);
  }, [visibleLines]);

  return (
    <section className="relative pt-36 pb-24 overflow-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
        {/* Left: statement */}
        <div className="space-y-7">
          <span className="tag-label inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Open to internships &amp; junior roles
          </span>

          <h1 className="font-display text-5xl md:text-6xl leading-[1.08] text-ink">
            Backend systems,
            <br />
            built to <span className="italic text-accent">hold weight.</span>
          </h1>

          <p className="text-lg text-muted max-w-md leading-relaxed">
            I'm Abinshah — a software engineer studying AI &amp; Data Science, currently
            building catalogue and course-management systems with Python, Flask,
            and the MERN stack.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a href="#contact">
              <Button size="lg">
                Let's talk <ArrowRight size={17} />
              </Button>
            </a>
            {/* Drop your resume PDF in /public and point this at it, e.g. "/resume.pdf" */}
            <a href="/resume.pdf" download>
              <Button size="lg" variant="secondary">
                Resume <Download size={16} />
              </Button>
            </a>
          </div>
        </div>

        {/* Right: terminal signature element */}
        <div className="card p-6 sm:p-8 shadow-[0_40px_80px_-40px_rgba(21,23,28,0.18)]">
          <div className="flex items-center gap-2 pb-4 border-b border-border mb-5">
            <span className="h-3 w-3 rounded-full bg-[#ECC] border border-border" style={{ backgroundColor: '#f5b8a8' }} />
            <span className="h-3 w-3 rounded-full" style={{ backgroundColor: '#f5dca8' }} />
            <span className="h-3 w-3 rounded-full" style={{ backgroundColor: '#b8e0c4' }} />
            <span className="font-mono text-xs text-muted ml-2">status.sh</span>
          </div>
          <div className="font-mono text-sm space-y-2.5 min-h-[210px]">
            {LOG_LINES.slice(0, visibleLines).map((line, idx) => (
              <p
                key={idx}
                className={line.startsWith('$') ? 'text-ink' : 'text-muted pl-3'}
              >
                {line}
              </p>
            ))}
            {visibleLines < LOG_LINES.length && (
              <span className="caret inline-block w-2 h-4 bg-ink align-middle" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
