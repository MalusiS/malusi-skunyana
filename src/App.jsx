// src/App.jsx

import React, { useState, useEffect, useMemo, lazy, Suspense } from 'react';

// Import Layout Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Import Section Components
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';

// Standard Import for Core Content (Prevents layout shift/errors)
import ProjectsGrid from './components/projects/ProjectsGrid';
import { projects } from './assets/config';

// --- LAZY LOAD MODALS & OPTIONAL SECTIONS ---
const OtherProjects = lazy(() => import('./components/sections/OtherProjects'));
const ProjectModal = lazy(() => import('./components/projects/ProjectModal'));
const ResumeModal = lazy(() => import('./components/layout/ResumeModal'));

export default function App() {
  const [openProject, setOpenProject] = useState(null);
  const [showOtherProjects, setShowOtherProjects] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const selectedProject = useMemo(
    () => projects.find(p => p.id === openProject?.id),
    [openProject]
  );

  // Scroll Spy Logic
  useEffect(() => {
    const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Handlers
  const handleShowOtherProjects = () => setShowOtherProjects(true);
  const handleResetOtherProjects = () => showOtherProjects && setShowOtherProjects(false);
  const openResume = (e) => {
    if (e) e.preventDefault();
    setIsResumeOpen(true);
  };
  const closeResume = () => setIsResumeOpen(false);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      {/* ACCESSIBILITY: Skip Link */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-violet-600 focus:text-white focus:px-4 focus:py-2 focus:top-4 focus:left-4 rounded-md shadow-lg"
      >
        Skip to main content
      </a>

      <Header 
        onNavigate={handleResetOtherProjects} 
        onOpenResume={openResume}
        activeSection={activeSection}
      />
      
      <main id="main-content" className="outline-none" tabIndex="-1">
        
        <Hero />
        <About onOpenResume={openResume} />
        <Skills />
        
        <ProjectsGrid 
          onOpenModal={setOpenProject} 
          onViewOtherProjects={handleShowOtherProjects}
          showCta={!showOtherProjects} 
        />

        <Suspense fallback={<div className="py-20 text-center text-violet-600 animate-pulse font-medium">Loading projects...</div>}>
          <OtherProjects 
            isVisible={showOtherProjects} 
            onLoaded={() => {}}
          />
        </Suspense>
        
        <Contact />

      </main>

      {/* PERFORMANCE: Suspense Wrapper for Modals */}
      <Suspense fallback={<div />}>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setOpenProject(null)} 
          />
        )}
        
        {isResumeOpen && (
           <ResumeModal 
             isOpen={isResumeOpen} 
             onClose={closeResume} 
           />
        )}
      </Suspense>

      <Footer />
    </div>
  );
}
