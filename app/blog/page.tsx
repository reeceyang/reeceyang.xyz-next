import BlogCard from "@/components/BlogCard";
import { getSortedPostsData } from "@/utils/posts";

export default async function Blog() {
  const allPostsData = await getSortedPostsData();
  return (
    <div className="container max-w-5xl m-auto py-12 flex flex-col gap-6">
      <h1 className="text-5xl font-bold">Blog</h1>
      <div className="flex flex-col gap-9">
        {allPostsData.map((blogPost) => (
          <BlogCard blogPost={blogPost} key={blogPost.slug}/>
        ))}
      </div>
    </div>
  );
};