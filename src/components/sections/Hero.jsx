// src/components/sections/Hero.jsx

import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { GITHUB_URL, LINKEDIN_URL } from '../../assets/config';

export default function Hero() {
  const handleScroll = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      // Move focus to the section for screen readers
      el.setAttribute('tabindex', '-1');
      el.focus({ preventScroll: true });
    }
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-[90vh] items-center justify-center overflow-hidden"
      aria-label="Introduction"
    >
      {/* Subtle background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(30,41,59,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(30,41,59,0.3)_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="container relative z-10 text-center">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 font-mono text-sm uppercase tracking-widest text-cyan-500">
            Front-End Engineer → Systems & Software Engineer
          </p>
          
          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl">
            Malusi Skunyana
          </h1>
          
          {/* Updated Tagline for trajectory consistency */}
          <p className="mt-6 text-xl font-medium text-cyan-400 sm:text-2xl">
            Software Engineer | Founder, WorkCentrik
          </p>
          
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
            I design and build <span className="font-normal text-white">production-grade, fully accessible web platforms</span> through 
            WorkCentrik, while self-directing a <span className="font-normal text-white">B.Sc. in Computer Science</span> modeled after 
            MIT, Stanford, and CMU core curricula.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            {/* Changed to <a> tags for better semantics, fixed contrast */}
            <a
              href="#agency"
              onClick={(e) => handleScroll(e, 'agency')}
              className="flex items-center gap-2 rounded-lg bg-cyan-700 px-6 py-3 text-sm font-bold text-slate-50 shadow-lg shadow-cyan-900/20 transition-all hover:bg-cyan-500"
            >
              Explore My Work
              <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, 'contact')}
              className="flex items-center gap-2 rounded-lg border border-slate-500 bg-slate-900 px-6 py-3 text-sm font-semibold text-slate-200 transition-all hover:border-cyan-500 hover:text-cyan-400"
            >
              Get in Touch
            </a>
          </div>

          <div className="mt-8 flex justify-center gap-6 text-sm text-slate-400">
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="text-slate-400 transition-colors hover:text-cyan-400">GitHub</a>
            <span className="text-slate-400" aria-hidden="true">·</span>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="text-slate-400 transition-colors hover:text-cyan-400">LinkedIn</a>
            <span className="text-slate-400" aria-hidden="true">·</span>
            <span>Cape Town, South Africa</span>
          </div>
        </div>

        <a
          href="#agency"
          onClick={(e) => handleScroll(e, 'agency')}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-slate-400 transition-colors hover:text-cyan-400"
          aria-label="Scroll to content"
        >
          <ChevronDown size={24} />
        </a>
      </div>
    </section>
  );
}
