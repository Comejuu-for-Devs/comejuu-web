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
  keywords: [
    "School Fees", "fees", "Admissions Process", "admission", "enrolment", "Curriculum Offered", "CBC", "subjects",
    "Extracurricular Activities", "games", "talents", "sports", "School Location", "where", "Boarding Facilities",
    "boarders", "dormitory", "Academic Performance", "School Calendar", "events", "calendar", "Student Support Services",
    "Parent-Teacher Meeting", "meetings", "teachers", "parents", "Clubs", "Sports", "Talent Development Programs",
    "Science Laboratory", "lab", "library", "farm", "Student Life", "Assessment and Examination Information", "Transport Services"
  ],
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
