"use client";

import {
  Container,
  Typography,
  Box,
  Stack,
  Chip,
  Divider,
  Button,
} from "@mui/material";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface Section {
  title: string;
  content: React.ReactNode;
}

interface CaseStudyLayoutProps {
  title: string;
  subtitle: string;
  techStack: string[];
  impactStatements: string[];
  sections: Section[];
  nextProject?: {
    title: string;
    slug: string;
  };
}

export default function CaseStudyLayout({
  title,
  subtitle,
  techStack,
  impactStatements,
  sections,
  nextProject,
}: CaseStudyLayoutProps) {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      {/* Back Link */}
      <Box sx={{ mb: 4 }}>
        <Button
          startIcon={<ArrowBackIcon />}
          href="/projects"
          component={Link}
          sx={{ textTransform: "none", fontWeight: 500 }}
        >
          Back to Projects
        </Button>
      </Box>

      {/* Header */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h2" sx={{ fontWeight: 700, mb: 1 }}>
          {title}
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 400, mb: 3 }}>
          {subtitle}
        </Typography>

        {/* Impact Statements */}
        <Box sx={{ mb: 3 }}>
          {impactStatements.map((impact, idx) => (
            <Box key={idx} sx={{ display: "flex", gap: 1, mb: 1 }}>
              <Typography variant="body2" sx={{ color: "primary.main", fontWeight: 600 }}>
                ✓
              </Typography>
              <Typography variant="body2">{impact}</Typography>
            </Box>
          ))}
        </Box>

        {/* Tech Stack */}
        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
          {techStack.map((tech) => (
            <Chip
              key={tech}
              label={tech}
              size="small"
              sx={{
                backgroundColor: "rgba(79, 70, 229, 0.1)",
                color: "primary.main",
                fontWeight: 600,
              }}
            />
          ))}
        </Box>
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* Content Sections */}
      <Stack spacing={6}>
        {sections.map((section, idx) => (
          <Box key={idx}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                mb: 2,
                color: "primary.main",
              }}
            >
              {section.title}
            </Typography>
            <Box
              sx={{
                lineHeight: 1.8,
                "& ul": {
                  pl: 2,
                  mb: 2,
                },
                "& li": {
                  mb: 1,
                },
                "& p": {
                  mb: 1.5,
                },
                "& code": {
                  backgroundColor: "rgba(79, 70, 229, 0.1)",
                  color: "primary.main",
                  padding: "2px 6px",
                  borderRadius: "4px",
                  fontFamily: "monospace",
                  fontSize: "0.9em",
                },
              }}
            >
              {section.content}
            </Box>
          </Box>
        ))}
      </Stack>

      <Divider sx={{ my: 6 }} />

      {/* Navigation */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: 6,
        }}
      >
        <Button
          startIcon={<ArrowBackIcon />}
          href="/projects"
          component={Link}
          sx={{ textTransform: "none", fontWeight: 500 }}
        >
          Back to Projects
        </Button>
        {nextProject && (
          <Button
            endIcon={<ArrowForwardIcon />}
            href={`/projects/${nextProject.slug}`}
            component={Link}
            sx={{ textTransform: "none", fontWeight: 500 }}
          >
            Next: {nextProject.title}
          </Button>
        )}
      </Box>
    </Container>
  );
}
