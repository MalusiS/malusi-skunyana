// src/components/sections/OtherProjects.jsx

import React, { useState, useEffect, useRef } from 'react';
import SimpleProjectCard from '../projects/SimpleProjectCard';
import { otherProjects } from '../../assets/otherProjectsConfig.js';

const PROJECTS_PER_PAGE = 6;

/**
 * @param {object} props
 * @param {boolean} props.isVisible - Controls whether the section is mounted/visible.
 * @param {function} props.onLoaded - Function to call when the section is loaded (for scrolling).
 */
export default function OtherProjects({ isVisible, onLoaded }) {
  // ✔ Hooks must ALWAYS run — even when hidden
  const [visibleCount, setVisibleCount] = useState(PROJECTS_PER_PAGE);
  const sectionRef = useRef(null);

  // Fallback ensures no crash if import fails
  const allProjects = otherProjects || [];

  /**
   * ✔ Must run on every render.
   * The effect *only activates* after isVisible becomes true.
   */
  useEffect(() => {
    if (!isVisible) return;

    if (sectionRef.current) {
      // Slight delay ensures scroll happens after mount
      setTimeout(() => {
        sectionRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 0);

      if (onLoaded) {
        onLoaded();
      }
    }
  }, [isVisible, onLoaded]);

  // -----------------------------
  // SAFE EARLY RETURNS (AFTER HOOKS)
  // -----------------------------
  if (!isVisible) {
    return null;
  }

  if (allProjects.length === 0) {
    return (
      <section id="other-projects" ref={sectionRef} className="py-12 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xl text-red-500">
            Could not load project data. Please check asset path configuration.
          </p>
        </div>
      </section>
    );
  }

  // Slice projects for pagination
  const projectsToShow = allProjects.slice(0, visibleCount);

  // Compute whether button should display
  const hasMore = visibleCount < allProjects.length;

  const handleLoadMore = () => {
    setVisibleCount(allProjects.length);
  };

  return (
    <section
      id="other-projects"
      ref={sectionRef}
      className="py-12 md:py-24"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-2">
          Other Projects & Demos
        </h2>
        <p className="text-xl text-gray-500 mb-10">
          A collection of smaller projects and freeCodeCamp challenges demonstrating core skills.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsToShow.map((project) => (
            <SimpleProjectCard key={project.id} {...project} />
          ))}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="flex justify-center mt-12">
            <button
              onClick={handleLoadMore}
              className="px-6 py-3 text-lg font-semibold rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition duration-300 shadow-md hover:shadow-lg"
            >
              Load {allProjects.length - visibleCount} More Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
