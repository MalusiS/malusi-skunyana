// src/components/projects/ProjectsGrid.jsx

import React from 'react';
import PropTypes from 'prop-types';
import ProjectCard from './ProjectCard';
import { ArrowDown } from 'lucide-react';
import { otherProjects } from '../../assets/otherProjectsConfig';
import { projects } from '../../assets/config';

/**
 * Renders the main projects grid with a "Load More" style CTA.
 */
export default function ProjectsGrid({ onOpenModal, onViewOtherProjects, showCta }) {
  return (
    <section 
      id="projects" 
      aria-labelledby="projects-title"
      className="
        pt-12 pb-12 md:pt-16 md:pb-20 lg:pb-28 
        bg-white border-t border-gray-200 /* <--- TOP TIER: Endless canvas boundary */
      " 
    > 
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 
            id="projects-title" 
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight"
          >
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed text-balance">
            A selection of high-impact projects showcasing modern front-end techniques, accessibility, and performance.
          </p>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {projects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onOpenModal={() => onOpenModal(project)}
            />
          ))}
        </div>

        {/* CTA Button */}
        {showCta && (
          <div className="flex justify-center mt-16 md:mt-20">
            <button
              onClick={onViewOtherProjects}
              className="
                group inline-flex items-center gap-2 sm:gap-3
                px-6 py-3 sm:px-10 sm:py-5
                text-base sm:text-lg font-bold
                rounded-full
                text-violet-900 bg-white
                border-2 border-violet-600
                shadow-lg sm:shadow-xl
                hover:shadow-2xl hover:bg-violet-50 hover:-translate-y-1
                focus:outline-none focus:ring-4 focus:ring-violet-300/50
                transition-all duration-300
                whitespace-nowrap
              "
              aria-expanded="false" 
              aria-controls="other-projects-section"
            >
              <span>See {otherProjects.length} Other Projects</span>
              <ArrowDown 
                size={22} 
                className="group-hover:translate-y-1 transition-transform duration-300" 
              />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

// Prop Type validation for strict professionalism
ProjectsGrid.propTypes = {
  onOpenModal: PropTypes.func.isRequired,
  onViewOtherProjects: PropTypes.func.isRequired,
  showCta: PropTypes.bool
};
