// src/components/sections/SkillsMatrix.jsx

import React from 'react';
import { skills } from '../../assets/config';

export default function SkillsMatrix() {
  return (
    <section id="skills" className="bg-slate-900/50 pb-24 pt-16" aria-labelledby="skills-heading">
      <div className="container">
        <div className="mb-12">
          <p className="font-mono text-sm uppercase tracking-widest text-cyan-400">Capabilities</p>
          <h2 id="skills-heading" className="mt-2 text-3xl font-bold text-white sm:text-4xl">
            Technical Skills
          </h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Production Engineering */}
          <SkillColumn title={skills.production.title} items={skills.production.items} accent="cyan" />
          
          {/* Systems & Mathematics */}
          <SkillColumn title={skills.systems.title} items={skills.systems.items} accent="slate" />
        </div>
      </div>
    </section>
  );
}

function SkillColumn({ title, items, accent }) {
  const maxLevel = 10;
  const barColor = accent === 'cyan' ? 'bg-cyan-500' : 'bg-slate-400';
  const bgColor = accent === 'cyan' ? 'bg-cyan-950/30' : 'bg-slate-800/50';

  // Dynamically group skills by their category defined in config.js
  const groupedSkills = items.reduce((acc, skill) => {
    (acc[skill.category] = acc[skill.category] || []).push(skill);
    return acc;
  }, {});
  
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h3 className="mb-8 text-lg font-bold text-white">{title}</h3>
      
      <div className="space-y-8">
        {Object.entries(groupedSkills).map(([category, categorySkills]) => (
          <div key={category} className="space-y-4">
            {/* Category Sub-Header */}
            <h4 className="border-b border-slate-800 pb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
              {category}
            </h4>
            
            {/* Skill Bars */}
            {categorySkills.map((skill) => (
              <div key={skill.name}>
                <div className="mb-1.5 flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-300">{skill.name}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className={`h-2 flex-1 overflow-hidden rounded-full ${bgColor}`}>
                    <div 
                      className={`h-full rounded-full ${barColor} transition-all duration-1000 ease-out`} 
                      style={{ width: `${(skill.level / maxLevel) * 100}%` }}
                      role="progressbar"
                      aria-valuenow={skill.level}
                      aria-valuemin="0"
                      aria-valuemax="10"
                      aria-label={`${skill.name} proficiency`} 
                    />
                  </div>
                  <span className="w-6 text-right font-mono text-xs text-slate-400">{skill.level}</span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
