// src/components/sections/Hero.jsx

import React from 'react';
import { ArrowDown } from 'lucide-react'; // Adding an arrow icon for visual cue

export default function Hero() {
  
  return (
    <section 
      id="hero" 
      className="
        pt-16
        text-center 
        h-[80vh]
        flex flex-col items-center justify-center
        text-white 
        bg-gradient-to-r from-indigo-500 to-purple-600 
        shadow-lg
      " 
    >
      <h2 
        className="
          text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-4
        "
      >
        Malusi Skunyana
      </h2>
      <p 
        className="
          text-xl sm:text-2xl font-light mb-6 opacity-90
        "
      >
        Front End Developer
      </p>

      {/* Content now loads instantly */}
      <div 
        className="
          mt-2 text-base sm:text-xl text-white max-w-3xl mx-auto font-serif italic leading-relaxed px-4
        "
      >
        <p className="inline">
          I build <strong>clean, accessible, and data-driven web applications</strong>, bridging analytical problems and technical solutions. Currently advancing to full-stack engineering.
        </p>
      </div>

      <a 
        href="#about" // Link to the next section in the story
        className="
          mt-10 
          inline-flex 
          items-center 
          gap-2
          px-8 
          py-3 
          border 
          border-transparent 
          text-lg 
          font-semibold 
          rounded-full 
          shadow-md 
          text-indigo-900 
          bg-white 
          hover:bg-gray-50 
          transition 
          transform 
          hover:scale-105
        "
      >
        My Background & Journey
        <ArrowDown size={20} />
      </a>
    </section>
  );
}
