// https://nextjs.org/learn-pages-router/basics/data-fetching/blog-data
import assert from "assert";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

const postsDirectory = path.join(process.cwd(), "app", "(blog)");

export function getPostData(folderName: string): BlogPost {
  const fullPath = path.join(postsDirectory, folderName, "page.mdx");

  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Combine the data with the id
  return {
    slug: folderName,
    date: matterResult.data.date ?? assert.fail(`${folderName} missing date`),
    title:
      matterResult.data.title ?? assert.fail(`${folderName} missing title`),
    excerpt:
      matterResult.data.excerpt ?? assert.fail(`${folderName} missing excerpt`),
    categories: matterResult.data.categories ?? assert.fail(`${folderName} missing categories`),
    ...matterResult.data,
  };
}

export function getSortedPostsData(): BlogPost[] {
  // Get file names under /posts
  const folderNames = fs.readdirSync(postsDirectory);
  const allPostsData = folderNames
    .filter((folderName) => folderName !== "layout.tsx")
    .map(getPostData);
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}
