"use client";

import { useMemo } from "react";
import {
  Container,
  Typography,
  Paper,
  Box,
  Chip,
} from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";

// Career Progression Summary
const careerProgression = [
  {
    title: "Software Engineer",
    period: "Oct 2020 – Dec 2022",
    focus: "Technical Execution & Quality Excellence",
    highlights: [
      "Delivered high-quality features across component library, community, and banking platforms",
      "Established strong testing practices and code quality standards",
      "Built foundational expertise in React, Redux, and Agile methodologies",
    ],
  },
  {
    title: "Software Development Engineer 2",
    period: "Jan 2023 – Dec 2024",
    focus: "Ownership, Leadership & Cross-functional Collaboration",
    highlights: [
      "Took architectural ownership of back-office and onboarding subsystems",
      "Led code quality initiatives significantly increasing test coverage",
      "Mentored junior developers through pair programming and code reviews",
      "Drove integration between design, backend, and QA teams improving delivery velocity",
    ],
  },
  {
    title: "Senior Software Development Engineer 1",
    period: "Jan 2025 – Present",
    focus: "Platform Revamp, AI-Augmented Delivery & Scrum Mastery",
    highlights: [
      "Led full frontend revamp of legacy banking platform (904 files → modern Turborepo monorepo) for a team of 7",
      "Delivered complete payments module (5 flows, 474+ tests) in 20 days using AI-augmented development",
      "Pioneered AI knowledge transfer system enabling zero-downtime tool migration across the team",
      "Acting Scrum Master: improved sprint goal achievement from 75% to 92%",
    ],
  },
];

