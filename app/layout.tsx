import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { ViewTransitions } from "next-view-transitions";
import Container from "@/components/container";

const inter = Inter({
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Portfolio website template",
  description: "A perfect portfolio website template to showcase your work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body
          className={`${inter.className} bg-neutral-100 antialiased dark:bg-neutral-700`}
        >
          <Container>
            <Navbar />
            {children}
          </Container>
        </body>
      </html>
    </ViewTransitions>
  );
}
