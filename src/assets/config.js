// src/assets/config.js — Consolidated Configuration

// ========================= Professional Identity & Contact =========================
export const FORMSPREE_ID = "xovzardj";
export const GITHUB_URL = 'https://github.com/MalusiS';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/malusis/';
export const RESUME_URL = '/Malusi_Skunyana_Resume.pdf';
export const PROFILE_PHOTO_URL = '/malusi-professional-photo.png';
export const EMAIL = 'malusiskunyana@gmail.com';
export const LOCATION = 'Cape Town, South Africa';

// ========================= Curriculum Evidence Links =========================
export const CURRICULUM_REPO = 'https://github.com/MalusiS/bsc-cs-curriculum';
export const TRANSCRIPT_URL = 'https://cs.malusis.tech';
export const BLOG_URL = 'https://malusis.tech/blog'; // Ensure this doesn't 404 if unused

// ========================= Agency Work — Production-Grade Client Projects (Tier 1) =========================
export const agencyProjects = [
  {
    id: 'workcentrik-corporate',
    title: 'WorkCentrik Corporate Hub',
    client: 'WorkCentrik Digital Agency',
    tagline: 'High-performance agency infrastructure with a custom ScrollSpy engine and 100/100 Lighthouse scores.',
    tech: ['React 18', 'Vite', 'Custom CSS3', 'Intersection Observer API'],
    github: 'https://github.com/MalusiS/workcentrik-site',
    live: 'https://workcentrik.com',
    image: '/projects/workcentrik-hero.png',
    lighthouse: { performance: 100, accessibility: 100, bestPractices: 100, seo: 100 },
    narrative: {
      problem: 'The agency needed a digital presence that proved its own standard: the same performance, accessibility, and interaction-design quality it delivers for clients.',
      solution: 'Engineered a Lighthouse-100 optimized hub. Developed a custom IntersectionObserver tracking system with reverse DOM-order evaluation for precision navigation and integrated a dual-channel lead generation engine with dynamic routing.',
      stack: ['Systems Architecture', 'Intersection Observer API', 'Technical SEO', 'WCAG AA Compliance']
    }
  },
  {
    id: 'amo-south-africa',
    title: 'AMO South Africa Official Platform',
    client: 'AMO South Africa (NPC)',
    tagline: 'High-authority SPA for a registered NPC, featuring serverless routing and verified accessibility.',
    tech: ['React 18', 'React Router', 'Tailwind CSS v4', 'Netlify Edge'],
    github: 'https://github.com/MalusiS/amo-south-africa',
    live: 'https://amosouthafrica.org',
    image: '/projects/amo-south-africa.png',
    lighthouse: { performance: 100, accessibility: 100, bestPractices: 100, seo: 100 },
    narrative: {
      problem: 'A registered Non-Profit required a high-trust, multi-page digital platform to communicate core ministry pillars and drive community engagement without the overhead of a traditional backend.',
      solution: 'Architected a high-performance Single Page Application (SPA) utilizing a persistent global layout and serverless Netlify Forms for secure, backend-free lead routing. Delivered a verified 100/100 accessibility score via strict semantic HTML.',
      stack: ['SPA Architecture', 'Serverless Infrastructure', 'Tailwind CSS v4', 'Edge Routing']
    }
  },
];

