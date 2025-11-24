// src/components/sections/Skills.jsx

import React from 'react';
import { ArrowDown, Code2, Server, CheckCircle } from 'lucide-react'; // Ensure icons are imported

export default function Skills() {
  return (
    <section id="skills" className="py-12 md:py-4 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-4xl font-extrabold text-gray-800 mb-4 border-b pb-4">
          Technical Toolkit
        </h3>
        <p className="text-xl text-gray-500 mb-12">
          The technologies and methodologies I use to build robust, scalable applications.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Front End */}
          <div className="
            bg-gray-50 p-6 rounded-lg shadow-md animate-fade-up border border-gray-100 
            transition duration-300 ease-in-out
            hover:bg-white hover:shadow-xl hover:-translate-y-1 cursor-default
          ">
            <div className="flex items-center gap-3 mb-4">
              {/* Icon Container with background accent */}
              <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600">
                <Code2 size={28} />
              </div>
              <h4 className="text-2xl font-bold text-gray-900">
                Front End
              </h4>
            </div>
            <p className="text-gray-600 leading-relaxed">
              JavaScript (ES6+), React, Redux, HTML5, CSS3, Tailwind CSS, Sass, Responsive Design, D3.js
            </p>
          </div>

          {/* Back End & Data */}
          <div className="
            bg-gray-50 p-6 rounded-lg shadow-md animate-fade-up delay-100 border border-gray-100 
            transition duration-300 ease-in-out
            hover:bg-white hover:shadow-xl hover:-translate-y-1 cursor-default
          ">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600">
                <Server size={28} />
              </div>
              <h4 className="text-2xl font-bold text-gray-900">
                Back End & Data
              </h4>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Node.js, Python, SQL, REST APIs, JSON, Serverless Functions (Netlify/AWS Lambda)
            </p>
          </div>

          {/* Testing & Practices */}
          <div className="
            bg-gray-50 p-6 rounded-lg shadow-md animate-fade-up delay-200 border border-gray-100 
            transition duration-300 ease-in-out
            hover:bg-white hover:shadow-xl hover:-translate-y-1 cursor-default
          ">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600">
                <CheckCircle size={28} />
              </div>
              <h4 className="text-2xl font-bold text-gray-900">
                Testing & DevOps
              </h4>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Test-Driven Development (TDD), Unit Testing, Git/GitHub, CI/CD (Netlify), Accessibility (A11y)
            </p>
          </div>

        </div>

        {/* Narrative CTA: Bridging Skills to Projects */}
        <div className="mt-14 text-center">
          <a 
            href="#projects"
            className="
              inline-flex 
              items-center 
              gap-2
              px-8 
              py-4 
              text-lg 
              font-bold 
              text-white 
              bg-indigo-600 
              rounded-full 
              hover:bg-indigo-700 
              transition 
              shadow-lg 
              hover:shadow-xl
              transform 
              hover:-translate-y-1
            "
          >
            View My Meticulous Work
            <ArrowDown size={20} />
          </a>
        </div>

      </div>
    </section>
  );
}
