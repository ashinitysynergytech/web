import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ashinity.com"),
  title: "Ashinity Synergy",
  description:
    "Empowering Your Business with Tech, Policy, and Growth Expertise",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Ashinity Synergy",
    description:
      "Empowering Your Business with Tech, Policy, and Growth Expertise",
    images: "/favicon.ico",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashinity Synergy",
    description:
      "Empowering Your Business with Tech, Policy, and Growth Expertise",
    images: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@500,700,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
