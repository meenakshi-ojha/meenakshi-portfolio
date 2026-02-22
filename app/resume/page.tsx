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
            Senior Frontend Engineer | React | Microfrontends | Scrum Master
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: "0.75rem", sm: "0.875rem" }, overflowWrap: "break-word", wordBreak: "break-word" }}>
            Email: meenakshiojhabook@gmail.com | Phone: +91 9654354118 | LinkedIn: linkedin.com/in/meenakshi-ojha | GitHub: github.com/meenakshi-ojha
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
            Senior Frontend Engineer with {experienceYears} years of expertise building scalable banking applications, component libraries, and microfrontend architectures using React, TypeScript, and modern tooling. Proven track record of technical leadership, mentoring multiple junior developers across teams, and driving code quality initiatives (80%+ test coverage). Acting Scrum Master managing cross-functional teams of 20+ engineers, removing blockers, and improving sprint predictability and on-time sprint goal completion. Strong focus on performance optimization, accessibility, and test-driven development.
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
              <Typography variant="body2" sx={{ fontSize: { xs: "0.8rem", sm: "0.875rem" }, lineHeight: 1.6 }}>React, TypeScript, JavaScript (ES6+), React Hooks, HTML5, CSS3, Tailwind CSS, Redux, Redux-Saga, Redux-Thunk</Typography>
            </Box>
            <Box>
              <Typography variant="caption" sx={{ fontWeight: 700, display: "block", mb: 0.5, fontSize: { xs: "0.7rem", sm: "0.75rem" } }}>
                Testing & Quality
              </Typography>
              <Typography variant="body2" sx={{ fontSize: { xs: "0.8rem", sm: "0.875rem" }, lineHeight: 1.6 }}>Jest, React Testing Library, Enzyme, Cypress, Vitest, SonarQube, ESLint, Prettier, Mock Service Worker</Typography>
            </Box>
            <Box>
              <Typography variant="caption" sx={{ fontWeight: 700, display: "block", mb: 0.5, fontSize: { xs: "0.7rem", sm: "0.75rem" } }}>
                Build & Architecture
              </Typography>
              <Typography variant="body2" sx={{ fontSize: { xs: "0.8rem", sm: "0.875rem" }, lineHeight: 1.6 }}>Vite, Webpack, Babel, Storybook, Microfrontends, Server-Side Rendered Platforms, Yarn Workspaces, CI/CD Pipelines</Typography>
            </Box>
            <Box>
              <Typography variant="caption" sx={{ fontWeight: 700, display: "block", mb: 0.5, fontSize: { xs: "0.7rem", sm: "0.75rem" } }}>
                Tools & Methodologies
              </Typography>
              <Typography variant="body2" sx={{ fontSize: { xs: "0.8rem", sm: "0.875rem" }, lineHeight: 1.6 }}>Git, GitLab, Docker, Node.js, Agile, Scrum, Sprint Planning, Code Design Reviews, Mentorship, TDD</Typography>
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
              <li><Typography variant="body2" sx={{ fontSize: { xs: "0.8rem", sm: "0.875rem" }, lineHeight: 1.6 }}>Architected widget engine framework using TypeScript and Vite enabling independent team deployments across multiple product modules</Typography></li>
              <li><Typography variant="body2" sx={{ fontSize: { xs: "0.8rem", sm: "0.875rem" }, lineHeight: 1.6 }}>Acting Scrum Master: facilitated sprint planning, refinements, retrospectives; removed blockers and improved sprint predictability and sprint goal achievement</Typography></li>
              <li><Typography variant="body2" sx={{ fontSize: { xs: "0.8rem", sm: "0.875rem" }, lineHeight: 1.6 }}>Mentored multiple developers on modern tooling (Vite, Vitest, TypeScript) and performance optimization techniques</Typography></li>
              <li><Typography variant="body2" sx={{ fontSize: { xs: "0.8rem", sm: "0.875rem" }, lineHeight: 1.6 }}>Implemented CI/CD pipelines with automated testing and SonarQube integration; drove quality advocacy achieving 85%+ test coverage targets</Typography></li>
              <li><Typography variant="body2" sx={{ fontSize: { xs: "0.8rem", sm: "0.875rem" }, lineHeight: 1.6 }}>Designed robust authentication library used across banking applications; led architectural reviews with product and infrastructure teams</Typography></li>
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
              <li><Typography variant="body2" sx={{ fontSize: { xs: "0.8rem", sm: "0.875rem" }, lineHeight: 1.6 }}>Drove quality initiatives significantly increasing code coverage, reducing bugs, and enforcing code duplication standards through systematic refactoring</Typography></li>
              <li><Typography variant="body2" sx={{ fontSize: { xs: "0.8rem", sm: "0.875rem" }, lineHeight: 1.6 }}>Mentored junior developers on advanced patterns (custom hooks, performance profiling); improved sprint estimation accuracy</Typography></li>
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
              <li><Typography variant="body2" sx={{ fontSize: { xs: "0.8rem", sm: "0.875rem" }, lineHeight: 1.6 }}>Developed 20+ reusable React components for component library with 100+ Jest tests; improved development efficiency across multiple teams through component reuse</Typography></li>
              <li><Typography variant="body2" sx={{ fontSize: { xs: "0.8rem", sm: "0.875rem" }, lineHeight: 1.6 }}>Built Server-Side Rendered community platform (4 major versions) with Razzle and Redux-Saga; substantially increased unit test coverage and substantially reduced recurring production bugs</Typography></li>
              <li><Typography variant="body2" sx={{ fontSize: { xs: "0.8rem", sm: "0.875rem" }, lineHeight: 1.6 }}>Implemented comprehensive E2E testing with Cypress, i18n support with PhraseApp, and SONAR analysis driving code quality improvements</Typography></li>
              <li><Typography variant="body2" sx={{ fontSize: { xs: "0.8rem", sm: "0.875rem" }, lineHeight: 1.6 }}>Mentored 2+ developers on testing strategies and Server-Side Rendered platform best practices; resolved 8+ integration blockers and facilitated sprint planning sessions</Typography></li>
              <li><Typography variant="body2" sx={{ fontSize: { xs: "0.8rem", sm: "0.875rem" }, lineHeight: 1.6 }}>Established quality gates and code review standards across teams, improving overall testing culture and technical debt management</Typography></li>
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
