
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Footer from "@/components/Footer";
import NavigationalMenu from "@/components/NavagationalMenu";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FOREPLAY | The Ultimate Golf App",
  description:
    "Foreplay the ultimate golf app for golfers of all levels. Track your scores, analyze your game, and improve your skills with our comprehensive features; straight from your device.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex h-[100dvh] flex-col`}>
        <NavigationalMenu />
        <main className="flex-1">{children}</main>
        
        <Footer />
      </body>
    </html>
  );
}
