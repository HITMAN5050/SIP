"use client";

import React from "react";
import Link from "next/link";
import { servicesData } from "@/data/services";
import {
  TrendingUp,
  Layers,
  ShieldCheck,
  GraduationCap,
  Percent,
  Coins,
  CheckCircle2,
  Calendar
} from "lucide-react";
import { motion } from "framer-motion";

const iconMap = {
  TrendingUp: TrendingUp,
  Layers: Layers,
  ShieldAlert: ShieldCheck, // mapped to shield check
  GraduationCap: GraduationCap,
  Percent: Percent,
  Coins: Coins
};

export default function Services() {
  return (
    <div className="relative min-h-screen py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-shreeji-primary/10 border border-shreeji-primary/20"
          >
            <TrendingUp className="h-4 w-4 text-shreeji-accent" />
            <span className="text-xs font-semibold tracking-wider text-shreeji-accent uppercase">Our Offerings</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-4xl sm:text-5xl text-shreeji-text tracking-tight"
          >
            Tailored Solutions For{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-shreeji-accent to-shreeji-gold">
              Financial Success
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-shreeji-text-secondary leading-relaxed"
          >
            Explore our professional services engineered to support your wealth growth, tax optimizations, and protection needs.
          </motion.p>
        </div>

        {/* Detailed Sections */}
        <div className="space-y-24">
          {servicesData.map((service, idx) => {
            const Icon = iconMap[service.iconName] || TrendingUp;
            const isEven = idx % 2 === 0;

            return (
              <section
                key={service.id}
                id={service.id}
                className="scroll-mt-28 border-t border-shreeji-border pt-16 first:border-0 first:pt-0"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${isEven ? "" : "lg:flex-row-reverse"}`}>
                  
                  {/* Copy content */}
                  <div className={`lg:col-span-7 space-y-6 ${isEven ? "" : "lg:order-2"}`}>
                    <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 rounded-lg bg-shreeji-primary/15 flex items-center justify-center text-shreeji-accent">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">
                        {service.title}
                      </h2>
                    </div>

                    <p className="text-sm sm:text-base text-shreeji-text-secondary leading-relaxed">
                      {service.fullDesc}
                    </p>

                    {/* Benefits Grid */}
                    <div className="space-y-3 pt-2">
                      <h3 className="font-display font-semibold text-sm text-shreeji-gold uppercase tracking-wider">Key Benefits</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.benefits.map((benefit, bIdx) => (
                          <div key={bIdx} className="flex items-start space-x-2 text-xs text-shreeji-text-secondary">
                            <CheckCircle2 className="h-4 w-4 text-shreeji-accent mt-0.5 shrink-0" />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Suitable For */}
                    <div className="space-y-2.5 pt-2">
                      <h3 className="font-display font-semibold text-sm text-shreeji-gold uppercase tracking-wider">Who It Is For</h3>
                      <ul className="list-disc list-inside text-xs text-shreeji-text-secondary leading-relaxed space-y-1">
                        {service.suitableFor.map((suit, sIdx) => (
                          <li key={sIdx}>{suit}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Sidebar stats / checklist */}
                  <div className={`lg:col-span-5 ${isEven ? "" : "lg:order-1"}`}>
                    <div className="glass-card rounded-2xl p-6 space-y-6 shadow-xl">
                      <div>
                        <span className="text-[10px] text-shreeji-accent font-semibold uppercase tracking-wider">Service Process</span>
                        <h4 className="font-display font-bold text-base text-white mt-1">Our Strategy Checklist</h4>
                      </div>

                      <ol className="space-y-4">
                        {service.processSteps.map((step, pIdx) => (
                          <li key={pIdx} className="flex items-start space-x-3 text-xs leading-relaxed text-shreeji-text-secondary">
                            <span className="h-5 w-5 rounded bg-white/5 border border-white/5 flex items-center justify-center font-bold text-[10px] text-white shrink-0 mt-0.5">
                              {pIdx + 1}
                            </span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ol>

                      <div className="pt-4 border-t border-white/5">
                        <Link
                          href="/book"
                          className="w-full py-3 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-shreeji-primary to-shreeji-accent hover:opacity-95 text-center flex items-center justify-center space-x-1.5"
                        >
                          <Calendar className="h-4 w-4" />
                          <span>Get {service.title} Strategy</span>
                        </Link>
                      </div>
                    </div>
                  </div>

                </div>
              </section>
            );
          })}
        </div>

      </div>
    </div>
  );
}
