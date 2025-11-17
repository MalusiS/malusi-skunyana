// src/App.jsx

import React, { useState } from 'react';

// Import Layout Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Import Section Components
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';

// Import Project Components & Data
import ProjectsGrid from './components/projects/ProjectsGrid';
import ProjectModal from './components/projects/ProjectModal';
import { projects } from './assets/config';

export default function App() {
  const [openProject, setOpenProject] = useState(null);

  // Helper to find the project data for the modal
  const selectedProject = projects.find(p => p.id === openProject?.id);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <div className="max-w-7xl mx-auto">
        
        <Header />

        <main className="px-6 pb-24 space-y-24">
          
          <Hero />
          
          {/* ProjectsGrid receives the setter function to open the modal */}
          <ProjectsGrid onOpenModal={setOpenProject} />
          
          <About />
          <Skills />
          <Contact />

        </main>
      </div>

      {/* ProjectModal receives the selected data and the close function */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setOpenProject(null)} 
      />

      <Footer />
    </div>
  );
}
