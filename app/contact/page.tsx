import { Container, Typography, Box, Stack, Link, Button, Paper } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import LanguageIcon from "@mui/icons-material/Language";

const contactLinks = [
  {
    icon: EmailIcon,
    label: "Email",
    value: "meenakshiojhabook@gmail.com",
    href: "mailto:meenakshiojhabook@gmail.com",
    color: "#EA4335",
  },
  {
    icon: LinkedInIcon,
    label: "LinkedIn",
    value: "linkedin.com/in/meenakshi-ojha",
    href: "https://linkedin.com/in/meenakshi-ojha",
    color: "#0A66C2",
  },
  {
    icon: GitHubIcon,
    label: "GitHub",
    value: "github.com/meenakshi-ojha",
    href: "https://github.com/meenakshi-ojha",
    color: "#333",
  },
  {
    icon: LanguageIcon,
    label: "Portfolio",
    value: "meenakshi-portfolio-five.vercel.app",
    href: "https://meenakshi-portfolio-five.vercel.app",
    color: "#4F46E5",
  },
];

export default function ContactPage() {
  return (
    <Container maxWidth="md" sx={{ py: { xs: 6, sm: 12 }, px: { xs: 1, sm: 2, md: 3 } }}>
      <Box sx={{ mb: { xs: 4, sm: 8 }, textAlign: "center" }}>
        <Typography variant="h3" sx={{ fontWeight: 700, mb: 2, fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" } }}>
          Let's Connect
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 450, mx: "auto", lineHeight: 1.8, fontSize: { xs: "0.95rem", sm: "1rem" } }}>
          Open to discussing frontend architecture, microfrontends, leadership opportunities, or just chatting about React and TypeScript.
        </Typography>
      </Box>

      <Stack spacing={ { xs: 2, sm: 3 } }>
        {contactLinks.map((link) => {
          const IconComponent = link.icon;
          return (
            <Paper
              key={link.label}
              elevation={0}
              component={Link}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                p: { xs: 2, sm: 3 },
                backgroundColor: "background.paper",
                textDecoration: "none",
                transition: "all 0.3s ease",
                cursor: "pointer",
                border: "1px solid",
                borderColor: "divider",
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                alignItems: { xs: "flex-start", sm: "center" },
                gap: { xs: 2, sm: 3 },
                "&:hover": {
                  borderColor: "primary.main",
                  transform: { xs: "none", sm: "translateX(8px)" },
                  boxShadow: "0 10px 30px rgba(79, 70, 229, 0.1)",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: { xs: 50, sm: 60 },
                  height: { xs: 50, sm: 60 },
                  backgroundColor: "rgba(79, 70, 229, 0.1)",
                  borderRadius: 2,
                  flexShrink: 0,
                }}
              >
                <IconComponent
                  sx={{
                    fontSize: { xs: 24, sm: 32 },
                    color: link.color,
                  }}
                />
              </Box>
              <Box sx={{ flex: 1, width: { xs: "100%", sm: "auto" } }}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5, fontSize: { xs: "1rem", sm: "1.1rem" } }}>
                  {link.label}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: "0.85rem", sm: "0.9rem" }, wordBreak: "break-word" }}>
                  {link.value}
                </Typography>
              </Box>
              <Box sx={{ ml: { xs: 0, sm: "auto" }, alignSelf: { xs: "flex-end", sm: "auto" } }}>
                <Typography variant="caption" sx={{ color: "primary.main", fontWeight: 600, fontSize: { xs: "0.9rem", sm: "1rem" } }}>
                  →
                </Typography>
              </Box>
            </Paper>
          );
        })}
      </Stack>

      <Box
        sx={{
          mt: { xs: 6, sm: 10 },
          p: { xs: 2, sm: 3, md: 4 },
          backgroundColor: "background.paper",
          borderRadius: 1,
          border: "1px solid",
          borderColor: "divider",
          textAlign: "center",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, fontSize: { xs: "1rem", sm: "1.15rem" } }}>
          Or send me a message directly
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3, fontSize: { xs: "0.85rem", sm: "0.9rem" } }}>
          I typically respond within 24 hours. Feel free to reach out about opportunities, collaborations, or just to say hello!
        </Typography>
        <Button
          variant="contained"
          href="mailto:meenakshiojhabook@gmail.com"
          sx={{ textTransform: "none", fontWeight: 600, width: { xs: "100%", sm: "auto" } }}
        >
          Send Email
        </Button>
      </Box>
    </Container>
  );
}
