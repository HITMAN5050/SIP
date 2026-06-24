"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  TrendingUp,
  ArrowRight,
  ChevronDown,
  LineChart,
  Calendar,
  Layers,
  Award,
  Compass,
  MessageSquare
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { servicesData } from "@/data/services";
import { faqsData } from "@/data/faqs";

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [sipYears, setSipYears] = useState(15);

  // Compounding visualization data
  const monthlySip = 10000;
  const expectedReturn = 0.12; // 12%
  const months = sipYears * 12;
  const totalInvested = monthlySip * months;
  // FV = P * [((1 + i)^n - 1) / i] * (1 + i)
  const i = expectedReturn / 12;
  const totalValue = Math.round(
    monthlySip * ((Math.pow(1 + i, months) - 1) / i) * (1 + i)
  );
  const estReturns = totalValue - totalInvested;

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(val);
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      
      {/* SECTION 1 — HERO */}
      <section className="relative min-h-[90vh] flex items-center pt-8 md:pt-12 pb-16 overflow-hidden">
        {/* Background Video Overlay */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source
              src="https://player.vimeo.com/external/538571059.sd.mp4?s=d760773d40ec4762ed61d7b1d9bf5b376d54cf8e&profile_id=165&oauth2_token_id=57447761"
              type="video/mp4"
            />
          </video>
          {/* Dark overlay to ensure text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-shreeji-bg via-transparent to-shreeji-bg" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Copy */}
            <div className="lg:col-span-7 flex flex-col space-y-6 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center self-center lg:self-start space-x-2 px-3.5 py-1.5 rounded-full bg-shreeji-primary/10 border border-shreeji-primary/20"
              >
                <Award className="h-4 w-4 text-shreeji-accent" />
                <span className="text-xs font-semibold tracking-wider text-shreeji-accent uppercase">
                  Premium Wealth Solutions
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-shreeji-text leading-[1.1]"
              >
                Grow Your Wealth With{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-shreeji-accent to-shreeji-gold">
                  Smart Financial Planning
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg text-shreeji-text-secondary leading-relaxed max-w-xl mx-auto lg:mx-0"
              >
                Helping families and high-net-worth professionals build long-term generational wealth through disciplined SIPs, mutual funds, and custom retirement planning.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              >
                <Link
                  href="/sip-calculator"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full text-base font-semibold tracking-wide text-white bg-gradient-to-r from-shreeji-primary to-shreeji-accent shadow-lg shadow-shreeji-accent/15 hover:opacity-95 text-center flex items-center justify-center space-x-2 transition-all duration-300"
                >
                  <span>Start Investing</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
                
                <Link
                  href="/book"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full text-base font-semibold tracking-wide text-shreeji-text border border-shreeji-border bg-white/5 hover:bg-white/10 transition-all duration-300 text-center"
                >
                  Grow With Us
                </Link>
              </motion.div>
            </div>

            {/* Right Side Partners Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 relative w-full max-w-md mx-auto"
            >
              <div className="glass-card rounded-2xl p-2 relative overflow-hidden shadow-2xl shadow-black/40 border border-white/5">
                <div className="relative rounded-xl overflow-hidden bg-slate-900 w-full">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/Mamu.jpeg"
                    alt="Sanjay Solanki & Hiren Surati - Partners of Shreeji Wealth"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION 2 — TRUST METRICS */}
      <section className="relative z-10 py-12 border-y border-shreeji-border bg-shreeji-bg-secondary/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {[
              { title: "Personalized Financial Guidance", desc: "No cookie-cutter algorithms. Real expert consultations customized for you.", icon: Compass },
              { title: "Goal-Based Investing", desc: "Align portfolios strictly to education, home purchases, or early retirement.", icon: LineChart },
              { title: "Long-Term Wealth Planning", desc: "Maintain low portfolio turnover to optimize taxation and maximize compounding.", icon: Layers },
              { title: "SIP Investment Expertise", desc: "Scientific fund selection methodology backed by 18+ years of experience.", icon: TrendingUp }
            ].map((metric, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                className="p-5 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-shreeji-accent/30 transition-all duration-300 flex flex-col space-y-3"
              >
                <div className="h-9 w-9 rounded-lg bg-shreeji-primary/10 border border-shreeji-primary/20 flex items-center justify-center text-shreeji-accent shrink-0">
                  <metric.icon className="h-4.5 w-4.5" />
                </div>
                <h3 className="font-display font-semibold text-sm text-shreeji-text">{metric.title}</h3>
                <p className="text-xs text-shreeji-text-secondary leading-relaxed">{metric.desc}</p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* SECTION 3 — ABOUT PREVIEW */}
      <section className="relative z-10 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Founders Photo Representation */}
            <div className="relative group max-w-md mx-auto w-full">
              <div className="absolute inset-0 bg-gradient-to-br from-shreeji-primary to-shreeji-accent rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
              <div className="relative aspect-4/3 rounded-2xl overflow-hidden border border-shreeji-border shadow-2xl bg-slate-900">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
                  alt="Shreeji Wealth Corporate Office"
                  className="w-full h-full object-cover grayscale opacity-60 hover:grayscale-0 hover:opacity-85 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-shreeji-bg via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 glass-card rounded-lg">
                  <p className="text-xs text-shreeji-gold font-semibold uppercase tracking-wider mb-1">NJ Wealth Partner</p>
                  <p className="text-xs text-white">Authorized Mutual Fund Distributor partnered with India&apos;s leading financial distribution platform.</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col space-y-6 text-left">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-shreeji-text tracking-tight">
                Financial Guidance Built On{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-shreeji-accent to-shreeji-gold">
                  Absolute Trust
                </span>
              </h2>
              
              <p className="text-sm text-shreeji-text-secondary leading-relaxed">
                At Shreeji Wealth, we believe compounding is not just a mathematical formula; it is a discipline. Since 2008, we have guided clients through the power of disciplined, long-term systematic investing, offering reliable and personalized financial solutions.
              </p>
              
              <p className="text-sm text-shreeji-text-secondary leading-relaxed">
                Our approach focuses strictly on asset allocation and goals. We do not chase short-term market bubbles. Instead, we structure portfolios and insurance solutions engineered to protect your family&apos;s future and deliver lasting value.
              </p>

              <div className="pt-4 grid grid-cols-2 gap-6 border-t border-shreeji-border">
                <div>
                  <span className="font-display font-bold text-2xl text-shreeji-accent block">18+ Years</span>
                  <span className="text-xs text-shreeji-text-secondary">Investment Experience</span>
                </div>
                <div>
                  <span className="font-display font-bold text-2xl text-shreeji-gold block">NJ Partner</span>
                  <span className="text-xs text-shreeji-text-secondary">Authorized Distributor</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center space-x-1.5 text-sm font-semibold text-shreeji-accent hover:text-white transition-colors group"
                >
                  <span>Learn more about our philosophy</span>
                  <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4 — SERVICES */}
      <section className="relative z-10 py-20 md:py-28 bg-shreeji-bg-secondary/20 border-t border-shreeji-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-shreeji-text tracking-tight">
              Bespoke Services For{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-shreeji-accent to-shreeji-gold">
                Every Milestone
              </span>
            </h2>
            <p className="text-sm text-shreeji-text-secondary leading-relaxed">
              We help you build, optimize, and secure your capital across structured pathways.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => {
              return (
                <motion.div
                  key={service.id}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="glass-card rounded-2xl p-6 flex flex-col justify-between shadow-lg"
                >
                  <div className="space-y-4">
                    <div className="h-10 w-10 rounded-lg bg-shreeji-primary/15 flex items-center justify-center text-shreeji-accent">
                      <TrendingUp className="h-5 w-5" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-shreeji-text">
                      {service.title}
                    </h3>
                    <p className="text-xs text-shreeji-text-secondary leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-white/5 flex justify-between items-center">
                    <Link
                      href={`/services#${service.id}`}
                      className="text-xs font-semibold text-shreeji-accent hover:text-white transition-colors inline-flex items-center space-x-1"
                    >
                      <span>Explore details</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 5 — WHY SIP & COMPOUNDING */}
      <section className="relative z-10 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left Copy */}
            <div className="space-y-6">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-shreeji-text tracking-tight">
                The Power Of Small,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-shreeji-accent to-shreeji-gold">
                  Disciplined Investing
                </span>
              </h2>
              
              <p className="text-sm text-shreeji-text-secondary leading-relaxed">
                A Systematic Investment Plan (SIP) simplifies wealth creation. By investing a fixed amount monthly, you ignore market hype and capture lower pricing cycles automatically.
              </p>

              {/* Slider Input */}
              <div className="p-5 rounded-xl border border-shreeji-border bg-white/[0.01] space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-medium text-shreeji-text">SIP Duration:</span>
                  <span className="text-sm font-bold text-shreeji-gold font-display">{sipYears} Years</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="30"
                  value={sipYears}
                  onChange={(e) => setSipYears(Number(e.target.value))}
                  className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-shreeji-accent"
                />
                
                <div className="grid grid-cols-3 gap-4 pt-2 text-center">
                  <div>
                    <span className="text-[10px] text-shreeji-text-secondary uppercase block mb-1">Monthly</span>
                    <span className="text-sm font-semibold text-white">₹10,000</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-shreeji-text-secondary uppercase block mb-1">Invested</span>
                    <span className="text-sm font-semibold text-white">{formatCurrency(totalInvested)}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-shreeji-text-secondary uppercase block mb-1">Total Value</span>
                    <span className="text-sm font-semibold text-shreeji-accent">{formatCurrency(totalValue)}</span>
                  </div>
                </div>
              </div>

              <div className="text-xs text-shreeji-text-secondary/70 italic">
                * Calculation assumes a conservative 12% average annual growth rate on equity funds.
              </div>
            </div>

            {/* Right Compounding Visual */}
            <div className="glass-card rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between h-96">
              <div>
                <span className="text-xs text-shreeji-gold font-semibold uppercase tracking-wider">SIP Compounding Arc</span>
                <h3 className="font-display font-bold text-xl text-white mt-1">Growth Progression</h3>
              </div>

              <div className="h-48 w-full flex items-end justify-between relative mt-4">
                {/* Compounding bar height visualizer */}
                <div className="w-[18%] flex flex-col items-center space-y-2">
                  <div className="w-full bg-white/10 rounded-t-md h-12 transition-all duration-300" />
                  <span className="text-[10px] text-shreeji-text-secondary">Year 5</span>
                </div>
                <div className="w-[18%] flex flex-col items-center space-y-2">
                  <div className="w-full bg-white/10 rounded-t-md h-20 transition-all duration-300" />
                  <span className="text-[10px] text-shreeji-text-secondary">Year 10</span>
                </div>
                <div className="w-[18%] flex flex-col items-center space-y-2">
                  {/* Dynamic heights based on slider */}
                  <div
                    className="w-full bg-gradient-to-t from-shreeji-primary to-shreeji-accent rounded-t-md transition-all duration-500"
                    style={{ height: `${Math.min(100, Math.max(30, sipYears * 3.5))}px` }}
                  />
                  <span className="text-[10px] font-bold text-shreeji-accent">Year {sipYears}</span>
                </div>
                <div className="w-[18%] flex flex-col items-center space-y-2">
                  <div className="w-full bg-shreeji-primary/20 rounded-t-md h-36 transition-all duration-300" />
                  <span className="text-[10px] text-shreeji-text-secondary">Year 20</span>
                </div>
                <div className="w-[18%] flex flex-col items-center space-y-2">
                  <div className="w-full bg-shreeji-primary/30 rounded-t-md h-44 transition-all duration-300 animate-pulse" />
                  <span className="text-[10px] text-shreeji-gold font-semibold">Year 30</span>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex justify-between items-center text-xs">
                <span className="text-shreeji-text-secondary">Interest Earned:</span>
                <span className="font-bold text-emerald-400">{formatCurrency(estReturns)}</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 6 — PROCESS */}
      <section className="relative z-10 py-20 md:py-28 bg-shreeji-bg-secondary/30 border-y border-shreeji-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-shreeji-text tracking-tight">
              Our Structured{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-shreeji-accent to-shreeji-gold">
                Wealth Process
              </span>
            </h2>
            <p className="text-sm text-shreeji-text-secondary leading-relaxed">
              Four structured milestones to take you from initial consultation to active portfolio management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Understand Goals", desc: "We sit down to map your retirement age, children's education milestones, and liquid emergency needs." },
              { step: "02", title: "Build Strategy", desc: "We design a customized equity-to-debt asset allocation map matching your personal volatility thresholds." },
              { step: "03", title: "Start Investing", desc: "Setup paperless auto-debit SIP mandates or execute tactical lump-sum deployments safely." },
              { step: "04", title: "Track & Grow", desc: "Get access to our mobile tracking portal with semi-annual portfolio rebalancing reviews." }
            ].map((proc, idx) => (
              <div key={idx} className="relative flex flex-col space-y-4 p-6 glass-card rounded-2xl">
                <span className="font-display font-bold text-4xl text-shreeji-accent/25 block leading-none">{proc.step}</span>
                <h3 className="font-display font-semibold text-base text-white">{proc.title}</h3>
                <p className="text-xs text-shreeji-text-secondary leading-relaxed">{proc.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* SECTION 8 — FAQ */}
      <section className="relative z-10 py-20 md:py-28 bg-shreeji-bg-secondary/20 border-t border-shreeji-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-shreeji-text tracking-tight">
              Frequently Asked{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-shreeji-accent to-shreeji-gold">
                Questions
              </span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqsData.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-shreeji-border bg-white/[0.01] overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-white/[0.02] transition-colors"
                  >
                    <span className="font-display font-semibold text-sm sm:text-base text-white">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 text-shreeji-accent transform transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 text-xs sm:text-sm text-shreeji-text-secondary leading-relaxed border-t border-shreeji-border/30 pt-3">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 9 — FINAL CTA */}
      <section className="relative z-10 py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden p-8 md:p-16 border border-shreeji-border shadow-2xl">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-shreeji-bg-secondary via-shreeji-bg to-shreeji-bg-secondary z-0" />
            <div className="absolute inset-0 bg-gradient-to-r from-shreeji-primary/20 via-transparent to-shreeji-accent/15 z-0" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
                <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
                  Start Your Wealth Journey Today
                </h2>
                <p className="text-sm text-shreeji-text-secondary leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Secure your family’s financial future by scheduling a free goal-allocation briefing with our senior advisor. No obligations.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4 w-full">
                <Link
                  href="/book"
                  className="w-full px-6 py-3.5 rounded-full text-sm font-semibold tracking-wide text-white bg-gradient-to-r from-shreeji-primary to-shreeji-accent text-center shadow-lg shadow-shreeji-accent/15 hover:opacity-95 flex items-center justify-center space-x-2"
                >
                  <Calendar className="h-4.5 w-4.5" />
                  <span>Grow With Us</span>
                </Link>

                <a
                  href="https://wa.me/919979869788"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-6 py-3.5 rounded-full text-sm font-semibold tracking-wide text-white border border-emerald-500/20 bg-emerald-500/10 hover:bg-emerald-500/15 text-center flex items-center justify-center space-x-2 transition-colors"
                >
                  <MessageSquare className="h-4.5 w-4.5 text-emerald-400" />
                  <span>Talk on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
