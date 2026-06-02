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
  title: "Senior Frontend Engineer · React · Microfrontends · Scrum Master",
  email: "meenakshiojhabook@gmail.com",
  phone: "+91 9654354118",
  linkedin: "linkedin.com/in/meenakshi-ojha",
  github: "github.com/meenakshi-ojha",
  portfolio: "meenakshi-portfolio-five.vercel.app",

  summary:
    `Senior Frontend Engineer with ${calculateExperience()} years building scalable React, TypeScript, and microfrontend applications across banking and fintech. Architected the frontend revamp of a legacy 904-file banking platform into a modern Turborepo monorepo, delivering a full payments module (5 multi-step flows, 474+ tests, 10+ merged MRs) in 20 days through AI-augmented development. Specialize in component libraries, data visualization dashboards, REST API integration, responsive single-page applications, and pixel-perfect UI delivery from Figma, with strong focus on Web Vitals performance, WCAG accessibility, and test-driven development. Acting Scrum Master leading cross-functional teams of 20+ engineers, raising sprint goal achievement from 75% to 92%.`,

  skills: {
    frontend: "React 19, React Hooks, TypeScript, JavaScript (ES6+), Material UI (MUI), Mantine UI, Mantine Charts, Redux, Redux-Saga, Redux-Thunk, TanStack Query, Zod, HTML5, CSS3, CSS Modules, Responsive Design, Single Page Applications (SPA), REST APIs",
    testing: "Vitest, Jest, React Testing Library, Enzyme, Cypress, Playwright, Mock Service Worker (MSW), SonarQube, ESLint, Prettier, Test-Driven Development (TDD)",
    buildTools: "Frontend Architecture, Microfrontends, Vite, Turborepo, Bun, Webpack, Babel, Storybook, Razzle (SSR), CI/CD Pipelines, Web Vitals, Lighthouse",
    tools: "Git, GitLab, Figma, Docker, Kubernetes (K8s), Node.js, Agile, Scrum, Sprint Planning, Code Reviews, WCAG / WAI-ARIA Accessibility, Cross-browser Compatibility, Mentorship",
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
        "Delivered full payments module in 20 days: 5 multi-step user flows, 474+ tests, 10+ merged MRs using AI-augmented development methodology",
        "Built the first feature (dashboard) end-to-end: JSON-driven widget architecture with data visualization (donut charts, financial exposure breakdowns), token-based API proxy, config fallback system, establishing all patterns for a team of 7 engineers",
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
        "Authored 181 merged MRs across 8 banking repos: 66 feature deliveries, 36 production defect fixes, and 65 refactors driving systematic tech-debt reduction and code-duplication enforcement",
        "Guided junior developers on advanced React patterns (custom hooks, performance profiling, memoization); improved sprint estimation accuracy across the team",
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
        "Developed 20+ reusable React components with 100+ Jest tests for the SBS Design System component library, adopted across multiple product teams",
        "Raised community frontend unit test coverage to 70% (from ~55%) across 4 successive coverage milestones; authored 114 merged MRs spanning the component library, the server-side rendered community platform (Razzle + Redux-Saga, 4 major versions), and quality gates",
        "Implemented end-to-end testing with Cypress, internationalization with PhraseApp (i18n), and SonarQube static analysis driving code quality improvements; coached peers on testing strategy and SSR best practices",
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
