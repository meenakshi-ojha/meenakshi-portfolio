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
      </head>
      <body>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
