"use client";
import Link from "next/link";

interface BlogProps {
  title: string;
  summary: string;
  date: string;
  tags: string[];
  href: string; // Internal path (/blog/post-name) or external URL (https://...)
  isExternal?: boolean;
}

export default function BlogCard({ title, summary, date, tags, href, isExternal }: BlogProps) {
  const Container = isExternal ? "a" : Link;
  const externalProps = isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <Container 
      href={href} 
      {...externalProps}
      className="group flex flex-col p-6 bg-zinc-900/40 border border-blue-500/20 rounded-2xl hover:border-blue-500 transition-all duration-300 shadow-lg shadow-blue-500/5 cursor-pointer"
    >
      {/* Header Info */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
          {date}
        </span>
        {isExternal && (
          <svg className="w-4 h-4 text-zinc-500 group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        )}
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors leading-tight">
        {title}
      </h3>
      
      <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-grow">
        {summary}
      </p>

      {/* Footer Tags */}
      <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
        {tags.map((tag) => (
          <span 
            key={tag} 
            className="text-[10px] font-mono text-blue-400/80 uppercase tracking-wider"
          >
            #{tag}
          </span>
        ))}
      </div>
    </Container>
  );
}