// src/components/projects/ProjectModal.jsx

import React from 'react';
import { X, ArrowUpRight, Code } from 'lucide-react';

/**
 * Renders the detailed project case study in a modal overlay.
 * @param {object} props - Component props.
 * @param {object | null} props.project - The project data to display, or null if closed.
 * @param {function} props.onClose - Function to close the modal.
 */
export default function ProjectModal({ project, onClose }) {
  // If no project is passed (openProject state is null), don't render anything
  if (!project) return null;

  return (
    // Fixed overlay for background dimming and closing via background click
    <div 
      className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center p-4 backdrop-blur-sm transition-opacity duration-300" 
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transform transition-all duration-300 scale-100"
        onClick={e => e.stopPropagation()} // Prevent modal from closing when clicking inside
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div className="p-6 md:p-8">
          
          {/* Header and Close Button */}
          <div className="flex justify-between items-start border-b pb-4 mb-4">
            <div>
              <h3 id="modal-title" className="text-3xl font-bold text-indigo-700">{project.title}</h3>
              <p className="text-gray-600 mt-1 italic">{project.tagline}</p>
            </div>
            <button 
              onClick={onClose} 
              aria-label="Close Project Details" 
              className="text-gray-500 hover:text-gray-900 transition p-2 rounded-full hover:bg-gray-100"
            >
              <X size={24} />
            </button>
          </div>

          {/* Project Details Content */}
          <div className="space-y-6">
            
            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map(t => (
                <span key={t} className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>

            {/* Narrative Sections */}
            <section>
              <h4 className="text-xl font-semibold mb-2 text-gray-800">🎯 Problem & Goal</h4>
              <p className="text-gray-700">{project.narrative.problem}</p>
            </section>

            <section>
              <h4 className="text-xl font-semibold mb-2 text-gray-800">🛠️ Solution & Contributions</h4>
              <p className="text-gray-700">{project.narrative.solution}</p>
            </section>
            
            <section>
              <h4 className="text-xl font-semibold mb-2 text-gray-800">⚙️ Technical Stack</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                {project.narrative.stack.map(s => <li key={s}>{s}</li>)}
              </ul>
            </section>

            {/* External Links */}
            <div className="flex space-x-4 pt-4 border-t mt-6">
              <a 
                href={project.live} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition"
              >
                View Live Site <ArrowUpRight size={18} className="ml-1" />
              </a>
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center px-4 py-2 border border-indigo-600 text-sm font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 transition"
              >
                View Code <Code size={18} className="ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