const experiences = [
  {
    role: "Enterprise Design System & Component Library Development",
    company: "SBS (previously Sopra Banking Software)",
    location: "Noida, Uttar Pradesh",
    period: "2021",
    jobTitle: "Software Engineer",
    projectDescription: "Enterprise Design System & Component Library",
    categories: [
      {
        title: "Library Architecture & Development",
        highlights: [
          "Collaborated with design team to create a React component library improving consistency, efficiency, and quality across the product portfolio",
          "Developed 20+ configurable and reusable components using React, TypeScript, and Tailwind CSS",
          "Resulted in 40% increase in development efficiency across product teams",
          "Drove component standardization with design team, establishing shared ownership model across 5+ product teams",
        ],
      },
      {
        title: "Quality & Documentation",
        highlights: [
          "Wrote 100+ unit tests for components using React Testing Library, ensuring reliability and maintainability",
          "Used Storybook to visually display components and showcase functionality to stakeholders and new team members",
          "Contributed to comprehensive documentation for clear usage instructions and best practices",
          "Mentored 2 junior developers on testing strategies and component composition patterns through pair programming",
        ],
      },
      {
        title: "Code Quality & Knowledge Sharing",
        highlights: [
          "Conducted peer code reviews establishing quality gates and best practices for component consumption",
          "Shared testing methodologies across teams, improving overall test coverage culture in the organization",
        ],
      },
    ],
    tech: ["React", "TypeScript", "Tailwind CSS", "Jest", "Storybook", "Webpack", "Babel"],
  },
  {
    role: "Social Banking Platform Development",
    company: "SBS (previously Sopra Banking Software)",
    location: "Noida, Uttar Pradesh",
    period: "2022",
    jobTitle: "Software Engineer",
    projectDescription: "Community Social Network (4 Major Versions)",
    categories: [
      {
        title: "Feature Development & Quality Leadership",
        highlights: [
          "Collaborated with 8+ developers to build and maintain social banking community platform with 4 major versions following Agile methodologies",
          "Implemented advanced search functionality resulting in 30% increase in user satisfaction",
          "Conducted rigorous code reviews and addressed 50+ critical issues, ensuring production stability",
          "Owned quality metrics for the module, driving team focus on code smells and technical debt reduction",
        ],
      },
      {
        title: "Server-Side Rendered Platform Architecture & Internationalization",
        highlights: [
          "Built server-side rendered application using Razzle for optimal performance and SEO",
          "Implemented internationalization (i18n) using PhraseApp supporting multiple languages",
          "Improved quality standards by increasing unit test coverage from 10% to 75% with Jest, establishing new baseline for team",
          "Conducted SONAR analysis resulting in 50% decrease in bugs and code smells through disciplined refactoring",
          "Mentored junior developer on Server-Side Rendered platform best practices and performance optimization techniques",
        ],
      },
      {
        title: "End-to-End Testing & Cross-functional Integration",
        highlights: [
          "Implemented comprehensive E2E testing using Cypress for critical user journeys",
          "Ensured seamless backend integration with microservice configuration management, resolving 8+ integration blockers",
          "Collaborated closely with QA and backend teams to establish shared testing standards and integration protocols",
          "Facilitated sprint planning sessions and backlog refinement, improving team's sprint estimation accuracy by 20%",
          "Utilized React and Redux-Saga for complex state management and async operations",
        ],
      },
    ],
    tech: [
      "React",
      "Razzle (SSR)",
      "Redux-Saga",
      "Jest",
      "Cypress",
      "PhraseApp (i18n)",
      "Babel",
      "ESLint",
      "Prettier",
      "SonarQube",
    ],
  },
  {
    role: "Back Office & Community Platform Development",
    company: "SBS (previously Sopra Banking Software)",
    location: "Noida, Uttar Pradesh",
    period: "2023",
    jobTitle: "Software Development Engineer 2",
    projectDescription: "Administrative Dashboard, Customer Onboarding & Community Social Platform",
    categories: [
      {
        title: "Architectural Ownership & Large-Scale Development",
        highlights: [
          "Led front-end architecture and development of banking backoffice and onboarding applications with cross-functional team of 20+ developers",
          "Owned onboarding subsystem architecture, driving decisions on state management, styling, and testing strategies",
          "Built admin dashboard with complex data management, audit logging, and reporting features",
          "Implemented KYC approval workflows and multi-step onboarding flows handling 1000+ daily registrations",
          "Achieved 80%+ code coverage on new code with zero new critical issues in production through stringent code review process",
        ],
      },
      {
        title: "Advanced Frontend Techniques & Quality Governance",
        highlights: [
          "Integrated Monaco Editor for dynamic code editing capabilities in backoffice, expanding product feature set",
          "Implemented Mock Service Worker (MSW) for reliable API mocking and testing, enabling parallel frontend/backend work",
          "Utilized Helmet for security headers and best practices implementation",
          "Used custom Webpack configurations for optimized dev and production builds",
          "Established and enforced code quality standards, reducing code duplication to less than 0.5% through systematic refactoring",
          "Led design reviews with architects and product owners, ensuring technical feasibility of requirements",
        ],
      },
      {
        title: "Mentorship, Code Review & Cross-functional Leadership",
        highlights: [
          "Mentored 3+ junior developers on advanced patterns (custom hooks, context optimization, performance profiling)",
          "Conducted regular code reviews upholding strict quality standards, providing constructive feedback for engineer growth",
          "Worked closely with backend developers resolving 6+ integration blockers and ensuring seamless API integration using Redux-Thunk",
          "Improved developer onboarding by creating technical guides for form validation patterns and multi-step workflows",
          "Aligned with UX team on implementation details, improving design-to-code handoff process",
        ],
      },
    ],
    tech: [
      "React",
      "JavaScript",
      "Webpack (custom config)",
      "Jest",
      "Enzyme",
      "Babel",
      "SCSS",
      "Tailwind CSS",
      "Monaco Editor",
      "MSW",
      "Helmet",
      "Redux-Thunk",
      "SonarQube",
    ],
  },
  {
    role: "Daily Banking Application — Feature Development & Technical Leadership",
    company: "SBS (previously Sopra Banking Software)",
    location: "Noida, Uttar Pradesh",
    period: "2024 – 2025",
    jobTitle: "Software Development Engineer 2 → Senior SDE 1",
    projectDescription: "Core Banking Customer Application — Payments, Accounts, Cards, Onboarding (Legacy Codebase)",
    categories: [
      {
        title: "Feature Ownership & Cross-functional Delivery",
        highlights: [
          "Led frontend development on the core daily banking application serving production customers across multiple regions",
          "Owned payments, accounts, and onboarding modules — delivering features, fixing production bugs, and coordinating with backend teams",
          "Built and maintained 2FA authentication library used across all banking applications",
          "Contributed to shared component library used across 5+ product teams, improving consistency and reuse",
          "Managed deployment pipelines and sandbox environments for integration testing",
        ],
      },
      {
        title: "Quality & Mentorship",
        highlights: [
          "Drove code quality initiatives across the team — enforcing testing standards, code review practices, and SonarQube thresholds",
          "Mentored 3+ junior developers on React patterns, state management, and testing strategies",
          "Resolved cross-team integration blockers with backend and infrastructure teams",
          "Led design-to-code handoff improvements with UX team, reducing rework cycles",
        ],
      },
    ],
    tech: [
      "React",
      "JavaScript",
      "Redux",
      "Redux-Saga",
      "Jest",
      "Enzyme",
      "Webpack",
      "SCSS",
      "Node.js",
      "Cypress",
      "SonarQube",
      "CI/CD Pipelines",
    ],
  },
  {
    role: "Core Banking Platform Architecture",
    company: "SBS (previously Sopra Banking Software)",
    location: "Noida, Uttar Pradesh",
    period: "2025 – 2026 (Oct–Feb)",
    jobTitle: "Senior Software Development Engineer 1",
    projectDescription: "Widget Engine Framework & Authentication Library for Banking Applications",
    categories: [
      {
        title: "Microfrontend & Widget Architecture Leadership",
        highlights: [
          "Engineered widget engine framework using TypeScript and Vite for composable, reusable UI components",
          "Architected JSON-driven screens with data adapters transforming framework-agnostic responses for React consumption",
          "Designed authentication library providing secure authentication across all applications with 99.9%+ availability",
          "Enabled independent team deployments while maintaining product consistency across 20+ team members through well-defined contracts",
          "Drove architectural decisions in collaboration with infrastructure team, product, and other engineering squads",
        ],
      },
      {
        title: "Modern Build & Testing Infrastructure",
        highlights: [
          "Implemented Vite for optimized build performance and faster development iteration, reducing build time by 60%",
          "Used Vitest for fast, modern unit testing in the widget engine, enabling test-first development culture",
          "Configured CI/CD pipelines with automated testing, linting, and deployment processes",
          "Integrated SonarQube for continuous code quality monitoring and technical debt management",
          "Mentored 5+ team members on Vite/Vitest/TypeScript best practices and performance optimization",
        ],
      },
    ],
    tech: [
      "React",
      "TypeScript",
      "JavaScript",
      "Vite",
      "Vitest",
      "Webpack",
      "Jest",
      "Babel",
      "Node.js",
      "ESLint",
      "Prettier",
      "SonarQube",
      "CI/CD Pipelines",
      "Docker",
    ],
  },
  {
    role: "CX Banking Platform Revamp — Full Frontend Delivery",
    company: "SBS (previously Sopra Banking Software)",
    location: "Noida, Uttar Pradesh",
    period: "2026 (Mar – Present)",
    jobTitle: "Senior Software Development Engineer 1 + Scrum Master",
    projectDescription: "Complete revamp of legacy banking CX platform (904 JS files) to modern Turborepo monorepo with React 19, TypeScript, Vite, Mantine, Zod, and TanStack Query",
    categories: [
      {
        title: "Dashboard Feature — First Working Screen (Built End-to-End)",
        highlights: [
          "Analyzed entire legacy codebase (904 files, 13 feature areas, 29 components) and produced comprehensive migration strategy",
          "Set up dev infrastructure from scratch: Vite 8 TypeScript fix, token-based API proxy routing, remote config fallback, Turborepo dependency ordering",
          "Built first feature end-to-end: JSON-driven widget tree, accounts API integration, products sidebar, latest transactions, quick-actions with business logic",
          "Established all architectural patterns (screen configuration, specialized widgets, mock handlers, i18n) the team now follows for every new feature",
        ],
      },
      {
        title: "Payments Epic — 5 User Flows Delivered in 20 Days",
        highlights: [
          "Delivered complete payments module end-to-end: dashboard with data tables, multi-step payment flows (5 screens each), internal transfers, and beneficiary management with 2FA",
          "Architected dynamic form system driven entirely by API-defined field schemas — supporting country-specific validation, conditional fields, and multi-step confirmation flows",
          "Built shared form infrastructure (5 composable modules) reused across all payment flows, eliminating duplication and enabling rapid feature delivery",
          "Achieved 474+ unit tests across all components, 10+ merge requests raised and merged, all flows verified against production-grade APIs",
          "Conducted peer code reviews for 5 teammates, identifying architectural anti-patterns and enforcing schema validation, locale handling, and separation of concerns",
        ],
      },
      {
        title: "AI-Augmented Development Methodology",
        highlights: [
          "Pioneered 'Ouroboros' method: had existing AI assistant generate its own training manual for new tool, achieving zero-downtime knowledge transfer",
          "Built persistent knowledge layer (steering files, context files, gotchas, session history) enabling AI to operate independently on complex codebase",
          "Documented methodology as replicable framework — new AI productive within days, 80% implementation without corrections by week 2",
          "Wrote retrospective identifying 5 categories of mistakes, adding 6 enforced rules preventing recurrence — reduced debugging time by 12+ hours per epic",
        ],
      },
      {
        title: "Scrum Master & Team Coordination",
        highlights: [
          "Acting Scrum Master for 7-engineer team: sprint planning, refinements, retrospectives, daily standups",
          "Removed 12+ cross-team blockers improving sprint goal achievement from 75% to 92%",
          "Coordinated delivery across 7-engineer team with systematic task breakdown and progress tracking",
          "Mentored 5+ developers on Vite, Vitest, TypeScript, TanStack Query, and widget architecture patterns",
        ],
      },
    ],
    tech: [
      "React 19",
      "TypeScript",
      "Vite",
      "Mantine UI",
      "Zod",
      "TanStack Query",
      "Bun",
      "Turborepo",
      "Vitest",
      "Mock Service Worker",
      "CSS Modules",
      "CI/CD Pipelines",
    ],
  },
];

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

