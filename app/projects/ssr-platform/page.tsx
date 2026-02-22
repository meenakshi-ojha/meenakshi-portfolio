import { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";

export const metadata: Metadata = {
  title: "Server-Side Rendered Community Platform - Meenakshi Ojha",
  description: "Case study: Implemented SSR platform achieving 55% improvement in Time-to-Interactive, 90+ Lighthouse score, and 40% increase in mobile session duration.",
  keywords: "server-side rendering, performance optimization, node.js, express, razzle, seo",
  openGraph: {
    title: "Server-Side Rendered Community Platform",
    description: "Learn how I enhanced SSR performance achieving 55% faster load times and improved SEO metrics for a community platform.",
    type: "article",
    url: "https://meenakshi-portfolio-five.vercel.app/projects/ssr-platform",
  },
};

export default function SSRPlatformPage() {
  const sections = [
    {
      title: "Overview",
      content: (
        <>
          <p>
            Implemented a server-side rendering (SSR) platform that dramatically improved initial page load performance and SEO metrics for a community engagement application. The system processes requests server-side, reducing time-to-interactive by 55% and achieving 90+ Lighthouse scores.
          </p>
          <p>
            This platform enabled search engines to properly index community content, improved user experience on slow networks, and reduced JavaScript bundle sizes sent to clients.
          </p>
        </>
      ),
    },
    {
      title: "Problem",
      content: (
        <>
          <p>
            Client-side rendering created significant limitations:
          </p>
          <ul>
            <li><strong>Poor SEO:</strong> Search engines couldn't index community content; social media sharing showed blank previews</li>
            <li><strong>Slow Initial Load:</strong> Time-to-Interactive was 4.2 seconds on 4G networks (vs. industry standard of ~2 seconds)</li>
            <li><strong>JavaScript Bundle Bloat:</strong> Client received 450KB of JavaScript; slow devices (3G networks) waited 8+ seconds before interactive</li>
            <li><strong>SEO Metrics:</strong> Lighthouse performance score was 42/100; First Contentful Paint (FCP) was 3.0s</li>
            <li><strong>Mobile User Experience:</strong> High bounce rate on mobile due to slow initial render</li>
            <li><strong>User Engagement:</strong> Community content wasn't shared socially due to poor social preview metadata</li>
          </ul>
        </>
      ),
    },
    {
      title: "My Role",
      content: (
        <>
          <p>
            <strong>Architecture & Implementation:</strong> Designed and built the SSR infrastructure from ground up.
          </p>
          <ul>
            <li>Selected Razzle framework for simplified universal React setup (vs. custom Next.js or Express setup)</li>
            <li>Architected Express middleware pipeline for authentication, proxying, and session management</li>
            <li>Implemented Redux state hydration pattern: serialize server state and hydrate client with zero data duplication</li>
            <li>Built OAuth/OpenID integration for secure session management</li>
            <li>Designed theme system allowing runtime theme switching without full page reload</li>
          </ul>
          <p>
            <strong>Performance Optimization:</strong> Achieved aggressive performance targets through multiple optimization strategies.
          </p>
          <ul>
            <li>Implemented route-based lazy loading using React.lazy() + Suspense for code splitting</li>
            <li>Configured Gzip + Brotli compression reducing JavaScript by 65%</li>
            <li>Built critical CSS extraction for above-the-fold styling, deferring non-critical CSS</li>
            <li>Set up image optimization pipeline with WebP format support</li>
            <li>Mentored team on server-side rendering performance best practices</li>
          </ul>
          <p>
            <strong>Quality & Security:</strong> Ensured production reliability and security posture.
          </p>
          <ul>
            <li>Implemented Helmet.js for HSTS, CSP, and X-Frame-Options security headers</li>
            <li>Built comprehensive error handling for server-side failures with graceful degradation</li>
            <li>Set up OpenTelemetry tracing for request monitoring and debugging</li>
            <li>Established SonarQube gates preventing code quality regressions</li>
          </ul>
        </>
      ),
    },
    {
      title: "Architecture Decisions",
      content: (
        <>
          <p>
            <strong>Razzle Framework:</strong> Chose Razzle over custom Express + Webpack setup for faster iteration and built-in optimizations. Simplified deployment and reduced maintenance burden.
          </p>
          <p>
            <strong>Redux State Hydration:</strong> Server renders complete Redux state tree. Client hydrates with identical state, preventing flash of unstyled content (FOUC) or duplicate API calls.
          </p>
          <p>
            <strong>Route-Based Code Splitting:</strong> Each route lazy-loads its code using React.lazy() + Suspense. Critical routes (home, search) loaded immediately; secondary routes (profile, settings) loaded on-demand.
          </p>
          <p>
            <strong>Middleware Pipeline Architecture:</strong> Express middleware handles authentication → proxying → session → rendering in clear chain. Easy to add new middleware without affecting existing flow.
          </p>
          <p>
            <strong>Critical CSS Extraction:</strong> Automated tooling extracts CSS required for above-the-fold content, inlines in HTML, and defers remaining CSS. Reduced first paint time by 45%.
          </p>
          <p>
            <strong>OAuth Integration:</strong> Server-side OAuth/OIDC flow maintained secure tokens in HTTP-only cookies, preventing token exposure to XSS attacks.
          </p>
        </>
      ),
    },
    {
      title: "Tech Stack",
      content: (
        <>
          <ul>
            <li><strong>Framework:</strong> Node.js, Express.js, Razzle</li>
            <li><strong>Frontend:</strong> React, Redux, Redux-Saga</li>
            <li><strong>State Management:</strong> Redux with server-side hydration</li>
            <li><strong>API Integration:</strong> GraphQL queries, REST endpoints</li>
            <li><strong>Styling:</strong> CSS Modules with critical CSS extraction</li>
            <li><strong>Testing:</strong> Jest, React Testing Library, Cypress for E2E</li>
            <li><strong>Performance:</strong> Gzip + Brotli compression, image optimization</li>
            <li><strong>Security:</strong> Helmet.js, HTTP-only cookies, OAuth/OIDC</li>
            <li><strong>Observability:</strong> OpenTelemetry distributed tracing, SonarQube</li>
          </ul>
        </>
      ),
    },
    {
      title: "Measurable Impact",
      content: (
        <>
          <ul>
            <li><strong>Significant Performance Improvement:</strong> Time-to-Interactive improved from slow baseline on 4G networks</li>
            <li><strong>Excellent Performance Metrics:</strong> Lighthouse performance score improved from low baseline (42/100) to consistently high ranges (90+); First Contentful Paint significantly reduced</li>
            <li><strong>Improved SEO & Discoverability:</strong> Server-side rendering enabled proper search engine indexing and social sharing with correct metadata</li>
            <li><strong>Optimized Client Payload:</strong> Code splitting and compression significantly reduced client-side JavaScript bundle</li>
            <li><strong>Better Mobile Experience:</strong> Faster initial load times improved perceived performance and user experience on slower networks</li>
            <li><strong>Production Reliability:</strong> Comprehensive error handling and graceful degradation patterns ensured consistent availability</li>
            <li><strong>Developer Velocity:</strong> Hot Module Replacement enabled rapid iteration during local development</li>
          </ul>
        </>
      ),
    },
    {
      title: "Key Learnings",
      content: (
        <>
          <p>
            <strong>SSR Transforms User Experience:</strong> Performance improvements had significant impact on user engagement and retention.
          </p>
          <p>
            <strong>State Hydration Complexity:</strong> Server and client state must be identical to prevent hydration mismatches. Rigorous testing of Redux state serialization prevented production issues.
          </p>
          <p>
            <strong>Security-First Architecture:</strong> OAuth integration at the server layer (HTTP-only cookies) was more secure than client-side token management, and middleware pattern made it reusable.
          </p>
          <p>
            <strong>Critical CSS Extraction Pays Dividends:</strong> Inlining above-the-fold CSS notably improved First Paint time. Careful measurement and optimization had measurable business impact.
          </p>
          <p>
            <strong>Monitoring Essential for SSR:</strong> Server-side rendering has more failure modes (network timeouts, database issues). OpenTelemetry tracing caught issues before they reached users.
          </p>
          <p>
            <strong>Middleware Pipeline Enables Flexibility:</strong> Clear separation between authentication, proxying, and rendering made it easy to add new middleware (caching, rate limiting) without refactoring.
          </p>
        </>
      ),
    },
  ];

  return (
    <CaseStudyLayout
      title="Server-Side Rendered Community Platform"
      subtitle="Enhanced SSR performance and internationalization for a global user community platform"
      techStack={["Node.js", "Express.js", "Razzle", "React", "Redux", "Redux-Saga", "GraphQL"]}
      impactStatements={[
        "55% improvement in Time-to-Interactive for 4G networks",
        "90+ Lighthouse performance score vs. 42 baseline",
        "65% reduction in client-side JavaScript through code splitting",
        "Improved SEO through server-side rendering and metadata",
        "Enhanced reliability with graceful error handling",
      ]}
      sections={sections}
    />
  );
}
