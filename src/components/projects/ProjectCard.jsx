// src/components/projects/ProjectCard.jsx

import React from 'react';
import PropTypes from 'prop-types';
import { ExternalLink, Github, Info, ArrowRight } from 'lucide-react';

export default function ProjectCard({ project, onOpenModal }) {
  if (!project) return null;

  const { title, tagline, image = '/placeholder-project.jpg', tech = [], liveUrl, githubUrl } = project;

  return (
    // 1. ROOT: A div wrapper (not a button) to handle layout and hover group state
    <div className="group relative w-full bg-gray-50 border border-gray-100 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden flex flex-col h-full">
      
      {/* 2. MAIN CLICK TARGET: This button wraps the visible content. 
          It sits at z-0. It triggers the modal when the overlay is NOT active. */}
      <button
        onClick={onOpenModal}
        type="button"
        className="text-left flex flex-col h-full w-full focus:outline-none focus:ring-4 focus:ring-violet-200 rounded-xl"
        aria-label={`View details for project ${title}`}
      >
        {/* Image Container */}
        <div className="h-48 w-full bg-gray-200 overflow-hidden relative">
          <img
            src={image}
            alt="" // Decorative: aria-label on button handles description
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
        </div>

        {/* Card Body */}
        <div className="p-6 flex-grow flex flex-col w-full">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-violet-700 transition-colors mb-2">
            {title}
          </h3>
          <p className="text-sm text-gray-600 mb-4 flex-grow leading-relaxed">
            {tagline}
          </p>

          {/* Tech Tags */}
          {tech.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {tech.slice(0, 4).map((t) => (
                <span
                  key={t}
                  className="bg-violet-50 text-violet-700 text-xs font-semibold px-2.5 py-1 rounded-md border border-violet-100"
                >
                  {t}
                </span>
              ))}
            </div>
          )}

          {/* Resting CTA */}
          <span className="mt-auto inline-flex items-center text-sm font-semibold text-violet-600 group-hover:text-violet-700 group-hover:translate-x-1 transition-all">
            Read Case Study
            <ArrowRight size={16} className="ml-1" />
          </span>
        </div>
      </button>

      {/* 3. OVERLAY: Sits ON TOP (absolute) of the button.
          Contains the specialized actions (Live/Code). 
          pointer-events logic allows clicks to pass through to the main button 
          when overlay is hidden. */}
      <div 
        className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent 
                   opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 
                   transition-opacity duration-300 flex items-end p-6 
                   pointer-events-none group-hover:pointer-events-auto"
      >
        <div className="flex flex-wrap gap-3 pointer-events-auto">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 bg-violet-600 text-white rounded-lg font-medium hover:bg-violet-700 transition focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label={`View live demo of ${title}`}
            >
              <ExternalLink size={18} />
              Live Demo
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-900 transition focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label={`View source code for ${title}`}
            >
              <Github size={18} />
              Code
            </a>
          )}
          
          {/* Redundant but helpful 'Details' button for the overlay view */}
          <button
            onClick={onOpenModal}
            className="flex items-center gap-2 px-4 py-2.5 bg-white/20 backdrop-blur-sm text-white border border-white/30 rounded-lg font-medium hover:bg-white/30 transition focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label={`View detailed case study for ${title}`}
          >
            <Info size={18} />
            Details
          </button>
        </div>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    tagline: PropTypes.string,
    image: PropTypes.string,
    tech: PropTypes.arrayOf(PropTypes.string),
    liveUrl: PropTypes.string,
    githubUrl: PropTypes.string,
  }).isRequired,
  onOpenModal: PropTypes.func.isRequired,
};
