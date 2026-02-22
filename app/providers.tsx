"use client";

import { useMemo, useState, useEffect } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { getDesignTokens } from "@/theme/muiTheme";
import { ColorModeContext } from "@/theme/ColorModeContext";

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
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
