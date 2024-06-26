import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./Styles/globals.css";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VitalityHub",
  description: "A fitness and calorie tracker app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/VitalityHubIcon.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
