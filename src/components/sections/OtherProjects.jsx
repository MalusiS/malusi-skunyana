// src/components/sections/OtherProjects.jsx

import React, { useState, useEffect, useRef } from 'react';
import SimpleProjectCard from '../projects/SimpleProjectCard';
import { otherProjects } from '../../assets/otherProjectsConfig.js';

const PROJECTS_PER_PAGE = 6;

export default function OtherProjects({ isVisible, onLoaded }) {
  const [visibleCount, setVisibleCount] = useState(PROJECTS_PER_PAGE);
  const sectionRef = useRef(null);
  const allProjects = otherProjects || [];

  // Scroll into view AND RESET COUNT when opened
  useEffect(() => {
    if (!isVisible) return;

    // Defer resetting visibleCount so we don't call setState synchronously in the effect,
    // which can cause cascading renders; reuse the existing timeout used for scrolling.
    if (sectionRef.current) {
      setTimeout(() => {
        // Reset visible count if needed (functional update avoids stale closures)
        setVisibleCount(prev => (prev === PROJECTS_PER_PAGE ? prev : PROJECTS_PER_PAGE));

        sectionRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });

        if (onLoaded) onLoaded();
      }, 0);
    } else {
      // If there's no ref yet, still defer the reset to avoid sync setState in effect.
      setTimeout(() => {
        setVisibleCount(prev => (prev === PROJECTS_PER_PAGE ? prev : PROJECTS_PER_PAGE));
        if (onLoaded) onLoaded();
      }, 0);
    }
  }, [isVisible, onLoaded]);

  if (!isVisible) return null;

  if (allProjects.length === 0) {
    return (
      <section id="other-projects" ref={sectionRef} className="py-12 md:py-4">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xl text-red-500 animate-fade-up">
            Could not load project data. Please check asset path configuration.
          </p>
        </div>
      </section>
    );
  }

  const projectsToShow = allProjects.slice(0, visibleCount);
  const hasMoreProjects = visibleCount < allProjects.length;

  const handleLoadMore = () => {
    // Show only the next set of 6
    setVisibleCount(prev =>
      Math.min(prev + PROJECTS_PER_PAGE, allProjects.length)
    );
  };

  return (
    <section id="other-projects" ref={sectionRef} className="py-12 md:py-4">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-2 animate-fade-up">
          Other Projects & Demos
        </h2>
        <p className="text-xl text-gray-500 mb-10 animate-fade-up delay-100">
          A collection of additional projects that highlight a variety of skills and technologies.
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsToShow.map((project, index) => (
            <div
              key={project.id}
              className={`animate-fade-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <SimpleProjectCard {...project} />
            </div>
          ))}
        </div>

        {/* CTA: Only show when there are more projects to reveal */}
        {hasMoreProjects && (
          <div className="flex justify-center mt-12 animate-fade-up delay-200">
            <button
              onClick={handleLoadMore}
              className="px-6 py-3 text-lg font-semibold rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition duration-300 shadow-md hover:shadow-lg"
            >
              See More Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
