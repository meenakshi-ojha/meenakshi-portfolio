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
    value: "meenakshi.dev",
    href: "https://meenakshi.dev",
    color: "#4F46E5",
  },
];

export default function ContactPage() {
  return (
    <Container maxWidth="md" sx={{ py: 12 }}>
      <Box sx={{ mb: 8, textAlign: "center" }}>
        <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
          Let's Connect
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 450, mx: "auto", lineHeight: 1.8 }}>
          Open to discussing frontend architecture, microfrontends, leadership opportunities, or just chatting about React and TypeScript.
        </Typography>
      </Box>

      <Stack spacing={3}>
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
                p: 3,
                backgroundColor: "background.paper",
                textDecoration: "none",
                transition: "all 0.3s ease",
                cursor: "pointer",
                border: "1px solid",
                borderColor: "divider",
                display: "flex",
                alignItems: "center",
                gap: 3,
                "&:hover": {
                  borderColor: "primary.main",
                  transform: "translateX(8px)",
                  boxShadow: "0 10px 30px rgba(79, 70, 229, 0.1)",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 60,
                  height: 60,
                  backgroundColor: "rgba(79, 70, 229, 0.1)",
                  borderRadius: 2,
                  flexShrink: 0,
                }}
              >
                <IconComponent
                  sx={{
                    fontSize: 32,
                    color: link.color,
                  }}
                />
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>
                  {link.label}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {link.value}
                </Typography>
              </Box>
              <Box sx={{ ml: "auto" }}>
                <Typography variant="caption" sx={{ color: "primary.main", fontWeight: 600 }}>
                  →
                </Typography>
              </Box>
            </Paper>
          );
        })}
      </Stack>

      <Box
        sx={{
          mt: 10,
          p: 4,
          backgroundColor: "background.paper",
          borderRadius: 1,
          border: "1px solid",
          borderColor: "divider",
          textAlign: "center",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
          Or send me a message directly
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          I typically respond within 24 hours. Feel free to reach out about opportunities, collaborations, or just to say hello!
        </Typography>
        <Button
          variant="contained"
          href="mailto:meenakshiojhabook@gmail.com"
          sx={{ textTransform: "none", fontWeight: 600 }}
        >
          Send Email
        </Button>
      </Box>
    </Container>
  );
}
