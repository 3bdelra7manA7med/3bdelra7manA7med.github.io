import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ChatWidget from "@/components/ChatWidget/ChatWidget";
import { personalInfo } from "@/data/config";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: `${personalInfo.name} - ${personalInfo.title}`,
  description: personalInfo.bio,
  keywords:
    "developer, full-stack, web development, react, next.js, javascript, typescript",
  authors: [{ name: personalInfo.name }],
  openGraph: {
    title: `${personalInfo.name} - ${personalInfo.title}`,
    description: personalInfo.bio,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <ChatWidget />
        </div>
      </body>
    </html>
  );
}
