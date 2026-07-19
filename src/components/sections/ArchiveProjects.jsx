// src/components/sections/ArchiveProjects.jsx

import React, { useEffect, useRef } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { archiveProjects } from '../../assets/config';

export default function ArchiveProjects({ isVisible }) {
  const sectionRef = useRef(null);

  // Safely handle the scroll event only after the lazy-loaded chunk has mounted
  useEffect(() => {
    if (isVisible && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <section 
      id="archive-section" 
      ref={sectionRef}
      className="bg-slate-900/30 pb-24 pt-8" 
      aria-labelledby="archive-heading"
    >
      <div className="container">
        <div className="mb-12">
          <div className="mb-2 flex items-center gap-3">
             <div className="h-px w-8 bg-cyan-500" />
             <p className="font-mono text-sm uppercase tracking-widest text-cyan-500">Technical History</p>
          </div>
          <h2 id="archive-heading" className="text-2xl font-bold text-white sm:text-3xl">
            Project Archive
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-400">
            A comprehensive repository of early algorithmic experiments, utility tools, and architectural prototypes. 
            This archive documents the evolution of my technical standards—from basic DOM manipulation to the 
            rigorous, production-grade engineering patterns I employ today.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {archiveProjects.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col justify-between rounded-xl border border-slate-800 bg-slate-950 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-900/50 hover:shadow-lg hover:shadow-cyan-900/10"
            >
              <div>
                <div className="mb-2 flex items-start justify-between gap-2">
                  <h3 className="text-sm font-bold text-slate-200 transition-colors group-hover:text-white">
                    {project.title}
                  </h3>
                  {/* Category Badge removed as it is not present in the Tier 3 config object */}
                </div>
                
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {/* Fixed mapping to match config.js 'tech' array */}
                  {project.tech?.map((t) => (
                    <span key={t} className="rounded border border-slate-800/50 bg-slate-900 px-1.5 py-0.5 font-mono text-[10px] text-slate-500">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-slate-800 pt-4">
                <div className="flex gap-4">
                  {/* Fixed mapping to match config.js 'github' string */}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-500 transition-colors hover:text-white"
                      aria-label={`View source for ${project.title}`}
                    >
                      <Github size={16} />
                    </a>
                  )}
                  {/* Fixed mapping to match config.js 'live' string */}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-500 transition-colors hover:text-cyan-400"
                      aria-label={`View live demo for ${project.title}`}
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
                <span className="font-mono text-[10px] uppercase text-slate-600">Archived</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
