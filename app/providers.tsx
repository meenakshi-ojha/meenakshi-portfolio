"use client";

import { useMemo, useState, useEffect } from "react";
import { ThemeProvider, CssBaseline, IconButton, Box } from "@mui/material";
import { getDesignTokens } from "@/theme/muiTheme";
import { ColorModeContext } from "@/theme/ColorModeContext";
import { Brightness4, Brightness7 } from "@mui/icons-material";

export function Providers({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<"light" | "dark">("dark");
  const [mounted, setMounted] = useState(false);

  // Hydrate color mode from localStorage after mount to prevent hydration mismatch
  useEffect(() => {
    const savedMode = localStorage.getItem("colorMode") as "light" | "dark" | null;
    if (savedMode) {
      setMode(savedMode);
    }
    setMounted(true);
  }, []);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => {
          const newMode = prev === "light" ? "dark" : "light";
          localStorage.setItem("colorMode", newMode);
          return newMode;
        }),
    }),
    []
  );

  const theme = useMemo(() => getDesignTokens(mode), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {mounted && (
          <Box sx={{ position: "fixed", top: 16, right: 16, zIndex: 1000 }}>
            <IconButton onClick={colorMode.toggleColorMode} color="inherit">
              {mode === "dark" ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
          </Box>
        )}
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
