// src/components/layout/Footer.jsx

import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { GITHUB_URL, LINKEDIN_URL, EMAIL } from '../../assets/config';

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-12">
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="text-sm font-bold text-white">Malusi Skunyana</p>
            <p className="mt-1 text-xs text-slate-400">
              Software Engineer | Founder, WorkCentrik
            </p>
            <p className="mt-3 text-xs italic text-slate-400">
              "Evidence beats credentials. Process beats products. Consistency beats intensity."
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="text-slate-400 transition-colors hover:text-cyan-400" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="text-slate-400 transition-colors hover:text-cyan-400" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href={`mailto:${EMAIL}`} className="text-slate-400 transition-colors hover:text-cyan-400" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-slate-900 pt-8 sm:flex-row">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} Malusi Skunyana. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <span className="rounded border border-slate-800 px-2 py-1 font-mono text-xs text-slate-400">
              BSc CS (Systems & Software Engineering) Candidate
            </span>
            <span className="rounded border border-slate-800 px-2 py-1 font-mono text-xs text-slate-400">
              Independent Study
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
