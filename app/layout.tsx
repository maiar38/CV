import type { Metadata, Viewport } from "next";
import "@fontsource-variable/plus-jakarta-sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maiar Emam — CV",
  description:
    "Maiar Emam, Software Engineer and Full Stack Developer. Download the CV and explore the Addadak project infographic.",
};

export const viewport: Viewport = {
  themeColor: "#f6f5f1",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
