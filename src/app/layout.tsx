import type { Metadata } from "next";
import {
  Inter as FontPrimary,
  Plus_Jakarta_Sans as FontSecondary,
} from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import "@/styles/globals.css";
import FloatingWhatsappButton from "@/components/layout/FloatingWhatsappButton";
import { Toaster } from "react-hot-toast";

const fontPrimary = FontPrimary({
  subsets: ["latin"],
  variable: "--font-primary",
});

const fontSecondary = FontSecondary({
  subsets: ["latin"],
  variable: "--font-secondary",
});

export const metadata: Metadata = {
  title: "Comejuu Premier Academy",
  description: "Where vital academics meet a deep respect for childhood.",
  applicationName: "Comejuu Premier Academy",
  twitter: {
    card: "summary_large_image",
    site: "@ComejuuAcademy",
    creator: "@ComejuuAcademy",
    images: [""],
    title: "Comejuu Premier Academy",
    description: "Where vital academics meet a deep respect for childhood.",
  },
  authors: [{ name: "Afordia Zero", url: "https://afordiazero.com" }],
  generator: "Comejuu Premier Academy",
  keywords: [
    "School Fees",
    "fees",
    "Admissions Process",
    "admission",
    "enrolment",
    "Curriculum Offered",
    "CBC",
    "subjects",
    "Extracurricular Activities",
    "games",
    "talents",
    "sports",
    "School Location",
    "where",
    "Boarding Facilities",
    "boarders",
    "dormitory",
    "Academic Performance",
    "School Calendar",
    "events",
    "calendar",
    "Student Support Services",
    "Parent-Teacher Meeting",
    "meetings",
    "teachers",
    "parents",
    "Clubs",
    "Sports",
    "Talent Development Programs",
    "Science Laboratory",
    "lab",
    "library",
    "farm",
    "Student Life",
    "Assessment and Examination Information",
    "Transport Services",
  ],
  openGraph: {
    title: "Comejuu Premier Academy",
    description: "Where vital academics meet a deep respect for childhood.",
    siteName: "Comejuu",
    url: "",
    type: "website",
    images: [{ url: "" }],
  },
  robots: "index, follow",
  alternates: { canonical: "" },
};

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
        <Toaster />
        {children}
    
          <FloatingWhatsappButton />
     

        <Footer />
      </body>
    </html>
  );
}
