// src/components/projects/ProjectsGrid.jsx

import React from 'react';
import { Github, ExternalLink, ArrowUpRight, Archive, ChevronUp } from 'lucide-react';
import { projects } from '../../assets/config';

export default function ProjectsGrid({ onOpenModal, onToggleArchive, showArchive }) {
  return (
    <section id="projects" className="pt-16 pb-24 bg-slate-900/50" aria-labelledby="projects-heading">
      <div className="container">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="font-mono text-sm uppercase tracking-widest text-cyan-500">Technical Depth</p>
            <h2 id="projects-heading" className="mt-2 text-3xl font-bold text-white sm:text-4xl">
              Featured Projects
            </h2>
            <p className="mt-4 max-w-2xl text-slate-400">
              A selection of high-impact projects demonstrating architecture, accessibility, testing, and systems thinking.
            </p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col rounded-xl border border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950 p-5 transition-all duration-300 hover:border-slate-600 hover:shadow-xl hover:shadow-cyan-900/10"
            >
              {/* IMAGE CONTAINER: The Frame */}
              <div className="mb-4 overflow-hidden rounded-lg border border-slate-700 bg-slate-800 shadow-inner">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex h-40 items-center justify-center text-slate-600 font-mono text-xs">
                    {project.id}
                  </div>
                )}
              </div>

              <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400 line-clamp-3">
                {project.tagline}
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.tech.slice(0, 3).map((t) => (
                  <span key={t} className="rounded bg-slate-900 px-2 py-0.5 text-xs text-slate-400 border border-slate-800">
                    {t}
                  </span>
                ))}
                {project.tech.length > 3 && (
                  <span className="rounded bg-slate-900 px-2 py-0.5 text-xs text-slate-500 border border-slate-800">
                    +{project.tech.length - 3}
                  </span>
                )}
              </div>

              <div className="mt-auto pt-5 flex items-center gap-3">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
                    aria-label={`View live demo of ${project.title}`}
                  >
                    <ExternalLink size={12} /> Live
                  </a>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs font-medium text-slate-400 hover:text-white transition-colors"
                  aria-label={`View source code of ${project.title}`}
                  >
                    <Github size={12} /> Source
                  </a>
                <button
                  onClick={() => onOpenModal({ id: project.id })}
                  className="ml-auto flex items-center gap-1 text-xs font-medium text-slate-500 hover:text-cyan-400 transition-colors"
                >
                  Details <ArrowUpRight size={12} />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Toggle Archive CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={onToggleArchive}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-5 py-2.5 text-sm font-medium text-slate-300 hover:border-slate-500 hover:text-white transition-all"
            aria-expanded={showArchive}
          >
            {showArchive ? (
              <>
                <ChevronUp size={16} />
                Hide Archive Projects
              </>
            ) : (
              <>
                <Archive size={16} />
                View Archive Projects
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
