// src/App.jsx

import React, { useState, useEffect, useMemo, lazy, Suspense } from 'react';

// Layout Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Core Sections
import Hero from './components/sections/Hero';
import AgencyShowcase from './components/sections/AgencyShowcase';
import ProjectsGrid from './components/projects/ProjectsGrid';
import Contact from './components/sections/Contact';

// Lazy-loaded Sections
const CurriculumTracker = lazy(() => import('./components/sections/CurriculumTracker'));
const SkillsMatrix = lazy(() => import('./components/sections/SkillsMatrix'));
const About = lazy(() => import('./components/sections/About'));
const ArchiveProjects = lazy(() => import('./components/sections/ArchiveProjects'));

// Lazy-loaded Modals
const ProjectModal = lazy(() => import('./components/projects/ProjectModal'));
const ResumeModal = lazy(() => import('./components/layout/ResumeModal'));

// Custom Hooks
import { useScrollSpy } from './hooks/useScrollSpy';

// Error Boundary
import ErrorBoundary from './components/common/ErrorBoundary';

// Data
import { projects, agencyProjects } from './assets/config';

export default function App() {
  const [openProject, setOpenProject] = useState(null);
  const [showArchive, setShowArchive] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isProjectLoading, setIsProjectLoading] = useState(false);

  const isModalOpen = !!openProject || isResumeOpen;

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  const selectedProject = useMemo(() => {
    setIsProjectLoading(true);
    const found = agencyProjects.find(p => p.id === openProject?.id) ||
                 projects.find(p => p.id === openProject?.id);
    setIsProjectLoading(false);
    return found;
  }, [openProject, agencyProjects, projects]);

  useScrollSpy(
    [
      "hero",
      "agency",
      "projects",
      "curriculum",
      "skills",
      "about",
      "contact",
    ],
    setActiveSection
  );

  const openResume = (e) => {
    if (e) e.preventDefault();
    setIsResumeOpen(true);
  };
  const closeResume = () => setIsResumeOpen(false);
  const openArchive = () => setShowArchive(true);
  const closeArchive = () => setShowArchive(false);
  const toggleArchive = () => setShowArchive(prev => !prev);

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-300">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-cyan-600 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>

      <Header
        onNavigate={closeArchive}
        onOpenResume={openResume}
        activeSection={activeSection}
      />

      <main
        id="main-content"
        className="outline-none"
        tabIndex="-1"
        aria-hidden={isModalOpen}
        style={{ visibility: isModalOpen ? 'hidden' : 'visible' }}
      >
        <Hero key="hero" />
        <AgencyShowcase key="agency" onOpenModal={setOpenProject} />
        
        {/* --- PROJECTS GROUPING --- */}
        {/* We wrap both in a div so the Archive appears immediately below the Grid */}
        <div id="projects" className="relative">
          <ProjectsGrid
            onOpenModal={setOpenProject}
            onToggleArchive={toggleArchive}
            showArchive={showArchive}
          />
          
          <Suspense fallback={
            <div className="py-12 text-center text-cyan-500 animate-pulse font-medium">
              Loading archive...
            </div>
          }>
            <ErrorBoundary>
              <ArchiveProjects id="archive-section" isVisible={showArchive} />
            </ErrorBoundary>
          </Suspense>
        </div>
        {/* --- END PROJECTS GROUPING --- */}

        <Suspense fallback={
          <div className="py-12 text-center text-cyan-500 animate-pulse font-medium">
            Loading...
          </div>
        }>
          <ErrorBoundary>
            <CurriculumTracker key="curriculum" />
            <SkillsMatrix key="skills" />
            <About key="about" onOpenResume={openResume} />
          </ErrorBoundary>
        </Suspense>

        <Contact key="contact" />
      </main>

      <ErrorBoundary>
        <Suspense fallback={<div />}>
          {isProjectLoading ? (
            <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-500"></div>
            </div>
          ) : (
            selectedProject && <ProjectModal project={selectedProject} onClose={() => setOpenProject(null)} />
          )}
          {isResumeOpen && <ResumeModal isOpen={isResumeOpen} onClose={closeResume} />}
        </Suspense>
      </ErrorBoundary>
      <Footer />
    </div>
  );
}
