"use client";
import Link from "next/link";

interface ComingSoonProps {
  moduleName: string;
}

export default function ComingSoon({ moduleName }: ComingSoonProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-6">
      <div className="w-full max-w-2xl bg-zinc-900/50 border border-white/10 rounded-lg overflow-hidden shadow-2xl">
        {/* Terminal Header */}
        <div className="bg-white/5 border-b border-white/10 px-4 py-2 flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
          </div>
          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest ml-2">
            System Terminal // {moduleName}
          </span>
        </div>

        {/* Terminal Body */}
        <div className="p-6 font-mono text-sm sm:text-base">
          <div className="flex flex-col gap-2">
            <p className="text-zinc-500">$ status check --module {moduleName.toLowerCase()}</p>
            <p className="text-blue-400 italic">... Fetching deployment status</p>
            
            <div className="mt-4 space-y-1">
              <p className="text-white flex items-center gap-2">
                <span className="text-green-500">[✓]</span> Infrastructure: Provisioned
              </p>
              <p className="text-white flex items-center gap-2">
                <span className="text-green-500">[✓]</span> Database: Connected
              </p>
              <p className="text-white flex items-center gap-2">
                <span className="text-yellow-500">[!]</span> Content: <span className="animate-pulse">Building...</span>
              </p>
            </div>

            <div className="mt-8">
              <h1 className="text-2xl sm:text-3xl font-bold text-white uppercase tracking-tighter">
                {moduleName} Coming Soon
              </h1>
              <p className="text-zinc-500 mt-2 text-xs sm:text-sm">
                This module is currently in the CI/CD pipeline. Check back shortly for updates...
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5 flex flex-wrap gap-4">
              <Link href="/" className="text-xs text-blue-500 hover:text-blue-400 transition-colors underline underline-offset-4">
                $ return --to home
              </Link>
              <Link href="/contact" className="text-xs text-zinc-400 hover:text-white transition-colors">
                $ open --contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}