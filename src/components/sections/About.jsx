// src/components/sections/About.jsx

import React from 'react';
import { Briefcase, Code, Cpu, ArrowRight } from 'lucide-react';
import { RESUME_URL, PROFILE_PHOTO_URL } from '../../assets/config';

export default function About({ onOpenResume }) {
  const phases = [
    {
      icon: <Briefcase size={20} />,
      period: '2017 – 2026',
      title: 'Accounting & Operations',
      description: 'Built a career in bookkeeping and logistics management. Developed expertise in data validation, operational analytics, and stakeholder management — skills now applied to systems engineering and production infrastructure.',
      skills: ['Data Validation', 'Financial Reconciliation', 'Operations Management'],
      isActive: false
    },
    { 
      icon: <Code size={20} />,
      period: '2023 – Present',
      title: 'Front-End Engineering',
      description: 'Transitioned into software engineering through rigorous self-study and mentorship. Achieved 100/100 Lighthouse accessibility scores, WCAG AA compliance, and production deployment expertise. Founded WorkCentrik in December 2025 to deliver elite web platforms for real clients. Mentor at Code Your Future since July 2025.',
      skills: ['React', 'Accessibility', 'Technical SEO', 'Client Relations', 'Mentorship'],
      isActive: false
    },
    {
      icon: <Cpu size={20} />,
      period: '2026 – 2031',
      title: 'Systems & Software Engineering',
      description: 'Self-directing a 176-credit B.Sc. CS specializing in distributed systems, operating systems, and infrastructure. Capstone: a fault-tolerant, multi-tenant distributed key-value store utilizing Raft consensus, gRPC, and Prometheus/Grafana monitoring on Kubernetes.',
      skills: ['Distributed Systems', 'Database Internals', 'Security Engineering', 'SRE'],
      isActive: true
    }
  ];

  return (
    <section id="about" className="pt-16 pb-24" aria-labelledby="about-heading">
      <div className="container">
        <div className="mb-12">
          <p className="font-mono text-sm uppercase tracking-widest text-cyan-500">Background</p>
          <h2 id="about-heading" className="mt-2 text-3xl font-bold text-white sm:text-4xl">
            The Journey
          </h2>
        </div>

        {/* Photo + Intro */}
        <div className="mb-16 flex flex-col items-start gap-8 md:flex-row md:items-center">
          <div className="relative shrink-0">
            <div className="h-40 w-40 overflow-hidden rounded-2xl border-2 border-slate-700 bg-slate-800 md:h-48 md:w-48">
              <img
                src={PROFILE_PHOTO_URL}
                alt="Malusi Skunyana professional headshot"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-2 -right-2 h-6 w-6 rounded-full border-2 border-slate-950 bg-cyan-500" aria-hidden="true" />
          </div>
          
          <div className="max-w-2xl">
            <p className="text-lg leading-relaxed text-slate-300">
              I am a Software Engineer with an accounting background, blending analytical precision with
              modern web architecture. I am the Founder of WorkCentrik, a digital agency delivering
              production-grade web platforms. Concurrently, I am self-directing a rigorous 176-credit
              B.Sc. in Computer Science.
            </p>
            <p className="mt-4 text-slate-400">
              Before software engineering, I built a career in accounting and operations management. That 
              background forged expertise in data validation, operational analytics, and stakeholder 
              management — skills I now apply to production infrastructure and systems engineering.
            </p>
          </div>
        </div>

        {/* Semantic Timeline List */}
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-slate-800 hidden md:block" aria-hidden="true" />

          <ol className="space-y-8 list-none p-0 m-0">
            {phases.map((phase, idx) => (
              <li key={idx} className="relative md:pl-20">
                <div className="absolute left-6 top-6 hidden md:flex h-4 w-4 items-center justify-center rounded-full border-2 border-cyan-500 bg-slate-950" aria-hidden="true">
                  <div className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
                </div>

                <div className={`rounded-2xl border p-6 transition-all hover:border-slate-600 ${
                  phase.isActive
                  ? 'border-cyan-500/50 bg-cyan-950/10 shadow-[0_0_15px_rgba(6,182,212,0.1)]' 
                  : 'border-slate-800 bg-slate-900'
                }`}>
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-950/30 text-cyan-500" aria-hidden="true">
                      {phase.icon}
                    </div>
                    <div>
                      <span className="font-mono text-xs text-cyan-500">{phase.period}</span>
                      <h3 className="text-lg font-bold text-white">{phase.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-sm leading-relaxed text-slate-400 mb-4">{phase.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {phase.skills.map((skill) => (
                      <span key={skill} className="rounded-md bg-slate-800 px-2.5 py-1 text-xs font-medium text-slate-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={onOpenResume}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-6 py-3 text-sm font-medium text-slate-300 transition-all hover:border-cyan-500 hover:text-cyan-400"
          >
            View Full Resume <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
}
