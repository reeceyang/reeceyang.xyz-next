"use client";

import Link from "next/link";
import ClickSoundEffectTrigger from "./ClickSoundEffectTrigger";
import RandomDivider from "./RandomDivider";

export default function BlogCard({
  blogPost,
  divider = false,
}: {
  blogPost: BlogPost;
  divider?: boolean;
}) {
  return (
    <>
      <div className="max-w-prose flex flex-col gap-2">
        <ClickSoundEffectTrigger>
          <Link href={`/${blogPost.slug}`}>
            <h2 className="card-title">{blogPost.title}</h2>
          </Link>
        </ClickSoundEffectTrigger>
        <span>{new Date(blogPost.date).toLocaleDateString()}</span>
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
      {divider && <RandomDivider />}
    </>
  );
}
