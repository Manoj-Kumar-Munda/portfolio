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
          <Container className="relative px-4">
            <div className="striped-bg absolute top-0 bottom-0 -left-6 h-full w-6" />
            <div className="striped-bg absolute inset-y-0 -right-6  h-full w-6" />
            <Navbar />
            {children}
          </Container>
        </body>
      </html>
    </ViewTransitions>
  );
}
