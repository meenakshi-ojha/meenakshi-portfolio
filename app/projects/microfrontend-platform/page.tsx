import { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";

export const metadata: Metadata = {
  title: "Microfrontend Banking Platform - Meenakshi Ojha",
  description: "Case study: Architected enterprise-scale microfrontend enabling 20+ independent teams to deploy independently, reducing deployment time from 45 to 8 minutes.",
  keywords: "microfrontend architecture, yarn workspaces, redux toolkit, enterprise scale, independent deployments",
  openGraph: {
    title: "Microfrontend Banking Platform",
    description: "Learn how I enabled 20+ independent teams to deploy simultaneously with zero merge conflicts using microfrontend architecture.",
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
            Designed and implemented a microfrontend architecture for a complex digital banking platform handling 20,000+ daily transactions. The system enables independent teams to develop, test, and deploy features without coupling to a monolithic application.
          </p>
          <p>
            This architecture allowed 20+ engineering teams to work simultaneously on different features with zero merge conflicts, independent deployment pipelines, and decoupled development velocities.
          </p>
        </>
      ),
    },
    {
      title: "Problem",
      content: (
        <>
          <p>
            The monolithic frontend structure created critical scaling challenges:
          </p>
          <ul>
            <li><strong>Deployment Bottleneck:</strong> Every deployment required testing and coordination across all 20+ teams; average deployment time was 45 minutes</li>
            <li><strong>Merge Conflicts:</strong> Frequent conflicts in version control slowed development and introduced regressions</li>
            <li><strong>Technology Lock-in:</strong> All teams forced to use the same versions of React, Redux, and build tools</li>
            <li><strong>Team Isolation:</strong> Teams worked on different branches for weeks, then integration issues surfaced late in the cycle</li>
            <li><strong>Performance Risk:</strong> Changes by any team could impact performance for all users across the platform</li>
            <li><strong>Dependency Hell:</strong> Shared dependencies created version conflicts and cascading failures</li>
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
            <li>Established deployment pipeline enabling independent team deployments in 8 minutes (vs. 45 previously)</li>
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
            <li>Presented architectural vision to 20+ engineers through RFC process and team sessions</li>
            <li>Mentored 4 tech leads on microfrontend best practices and debugging strategies</li>
            <li>Established architectural review process for new feature module integration</li>
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
            <li><strong>20+ Independent Teams:</strong> Teams deploy independently without coupling to monolithic build pipeline</li>
            <li><strong>Deployment Time:</strong> Reduced from 45 minutes to 8 minutes per team deployment</li>
            <li><strong>Zero Merge Conflicts:</strong> Yarn Workspaces eliminated cross-team version conflicts</li>
            <li><strong>20,000+ Daily Transactions:</strong> Platform handles transaction volume with consistent sub-100ms response times per team module</li>
            <li><strong>Independent Team Velocity:</strong> Each team's sprint velocity no longer blocked by other teams</li>
            <li><strong>500+ Concurrent Users:</strong> Supports heavy load with proper code splitting and lazy loading</li>
            <li><strong>WCAG 2.1 AA Compliance:</strong> Accessibility enforced at shell level; all modules inherit baseline compliance</li>
            <li><strong>Faster Incident Response:</strong> Issues isolated to individual modules; MTTR (mean time to recovery) reduced by 65%</li>
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
            <strong>Contract Testing Prevents Integration Hell:</strong> Validating API contracts between teams caught incompatibilities before deployment, preventing cascading failures.
          </p>
          <p>
            <strong>Performance Monitoring at Scale:</strong> Distributed tracing across modules enabled early detection of performance regressions introduced by any team.
          </p>
          <p>
            <strong>Governance Without Micromanagement:</strong> Establishing architectural patterns (shell interaction, state management, error handling) provided guardrails without limiting team autonomy.
          </p>
          <p>
            <strong>Documentation and Tooling Drive Adoption:</strong> A well-designed CLI tool and comprehensive architecture documentation made onboarding new teams frictionless.
          </p>
        </>
      ),
    },
  ];

  return (
    <CaseStudyLayout
      title="Microfrontend Banking Platform"
      subtitle="Architected enterprise-scale microfrontend enabling independent deployments across 20+ teams"
      techStack={["React", "TypeScript", "Redux Toolkit", "Redux Loop", "Yarn Workspaces", "Webpack", "Jest"]}
      impactStatements={[
        "20+ independent engineering teams with zero merge conflicts",
        "Deployment time reduced from 45 minutes to 8 minutes per team",
        "Handles 20,000+ daily transactions with consistent sub-100ms response times",
        "500+ concurrent users without performance degradation",
        "65% reduction in incident response time (MTTR)",
      ]}
      sections={sections}
      nextProject={{
        title: "Server-Side Rendered Community Platform",
        slug: "ssr-platform",
      }}
    />
  );
}
