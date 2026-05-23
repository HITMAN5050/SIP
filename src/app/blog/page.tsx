"use client";

import React, { useState } from "react";
import Link from "next/link";
import { blogsData } from "@/data/blogs";
import { Search, Compass, BookOpen, Clock, Calendar, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const categories = ["All", "SIP", "Wealth Planning", "Tax Saving", "Retirement"];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBlogs = blogsData.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="relative min-h-screen py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-shreeji-primary/10 border border-shreeji-primary/20">
            <BookOpen className="h-4 w-4 text-shreeji-accent" />
            <span className="text-xs font-semibold tracking-wider text-shreeji-accent uppercase">Resources</span>
          </div>
          
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-shreeji-text tracking-tight">
            Financial Insights &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-shreeji-accent to-shreeji-gold">
              Knowledge Base
            </span>
          </h1>
          
          <p className="text-sm sm:text-base text-shreeji-text-secondary leading-relaxed">
            Read professional briefings and guides written by our certified advisors on wealth planning, tax-saving, and mutual fund updates.
          </p>
        </div>

        {/* Filter Toolbar */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 border ${
                    isActive
                      ? "bg-shreeji-accent border-shreeji-accent text-white"
                      : "bg-white/5 border-shreeji-border text-shreeji-text-secondary hover:bg-white/10"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search bar */}
          <div className="relative max-w-xs w-full">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-shreeji-text-secondary">
              <Search className="h-4 w-4" />
            </span>
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full text-xs bg-white/5 border border-shreeji-border text-white placeholder-shreeji-text-secondary focus:outline-none focus:border-shreeji-accent transition-colors"
            />
          </div>
        </div>

        {/* Blog Cards Grid */}
        {filteredBlogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((post, idx) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="glass-card rounded-2xl overflow-hidden flex flex-col justify-between shadow-xl"
              >
                {/* Header Image */}
                <div className="aspect-video relative overflow-hidden bg-slate-900 border-b border-shreeji-border">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover grayscale opacity-60 hover:grayscale-0 hover:opacity-85 transition-all duration-500"
                  />
                  <div className="absolute top-3 left-3 px-2 py-0.5 rounded text-[9px] font-bold bg-shreeji-accent text-white tracking-wider uppercase">
                    {post.category}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3 text-[10px] text-shreeji-text-secondary">
                      <span className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{post.date}</span>
                      </span>
                      <span>•</span>
                      <span className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-base text-white hover:text-shreeji-accent transition-colors">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>

                    <p className="text-xs text-shreeji-text-secondary leading-relaxed line-clamp-3">
                      {post.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/5 flex justify-between items-center text-xs">
                    <span className="text-[10px] text-shreeji-text-secondary">By {post.author}</span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-shreeji-accent font-semibold flex items-center space-x-1 hover:text-white transition-colors"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 glass-card rounded-2xl">
            <p className="text-sm text-shreeji-text-secondary">No articles found matching your criteria.</p>
          </div>
        )}

      </div>
    </div>
  );
}
