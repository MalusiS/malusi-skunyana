// src/components/layout/Header.jsx

import React from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

// Import all constants from the central config file
import { GITHUB_URL, LINKEDIN_URL, RESUME_URL, EMAIL } from '../../assets/config';

// Import the new reusable UI component
import IconLink from '../UI/IconLink';

export default function Header() {
  return (
    <header className="p-6 flex items-center justify-between border-b sticky top-0 bg-white z-10 shadow-sm">
      
      {/* Brand/Logo Area */}
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-bold text-gray-800">Malusi Skunyana</h1>
        <p className="text-sm text-gray-500 hidden sm:block">Front End Developer | Analytical Precision</p>
      </div>
      
      {/* Navigation Links (Icons and Resume Button) */}
      <nav className="flex items-center gap-4">
        
        {/* Refactored Icon Links */}
        <IconLink href={GITHUB_URL} label="GitHub Profile">
          <Github size={20} />
        </IconLink>
        
        <IconLink href={LINKEDIN_URL} label="LinkedIn Profile">
          <Linkedin size={20} />
        </IconLink>
        
        <IconLink href={`mailto:${EMAIL}`} label="Send Email">
          <Mail size={20} />
        </IconLink>
        
        {/* Primary CTA: Download Resume (remains the same) */}
        <a 
          href={RESUME_URL} 
          download 
          className="flex items-center text-sm px-3 py-1 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50 transition"
        >
          <Download size={16} className="mr-1" /> Resume
        </a>
      </nav>
    </header>
  );
}
