const calculateExperience = () => {
  const startDate = new Date(2020, 9, 1); // October 2020
  const today = new Date();
  
  let years = today.getFullYear() - startDate.getFullYear();
  let months = today.getMonth() - startDate.getMonth();
  
  if (months < 0) {
    years--;
    months += 12;
  }
  
  if (months === 0) {
    return `${years}+`;
  }
  return `${years}.${months}+`;
};

export const resumeData = {
  name: "MEENAKSHI OJHA",
  title: "Senior Frontend Engineer | React | Microfrontends | Scrum Master",
  email: "meenakshiojhabook@gmail.com",
  phone: "+91 9654354118",
  linkedin: "linkedin.com/in/meenakshi-ojha",
  github: "github.com/meenakshi-ojha",
  portfolio: "meenakshi-portfolio-five.vercel.app",

  summary:
    `Senior Frontend Engineer with ${calculateExperience()} years of expertise building scalable banking applications, component libraries, and microfrontend architectures using React, TypeScript, and modern tooling. Proven track record of technical leadership, mentoring multiple junior developers across teams, and driving code quality initiatives (80%+ test coverage). Acting Scrum Master managing cross-functional teams of 20+ engineers, removing blockers, and improving sprint predictability and on-time sprint goal completion. Strong focus on performance optimization, accessibility, and test-driven development.`,

  skills: {
    frontend: "React, TypeScript, JavaScript (ES6+), React Hooks, HTML5, CSS3, Tailwind CSS, Redux, Redux-Saga, Redux-Thunk",
    testing: "Jest, React Testing Library, Enzyme, Cypress, Vitest, SonarQube, ESLint, Prettier, Mock Service Worker",
    buildTools: "Vite, Webpack, Babel, Storybook, Microfrontends, Razzle (SSR), Yarn Workspaces, CI/CD Pipelines",
    tools: "Git, GitLab, Docker, Node.js, Agile, Scrum, Sprint Planning, Code Design Reviews, Mentorship, TDD",
  },

  experience: [
    {
      role: "Senior Software Development Engineer 1 + Scrum Master",
      company: "SBS (Sopra Banking Software)",
      location: "Noida, India",
      startDate: "Jan 2025",
      endDate: "Present",
      highlights: [
        "Architected widget engine framework using TypeScript and Vite enabling significant code reuse and independent team deployments across multiple product modules",
        "Acting Scrum Master: facilitated sprint planning, refinements, retrospectives; removed blockers and improved sprint predictability and sprint goal achievement",
        "Mentored multiple developers on modern tooling (Vite, Vitest, TypeScript) and performance optimization techniques",
        "Implemented CI/CD pipelines with automated testing and SonarQube integration; drove quality advocacy achieving 85%+ test coverage targets",
        "Designed robust authentication library used across banking applications; led architectural reviews with product and infrastructure teams",
      ],
    },
    {
      role: "Software Development Engineer 2",
      company: "SBS (Sopra Banking Software)",
      location: "Noida, India",
      startDate: "Jan 2023",
      endDate: "Dec 2024",
      highlights: [
        "Led frontend architecture for backoffice and onboarding systems handling 1000+ daily registrations with 20+ developers; owned subsystem design decisions",
        "Drove quality initiatives significantly increasing code coverage, substantially reducing bugs, and enforcing code duplication standards through systematic refactoring",
        "Mentored junior developers on advanced patterns (custom hooks, performance profiling); improved sprint estimation accuracy",
        "Resolved 6+ cross-team integration blockers with backend teams; aligned with UX on design-to-code handoff processes improving delivery velocity",
        "Integrated Monaco Editor, Mock Service Worker, and Helmet; used custom Webpack configurations for optimized production builds",
      ],
    },
    {
      role: "Software Engineer",
      company: "SBS (Sopra Banking Software)",
      location: "Noida, India",
      startDate: "Oct 2020",
      endDate: "Dec 2022",
      highlights: [
        "Developed 20+ reusable React components for component library with 100+ Jest tests; improved development efficiency across multiple teams through component reuse",
        "Built server-side rendered social platform (4 major versions) with Razzle and Redux-Saga; substantially increased unit test coverage and substantially reduced recurring production bugs",
        "Implemented comprehensive E2E testing with Cypress, i18n support with PhraseApp, and SONAR analysis driving code quality improvements",
        "Mentored junior developers on testing strategies and SSR best practices; resolved 8+ integration blockers and facilitated sprint planning sessions",
        "Established quality gates and code review standards across teams, improving overall testing culture and technical debt management",
      ],
    },
  ],

  education: {
    degree: "Bachelor of Technology – Computer Science Engineering",
    university: "Dr. APJ Abdul Kalam Technical University",
    location: "Uttar Pradesh",
    startDate: "Aug 2016",
    endDate: "Sep 2020",
  },

  languages: "English (Fluent), Hindi (Native)",
  competencies:
    "Technical Leadership, Team Mentorship, Scrum Mastery, Code Quality Advocacy, Cross-functional Collaboration, Agile Sprint Management, Performance Optimization, Accessibility, Test-Driven Development (TDD)",
};
