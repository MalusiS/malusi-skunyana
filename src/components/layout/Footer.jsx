// src/components/layout/Footer.jsx

import React from 'react';
import { Github, Linkedin, Mail, ArrowUp, MapPin, FileText } from 'lucide-react';  
import { GITHUB_URL, LINKEDIN_URL, EMAIL, LOCATION, RESUME_URL } from '../../assets/config';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="
        border-t border-gray-200/50 bg-white/50 py-12 md:py-16
        backdrop-blur-sm
        text-gray-700 text-sm md:text-base
      "
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">

          {/* Left */}
          <div className="flex items-center gap-2 text-center md:text-left">
            <MapPin size={18} className="text-violet-600" aria-hidden="true" />
            <p>
              Designed & built in {LOCATION} with React and Tailwind CSS
            </p>
          </div>

          {/* Center */}
          <nav
            // ADDED flex-wrap and justify-center to prevent mobile overflow
            className="flex flex-wrap justify-center items-center gap-x-6 gap-y-4"
            aria-label="Social and resume links"
          >
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer me"
              aria-label="View GitHub profile (opens in new tab)"
              className="group flex items-center gap-2 transition-colors hover:text-violet-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded px-1"
            >
              <Github size={20} />
              <span className="hidden sm:inline">GitHub</span>
            </a>

            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer me"
              aria-label="View LinkedIn profile (opens in new tab)"
              className="group flex items-center gap-2 transition-colors hover:text-violet-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded px-1"
            >
              <Linkedin size={20} />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>

            <a
              href={`mailto:${EMAIL}`}
              aria-label={`Send email to ${EMAIL}`}
              className="group flex items-center gap-2 transition-colors hover:text-violet-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded px-1"
            >
              <Mail size={20} />
              <span className="hidden sm:inline">Email</span>
            </a>

            <a
              href={RESUME_URL}
              download
              aria-label="Download resume (PDF)"
              className="group flex items-center gap-2 transition-colors hover:text-violet-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded px-1"
            >
              <FileText size={20} />
              <span className="hidden sm:inline">Resume</span>
            </a>
          </nav>

          {/* Right */}
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="group flex items-center gap-2 transition-colors hover:text-violet-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded px-2 py-1"
          >
            <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
            <span className="hidden md:inline">Back to Top</span>
          </button>
        </div>

        <p className="mt-12 text-center text-gray-600 text-sm">
          © {currentYear} Malusi Skunyana. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
