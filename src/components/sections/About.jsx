// src/components/sections/About.jsx

import React from 'react';
import PropTypes from 'prop-types';
import { ArrowDown, FileText } from 'lucide-react';
import { PROFILE_PHOTO_URL } from '../../assets/config';

export default function About({ onOpenResume }) {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="
        pt-12 pb-12 md:pt-16 md:pb-20 lg:pb-28 /* <--- CRITICAL FIX: Responsive Bottom Padding */
        bg-violet-50/30
        animate-in fade-in slide-in-from-bottom-12 duration-1000 motion-reduce:animate-none
      "
    >
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Photo Column */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end lg:sticky lg:top-32 h-fit"> 
            <div className="
              group relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96
              rounded-full overflow-hidden
              shadow-2xl
              ring-8 ring-violet-200/50
              transition-transform duration-500 hover:scale-105
            ">
              <img
                src={PROFILE_PHOTO_URL}
                alt="Malusi Skunyana professional portrait"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
            </div>
          </div>

          {/* Content Column */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start space-y-12">
            <h2
              id="about-title"
              className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center lg:text-left tracking-tight"
            >
              About Malusi
            </h2>

            <div className="text-lg text-gray-700 space-y-10 leading-relaxed text-center lg:text-left">
              <p>
                My journey into technology was deliberate. My previous career in{' '}
                <strong className="font-bold text-violet-800">accounting and data management</strong>{' '}
                built a foundation of meticulous attention to detail, complex data reconciliation, and a methodical approach to problem-solving.
              </p>

              <p>
                Over the last two years, I've translated this analytical mindset into a robust technical toolkit, specializing in{' '}
                <strong className="font-bold text-violet-800">React, Node.js, and Test-Driven Development (TDD)</strong>.
                I'm not just a developer — I'm an analytical problem-solver who writes clean, tested, reliable code.
              </p>

              <blockquote className="relative pl-8 pr-6 py-8 border-l-4 border-violet-600 bg-white/80 rounded-r-2xl shadow-lg text-left max-w-2xl mx-auto lg:mx-0">
                <p className="text-xl md:text-2xl font-semibold text-violet-900 italic leading-relaxed text-balance">
                  "I am eager to join a team where my unique perspective can contribute to highly reliable, user-focused applications."
                </p>
              </blockquote>

              <div className="pt-8 flex justify-center lg:justify-start">
                <button
                  onClick={onOpenResume}
                  type="button"
                  className="
                    group inline-flex items-center gap-4
                    px-10 py-5
                    text-xl font-bold rounded-full
                    text-white bg-violet-600
                    shadow-2xl shadow-violet-600/30
                    hover:bg-violet-700 hover:shadow-2xl hover:-translate-y-1
                    focus:outline-none focus:ring-4 focus:ring-violet-300/50
                    transition-all duration-300
                  "
                  aria-label="Open Resume in a modal"
                >
                  <FileText size={26} className="group-hover:scale-110 transition-transform" />
                  View Resume
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Skills CTA */}
        <div className="flex justify-center mt-20 md:mt-24"> 
          <a
            href="#skills"
            className="
              group inline-flex items-center gap-2 sm:gap-4
              px-6 py-3 sm:px-10 sm:py-5
              text-base sm:text-xl font-semibold
              rounded-full
              text-violet-900 bg-white
              border-2 border-violet-600
              shadow-lg sm:shadow-2xl
              hover:shadow-xl hover:bg-violet-50 hover:scale-105
              focus:outline-none focus:ring-4 focus:ring-violet-300/50
              transition-all duration-300
              whitespace-nowrap
            "
          >
            Explore My Technical Toolkit
            <ArrowDown 
              size={20} 
              className="sm:w-7 sm:h-7 group-hover:translate-y-1 transition-transform duration-300" 
            />
          </a>
        </div>
      </div>
    </section>
  );
}

About.propTypes = {
  onOpenResume: PropTypes.func.isRequired,
};