// ========================= Featured Projects — Technical Depth Pieces (Tier 2) =========================
export const projects = [
  {
    id: 'hr-dashboard',
    title: 'HR Management Portal',
    tagline: 'A KPI-driven HR dashboard with real-time filtering, persistent state, and full WCAG 2.1 AA compliance.',
    tech: ['React 18', 'Vite', 'React Hooks', 'CSS3'],
    github: 'https://github.com/MalusiS/hr-dashboard',
    live: 'https://malusis-hr-dashboard.netlify.app/',
    image: '/projects/hr-dashboard.png',
    narrative: {
      problem: 'HR administrators needed to replace fragmented, error-prone spreadsheets with a centralized system for real-time candidate pipeline tracking and payroll visibility.',
      solution: 'Architected a state-driven React application using useMemo for optimized filtering, useCallback for stable event handlers, and localStorage persistence to provide a responsive administrative workflow. Added a KPI stats bar for headcount and payroll totals, and implemented full WCAG 2.1 AA compliance with focus traps and ARIA-compliant keyboard navigation.',
      stack: ['State Management (Hooks)', 'KPI Dashboards', 'Data Persistence', 'WCAG 2.1 AA Accessibility']
    }
  },
  {
    id: 'personal-portfolio',
    title: 'Engineering Portfolio',
    tagline: 'A production-grade showcase of the intersection between commercial success and academic rigor.',
    tech: ['React 19', 'Vite 7', 'Tailwind CSS v4', 'Netlify'],
    github: 'https://github.com/MalusiS/malusi-skunyana',
    live: null,
    image: '/projects/portfolio-hero.png',
    narrative: {
      problem: 'I needed a central hub to document my transition from front-end development to systems engineering, while showcasing agency output and BSc CS progress.',
      solution: 'Built on a config-driven architecture that decouples UI presentation from project data, with a 100/100 Lighthouse accessibility score and JSON-LD structured data for technical discoverability.',
      stack: ['Config-Driven Design', 'Technical SEO', 'CI/CD Pipelines', 'Accessibility (Lighthouse 100)']
    }
  },
  {
    id: 'bookmarks-manager',
    title: 'Shared Bookmarks Manager',
    tagline: 'A study in defensive programming, TDD, and absolute WCAG AA accessibility.',
    tech: ['Vanilla JS', 'Tailwind CSS', 'LocalStorage', 'Jest'],
    github: 'https://github.com/MalusiS/Piscine-Sprint-3-Project-Shared-Bookmarks',
    live: 'https://cyf-malusi-bookmarks.netlify.app/',
    image: '/projects/shared-bookmarks.png',
    narrative: {
      problem: 'The goal was to build a utility that remained robust against malicious data entry and state mutation bugs while remaining 100% accessible to screen readers.',
      solution: 'Engineered a defensive Vanilla JS application featuring an abstracted LocalStorage API with quota handling and UUID-based state management. Neutralized XSS vulnerabilities and validated core logic via a comprehensive Jest test suite.',
      stack: ['Defensive Programming', 'TDD (Jest)', 'Web Storage API', 'XSS Mitigation']
    }
  },
  {
    id: 'days-calendar',
    title: 'Temporal Logic Calendar Engine',
    tagline: 'A full-stack temporal solution featuring Node.js date parsing and TDD-validated iCal generation.',
    tech: ['Node.js', 'JavaScript', 'TDD', 'iCal Specification'],
    github: 'https://github.com/MalusiS/Piscine-Sprint-2-Project-Days-Calendar',
    live: 'https://cyf-malusirashaad-calendar.netlify.app/',
    image: '/projects/calendar-hero.png',
    narrative: {
      problem: 'Required a system capable of tracking commemorative days over a multi-decade span, requiring complex temporal rules and exportable standard formats.',
      solution: 'Engineered a Node.js backend script to parse complex recursive date rules and generate an industry-standard iCalendar (.ics) file. Employed a strict TDD approach to ensure date calculation accuracy across leap years and century boundaries.',
      stack: ['Temporal Logic', 'Node.js Backend', 'TDD', 'iCalendar Specification']
    }
  }
];

