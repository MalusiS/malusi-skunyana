// src/components/projects/ProjectsGrid.jsx

import React from 'react';
import ProjectCard from './ProjectCard';
import { ArrowDown } from 'lucide-react';
import { otherProjects } from '../../assets/otherProjectsConfig';
import { projects } from '../../assets/config';

/**
 * @param {object} props
 * @param {function} props.onOpenModal - Function to open the project detail modal.
 * @param {function} props.onViewOtherProjects - Function to trigger showing the other projects section.
 * @param {boolean} props.showCta - Flag to determine if the 'See Other Projects' button should be visible.
 */
export default function ProjectsGrid({ onOpenModal, onViewOtherProjects, showCta }) {
  return (
    <section id="projects" className="py-12 md:py-2">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-2">
          Featured Projects
        </h2>
        <p className="text-xl text-gray-500 mb-10">
          A selection of high-impact projects showcasing my most advanced skills and expertise.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onOpenModal={() => onOpenModal(project)} 
              // Spread the rest of the project properties
              {...project} 
            />
          ))}
        </div>

        {/* See Other Projects CTA */}
        {showCta && (
          <div className="flex justify-center mt-16">
            <button
              onClick={onViewOtherProjects}
              className="flex items-center space-x-2 px-8 py-3 text-lg font-semibold rounded-lg text-indigo-600 border-2 border-indigo-600 hover:bg-indigo-50 transition duration-300"
              aria-expanded={!showCta} 
              aria-controls="other-projects"
            >
              <span>See {otherProjects.length} Other Projects</span>
              <ArrowDown size={20} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
