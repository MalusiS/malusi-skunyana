// src/components/layout/Header.jsx

import React from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react'; 
import { GITHUB_URL, LINKEDIN_URL, RESUME_URL, EMAIL } from '../../assets/config';
import IconLink from '../UI/IconLink';
import logo from '/logo.svg';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Header({ onNavigate }) {
  return (
    <header className="p-6 flex items-center justify-between border-b sticky top-0 bg-white z-10 shadow-sm">
      
      {/* Brand/Logo Area */}
      <div className="flex items-center">
        <a href="/" onClick={onNavigate} className="flex items-center">
          <img 
            src={logo} 
            alt="Malusi Skunyana Logo" 
            className="h-10 md:h-8 w-auto rounded-md shadow-sm"
          />
        </a>
      </div>
      
      {/* Primary Navigation Links */}
      <nav className="hidden md:flex items-center gap-6">
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
      
      {/* Social Icons and Resume Button */}
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
        
        <a 
          href={RESUME_URL} 
          download
          className="flex items-center text-sm px-3 py-1 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50 transition"
        >
          <FileText size={16} className="mr-1" /> Resume 
        </a>
      </nav>
    </header>
  );
}
