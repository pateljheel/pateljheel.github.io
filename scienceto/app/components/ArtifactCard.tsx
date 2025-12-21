"use client";
import Link from "next/link";

interface ArtifactProps {
  title: string;
  description: string;
  image: string;
  githubUrl: string;
  blogUrl?: string;
  tech: string[];
}

export default function ArtifactCard({ title, description, image, githubUrl, blogUrl, tech }: ArtifactProps) {
  return (
    <div className="group flex flex-col h-full bg-zinc-900/40 border border-blue-500/20 rounded-2xl overflow-hidden hover:border-blue-500 transition-all duration-300 shadow-lg shadow-blue-500/5">
      {/* Image Container - Removed padding and kept background dark */}
      <div className="aspect-video w-full overflow-hidden bg-zinc-950 flex items-center justify-center border-b border-white/5">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
        />
      </div>

      {/* Content Container */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4 gap-4">
          <h3 className="text-xl font-bold text-white tracking-tight leading-tight group-hover:text-blue-400 transition-colors">
            {title}
          </h3>
          
          <div className="flex items-center gap-3 pt-1">
            {blogUrl && (
              <Link 
                href={blogUrl} 
                target="_blank"
                className="text-zinc-500 hover:text-blue-400 transition-colors"
                title="Read Technical Article"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </Link>
            )}

            <Link 
              href={githubUrl} 
              target="_blank" 
              className="text-zinc-500 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </Link>
          </div>
        </div>

        <p className="text-zinc-400 text-sm leading-relaxed mb-6">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {tech.map((item) => (
            <span 
              key={item} 
              className="px-2 py-0.5 bg-blue-500/10 border border-blue-500/30 text-blue-400 text-[10px] font-mono rounded tracking-wider"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}