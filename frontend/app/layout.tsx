import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import {  AdminProvider } from "../context/AdminContext";

const montserrat = Montserrat({
  subsets: ["latin"], // Load only necessary subsets
  weight: ["400", "700"], // Add the font weights you need
});

export const metadata: Metadata = {
  title: "AI Meeting Notes",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <title>AI Meeting Notes</title>
      <body className={`${montserrat.className} antialiased`}>
        {/* {children} */}
        <AdminProvider>{children}</AdminProvider>
      </body>
    </html>
  );
}
