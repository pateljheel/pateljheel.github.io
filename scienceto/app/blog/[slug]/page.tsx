import { getPostData, getSortedPostsData } from "../../../lib/markdown";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({ slug: post.id }));
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostData(slug);

  if (!post) notFound();

  return (
    <article className="max-w-3xl mx-auto px-6 py-20 min-h-screen">
      <header className="mb-12 border-b border-white/10 pb-10">
        <time className="text-blue-500 font-mono text-sm tracking-[0.2em] uppercase">
          {post.date}
        </time>
        <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 tracking-tight leading-tight">
          {post.title}
        </h1>
        <div className="flex gap-2 mt-6">
          {/* Add string type here to resolve the 'any' error */}
          {post.tags.map((tag: string) => (
            <span
              key={tag}
              className="text-[10px] font-mono text-zinc-500 border border-white/10 px-2 py-1 rounded"
            >
              #{tag}
            </span>
          ))}
        </div>
      </header>

      <div className="prose prose-invert prose-blue max-w-none prose-headings:text-white prose-strong:text-white prose-code:text-blue-400">
        <ReactMarkdown remarkPlugins={[remarkGfm, remarkMath]} rehypePlugins={[rehypeKatex]}>
          {post.content}
        </ReactMarkdown>
      </div>
    </article>
  );
}