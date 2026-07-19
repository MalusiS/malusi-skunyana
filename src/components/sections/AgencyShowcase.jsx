// src/components/sections/AgencyShowcase.jsx

import React from 'react';
import { ExternalLink, Github, Zap, ArrowUpRight } from 'lucide-react';
import { agencyProjects } from '../../assets/config';

export default function AgencyShowcase({ onOpenModal }) {
  return (
    <section id="agency" className="pt-16 pb-24" aria-labelledby="agency-heading">
      <div className="container">
        <div className="mb-12">
          <p className="font-mono text-sm uppercase tracking-widest text-cyan-500">Production Work</p>
          <h2 id="agency-heading" className="mt-2 text-3xl font-bold text-white sm:text-4xl">
            WorkCentrik Digital Agency
          </h2>
          <p className="mt-4 max-w-2xl text-slate-400">
            Production-grade web platforms delivered for businesses and non-profit organizations. 
            Every project is engineered for performance, accessibility, and conversion.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {agencyProjects.map((project) => (
            <article
              key={project.id}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 transition-all hover:border-slate-600 hover:shadow-xl hover:shadow-cyan-900/10"
            >
              {/* Image placeholder area */}
              <div className="relative h-56 bg-slate-800 overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-slate-600">
                    <span className="font-mono text-sm">Project Screenshot</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                
                {/* Zap badge */}
                {project.zap && (
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 rounded-full bg-emerald-950/90 px-3 py-1 text-xs font-bold text-emerald-400 border border-emerald-800">
                    <Zap size={12} />
                    100/100
                  </div>
                )}
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-cyan-500">{project.client}</p>
                    <h3 className="mt-1 text-xl font-bold text-white">{project.title}</h3>
                  </div>
                </div>
                
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{project.tagline}</p>
                
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="rounded-md bg-slate-800 px-2 py-1 text-xs font-medium text-slate-300 border border-slate-700">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-6 flex items-center gap-4">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <ExternalLink size={14} />
                      Live Site
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-medium text-slate-400 hover:text-white transition-colors"
                  >
                    <Github size={14} />
                    Source
                  </a>
                  <button
                    onClick={() => onOpenModal({ id: project.id })}
                    className="ml-auto flex items-center gap-1 text-sm font-medium text-slate-500 hover:text-cyan-400 transition-colors"
                  >
                    Details <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
