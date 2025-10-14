import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { ViewTransitions } from "next-view-transitions";

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
          <Navbar />
          {children}
        </body>
      </html>
    </ViewTransitions>
  );
}
