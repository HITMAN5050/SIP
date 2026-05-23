"use client";

import React from "react";
import Link from "next/link";
import { TrendingUp, Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-shreeji-bg-secondary border-t border-shreeji-border text-shreeji-text-secondary z-10 relative">
      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          
          {/* Brand Info */}
          <div className="flex flex-col space-y-4">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-shreeji-primary to-shreeji-accent flex items-center justify-center shadow-md shadow-shreeji-accent/10">
                <TrendingUp className="h-4 w-4 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-base tracking-wider text-shreeji-text uppercase">
                  Shreeji Wealth
                </span>
                <span className="text-[9px] tracking-[0.2em] font-medium text-shreeji-gold uppercase">
                  Wealth Advisory
                </span>
              </div>
            </Link>
            <p className="text-sm text-shreeji-text-secondary leading-relaxed max-w-xs">
              Empowering families and professionals with disciplined, goal-based wealth planning, SIP investments, and personalized advisory.
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
              <li>
                <Link href="/blog" className="hover:text-shreeji-accent transition-colors">
                  Resources & Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-sm tracking-wider text-shreeji-text uppercase mb-4">
              Advisory Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/services#sip" className="hover:text-shreeji-accent transition-colors">
                  SIP Planning
                </Link>
              </li>
              <li>
                <Link href="/services#mutual-funds" className="hover:text-shreeji-accent transition-colors">
                  Mutual Fund Advisory
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
                302, Premium Trade Center,
                <br />
                Financial District, SG Highway,
                <br />
                Ahmedabad, Gujarat - 380054
              </span>
            </div>
            <div className="flex items-center space-x-2.5 text-sm">
              <Phone className="h-4 w-4 text-shreeji-accent shrink-0" />
              <a href="tel:+919876543210" className="hover:text-shreeji-accent transition-colors">
                +91 98765 43210
              </a>
            </div>
            <div className="flex items-center space-x-2.5 text-sm">
              <Mail className="h-4 w-4 text-shreeji-accent shrink-0" />
              <a href="mailto:info@shreejiwealth.com" className="hover:text-shreeji-accent transition-colors">
                info@shreejiwealth.com
              </a>
            </div>
          </div>

        </div>

        {/* Financial Compliance / Regulatory Disclaimer */}
        <div className="mt-12 pt-8 border-t border-shreeji-border text-[11px] leading-relaxed text-shreeji-text-secondary/70">
          <p className="mb-3">
            <strong>Regulatory Disclaimer:</strong> Mutual Fund investments are subject to market risks, read all scheme related documents carefully. Past performance is not indicative of future returns. Shreeji Wealth is a financial distributor/advisor registered with Association of Mutual Funds in India (AMFI) holding ARN/reg details.
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
