import BlogCard from "@/components/BlogCard";
import { getSortedPostsData } from "@/utils/posts";

export default async function Blog() {
  const allPostsData = await getSortedPostsData();
  return (
    <>
      <h1 className="text-5xl font-bold">Blog</h1>
      <div className="flex flex-col py-6 gap-12">
        {allPostsData.map((blogPost) => (
          <BlogCard blogPost={blogPost} key={blogPost.slug} />
        ))}
      </div>
    </>
  );
}
