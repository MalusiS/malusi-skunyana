// src/App.jsx

import React, { useState } from 'react';

// Import Layout Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ResumeModal from './components/layout/ResumeModal';

// Import Section Components
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';
import OtherProjects from './components/sections/OtherProjects';

// Import Project Components & Data
import ProjectsGrid from './components/projects/ProjectsGrid';
import ProjectModal from './components/projects/ProjectModal';
import { projects } from './assets/config';

export default function App() {
  const [openProject, setOpenProject] = useState(null);
  const [showOtherProjects, setShowOtherProjects] = useState(false);
  
  // State for Resume Modal
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const selectedProject = projects.find(p => p.id === openProject?.id);

  const handleShowOtherProjects = () => {
    setShowOtherProjects(true);
  };

  const handleResetOtherProjects = () => {
    if (showOtherProjects) {
      setShowOtherProjects(false);
    }
  };
  
  const handleOtherProjectsLoaded = () => {
    // Optional logging
  };

  // Handlers for Resume Modal
  const openResume = (e) => {
    if(e) e.preventDefault(); // Prevent default anchor link behavior if passed
    setIsResumeOpen(true);
  };
  const closeResume = () => setIsResumeOpen(false);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      {/* Pass openResume handler to Header */}
      <Header onNavigate={handleResetOtherProjects} onOpenResume={openResume} />
      
      <main className="px-4 sm:px-6 pb-24 space-y-24">
        <Hero />
        
        {/* Pass openResume handler to About */}
        <About onOpenResume={openResume} />
        
        <Skills />
        
        <ProjectsGrid 
          onOpenModal={setOpenProject} 
          onViewOtherProjects={handleShowOtherProjects}
          showCta={!showOtherProjects} 
        />

        <OtherProjects 
          isVisible={showOtherProjects} 
          onLoaded={handleOtherProjectsLoaded}
        />
        
        <Contact />
      </main>

      {/* Modals */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setOpenProject(null)} 
      />
      
      {/* Resume Modal */}
      <ResumeModal 
        isOpen={isResumeOpen} 
        onClose={closeResume} 
      />

      <Footer />
    </div>
  );
}
