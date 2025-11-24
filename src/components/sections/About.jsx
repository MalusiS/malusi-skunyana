// src/components/sections/About.jsx

import React from 'react';
import { ArrowDown, Download } from 'lucide-react';
import { RESUME_URL, PROFILE_PHOTO_URL } from '../../assets/config';

export default function About() {
  return (
    <section 
      id="about" 
      // RETAINING OLD STYLING: bg-indigo-50, padding, rounded corners, hover effects
      className="
        bg-indigo-50 p-10 rounded-xl shadow-inner
        transition duration-300 ease-in-out
        hover:shadow-xl hover:-translate-y-1 cursor-default
        mx-auto max-w-7xl
      "
    >
      <div className="px-0">
        
        {/* HEADING STYLE MATCHING OLD VERSION */}
        <h3 className="text-4xl font-bold text-gray-800 mb-6 border-b border-indigo-200 pb-2">
          About Malusi
        </h3>

        {/* Main Content Grid: Photo/Resume on Right (1/3), Text on Left (2/3) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          
          {/* Right Column: Photo and Download CTA (Grouped for priority) */}
          <div className="md:col-span-1 flex flex-col items-center order-first md:order-last">
            
            {/* 1. Professional Photo (Slightly higher placement) */}
            <div className="
              w-48 h-48 mb-4
              rounded-full overflow-hidden 
              shadow-xl 
              border-4 border-indigo-300 
            ">
              <img 
                src={PROFILE_PHOTO_URL}
                alt="Malusi Skunyana Professional Photo"
                className="w-full h-full object-cover"
              />
            </div>

            {/* 2. Download Resume CTA (Moved just below the photo) */}
            <a 
              href={RESUME_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              download
              className="
                inline-flex items-center gap-2
                px-4 py-2 
                text-base font-medium rounded-full 
                shadow-md 
                text-white 
                bg-indigo-600 
                hover:bg-indigo-700 
                transition 
                transform 
                hover:scale-[1.03]
              "
            >
              Download Resume
              <Download size={18} />
            </a>
          </div>


          {/* Left Column: Introduction Text (2/3 width) */}
          <div className="md:col-span-2 text-lg text-gray-700 space-y-6">
            <p>
              My journey into technology was a deliberate one. My previous career in <strong>accounting and data management</strong> was built on meticulous attention to detail, complex data reconciliation, and a methodical approach to problem-solving. I found that the same skills that ensure financial reliability—precision and logic—are exactly what makes an excellent developer.
            </p>
            <p>
              I have spent the last two years translating this analytical mindset into a robust technical toolkit, focusing on <strong>React, Node.js, and Test-Driven Development (TDD)</strong>. I am not just a developer; I am an analytical problem-solver who can write clean, tested code.
            </p>
            <p className="font-semibold text-indigo-800">
              I am eager to join a team where my unique perspective can contribute to highly reliable, user-focused applications.
            </p>
          </div>
          
        </div>

        {/* CTA at the bottom - Spacing adjusted: mt-12 to mt-8, pt-6 to pt-4 */}
        <div className="mt-8 pt-4 text-center border-t border-indigo-200">
          <a 
            href="#skills" 
            className="
              inline-flex items-center justify-center 
              gap-2
              px-8 py-3 
              border-2 border-indigo-600 
              text-lg font-semibold 
              rounded-full 
              shadow-lg 
              text-indigo-700 
              bg-white 
              hover:bg-indigo-50 
              transition 
              transform 
              hover:scale-[1.03]
            "
          >
            View Technical Toolkit
            <ArrowDown size={20} />
          </a>
        </div>

      </div>
    </section>
  );
}
