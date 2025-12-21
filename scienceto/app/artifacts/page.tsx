"use client";
import { useState, useMemo, useRef, useEffect } from "react";
import ArtifactCard from "../components/ArtifactCard";

const artifacts = [
  {
    title: "UniCom: University Community Platform",
    description: "Automated multi-region AWS deployment pipeline using Terraform and GitHub Actions.",
    image: "/artifacts/infra.jpg",
    githubUrl: "https://github.com/pateljheel/infra",
    tech: ["Terraform", "AWS", "GitHub Actions", "Containerization"]
  },
  {
    title: "Resilient Microservices",
    description: "A distributed system architecture using K8s to handle high-concurrency event processing.",
    image: "/artifacts/microservices.jpg",
    githubUrl: "https://github.com/pateljheel/microservices",
    tech: ["Kubernetes", "Docker", "Node.js", "Redis"]
  },
  {
    title: "DataStream API",
    description: "Real-time data ingestion service built with Go and Apache Kafka for high-throughput messaging.",
    image: "/artifacts/datastream.jpg",
    githubUrl: "https://github.com/pateljheel/datastream",
    tech: ["Kafka", "PostgreSQL", "Docker"]
  }
];

export default function ArtifactsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // 1. Extract and sort all unique tech tags
  const allTags = useMemo(() => {
    const tags = new Set(artifacts.flatMap(p => p.tech));
    return Array.from(tags).sort();
  }, []);

  // 2. Handle Multi-select Logic
  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag) 
        : [...prev, tag]
    );
  };

  // 3. Filtering Logic (Search + Multi-tag OR match)
  const filteredArtifacts = artifacts.filter((artifact) => {
    const matchesSearch = 
      artifact.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      artifact.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesTags = 
      selectedTags.length === 0 || 
      selectedTags.some(tag => artifact.tech.includes(tag));

    return matchesSearch && matchesTags;
  });

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 min-h-screen">
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-white tracking-tight sm:text-5xl mb-4">
          Systems <span className="text-blue-500">&</span> Architecture
        </h1>
        
        {/* Search Bar */}
        <div className="relative w-full max-w-xl mt-8">
          <input
            type="text"
            placeholder="Search systems, logic, or infrastructure..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-zinc-900/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-sm text-white focus:border-blue-500/50 transition-all outline-none"
          />
          <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        {/* Multi-select Tag Cloud */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold">
              Filter by Technology
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
      </header>

      {/* Artifacts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredArtifacts.map((artifact) => (
          <ArtifactCard key={artifact.title} {...artifact} />
        ))}
      </div>

      {filteredArtifacts.length === 0 && (
        <div className="mt-20 text-center py-20 border border-dashed border-white/5 rounded-3xl">
          <p className="text-zinc-500 font-mono text-sm italic">
            // No deployments found matching current criteria
          </p>
        </div>
      )}
    </div>
  );
}