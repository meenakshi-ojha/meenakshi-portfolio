"use client";

import { Box, Container, Link, Typography, Stack, Drawer, IconButton } from "@mui/material";
import { Menu as MenuIcon, Close as CloseIcon, Brightness4, Brightness7 } from "@mui/icons-material";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { useState, useContext, useEffect } from "react";
import { ColorModeContext } from "@/theme/ColorModeContext";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Resume", href: "/resume" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const colorMode = useContext(ColorModeContext);
  const [mode, setMode] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const savedMode = localStorage.getItem("colorMode") as "light" | "dark" | null;
    if (savedMode) {
      setMode(savedMode);
    }
  }, []);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleThemeToggle = () => {
    setMode(prev => {
      const newMode = prev === "light" ? "dark" : "light";
      localStorage.setItem("colorMode", newMode);
      return newMode;
    });
    colorMode?.toggleColorMode();
  };

  return (
    <Box
      component="nav"
      sx={{
        borderBottom: "1px solid",
        borderColor: "divider",
        backdrop: 'none',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#0f172a" : "#fff",
        width: '100%',
        boxShadow: '0 2px 8px 0 rgba(0,0,0,0.04)',
      }}
    >
      <Container maxWidth="md" sx={{ px: { xs: 1, sm: 2, md: 3 } }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            py: { xs: 1, sm: 2 },
          }}
        >
          <Typography
            variant="h6"
            component={NextLink}
            href="/"
            sx={{
              fontWeight: 700,
              textDecoration: "none",
              fontSize: { xs: "1.1rem", sm: "1.3rem" },
              color: "primary.main",
              letterSpacing: "-0.5px",
              transition: "all 0.3s ease",
              "&:hover": {
                opacity: 0.8,
              },
            }}
          >
            {"< "}meenakshi{" />"}
          </Typography>

          {/* Desktop Navigation */}
          <Stack direction="row" spacing={3} sx={{ display: { xs: 'none', sm: 'flex' } }}>
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  component={NextLink}
                  href={item.href}
                  sx={{
                    textDecoration: "none",
                    color: isActive ? "primary.main" : "text.primary",
                    fontWeight: isActive ? 600 : 500,
                    fontSize: "0.95rem",
                    borderBottom: isActive ? "2px solid" : "2px solid transparent",
                    borderColor: "primary.main",
                    pb: 0.25,
                    transition: "all 0.2s ease",
                    "&:hover": {
                      color: "primary.main",
                    },
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
          </Stack>

          {/* Right Side Controls */}
          <Stack direction="row" spacing={1} sx={{ display: 'flex', alignItems: 'center' }}>
            {/* Theme Toggle Button - Always visible */}
            <IconButton
              onClick={handleThemeToggle}
              color="inherit"
              sx={{ display: { xs: 'flex', sm: 'flex' } }}
            >
              {mode === "dark" ? <Brightness7 /> : <Brightness4 />}
            </IconButton>

            {/* Mobile Hamburger Menu */}
            <IconButton
              sx={{ display: { xs: 'flex', sm: 'none' } }}
              onClick={toggleDrawer(true)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Stack>

          {/* Mobile Drawer */}
          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={toggleDrawer(false)}
            sx={{
              '& .MuiDrawer-paper': {
                width: '100%',
                maxWidth: '300px',
              }
            }}
          >
            <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h6" sx={{ fontWeight: 700, color: "primary.main" }}>
                Menu
              </Typography>
              <IconButton onClick={toggleDrawer(false)} color="inherit">
                <CloseIcon />
              </IconButton>
            </Box>
            <Stack
              component="div"
              spacing={0}
              sx={{ p: 2 }}
              onClick={toggleDrawer(false)}
            >
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    component={NextLink}
                    href={item.href}
                    sx={{
                      py: 1.5,
                      px: 1,
                      textDecoration: "none",
                      color: isActive ? "primary.main" : "text.primary",
                      fontWeight: isActive ? 600 : 500,
                      fontSize: "0.95rem",
                      borderLeft: isActive ? "3px solid" : "3px solid transparent",
                      borderColor: "primary.main",
                      pl: isActive ? 0.7 : 1,
                      transition: "all 0.2s ease",
                      display: "block",
                      "&:hover": {
                        color: "primary.main",
                        borderLeftWidth: "3px",
                      },
                    }}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </Stack>
          </Drawer>
        </Box>
      </Container>
    </Box>
  );
}
