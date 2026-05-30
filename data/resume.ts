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
    `Senior Frontend Engineer with ${calculateExperience()} years of expertise building scalable banking applications, pixel-perfect UIs from Figma designs, component libraries, and microfrontend architectures using React, TypeScript, and modern tooling. Led complete frontend revamp of a legacy banking platform (904-file codebase) to a modern Turborepo monorepo, delivering the full payments module (5 user flows, 474+ tests) in 20 days using AI-augmented development. Acting Scrum Master managing cross-functional teams of 20+ engineers. Strong focus on performance optimization, accessibility, and test-driven development.`,

  skills: {
    frontend: "React 19, TypeScript, JavaScript (ES6+), React Hooks, Mantine UI, Zod, TanStack Query, HTML5, CSS3, CSS Modules, Redux, Redux-Saga, Redux-Thunk",
    testing: "Vitest, Jest, React Testing Library, Enzyme, Cypress, Playwright, Mock Service Worker (MSW), SonarQube, ESLint, Prettier",
    buildTools: "Vite, Turborepo, Bun, Webpack, Babel, Storybook, Microfrontends, Razzle (SSR), CI/CD Pipelines",
    tools: "Git, GitLab, Figma, Kubernetes (K8s), Node.js, Agile, Scrum, Sprint Planning, Code Design Reviews, Mentorship, TDD, AI-Augmented Development",
  },

  experience: [
    {
      role: "Senior Software Development Engineer 1 + Scrum Master",
      company: "SBS (Sopra Banking Software)",
      location: "Noida, India",
      startDate: "Jan 2025",
      endDate: "Present",
      highlights: [
        "Led complete frontend revamp of legacy banking platform (904 JS files, 13 feature areas) to modern Turborepo monorepo with React 19, TypeScript, Vite, Mantine, Zod, and TanStack Query",
        "Delivered full payments module in 20 days — 5 multi-step user flows, 474+ tests, 10+ merged MRs using AI-augmented development methodology",
        "Built the first feature (dashboard) end-to-end: JSON-driven widget architecture, token-based API proxy, config fallback system, establishing all patterns for a team of 7 engineers",
        "Architected shared dynamic form infrastructure (5 composable modules) handling API-driven fields with country-specific validation, reused across all payment flows",
        "Pioneered AI knowledge transfer methodology enabling seamless tool migration with zero productivity loss; documented as replicable framework for team adoption",
        "Acting Scrum Master: facilitated sprint planning, refinements, retrospectives; removed 12+ cross-team blockers improving sprint goal achievement from 75% to 92%",
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
        "Resolved 6+ cross-team integration blockers with backend teams; established Figma-to-code handoff process delivering pixel-perfect UI implementations, improving design-to-delivery velocity",
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
    "Technical Leadership, Team Mentorship, Scrum Mastery, Code Quality Advocacy, Cross-functional Collaboration, Agile Sprint Management, Performance Optimization, Accessibility, Test-Driven Development (TDD), AI-Augmented Development",
};
