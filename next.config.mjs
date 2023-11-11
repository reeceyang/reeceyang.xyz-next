import remarkFrontmatter from "remark-frontmatter";
import nextMDX from "@next/mdx";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";

/** @type {import('next').NextConfig} */
const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    // https://stdaddress.com/posts/2022-11-09-use-front-matter-with-next-js-and-mdx
    remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
  },
});
 
/** @type {import('next').NextConfig} */
export default withMDX({
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
});
 