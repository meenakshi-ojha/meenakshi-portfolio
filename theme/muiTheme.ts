import { createTheme, PaletteMode } from "@mui/material";

export const getDesignTokens = (mode: PaletteMode) =>
  createTheme({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            primary: { main: "#4f46e5" },
            background: { default: "#fafafa", paper: "#ffffff" },
          }
        : {
            primary: { main: "#22d3ee" },
            background: { default: "#0f172a", paper: "#020617" },
          }),
    },
    typography: {
      fontFamily: "Inter, sans-serif",
      h1: { fontWeight: 700 },
      h2: { fontWeight: 600 },
      body1: { fontSize: "1rem" },
    },
  });
