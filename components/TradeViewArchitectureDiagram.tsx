type DiagramNode = {
  x: number;
  y: number;
  w: number;
  h: number;
  title: string;
  sub: string;
};

type Row = {
  label: string;
  color: string;
  bg: string;
  nodes: DiagramNode[];
};

const ROWS: Row[] = [
  {
    label: "UI",
    color: "#7c3aed",
    bg: "#f3e8ff",
    nodes: [
      { x: 58, y: 52, w: 140, h: 50, title: "Watchlist", sub: "TanStack Table v9 + Virtual" },
      { x: 214, y: 52, w: 140, h: 50, title: "Price Chart", sub: "visx + D3 scales" },
      { x: 370, y: 52, w: 120, h: 50, title: "App Shell", sub: "3 routes, shadcn/ui" },
      { x: 506, y: 52, w: 126, h: 50, title: "Markets / Settings", sub: "Sparklines, detail modal" },
    ],
  },
  {
    label: "State",
    color: "#0d9488",
    bg: "#ccfbf1",
    nodes: [
      { x: 58, y: 162, w: 140, h: 50, title: "Local state", sub: "useState / useReducer" },
      { x: 214, y: 162, w: 140, h: 50, title: "Global + persist", sub: "Zustand + localStorage" },
      { x: 370, y: 162, w: 140, h: 50, title: "Server state", sub: "Apollo useQuery + poll" },
      { x: 526, y: 162, w: 106, h: 50, title: "Form validation", sub: "Direct Zod parse" },
    ],
  },
  {
    label: "Services",
    color: "#1976d2",
    bg: "#dbeafe",
    nodes: [
      { x: 58, y: 280, w: 130, h: 50, title: "GraphQL BFF", sub: "Apollo Server, Route Handler" },
      { x: 204, y: 280, w: 120, h: 50, title: "Mock source", sub: "Pseudo-random walk" },
      { x: 340, y: 280, w: 130, h: 50, title: "Real source", sub: "FMP REST wrapper" },
      { x: 486, y: 280, w: 146, h: 50, title: "Error mapping", sub: "402 / 429 / timeout" },
    ],
  },
  {
    label: "Routing",
    color: "#d97706",
    bg: "#fef3c7",
    nodes: [
      { x: 58, y: 400, w: 150, h: 50, title: "App Router", sub: "Dashboard, Markets, Settings" },
      { x: 224, y: 400, w: 150, h: 50, title: "Data Cache", sub: "force-cache + revalidate" },
      { x: 390, y: 400, w: 130, h: 50, title: "Mock mode", sub: "Default, polls every 30s" },
      { x: 536, y: 400, w: 100, h: 50, title: "Real mode", sub: "No polling, 1 call/change" },
    ],
  },
  {
    label: "Infra",
    color: "#e11d48",
    bg: "#ffe4e6",
    nodes: [
      { x: 58, y: 520, w: 130, h: 50, title: "CI pipeline", sub: "Lint → test → build → e2e" },
      { x: 204, y: 520, w: 130, h: 50, title: "Runtime", sub: "Bun + Next.js 16" },
      { x: 350, y: 520, w: 130, h: 50, title: "Security audit", sub: "bun audit, every run" },
      { x: 496, y: 520, w: 136, h: 50, title: "Not deployed", sub: "Source + CI only" },
    ],
  },
  {
    label: "Backend",
    color: "#475569",
    bg: "#f1f5f9",
    nodes: [
      { x: 58, y: 640, w: 130, h: 50, title: "Financial Modeling Prep", sub: "Free-tier REST API" },
      { x: 204, y: 640, w: 130, h: 50, title: "Rate limit", sub: "250 calls/day, no batch" },
      { x: 350, y: 640, w: 130, h: 50, title: "Quote endpoint", sub: "1 call per symbol" },
      { x: 496, y: 640, w: 136, h: 50, title: "Timeout", sub: "AbortSignal, 8s" },
    ],
  },
  {
    label: "",
    color: "#16a34a",
    bg: "#dcfce7",
    nodes: [
      { x: 58, y: 758, w: 130, h: 44, title: "Testing", sub: "bun test + Playwright" },
      { x: 204, y: 758, w: 130, h: 44, title: "Accessibility", sub: "axe-core, every CI run" },
      { x: 350, y: 758, w: 130, h: 44, title: "Scope cuts", sub: "No auth, DB, i18n, SSR fetch" },
      { x: 496, y: 758, w: 136, h: 44, title: "Review process", sub: "Three-round, cross-checked" },
    ],
  },
];

const SIDE_LABELS = [
  { text: "UI", y: 95 },
  { text: "State", y: 215 },
  { text: "Services", y: 330 },
  { text: "Routing", y: 455 },
  { text: "Infra", y: 570 },
  { text: "Backend", y: 695 },
];

const DIVIDER_YS = [145, 265, 385, 505, 625, 745];
const ARROW_PAIRS = [
  [102, 158],
  [212, 276],
  [330, 396],
  [450, 516],
  [570, 636],
  [690, 754],
];

const BORDER = "#e2e8f0";
const ARROW_COLOR = "#94a3b8";
const LABEL_COLOR = "#64748b";

export default function TradeViewArchitectureDiagram() {
  return (
    <svg
      width="100%"
      viewBox="0 0 680 827.88"
      xmlns="http://www.w3.org/2000/svg"
      fontFamily="inherit"
      style={{ maxWidth: 680, display: "block", margin: "0 auto" }}
    >
      <defs>
        <marker id="tv-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M2 1L8 5L2 9" fill="none" stroke={ARROW_COLOR} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
        </marker>
      </defs>

      {SIDE_LABELS.map((l) => (
        <text
          key={l.text}
          x={30}
          y={l.y}
          fontSize={11}
          textAnchor="middle"
          transform={`rotate(-90,30,${l.y})`}
          fill={LABEL_COLOR}
        >
          {l.text}
        </text>
      ))}

      {DIVIDER_YS.map((y) => (
        <line key={y} x1={52} y1={y} x2={640} y2={y} stroke={BORDER} strokeWidth={0.5} strokeDasharray="4 4" />
      ))}

      {ROWS.map((row) =>
        row.nodes.map((n) => (
          <g key={`${row.label}-${n.title}`}>
            <rect x={n.x} y={n.y} width={n.w} height={n.h} rx={8} fill={row.bg} stroke={row.color} strokeWidth={0.75} />
            <text
              x={n.x + n.w / 2}
              y={n.y + (n.h === 44 ? 20 : 22)}
              textAnchor="middle"
              dominantBaseline="central"
              fontSize={10.5}
              fontWeight={700}
              fill="#1e293b"
            >
              {n.title}
            </text>
            <text
              x={n.x + n.w / 2}
              y={n.y + (n.h === 44 ? 35 : 38)}
              textAnchor="middle"
              dominantBaseline="central"
              fontSize={8.5}
              fill="#64748b"
            >
              {n.sub}
            </text>
          </g>
        ))
      )}

      {ARROW_PAIRS.map(([y1, y2]) => (
        <line key={y1} x1={310} y1={y1} x2={310} y2={y2} stroke={ARROW_COLOR} strokeWidth={1.25} markerEnd="url(#tv-arrow)" />
      ))}

      <text x={58} y={815} fontSize={10} fill={LABEL_COLOR}>
        Six architectural layers, plus cross-cutting concerns (bottom row, unlabeled)
      </text>
    </svg>
  );
}
