// src/components/projects/ProjectCard.jsx

import React from 'react';

/**
 * Renders a single, reusable project card component.
 * @param {object} props - Component props.
 * @param {object} props.project - The individual project object from config.js.
 * @param {function} props.onOpenModal - Function to open the detailed modal.
 */
export default function ProjectCard({ project, onOpenModal }) {
  return (
    <div className="bg-gray-50 border rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 overflow-hidden flex flex-col">
      {/* Image: Vital for visual appeal */}
      <div className="h-48 bg-gray-200 overflow-hidden">
        <img 
          src={project.image} 
          alt={`Screenshot of the ${project.title} application`} 
          className="w-full h-full object-cover" 
        />
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        {/* ACCESSIBILITY FIX: Changed h4 to h3 to maintain sequential order */}
        <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
        <p className="text-sm text-gray-600 mt-1 flex-grow">{project.tagline}</p>
        
        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mt-3 mb-4">
          {project.tech.map(t => (
            <span key={t} className="bg-indigo-100 text-indigo-700 text-xs font-medium px-2 py-0.5 rounded-full">{t}</span>
          ))}
        </div>

        {/* Button to open the detailed modal */}
        <button 
          onClick={onOpenModal} 
          className="mt-auto w-full text-indigo-600 border border-indigo-200 py-2 rounded-lg hover:bg-indigo-50 transition"
        >
          Read Detailed Case Study
        </button>
      </div>
    </div>
  );
}
