import { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";

export const metadata: Metadata = {
  title: "CX Banking Platform Revamp - Meenakshi Ojha",
  description: "Led complete frontend revamp of legacy banking platform (904 files) to modern Turborepo monorepo. Delivered payments module (5 flows, 474+ tests) in 20 days.",
};

export default function CxBankingRevampPage() {
  const sections = [
    {
      title: "Overview",
      content: (
        <>
          <p>
            Led the complete frontend revamp of a legacy banking CX platform — migrating a 904-file React/Redux application to a modern Turborepo monorepo with React 19, TypeScript, Vite, Mantine, Zod, and TanStack Query. Built the first working screen (dashboard) end-to-end, then delivered the entire payments module (5 user flows, 474+ tests) in 20 working days using AI-augmented development.
          </p>
        </>
      ),
    },
    {
      title: "Problem",
      content: (
        <>
          <ul>
            <li><strong>Legacy Debt:</strong> 904 JavaScript files, 40+ Redux slices, React Router v5, no TypeScript — unmaintainable at scale</li>
            <li><strong>Slow Delivery:</strong> Tightly coupled architecture meant every feature required coordinating across multiple teams</li>
            <li><strong>No Test Culture:</strong> Minimal test coverage, no mock infrastructure, no CI quality gates</li>
            <li><strong>Knowledge Silos:</strong> 13 feature areas with no shared patterns or reusable infrastructure</li>
          </ul>
        </>
      ),
    },
    {
      title: "My Role",
      content: (
        <>
          <p><strong>Tech Lead & Primary Implementer</strong> for the CX banking module in a team of 7 engineers.</p>
          <ul>
            <li>Analyzed the entire legacy codebase and produced a 15-section migration strategy</li>
            <li>Set up all dev infrastructure: Vite proxy, remote config fallback, mock server, Turborepo config</li>
            <li>Built the first feature (dashboard) establishing all patterns the team follows</li>
            <li>Delivered the full payments epic solo in 20 days with AI-augmented development</li>
            <li>Performed 5+ teammate code reviews, mentored on architecture patterns</li>
            <li>Coordinated delivery across 7-engineer team with systematic task breakdown and tracking</li>
          </ul>
        </>
      ),
    },
    {
      title: "Dashboard — First Feature (Established All Patterns)",
      content: (
        <>
          <ul>
            <li>Built token-based API proxy routing (mock when logged out, real API when logged in)</li>
            <li>Implemented remote screen config with bundled JSON fallback for offline/deployment resilience</li>
            <li>Created JSON-driven widget tree architecture: sidebar navigation, header, quick-actions, latest transactions, products sidebar, KYC alert</li>
            <li>Established specialized widget pattern: schema.ts → api.ts → transform.ts → widget.tsx → index.ts</li>
            <li>Set up mock handlers, i18n workflow (en/ar/fr), route registration, and widget catalog</li>
            <li>Established all architectural patterns (screen configuration, specialized widgets, mock handlers, i18n) the team now follows</li>
          </ul>
        </>
      ),
    },
    {
      title: "Payments Epic — 5 Flows in 20 Days",
      content: (
        <>
          <p><strong>Delivered:</strong></p>
          <ul>
            <li><strong>Payment Dashboard:</strong> Quick actions, recent payees, data tables with pagination, tabs, and account filtering</li>
            <li><strong>Send Money (5 screens):</strong> Multi-step payment flow with dynamic API-driven forms, scheduling, frequency selection, date constraints, confirmation, and 2FA</li>
            <li><strong>Internal Transfers:</strong> Account-to-account transfers with currency matching and eligibility logic</li>
            <li><strong>Beneficiary Management:</strong> Add, confirm, delete with 2FA integration</li>
            <li><strong>Shared Form Infrastructure:</strong> 5 composable modules handling dynamic field rendering, validation, country-specific rules, and payload transformation — reused across all flows</li>
          </ul>
          <p><strong>Numbers:</strong> 474+ tests, 10+ merged MRs, 5 peer code reviews conducted, all flows verified against production-grade APIs.</p>
        </>
      ),
    },
    {
      title: "Tech Stack",
      content: (
        <>
          <ul>
            <li><strong>Core:</strong> React 19, TypeScript, Vite, Turborepo, Bun</li>
            <li><strong>UI:</strong> Mantine v8, CSS Modules, Material Symbols icons</li>
            <li><strong>Data:</strong> TanStack Query, Zod v4 schemas, JSON:API</li>
            <li><strong>Testing:</strong> Vitest, React Testing Library, Mock Service Worker</li>
            <li><strong>Infrastructure:</strong> GitLab CI/CD, SonarQube, Conventional Commits</li>
            <li><strong>i18n:</strong> react-i18next (English, Arabic RTL, French)</li>
          </ul>
        </>
      ),
    },
    {
      title: "Measurable Impact",
      content: (
        <>
          <ul>
            <li><strong>20 days</strong> to deliver complete payments module (5 user flows end-to-end)</li>
            <li><strong>474+ tests</strong> across all payment widgets with comprehensive coverage</li>
            <li><strong>7 engineers</strong> onboarded to patterns established during dashboard feature</li>
            <li><strong>10+ MRs</strong> raised, reviewed, and merged</li>
            <li><strong>5 teammate code reviews</strong> catching real architectural issues</li>
            <li><strong>12+ hours saved per epic</strong> through AI-augmented development methodology</li>
            <li><strong>75% → 92%</strong> sprint goal achievement as Scrum Master</li>
            <li><strong>7 engineers</strong> onboarded to patterns established during dashboard feature</li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <CaseStudyLayout
      title="CX Banking Platform Revamp"
      subtitle="Led migration of 904-file legacy app to modern monorepo; delivered payments module (5 flows, 474+ tests) in 20 days"
      techStack={["React 19", "TypeScript", "Vite", "Mantine", "Zod", "TanStack Query", "Turborepo", "Bun", "Vitest"]}
      impactStatements={[
        "904-file legacy codebase migrated to modern Turborepo monorepo",
        "5 payment flows delivered in 20 working days",
        "474+ tests with comprehensive widget coverage",
        "Established all architectural patterns for team of 7",
        "Sprint goal achievement improved from 75% to 92%",
      ]}
      sections={sections}
      nextProject={{
        title: "AI Agent Training System",
        slug: "ai-agent-training",
      }}
    />
  );
}
