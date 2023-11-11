import Link from "next/link";

export default function BlogCard({blogPost}:{blogPost: BlogPost}) {
  return (
    <Link href={`/${blogPost.slug}`}>
      <div className="card shadow-xl bg-base-200">
        <div className="card-body">
          <div className="flex flex-row">
            <h2 className="card-title">{blogPost.title}</h2>
            <span className="mt-auto ml-auto">
              {new Date(blogPost.date).toLocaleDateString()}
            </span>
          </div>
          <p className="line-clamp-2">{blogPost.excerpt}</p>
          <div className="card-actions justify-end">
            {blogPost.categories.map(category => 
            <div className="badge badge-outline" key={`${blogPost.slug} ${category}`}>{category}</div>
)}
          </div>
        </div>
      </div>
    </Link>
  );
}