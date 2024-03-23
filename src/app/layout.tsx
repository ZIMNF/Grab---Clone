import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Grab",
  description: "Grab duplicate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <html data-theme="dark"></html>
      <body className="bg-black text-white">
        <Navbar />
        <main className="relative overflow-hidden bg-black text-white">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
