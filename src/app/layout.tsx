import type { Metadata } from "next";
import { Inria_Serif, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* Google Fonts */
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const inriaSerif = Inria_Serif({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-inria",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arukah Health",
  description: "Empowering Health with Compassionate, Evidence-Based Care",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="HgF4B_FpghPaKHq4kpqiHquZlFcxaK4CgpxjdvMsz-w"
        />
      </head>
      <body className={`${dmSans.variable} ${inriaSerif.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
