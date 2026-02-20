// src/components/projects/SimpleProjectCard.jsx

import React, { useId, useState } from 'react';
import PropTypes from 'prop-types';
import { Github, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

export default function SimpleProjectCard({
  title,
  description,
  techStack = [], // Default value prevents crash
  githubLink,
  liveLink,
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const descriptionId = useId();

  // Threshold to determine if text is long enough to need truncation
  const TRUNCATE_LENGTH = 120;
  const isLongDescription = description.length > TRUNCATE_LENGTH;

  // If text is short, always show it full. If long, respect state.
  const shouldTruncate = isLongDescription && !isExpanded;

  return (
    <article
      className="
        group flex flex-col h-full
        bg-white rounded-xl border border-gray-100
        shadow-sm hover:shadow-xl
        transition-all duration-300 ease-in-out
        hover:-translate-y-1
        motion-reduce:transform-none motion-reduce:transition-none
        overflow-hidden
      "
    >
      {/* Gradient Accent */}
      <div className="h-2 bg-gradient-to-r from-violet-600 to-purple-500" />

      <div className="p-6 flex flex-col flex-grow">

        {/* Title & Description */}
        <header className="mb-6">
          <h3
            className="
              text-xl font-bold text-gray-900
              group-hover:text-violet-600
              transition-colors duration-200
            "
          >
            {title}
          </h3>

          <div className="mt-3">
            <p
              id={descriptionId}
              className={`
                text-sm text-gray-600 leading-relaxed
                transition-all duration-300
                ${shouldTruncate ? 'line-clamp-3' : ''}
              `}
            >
              {description}
            </p>

            {/* Only show button if text is actually long enough to truncate */}
            {isLongDescription && (
              <button
                type="button"
                onClick={() => setIsExpanded(!isExpanded)}
                aria-expanded={isExpanded}
                aria-controls={descriptionId}
                className="
                  mt-2 inline-flex items-center gap-1
                  text-xs font-semibold text-violet-700
                  hover:text-violet-900
                  focus:outline-none
                  focus-visible:ring-2 focus-visible:ring-violet-600 rounded
                  transition-colors duration-200
                "
              >
                {isExpanded ? (
                  <>Show Less <ChevronUp size={14} /></>
                ) : (
                  <>Read More <ChevronDown size={14} /></>
                )}
              </button>
            )}
          </div>
        </header>

        {/* Tech Stack - Pushed to bottom of flex container with mt-auto */}
        <div className="mt-auto mb-6">
          <ul className="flex flex-wrap gap-2" role="list">
            {Array.isArray(techStack) && techStack.map((tech) => (
              <li key={tech}>
                <span
                  className="
                    text-xs font-medium
                    bg-violet-50 text-violet-700
                    px-2.5 py-1 rounded-md
                    border border-violet-100
                  "
                >
                  {tech}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Actions Footer */}
        <footer className="flex items-center gap-3 pt-4 border-t border-gray-100 mt-auto">
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex-1 flex items-center justify-center gap-2
                px-4 py-2.5 text-sm font-medium
                text-white bg-violet-700
                rounded-lg
                hover:bg-violet-800
                shadow-sm hover:shadow
                focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-1
                transition-all duration-200
              "
              aria-label={`View live demo of ${title}`}
            >
              <ExternalLink size={16} />
              Demo
            </a>
          )}

          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              flex-1 flex items-center justify-center gap-2
              px-4 py-2.5 text-sm font-medium
              rounded-lg border border-gray-200
              text-gray-700 hover:bg-gray-50 hover:text-gray-900
              focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-1
              transition-all duration-200
            `}
            aria-label={`View source code for ${title}`}
          >
            <Github size={16} />
            Code
          </a>
        </footer>

      </div>
    </article>
  );
}

SimpleProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  techStack: PropTypes.arrayOf(PropTypes.string),
  githubLink: PropTypes.string.isRequired,
  liveLink: PropTypes.string,
};
