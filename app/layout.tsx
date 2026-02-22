"use client";
import { Providers } from "./providers";
import Navbar from "@/components/Navbar";
import "@fontsource/inter/400.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Meenakshi Ojha - Frontend Engineer</title>
        <meta name="description" content="Senior Frontend Engineer Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>{`
          body { margin: 0; padding: 0; box-sizing: border-box; }
          *, *:before, *:after { box-sizing: inherit; }
        `}</style>
      </head>
      <body style={{ margin: 0, padding: 0, minHeight: '100vh', width: '100vw', overflowX: 'hidden' }}>
        <Providers>
          <Navbar />
          <main style={{ minHeight: '100vh', width: '100%', display: 'block', paddingTop: '60px' }}>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
