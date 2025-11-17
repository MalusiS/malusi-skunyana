// src/components/sections/About.jsx

import React from 'react';
import ReactMarkdown from 'react-markdown';
import { ArrowUpRight } from 'lucide-react';
import { RESUME_URL } from '../../assets/config';

export default function About() {
  return (
    <section id="about" className="bg-indigo-50 p-10 rounded-xl shadow-inner">
      <h3 className="text-4xl font-bold text-gray-800 mb-6 border-b border-indigo-200 pb-2">About Malusi</h3>
      <div className="grid md:grid-cols-3 gap-8 items-center">
        <div className="md:col-span-2 space-y-4 text-gray-700 text-lg">
          <div>
            <ReactMarkdown>
              My journey into technology was a deliberate one. My previous career in **accounting and data management** was built on meticulous attention to detail, complex data reconciliation, and a methodical approach to problem-solving. I found that the same skills that ensure financial reliability—precision and logic—are exactly what makes an excellent developer.
            </ReactMarkdown>
          </div>
          <div>
            <ReactMarkdown>
              I have spent the last two years translating this analytical mindset into a robust technical toolkit, focusing on **React, Node.js, and Test-Driven Development (TDD)**. I am not just a developer; I am an analytical problem-solver who can write clean, tested code.
            </ReactMarkdown>
          </div>
          <p className="font-semibold text-indigo-800">
            I am eager to join a team where my unique perspective can contribute to highly reliable, user-focused applications.
          </p>
          <a href={RESUME_URL} download className="mt-4 inline-flex items-center text-base font-medium text-indigo-600 hover:text-indigo-800 transition">
            Download Full Resume <ArrowUpRight size={18} className="ml-1" />
          </a>
        </div>
        {/* Professional photo */}
        <div className="md:col-span-1">
          <img 
            src="/malusi-professional-photo.png" 
            alt="Malusi Skunyana Professional Photo" 
            className="rounded-full w-48 h-48 object-cover mx-auto border-4 border-indigo-300 shadow-xl" 
          />
        </div>
      </div>
    </section>
  );
}
