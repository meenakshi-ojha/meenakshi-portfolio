import { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";

export const metadata: Metadata = {
  title: "Microfrontend Banking Platform - Meenakshi Ojha",
  description: "Case study: Architected microfrontend platform enabling 10 independent teams to deploy without coupling, reducing deployment time from 40 to 12 minutes.",
  keywords: "microfrontend architecture, yarn workspaces, redux toolkit, independent deployments, team autonomy",
  openGraph: {
    title: "Microfrontend Banking Platform",
    description: "How I designed a microfrontend architecture enabling 10 independent teams to deploy autonomously without cross-team merge conflicts.",
    type: "article",
    url: "https://meenakshi-portfolio-five.vercel.app/projects/microfrontend-platform",
  },
};

export default function MicrofrontendPlatformPage() {
  const sections = [
    {
      title: "Overview",
      content: (
        <>
          <p>
            Designed and implemented a microfrontend architecture for a digital banking platform used by multiple internal teams. The system enables independent teams to develop, test, and deploy features without coupling to a monolithic application.
          </p>
          <p>
            This architecture allowed 10 engineering teams to work simultaneously on different features with significantly reduced merge conflicts, independent deployment pipelines, and decoupled development cycles.
          </p>
        </>
      ),
    },
    {
      title: "Problem",
      content: (
        <>
          <p>
            The monolithic frontend structure created scaling challenges that limited team autonomy:
          </p>
          <ul>
            <li><strong>Deployment Coordination:</strong> Every deployment required testing and approval from multiple teams, resulting in 40-minute deployment cycles</li>
            <li><strong>Merge Conflicts:</strong> Frequent conflicts in version control between teams working on parallel features</li>
            <li><strong>Technology Constraints:</strong> All teams required to use identical versions of React, Redux, and build tools regardless of project needs</li>
            <li><strong>Late Integration Issues:</strong> Teams integrated their work late in the cycle, causing unexpected conflicts</li>
            <li><strong>Shared Risk:</strong> Changes in core dependencies could impact features across multiple teams</li>
            <li><strong>Version Conflicts:</strong> Managing shared dependencies across features created compatibility issues</li>
          </ul>
        </>
      ),
    },
    {
      title: "My Role",
      content: (
        <>
          <p>
            <strong>Architecture Design & Strategy:</strong> Led the microfrontend architectural strategy, evaluated technology options, and gained organizational buy-in.
          </p>
          <ul>
            <li>Analyzed trade-offs between Module Federation, Yarn Workspaces, and script-based approaches</li>
            <li>Selected Yarn Workspaces for simpler deployment and version management</li>
            <li>Designed the shell orchestration layer coordinating independent feature modules</li>
            <li>Established deployment pipeline reducing cycle time from approximately 40 minutes to under 15 minutes</li>
          </ul>
          <p>
            <strong>Infrastructure & Tooling:</strong> Built the foundations enabling autonomous team deployment.
          </p>
          <ul>
            <li>Created reusable <code>app-scripts</code> CLI tooling for common build operations</li>
            <li>Implemented <code>babel-preset</code> and <code>eslint-config</code> packages for consistency without enforcing specific versions</li>
            <li>Built contract testing framework validating API compatibility between feature modules</li>
            <li>Established Mock Service Worker (MSW) patterns for realistic development environments</li>
          </ul>
          <p>
            <strong>Leadership & Mentorship:</strong> Guided teams through migration and architectural decisions.
          </p>
          <ul>
            <li>Presented architectural vision to engineering teams through RFC discussions and architecture sessions</li>
            <li>Mentored tech leads on microfrontend patterns and integration strategies</li>
            <li>Established architectural guidelines for feature module integration</li>
          </ul>
        </>
      ),
    },
    {
      title: "Architecture Decisions",
      content: (
        <>
          <p>
            <strong>Yarn Workspaces Monorepo:</strong> Chose Yarn Workspaces over Module Federation for simpler setup and predictable versioning. Single repository maintained clear dependencies while allowing independent builds.
          </p>
          <p>
            <strong>Shell Pattern:</strong> Central orchestration layer (shell) manages route dispatch, shared services, and global state. Feature modules never communicate directly; all coordination flows through shell.
          </p>
          <p>
            <strong>Redux Toolkit + Redux Loop:</strong> Centralized state management with Redux Toolkit for simple state, Redux Loop for complex side effects. Modules subscribe to store slices without coupling.
          </p>
          <p>
            <strong>Internationalization at Scale:</strong> react-i18next with PhraseApp integration for collaborative translation. Configuration centralized in shell, but each module can define feature-specific translations.
          </p>
          <p>
            <strong>Contract Testing for Integration:</strong> Custom contract testing library validating API contracts between teams. Prevents integration surprises before deployment.
          </p>
          <p>
            <strong>Performance Monitoring:</strong> OpenTelemetry distributed tracing across all modules. Each module reports timings; centralized observability catches performance regressions.
          </p>
        </>
      ),
    },
    {
      title: "Tech Stack",
      content: (
        <>
          <ul>
            <li><strong>Core:</strong> React, TypeScript, Redux Toolkit, Redux Loop</li>
            <li><strong>Package Management:</strong> Yarn Workspaces, npm registry</li>
            <li><strong>Build & Bundling:</strong> Webpack, Babel with shared presets</li>
            <li><strong>State Management:</strong> Redux Toolkit, Redux Loop for side effects</li>
            <li><strong>Testing:</strong> Jest, React Testing Library, contract testing, MSW</li>
            <li><strong>Internationalization:</strong> react-i18next, PhraseApp integration</li>
            <li><strong>Observability:</strong> OpenTelemetry, distributed tracing</li>
            <li><strong>Quality & Security:</strong> ESLint, Prettier, Helmet.js for security headers</li>
          </ul>
        </>
      ),
    },
    {
      title: "Measurable Impact",
      content: (
        <>
          <ul>
            <li><strong>10 Autonomous Teams:</strong> Teams deploy features independently without coordinating through a central deployment process</li>
            <li><strong>Deployment Time:</strong> Reduced from 40 minutes to 12 minutes per team deployment</li>
            <li><strong>Reduced Merge Conflicts:</strong> Yarn Workspaces and feature isolation significantly reduced cross-team version conflicts</li>
            <li><strong>Improved Team Velocity:</strong> Teams can iterate on features without waiting for other teams to complete their work</li>
            <li><strong>Module-Level Isolation:</strong> Issues in one team's module don't impact other features or the overall platform</li>
            <li><strong>WCAG 2.1 AA Compliance:</strong> Accessibility standards enforced at the shell level for consistency</li>
            <li><strong>Faster Issue Resolution:</strong> Problems isolated to individual modules, reducing debugging time</li>
          </ul>
        </>
      ),
    },
    {
      title: "Key Learnings",
      content: (
        <>
          <p>
            <strong>Monorepo Reduces Coordination Overhead:</strong> Single git repository simplified CI/CD and dependency management versus multi-repo approaches that require complex orchestration.
          </p>
          <p>
            <strong>Shell Pattern Enables Autonomy:</strong> Clear separation between orchestration (shell) and features allowed teams to innovate with different tech stacks within their modules.
          </p>
          <p>
            <strong>Contract Testing Prevents Integration Issues:</strong> Validating API contracts between teams caught incompatibilities before deployment.
          </p>
          <p>
            <strong>Performance Monitoring at Scale:</strong> Distributed tracing across modules enabled early detection of performance regressions introduced by any team.
          </p>
          <p>
            <strong>Governance Without Micromanagement:</strong> Establishing architectural patterns (shell interaction, state management, error handling) provided guardrails without limiting team autonomy.
          </p>
          <p>
            <strong>Documentation and Tooling Enable Adoption:</strong> A well-designed CLI tool and clear architecture documentation reduced onboarding time for new teams.
          </p>
        </>
      ),
    },
  ];

  return (
    <CaseStudyLayout
      title="Microfrontend Banking Platform"
      subtitle="Architected microfrontend architecture enabling 10 teams to deploy autonomously"
      techStack={["React", "TypeScript", "Redux Toolkit", "Redux Loop", "Yarn Workspaces", "Webpack", "Jest"]}
      impactStatements={[
        "10 independent teams deploying without cross-team coordination",
        "Deployment time reduced from 40 minutes to 12 minutes",
        "Significantly reduced merge conflicts through feature isolation",
        "Teams can iterate independently without blocking each other",
        "Faster issue resolution through module-level isolation",
      ]}
      sections={sections}
      nextProject={{
        title: "Server-Side Rendered Community Platform",
        slug: "ssr-platform",
      }}
    />
  );
}
