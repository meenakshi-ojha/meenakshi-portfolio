import { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";

export const metadata: Metadata = {
  title: "Dynamic UI Widget Engine Framework - Meenakshi Ojha",
  description: "Case study: Architected a TypeScript-based widget engine enabling 40% code reuse and independent team deployments across 20+ engineers using Vite and Component Architecture.",
  keywords: "widget engine, component architecture, typescript, vite, code reuse, framework design",
  openGraph: {
    title: "Dynamic UI Widget Engine Framework",
    description: "Learn how I architected a JSON-driven UI framework enabling scalable, configuration-based rendering.",
    type: "article",
    url: "https://meenakshi.dev/projects/widget-engine",
  },
};

export default function WidgetEnginePage() {
  const sections = [
    {
      title: "Overview",
      content: (
        <>
          <p>
            Architected and built a TypeScript-based widget engine that enables dynamic UI rendering through a flexible plugin system. This framework allows teams to define complex UI configurations as JSON and render fully interactive components without modifying the engine core.
          </p>
          <p>
            The engine empowers cross-functional teams to compose UIs declaratively, reducing time-to-market for new features and enabling independent deployments across multiple product initiatives.
          </p>
        </>
      ),
    },
    {
      title: "Problem",
      content: (
        <>
          <p>
            The organization faced critical engineering challenges at scale:
          </p>
          <ul>
            <li><strong>Code Duplication:</strong> 20+ teams rebuilding similar UI patterns, leading to maintenance burden and inconsistency</li>
            <li><strong>Deployment Coupling:</strong> Teams dependent on core engine changes, slowing down independent feature deployment</li>
            <li><strong>Developer Velocity:</strong> Repetitive UI composition took weeks per feature when it should take days</li>
            <li><strong>Knowledge Silos:</strong> UI patterns lived across different repositories with no standardized approach</li>
            <li><strong>Maintainability:</strong> Changes to UI logic required coordinating across multiple teams and services</li>
          </ul>
        </>
      ),
    },
    {
      title: "My Role",
      content: (
        <>
          <p>
            <strong>Core Ownership:</strong> Led the architectural design, technology selection, and implementation strategy end-to-end.
          </p>
          <ul>
            <li>Architected the plugin registration system and type-safe configuration schema using Zod</li>
            <li>Designed the provider pattern for flexible data source injection (APIs, mock data, real-time streams)</li>
            <li>Built the initial showcase application demonstrating 20+ common widget patterns</li>
            <li>Mentored 4 junior developers on the architecture, testing strategies, and performance optimization</li>
            <li>Drove quality standards with Vitest achieving 70%+ coverage thresholds</li>
          </ul>
          <p>
            <strong>Cross-team Leadership:</strong> Collaborated with product managers and architects to ensure the framework solved real business needs while remaining extensible for future use cases.
          </p>
        </>
      ),
    },
    {
      title: "Architecture Decisions",
      content: (
        <>
          <p>
            <strong>Plugin Registration System:</strong> Implemented a registry pattern allowing teams to register custom widgets at runtime without modifying the core engine. This enabled 20+ teams to independently add new components.
          </p>
          <p>
            <strong>Type Safety First:</strong> Used TypeScript and Zod for comprehensive compile-time and runtime validation of widget configurations, catching errors early in the development cycle.
          </p>
          <p>
            <strong>Provider Pattern:</strong> Built configurable data providers (Axios-based for REST, mock providers for development, real-time subscription handlers) to decouple data fetching from UI rendering concerns.
          </p>
          <p>
            <strong>Performance Optimization:</strong> Leveraged React 19's compiler plugin and Vite's optimizations for sub-second component instantiation, even with complex nested configurations.
          </p>
          <p>
            <strong>Build Pipeline:</strong> Implemented Vite library build with code-splitting and external dependency management, reducing bundle size by 45% compared to monolithic builds.
          </p>
        </>
      ),
    },
    {
      title: "Tech Stack",
      content: (
        <>
          <ul>
            <li><strong>Core:</strong> TypeScript, React 19, Vite</li>
            <li><strong>Validation:</strong> Zod for runtime schema validation</li>
            <li><strong>UI Components:</strong> Mantine UI for base component library</li>
            <li><strong>API Integration:</strong> Axios, React Query for data fetching patterns</li>
            <li><strong>Testing:</strong> Vitest, React Testing Library, Jest</li>
            <li><strong>Documentation:</strong> Storybook for interactive component showcase</li>
            <li><strong>Internationalization:</strong> react-i18next for multi-language support across widgets</li>
          </ul>
        </>
      ),
    },
    {
      title: "Measurable Impact",
      content: (
        <>
          <ul>
            <li><strong>40% Code Reuse:</strong> Eliminated duplicate UI patterns across 20+ applications</li>
            <li><strong>Independent Deployments:</strong> Teams no longer blocked on core engine changes; average deployment time reduced from 2 hours to 15 minutes</li>
            <li><strong>Development Velocity:</strong> Average feature implementation time reduced by 35% through declarative UI composition</li>
            <li><strong>Testing Efficiency:</strong> Widget engine tests cover 70%+ of engine codebase, reducing integration bugs by 60%</li>
            <li><strong>Developer Onboarding:</strong> New team members productive within 2 days (vs. 2 weeks previously)</li>
            <li><strong>Maintainability:</strong> Centralized widget definitions reduced maintenance overhead by 50%</li>
          </ul>
        </>
      ),
    },
    {
      title: "Key Learnings",
      content: (
        <>
          <p>
            <strong>Plugin Systems Scale:</strong> A well-designed plugin architecture with clear extension points enables thousands of implementations without impacting core stability.
          </p>
          <p>
            <strong>Type Safety Pays Dividends:</strong> The upfront investment in TypeScript and Zod validation prevented 40+ bugs that would have required production hotfixes.
          </p>
          <p>
            <strong>Provider Patterns for Flexibility:</strong> By making data sources pluggable, the engine works equally well for static configs, REST APIs, GraphQL, or real-time subscriptions.
          </p>
          <p>
            <strong>Documentation Matters:</strong> A comprehensive showcase application and architecture decision record increased adoption rate 3x versus text-only documentation.
          </p>
          <p>
            <strong>Performance Requires Discipline:</strong> React 19's compiler helped, but intentional memoization strategies and bundling optimization were critical for sub-200ms widget render times at scale.
          </p>
        </>
      ),
    },
  ];

  return (
    <CaseStudyLayout
      title="Dynamic UI Widget Engine Framework"
      subtitle="Architected a JSON-driven UI framework enabling scalable, configuration-based rendering across 20+ teams"
      techStack={["TypeScript", "React 19", "Vite", "Zod", "Mantine UI", "Vitest", "Storybook"]}
      impactStatements={[
        "40% code reuse across multiple applications",
        "Independent team deployments without core dependencies",
        "35% faster feature development through declarative composition",
        "70%+ test coverage with Vitest",
        "50% reduction in UI maintenance overhead",
      ]}
      sections={sections}
      nextProject={{
        title: "Enterprise Design System & Component Library",
        slug: "design-system",
      }}
    />
  );
}
