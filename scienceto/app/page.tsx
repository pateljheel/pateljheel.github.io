import Link from "next/link";

export default function HomePage() {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      {/* Background Decor - Subtle Grid for that "Engineering" feel */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#3b82f6] to-[#9333ea] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
      </div>

      {/* Hero Section */}
      <section className="mx-auto max-w-2xl py-20 sm:py-32">
        <div className="text-center">
          <div className="mb-8 flex justify-center">
            <Link
              href="/blog/pnpnature"
              className="relative rounded-full px-3 py-1 text-sm leading-6 text-zinc-400 ring-1 ring-white/10 hover:ring-white/20 hover:bg-white/5 transition-all duration-300 flex items-center gap-2 group"
            >
              <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
              Latest Post:
              <span className="text-blue-500 font-semibold italic group-hover:text-blue-400">
                Computational Intractability & Natural Processes
              </span>
              <svg
                className="w-3 h-3 text-zinc-500 group-hover:translate-x-0.5 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Bridging the gap between <span className="text-blue-500 underline decoration-blue-500/30 underline-offset-8">software</span> and <span className="text-blue-500 italic">infra</span>.
          </h1>
          <p className="mt-6 text-lg leading-8 text-zinc-400 max-w-xl mx-auto">
            I&apos;m Jheel Patel. I build systems where code meets cloud.
            <strong> Jheel Space</strong> is a collection of my notes on architecting
            scalable software and resilient infrastructure.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/artifacts" className="rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-zinc-200">
              View artifacts
            </Link>
            <Link href="/blog" className="text-sm font-semibold leading-6 text-white">
              Read Blog <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="mx-auto max-w-5xl py-24 border-t border-white/5">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
          {/* Left: Text */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Engineering for the future of the Cloud</h2>
            <p className="mt-6 text-lg text-zinc-400">
              My approach is guided by <span className="text-blue-500 font-bold border-b-2 border-blue-500 pb-0.5">Occam’s Razor</span>:
              I believe the simplest solution is usually the most resilient. I translate complex system logic into robust,
              production-ready environments with a focus on the <span className="text-white font-semibold italic">5 pillars of the Well-Architected Framework</span>.
            </p>
            <div className="mt-8 flex gap-4">
              <div className="flex flex-col border-l-2 border-blue-500 pl-4">
                <span className="text-2xl font-bold text-white">3+</span>
                <span className="text-sm text-zinc-500 uppercase tracking-widest">Years Experience</span>
              </div>
              <div className="flex flex-col border-l-2 border-blue-500 pl-4">
                <span className="text-2xl font-bold text-white">12+</span>
                <span className="text-sm text-zinc-500 uppercase tracking-widest">Cloud Deployments & Migrations</span>
              </div>
            </div>
          </div>

          {/* Right: Feature Cards (The "Science" part) */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
              <div className="text-blue-500 mb-2">✦</div>
              <h3 className="font-semibold text-white">Architecture</h3>
              <p className="text-sm text-zinc-500 mt-2">Designing distributed systems that don't just work, but scale gracefully.</p>
            </div>
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
              <div className="text-blue-500 mb-2">✦</div>
              <h3 className="font-semibold text-white">DevOps</h3>
              <p className="text-sm text-zinc-500 mt-2">Automating everything to ensure consistent, reliable software delivery.</p>
            </div>
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl sm:col-span-2">
              <div className="text-blue-500 mb-2">✦</div>
              <h3 className="font-semibold text-white">Cloud Engineering</h3>
              <p className="text-sm text-zinc-500 mt-2">Specializing in AWS, infrastructure as code (Terraform), and containerization (Docker/K8s).</p>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="mx-auto max-w-5xl py-24 border-t border-white/5">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-white">Professional Credentials</h2>
          <p className="text-zinc-400 mt-2">Validated history of technical expertise and cloud architecture.</p>
        </div>

        {/* --- ACTIVE --- */}
        <div className="space-y-6 mb-16">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <h3 className="text-xs font-mono tracking-[0.3em] text-zinc-500 uppercase">Active Certifications</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Active Card 1 */}
            <Link
              href="https://www.credly.com/badges/f2eddbfc-b3cb-42a1-9b48-1a6672a69376/public_url"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="group flex items-center gap-6 p-5 bg-zinc-900/40 border border-white/5 rounded-2xl hover:border-blue-500/30 transition-all">
                <div className="w-14 h-14 bg-blue-600/10 rounded-xl flex items-center justify-center border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                  <img src="/icons/aws-saa.png" alt="AWS" className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-white font-semibold group-hover:text-blue-400 transition-colors">AWS Solutions Architect</h4>
                  <p className="text-xs text-zinc-500 font-mono italic">Associate // SAA-C03</p>
                </div>
              </div>
            </Link>

            {/* Active Card 2 */}
            <Link
              href="https://www.credly.com/badges/01ea60f2-92b6-4875-9532-b66a99d8186f/public_url"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="group flex items-center gap-6 p-5 bg-zinc-900/40 border border-white/5 rounded-2xl hover:border-blue-500/30 transition-all">
                <div className="w-14 h-14 bg-zinc-800/40 rounded-xl flex items-center justify-center border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.03)]">
                  <img src="/icons/ckad.png" alt="CKAD" className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-white font-semibold group-hover:text-blue-400 transition-colors">Kubernetes Application Developer</h4>
                  <p className="text-xs text-zinc-500 font-mono italic">CNCF // CKAD</p>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* --- INACTIVE / LEGACY --- */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 mb-6 opacity-50">
            <div className="w-2 h-2 rounded-full bg-zinc-600"></div>
            <h3 className="text-xs font-mono tracking-[0.3em] text-zinc-500 uppercase">Legacy / Expired</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Inactive Card 1 */}
            <Link
              href="https://www.credly.com/badges/859e4a91-1b07-4feb-8064-f9e1aab107c8/public_url"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center gap-4 p-4 bg-zinc-900/10 border border-white/5 rounded-xl grayscale opacity-60 hover:opacity-100 transition-opacity">
                <div className="w-10 h-10 bg-zinc-900 rounded-lg flex items-center justify-center border border-white/5">
                  <img src="/icons/gcp-pca.png" alt="GCP PCA" className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-sm text-zinc-400 font-medium decoration-zinc-700">Google Cloud Professional Cloud Architect</h4>
                  <p className="text-[10px] text-zinc-600 font-mono">Issued 2021 • Expired</p>
                </div>
              </div>
            </Link>

            {/* Inactive Card 2 */}
            <Link
              href="https://www.credly.com/badges/4e62d23e-abf8-4585-89b6-0a0e087f66f2/public_url"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center gap-4 p-4 bg-zinc-900/10 border border-white/5 rounded-xl grayscale opacity-60 hover:opacity-100 transition-opacity">
                <div className="w-10 h-10 bg-zinc-900 rounded-lg flex items-center justify-center border border-white/5">
                  <img src="/icons/gcp-ace.png" alt="GCP ACE" className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-sm text-zinc-400 font-medium">Google Cloud Associate Cloud Engineer</h4>
                  <p className="text-[10px] text-zinc-600 font-mono">Issued 2021 • Expired</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}