"use client";
import { useState, useMemo } from "react";
import BlogCard from "./BlogCard";

interface Post {
  id: string;
  title: string;
  summary: string;
  date: string;
  tags: string[];
  externalUrl?: string | null;
  child?: boolean; // Add this line
}

export default function BlogRegistryClient({ initialPosts }: { initialPosts: Post[] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Extract unique tags
  const allTags = useMemo(() => {
    const tags = new Set(initialPosts.flatMap((p) => p.tags || []));
    return Array.from(tags).sort();
  }, [initialPosts]);

  // Multi-select Tag Logic
  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  // Search and Tag Filter Logic
  const filteredPosts = initialPosts.filter((post) => {
    if (post.child === true) return false;
    
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesTags =
      selectedTags.length === 0 ||
      selectedTags.some((tag) => post.tags.includes(tag));

    return matchesSearch && matchesTags;
  });

  return (
    <>
      <div className="space-y-8 mb-12">
        {/* Search Bar - Matching Artifacts Page Look */}
        <div className="relative w-full max-w-xl">
          <input
            type="text"
            placeholder="Search blog..."
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-zinc-900/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-sm text-white focus:border-blue-500/50 transition-all outline-none"
          />
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        {/* Multi-select Tag Cloud - Matching Artifacts Page Look */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold">
              Filter by Topic
            </span>
            {selectedTags.length > 0 && (
              <button
                onClick={() => setSelectedTags([])}
                className="text-[10px] uppercase tracking-widest text-blue-500 hover:text-white transition-colors"
              >
                Reset Filters ({selectedTags.length})
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => {
              const isActive = selectedTags.includes(tag);
              return (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`px-4 py-1.5 rounded-full text-[11px] font-mono border transition-all duration-200 ${
                    isActive
                      ? "bg-blue-500/10 border-blue-500 text-blue-400"
                      : "bg-zinc-900/30 border-white/5 text-zinc-500 hover:border-white/20 hover:text-zinc-300"
                  }`}
                >
                  {tag}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Blog Entry Grid */}
      <div className="grid grid-cols-1 gap-6 max-w-4xl">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <BlogCard
              key={post.id}
              title={post.title}
              summary={post.summary}
              date={post.date}
              tags={post.tags}
              href={post.externalUrl || `/blog/${post.id}`}
              isExternal={!!post.externalUrl}
            />
          ))
        ) : (
          <div className="mt-20 text-center py-20 border border-dashed border-white/5 rounded-3xl">
            <p className="text-zinc-500 font-mono text-sm italic">
              // No journal entries found matching current criteria
            </p>
          </div>
        )}
      </div>
    </>
  );
}