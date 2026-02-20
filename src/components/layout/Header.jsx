// src/components/layout/Header.jsx

import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, FileText, Menu, X } from 'lucide-react';
import { GITHUB_URL, LINKEDIN_URL, EMAIL } from '../../assets/config';
import IconLink from '../UI/IconLink';
import logo from '/logo.svg';

const navItems = [
  { name: 'About', href: '#about', id: 'about' },
  { name: 'Skills', href: '#skills', id: 'skills' },
  { name: 'Projects', href: '#projects', id: 'projects' },
  { name: 'Contact', href: '#contact', id: 'contact' },
];

export default function Header({ onNavigate, onOpenResume, activeSection }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mobileMenuRef = useRef(null);

  const isActive = (id) => activeSection === id;
  const isHero = activeSection === 'hero';

  // Optimized scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(prev => (isScrolled !== prev ? isScrolled : prev));
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on outside click
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        isMobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target) &&
        !e.target.closest('button[aria-controls="mobile-menu"]')
      ) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [isMobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  // Unified nav handler
  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
    if (onNavigate) onNavigate();
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 shadow-md border-gray-200'
          : 'bg-white/80 shadow-sm border-transparent'
      } backdrop-blur-md supports-[backdrop-filter]:bg-white/70`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="/"
              onClick={handleNavClick}
              className={`flex items-center transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 rounded-md ${
                isHero ? 'scale-105' : ''
              }`}
              aria-current={isHero ? 'true' : undefined}
            >
              <img
                src={logo}
                alt="Home"
                className={`h-8 w-auto rounded-md shadow-sm transition-all duration-300 ${
                  isHero ? 'shadow-lg ring-2 ring-violet-600/30' : 'hover:shadow-md'
                }`}
              />
            </a>
          </div>
          
          {/* DESKTOP Navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {navItems.map((item) => {
              const active = isActive(item.id);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={onNavigate}
                  className={`relative text-sm font-medium transition-colors duration-200 pb-1 ${
                    active
                      ? 'text-violet-600 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-violet-600'
                      : 'text-gray-600 hover:text-violet-600'
                  }`}
                  aria-current={active ? 'true' : undefined}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>
          
          {/* DESKTOP Socials & Actions */}
          <div className="hidden md:flex items-center gap-4">
            <IconLink href={GITHUB_URL} label="GitHub Profile">
              <Github size={20} />
            </IconLink>
            <IconLink href={LINKEDIN_URL} label="LinkedIn Profile">
              <Linkedin size={20} />
            </IconLink>
            <IconLink href={`mailto:${EMAIL}`} label="Send Email">
              <Mail size={20} />
            </IconLink>
            <button
              onClick={onOpenResume}
              className="flex items-center rounded-md bg-violet-600 px-4 py-2 text-sm font-medium text-white hover:bg-violet-700 transition-colors focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 shadow-sm hover:shadow-md"
            >
              <FileText size={16} className="mr-2" /> Resume
            </button>
          </div>
          
          {/* MOBILE Menu Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-100 hover:text-violet-600 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">{isMobileMenuOpen ? 'Close main menu' : 'Open main menu'}</span>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE Menu */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          ref={mobileMenuRef}
          className="md:hidden bg-white shadow-xl border-t border-gray-100 absolute w-full left-0 top-full animate-in slide-in-from-top-2 duration-200"
        >
          <div className="space-y-2 px-4 pb-6 pt-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={handleNavClick}
                className={`block rounded-lg px-4 py-3 text-base font-semibold transition-colors ${
                  isActive(item.id)
                    ? 'bg-violet-50 text-violet-700'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-violet-600'
                }`}
                aria-current={isActive(item.id) ? 'true' : undefined}
              >
                {item.name}
              </a>
            ))}
            
            {/* Mobile Socials */}
            <div className="flex justify-center gap-8 pt-6 border-t border-gray-100 mt-6">
              <IconLink href={GITHUB_URL} label="GitHub Profile">
                <Github size={24} />
              </IconLink>
              <IconLink href={LINKEDIN_URL} label="LinkedIn Profile">
                <Linkedin size={24} />
              </IconLink>
              <IconLink href={`mailto:${EMAIL}`} label="Send Email">
                <Mail size={24} />
              </IconLink>
            </div>
            
            {/* Mobile Resume Button */}
            <button
              onClick={() => { handleNavClick(); onOpenResume(); }}
              className="mt-6 flex w-full items-center justify-center rounded-lg bg-violet-600 px-4 py-4 text-base font-bold text-white hover:bg-violet-700 transition-colors shadow-md"
            >
              <FileText size={20} className="mr-2" /> View Resume
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
