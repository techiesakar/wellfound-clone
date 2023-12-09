import "./globals.css";
import { siteConfig } from "./config/site";
import type { Metadata } from "next";
import { graphik } from "./lib/fonts";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: [
    {
      url: "",
      href: "",
    },
  ],
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
