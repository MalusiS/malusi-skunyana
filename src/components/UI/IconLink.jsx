// src/components/UI/IconLink.jsx

import React from 'react';
import PropTypes from 'prop-types';

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
      rel="noopener noreferrer" /* <--- TOP TIER: The complete security standard */
      aria-label={label}
      className="
        inline-flex items-center justify-center p-2 rounded-lg
        text-gray-600 hover:text-violet-600 hover:bg-violet-50 /* <--- TOP TIER: Brand-matched with a subtle hover box */
        hover:scale-110 hover:-translate-y-1 /* <--- TOP TIER: Matches the floating physics of the rest of the site */
        focus:outline-none focus-visible:ring-4 focus-visible:ring-violet-500/30 /* <--- TOP TIER: Strict keyboard A11y */
        transition-all duration-300 ease-in-out
        motion-reduce:transform-none motion-reduce:transition-none
      "
    >
      {children}
    </a>
  );
}

// Prop Type validation for strict professionalism
IconLink.propTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
