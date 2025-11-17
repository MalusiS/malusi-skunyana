// src/components/sections/Skills.jsx

import React from 'react';

export default function Skills() {
  return (
    <section id="skills" className="py-12">
      <h3 className="text-4xl font-bold text-gray-800 mb-8 border-b pb-2">Technical Toolkit</h3>
      <div className="grid md:grid-cols-3 gap-8">
        
        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h4 className="text-2xl font-semibold mb-3 text-indigo-700">Front End Development</h4>
          <p className="text-gray-700">JavaScript (ES6+), React, Redux, HTML5, CSS3, Tailwind CSS, Sass, Responsive Design, D3.js</p>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h4 className="text-2xl font-semibold mb-3 text-indigo-700">Back End & Data</h4>
          <p className="text-gray-700">Node.js, Python, SQL, REST APIs, JSON, Serverless Functions (Netlify/AWS Lambda)</p>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h4 className="text-2xl font-semibold mb-3 text-indigo-700">Testing & Practices</h4>
          <p className="text-gray-700">Test-Driven Development (TDD), Unit Testing, Git/GitHub, CI/CD (Netlify), Accessibility (A11y)</p>
        </div>

      </div>
    </section>
  );
}
