import { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";

export const metadata: Metadata = {
  title: "AI Agent Training System - Meenakshi Ojha",
  description: "Built a persistent knowledge layer enabling AI coding assistants to operate independently on complex codebases. Pioneered cross-tool knowledge transfer.",
};

export default function AiAgentTrainingPage() {
  const sections = [
    {
      title: "Overview",
      content: (
        <>
          <p>
            When an org policy change forced a switch from one AI coding assistant to another mid-project, I faced losing weeks of accumulated context. Instead of starting over, I pioneered the &quot;Ouroboros&quot; method — having the existing AI generate its own training manual for the new tool. Within days, the new assistant operated independently on a complex banking monorepo (15+ packages, widget engine architecture, 3 languages).
          </p>
        </>
      ),
    },
    {
      title: "Problem",
      content: (
        <>
          <ul>
            <li><strong>Context Loss:</strong> Switching AI tools meant losing weeks of learned patterns, conventions, and codebase knowledge</li>
            <li><strong>Repetitive Onboarding:</strong> Every new session started from zero — re-explaining the monorepo structure, widget patterns, API conventions, git workflow</li>
            <li><strong>Inconsistent Output:</strong> Without persistent rules, the AI made the same mistakes repeatedly (wrong imports, invented mock data, hardcoded locales)</li>
            <li><strong>No Institutional Memory:</strong> Corrections given in one session were forgotten by the next</li>
          </ul>
        </>
      ),
    },
    {
      title: "Solution — The Persistent Knowledge Layer",
      content: (
        <>
          <p>Built a structured file system that any AI reads on startup:</p>
          <ul>
            <li><strong>Steering files:</strong> Hard rules the AI must follow (coding standards, code review checklist, git workflow, project management process)</li>
            <li><strong>Context files:</strong> Living state (project structure, team info, gotchas from real mistakes, session history, active epic details)</li>
            <li><strong>Gotchas file:</strong> Every mistake the AI makes gets recorded with the fix — the most valuable file in the system</li>
            <li><strong>Session history:</strong> Append-only log enabling the AI to pick up exactly where the last session left off</li>
          </ul>
        </>
      ),
    },
    {
      title: "The Ouroboros Method",
      content: (
        <>
          <ul>
            <li>Had the existing AI (which had weeks of context) generate the initial training files for the new AI</li>
            <li>The AI wrote its own rules, patterns, and conventions into structured markdown files</li>
            <li>Reviewed and refined over 3 days of corrections — each correction became a new rule</li>
            <li>By week 2, the new AI handled 80% of implementation without corrections</li>
            <li>By week 3, operating in &quot;YOLO mode&quot; — state requirement, AI implements, test, commit</li>
          </ul>
        </>
      ),
    },
    {
      title: "Measurable Impact",
      content: (
        <>
          <ul>
            <li><strong>Zero productivity loss</strong> during tool migration (delivered payments epic immediately after switch)</li>
            <li><strong>80% autonomous implementation</strong> by week 2 — AI handles coding without corrections</li>
            <li><strong>12+ hours saved per epic</strong> by eliminating repeated mistakes (tracked via retrospective)</li>
            <li><strong>5 enforced rules</strong> added from real failures, preventing entire categories of bugs</li>
            <li><strong>Replicable framework</strong> documented for team adoption across projects</li>
            <li><strong>474+ tests delivered in 20 days</strong> — the payments epic was the first project using this system at full capacity</li>
          </ul>
        </>
      ),
    },
    {
      title: "Key Learnings",
      content: (
        <>
          <p><strong>Corrections beat instructions:</strong> Rules written after a real mistake stick better than upfront documentation.</p>
          <p><strong>Gotchas beat standards:</strong> What NOT to do (from real failures) is more valuable than what TO do.</p>
          <p><strong>Session continuity is everything:</strong> Without persistent history, every conversation starts from zero. With it, the AI picks up exactly where you left off.</p>
          <p><strong>The AI should review its own work:</strong> Self-review against a checklist before pushing catches issues before human review.</p>
        </>
      ),
    },
  ];

  return (
    <CaseStudyLayout
      title="AI Agent Training System (Ouroboros Method)"
      subtitle="Built a persistent knowledge layer enabling AI coding assistants to operate independently on complex codebases"
      techStack={["Prompt Engineering", "Knowledge Systems", "Markdown", "TypeScript", "Monorepo Architecture"]}
      impactStatements={[
        "Zero productivity loss during AI tool migration",
        "80% autonomous implementation by week 2",
        "12+ hours saved per epic through mistake prevention",
        "Replicable framework documented for team adoption",
        "Enabled 474+ tests delivered in 20 days on first full project",
      ]}
      sections={sections}
      nextProject={{
        title: "Dynamic UI Widget Engine Framework",
        slug: "widget-engine",
      }}
    />
  );
}
