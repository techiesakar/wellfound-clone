import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/navigation/header/header";
import { Footer } from "@/components/navigation/footer/footer";
import { graphik } from "./lib/fonts";

const rubik = Rubik({
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wellfound",
  description: "Find your dream job today",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`flex flex-col ${graphik.className}`}>{children}</body>
    </html>
  );
}
