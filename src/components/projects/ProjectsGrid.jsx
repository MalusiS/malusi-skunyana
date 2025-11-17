// src/components/projects/ProjectsGrid.jsx

import React from 'react';
import { projects } from '../../assets/config'; // Import the project data

// Import the reusable card component (you will create this next)
import ProjectCard from './ProjectCard'; 

/**
 * Renders the main projects section, mapping project data to ProjectCard components.
 * @param {object} props - Component props.
 * @param {function} props.onOpenModal - Function passed from App.jsx to set the state for the modal.
 */
export default function ProjectsGrid({ onOpenModal }) {
  return (
    <section id="projects" className="py-12">
      <h3 className="text-4xl font-bold text-gray-800 mb-10 border-b pb-2">Featured Projects</h3>
      
      <div className="grid md:grid-cols-3 gap-8">
        {/* Map over the projects data and render a card for each */}
        {projects.map(project => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            onOpenModal={() => onOpenModal(project)} // Pass a function to open the modal with the project data
          />
        ))}
      </div>
    </section>
  );
}
