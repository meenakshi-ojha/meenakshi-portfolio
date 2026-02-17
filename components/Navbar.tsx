"use client";

import { Box, Container, Link, Typography, Stack } from "@mui/material";
import NextLink from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <Box
      component="nav"
      sx={{
        borderBottom: "1px solid",
        borderColor: "divider",
        backdrop: "filter: blur(10px)",
        sticky: 0,
        top: 0,
        zIndex: 1000,
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "rgba(15, 23, 42, 0.8)" : "rgba(255, 255, 255, 0.8)",
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            py: 2,
          }}
        >
          <Typography
            variant="h6"
            component={NextLink}
            href="/"
            sx={{
              fontWeight: 700,
              textDecoration: "none",
              fontSize: "1.3rem",
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

          <Stack direction="row" spacing={3}>
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
        </Box>
      </Container>
    </Box>
  );
}
