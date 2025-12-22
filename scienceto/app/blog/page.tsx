import { getSortedPostsData } from "../../lib/markdown";
import BlogRegistryClient from "../components/BlogRegistryClient";

export default async function BlogPage() {
  const allPosts = getSortedPostsData();

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 min-h-screen">
      <header className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          {/* <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></div> */}
          {/* <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.3em]">
            Archive Registry
          </span> */}
        </div>
        <h1 className="text-4xl font-bold text-white tracking-tight sm:text-5xl mb-4">
          Technical <span className="text-blue-500 italic">Blog</span>
        </h1>
        {/* <p className="text-zinc-400 max-w-2xl text-lg">
          Documentation of architecture, research logs, and systems logic.
        </p> */}
      </header>

      <BlogRegistryClient initialPosts={allPosts} />
    </div>
  );
}