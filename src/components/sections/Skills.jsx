// src/components/sections/Skills.jsx

import React from 'react';
import { ArrowDown, Database, Layout, Terminal } from 'lucide-react';

const skillCategories = [
  {
    id: 'frontend',
    title: 'Front End Engineering',
    icon: Layout,
    description:
      'Building responsive, accessible, and performant user interfaces with component-driven architecture.',
    skills: [
      'JavaScript (ES6+)',
      'React & Redux',
      'HTML5 & Semantic Markup',
      'CSS3 & Sass',
      'Tailwind CSS',
      'D3.js Visualization',
      'WCAG 2.1 Accessibility',
    ],
  },
  {
    id: 'backend',
    title: 'Back End & Architecture',
    icon: Database,
    description:
      'Designing structured APIs and scalable data flows with a focus on maintainability and clarity.',
    skills: [
      'Node.js',
      'Express',
      'Python',
      'SQL (PostgreSQL)',
      'RESTful API Design',
      'JSON Data Structures',
      'Serverless (AWS/Netlify)',
    ],
  },
  {
    id: 'devops',
    title: 'DevOps & Quality',
    icon: Terminal,
    description:
      'Ensuring reliability through test-driven workflows, strict version control, and continuous integration.',
    skills: [
      'TDD (Jest/RTL)',
      'Git & GitHub Flow',
      'CI/CD Pipelines',
      'Vite & Webpack',
      'Performance Optimization',
      'Agile/Scrum Workflows',
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="
        pt-12 pb-12 md:pt-16 md:pb-20 lg:pb-28
        bg-white border-t border-gray-200 /* <--- TOP TIER: Pure white with a crisp hairline boundary */
        animate-in fade-in slide-in-from-bottom-12 duration-1000
        motion-reduce:animate-none
      "
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <header className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2
            id="skills-title"
            className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight"
          >
            Technical Toolkit
          </h2>
          <p className="mt-6 text-xl text-gray-600 leading-relaxed text-balance">
            The technologies and engineering practices I use to build accessible,
            scalable, and highly reliable applications.
          </p>
        </header>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {skillCategories.map((category) => {
            const Icon = category.icon;

            return (
              <article
                key={category.id}
                className="
                  group bg-gray-50 rounded-2xl p-8 
                  border border-gray-100
                  shadow-sm hover:shadow-xl hover:border-violet-200
                  transition-all duration-300 ease-in-out
                  hover:-translate-y-1
                  motion-reduce:transform-none
                  motion-reduce:transition-none
                  flex flex-col h-full
                "
              >
                {/* Card Header */}
                <div className="mb-6">
                  <div
                    className="
                      w-14 h-14 mb-6
                      flex items-center justify-center
                      bg-white rounded-xl 
                      text-violet-600 shadow-sm border border-gray-100
                      group-hover:bg-violet-600 group-hover:text-white
                      transition-colors duration-300
                      motion-reduce:transition-none
                    "
                  >
                    <Icon
                      size={26}
                      aria-hidden="true"
                      focusable="false"
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {category.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed text-sm">
                    {category.description}
                  </p>
                </div>

                {/* Skill List */}
                <div className="mt-auto pt-6 border-t border-gray-200/60">
                  <ul
                    role="list"
                    className="flex flex-wrap gap-2"
                  >
                    {category.skills.map((skill) => (
                      <li key={skill}>
                        <span
                          className="
                            px-3 py-1.5
                            text-sm font-medium
                            bg-white text-gray-700 /* 
                            border border-gray-200 rounded-lg
                            shadow-sm
                            group-hover:border-violet-200
                            group-hover:bg-violet-50
                            group-hover:text-violet-700
                            transition-colors duration-300
                            motion-reduce:transition-none
                          "
                        >
                          {skill}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>

        {/* Projects CTA */}
        <div className="mt-16 md:mt-20 flex justify-center">
          <a
            href="#projects"
            aria-label="Scroll to projects section"
            className="
              group inline-flex items-center gap-2 sm:gap-3
              px-6 py-3 sm:px-10 sm:py-5
              text-base sm:text-lg font-bold
              text-white bg-violet-600
              rounded-full
              shadow-lg shadow-violet-600/30
              hover:bg-violet-700 hover:shadow-xl
              hover:-translate-y-1
              focus:outline-none focus:ring-4 focus:ring-violet-300/50
              transition-all duration-300
              motion-reduce:transform-none
              motion-reduce:transition-none
              whitespace-nowrap
            "
          >
            View My Meticulous Work
            <ArrowDown
              size={20}
              aria-hidden="true"
              focusable="false"
              className="
                sm:w-6 sm:h-6
                group-hover:translate-y-1
                transition-transform duration-300
                motion-reduce:transform-none
              "
            />
          </a>
        </div>

      </div>
    </section>
  );
}
