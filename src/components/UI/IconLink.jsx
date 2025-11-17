// src/components/UI/IconLink.jsx

import React from 'react';

/**
 * A reusable link component for external icons.
 * @param {object} props - Component props.
 * @param {string} props.href - The URL to link to.
 * @param {string} props.label - The accessibility label (aria-label).
 * @param {React.ReactNode} props.children - The icon component (e.g., <GitHub />).
 */
export default function IconLink({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="text-gray-700 hover:text-indigo-600 transition"
      aria-label={label}
    >
      {children}
    </a>
  );
}
