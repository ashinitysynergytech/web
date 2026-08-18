import type { Metadata } from "next";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ashinity.com"),
  title: {
    default: "Ashinity — Ambition, made operational",
    template: "%s | Ashinity",
  },
  description:
    "Ashinity turns complex mandates into clear strategy, useful systems, and measurable progress.",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "Ashinity — Ambition, made operational",
    description:
      "Strategy, systems, and technology for institutions and ventures doing consequential work.",
    type: "website",
    images: [{ url: "/og.png", width: 1730, height: 909, alt: "Ashinity — Ambition, made operational" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashinity — Ambition, made operational",
    description:
      "Strategy, systems, and technology for institutions and ventures doing consequential work.",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
