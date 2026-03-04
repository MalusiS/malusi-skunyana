// src/assets/otherProjectsConfig.js

export const otherProjects = [
  {
    id: 1,
    title: "Days Calendar Project",
    description: "A full-stack calendar solution that tracks commemorative days over a 20-year span. Features a Node.js script that parses complex date rules to generate an exportable iCalendar (.ics) file, backed by comprehensive TDD.",
    techStack: ["Node.js", "JavaScript", "TDD", "iCal"],
    githubLink: "https://github.com/MalusiS/Piscine-Sprint-2-Project-Days-Calendar",
    liveLink: "https://cyf-malusirashaad-calendar.netlify.app/"
  },
  {
    id: 2,
    title: "TV Show Explorer App",
    description: "A single-page application for browsing a large catalog of TV shows. Features seamless view transitions, robust fetch logic with the TVMaze API, client-side search and filtering, and CI/CD deployment via Netlify.",
    techStack: ["JavaScript", "HTML", "Fetch API", "CI/CD"],
    githubLink: "https://github.com/MalusiS/Project-TV-Show",
    liveLink: "https://cyf-malusis-tv.netlify.app/"
  },
  {
    id: 3,
    title: "Spaced Repetition Tracker",
    description: "An interactive tool that generates a multi-stage review schedule. Features complex date manipulation, a fully accessible form with strict JavaScript input validation, and core logic validated through unit testing (TDD).",
    techStack: ["JavaScript", "HTML", "TDD", "Accessibility"],
    githubLink: "https://github.com/MalusiS/Piscine-Sprint-1-Project-Spaced-Repetition-Tracker",
    liveLink: "https://cyf-malusiemmanuel-tracker.netlify.app/"
  },
  {
    id: 4,
    title: "Programmer Humour",
    description: "A web application that fetches and renders the latest XKCD comic via API. Features JSON data logging, DOM manipulation for image rendering, and robust error handling.",
    techStack: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/MalusiS/Programmer-humour",
    liveLink: "https://dev-humour.netlify.app"
  },
  {
    id: 5,
    title: "25 + 5 Clock",
    description: "A Pomodoro-style productivity timer application that alternates between adjustable work (25 min default) and break (5 min default) sessions. Includes controls to modify lengths, start/pause/reset the countdown, visual low-time warnings, and an audio alert upon phase completion. Built to meet freeCodeCamp standards.",
    techStack: ["React", "JavaScript"],
    githubLink: "https://github.com/MalusiS/25---5-Clock",
    liveLink: "https://malusis-clock.netlify.app"
  },
  {
    id: 6,
    title: "JavaScript Calculator",
    description: "An arithmetic calculator built with React supporting basic operations (addition, subtraction, multiplication, division), decimals, and error handling for invalid inputs. Displays the ongoing formula, evaluates expressions using JavaScript's eval, and includes a clear function.",
    techStack: ["React", "JavaScript"],
    githubLink: "https://github.com/MalusiS/Javascript-Calculator",
    liveLink: "https://malusis-calculator.netlify.app/"
  },
  {
    id: 7,
    title: "Drum Machine",
    description: "A virtual drum machine application where users can trigger sounds via keyboard or mouse clicks on interactive pads. Features two switchable sound banks (Heater Kit and Smooth Piano Kit), a power toggle, a volume slider, and a display panel for status and current sound.",
    techStack: ["React", "JavaScript", "HTML5 Audio"],
    githubLink: "https://github.com/MalusiS/Drum-Machine",
    liveLink: "https://malusis-drum.netlify.app"
  },
  {
    id: 8,
    title: "Random Quote Machine",
    description: "A web application that fetches quotes from a JSON file, displays a random quote and author, and features a button to generate new quotes. Includes animated transitions, dynamic background/text color changes, and updated share links for Twitter and Tumblr.",
    techStack: ["HTML", "CSS", "JavaScript", "jQuery"],
    githubLink: "https://github.com/MalusiS/Quote-Machine",
    liveLink: "https://malusis-quote.netlify.app/"
  },
  {
    id: 9,
    title: "Cash Register",
    description: "A web-based cash register that simulates a customer purchase ($3.26). It calculates change using a greedy algorithm, manages a cash-in-drawer inventory, and handles transaction statuses (OPEN, CLOSED, INSUFFICIENT_FUNDS). Demonstrates algorithmic efficiency and DOM manipulation.",
    techStack: ["JavaScript", "HTML", "CSS"],
    githubLink: "https://github.com/MalusiS/Cash-Register",
    liveLink: "https://malusis-cash-register.netlify.app"
  },
  {
    id: 10,
    title: "Telephone Number Validator",
    description: "A simple JavaScript application that validates US-style telephone numbers using a complex regular expression. It checks for accepted formats (country code '1', parentheses, spaces, or dashes) and provides dynamic, color-coded feedback to the user.",
    techStack: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/MalusiS/Telephone-Number",
    liveLink: "https://tel-number.netlify.app"
  },
  {
    id: 11,
    title: "Roman Numeral Converter",
    description: "A web application that converts integers (1-3999) into Roman numerals. It features comprehensive input validation (checking for decimals, range limits, etc.) and uses a reference table-based subtraction algorithm for conversion.",
    techStack: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/MalusiS/Roman-Numeral",
    liveLink: "https://malusis-roman-numeral.netlify.app"
  },
  {
    id: 12,
    title: "Palindrome Checker",
    description: "An application that checks if user-entered text is a palindrome. It cleans input by removing non-alphanumeric characters and converting to lowercase before comparing the string to its reversed version. Includes validation for empty input.",
    techStack: ["Vanilla JavaScript", "HTML", "CSS"],
    githubLink: "https://github.com/MalusiS/Palindrome-Checker",
    liveLink: "https://malusis-palindrome.netlify.app/"
  },
  {
    id: 13,
    title: "Decimal-Binary Converter",
    description: "Converts any non-negative decimal number to its binary equivalent using a recursive function. Features a unique call-stack animation for the number '5' that visually demonstrates the step-by-step execution and unwinding of recursion. Includes input validation.",
    techStack: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/MalusiS/Decimal-Binary",
    liveLink: "https://malusis-decimal-binary.netlify.app"
  },
  {
    id: 14,
    title: "Shopping Cart",
    description: "An interactive dessert-themed shopping cart application that dynamically displays products, manages item quantities, and calculates totals (subtotal, tax, total). Uses a class-based architecture to manage cart state, apply tax (8.25%), and update the DOM in real time.",
    techStack: ["HTML", "CSS", "JavaScript (ES6+)"],
    githubLink: "https://github.com/MalusiS/Shopping-Cart",
    liveLink: "https://malusis-cart.netlify.app/"
  },
  {
    id: 15,
    title: "To-do App",
    description: "A simple To-do application with full CRUD functionality, where tasks are persistently stored in localStorage. Features include dynamic rendering, specialized Edit/Update modes, unique ID generation, and a confirmation dialog to prevent accidental data loss when closing the task form.",
    techStack: ["HTML", "CSS", "Vanilla JavaScript", "localStorage"],
    githubLink: "https://github.com/MalusiS/Todo-App",
    liveLink: "https://malusis-todo-app.netlify.app"
  },
  {
    id: 16,
    title: "Music Player",
    description: "A fully interactive web-based audio player for playing, pausing, skipping, shuffling, and deleting songs from a predefined playlist. Uses the HTML5 audio API for controls, features automatic track progression, and dynamically updates the UI to show the active song and current status.",
    techStack: ["JavaScript (DOM manipulation)", "HTML5 <audio> API", "CSS"],
    githubLink: "https://github.com/MalusiS/Music-Player",
    liveLink: "https://malusis-music-player.netlify.app"
  },
  {
    id: 17,
    title: "Calorie Counter",
    description: "An application that allows users to set a daily calorie budget, add detailed meal and exercise entries, and calculate their final deficit or surplus. Features robust input validation to ensure correct numerical values and dynamically displays the total budget, consumed, and burned calories.",
    techStack: ["HTML", "CSS", "JavaScript (Vanilla JS)"],
    githubLink: "https://github.com/MalusiS/Calorie-Counter",
    liveLink: "https://malusis-calorie-counter.netlify.app"
  },
  {
    id: 18,
    title: "Team Cards",
    description: "A simple sports-themed web app displaying details for the 1996 Bafana Bafana squad. It dynamically generates player cards and allows users to instantly filter the displayed cards based on criteria like position (forward, midfielder, etc.) or whether the player had a nickname.",
    techStack: ["HTML", "CSS", "JavaScript (DOM manipulation, array filtering)"],
    githubLink: "https://github.com/MalusiS/Team-Cards",
    liveLink: "https://team-cards.netlify.app"
  },
  {
    id: 19,
    title: "Rock-Paper-Scissors Game",
    description: "An interactive game where the player competes against a randomly generated computer choice. The script determines the round winner, updates the score, and displays the status. The game is won by the first player to reach 3 points, after which a reset button is shown to start a new match.",
    techStack: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/MalusiS/RockPaper-Game",
    liveLink: "https://malusis-rockpaper-game.netlify.app/"
  }
];
