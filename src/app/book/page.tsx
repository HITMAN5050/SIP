"use client";

import React, { useState } from "react";
import { Calendar, Compass, ShieldCheck, CheckCircle2, User, Award, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function BookConsultation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    targetSize: "5L-15L",
    primaryGoal: "sip",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please fill in all required fields.");
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="relative min-h-screen py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-shreeji-primary/10 border border-shreeji-primary/20">
            <Calendar className="h-4 w-4 text-shreeji-accent" />
            <span className="text-xs font-semibold tracking-wider text-shreeji-accent uppercase">Advisory</span>
          </div>
          
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-shreeji-text tracking-tight">
            Schedule Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-shreeji-accent to-shreeji-gold">
              Financial Consultation
            </span>
          </h1>
          
          <p className="text-sm sm:text-base text-shreeji-text-secondary leading-relaxed">
            Take the first step toward structured compounding. Arrange a private, complimentary briefing session with our advisory desk.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left panel: Info & Values */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="glass-card rounded-2xl p-6 md:p-8 space-y-6 shadow-xl">
              <h2 className="font-display font-bold text-lg text-white">What to Expect?</h2>
              
              <div className="space-y-6 text-sm text-shreeji-text-secondary">
                <div className="flex items-start space-x-3.5">
                  <div className="h-7 w-7 rounded-full bg-shreeji-primary/15 flex items-center justify-center text-shreeji-accent shrink-0 mt-0.5">
                    <User className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-0.5">1-on-1 Confidential Call</h4>
                    <p className="text-xs leading-relaxed">A dedicated 20-minute audio briefing directly with a senior advisor. No automated bot screens.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="h-7 w-7 rounded-full bg-shreeji-primary/15 flex items-center justify-center text-shreeji-accent shrink-0 mt-0.5">
                    <Compass className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-0.5">Goal Allocation Diagnostics</h4>
                    <p className="text-xs leading-relaxed">We will evaluate your retirement timelines and children&apos;s milestones to project inflation-proof gaps.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="h-7 w-7 rounded-full bg-shreeji-primary/15 flex items-center justify-center text-shreeji-accent shrink-0 mt-0.5">
                    <Award className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-0.5">Custom Proposal Plan</h4>
                    <p className="text-xs leading-relaxed">Receive a custom PDF recommendation list mapping fund distributions, assets allocation ratios, and SIP options.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Shield Check Trust Factor */}
            <div className="glass-card rounded-2xl p-6 flex items-start space-x-3 shadow-xl border-shreeji-primary/20">
              <ShieldCheck className="h-6 w-6 text-shreeji-accent shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Secured Consultation</h4>
                <p className="text-[11px] text-shreeji-text-secondary leading-relaxed">
                  Your information is protected under corporate encryption standards. Shreeji Wealth will never share your personal data with third-party callers.
                </p>
              </div>
            </div>
          </div>

          {/* Right panel: Form */}
          <div className="lg:col-span-7 glass-card rounded-2xl p-6 md:p-8 shadow-xl">
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-16 space-y-4"
              >
                <div className="h-12 w-12 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h3 className="font-display font-bold text-xl text-white">Consultation Booked</h3>
                <p className="text-xs text-shreeji-text-secondary max-w-sm leading-relaxed">
                  Excellent! Your briefing request has been processed. A coordinator from our Surat wealth desk will text or call you to schedule a calendar date and time.
                </p>
                <div className="flex items-center space-x-2 text-[10px] text-shreeji-gold bg-white/5 border border-white/5 px-3 py-1.5 rounded-lg">
                  <Clock className="h-3.5 w-3.5" />
                  <span>Call back expected within: 2 hours</span>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-display font-bold text-lg text-white mb-2">Advisory Intake Form</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs text-shreeji-text-secondary font-medium">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter full name"
                      className="w-full px-4 py-2.5 rounded-lg text-xs bg-white/5 border border-shreeji-border text-white placeholder-shreeji-text-secondary focus:outline-none focus:border-shreeji-accent transition-colors"
                    />
                  </div>
                  
                  <div className="space-y-1.5">
                    <label className="text-xs text-shreeji-text-secondary font-medium">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +91 99798 69788"
                      className="w-full px-4 py-2.5 rounded-lg text-xs bg-white/5 border border-shreeji-border text-white placeholder-shreeji-text-secondary focus:outline-none focus:border-shreeji-accent transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs text-shreeji-text-secondary font-medium">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. name@company.com"
                      className="w-full px-4 py-2.5 rounded-lg text-xs bg-white/5 border border-shreeji-border text-white placeholder-shreeji-text-secondary focus:outline-none focus:border-shreeji-accent transition-colors"
                    />
                  </div>
                  
                  {/* Target wealth size selection */}
                  <div className="space-y-1.5">
                    <label className="text-xs text-shreeji-text-secondary font-medium">Target Portfolio size</label>
                    <select
                      value={formData.targetSize}
                      onChange={(e) => setFormData({ ...formData, targetSize: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg text-xs bg-white/5 border border-shreeji-border text-shreeji-text-secondary focus:outline-none focus:border-shreeji-accent transition-colors"
                    >
                      <option value="under-5L" className="bg-slate-900 text-white">Under ₹5 Lakhs</option>
                      <option value="5L-15L" className="bg-slate-900 text-white">₹5 Lakhs - ₹15 Lakhs</option>
                      <option value="15L-50L" className="bg-slate-900 text-white">₹15 Lakhs - ₹50 Lakhs</option>
                      <option value="above-50L" className="bg-slate-900 text-white">Above ₹50 Lakhs (HNI)</option>
                    </select>
                  </div>
                </div>

                {/* Investment goals selection */}
                <div className="space-y-1.5">
                  <label className="text-xs text-shreeji-text-secondary font-medium">Primary Investment Goal</label>
                  <select
                    value={formData.primaryGoal}
                    onChange={(e) => setFormData({ ...formData, primaryGoal: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg text-xs bg-white/5 border border-shreeji-border text-shreeji-text-secondary focus:outline-none focus:border-shreeji-accent transition-colors"
                  >
                    <option value="sip" className="bg-slate-900 text-white">Monthly SIP Planning</option>
                    <option value="mutual-funds" className="bg-slate-900 text-white">Lump-sum Mutual Funds</option>
                    <option value="retirement" className="bg-slate-900 text-white">Retirement Planning & SWP</option>
                    <option value="child-education" className="bg-slate-900 text-white">Child Education Plan</option>
                    <option value="tax" className="bg-slate-900 text-white">ELSS / NPS Tax Optimization</option>
                    <option value="other" className="bg-slate-900 text-white">General Portfolio Review</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs text-shreeji-text-secondary font-medium">Brief notes (Optional)</label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Mention specific assets or milestones you would like to map..."
                    className="w-full px-4 py-3 rounded-lg text-xs bg-white/5 border border-shreeji-border text-white placeholder-shreeji-text-secondary focus:outline-none focus:border-shreeji-accent transition-colors resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full py-3 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-shreeji-primary to-shreeji-accent shadow-md shadow-shreeji-accent/15 hover:opacity-95 disabled:opacity-50 text-center flex items-center justify-center space-x-2"
                  >
                    <span>{status === "loading" ? "Scheduling Briefing..." : "Confirm Consultation Booking"}</span>
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
