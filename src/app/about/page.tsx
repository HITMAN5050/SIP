"use client";

import React from "react";
import { Award, Compass, HeartHandshake, CheckCircle2, Phone, Check } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const milestones = [
    {
      year: "2008",
      title: "Our Journey Began",
      desc: "Began our journey in the mutual fund industry as investors. Experienced firsthand the power of disciplined, long-term investing and witnessed how mutual funds create significant wealth."
    },
    {
      year: "2009",
      title: "NJ Wealth Partnership",
      desc: "Inspired by our own success, we obtained our Mutual Fund Distributor Code and partnered with NJ India Invest Pvt. Ltd., one of India's leading financial distribution platforms, to offer structured wealth solutions."
    },
    {
      year: "2015",
      title: "Complete Wealth & Protection Desk",
      desc: "Recognized that wealth growth must be paired with protection. Expanded our services to include Life, Health, and General Insurance, helping clients safeguard their families and assets against unforeseen risks."
    },
    {
      year: "Present",
      title: "Trusted Financial Partner",
      desc: "Proudly serving individuals, families, and business owners across India. Committed to goal-based financial planning, transparent advice, and lifelong relationships."
    }
  ];

  return (
    <div className="relative min-h-screen py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
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
            Your Trusted Partner in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-shreeji-accent to-shreeji-gold">
              Wealth Creation & Protection
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-shreeji-text-secondary leading-relaxed"
          >
            &ldquo;Create Wealth. Protect Wealth. Preserve Wealth.&rdquo;
          </motion.p>
        </div>

        {/* Co-Founders & Story Section */}
        <div className="mb-24">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-white text-center mb-12">
            Meet Our Co-Founders & Partners
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto mb-12 items-stretch">
            {/* Partners Full Picture */}
            <div className="lg:col-span-5 flex items-center justify-center relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-shreeji-primary to-shreeji-accent rounded-2xl blur-xl opacity-20" />
              <div className="relative rounded-2xl overflow-hidden border border-shreeji-border shadow-2xl bg-slate-900 w-full">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/Mamu.jpeg"
                  alt="Sanjay Solanki & Hiren Surati - Co-Founders of Shreeji Wealth"
                  className="w-full h-auto object-contain transition-all duration-500"
                />
              </div>
            </div>

            {/* Philosophy, Story & Contact Details */}
            <div className="lg:col-span-7 glass-card rounded-2xl p-8 space-y-6 text-left shadow-2xl border border-shreeji-border flex flex-col justify-between">
              <div>
                <h3 className="font-display font-bold text-xl text-white mb-4">Our Story & Philosophy</h3>
                <div className="space-y-4 text-sm text-shreeji-text-secondary leading-relaxed">
                  <p>
                    Our journey in the financial services industry began in 2008 as investors. Over the years, we experienced firsthand the power of disciplined, long-term wealth creation. This journey gave us valuable insights into financial markets and reinforced our belief that systematic investing is one of the most effective ways to achieve financial independence.
                  </p>
                  <p>
                    Motivated by our own investment success and a passion for helping others secure their financial future, we became an authorized Mutual Fund Distributor associated with NJ India Invest Pvt. Ltd. (NJ Wealth), one of India&apos;s leading financial distribution organizations.
                  </p>
                  <p>
                    As we built long-lasting relationships with our clients, we recognized that financial well-being is not just about growing wealth—it is also about protecting it. To provide complete financial solutions under one roof, we expanded our services to include Life Insurance, Health Insurance, and General Insurance, helping our clients safeguard themselves, their families, and their valuable assets against unforeseen risks.
                  </p>
                </div>
              </div>

              <div className="h-[1px] bg-white/10 my-2" />

              {/* Direct Co-founder Contact details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Sanjay Solanki */}
                <div className="flex items-start space-x-3">
                  <div className="h-9 w-9 rounded-full bg-shreeji-primary/10 border border-shreeji-primary/20 flex items-center justify-center text-shreeji-accent shrink-0">
                    <span className="font-bold text-xs font-display">SS</span>
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-sm text-white">Sanjay Solanki</h4>
                    <p className="text-[10px] text-shreeji-gold uppercase tracking-wider font-semibold">Co-Founder & Partner</p>
                    <div className="flex items-center space-x-1.5 text-xs text-shreeji-text-secondary mt-1">
                      <Phone className="h-3 w-3 text-shreeji-accent shrink-0" />
                      <a href="tel:+919979869788" className="hover:text-shreeji-accent transition-colors">+91 99798 69788</a>
                    </div>
                  </div>
                </div>

                {/* Hiren Surati */}
                <div className="flex items-start space-x-3">
                  <div className="h-9 w-9 rounded-full bg-shreeji-gold/10 border border-shreeji-gold/20 flex items-center justify-center text-shreeji-gold shrink-0">
                    <span className="font-bold text-xs font-display">HS</span>
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-sm text-white">Hiren Surati</h4>
                    <p className="text-[10px] text-shreeji-gold uppercase tracking-wider font-semibold">Co-Founder & Partner</p>
                    <div className="flex items-center space-x-1.5 text-xs text-shreeji-text-secondary mt-1">
                      <Phone className="h-3 w-3 text-shreeji-accent shrink-0" />
                      <a href="tel:+919909002988" className="hover:text-shreeji-accent transition-colors">+91 99090 02988</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision, Mission, Values & Promise */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {/* Our Vision */}
          <div className="glass-card rounded-2xl p-8 space-y-4 border border-white/5 shadow-xl">
            <div className="h-10 w-10 rounded-lg bg-shreeji-primary/10 border border-shreeji-primary/20 flex items-center justify-center text-shreeji-accent">
              <Compass className="h-5 w-5" />
            </div>
            <h3 className="font-display font-bold text-lg text-white">Our Vision</h3>
            <p className="text-sm text-shreeji-text-secondary leading-relaxed">
              To become the most trusted financial partner by helping every family achieve financial freedom through smart investments and comprehensive financial protection.
            </p>
          </div>

          {/* Our Promise */}
          <div className="glass-card rounded-2xl p-8 space-y-4 border border-white/5 shadow-xl">
            <div className="h-10 w-10 rounded-lg bg-shreeji-gold/10 border border-shreeji-gold/20 flex items-center justify-center text-shreeji-gold">
              <Award className="h-5 w-5" />
            </div>
            <h3 className="font-display font-bold text-lg text-white">Our Promise</h3>
            <p className="text-sm text-shreeji-text-secondary leading-relaxed font-semibold">
              We don&apos;t just sell financial products&mdash;we build financial futures. By combining investment expertise with comprehensive insurance solutions, we help our clients grow their wealth, protect their loved ones, and achieve their financial dreams with confidence.
            </p>
          </div>

          {/* Our Mission */}
          <div className="glass-card rounded-2xl p-8 space-y-4 border border-white/5 shadow-xl">
            <div className="h-10 w-10 rounded-lg bg-shreeji-primary/10 border border-shreeji-primary/20 flex items-center justify-center text-shreeji-accent">
              <CheckCircle2 className="h-5 w-5" />
            </div>
            <h3 className="font-display font-bold text-lg text-white">Our Mission</h3>
            <ul className="space-y-2 text-sm text-shreeji-text-secondary">
              <li className="flex items-start space-x-2">
                <Check className="h-4.5 w-4.5 text-shreeji-accent shrink-0 mt-0.5" />
                <span>To make investing simple and accessible.</span>
              </li>
              <li className="flex items-start space-x-2">
                <Check className="h-4.5 w-4.5 text-shreeji-accent shrink-0 mt-0.5" />
                <span>To promote financial awareness and disciplined investing.</span>
              </li>
              <li className="flex items-start space-x-2">
                <Check className="h-4.5 w-4.5 text-shreeji-accent shrink-0 mt-0.5" />
                <span>To help clients build, grow, and protect their wealth.</span>
              </li>
              <li className="flex items-start space-x-2">
                <Check className="h-4.5 w-4.5 text-shreeji-accent shrink-0 mt-0.5" />
                <span>To provide honest, transparent, and personalized financial advice.</span>
              </li>
              <li className="flex items-start space-x-2">
                <Check className="h-4.5 w-4.5 text-shreeji-accent shrink-0 mt-0.5" />
                <span>To build lifelong relationships based on trust and integrity.</span>
              </li>
            </ul>
          </div>

          {/* Our Core Values */}
          <div className="glass-card rounded-2xl p-8 space-y-4 border border-white/5 shadow-xl">
            <div className="h-10 w-10 rounded-lg bg-shreeji-gold/10 border border-shreeji-gold/20 flex items-center justify-center text-shreeji-gold">
              <HeartHandshake className="h-5 w-5" />
            </div>
            <h3 className="font-display font-bold text-lg text-white">Our Core Values</h3>
            <div className="grid grid-cols-2 gap-4 text-sm text-shreeji-text-secondary">
              {[
                "Integrity",
                "Trust",
                "Transparency",
                "Commitment",
                "Professionalism",
                "Client First"
              ].map((val, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-shreeji-gold" />
                  <span>{val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quality Statements & Upliftment Mission (Dual Language) */}
        <div className="mb-24 space-y-8">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-white text-center">
            Mission & Quality Commitment
          </h2>
          
          <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
            {/* Upliftment Mission */}
            <div className="glass-card rounded-2xl p-8 space-y-4 border border-shreeji-border shadow-xl">
              <h3 className="font-display font-bold text-lg text-shreeji-accent">Our Dedication</h3>
              <p className="text-sm text-shreeji-text-secondary leading-relaxed font-semibold italic">
                &ldquo;FOR THE UPLIFTMENT OF OUR CLIENT WE WANT TO BE AN ORGANIZATION WHERE WE CAN PROVIDE OUR BEST PROFESSIONAL SERVICES TO OUR CLIENT WITH HIGH ETHICAL VALUES WITH UNBROKEN TRUST AND COMPLETE CONFIDENTIALITY.&rdquo;
              </p>
              <div className="h-[1px] bg-white/10" />
              <p className="text-sm text-shreeji-text-secondary/80 leading-relaxed font-semibold">
                &ldquo;અમારા ગ્રાહકના ઉત્કર્ષ માટે અમે એક એવી સંસ્થા બનવા માંગીએ છીએ કે જ્યાં અમારા ગ્રાહકને અમે ઉચ્ચ નૈતિક મૂલ્યો સાથે અખંડ વિશ્વાસ અને સંપૂર્ણ ગોપનીયતા સાથેની અમારી સર્વશ્રેષ્ઠ વ્યાવસાયિક સેવાઓ પુરી પાડી શકીએ.&rdquo;
              </p>
            </div>

            {/* Quality Statement */}
            <div className="glass-card rounded-2xl p-8 space-y-6 border border-shreeji-border shadow-xl">
              <h3 className="font-display font-bold text-lg text-shreeji-gold">Quality Statement & Commitments</h3>
              
              <div className="space-y-4 text-xs sm:text-sm text-shreeji-text-secondary leading-relaxed">
                <div>
                  <p className="font-semibold text-white">1. Adaptability & Enhancement</p>
                  <p>WE ARE ALWAYS READY TO ENHANCE TO OR CHANGE OUR PROFESSIONAL SERVICES WITH ADVANCED TECHNOLOGY, EXPERTISE AND FUTURE CHANGES.</p>
                  <p className="text-shreeji-text-secondary/70 mt-1">અમે અદતન ટેક્નોલોજી, કુશળતા તેમજ ભવિષ્યમાં આવતાં અવનવા બદલાવ સાથે અમે અમારી વ્યાવસાયિક સેવાઓમાં વધારો કે બદલાવ કરવા હંમેશા તત્પર છીએ.</p>
                </div>
                
                <div className="h-[1px] bg-white/5" />
                
                <div>
                  <p className="font-semibold text-white">2. Compliance & Values</p>
                  <p>WE WILL FULLY ABIDE BY THE PRINCIPLED VALUES AND LAWS ESTABLISHED BY THE GOVERNMENT.</p>
                  <p className="text-shreeji-text-secondary/70 mt-1">અમે સિધ્ધાંતિક મુલ્યો તથા સરકાર દ્વારા પ્રસ્થાપિત કરવામાં આવેલ કાયદાનું સંપૂર્ણ પણે પાલન કરીશું.</p>
                </div>

                <div className="h-[1px] bg-white/5" />

                <div>
                  <p className="font-semibold text-white">3. Customer First & Inclusion</p>
                  <p>WE ARE COMMITTED TO SOLVING EVERY CUSTOMER&apos;S REQUEST OR PROBLEM SATISFACTORILY WITHOUT ANY DISCRIMINATION.</p>
                  <p className="text-shreeji-text-secondary/70 mt-1">અમે દરેક ગ્રાહકો માટે કોઈ પણ જાતના ભેદભાવ વગર સંતોષકારક રીતે તેમની વિનંતી કે સમસ્યાનો ઉકેલ લાવવા માટે કટિબધ્ધ છીએ.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Milestones / Timeline */}
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
