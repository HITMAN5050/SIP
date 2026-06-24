"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, MessageSquare, Clock, Send, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
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
        
        {/* Header Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-shreeji-primary/10 border border-shreeji-primary/20">
            <Mail className="h-4 w-4 text-shreeji-accent" />
            <span className="text-xs font-semibold tracking-wider text-shreeji-accent uppercase">Contact</span>
          </div>
          
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-shreeji-text tracking-tight">
            Connect With Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-shreeji-accent to-shreeji-gold">
              Wealth Desk
            </span>
          </h1>
          
          <p className="text-sm sm:text-base text-shreeji-text-secondary leading-relaxed">
            Have questions about your portfolio, SIP mandates, or new tax plans? Let our advisors guide you.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left panel: Info & Details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="glass-card rounded-2xl p-6 md:p-8 space-y-6 shadow-xl">
              <h2 className="font-display font-bold text-lg text-white">Office Coordinates</h2>
              
              <div className="space-y-5 text-sm text-shreeji-text-secondary">
                <div className="flex items-start space-x-3.5">
                  <MapPin className="h-5 w-5 text-shreeji-accent shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-white mb-0.5">Headquarters</h4>
                    <p className="leading-relaxed">
                      315, Western Business Hub, B/h. Trinity Business Park, Green City Road, Pal-Adajan, Surat, Gujarat - 394510
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <Phone className="h-5 w-5 text-shreeji-accent shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-white mb-0.5">Direct Helpdesk</h4>
                    <div className="flex flex-col space-y-1.5 leading-relaxed">
                      <a href="tel:+919979869788" className="hover:text-shreeji-accent transition-colors">
                        +91 99798 69788 (Sanjay Solanki)
                      </a>
                      <a href="tel:+919909002988" className="hover:text-shreeji-accent transition-colors">
                        +91 99090 02988 (Hiren Surati)
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <Mail className="h-5 w-5 text-shreeji-accent shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-white mb-0.5">Email Support</h4>
                    <div className="flex flex-col space-y-1.5 leading-relaxed">
                      <a href="mailto:contact@shreejiconsultants.com" className="hover:text-shreeji-accent transition-colors">
                        contact@shreejiconsultants.com
                      </a>
                      <a href="mailto:shreejiwealthcreator@gmail.com" className="hover:text-shreeji-accent transition-colors">
                        shreejiwealthcreator@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <Clock className="h-5 w-5 text-shreeji-accent shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-white mb-0.5">Working Hours</h4>
                    <p className="leading-relaxed">Monday - Friday: 9:30 AM to 6:30 PM (IST)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Instant Messaging Help */}
            <div className="glass-card rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl border-emerald-500/20 bg-emerald-950/5">
              <div className="space-y-1 text-center sm:text-left">
                <h3 className="font-display font-semibold text-sm text-white">Need an Instant Response?</h3>
                <p className="text-xs text-shreeji-text-secondary">Ping our chat support on WhatsApp for quick SIP queries.</p>
              </div>
              <a
                href="https://wa.me/919979869788"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors flex items-center space-x-1.5"
              >
                <MessageSquare className="h-4.5 w-4.5" />
                <span>Chat Now</span>
              </a>
            </div>
          </div>

          {/* Right panel: Contact Form */}
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
                <h3 className="font-display font-bold text-xl text-white">Inquiry Received</h3>
                <p className="text-xs text-shreeji-text-secondary max-w-sm leading-relaxed">
                  Thank you for reaching out to Shreeji Wealth. A financial consultant from our Surat office will review your details and call you back within 2 business hours.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="px-6 py-2.5 rounded-full text-xs font-semibold text-shreeji-accent border border-shreeji-accent/30 hover:bg-white/5 transition-colors"
                >
                  Send another inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-display font-bold text-lg text-white mb-2">Send an Inquiry</h3>
                
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
                  
                  <div className="space-y-1.5">
                    <label className="text-xs text-shreeji-text-secondary font-medium">Subject</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Retirement planning help"
                      className="w-full px-4 py-2.5 rounded-lg text-xs bg-white/5 border border-shreeji-border text-white placeholder-shreeji-text-secondary focus:outline-none focus:border-shreeji-accent transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs text-shreeji-text-secondary font-medium">Your Message *</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your current financial queries, goals, or investment amounts..."
                    className="w-full px-4 py-3 rounded-lg text-xs bg-white/5 border border-shreeji-border text-white placeholder-shreeji-text-secondary focus:outline-none focus:border-shreeji-accent transition-colors resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full py-3 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-shreeji-primary to-shreeji-accent shadow-md shadow-shreeji-accent/15 hover:opacity-95 disabled:opacity-50 text-center flex items-center justify-center space-x-2"
                  >
                    <span>{status === "loading" ? "Submitting Inquiry..." : "Submit Inquiry Details"}</span>
                    <Send className="h-3.5 w-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

        {/* Mock Map Map Showcase */}
        <div className="mt-20 glass-card rounded-2xl p-6 relative overflow-hidden shadow-2xl">
          <h3 className="font-display font-bold text-base text-white mb-4">Location Finder</h3>
          <div className="aspect-video sm:aspect-[21/9] w-full bg-slate-950 rounded-xl relative border border-white/5 overflow-hidden">
            {/* Visual Grid Representing Interactive maps */}
            <div className="absolute inset-0 bg-slate-950 opacity-90" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]" />
            <div className="absolute inset-0 flex items-center justify-center text-center">
              <div className="space-y-4">
                <div className="h-10 w-10 rounded-full bg-shreeji-accent/20 border border-shreeji-accent flex items-center justify-center mx-auto text-shreeji-accent animate-pulse">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Shreeji Wealth & Consultants</h4>
                  <p className="text-xs text-shreeji-text-secondary mt-1">Pal-Adajan, Surat, Gujarat, India</p>
                </div>
                <div className="pt-2">
                  <a
                    href="https://maps.google.com/maps?q=315,+Western+Business+Hub,+Green+City+Road,+Pal-Adajan,+Surat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full text-[10px] font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
