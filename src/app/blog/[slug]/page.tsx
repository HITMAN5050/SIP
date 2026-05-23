import React from "react";
import { blogsData } from "@/data/blogs";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, User } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogsData.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="relative min-h-screen py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center space-x-1.5 text-xs font-semibold text-shreeji-accent hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft className="h-4 w-4 transform group-hover:-translate-x-0.5 transition-transform" />
          <span>Back to Articles</span>
        </Link>

        {/* Metadata Header */}
        <div className="space-y-6 mb-10">
          <span className="inline-block px-2.5 py-0.5 rounded text-[9px] font-bold bg-shreeji-accent text-white tracking-wider uppercase">
            {post.category}
          </span>
          
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-shreeji-text-secondary border-y border-shreeji-border/60 py-4">
            <div className="flex items-center space-x-1.5">
              <User className="h-4 w-4 text-shreeji-accent" />
              <span>{post.author} ({post.authorRole})</span>
            </div>
            <span className="hidden sm:inline text-white/10">|</span>
            <div className="flex items-center space-x-1.5">
              <Calendar className="h-4 w-4 text-shreeji-accent" />
              <span>{post.date}</span>
            </div>
            <span className="hidden sm:inline text-white/10">|</span>
            <div className="flex items-center space-x-1.5">
              <Clock className="h-4 w-4 text-shreeji-accent" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>

        {/* Hero image visual */}
        <div className="aspect-video w-full rounded-2xl overflow-hidden bg-slate-900 border border-shreeji-border mb-12 shadow-xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-full object-cover grayscale opacity-75"
          />
        </div>

        {/* Render HTML content of the article */}
        <div
          className="prose prose-invert max-w-none text-sm sm:text-base leading-relaxed text-shreeji-text-secondary space-y-6
            prose-headings:font-display prose-headings:font-bold prose-headings:text-white prose-headings:tracking-tight
            prose-h3:text-lg prose-h3:mt-8 prose-h3:mb-3
            prose-ul:list-disc prose-ul:list-inside prose-ul:space-y-2
            prose-ol:list-decimal prose-ol:list-inside prose-ol:space-y-2
            prose-strong:text-white
            prose-table:w-full prose-table:border-collapse prose-table:my-6
            prose-th:py-2 prose-th:border-b prose-th:border-shreeji-border prose-th:text-white prose-th:font-semibold
            prose-td:py-2.5 prose-td:border-b prose-td:border-shreeji-border/40
          "
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Closing Consultation CTA */}
        <div className="mt-16 p-8 glass-card rounded-2xl text-center space-y-4">
          <h4 className="font-display font-bold text-lg text-white">Need Personalized Portfolio Advisory?</h4>
          <p className="text-xs text-shreeji-text-secondary max-w-md mx-auto leading-relaxed">
            The advice in this article is general. Schedule a free goal-mapping brief with our certified advisory desk to map out your own targets.
          </p>
          <div className="pt-2">
            <Link
              href="/book"
              className="inline-flex items-center space-x-1.5 px-6 py-2.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-shreeji-primary to-shreeji-accent hover:opacity-95 shadow-md"
            >
              <span>Schedule Free Advisory Briefing</span>
            </Link>
          </div>
        </div>

      </div>
    </article>
  );
}
