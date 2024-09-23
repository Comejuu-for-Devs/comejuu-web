import type { Metadata } from "next";
import {
  Inter as FontPrimary,
  Plus_Jakarta_Sans as FontSecondary
} from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import "@/styles/globals.css";

const fontPrimary = FontPrimary({
  subsets: ["latin"],
  variable: '--font-primary'
});

const fontSecondary = FontSecondary({
  subsets: ["latin"],
  variable: '--font-secondary'
});


export const metadata: Metadata = {
  title: "Comejuu Premier Acadamy",
  description: "Accounting, compliance, due-diligence and investment management platform.",
  applicationName: 'Comejuu Premier Academy',
  twitter: {
    card: 'summary_large_image',
    site: '@AfordiaZero',
    creator: '@AfordiaZero',
    images: [''],
    title: 'Comejuu Premier Academy',
    description: 'Your finances simplified.'
  },
  authors: [
    { name: "Afordia Zero", url: "https://afordiazero.com"}
  ],
  generator: "Comejuu Premier Academy",
  keywords: ["finance", "financial management", "accounting", "tax compliance", "budgeting", "money", "money management", "investing", "expense tracking", "track expenses", "financial app"],
  openGraph: {
    title: "Comejuu Premier Academy | Your finances simplified",
    description: "Accounting, compliance, due-diligence and investment management platform.",
    siteName: "Fyntrax",
    url: "",
    type: "website",
    images: [
      { url: "" }
    ]
  },
  robots: "index, follow",
  alternates: { canonical: "" },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontPrimary.variable} ${fontSecondary.variable} antialiased font-primary`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
