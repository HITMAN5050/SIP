import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundOrbs from "@/components/BackgroundOrbs";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shreeji Wealth | Premium Financial Advisory & Wealth Management",
  description: "Secure your financial future with Shreeji Wealth. Expert guidance on SIP investments, mutual funds, retirement planning, and tax-saving solutions.",
  keywords: ["SIP", "Mutual Funds", "Wealth Planning", "Retirement Planning", "Tax Saving", "Financial Advisory", "Shreeji Wealth"],
  verification: {
    other: {
      "facebook-domain-verification": ["tybxhecox48v99hbvsvby71e3vfz1u"],
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakartaSans.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full bg-shreeji-bg text-shreeji-text font-sans selection:bg-shreeji-accent selection:text-white flex flex-col">
        {/* Ambient glowing background shapes */}
        <BackgroundOrbs />
        
        {/* Sticky Header Navbar */}
        <Navbar />
        
        {/* Main Content Area */}
        <main className="flex-grow pt-20 relative z-10">{children}</main>
        
        {/* Page Footer */}
        <Footer />
      </body>
    </html>
  );
}


