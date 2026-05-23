"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, TrendingUp, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "SIP Calculator", href: "/sip-calculator" },
  { name: "Blog", href: "/blog" },
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
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-shreeji-primary to-shreeji-accent flex items-center justify-center shadow-md shadow-shreeji-accent/20 group-hover:scale-105 transition-transform duration-300">
                <TrendingUp className="h-5 w-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg leading-tight tracking-wider text-shreeji-text uppercase group-hover:text-shreeji-accent transition-colors duration-300">
                  Shreeji Wealth
                </span>
                <span className="text-[10px] tracking-[0.2em] font-medium text-shreeji-gold uppercase">
                  Wealth Advisory
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
                  <span>Book Consultation</span>
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
                <div className="flex items-center space-x-2 border-b border-shreeji-border pb-6">
                  <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-shreeji-primary to-shreeji-accent flex items-center justify-center">
                    <TrendingUp className="h-4 w-4 text-white" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-display font-bold text-sm tracking-wider text-shreeji-text uppercase">
                      Shreeji Wealth
                    </span>
                    <span className="text-[9px] tracking-[0.2em] font-medium text-shreeji-gold uppercase">
                      Wealth Advisory
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
                  Book Free Consultation
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
