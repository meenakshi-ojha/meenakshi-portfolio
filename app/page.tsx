import { Box, Button, Container, Typography, Stack } from "@mui/material";
import { Download as DownloadIcon } from "@mui/icons-material";

export default function Home() {
  return (
    <Container maxWidth="md" sx={{ px: { xs: 1, sm: 2, md: 3 } }}>
      <Box
        sx={{
          minHeight: { xs: "80vh", sm: "90vh" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          py: { xs: 4, sm: 8 },
        }}
      >

        <Typography
          variant="h3"
          gutterBottom
          sx={{
            fontSize: { xs: "1.5rem", sm: "2.2rem", md: "3rem" },
            fontWeight: 700,
            lineHeight: { xs: 1.2, sm: 1.15 },
            letterSpacing: { xs: '-0.5px', sm: '-1px' },
          }}
        >
          Hi, I'm Meenakshi Ojha
        </Typography>

        <Typography
          variant="h5"
          color="primary"
          gutterBottom
          sx={{
            fontSize: { xs: "1rem", sm: "1.3rem", md: "1.5rem" },
            fontWeight: 600,
            lineHeight: { xs: 1.3, sm: 1.2 },
            mb: { xs: 2, sm: 3 },
          }}
        >
          Senior Frontend Engineer | React | Microfrontends | Scrum Master
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mt: 2,
            fontSize: { xs: "0.98rem", sm: "1.08rem", md: "1.15rem" },
            color: 'text.secondary',
            lineHeight: { xs: 1.7, sm: 1.8 },
            mb: { xs: 3, sm: 4 },
          }}
        >
          I build scalable, high-quality frontend architectures using React, Redux Toolkit, and microfrontend patterns, with strong emphasis on performance, accessibility, and test-driven development.
        </Typography>

        <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mt: 4, flexWrap: "wrap" }}>
          <Button variant="contained" href="/resume" startIcon={<DownloadIcon />} sx={{ width: { xs: '100%', sm: 'auto' } }}>
            Download Resume
          </Button>
          <Button variant="outlined" href="/experience" sx={{ width: { xs: '100%', sm: 'auto' } }}>
            View Experience
          </Button>
          <Button variant="outlined" href="/projects" sx={{ width: { xs: '100%', sm: 'auto' } }}>
            View Projects
          </Button>
          {/* <Button variant="text" href="/blog">
            Read Blog
          </Button> */}
        </Stack>
      </Box>
    </Container>
  );
}