// ========================= Archive Projects — Learning Exercises & Experiments (Tier 3) =========================
export const archiveProjects = [
  { id: 'tv-show-explorer', title: 'TV Show Explorer App', tech: ['JavaScript', 'HTML', 'Fetch API'], github: 'https://github.com/MalusiS/Project-TV-Show', live: 'https://cyf-malusis-tv.netlify.app/' },
  { id: 'spaced-repetition', title: 'Spaced Repetition Tracker', tech: ['JavaScript', 'HTML', 'TDD'], github: 'https://github.com/MalusiS/Piscine-Sprint-1-Project-Spaced-Repetition-Tracker', live: 'https://cyf-malusiemmanuel-tracker.netlify.app/' },
  { id: 'programmer-humour', title: 'Programmer Humour', tech: ['HTML', 'CSS', 'JavaScript'], github: 'https://github.com/MalusiS/Programmer-humour', live: 'https://dev-humour.netlify.app' },
  { id: '25-5-clock', title: '25 + 5 Clock', tech: ['React', 'JavaScript'], github: 'https://github.com/MalusiS/25---5-Clock', live: 'https://malusis-clock.netlify.app' },
  { id: 'js-calculator', title: 'JavaScript Calculator', tech: ['React', 'JavaScript'], github: 'https://github.com/MalusiS/Javascript-Calculator', live: 'https://malusis-calculator.netlify.app/' },
  { id: 'drum-machine', title: 'Drum Machine', tech: ['React', 'JavaScript', 'HTML5 Audio'], github: 'https://github.com/MalusiS/Drum-Machine', live: 'https://malusis-drum.netlify.app' },
  { id: 'quote-machine', title: 'Random Quote Machine', tech: ['HTML', 'CSS', 'JavaScript', 'jQuery'], github: 'https://github.com/MalusiS/Quote-Machine', live: 'https://malusis-quote.netlify.app/' },
  { id: 'cash-register', title: 'Cash Register', tech: ['JavaScript', 'HTML', 'CSS'], github: 'https://github.com/MalusiS/Cash-Register', live: 'https://malusis-cash-register.netlify.app' },
  { id: 'telephone-validator', title: 'Telephone Number Validator', tech: ['HTML', 'CSS', 'JavaScript'], github: 'https://github.com/MalusiS/Telephone-Number', live: 'https://tel-number.netlify.app' },
  { id: 'roman-numeral', title: 'Roman Numeral Converter', tech: ['HTML', 'CSS', 'JavaScript'], github: 'https://github.com/MalusiS/Roman-Numeral', live: 'https://malusis-roman-numeral.netlify.app' },
  { id: 'palindrome-checker', title: 'Palindrome Checker', tech: ['Vanilla JavaScript', 'HTML', 'CSS'], github: 'https://github.com/MalusiS/Palindrome-Checker', live: 'https://malusis-palindrome.netlify.app/' },
  { id: 'decimal-binary', title: 'Decimal-Binary Converter', tech: ['HTML', 'CSS', 'JavaScript'], github: 'https://github.com/MalusiS/Decimal-Binary', live: 'https://malusis-decimal-binary.netlify.app' },
  { id: 'shopping-cart', title: 'Shopping Cart', tech: ['HTML', 'CSS', 'JavaScript (ES6+)'], github: 'https://github.com/MalusiS/Shopping-Cart', live: 'https://malusis-cart.netlify.app/' },
  { id: 'todo-app', title: 'To-do App', tech: ['HTML', 'CSS', 'Vanilla JavaScript', 'localStorage'], github: 'https://github.com/MalusiS/Todo-App', live: 'https://malusis-todo-app.netlify.app' },
  { id: 'music-player', title: 'Music Player', tech: ['JavaScript', 'HTML5 Audio', 'CSS'], github: 'https://github.com/MalusiS/Music-Player', live: 'https://malusis-music-player.netlify.app' },
  { id: 'calorie-counter', title: 'Calorie Counter', tech: ['HTML', 'CSS', 'JavaScript'], github: 'https://github.com/MalusiS/Calorie-Counter', live: 'https://malusis-calorie-counter.netlify.app' },
  { id: 'team-cards', title: 'Team Cards', tech: ['HTML', 'CSS', 'JavaScript'], github: 'https://github.com/MalusiS/Team-Cards', live: 'https://team-cards.netlify.app' }
];

// ========================= BSc CS Curriculum Data =========================
export const curriculum = {
  program: 'B.Sc. Computer Science (Systems & Software Engineering)',
  version: '7.1 LOCKED',
  institution: 'Self-Directed (Modeled after MIT/Stanford/CMU core CS)',
  duration: 'June 2026 – June 2031',
  credits: { total: 176, earned: 0, inProgress: 37 },
  gpa: null,
  steeringCommittee: true,
  exams: { total: 50, completed: 0 },
  papers: { total: 20, completed: 0 },
  books: { total: 15, completed: 0 },
  openSource: { total: 10, completed: 0 },
  capstone: {
    title: 'Multi-Tenant Agency Infrastructure',
    description: 'Fault-tolerant distributed key-value store with Raft consensus, consistent hashing, and gRPC on Kubernetes',
    status: 'Not Started'
  },
  years: [
    {
      year: 1,
      status: 'In Progress',
      focus: 'Foundations, Math, and Core Programming',
      credits: 37,
      courses: [
      // Add this to the curriculum.years[0].courses array:
        { code: 'MISSING', name: 'The Missing Semester of Your CS Education', institution: 'MIT', credits: 1, status: 'In Progress' },
        { code: 'CS50x', name: 'Introduction to Computer Science', institution: 'Harvard', credits: 4, status: 'In Progress' },
        { code: 'CS50W', name: 'Web Programming with Python & JavaScript', institution: 'Harvard', credits: 4, status: 'Not Started' },
        { code: '18.01', name: 'Calculus I', institution: 'MIT OCW', credits: 4, status: 'Not Started' },
        { code: '18.02', name: 'Calculus II', institution: 'MIT OCW', credits: 4, status: 'Not Started' },
        { code: '6.042J', name: 'Discrete Mathematics', institution: 'MIT OCW', credits: 4, status: 'Not Started' },
        { code: '18.06', name: 'Linear Algebra', institution: 'MIT OCW', credits: 3, status: 'Not Started' },
        { code: 'OOP', name: 'Object-Oriented Programming (Java I & II)', institution: 'University of Helsinki', credits: 4, status: 'Not Started' },
        { code: '8.01', name: 'Physics I', institution: 'MIT OCW', credits: 4, status: 'Not Started' },
        { code: 'DR-I', name: 'Directed Reading I', institution: 'Self-Directed', credits: 3, status: 'Not Started' },
        { code: 'Y1-P', name: 'SVG Graphics Engine', institution: 'Self-Directed', credits: 2, status: 'Not Started' }
      ]
    }
  ]
};

