// src/components/layout/Header.jsx

import React from 'react';
import { Github, Linkedin, Mail, FileText, Eye } from 'lucide-react'; // Added Eye icon
import { GITHUB_URL, LINKEDIN_URL, EMAIL } from '../../assets/config'; // Removed RESUME_URL import here as we pass a handler
import IconLink from '../UI/IconLink';
import logo from '/logo.svg';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Header({ onNavigate, onOpenResume }) { // Added onOpenResume prop
  return (
    <header className="p-6 flex items-center justify-between border-b sticky top-0 bg-white z-10 shadow-sm">
      
      <div className="flex items-center">
        <a href="/" onClick={onNavigate} className="flex items-center">
          <img 
            src={logo} 
            alt="Malusi Skunyana Logo" 
            className="h-8 md:h-7 w-auto rounded-md shadow-sm"
          />
        </a>
      </div>
      
      <nav className="hidden md:flex items-center gap-6 mr-12">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={onNavigate}
            className="text-gray-600 hover:text-indigo-600 transition duration-150 font-medium"
          >
            {item.name}
          </a>
        ))}
      </nav>
      
      <nav className="flex items-center gap-4">
        
        <IconLink href={GITHUB_URL} label="GitHub Profile">
          <Github size={20} />
        </IconLink>
        
        <IconLink href={LINKEDIN_URL} label="LinkedIn Profile">
          <Linkedin size={20} />
        </IconLink>
        
        <IconLink href={`mailto:${EMAIL}`} label="Send Email">
          <Mail size={20} />
        </IconLink>
        
        {/* Resume button now triggers modal */}
        <button
          onClick={onOpenResume}
          className="flex items-center text-sm px-3 py-1 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50 transition"
          aria-label="View Resume"
        >
          <FileText size={16} className="mr-1" /> Resume 
        </button>
      </nav>
    </header>
  );
}
