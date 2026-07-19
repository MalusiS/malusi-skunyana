// src/components/projects/ProjectModal.jsx

import React, { useEffect } from 'react';
import { X, Github, ExternalLink, Zap } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  // Close on Escape
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full bg-slate-800 p-2 text-slate-400 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        {/* Image */}
        {project.image && (
          <div className="h-56 w-full bg-slate-800 overflow-hidden">
            <img
              src={project.image}
              alt={`${project.title} preview`}
              className="h-full w-full object-cover"
            />
          </div>
        )}

        <div className="p-6">
          {/* Zap badge */}
          {project.zap && (
            <div className="mb-4 flex items-center gap-2">
              <div className="flex items-center gap-1.5 rounded-full bg-emerald-950/60 px-3 py-1 text-xs font-bold text-emerald-400 border border-emerald-800">
                <Zap size={12} />
                Zap {project.zap.performance}/100
              </div>
            </div>
          )}

          <h2 id="modal-title" className="text-2xl font-bold text-white">{project.title}</h2>
          <p className="mt-2 text-sm text-cyan-500">{project.tagline}</p>

          {/* Narrative */}
          {project.narrative && (
            <div className="mt-6 space-y-4">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-1">Problem</h3>
                <p className="text-sm leading-relaxed text-slate-300">{project.narrative.problem}</p>
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-1">Solution</h3>
                <p className="text-sm leading-relaxed text-slate-300">{project.narrative.solution}</p>
              </div>
              {project.narrative.stack && (
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-2">Key Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.narrative.stack.map((s) => (
                      <span key={s} className="rounded-md bg-slate-800 px-2.5 py-1 text-xs font-medium text-slate-300 border border-slate-700">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Tech tags */}
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="rounded bg-slate-800 px-2 py-1 text-xs text-slate-400">
                {t}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="mt-8 flex items-center gap-4">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg bg-cyan-600 px-4 py-2 text-sm font-medium text-white hover:bg-cyan-500 transition-colors"
              >
                <ExternalLink size={14} /> View Live
              </a>
            )}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800 px-4 py-2 text-sm font-medium text-slate-300 hover:border-slate-500 hover:text-white transition-colors"
            >
              <Github size={14} /> Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
