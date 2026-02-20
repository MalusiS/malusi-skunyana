// src/components/projects/ProjectModal.jsx

import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom'; 
import PropTypes from 'prop-types';
import { X, ArrowUpRight, Code, ExternalLink, Github } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  const modalRef = useRef(null);
  const previouslyFocusedElement = useRef(null);

  /**
   * 1. HOOKS FIRST
   */
  useEffect(() => {
    // Safety check
    if (!project) return;

    // A. Define trapFocus INSIDE the effect so it's available to handleKeyDown
    const trapFocus = (e) => {
      if (!modalRef.current) return;
      const focusableElements = modalRef.current.querySelectorAll(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
      );
      if (focusableElements.length === 0) return;

      const first = focusableElements[0];
      const last = focusableElements[focusableElements.length - 1];

      // Shift + Tab (Backward)
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
      // Tab (Forward)
      if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    // B. Setup Logic
    previouslyFocusedElement.current = document.activeElement;
    document.body.style.overflow = 'hidden';

    const focusTimer = setTimeout(() => {
        modalRef.current?.focus();
    }, 50);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'Tab') trapFocus(e);
    };

    document.addEventListener('keydown', handleKeyDown);

    // C. Cleanup
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
      clearTimeout(focusTimer);
      previouslyFocusedElement.current?.focus();
    };
  }, [project, onClose]); // Dependencies

  /**
   * 2. CONDITIONAL RETURN (Must be after hooks)
   */
  if (!project) return null;

  /**
   * 3. RENDER (Portal)
   */
  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={onClose}
      aria-hidden="true"
    >
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        aria-describedby="project-modal-description"
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl outline-none animate-in zoom-in-95 duration-200"
      >
        <div className="p-6 md:p-8">

          {/* Header */}
          <header className="flex justify-between items-start border-b pb-4 mb-6 sticky top-0 bg-white z-10">
            <div>
              <h2 id="project-modal-title" className="text-2xl md:text-3xl font-bold text-gray-900">
                {project.title}
              </h2>
              <p id="project-modal-description" className="text-violet-600 mt-1 font-medium">
                {project.tagline}
              </p>
            </div>
            <button
              onClick={onClose}
              aria-label="Close project details"
              className="p-2 rounded-full text-gray-400 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            >
              <X size={24} />
            </button>
          </header>

          {/* Tech Stack */}
          {Array.isArray(project.tech) && (
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((t) => (
                <span key={t} className="bg-violet-50 text-violet-700 text-xs font-semibold px-3 py-1 rounded-full border border-violet-100">
                  {t}
                </span>
              ))}
            </div>
          )}

          {/* Narrative Sections */}
          <div className="space-y-8 text-gray-700">
            <section>
              <h3 className="text-lg font-bold text-gray-900 mb-2">🎯 Problem & Goal</h3>
              <p className="leading-relaxed text-gray-600">{project.narrative?.problem}</p>
            </section>

            <section>
              <h3 className="text-lg font-bold text-gray-900 mb-2">🛠️ Solution & Role</h3>
              <p className="leading-relaxed text-gray-600">{project.narrative?.solution}</p>
            </section>

            {Array.isArray(project.narrative?.stack) && (
              <section>
                <h3 className="text-lg font-bold text-gray-900 mb-2">⚙️ Technical Highlights</h3>
                <ul className="list-disc list-inside ml-1 space-y-1 text-gray-600 marker:text-violet-500">
                  {project.narrative.stack.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          {/* Actions */}
          <footer className="flex flex-col sm:flex-row gap-4 pt-8 mt-8 border-t">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex justify-center items-center px-6 py-3 text-sm font-semibold rounded-lg text-white bg-violet-600 hover:bg-violet-700 transition-colors shadow-sm"
              >
                View Live Site <ExternalLink size={18} className="ml-2" />
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex justify-center items-center px-6 py-3 text-sm font-semibold rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
              >
                View Code <Github size={18} className="ml-2" />
              </a>
            )}
          </footer>
        </div>
      </div>
    </div>,
    document.body
  );
}

ProjectModal.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string,
    tagline: PropTypes.string,
    tech: PropTypes.array,
    live: PropTypes.string,
    github: PropTypes.string,
    narrative: PropTypes.shape({
      problem: PropTypes.string,
      solution: PropTypes.string,
      stack: PropTypes.array
    })
  }),
  onClose: PropTypes.func.isRequired,
};
