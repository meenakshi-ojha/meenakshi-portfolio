import { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";

export const metadata: Metadata = {
  title: "Enterprise Design System & Component Library - Meenakshi Ojha",
  description: "Case study: Built a comprehensive design system with 50+ components achieving 35% faster development, WCAG 2.1 AA compliance, and comprehensive testing.",
  keywords: "design system, component library, storybook, typescript, accessibility, react",
  openGraph: {
    title: "Enterprise Design System & Component Library",
    description: "Learn how I engineered a design system adopted across multiple product teams with 50+ production-ready components.",
    type: "article",
    url: "https://meenakshi.dev/projects/design-system",
  },
};

export default function DesignSystemPage() {
  const sections = [
    {
      title: "Overview",
      content: (
        <>
          <p>
            Engineered a comprehensive design system and component library serving as the single source of truth for UI components across the enterprise banking platform. The library provides 50+ pre-built components with full TypeScript support, Storybook documentation, and accessibility compliance (WCAG 2.1 AA).
          </p>
          <p>
            This system eliminated design inconsistencies, accelerated feature development, and established a standardized language for UI interactions across dozens of product teams.
          </p>
        </>
      ),
    },
    {
      title: "Problem",
      content: (
        <>
          <p>
            Legacy approach created significant friction:
          </p>
          <ul>
            <li><strong>Design Fragmentation:</strong> Each team implemented buttons, modals, and forms differently, leading to poor user experience consistency</li>
            <li><strong>Reinvention Cost:</strong> Estimated 40% of development time spent rebuilding common components</li>
            <li><strong>Accessibility Gaps:</strong> Inconsistent ARIA attributes and semantic HTML across features, creating compliance risk</li>
            <li><strong>Testing Burden:</strong> Each team testing the same components repeatedly; no shared test infrastructure</li>
            <li><strong>Onboarding Friction:</strong> New developers unsure of UI patterns, leading to design review cycles and rework</li>
            <li><strong>Version Hell:</strong> Multiple versions of similar components across different applications</li>
          </ul>
        </>
      ),
    },
    {
      title: "My Role",
      content: (
        <>
          <p>
            <strong>Design System Leadership:</strong> Owned the component library architecture, documentation strategy, and collaboration with design and product teams.
          </p>
          <ul>
            <li>Created 50+ primary components following atomic design principles (atoms, molecules, organisms)</li>
            <li>Built comprehensive component stories in Storybook showcasing variants, states, and accessibility features</li>
            <li>Implemented contract testing to ensure consistency across component implementations</li>
            <li>Established accessibility guidelines with ARIA attributes, semantic HTML, and keyboard navigation</li>
            <li>Created automated Figma sync script for design token consistency between design system and code</li>
          </ul>
          <p>
            <strong>Quality & Documentation:</strong> Drove adoption through exceptional documentation and developer tooling.
          </p>
          <ul>
            <li>Mentored 2+ developers on component testing and composition patterns</li>
            <li>Wrote Jest + React Testing Library tests for every component variant (200+ total test cases)</li>
            <li>Established version management via private NPM registry with semantic versioning</li>
            <li>Created RFC (Request for Comments) process for major component changes</li>
          </ul>
        </>
      ),
    },
    {
      title: "Architecture Decisions",
      content: (
        <>
          <p>
            <strong>Atomic Design Structure:</strong> Organized components hierarchically (atoms like Button/Input → molecules like SearchBox → organisms like DataTable). This mental model made components discoverable and composable.
          </p>
          <p>
            <strong>TypeScript First:</strong> Every component exported strict prop interfaces, enabling compile-time validation in consuming applications and reducing runtime errors.
          </p>
          <p>
            <strong>CSS Modules with BEM:</strong> Scoped styling prevented namespace collisions and ensured portability across different build systems. BEM naming conventions made selectors readable and maintainable.
          </p>
          <p>
            <strong>Storybook as Source of Truth:</strong> Each component story served as interactive documentation, reducing API surface documentation requirements and enabling design reviews.
          </p>
          <p>
            <strong>Contract Testing:</strong> Implemented tests validating that components work correctly across variant combinations, preventing regressions across major versions.
          </p>
          <p>
            <strong>Peer Dependencies Strategy:</strong> Flexible dependency management allowed consuming applications to manage their own React versions, preventing major version conflicts.
          </p>
        </>
      ),
    },
    {
      title: "Tech Stack",
      content: (
        <>
          <ul>
            <li><strong>Core:</strong> React, TypeScript, CSS Modules</li>
            <li><strong>Documentation:</strong> Storybook with decorators and controls</li>
            <li><strong>Testing:</strong> Jest, React Testing Library, contract testing with dbs-contract-testing</li>
            <li><strong>Build:</strong> Webpack with custom loaders for CSS code splitting</li>
            <li><strong>Version Management:</strong> Semantic versioning, private NPM registry</li>
            <li><strong>Design Integration:</strong> Figma with automated token sync</li>
            <li><strong>Accessibility:</strong> Axe-core for automated a11y testing, manual WCAG 2.1 AA validation</li>
          </ul>
        </>
      ),
    },
    {
      title: "Measurable Impact",
      content: (
        <>
          <ul>
            <li><strong>35% Faster Development:</strong> Teams building new features with component library shipped 35% faster than custom implementations</li>
            <li><strong>50+ Production Components:</strong> Covered 80% of UI patterns needed across the platform</li>
            <li><strong>50% Less Testing Overhead:</strong> Shared component tests eliminated redundant test writing across teams</li>
            <li><strong>WCAG 2.1 AA Compliance:</strong> Every component tested for accessibility; 100% compliance across accessible color contrast, keyboard navigation, and ARIA attributes</li>
            <li><strong>Reduced Design Inconsistencies:</strong> 90% reduction in design system deviations across applications</li>
            <li><strong>Faster Onboarding:</strong> New team members productive within 3 days (vs. 2 weeks previously)</li>
            <li><strong>Component Adoption Rate:</strong> 85% of new UI implementations use library components (vs. 15% previously)</li>
          </ul>
        </>
      ),
    },
    {
      title: "Key Learnings",
      content: (
        <>
          <p>
            <strong>Atomic Design Scales:</strong> Hierarchical component organization worked well initially but required governance as the library grew. Clear contribution guidelines became essential.
          </p>
          <p>
            <strong>Documentation Drives Adoption:</strong> Beautiful Storybook stories increased adoption 2x versus GitHub README documentation. Visual examples outperform text-based docs.
          </p>
          <p>
            <strong>Accessibility as First-Class Citizen:</strong> Embedding accessibility requirements into component APIs (e.g., required aria-labels) prevented accessibility rework downstream.
          </p>
          <p>
            <strong>Version Management Matters:</strong> Clear semantic versioning and deprecation policies prevented "dependency hell" when updating components.
          </p>
          <p>
            <strong>Design-to-Code Handoff:</strong> Automatic Figma token sync reduced design-to-implementation drift and improved designer-engineer collaboration.
          </p>
          <p>
            <strong>Testing Component Variants:</strong> Contract testing each component's state combinations caught more bugs than traditional unit tests, improving production stability.
          </p>
        </>
      ),
    },
  ];

  return (
    <CaseStudyLayout
      title="Enterprise Design System & Component Library"
      subtitle="Built a reusable component library adopted across multiple product modules with 50+ components"
      techStack={["React", "TypeScript", "CSS Modules", "Storybook", "Jest", "React Testing Library", "Webpack"]}
      impactStatements={[
        "35% faster feature development for consuming teams",
        "50+ production-ready components with full type safety",
        "WCAG 2.1 AA accessibility compliance across all components",
        "200+ comprehensive test cases covering variant combinations",
        "90% reduction in design system deviations",
      ]}
      sections={sections}
      nextProject={{
        title: "Microfrontend Banking Platform",
        slug: "microfrontend-platform",
      }}
    />
  );
}
