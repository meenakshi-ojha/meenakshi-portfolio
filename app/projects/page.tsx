import { Metadata } from "next";
import { Container, Typography, Box, Card, CardContent, Button, Stack, Chip } from "@mui/material";

export const metadata: Metadata = {
  title: "Projects - Meenakshi Ojha",
  description: "Featured projects and case studies showcasing frontend architecture, system design, and technical leadership. Explore work with React, TypeScript, Microfrontends, and Design Systems.",
  keywords: "projects, case studies, frontend architecture, react, typescript, microfrontends, design systems",
  openGraph: {
    title: "Projects - Meenakshi Ojha",
    description: "Featured projects including Widget Engine Framework, Design System, Microfrontend Platform, and SSR Platform.",
    type: "website",
    url: "https://meenakshi-portfolio-five.vercel.app/projects",
  },
};

const projects = [
  {
    id: "widget-engine",
    title: "Dynamic UI Widget Engine Framework",
    description: "Built a TypeScript-based widget engine enabling 40% code reuse and independent team deployments across 20+ engineers.",
    impact: "40% code reuse | Independent deployments",
    tech: ["TypeScript", "Vite", "Component Architecture"],
    status: "View Case Study",
    slug: "widget-engine",
  },
  {
    id: "design-system",
    title: "Enterprise Design System & Component Library",
    description: "Architected scalable component library with comprehensive documentation, reducing development time by 35%.",
    impact: "35% faster development | 50+ components",
    tech: ["React", "Storybook", "TypeScript"],
    status: "View Case Study",
    slug: "design-system",
  },
  {
    id: "microfrontend",
    title: "Microfrontend Banking Platform",
    description: "Designed enterprise microfrontend architecture managing 20k+ daily transactions across 20+ independent teams.",
    impact: "20+ independent teams | WCAG 2.1 AA compliance",
    tech: ["React", "Redux Toolkit", "Yarn Workspaces"],
    status: "View Case Study",
    slug: "microfrontend-platform",
  },
  {
    id: "ssr-platform",
    title: "Server-Side Rendered Community Platform",
    description: "Implemented server-side rendering platform improving initial load time by 55% and SEO metrics.",
    impact: "55% faster load | 90+ Lighthouse score",
    tech: ["Next.js", "Node.js", "React"],
    status: "View Case Study",
    slug: "ssr-platform",
  },
];

export default function ProjectsPage() {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Box sx={{ mb: 6 }}>
        <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
          Featured Projects
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Deep dives into major initiatives showcasing technical architecture, problem-solving, and impact.
        </Typography>
      </Box>

      <Stack spacing={3}>
        {projects.map((project) => (
          <Card
            key={project.id}
            sx={{
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: "0 20px 40px rgba(79, 70, 229, 0.15)",
              },
            }}
          >
            <CardContent sx={{ p: 3.5 }}>
              <Box sx={{ mb: 2, display: "flex", justifyContent: "space-between", alignItems: "start" }}>
                <Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 0.5 }}>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="primary" sx={{ fontWeight: 600 }}>
                    {project.impact}
                  </Typography>
                </Box>
                <Chip label={project.status} size="small" variant="outlined" sx={{ whiteSpace: "nowrap" }} />
              </Box>

              <Typography variant="body2" sx={{ mb: 2.5, lineHeight: 1.7 }}>
                {project.description}
              </Typography>

              <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 2.5 }}>
                {project.tech.map((tech) => (
                  <Chip
                    key={tech}
                    label={tech}
                    variant="filled"
                    size="small"
                    sx={{
                      backgroundColor: "rgba(79, 70, 229, 0.1)",
                      color: "primary.main",
                      fontWeight: 600,
                    }}
                  />
                ))}
              </Box>

              <Button 
                variant="outlined" 
                href={`/projects/${project.slug}`}
              >
                Read Case Study →
              </Button>
            </CardContent>
          </Card>
        ))}
      </Stack>

      <Box sx={{ mt: 8, p: 3, backgroundColor: "background.paper", borderRadius: 1, textAlign: "center" }}>
        <Typography variant="body2" color="text.secondary">
          Deep dives into these projects showcase my experience with scalable architecture, leadership, and technical excellence.
          Explore the complete details for each project above.
        </Typography>
      </Box>
    </Container>
  );
}
