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
          className="flex items-center gap-2 rounded-md text-lg font-bold text-white transition-colors hover:text-cyan-400 focus:outline-none"
          aria-label="Go to home"
        >
          <span className="font-mono text-cyan-500">{'<'}</span>
          MalusiS
          <span className="font-mono text-cyan-500">{'/>'}</span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={(e) => handleNav(item.id, e)}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors focus:outline-none ${
                activeSection === item.id
                  ? 'bg-cyan-950/30 text-cyan-400'
                  : 'text-slate-400 hover:bg-slate-800 hover:text-white'
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
            className="rounded-md p-2 text-slate-400 transition-colors hover:text-white focus:outline-none"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md p-2 text-slate-400 transition-colors hover:text-white focus:outline-none"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <button
            onClick={(e) => { e.currentTarget.blur(); onOpenResume(); }}
            className="ml-2 flex items-center gap-1.5 rounded-md bg-cyan-700 px-3 py-2 text-sm font-bold text-slate-50 transition-colors hover:bg-cyan-400 focus:outline-none"
          >
            <FileText size={14} />
            Resume
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="rounded-md p-2 text-slate-400 focus:outline-none md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-slate-800 bg-slate-950 px-4 pb-4 md:hidden">
          <nav className="mt-2 flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={(e) => handleNav(item.id, e)}
                className={`rounded-md px-3 py-2 text-left text-sm font-medium transition-colors focus:outline-none ${
                  activeSection === item.id
                    ? 'bg-cyan-950/30 text-cyan-400'
                    : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="my-2 h-px bg-slate-800" />
            <div className="flex gap-2">
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-slate-400 hover:text-white focus:outline-none">
                <Github size={16} /> GitHub
              </a>
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-slate-400 hover:text-white focus:outline-none">
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>
            <button
              onClick={() => { setMobileOpen(false); onOpenResume(); }}
              className="mt-2 flex items-center justify-center gap-2 rounded-md bg-cyan-700 px-3 py-2 text-sm font-bold text-slate-50 transition-colors hover:bg-cyan-400 focus:outline-none"
            >
              <FileText size={14} /> View Resume
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
