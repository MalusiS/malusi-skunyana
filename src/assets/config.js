// src/assets/config.js

export const FORMSPREE_ID = "xovzardj";
export const GITHUB_URL = 'https://github.com/MalusiS';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/malusis/';
export const RESUME_URL = '/Malusi_Skunyana_Resume.pdf';
export const PROFILE_PHOTO_URL = '/malusi-professional-photo.png';
export const EMAIL = 'malusiskunyana@gmail.com';
export const LOCATION = 'Cape Town, RSA';

export const projects = [
  {
    id: 'personal-portfolio',
    title: 'This Portfolio Site',
    tagline: 'High-performance SPA with perfect Lighthouse scores and responsive design.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Netlify'],
    github: 'https://github.com/MalusiS/malusi-skunyana',
    live: null, // Handled conditionally in the UI to prevent redundant page reloads
    image: '/projects/portfolio-hero.png',
    narrative: {
      problem: 'I required a professional platform to showcase the intersection of my analytical background and front-end engineering skills, demanding absolute technical perfection in performance and accessibility.',
      solution: 'Architected a fully responsive UI utilising custom React components, Tailwind CSS, and a serverless Formspree API. Achieved 100/100 Lighthouse scores across all metrics via strict semantic HTML and advanced JSON-LD metadata.',
      stack: ['React Architecture', 'Tailwind CSS', 'CI/CD Pipelines', 'Technical SEO']
    }
  },
  {
    id: 'hr-dashboard',
    title: 'HR Management Dashboard',
    tagline: 'Employee tracking tool digitising HR workflows with real-time features.',
    tech: ['React', 'JavaScript', 'CSS3', 'Hooks'],
    github: 'https://github.com/MalusiS/HR-System',
    live: 'https://malusis-hr-system.netlify.app/',
    image: '/projects/hr-dashboard.png',
    narrative: {
      problem: 'HR administrators needed to replace error-prone manual spreadsheets with a scalable, secure digital solution for tracking candidate pipelines and interview stages in real time.',
      solution: 'Engineered a modern, card-based interface featuring dynamic filtering, modal data entry, and robust state management. Prioritised strict data integrity to deliver a production-ready administrative tool.',
      stack: ['React Components', 'State Management', 'Dynamic UI', 'Data Validation']
    }
  },
  {
    id: 'bookmarks-manager',
    title: 'Shared Bookmarks Manager',
    tagline: 'WCAG-compliant utility for bookmark persistence and validation.',
    tech: ['Vanilla JS', 'HTML5', 'LocalStorage', 'Jest'],
    github: 'https://github.com/MalusiS/Piscine-Sprint-3-Project-Shared-Bookmarks',
    live: 'https://cyf-malusi-bookmarks.netlify.app/',
    image: '/projects/shared-bookmarks.png',
    narrative: {
      problem: 'Users required a reliable, cross-session bookmarking tool that was 100% accessible to screen readers and protected against malformed data entry.',
      solution: 'Built a utility application from the ground up using semantic HTML and ARIA roles. Integrated complex input validation and LocalStorage APIs, backed by rigorous Test-Driven Development (TDD) using Jest.',
      stack: ['Vanilla JavaScript', 'TDD (Jest)', 'Web Storage API', 'WCAG AA Standards']
    }
  }
];