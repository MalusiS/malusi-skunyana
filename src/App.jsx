// src/App.jsx (UPDATED WITH NAVIGATION RESET)

import React, { useState } from 'react';

// Import Layout Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

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
  // State to control visibility of the "Other Projects" section
  const [showOtherProjects, setShowOtherProjects] = useState(false);

  // Helper to find the project data for the modal
  const selectedProject = projects.find(p => p.id === openProject?.id);

  // Function to show the "Other Projects" section when the CTA is clicked
  const handleShowOtherProjects = () => {
    setShowOtherProjects(true);
  };

  // NEW: Function to hide the "Other Projects" section when navigating elsewhere
  const handleResetOtherProjects = () => {
    if (showOtherProjects) {
      setShowOtherProjects(false);
    }
  };
  
  // Function called by OtherProjects when it finishes loading and scrolling
  const handleOtherProjectsLoaded = () => {
    // Console log for debugging, if necessary
    console.log("Other Projects section loaded and scrolled to.");
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Pass the reset handler to the Header */}
        <Header onNavigate={handleResetOtherProjects} />

        <main className="px-6 pb-24 space-y-24">
          
          <Hero />
          
          {/* ProjectsGrid receives the setter function to open the modal and the visibility control */}
          <ProjectsGrid 
            onOpenModal={setOpenProject} 
            onViewOtherProjects={handleShowOtherProjects}
            showCta={!showOtherProjects} // Only show the CTA if other projects are NOT visible
          />

          {/* Render the OtherProjects section based on state */}
          <OtherProjects 
            isVisible={showOtherProjects} 
            onLoaded={handleOtherProjectsLoaded}
          />
          
          <About />
          <Skills />
          <Contact />

        </main>
      </div>

      {/* ProjectModal remains unchanged */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setOpenProject(null)} 
      />

      <Footer />
    </div>
  );
}
