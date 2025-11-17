// src/components/sections/Hero.jsx

import React from 'react';
import ReactMarkdown from 'react-markdown';

export default function Hero() {
  return (
    <section 
      id="hero" 
      className="
        pt-16 
        text-center 
        h-[500px] 
        flex flex-col items-center justify-center
        text-white
        bg-gradient-to-r from-indigo-500 to-purple-600 
        shadow-lg
      "
    >
      <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight">
        Malusi Skunyana — Front End Developer
      </h2>
      <div className="mt-6 text-xl text-white max-w-3xl mx-auto font-serif italic">
        <ReactMarkdown>
          "I build **clean, accessible, and data-driven web applications**, bridging analytical problems and technical solutions. Currently advancing to full-stack engineering."
        </ReactMarkdown>
      </div>
      <a 
        href="#projects" 
        className="
          mt-8 
          inline-flex 
          items-center 
          px-6 
          py-3 
          border 
          border-transparent 
          text-base 
          font-medium 
          rounded-full 
          shadow-sm 
          text-indigo-800
          bg-white 
          hover:bg-gray-100 
          transition 
          transform 
          hover:scale-105
        "
      >
        View My Meticulous Work
      </a>
    </section>
  );
}
