import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: "500" });

export const metadata: Metadata = {
  title: "Next Azure Cloud",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.className} bg-gray-100 tracking-tight`}>
        <Toaster position="bottom-right" richColors closeButton />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
