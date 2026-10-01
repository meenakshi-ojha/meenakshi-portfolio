"use client";

import { Button, CircularProgress, Box } from "@mui/material";
import { Download as DownloadIcon } from "@mui/icons-material";
import { useState } from "react";

type Variant = "single" | "two-column";

const RESUME_VARIANTS: Record<Variant, { endpoint: string; filename: string; label: string }> = {
  single: {
    endpoint: "/api/resume",
    filename: "Meenakshi_Ojha_Resume.pdf",
    label: "1-Column Resume",
  },
  "two-column": {
    endpoint: "/api/resume/two-column",
    filename: "Meenakshi_Ojha_Resume_TwoColumn.pdf",
    label: "2-Column Resume (Visual)",
  },
};

export default function ResumeDownloadButton() {
  const [loadingVariant, setLoadingVariant] = useState<Variant | null>(null);

  const handleDownload = async (variant: Variant) => {
    setLoadingVariant(variant);
    try {
      const { endpoint, filename } = RESUME_VARIANTS[variant];
      const response = await fetch(endpoint);
      if (!response.ok) throw new Error("Failed to download resume");

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download error:", error);
      alert("Failed to download resume. Please try again.");
    } finally {
      setLoadingVariant(null);
    }
  };

  return (
    <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", justifyContent: "center" }}>
      {(Object.keys(RESUME_VARIANTS) as Variant[]).map((variant) => (
        <Button
          key={variant}
          variant={variant === "single" ? "contained" : "outlined"}
          startIcon={loadingVariant === variant ? <CircularProgress size={20} /> : <DownloadIcon />}
          onClick={() => handleDownload(variant)}
          disabled={loadingVariant !== null}
        >
          {loadingVariant === variant ? "Generating..." : RESUME_VARIANTS[variant].label}
        </Button>
      ))}
    </Box>
  );
}
