// src/components/layout/Footer.jsx

import React from 'react';
import { MapPin } from 'lucide-react';
import { GITHUB_URL, RESUME_URL, LOCATION } from '../../assets/config';

export default function Footer() {
  return (
    <footer className="border-t mt-12 p-6 text-center text-gray-600 text-sm">
      <p>Built by Malusi Skunyana | <MapPin size={14} className="inline mr-1" /> {LOCATION}</p>
      <p className="mt-2">
        <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition mx-2">Code on GitHub</a> | 
        <a href={RESUME_URL} download className="hover:text-indigo-600 transition mx-2">Download Resume</a>
      </p>
    </footer>
  );
}
