import Link from "next/link";
import StyledCard from "./StyledCard";

export default function BlogCard({ blogPost }: { blogPost: BlogPost }) {
  return (
    <Link href={`/${blogPost.slug}`}>
      <StyledCard>
        <div className="card-body">
          <div className="flex flex-row">
            <h2 className="card-title">{blogPost.title}</h2>
            <span className="mt-auto ml-auto">
              {new Date(blogPost.date).toLocaleDateString()}
            </span>
          </div>
          <p className="line-clamp-2">{blogPost.excerpt}</p>
          <div className="card-actions">
            {blogPost.categories.map((category) => (
              <div
                className="badge badge-outline"
                key={`${blogPost.slug} ${category}`}
              >
                {category}
              </div>
            ))}
          </div>
        </div>
      </StyledCard>
    </Link>
  );
}
