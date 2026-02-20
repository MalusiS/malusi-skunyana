// src/components/sections/OtherProjects.jsx

import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import SimpleProjectCard from '../projects/SimpleProjectCard';
import { otherProjects } from '../../assets/otherProjectsConfig.js';
import { ArrowDown, ArrowUp } from 'lucide-react';

const PROJECTS_PER_PAGE = 6;

export default function OtherProjects({ isVisible }) {
  const [visibleCount, setVisibleCount] = useState(PROJECTS_PER_PAGE);
  const sectionRef = useRef(null);

  const allProjects = otherProjects || [];

  // Smooth scroll + reset count when section becomes visible
  useEffect(() => {
    if (!isVisible) return;

    requestAnimationFrame(() => {
      // Functional update prevents stale state issues
      setVisibleCount((prev) => (prev === PROJECTS_PER_PAGE ? prev : PROJECTS_PER_PAGE));

      if (sectionRef.current) {
        sectionRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    });
  }, [isVisible]);

  if (!isVisible) return null;

  if (allProjects.length === 0) {
    return (
      <section
        id="other-projects"
        ref={sectionRef}
        className="pt-12 pb-12 md:pt-16 md:pb-20 lg:pb-28 text-center"
        aria-labelledby="other-projects-title"
      >
        <h2 id="other-projects-title" className="sr-only">
          Other Projects
        </h2>
        <p className="text-xl text-red-600 font-medium">
          Additional projects could not be loaded. Please check configuration.
        </p>
      </section>
    );
  }

  const projectsToShow = allProjects.slice(0, visibleCount);
  const hasMore = visibleCount < allProjects.length;
  const canCollapse = visibleCount > PROJECTS_PER_PAGE;

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + PROJECTS_PER_PAGE, allProjects.length));
  };

  const handleShowLess = () => {
    setVisibleCount(PROJECTS_PER_PAGE);
    sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="other-projects"
      ref={sectionRef}
      aria-labelledby="other-projects-title"
      className="
        pt-12 pb-12 md:pt-16 md:pb-20 lg:pb-28 /* <--- CRITICAL FIX: Responsive Bottom Padding */
        bg-gray-50/50 border-t border-gray-100
      "
    >
      <div className="max-w-7xl mx-auto px-6">
        <header className="text-center mb-10 md:mb-14">
          <h2
            id="other-projects-title"
            className="
              text-3xl md:text-4xl lg:text-5xl
              font-extrabold text-gray-900 tracking-tight
              animate-in fade-in duration-700
            "
          >
            Other Projects & Demos
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Additional experiments, freelance work, and smaller applications showcasing a variety of skills.
          </p>
        </header>

        {/* Projects Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
          role="list"
        >
          {projectsToShow.map((project, index) => (
            <div
              key={project.id || index}
              role="listitem"
              className="
                animate-in fade-in slide-in-from-bottom-10 duration-700 fill-mode-both
              "
              style={{ animationDelay: `${(index % PROJECTS_PER_PAGE) * 100}ms` }}
            >
              <SimpleProjectCard {...project} />
            </div>
          ))}
        </div>

        {/* Load More / Show Less */}
        {(hasMore || canCollapse) && (
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mt-16 md:mt-20">
            {hasMore && (
              <button
                onClick={handleLoadMore}
                className="
                  group inline-flex items-center gap-3
                  px-8 py-4 md:px-10 md:py-5
                  text-lg md:text-xl font-bold rounded-full
                  text-white bg-violet-600
                  shadow-xl shadow-violet-600/30
                  hover:bg-violet-700 hover:shadow-2xl hover:-translate-y-1
                  focus:outline-none focus:ring-4 focus:ring-violet-300/50
                  transition-all duration-300
                "
                aria-label={`Load ${Math.min(PROJECTS_PER_PAGE, allProjects.length - visibleCount)} more projects`}
              >
                Load More
                <ArrowDown size={24} className="group-hover:translate-y-1 transition-transform duration-300" />
              </button>
            )}

            {canCollapse && (
              <button
                onClick={handleShowLess}
                className="
                  group inline-flex items-center gap-3
                  px-8 py-4 md:px-10 md:py-5
                  text-lg md:text-xl font-bold rounded-full
                  text-violet-900 bg-white
                  border-2 border-violet-600
                  shadow-xl
                  hover:shadow-2xl hover:bg-violet-50 hover:scale-105
                  focus:outline-none focus:ring-4 focus:ring-violet-300/50
                  transition-all duration-300
                "
                aria-label="Show only first 6 projects"
              >
                Show Less
                <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform duration-300" />
              </button>
            )}
          </div>
        )}

        {/* Screen reader live region */}
        <div className="sr-only" aria-live="polite">
          Showing {visibleCount} of {allProjects.length} additional projects.
        </div>
      </div>
    </section>
  );
}

OtherProjects.propTypes = {
  isVisible: PropTypes.bool.isRequired,
};
