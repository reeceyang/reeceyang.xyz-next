import BlogCard from "@/components/BlogCard";
import { getSortedPostsData } from "@/utils/posts";

export default async function Blog() {
  const allPostsData = await getSortedPostsData();
  return (
    <>
      <h1 className="text-5xl font-bold">Blog</h1>
      <div className="flex flex-col py-6 gap-6">
        {allPostsData.map((blogPost, i) => (
          <BlogCard
            blogPost={blogPost}
            key={blogPost.slug}
            divider={i < allPostsData.length - 1}
          />
        ))}
      </div>
    </>
  );
}
