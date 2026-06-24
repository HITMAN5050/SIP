"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-shreeji-bg-secondary border-t border-shreeji-border text-shreeji-text-secondary z-10 relative">
      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          
          {/* Brand Info */}
          <div className="flex flex-col space-y-4">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="h-9 w-9 shrink-0">
                <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Left/Top Part of stylized 'S' - White/Silver */}
                  <path
                    d="M28 58C25 45 32 30 48 25C64 20 74 27 75 33L62 38C61 34 56 30 49 32C41 33 37 40 39 48L28 58Z"
                    fill="#F8FAFC"
                  />
                  {/* Right/Bottom Part of stylized 'S' - Yellow/Gold */}
                  <path
                    d="M72 42C75 55 68 70 52 75C36 80 26 73 25 67L38 62C39 66 44 70 51 68C59 67 63 60 61 52L72 42Z"
                    fill="#C6A15B"
                  />
                  {/* Stylized sharp diagonal cuts separating the pieces */}
                  <path
                    d="M25 67L75 33L70 30L20 64L25 67Z"
                    fill="url(#goldSilverGradFooter)"
                    opacity="0.15"
                  />
                  {/* Small Yellow Triangle at the top right */}
                  <path
                    d="M70 20L78 20L78 28L70 20Z"
                    fill="#C6A15B"
                  />
                  <defs>
                    <linearGradient id="goldSilverGradFooter" x1="20" y1="64" x2="75" y2="33" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#F8FAFC" />
                      <stop offset="1" stopColor="#C6A15B" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-base tracking-wider text-shreeji-text uppercase">
                  Shreeji Wealth
                </span>
                <span className="text-[9px] tracking-[0.2em] font-medium text-shreeji-gold uppercase">
                  Grow More With Us
                </span>
              </div>
            </Link>
            <p className="text-sm text-shreeji-text-secondary leading-relaxed max-w-xs">
              Empowering families and professionals with disciplined, goal-based wealth planning, SIP investments, and personalized solutions.
            </p>
            {/* Social Links */}
            <div className="flex items-center space-x-4 pt-2">
              {["LinkedIn", "Twitter", "Instagram"].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="text-xs hover:text-shreeji-accent transition-colors duration-200 flex items-center space-x-0.5"
                >
                  <span>{platform}</span>
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-sm tracking-wider text-shreeji-text uppercase mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-shreeji-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-shreeji-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-shreeji-accent transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/sip-calculator" className="hover:text-shreeji-accent transition-colors">
                  SIP Calculator
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-sm tracking-wider text-shreeji-text uppercase mb-4">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/services#sip" className="hover:text-shreeji-accent transition-colors">
                  SIP Planning
                </Link>
              </li>
              <li>
                <Link href="/services#mutual-funds" className="hover:text-shreeji-accent transition-colors">
                  Mutual Funds
                </Link>
              </li>
              <li>
                <Link href="/services#retirement" className="hover:text-shreeji-accent transition-colors">
                  Retirement Planning
                </Link>
              </li>
              <li>
                <Link href="/services#child-education" className="hover:text-shreeji-accent transition-colors">
                  Child Education Planning
                </Link>
              </li>
              <li>
                <Link href="/services#tax-saving" className="hover:text-shreeji-accent transition-colors">
                  Tax Saving Investments
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col space-y-3.5">
            <h4 className="font-display font-semibold text-sm tracking-wider text-shreeji-text uppercase mb-1">
              Contact Office
            </h4>
            <div className="flex items-start space-x-2.5 text-sm">
              <MapPin className="h-4 w-4 text-shreeji-accent mt-1 shrink-0" />
              <span>
                315, Western Business Hub,
                <br />
                B/h. Trinity Business Park, Green City Road,
                <br />
                Pal-Adajan, Surat, Gujarat - 394510
              </span>
            </div>
            <div className="flex items-start space-x-2.5 text-sm">
              <Phone className="h-4 w-4 text-shreeji-accent shrink-0 mt-1" />
              <div className="flex flex-col space-y-1">
                <a href="tel:+919979869788" className="hover:text-shreeji-accent transition-colors">
                  +91 99798 69788 (Sanjay S.)
                </a>
                <a href="tel:+919909002988" className="hover:text-shreeji-accent transition-colors">
                  +91 99090 02988 (Hiren S.)
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-2.5 text-sm">
              <Mail className="h-4 w-4 text-shreeji-accent shrink-0 mt-1" />
              <div className="flex flex-col space-y-1">
                <a href="mailto:shreejiwealth9@gmail.com" className="hover:text-shreeji-accent transition-colors">
                  shreejiwealth9@gmail.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Financial Compliance / Regulatory Disclaimer */}
        <div className="mt-12 pt-8 border-t border-shreeji-border text-[11px] leading-relaxed text-shreeji-text-secondary/70">
          <p className="mb-3">
            <strong>Regulatory Disclaimer:</strong> Mutual Fund investments are subject to market risks. Please read all scheme-related documents carefully before investing. Insurance is the subject matter of solicitation. Please read the policy documents carefully before purchasing any insurance product. Past performance is not indicative of future returns. Shreeji Wealth is an authorized Mutual Fund Distributor registered with the Association of Mutual Funds in India (AMFI).
          </p>
          <p>
            The tools and calculators provided on this website are for educational and illustrative purposes only. Projected returns are calculated based on mathematical formulations and should not be construed as investment advice or guaranteed gains.
          </p>
        </div>

        {/* Copywrite */}
        <div className="mt-8 pt-6 border-t border-shreeji-border/40 flex flex-col sm:flex-row justify-between items-center text-xs">
          <p className="mb-2 sm:mb-0">
            &copy; {currentYear} Shreeji Wealth. All Rights Reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-shreeji-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-shreeji-accent transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-shreeji-accent transition-colors">Disclaimer</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
