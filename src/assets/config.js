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
    id: 'days-calendar',
    title: 'Days Calendar Project',
    tagline: 'Full-stack calendar solution with Node.js iCal generation and advanced date logic.',
    tech: ['JavaScript', 'Node.js', 'TDD', 'iCal'],
    github: 'https://github.com/MalusiS/Piscine-Sprint-2-Project-Days-Calendar',
    live: 'https://cyf-malusirashaad-calendar.netlify.app/',
    image: '/projects/days-calendar.png',
    narrative: {
      problem: 'The goal was to track commemorative days over a 20-year span, requiring accurate calculation of complex, non-standard dates (e.g., "the second Tuesday of September") and exportable data in the iCalendar (.ics) format.',
      solution: 'I authored the entire Node.js script responsible for iterating through the 20-year span and generating the `.ics` file content. Implemented the core JavaScript utility to process rules like finding the Nth occurrence of a specific weekday. Wrote comprehensive unit tests *before* writing the final logic (TDD) to guarantee accuracy across decades.',
      stack: ['Node.js (Server-Side)', 'JavaScript (Date Logic)', 'Unit Testing', 'iCalendar Format']
    }
  },
  {
    id: 'tv-show-explorer',
    title: 'TV Show Explorer App',
    tagline: 'Dynamic TV shows and episodes explorer using vanilla JS, fetch API, and DOM rendering',
    tech: ['JavaScript', 'HTML', 'Fetch API', 'CI/CD'],
    github: 'https://github.com/MalusiS/Project-TV-Show',
    live: 'https://cyf-malusis-tv.netlify.app/',
    image: '/projects/tv-show-explorer.png',
    narrative: {
      problem: 'Building a single-page application that allows users to browse a large catalog of TV shows, search, and navigate seamlessly between a high-level show listing and a detailed episode guide.',
      solution: 'Architected seamless transitions between list and detail views. Implemented robust fetch logic for the TVMaze API, complete with loading states and error handling. Developed dynamic client-side search and filtering, enabling users to explore shows and episodes efficiently in real time.',
      stack: ['JavaScript (vanilla)', 'Fetch API', 'State Management', 'Netlify CI/CD']
    }
  },
  {
    id: 'spaced-repetition',
    title: 'Spaced Repetition Tracker',
    tagline: 'Interactive web app for spaced repetition with robust form handling and revision-schedule logic.',
    tech: ['JavaScript', 'HTML', 'TDD', 'Accessibility'],
    github: 'https://github.com/MalusiS/Piscine-Sprint-1-Project-Spaced-Repetition-Tracker',
    live: 'https://cyf-malusiemmanuel-tracker.netlify.app/',
    image: '/projects/spaced-repetition.png',
    narrative: {
      problem: 'Creating a tool to generate a reliable, multi-stage review schedule from a user-provided start date. This required high-precision date manipulation and robust input validation to prevent bad data.',
      solution: 'Engineered the core JavaScript utility that dynamically calculates the entire 6-step review schedule (e.g., 1 day, 1 week, 1 month, 3 months, etc.). Built the complete, accessible form with integrated JavaScript validation, and used TDD to write unit tests for the complex date calculation functions.',
      stack: ['JavaScript (ES6+)', 'Unit Testing', 'Form Validation', 'A11y Standards']
    }
  }
];