// ========================= Skills Data — Two-Tier Matrix =========================
export const skills = {
  production: {
    title: 'Production Engineering',
    items: [
      { name: 'React', level: 9, category: 'Front-End' },
      { name: 'Next.js', level: 7, category: 'Front-End' },
      { name: 'Tailwind CSS', level: 9, category: 'Front-End' },
      { name: 'Redux', level: 7, category: 'Front-End' },
      { name: 'Accessibility (WCAG AA)', level: 9, category: 'Front-End' },
      { name: 'Technical SEO', level: 8, category: 'Front-End' },
      { name: 'Node.js', level: 7, category: 'Back-End' },
      { name: 'SQL', level: 6, category: 'Back-End' },
      { name: 'REST APIs', level: 8, category: 'Back-End' },
      { name: 'Git / GitHub', level: 8, category: 'DevOps' },
      { name: 'CI/CD', level: 7, category: 'DevOps' },
      { name: 'Linux', level: 6, category: 'DevOps' },
      { name: 'TDD', level: 7, category: 'Engineering' },
      { name: 'Code Review', level: 8, category: 'Engineering' },
    ]
  },
  systems: { 
  title: 'Systems & Mathematics (In Progress)', 
  items: [ 
    { name: 'C Programming', level: 3, category: 'Languages' },
    { name: 'C++', level: 2, category: 'Languages' }, // Added for MiniDB/CMU 15-445
    { name: 'Go', level: 1, category: 'Languages' },   // Added for DistributedKV/6.824
    { name: 'Rust', level: 1, category: 'Languages' }, // Added per v7.1 resume
    { name: 'Java', level: 3, category: 'Languages' },
    { name: 'Data Structures', level: 3, category: 'CS Fundamentals' }, 
    { name: 'Algorithms', level: 3, category: 'CS Fundamentals' }, 
    { name: 'Discrete Mathematics', level: 2, category: 'Mathematics' }, 
    { name: 'Calculus', level: 2, category: 'Mathematics' }, 
    { name: 'Linear Algebra', level: 2, category: 'Mathematics' }, 
    { name: 'Operating Systems', level: 1, category: 'Systems' }, 
    { name: 'Database Internals', level: 1, category: 'Systems' }, 
    { name: 'Distributed Systems', level: 1, category: 'Systems' }, 
    { name: 'Security Engineering', level: 1, category: 'Systems' },
    { name: 'SRE & Observability', level: 1, category: 'Systems' } // Added for Year 4/5 alignment
    ] 
  },
};

// ========================= Metrics Preview Data =========================
export const metrics = {
  githubCommits: 0, // Consider hiding this in UI if 0, or pulling historical data
  coursesCompleted: 0,
  totalStudyHours: 0,
  booksRead: 0,
  papersReviewed: 0,
  openSourcePRs: 0,
  mentorshipSessions: 0,
  lighthouseScores: [
    { project: 'WorkCentrik', score: 100 },
    { project: 'AMO South Africa', score: 100 },
    { project: 'Portfolio', score: 100 },
  ]
};

// ========================= Navigation Items =========================
export const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'agency', label: 'WorkCentrik' },
  { id: 'projects', label: 'Projects' },
  { id: 'curriculum', label: 'BSc CS' },
  { id: 'skills', label: 'Skills' },
  { id: 'about', label: 'Journey' },
  { id: 'contact', label: 'Contact' },
];
