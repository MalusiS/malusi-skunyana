// src/App.jsx

import React, { useState } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import ProjectsGrid from './components/projects/ProjectsGrid'; 
import OtherProjects from './components/sections/OtherProjects'; 
import Contact from './components/sections/Contact';

// Import the ProjectModal component
import ProjectModal from './components/projects/ProjectModal';
// Import the projects data
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

  // Function to hide the "Other Projects" section when navigating elsewhere
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

        <main className="px-4 sm:px-6 pb-8 space-y-12 md:space-y-16">
          
          {/* 1. HERO: Introduction */}
          <Hero />
        
          {/* 2. ABOUT: Context & Background */}
          <About />
        
          {/* 3. SKILLS: Technical Qualification */}
          <Skills />

          {/* 4. FEATURED PROJECTS: The Proof */}
          <ProjectsGrid 
            onOpenModal={setOpenProject} 
            onViewOtherProjects={handleShowOtherProjects}
            showCta={!showOtherProjects} // Only show the CTA if other projects are NOT visible
          />

          {/* 5. OTHER PROJECTS: Depth (Hidden by default) */}
          <OtherProjects 
            isVisible={showOtherProjects} 
            onLoaded={handleOtherProjectsLoaded}
          />
          
          {/* 6. CONTACT: Call to Action */}
          <Contact />

        </main>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setOpenProject(null)} 
      />

      <Footer />
    </div>
  );
}
