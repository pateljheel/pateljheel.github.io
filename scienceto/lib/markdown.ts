import fs from "fs";
import path from "path";
import matter from "gray-matter";

// Log the path to the console so you can see where it's looking during build
const postsDirectory = path.join(process.cwd(), "content", "posts");
console.log("Looking for posts in:", postsDirectory);

export function getSortedPostsData() {
  // 1. Check if directory exists
  if (!fs.existsSync(postsDirectory)) {
    console.warn("Directory NOT found:", postsDirectory);
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  
  // 2. Filter for .md files only
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const id = fileName.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const matterResult = matter(fileContents);

      return {
        id,
        child: matterResult.data.child === true,
        ...(matterResult.data as { title: string; date: string; summary: string; tags: string[]; externalUrl?: string }),
      };
    });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    id,
    content,
    title: data.title,
    date: data.date,
    tags: data.tags || [],
  };
}