// src/components/projects/SimpleProjectCard.jsx

import React, { useState } from 'react';
import { Github, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

/**
 * @param {object} props
 * @param {string} props.title - The title of the project.
 * @param {string} props.description - A brief description of the project.
 * @param {string[]} props.techStack - Array of technologies used.
 * @param {string} props.githubLink - URL to the GitHub repository.
 * @param {string} [props.liveLink] - URL to the live demo.
 */
export default function SimpleProjectCard({ title, description, techStack, githubLink, liveLink }) {
  // State to control description expansion
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`group flex flex-col bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden h-full transform hover:-translate-y-1 ${isExpanded ? 'row-span-2' : ''}`}>
      
      {/* Card Header with Gradient Accent */}
      <div className="h-2 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
      
      <div className="p-6 flex flex-col flex-grow">
        
        {/* Title and Description */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-200">
            {title}
          </h3>
          
          <div className="relative">
            <p className={`mt-3 text-gray-600 text-sm leading-relaxed transition-all duration-300 ${isExpanded ? '' : 'line-clamp-3'}`}>
              {description}
            </p>
            
            {/* Read More Button */}
            <button 
              onClick={toggleDescription}
              className="mt-1 flex items-center gap-1 text-xs font-semibold text-indigo-600 hover:text-indigo-800 focus:outline-none transition-colors"
            >
              {isExpanded ? (
                <>Show Less <ChevronUp size={14} /></>
              ) : (
                <>Read More <ChevronDown size={14} /></>
              )}
            </button>
          </div>
        </div>

        {/* Tech Stack Pills */}
        <div className="mt-auto mb-6">
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span 
                key={tech} 
                className="text-xs font-medium bg-indigo-50 text-indigo-700 px-2.5 py-1 rounded-md border border-indigo-100"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
          {liveLink && (
            <a 
              href={liveLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors shadow-sm hover:shadow"
            >
              <ExternalLink size={16} />
              <span>Demo</span>
            </a>
          )}
          
          <a 
            href={githubLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-colors border border-gray-200 hover:bg-gray-50 text-gray-700 ${!liveLink ? 'flex-1' : ''}`}
          >
            <Github size={16} />
            <span>Code</span>
          </a>
        </div>

      </div>
    </div>
  );
}
