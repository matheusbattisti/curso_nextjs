import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { Footer } from "@/components/Footer";

import "./globals.css";
import { Navbar } from "@/components/Navbar";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Animes List",
  description: "Fique por dentro do mundo dos animes.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt_BR">
      <body className={dmSans.className}>
        <main className="max-w-7xl mx-auto bg-[#0F1117]">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
