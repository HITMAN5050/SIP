"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "SIP Calculator", href: "/sip-calculator" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile navbar on path change
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-shreeji-bg/85 backdrop-blur-md border-b border-shreeji-border py-4 shadow-lg shadow-black/10"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="h-10 w-10 shrink-0 group-hover:scale-105 transition-transform duration-300">
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
                    fill="url(#goldSilverGrad)"
                    opacity="0.15"
                  />
                  {/* Small Yellow Triangle at the top right */}
                  <path
                    d="M70 20L78 20L78 28L70 20Z"
                    fill="#C6A15B"
                  />
                  <defs>
                    <linearGradient id="goldSilverGrad" x1="20" y1="64" x2="75" y2="33" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#F8FAFC" />
                      <stop offset="1" stopColor="#C6A15B" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg leading-tight tracking-wider text-shreeji-text uppercase group-hover:text-shreeji-accent transition-colors duration-300">
                  Shreeji Wealth
                </span>
                <span className="text-[10px] tracking-[0.2em] font-medium text-shreeji-gold uppercase">
                  Grow More With Us
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative text-sm font-medium tracking-wide transition-colors duration-300 py-1 hover:text-shreeji-accent ${
                      isActive ? "text-shreeji-accent" : "text-shreeji-text-secondary"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-shreeji-primary to-shreeji-accent"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center">
              <Link
                href="/book"
                className="group relative px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide text-white overflow-hidden shadow-md shadow-shreeji-accent/10 transition-all duration-300"
              >
                {/* Emerald Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-shreeji-primary to-shreeji-accent transition-all duration-300 group-hover:opacity-90" />
                
                {/* Text Content */}
                <span className="relative flex items-center space-x-1">
                  <span>Grow With Us</span>
                  <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-shreeji-text p-2 hover:text-shreeji-accent transition-colors duration-300"
                aria-label="Toggle Menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0.1, duration: 0.5 }}
              className="fixed right-0 top-0 bottom-0 w-4/5 max-w-sm bg-shreeji-bg-secondary border-l border-shreeji-border px-6 py-20 z-40 flex flex-col justify-between shadow-2xl lg:hidden"
            >
              <div className="flex flex-col space-y-6">
                <div className="flex items-center space-x-3 border-b border-shreeji-border pb-6">
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
                        fill="url(#goldSilverGradMobile)"
                        opacity="0.15"
                      />
                      {/* Small Yellow Triangle at the top right */}
                      <path
                        d="M70 20L78 20L78 28L70 20Z"
                        fill="#C6A15B"
                      />
                      <defs>
                        <linearGradient id="goldSilverGradMobile" x1="20" y1="64" x2="75" y2="33" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#F8FAFC" />
                          <stop offset="1" stopColor="#C6A15B" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-display font-bold text-sm tracking-wider text-shreeji-text uppercase">
                      Shreeji Wealth
                    </span>
                    <span className="text-[9px] tracking-[0.2em] font-medium text-shreeji-gold uppercase">
                      Grow More With Us
                    </span>
                  </div>
                </div>

                <nav className="flex flex-col space-y-4">
                  {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.name}
                        href={link.href}
                        className={`text-base font-medium py-2 border-b border-white/5 tracking-wide transition-colors duration-300 ${
                          isActive ? "text-shreeji-accent" : "text-shreeji-text-secondary"
                        }`}
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                </nav>
              </div>

              <div className="flex flex-col space-y-4">
                <Link
                  href="/book"
                  className="w-full text-center px-6 py-3 rounded-full text-sm font-semibold tracking-wide text-white bg-gradient-to-r from-shreeji-primary to-shreeji-accent shadow-lg shadow-shreeji-accent/15 hover:opacity-95 transition-opacity"
                >
                  Grow With Us
                </Link>
                <div className="text-center text-xs text-shreeji-text-secondary">
                  Secured & Confident Financial Advisory
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
