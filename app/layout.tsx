import type { Metadata, Viewport } from "next";
import "@fontsource-variable/plus-jakarta-sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maiar Emam — CV",
  description:
    "Maiar Emam, Software Engineer | Full Stack Developer. Download the CV and view the Addadak project infographic.",
};

export const viewport: Viewport = {
  themeColor: "#0e1113",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" style={{ colorScheme: "dark" }}>
      <body>{children}</body>
    </html>
  );
}
