"use client";

import { Button, CircularProgress, Box } from "@mui/material";
import { Download as DownloadIcon } from "@mui/icons-material";
import { useState } from "react";

export default function ResumeDownloadButton() {
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/resume");
      if (!response.ok) throw new Error("Failed to download resume");

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "Meenakshi_Ojha_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download error:", error);
      alert("Failed to download resume. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ display: "flex", gap: 2, mb: 4 }}>
      <Button
        variant="contained"
        startIcon={loading ? <CircularProgress size={20} /> : <DownloadIcon />}
        onClick={handleDownload}
        disabled={loading}
      >
        {loading ? "Generating..." : "Download Resume (PDF)"}
      </Button>
    </Box>
  );
}
