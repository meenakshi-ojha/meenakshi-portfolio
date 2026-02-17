"use client";

import { Container, Typography, Paper, Box, Divider } from "@mui/material";
import dynamic from "next/dynamic";

const ResumeDownloadButton = dynamic(
  () => import("@/components/ResumeDownloadButton"),
  { ssr: false }
);

export default function ResumePage() {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Paper elevation={0} sx={{ p: { xs: 3, sm: 4 }, backgroundColor: "background.paper" }}>
        {/* Header */}
        <Box sx={{ mb: 3, textAlign: "center" }}>
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 0.5 }}>
            MEENAKSHI OJHA
          </Typography>
          <Typography variant="subtitle1" color="primary" sx={{ fontWeight: 600, mb: 1 }}>
            Senior Frontend Engineer | React | Microfrontends | Scrum Master
          </Typography>
          <Typography variant="body2" color="text.secondary">
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
            Senior Frontend Engineer with 5.5+ years of expertise building scalable banking applications, component libraries, and microfrontend architectures using React, TypeScript, and modern tooling. Proven track record of technical leadership, mentoring 10+ junior developers, and driving code quality initiatives (80%+ test coverage). Acting Scrum Master managing cross-functional teams of 20+ engineers, removing blockers, and improving sprint velocity by 25%. Strong focus on performance optimization, accessibility, and test-driven development.
          </Typography>
        </Box>

        {/* Core Skills */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5, textTransform: "uppercase", fontSize: "0.95rem" }}>
            Core Skills
          </Typography>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" }, gap: 2 }}>
            <Box>
              <Typography variant="caption" sx={{ fontWeight: 700, display: "block", mb: 0.5 }}>
                Frontend Technologies
              </Typography>
              <Typography variant="body2">React, TypeScript, JavaScript (ES6+), React Hooks, HTML5, CSS3, Tailwind CSS, Redux, Redux-Saga, Redux-Thunk</Typography>
            </Box>
            <Box>
              <Typography variant="caption" sx={{ fontWeight: 700, display: "block", mb: 0.5 }}>
                Testing & Quality
              </Typography>
              <Typography variant="body2">Jest, React Testing Library, Enzyme, Cypress, Vitest, SonarQube, ESLint, Prettier, Mock Service Worker</Typography>
            </Box>
            <Box>
              <Typography variant="caption" sx={{ fontWeight: 700, display: "block", mb: 0.5 }}>
                Build & Architecture
              </Typography>
              <Typography variant="body2">Vite, Webpack, Babel, Storybook, Microfrontends, Server-Side Rendered Platforms, Yarn Workspaces, CI/CD Pipelines</Typography>
            </Box>
            <Box>
              <Typography variant="caption" sx={{ fontWeight: 700, display: "block", mb: 0.5 }}>
                Tools & Methodologies
              </Typography>
              <Typography variant="body2">Git, GitLab, Docker, Node.js, Agile, Scrum, Sprint Planning, Code Design Reviews, Mentorship, TDD</Typography>
            </Box>
          </Box>
        </Box>

        {/* Professional Experience */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5, textTransform: "uppercase", fontSize: "0.95rem" }}>
            Professional Experience
          </Typography>

          {/* Role 1: Senior SDE 1 */}
          <Box sx={{ mb: 2.5 }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 0.5 }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                Senior Software Development Engineer 1 + Scrum Master
              </Typography>
              <Typography variant="caption" sx={{ fontWeight: 600 }}>
                Jan 2025 – Present
              </Typography>
            </Box>
            <Typography variant="body2" color="primary" sx={{ fontWeight: 600, mb: 1 }}>
              SBS (Sopra Banking Software), Noida, India
            </Typography>
            <Box component="ul" sx={{ pl: 2, m: 0, mb: 1 }}>
              <li><Typography variant="body2">Architected widget engine framework using TypeScript and Vite enabling 40% code reuse and independent team deployments across 20+ engineers</Typography></li>
              <li><Typography variant="body2">Acting Scrum Master: facilitated sprint planning, refinements, retrospectives; removed 12+ blockers improving sprint velocity by 25% and sprint goal achievement to 92%</Typography></li>
              <li><Typography variant="body2">Mentored 5+ developers on modern tooling (Vite, Vitest, TypeScript), performance optimization reducing First Contentful Paint by 40%</Typography></li>
              <li><Typography variant="body2">Implemented CI/CD pipelines with automated testing and SonarQube integration; drove quality advocacy achieving 85%+ test coverage targets</Typography></li>
              <li><Typography variant="body2">Designed authentication library with 99.9%+ availability across all banking applications; led architectural reviews with product and infrastructure teams</Typography></li>
            </Box>
          </Box>

          {/* Role 2: SDE 2 */}
          <Box sx={{ mb: 2.5 }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 0.5 }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                Software Development Engineer 2
              </Typography>
              <Typography variant="caption" sx={{ fontWeight: 600 }}>
                Jan 2023 – Dec 2024
              </Typography>
            </Box>
            <Typography variant="body2" color="primary" sx={{ fontWeight: 600, mb: 1 }}>
              SBS (Sopra Banking Software), Noida, India
            </Typography>
            <Box component="ul" sx={{ pl: 2, m: 0, mb: 1 }}>
              <li><Typography variant="body2">Led frontend architecture for backoffice and onboarding systems handling 1000+ daily registrations with 20+ developers; owned subsystem design decisions</Typography></li>
              <li><Typography variant="body2">Drove quality initiatives increasing code coverage from 10% to 80%+, reducing bugs by 50%, and enforcing code duplication below 0.5% through systematic refactoring</Typography></li>
              <li><Typography variant="body2">Mentored 3+ junior developers on advanced patterns (custom hooks, performance profiling); improved sprint estimation accuracy by 20%</Typography></li>
              <li><Typography variant="body2">Resolved 6+ cross-team integration blockers with backend teams; aligned with UX on design-to-code handoff processes improving delivery velocity</Typography></li>
              <li><Typography variant="body2">Integrated Monaco Editor, Mock Service Worker, and Helmet; used custom Webpack configurations for optimized production builds</Typography></li>
            </Box>
          </Box>

          {/* Role 3: Software Engineer */}
          <Box sx={{ mb: 2.5 }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 0.5 }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                Software Engineer
              </Typography>
              <Typography variant="caption" sx={{ fontWeight: 600 }}>
                Oct 2020 – Dec 2022
              </Typography>
            </Box>
            <Typography variant="body2" color="primary" sx={{ fontWeight: 600, mb: 1 }}>
              SBS (Sopra Banking Software), Noida, India
            </Typography>
            <Box component="ul" sx={{ pl: 2, m: 0 }}>
              <li><Typography variant="body2">Developed 20+ reusable React components for component library with 100+ Jest tests; improved development efficiency across 5+ teams by 40%</Typography></li>
              <li><Typography variant="body2">Built Server-Side Rendered community platform (4 major versions) with Razzle and Redux-Saga; increased unit coverage from 10% to 75%, reducing bugs by 50%</Typography></li>
              <li><Typography variant="body2">Implemented comprehensive E2E testing with Cypress, i18n support with PhraseApp, and SONAR analysis driving code quality improvements</Typography></li>
              <li><Typography variant="body2">Mentored 2+ developers on testing strategies and Server-Side Rendered platform best practices; resolved 8+ integration blockers and facilitated sprint planning sessions</Typography></li>
              <li><Typography variant="body2">Established quality gates and code review standards across teams, improving overall testing culture and technical debt management</Typography></li>
            </Box>
          </Box>
        </Box>

        {/* Education */}
        <Box sx={{ mb: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5, textTransform: "uppercase", fontSize: "0.95rem" }}>
            Education
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 0.5 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
              Bachelor of Technology – Computer Science Engineering
            </Typography>
            <Typography variant="caption" sx={{ fontWeight: 600 }}>
              Aug 2016 – Sep 2020
            </Typography>
          </Box>
          <Typography variant="body2" color="primary" sx={{ fontWeight: 600 }}>
            Dr. APJ Abdul Kalam Technical University, Uttar Pradesh
          </Typography>
        </Box>

        {/* Certifications & Languages */}
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5, textTransform: "uppercase", fontSize: "0.95rem" }}>
            Languages & Soft Skills
          </Typography>
          <Typography variant="body2">
            <strong>Languages:</strong> English (Fluent), Hindi (Native)
          </Typography>
          <Typography variant="body2">
            <strong>Competencies:</strong> Technical Leadership, Team Mentorship, Scrum Mastery, Code Quality Advocacy, Cross-functional Collaboration, Agile Sprint Management, Performance Optimization, Accessibility, Test-Driven Development (TDD)
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}
