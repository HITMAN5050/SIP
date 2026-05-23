"use client";

import React from "react";
import { Award, Compass, ShieldCheck, HeartHandshake, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const milestones = [
    { year: "2011", title: "Inception of Shreeji", desc: "Started as a small retail mutual fund advisory office in Ahmedabad, catering to 20 local families." },
    { year: "2015", title: "SIP Advisory Scale", desc: "Crossed ₹50 Crores in assets under management (AUM) by introducing digital auto-debit SIP portals." },
    { year: "2020", title: "HNI Wealth Desk", desc: "Launched customized equity portfolios and advanced tax-saving advisory desks for corporate leaders." },
    { year: "2026", title: "Trust Milestone", desc: "Serving 450+ families and corporate trust clients with over ₹250+ Crores in AUM." }
  ];

  return (
    <div className="relative min-h-screen py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-shreeji-primary/10 border border-shreeji-primary/20"
          >
            <Compass className="h-4 w-4 text-shreeji-accent" />
            <span className="text-xs font-semibold tracking-wider text-shreeji-accent uppercase">Our Story</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-4xl sm:text-5xl text-shreeji-text tracking-tight"
          >
            Financial Guidance Built On{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-shreeji-accent to-shreeji-gold">
              Client Protection
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-shreeji-text-secondary leading-relaxed"
          >
            We help you cut through the financial clutter and build portfolios aligned strictly to your real life goals.
          </motion.p>
        </div>

        {/* Founder Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center mb-24">
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-shreeji-primary to-shreeji-accent rounded-2xl blur-xl opacity-25" />
            <div className="relative aspect-3/4 bg-slate-900 rounded-2xl overflow-hidden border border-shreeji-border">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
                alt="Kirit Bhai Shah, Founder of Shreeji Wealth"
                className="w-full h-full object-cover grayscale opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-shreeji-bg via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-4 glass-card rounded-xl text-center">
                <h4 className="font-display font-bold text-base text-white">Kirit Bhai Shah</h4>
                <p className="text-xs text-shreeji-gold uppercase tracking-wider font-semibold">Founder & Chief Consultant</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 text-left">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">
              A Message From Our Founder
            </h2>
            <div className="space-y-4 text-sm text-shreeji-text-secondary leading-relaxed">
              <p>
                &ldquo;When I founded Shreeji Wealth in 2011, my vision was simple: I wanted to build an advisory desk where clients felt protected. Having witnessed two major stock market crashes, I realized that general investors do not fail due to a lack of investment options. They fail because they let emotion drive their financial decisions.&rdquo;
              </p>
              <p>
                &ldquo;Mutual funds and SIPs are fantastic tools, but they require a steady hand. Our role is to act as that steady hand. We do not focus on predicting which sector will rise next month. Instead, we focus on allocating assets in a way that matches your timeline, risk budget, and core family values.&rdquo;
              </p>
              <p>
                &ldquo;We treat our clients' wealth exactly how we treat our own—with discipline, caution, and an absolute commitment to confidentiality.&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Mission and Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <div className="glass-card rounded-2xl p-8 space-y-4">
            <div className="h-10 w-10 rounded-lg bg-shreeji-primary/10 border border-shreeji-primary/20 flex items-center justify-center text-shreeji-accent">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h3 className="font-display font-bold text-lg text-white">Our Mission</h3>
            <p className="text-sm text-shreeji-text-secondary leading-relaxed">
              To provide conflict-free, research-driven wealth planning that simplifies the investment process, protects clients from emotional market pitfalls, and builds reliable long-term security.
            </p>
          </div>
          <div className="glass-card rounded-2xl p-8 space-y-4">
            <div className="h-10 w-10 rounded-lg bg-shreeji-gold/10 border border-shreeji-gold/20 flex items-center justify-center text-shreeji-gold">
              <HeartHandshake className="h-5 w-5" />
            </div>
            <h3 className="font-display font-bold text-lg text-white">Our Values</h3>
            <p className="text-sm text-shreeji-text-secondary leading-relaxed">
              We operate under absolute transparency, zero-commission bias, strict regulatory compliance, and a belief that client retention is the only real metric of advisory success.
            </p>
          </div>
        </div>

        {/* Core Principles */}
        <div className="mb-24 text-center">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mb-10">Our Core Advising Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              { title: "Risk First, Returns Second", desc: "We evaluate the risk of an investment before we look at the yield. If a fund's downside protection is weak, it has no place in our client portfolios." },
              { title: "Asset Allocation is Key", desc: "Over 90% of long-term returns are determined by your asset allocation (ratio of equity to debt to cash) rather than individual fund picking." },
              { title: "Emotional Anchorage", desc: "We counsel you to stay invested during corrections. Historically, the worst market drops are always followed by the strongest compounding phases." }
            ].map((princ, idx) => (
              <div key={idx} className="p-6 rounded-xl border border-white/5 bg-white/[0.01] space-y-3">
                <div className="flex items-center space-x-2 text-shreeji-accent">
                  <CheckCircle2 className="h-4.5 w-4.5 shrink-0" />
                  <h3 className="font-display font-semibold text-sm text-white">{princ.title}</h3>
                </div>
                <p className="text-xs text-shreeji-text-secondary leading-relaxed">{princ.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Timeline */}
        <div>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-white text-center mb-12">Our Milestones</h2>
          <div className="relative border-l border-shreeji-border/60 max-w-2xl mx-auto pl-6 sm:pl-8 space-y-12">
            {milestones.map((mile, idx) => (
              <div key={idx} className="relative">
                {/* Connector Dot */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1 h-4 w-4 rounded-full bg-shreeji-bg border-2 border-shreeji-accent flex items-center justify-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-shreeji-accent" />
                </div>
                <div>
                  <span className="font-display font-bold text-lg text-shreeji-gold block leading-none mb-1">{mile.year}</span>
                  <h4 className="font-display font-semibold text-sm text-white mb-1">{mile.title}</h4>
                  <p className="text-xs text-shreeji-text-secondary leading-relaxed">{mile.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
