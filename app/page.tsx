import { Box, Button, Container, Typography, Stack } from "@mui/material";

export default function Home() {
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          minHeight: "90vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography variant="h3" gutterBottom>
          Hi, I'm Meenakshi Ojha 👋
        </Typography>

        <Typography variant="h5" color="primary" gutterBottom>
          Senior Frontend Engineer | React | Microfrontends | Scrum Master
        </Typography>

        <Typography variant="body1" sx={{ mt: 2 }}>
          I build scalable, high-quality frontend architectures using React,
          Redux Toolkit, and microfrontend patterns, with strong emphasis on
          performance, accessibility, and test-driven development.
        </Typography>

        <Stack direction="row" spacing={2} sx={{ mt: 4, flexWrap: "wrap" }}>
          <Button variant="contained" href="/experience">
            View Experience
          </Button>
          <Button variant="outlined" href="/projects">
            View Projects
          </Button>
          <Button variant="outlined" href="/resume">
            Download Resume
          </Button>
          <Button variant="text" href="/blog">
            Read Blog
          </Button>
        </Stack>
      </Box>
    </Container>
  );
}
