import { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";
import TradeViewArchitectureDiagram from "@/components/TradeViewArchitectureDiagram";

export const metadata: Metadata = {
  title: "TradeView Lite - Meenakshi Ojha",
  description: "A solo stock watchlist dashboard built to work through the newer Next.js 16 App Router/caching model, Apollo Client v4, and TanStack Table v9 against a real GraphQL BFF and live market-data API.",
  keywords: "nextjs 16, graphql, apollo server, apollo client, tanstack table, zustand, visx, stock dashboard",
  openGraph: {
    title: "TradeView Lite - Stock Watchlist Dashboard",
    description: "A real, public GraphQL BFF + Next.js 16 project exploring the current state of the GraphQL/Next.js ecosystem.",
    type: "article",
    url: "https://meenakshiojha.com/projects/tradeview-lite",
  },
};

const linkStyle = { color: "#4F46E5", fontWeight: 600 };

export default function TradeViewLitePage() {
  const sections = [
    {
      title: "Overview",
      content: (
        <>
          <p>
            A stock watchlist dashboard built solo, outside of work, to get hands-on with what&apos;s actually changed in
            the newer major versions of the GraphQL/Next.js ecosystem, Next.js 16&apos;s App Router and caching model,
            Apollo Client v4&apos;s split packages, and TanStack Table v9&apos;s rewritten core API, rather than another
            generic CRUD tutorial. It stays close to a real problem space (a financial dashboard backed by a live
            market-data API) instead of toy data.
          </p>
          <p>
            Unlike the case studies above, this one is a real, public repository:{" "}
            <a href="https://github.com/meenakshi-ojha/tradeview-lite" target="_blank" rel="noopener noreferrer" style={linkStyle}>
              github.com/meenakshi-ojha/tradeview-lite
            </a>
            . Full architecture reasoning, including the cross-review rounds, lives in{" "}
            <a href="https://github.com/meenakshi-ojha/tradeview-lite/blob/main/docs/architecture.md" target="_blank" rel="noopener noreferrer" style={linkStyle}>
              docs/architecture.md
            </a>
            . It is not deployed, it lives as source and CI only, so there&apos;s no live demo link here on purpose.
          </p>
        </>
      ),
    },
    {
      title: "System Map",
      content: (
        <>
          <p>
            Grouped by architectural layer, left to right within each layer are the main pieces TradeView Lite
            actually uses for that layer, pulled directly from <code>docs/architecture.md</code>, not a generic
            diagram.
          </p>
          <TradeViewArchitectureDiagram />
        </>
      ),
    },
    {
      title: "Architecture",
      content: (
        <>
          <p>
            <strong>Frontend:</strong> Next.js 16 (App Router) + TypeScript + Tailwind + shadcn/ui (Radix primitives).
            Three real routes, Dashboard, Markets, and Settings, sharing one sidebar shell, not a single page with
            conditional panels.
          </p>
          <p>
            <strong>Data layer:</strong> A self-hosted GraphQL BFF (Apollo Server via <code>@as-integrations/next</code>)
            mounted as an App Router Route Handler in the same deployment as the frontend, wrapping Financial
            Modeling Prep&apos;s REST API.
          </p>
          <p>
            <strong>State:</strong> Zustand with the <code>persist</code> middleware for global state (watchlist,
            selected symbol, data mode); Apollo Client&apos;s own <code>useQuery</code> + <code>pollInterval</code> for
            server state; direct Zod validation for the single-field add-ticker form.
          </p>
          <p>
            <strong>Watchlist &amp; charts:</strong> TanStack Table v9 + TanStack Virtual for a virtualized, sortable
            grid; visx + D3 scales for line and candlestick price history views.
          </p>
        </>
      ),
    },
    {
      title: "Key Decisions",
      content: (
        <>
          <p>
            <strong>GraphQL BFF in the same deployment, not a separate function:</strong> this is what actually lets
            Next&apos;s <code>fetch</code> Data Cache apply to the calls the BFF makes to Financial Modeling Prep. A
            separate serverless function for the BFF would have silently defeated the caching strategy.
          </p>
          <p>
            <strong>One API call per symbol in Real mode, client polling disabled entirely:</strong> FMP&apos;s free tier
            has no batch-quote endpoint, verified directly against the live API rather than assumed from docs, so
            continuous polling would burn the 250-call daily quota fast. Real mode fetches once per toggle or
            watchlist change instead.
          </p>
          <p>
            <strong>Mock mode as the default everywhere:</strong> a deterministic pseudo-random walk with no network
            calls, so local development and demos can never accidentally burn the real quota.
          </p>
          <p>
            <strong>One mechanism for global state and persistence:</strong> Zustand&apos;s <code>persist</code> middleware
            syncs the watchlist, selected symbol, and data mode to <code>localStorage</code> automatically, instead of
            wiring up a separate persistence layer alongside the store.
          </p>
          <p>
            <strong>Candlestick charts and the indices strip stay mock-only in both modes:</strong> FMP&apos;s free tier
            doesn&apos;t serve the plain index tickers this app uses, and its <code>historical-price-eod/light</code>{" "}
            endpoint has no OHLC data to build real candles from, again confirmed against the live API, not assumed.
          </p>
        </>
      ),
    },
    {
      title: "Testing & CI",
      content: (
        <ul>
          <li><strong>Unit</strong> (<code>bun test</code>): ticker validation, the Zustand store&apos;s actions, and both data sources, with <code>fetch</code> mocked for the real one.</li>
          <li><strong>E2E</strong> (Playwright): dashboard, watchlist, Markets, and Settings flows, Mock mode only, since Real mode needs a live FMP key that&apos;s never committed.</li>
          <li><strong>Accessibility:</strong> an axe-core audit runs as part of the e2e suite against every route, on every CI run.</li>
          <li><strong>CI</strong> (GitHub Actions): lint, then unit tests, then build, then e2e + accessibility audit, then <code>bun audit</code> for dependency vulnerabilities, one sequential job on every push and PR to <code>main</code>.</li>
        </ul>
      ),
    },
    {
      title: "What I'd Flag in an Interview",
      content: (
        <ul>
          <li>Framework docs go stale fast: version-drift issues in Next.js 16&apos;s caching model, Apollo Client v4&apos;s split packages, and TanStack Table v9&apos;s API were only caught by reading the installed packages&apos; own docs, not by trusting prior assumptions about how those libraries work.</li>
          <li><code>fetch(url, {"{ next: { revalidate } }"})</code> alone does nothing in recent Next.js without <code>cache: &quot;force-cache&quot;</code> alongside it, caching is opt-in, and that&apos;s easy to get wrong silently.</li>
          <li>A free tier&apos;s real constraints (no batch endpoint, no OHLC data on this particular endpoint) are worth confirming against the live API directly before designing rate-limit math around them.</li>
          <li>A deliberate three-round architecture review, initial design cross-checked by an independent model, concerns resolved with concrete fixes, then re-reviewed, caught the cache mechanism and rate-limit math issues before any implementation code was written.</li>
        </ul>
      ),
    },
    {
      title: "Known Scope Cuts",
      content: (
        <p>
          No auth or user accounts, no database (Zustand + localStorage only), no i18n, and no SSR/RSC data-fetching
          pattern (GraphQL is fetched entirely client-side via Apollo, even though the app runs on Next.js). These are
          deliberate scope cuts, the point of this project was depth on GraphQL/Next.js/state-management trade-offs
          and a real test/CI pipeline, not breadth.
        </p>
      ),
    },
  ];

  return (
    <CaseStudyLayout
      title="TradeView Lite"
      subtitle="A solo, public project exploring the current state of the GraphQL/Next.js ecosystem through a real stock watchlist dashboard"
      techStack={["Next.js 16", "TypeScript", "Tailwind", "shadcn/ui", "GraphQL", "Apollo Server", "Apollo Client", "Zustand", "TanStack Table", "visx", "Zod", "Playwright"]}
      impactStatements={[
        "Public, runnable repository, not a resume claim: a real GraphQL BFF + Next.js 16 app anyone can clone and run",
        "Caught real version-drift issues (Next.js 16 caching model, Apollo Client v4 split packages, TanStack Table v9's rewritten API) by reading installed package docs directly",
        "CI runs lint, unit tests, build, e2e, and an axe-core accessibility audit on every push and PR",
        "Verified FMP free-tier constraints (no batch endpoint, no OHLC data) against the live API before designing around them, instead of assuming",
      ]}
      sections={sections}
    />
  );
}
