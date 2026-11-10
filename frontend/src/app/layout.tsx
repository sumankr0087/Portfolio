import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import ChatBot from "./components/ChatBot";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Suman Kumar — Full-Stack & AI Engineer",
  description:
    "Portfolio of Suman Kumar, a Full-Stack Developer & AI / Agentic Engineer building web apps, LLM products, RAG pipelines and agentic AI systems.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${mono.variable}`}>
      <body className="font-mono">
        <Header />
        <main>{children}</main>
        <ChatBot />
      </body>
    </html>
  );
}
