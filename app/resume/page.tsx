"use client";

import { Container, Typography, Paper, Box, Divider } from "@mui/material";
import dynamic from "next/dynamic";
import { useMemo } from "react";

const ResumeDownloadButton = dynamic(
  () => import("@/components/ResumeDownloadButton"),
  { ssr: false }
);

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

export default function ResumePage() {
  const experienceYears = useMemo(() => calculateExperience(), []);

  return (
    <Container maxWidth="md" sx={{ py: { xs: 3, sm: 6 }, px: { xs: 1, sm: 2, md: 3 } }}>
      <Paper elevation={0} sx={{ p: { xs: 2, sm: 3, md: 4 }, backgroundColor: "background.paper" }}>
        {/* Header */}
        <Box sx={{ mb: 3, textAlign: "center" }}>
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 0.5, fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" } }}>
            MEENAKSHI OJHA
          </Typography>
          <Typography variant="subtitle1" color="primary" sx={{ fontWeight: 600, mb: 1, fontSize: { xs: "0.95rem", sm: "1.15rem" } }}>
            Senior Frontend Engineer · React · Microfrontends · Scrum Master
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: "0.75rem", sm: "0.875rem" }, overflowWrap: "break-word", wordBreak: "break-word" }}>
            Email: meenakshiojhabook@gmail.com | Phone: +91 9654354118 | LinkedIn: linkedin.com/in/meenakshi-ojha | GitHub: github.com/meenakshi-ojha | Portfolio: meenakshi-portfolio-five.vercel.app
          </Typography>
        </Box>

        {/* Download Button */}
        <Box sx={{ mb: 3, display: "flex", justifyContent: "center" }}>
          <ResumeDownloadButton />
        </Box>

        <Divider sx={{ my: 2.5 }} />

        {/* Professional Summary */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5, textTransform: "uppercase", fontSize: "0.95rem" }}>
            Professional Summary
          </Typography>
          <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
            Senior Frontend Engineer with {experienceYears} years building scalable React, TypeScript, and microfrontend applications across banking and fintech. Architected the frontend revamp of a legacy 904-file banking platform into a modern Turborepo monorepo, delivering a full payments module (5 multi-step flows, 474+ tests, 10+ merged MRs) in 20 days through AI-augmented development. Specialize in component libraries, data visualization dashboards, REST API integration, responsive single-page applications, and pixel-perfect UI delivery from Figma, with strong focus on Web Vitals performance, WCAG accessibility, and test-driven development. Acting Scrum Master leading cross-functional teams of 20+ engineers, raising sprint goal achievement from 75% to 92%.
          </Typography>
        </Box>

        {/* Core Skills */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5, textTransform: "uppercase", fontSize: { xs: "0.85rem", sm: "0.95rem" } }}>
            Core Skills
          </Typography>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" }, gap: { xs: 1.5, sm: 2 } }}>
            <Box>
              <Typography variant="caption" sx={{ fontWeight: 700, display: "block", mb: 0.5, fontSize: { xs: "0.7rem", sm: "0.75rem" } }}>
                Frontend Technologies
              </Typography>
              <Typography variant="body2" sx={{ fontSize: { xs: "0.8rem", sm: "0.875rem" }, lineHeight: 1.6 }}>React 19, React Hooks, TypeScript, JavaScript (ES6+), Material UI (MUI), Mantine UI, Mantine Charts, Redux, Redux-Saga, Redux-Thunk, TanStack Query, Zod, HTML5, CSS3, CSS Modules, Responsive Design, Single Page Applications (SPA), REST APIs</Typography>
            </Box>
            <Box>
              <Typography variant="caption" sx={{ fontWeight: 700, display: "block", mb: 0.5, fontSize: { xs: "0.7rem", sm: "0.75rem" } }}>
                Testing & Quality
              </Typography>
              <Typography variant="body2" sx={{ fontSize: { xs: "0.8rem", sm: "0.875rem" }, lineHeight: 1.6 }}>Vitest, Jest, React Testing Library, Enzyme, Cypress, Playwright, Mock Service Worker (MSW), SonarQube, ESLint, Prettier, Test-Driven Development (TDD)</Typography>
            </Box>
            <Box>
              <Typography variant="caption" sx={{ fontWeight: 700, display: "block", mb: 0.5, fontSize: { xs: "0.7rem", sm: "0.75rem" } }}>
                Build & Architecture
              </Typography>
              <Typography variant="body2" sx={{ fontSize: { xs: "0.8rem", sm: "0.875rem" }, lineHeight: 1.6 }}>Frontend Architecture, Microfrontends, Vite, Turborepo, Bun, Webpack, Babel, Storybook, Razzle (SSR), CI/CD Pipelines, Web Vitals, Lighthouse</Typography>
            </Box>
            <Box>
              <Typography variant="caption" sx={{ fontWeight: 700, display: "block", mb: 0.5, fontSize: { xs: "0.7rem", sm: "0.75rem" } }}>
                Tools & Methodologies
              </Typography>
              <Typography variant="body2" sx={{ fontSize: { xs: "0.8rem", sm: "0.875rem" }, lineHeight: 1.6 }}>Git, GitLab, Figma, Docker, Kubernetes (K8s), Node.js, Agile, Scrum, Sprint Planning, Code Reviews, WCAG / WAI-ARIA Accessibility, Cross-browser Compatibility, Mentorship</Typography>
            </Box>
          </Box>
        </Box>

        {/* Professional Experience */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5, textTransform: "uppercase", fontSize: { xs: "0.85rem", sm: "0.95rem" } }}>
            Professional Experience
          </Typography>

          {/* Role 1: Senior SDE 1 */}
          <Box sx={{ mb: 2.5 }}>
            <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, justifyContent: "space-between", alignItems: { xs: "flex-start", sm: "flex-start" }, gap: 1, mb: 0.5 }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 700, fontSize: { xs: "0.95rem", sm: "1rem" } }}>
                Senior Software Development Engineer 1 + Scrum Master
              </Typography>
              <Typography variant="caption" sx={{ fontWeight: 600, fontSize: { xs: "0.75rem", sm: "0.85rem" }, whiteSpace: "nowrap" }}>
                Jan 2025 – Present
              </Typography>
            </Box>
            <Typography variant="body2" color="primary" sx={{ fontWeight: 600, mb: 1, fontSize: { xs: "0.8rem", sm: "0.875rem" } }}>
              SBS (Sopra Banking Software), Noida, India
            </Typography>
            <Box component="ul" sx={{ pl: { xs: 1.5, sm: 2 }, m: 0, mb: 1 }}>
              <li><Typography variant="body2" sx={{ fontSize: { xs: "0.8rem", sm: "0.875rem" }, lineHeight: 1.6 }}>Led complete frontend revamp of legacy banking platform (904 JS files, 13 feature areas) to modern Turborepo monorepo with React 19, TypeScript, Vite, Mantine, Zod, and TanStack Query</Typography></li>
              <li><Typography variant="body2" sx={{ fontSize: { xs: "0.8rem", sm: "0.875rem" }, lineHeight: 1.6 }}>Delivered full payments module in 20 days: 5 multi-step user flows, 474+ tests, 10+ merged MRs using AI-augmented development methodology</Typography></li>
              <li><Typography variant="body2" sx={{ fontSize: { xs: "0.8rem", sm: "0.875rem" }, lineHeight: 1.6 }}>Built the first feature (dashboard) end-to-end: JSON-driven widget architecture, token-based API proxy, config fallback system, establishing all patterns for a team of 7 engineers</Typography></li>
              <li><Typography variant="body2" sx={{ fontSize: { xs: "0.8rem", sm: "0.875rem" }, lineHeight: 1.6 }}>Architected shared dynamic form infrastructure (5 composable modules) handling API-driven fields with country-specific validation, reused across all payment flows</Typography></li>
              <li><Typography variant="body2" sx={{ fontSize: { xs: "0.8rem", sm: "0.875rem" }, lineHeight: 1.6 }}>Pioneered AI knowledge transfer methodology enabling seamless tool migration with zero productivity loss; documented as replicable framework for team adoption</Typography></li>
              <li><Typography variant="body2" sx={{ fontSize: { xs: "0.8rem", sm: "0.875rem" }, lineHeight: 1.6 }}>Acting Scrum Master: facilitated sprint planning, refinements, retrospectives; removed 12+ cross-team blockers improving sprint goal achievement from 75% to 92%</Typography></li>
            </Box>
          </Box>

          {/* Role 2: SDE 2 */}
          <Box sx={{ mb: 2.5 }}>
            <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, justifyContent: "space-between", alignItems: { xs: "flex-start", sm: "flex-start" }, gap: 1, mb: 0.5 }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 700, fontSize: { xs: "0.95rem", sm: "1rem" } }}>
                Software Development Engineer 2
              </Typography>
              <Typography variant="caption" sx={{ fontWeight: 600, fontSize: { xs: "0.75rem", sm: "0.85rem" }, whiteSpace: "nowrap" }}>
                Jan 2023 – Dec 2024
              </Typography>
            </Box>
            <Typography variant="body2" color="primary" sx={{ fontWeight: 600, mb: 1, fontSize: { xs: "0.8rem", sm: "0.875rem" } }}>
              SBS (Sopra Banking Software), Noida, India
            </Typography>
            <Box component="ul" sx={{ pl: { xs: 1.5, sm: 2 }, m: 0, mb: 1 }}>
              <li><Typography variant="body2" sx={{ fontSize: { xs: "0.8rem", sm: "0.875rem" }, lineHeight: 1.6 }}>Led frontend architecture for backoffice and onboarding systems handling 1000+ daily registrations with 20+ developers; owned subsystem design decisions</Typography></li>
              <li><Typography variant="body2" sx={{ fontSize: { xs: "0.8rem", sm: "0.875rem" }, lineHeight: 1.6 }}>Authored 181 merged MRs across 8 banking repos: 66 feature deliveries, 36 production defect fixes, and 65 refactors driving systematic tech-debt reduction and code-duplication enforcement</Typography></li>
              <li><Typography variant="body2" sx={{ fontSize: { xs: "0.8rem", sm: "0.875rem" }, lineHeight: 1.6 }}>Guided junior developers on advanced React patterns (custom hooks, performance profiling, memoization); improved sprint estimation accuracy across the team</Typography></li>
              <li><Typography variant="body2" sx={{ fontSize: { xs: "0.8rem", sm: "0.875rem" }, lineHeight: 1.6 }}>Resolved 6+ cross-team integration blockers with backend teams; aligned with UX on design-to-code handoff processes improving delivery velocity</Typography></li>
              <li><Typography variant="body2" sx={{ fontSize: { xs: "0.8rem", sm: "0.875rem" }, lineHeight: 1.6 }}>Integrated Monaco Editor, Mock Service Worker, and Helmet; used custom Webpack configurations for optimized production builds</Typography></li>
            </Box>
          </Box>

          {/* Role 3: Software Engineer */}
          <Box sx={{ mb: 2.5 }}>
            <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, justifyContent: "space-between", alignItems: { xs: "flex-start", sm: "flex-start" }, gap: 1, mb: 0.5 }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 700, fontSize: { xs: "0.95rem", sm: "1rem" } }}>
                Software Engineer
              </Typography>
              <Typography variant="caption" sx={{ fontWeight: 600, fontSize: { xs: "0.75rem", sm: "0.85rem" }, whiteSpace: "nowrap" }}>
                Oct 2020 – Dec 2022
              </Typography>
            </Box>
            <Typography variant="body2" color="primary" sx={{ fontWeight: 600, mb: 1, fontSize: { xs: "0.8rem", sm: "0.875rem" } }}>
              SBS (Sopra Banking Software), Noida, India
            </Typography>
            <Box component="ul" sx={{ pl: { xs: 1.5, sm: 2 }, m: 0 }}>
              <li><Typography variant="body2" sx={{ fontSize: { xs: "0.8rem", sm: "0.875rem" }, lineHeight: 1.6 }}>Developed 20+ reusable React components with 100+ Jest tests for the SBS Design System component library, adopted across multiple product teams</Typography></li>
              <li><Typography variant="body2" sx={{ fontSize: { xs: "0.8rem", sm: "0.875rem" }, lineHeight: 1.6 }}>Raised community frontend unit test coverage to 70% (from ~55%) across 4 successive coverage milestones; authored 114 merged MRs spanning the component library, the server-side rendered community platform (Razzle + Redux-Saga, 4 major versions), and quality gates</Typography></li>
              <li><Typography variant="body2" sx={{ fontSize: { xs: "0.8rem", sm: "0.875rem" }, lineHeight: 1.6 }}>Implemented end-to-end testing with Cypress, internationalization with PhraseApp (i18n), and SonarQube static analysis driving code quality improvements; coached peers on testing strategy and SSR best practices</Typography></li>
            </Box>
          </Box>
        </Box>

        {/* Education */}
        <Box sx={{ mb: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5, textTransform: "uppercase", fontSize: { xs: "0.85rem", sm: "0.95rem" } }}>
            Education
          </Typography>
          <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, justifyContent: "space-between", alignItems: { xs: "flex-start", sm: "flex-start" }, gap: 1, mb: 0.5 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, fontSize: { xs: "0.95rem", sm: "1rem" } }}>
              Bachelor of Technology – Computer Science Engineering
            </Typography>
            <Typography variant="caption" sx={{ fontWeight: 600, fontSize: { xs: "0.75rem", sm: "0.85rem" }, whiteSpace: "nowrap" }}>
              Aug 2016 – Sep 2020
            </Typography>
          </Box>
          <Typography variant="body2" color="primary" sx={{ fontWeight: 600, fontSize: { xs: "0.8rem", sm: "0.875rem" } }}>
            Dr. APJ Abdul Kalam Technical University, Uttar Pradesh
          </Typography>
        </Box>

        {/* Certifications & Languages */}
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5, textTransform: "uppercase", fontSize: { xs: "0.85rem", sm: "0.95rem" } }}>
            Languages & Soft Skills
          </Typography>
          <Typography variant="body2" sx={{ fontSize: { xs: "0.8rem", sm: "0.875rem" }, lineHeight: 1.6 }}>
            <strong>Languages:</strong> English (Fluent), Hindi (Native)
          </Typography>
          <Typography variant="body2" sx={{ fontSize: { xs: "0.8rem", sm: "0.875rem" }, lineHeight: 1.6 }}>
            <strong>Competencies:</strong> Technical Leadership, Team Mentorship, Scrum Mastery, Code Quality Advocacy, Cross-functional Collaboration, Agile Sprint Management, Performance Optimization, Accessibility, Test-Driven Development (TDD)
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}
