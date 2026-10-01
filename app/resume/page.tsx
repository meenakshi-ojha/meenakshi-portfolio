"use client";

import { Container, Typography, Paper, Box, Divider } from "@mui/material";
import dynamic from "next/dynamic";
import { resumeData, splitBoldSegments } from "@/data/resume";

const ResumeDownloadButton = dynamic(
  () => import("@/components/ResumeDownloadButton"),
  { ssr: false }
);

const renderFormatted = (text: string) =>
  splitBoldSegments(text).map((seg, i) =>
    seg.bold ? (
      <Box key={i} component="span" sx={{ fontWeight: 700 }}>
        {seg.text}
      </Box>
    ) : (
      <span key={i}>{seg.text}</span>
    )
  );

const SKILL_LABELS: Record<string, string> = {
  frontend: "Frontend Technologies",
  testing: "Testing & Quality",
  buildTools: "Build & Architecture",
  tools: "Tools & Methodologies",
};

export default function ResumePage() {
  return (
    <Container maxWidth="md" sx={{ py: { xs: 3, sm: 6 }, px: { xs: 1, sm: 2, md: 3 } }}>
      <Paper elevation={0} sx={{ p: { xs: 2, sm: 3, md: 4 }, backgroundColor: "background.paper" }}>
        {/* Header */}
        <Box sx={{ mb: 3, textAlign: "center" }}>
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 0.5, fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" } }}>
            {resumeData.name}
          </Typography>
          <Typography variant="subtitle1" color="primary" sx={{ fontWeight: 600, mb: 1, fontSize: { xs: "0.95rem", sm: "1.15rem" } }}>
            {resumeData.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: "0.75rem", sm: "0.875rem" }, overflowWrap: "break-word", wordBreak: "break-word" }}>
            Email: {resumeData.email} | Phone: {resumeData.phone} | LinkedIn: {resumeData.linkedin} | GitHub: {resumeData.github} | Portfolio: {resumeData.portfolio}
          </Typography>
        </Box>

        {/* Download Buttons */}
        <Box sx={{ mb: 1, display: "flex", justifyContent: "center" }}>
          <ResumeDownloadButton />
        </Box>
        <Typography variant="caption" color="text.secondary" sx={{ display: "block", textAlign: "center", mb: 3 }}>
          Two formats available: a single-column version (matches this page) and a two-column visual version.
        </Typography>

        <Divider sx={{ my: 2.5 }} />

        {/* Professional Summary */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5, textTransform: "uppercase", fontSize: "0.95rem" }}>
            Professional Summary
          </Typography>
          <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
            {renderFormatted(resumeData.summary)}
          </Typography>
        </Box>

        {/* Core Skills */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5, textTransform: "uppercase", fontSize: { xs: "0.85rem", sm: "0.95rem" } }}>
            Core Skills
          </Typography>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" }, gap: { xs: 1.5, sm: 2 } }}>
            {Object.entries(resumeData.skills).map(([key, value]) => (
              <Box key={key}>
                <Typography variant="caption" sx={{ fontWeight: 700, display: "block", mb: 0.5, fontSize: { xs: "0.7rem", sm: "0.75rem" } }}>
                  {SKILL_LABELS[key] ?? key}
                </Typography>
                <Typography variant="body2" sx={{ fontSize: { xs: "0.8rem", sm: "0.875rem" }, lineHeight: 1.6 }}>{value}</Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Professional Experience */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5, textTransform: "uppercase", fontSize: { xs: "0.85rem", sm: "0.95rem" } }}>
            Professional Experience
          </Typography>

          {resumeData.experience.map((job, index) => (
            <Box key={index} sx={{ mb: 2.5 }}>
              <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, justifyContent: "space-between", alignItems: { xs: "flex-start", sm: "flex-start" }, gap: 1, mb: 0.5 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 700, fontSize: { xs: "0.95rem", sm: "1rem" } }}>
                  {job.role}
                </Typography>
                <Typography variant="caption" sx={{ fontWeight: 600, fontSize: { xs: "0.75rem", sm: "0.85rem" }, whiteSpace: "nowrap" }}>
                  {job.startDate} – {job.endDate}
                </Typography>
              </Box>
              <Typography variant="body2" color="primary" sx={{ fontWeight: 600, mb: 1, fontSize: { xs: "0.8rem", sm: "0.875rem" } }}>
                {job.company}, {job.location}
              </Typography>
              <Box component="ul" sx={{ pl: { xs: 1.5, sm: 2 }, m: 0, mb: 1 }}>
                {job.highlights.map((highlight, i) => (
                  <li key={i}>
                    <Typography variant="body2" sx={{ fontSize: { xs: "0.8rem", sm: "0.875rem" }, lineHeight: 1.6 }}>
                      {renderFormatted(highlight)}
                    </Typography>
                  </li>
                ))}
              </Box>
            </Box>
          ))}
        </Box>

        {/* Education */}
        <Box sx={{ mb: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5, textTransform: "uppercase", fontSize: { xs: "0.85rem", sm: "0.95rem" } }}>
            Education
          </Typography>
          <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, justifyContent: "space-between", alignItems: { xs: "flex-start", sm: "flex-start" }, gap: 1, mb: 0.5 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, fontSize: { xs: "0.95rem", sm: "1rem" } }}>
              {resumeData.education.degree}
            </Typography>
            <Typography variant="caption" sx={{ fontWeight: 600, fontSize: { xs: "0.75rem", sm: "0.85rem" }, whiteSpace: "nowrap" }}>
              {resumeData.education.startDate} – {resumeData.education.endDate}
            </Typography>
          </Box>
          <Typography variant="body2" color="primary" sx={{ fontWeight: 600, fontSize: { xs: "0.8rem", sm: "0.875rem" } }}>
            {resumeData.education.university}, {resumeData.education.location}
          </Typography>
        </Box>

        {/* Certifications & Languages */}
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5, textTransform: "uppercase", fontSize: { xs: "0.85rem", sm: "0.95rem" } }}>
            Languages & Soft Skills
          </Typography>
          <Typography variant="body2" sx={{ fontSize: { xs: "0.8rem", sm: "0.875rem" }, lineHeight: 1.6 }}>
            <strong>Languages:</strong> {resumeData.languages}
          </Typography>
          <Typography variant="body2" sx={{ fontSize: { xs: "0.8rem", sm: "0.875rem" }, lineHeight: 1.6 }}>
            <strong>Competencies:</strong> {resumeData.competencies}
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}
