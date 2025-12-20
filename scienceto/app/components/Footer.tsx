"use client";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  
  // Format the path: "/" becomes "Home", "/blog" becomes "Blog"
  const pageName = pathname === "/" 
    ? "Home" 
    : pathname.split('/')[1].charAt(0).toUpperCase() + pathname.split('/')[1].slice(1);

  return (
    <footer className="w-full border-t border-white/5 bg-black/20 backdrop-blur-sm py-4 px-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        
        {/* Left Side: Dynamic Page Name */}
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
          <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 font-mono">
            Location: <span className="text-white">{pageName}</span>
          </span>
        </div>

        {/* Right Side: Copyright/Brand */}
        <div className="text-[10px] tracking-widest text-zinc-500 uppercase font-mono">
          © 2025 ScienceTo // Jheel Patel
        </div>
        
      </div>
    </footer>
  );
}