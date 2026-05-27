import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Derek Cordero — Web Developer",
  description:
    "Portfolio of Derek Robbie D. Cordero — full-stack web developer based in Iloilo City, Philippines. MERN stack, mobile, and desktop.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground animate-flicker">
        {children}
      </body>
    </html>
  );
}