export default function ExperiencePage() {
  const experienceYears = useMemo(() => calculateExperience(), []);
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, sm: 8 }, px: { xs: 1, sm: 2, md: 3 } }}>
      <Box sx={{ mb: 8 }}>
        <Typography variant="h2" gutterBottom sx={{ fontWeight: 700, mb: 2, fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" } }}>
          Experience
        </Typography>

        <Typography variant="h6" color="text.secondary" sx={{ mb: 6, fontSize: { xs: "0.95rem", sm: "1.05rem" } }}>
          {experienceYears} years of professional growth across diverse projects at SBS (Sopra Banking Software).
          Progressing from software engineer to senior engineer with expanding leadership, mentorship,
          and Scrum Master responsibilities. Combining technical excellence with cross-functional
          collaboration and quality advocacy.
        </Typography>
      </Box>

      {/* Career Progression Section */}
      <Box sx={{ mb: 8, p: { xs: 2, sm: 3, md: 4 }, backgroundColor: "action.hover", borderRadius: 2 }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: 600, mb: 4, textTransform: "uppercase", fontSize: { xs: "1rem", sm: "1.15rem", md: "1.25rem" } }}
        >
          Career Progression
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            gap: 3,
          }}
        >
          {careerProgression.map((role, index) => (
            <Paper key={index} elevation={1} sx={{ p: { xs: 2, sm: 2.5, md: 3 }, backgroundColor: "background.paper" }}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5, fontSize: { xs: "0.95rem", sm: "1.05rem" } }}>
                {role.title}
              </Typography>
              <Typography variant="caption" color="primary" sx={{ fontWeight: 600, mb: 2, display: "block", fontSize: { xs: "0.7rem", sm: "0.8rem" } }}>
                {role.period}
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{
                  fontWeight: 600,
                  color: "primary.main",
                  mb: 2,
                  fontSize: { xs: "0.75rem", sm: "0.85rem" },
                  textTransform: "uppercase",
                }}
              >
                {role.focus}
              </Typography>
              <Box component="ul" sx={{ pl: 1.5 }}>
                {role.highlights.map((highlight, i) => (
                  <li key={i} style={{ marginBottom: "0.5rem" }}>
                    <Typography variant="body2" sx={{ lineHeight: 1.5 }}>
                      {highlight}
                    </Typography>
                  </li>
                ))}
              </Box>
            </Paper>
          ))}
        </Box>
      </Box>

      {/* Project Timeline */}
      <Typography variant="h4" sx={{ fontWeight: 600, mb: 4, mt: 6, textTransform: "uppercase", fontSize: "1.1rem" }}>
        Project & Responsibility Timeline
      </Typography>

      <Timeline position="alternate">
        {experiences.map((exp, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent color="text.secondary" sx={{ m: "auto 0" }}>
              <Typography variant="body2" sx={{ mb: 1 }}>
                {exp.period}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {exp.location}
              </Typography>
            </TimelineOppositeContent>

            <TimelineSeparator>
              <TimelineDot color="primary" sx={{ boxShadow: 3 }} />
              {index < experiences.length - 1 && <TimelineConnector />}
            </TimelineSeparator>

            <TimelineContent sx={{ pb: 4 }}>
              <Paper elevation={2} sx={{ p: 4, backgroundColor: "background.paper" }}>
                <Typography variant="h5" sx={{ fontWeight: 600, mb: 0.5 }}>
                  {exp.role}
                </Typography>
                <Typography
                  variant="caption"
                  color="primary"
                  sx={{ fontWeight: 600, fontSize: "0.9rem", display: "block", mb: 1 }}
                >
                  {exp.jobTitle}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="primary"
                  sx={{ fontWeight: 500, mb: 1.5 }}
                >
                  {exp.company}
                </Typography>

                {/* Project Description */}
                {exp.projectDescription && (
                  <Box sx={{ mb: 3, p: 2, backgroundColor: "action.hover", borderRadius: 1 }}>
                    <Typography
                      variant="caption"
                      sx={{
                        display: "block",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        color: "text.secondary",
                        mb: 1,
                      }}
                    >
                      Project
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.primary" }}>
                      {exp.projectDescription}
                    </Typography>
                  </Box>
                )}

                {/* Categories of Responsibilities */}
                {exp.categories.map((category, catIndex) => (
                  <Box key={catIndex} sx={{ mb: 3 }}>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        fontWeight: 600,
                        color: "primary.main",
                        mb: 1.5,
                        textTransform: "uppercase",
                        fontSize: "0.85rem",
                        letterSpacing: "0.5px"
                      }}
                    >
                      {category.title}
                    </Typography>

                    <Box component="ul" sx={{ pl: 2, mb: 1 }}>
                      {category.highlights.map((point, i) => (
                        <li key={i} style={{ marginBottom: "0.75rem" }}>
                          <Typography variant="body2" sx={{ lineHeight: 1.6 ,
                        textAlign: "left"

                           }}>
                            {point}
                          </Typography>
                        </li>
                      ))}
                    </Box>
                  </Box>
                ))}

                {/* Tech Stack */}
                <Box sx={{ mt: 4, pt: 2, borderTop: "1px solid", borderColor: "divider" }}>
                  <Typography
                    variant="caption"
                    sx={{
                      display: "block",
                      mb: 1.5,
                      fontWeight: 600,
                      textTransform: "uppercase",
                      color: "text.secondary",
                    }}
                  >
                    Tech Stack
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    {exp.tech.map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        variant="outlined"
                        sx={{
                          borderColor: "primary.main",
                          color: "primary.main",
                          fontWeight: 500,
                        }}
                      />
                    ))}
                  </Box>
                </Box>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>

      {/* Summary Stats */}
      <Box
        sx={{
          mt: 8,
          pt: 6,
          borderTop: "1px solid",
          borderColor: "divider",
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(4, 1fr)" },
          gap: 3,
        }}
      >
        {[
          { label: "Years Experience", value: experienceYears },
          { label: "Engineers Mentored", value: "10+" },
          { label: "Code Coverage Achieved", value: "80%+" },
          { label: "Team Velocity Growth", value: "25%" },
        ].map((stat, index) => (
          <Box key={index} sx={{ textAlign: "center" }}>
            <Typography variant="h4" color="primary" sx={{ fontWeight: 700, mb: 1 }}>
              {stat.value}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {stat.label}
            </Typography>
          </Box>
        ))}
      </Box>
    </Container>
  );
}
