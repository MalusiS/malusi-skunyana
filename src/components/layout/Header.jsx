// src/components/layout/Header.jsx

import React, { useState, useCallback } from 'react';
import { Menu, X, FileText, Github, Linkedin } from 'lucide-react';
import { navItems, GITHUB_URL, LINKEDIN_URL } from '../../assets/config';

// Update the component props: remove setActiveSection
export default function Header({ onNavigate, onOpenResume, activeSection }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = useCallback(
  (id, e) => {
    e?.currentTarget?.blur();

    const scrollToSection = () => {
      const el = document.getElementById(id);
      if (!el) return;

      const header = document.querySelector("header");
      const headerHeight = header?.offsetHeight ?? 64;

      window.scrollTo({
        top:
          window.scrollY +
          el.getBoundingClientRect().top -
          headerHeight,
        behavior: "smooth",
      });

      onNavigate?.();
    };

    if (mobileOpen) {
      setMobileOpen(false);

      requestAnimationFrame(() => {
        requestAnimationFrame(scrollToSection);
      });
    } else {
      scrollToSection();
    }
  },
    [mobileOpen, onNavigate]
  );

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <button 
          onClick={(e) => handleNav('hero', e)} 
          className="flex items-center gap-2 text-lg font-bold text-white hover:text-cyan-400 transition-colors focus:outline-none rounded-md"
          aria-label="Go to home"
        >
          <span className="font-mono text-cyan-500">{'<'}</span>
          MalusiS
          <span className="font-mono text-cyan-500">{'/>'}</span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={(e) => handleNav(item.id, e)}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors focus:outline-none ${
                activeSection === item.id
                  ? 'text-cyan-400 bg-cyan-950/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
              aria-current={activeSection === item.id ? 'page' : undefined}
            >
              {item.label}
            </button>
          ))}
          <div className="mx-2 h-4 w-px bg-slate-700" />
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-slate-400 hover:text-white transition-colors focus:outline-none rounded-md"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-slate-400 hover:text-white transition-colors focus:outline-none rounded-md"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <button
            onClick={(e) => { e.currentTarget.blur(); onOpenResume(); }}
            className="ml-2 flex items-center gap-1.5 rounded-md bg-cyan-600 px-3 py-2 text-sm font-medium text-white hover:bg-cyan-500 transition-colors focus:outline-none"
          >
            <FileText size={14} />
            Resume
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-slate-300 focus:outline-none rounded-md"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950 px-4 pb-4">
          <nav className="flex flex-col gap-1 mt-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={(e) => handleNav(item.id, e)}
                className={`px-3 py-2 text-sm font-medium rounded-md text-left transition-colors focus:outline-none ${
                  activeSection === item.id
                    ? 'text-cyan-400 bg-cyan-950/30'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="my-2 h-px bg-slate-800" />
            <div className="flex gap-2">
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-2 text-sm text-slate-400 hover:text-white focus:outline-none rounded-md">
                <Github size={16} /> GitHub
              </a>
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-2 text-sm text-slate-400 hover:text-white focus:outline-none rounded-md">
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>
            <button
              onClick={() => { setMobileOpen(false); onOpenResume(); }}
              className="mt-2 flex items-center justify-center gap-2 rounded-md bg-cyan-600 px-3 py-2 text-sm font-medium text-white hover:bg-cyan-500 focus:outline-none"
            >
              <FileText size={14} /> View Resume
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
