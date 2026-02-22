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
    description: "Built a TypeScript-based widget engine enabling code reuse and independent team deployments with declarative UI composition.",
    impact: "Independent deployments | Accelerated development",
    tech: ["TypeScript", "Vite", "Component Architecture"],
    status: "View Case Study",
    slug: "widget-engine",
  },
  {
    id: "design-system",
    title: "Enterprise Design System & Component Library",
    description: "Architected scalable component library with comprehensive documentation, enabling faster development and design consistency.",
    impact: "50+ components | Improved development velocity",
    tech: ["React", "Storybook", "TypeScript"],
    status: "View Case Study",
    slug: "design-system",
  },
  {
    id: "microfrontend",
    title: "Microfrontend Banking Platform",
    description: "Architected microfrontend platform enabling 10 independent teams to deploy autonomously, reducing deployment time from 40 to 12 minutes.",
    impact: "10 independent teams | 40→12 min deployments",
    tech: ["React", "Redux Toolkit", "Yarn Workspaces"],
    status: "View Case Study",
    slug: "microfrontend-platform",
  },
  {
    id: "ssr-platform",
    title: "Server-Side Rendered Community Platform",
    description: "Implemented server-side rendering improving Time-to-Interactive and SEO metrics, with 90+ Lighthouse performance score.",
    impact: "55% faster load | 90+ Lighthouse score",
    tech: ["Next.js", "Node.js", "React"],
    status: "View Case Study",
    slug: "ssr-platform",
  },
];

export default function ProjectsPage() {
  return (
    <Container maxWidth="md" sx={{ py: { xs: 3, sm: 6 }, px: { xs: 1, sm: 2, md: 3 } }}>
      <Box sx={{ mb: 6 }}>
        <Typography variant="h3" sx={{ fontWeight: 700, mb: 2, fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" } }}>
          Featured Projects
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ fontSize: { xs: "0.95rem", sm: "1.05rem" } }}>
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
            <CardContent sx={{ p: { xs: 2, sm: 3, md: 3.5 } }}>
              <Box sx={{ mb: 2, display: "flex", flexDirection: { xs: "column", sm: "row" }, justifyContent: "space-between", alignItems: "flex-start", gap: 1 }}>
                <Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 0.5, fontSize: { xs: "1.15rem", sm: "1.3rem" } }}>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="primary" sx={{ fontWeight: 600, fontSize: { xs: "0.85rem", sm: "0.95rem" } }}>
                    {project.impact}
                  </Typography>
                </Box>
                <Chip label={project.status} size="small" variant="outlined" sx={{ whiteSpace: "nowrap", fontSize: { xs: "0.7rem", sm: "0.85rem" } }} />
              </Box>

              <Typography variant="body2" sx={{ mb: 2.5, lineHeight: 1.7, fontSize: { xs: "0.9rem", sm: "0.95rem" } }}>
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
                      fontSize: { xs: "0.7rem", sm: "0.8rem" },
                    }}
                  />
                ))}
              </Box>

              <Button 
                variant="outlined" 
                href={`/projects/${project.slug}`}
                sx={{ fontSize: { xs: "0.85rem", sm: "0.95rem" } }}
              >
                Read Case Study →
              </Button>
            </CardContent>
          </Card>
        ))}
      </Stack>

      <Box sx={{ mt: 8, p: { xs: 2, sm: 3 }, backgroundColor: "background.paper", borderRadius: 1, textAlign: "center" }}>
        <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: "0.85rem", sm: "0.95rem" } }}>
          Deep dives into these projects showcase my experience with scalable architecture, leadership, and technical excellence.
          Explore the complete details for each project above.
        </Typography>
      </Box>
    </Container>
  );
}
