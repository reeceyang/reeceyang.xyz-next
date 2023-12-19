import { PROJECTS } from "@/app/projects";
import { ProjectMockup } from "@/components/ProjectCard";
import assert from "assert";
import Link from "next/link";

export default function Project({ params }: { params: { slug: string } }) {
  const project =
    PROJECTS.find((project) => project.slug === params.slug) ??
    assert.fail(`could not find project with slug ${params.slug}`);

  return (
    <div className="prose">
      <h1>{project.title}</h1>
      <div className="flex flex-row gap-2 mb-2 not-prose">
        {project.url && (
          <Link href={project.url}>
            <button className="btn btn-primary">Visit</button>
          </Link>
        )}
        {project.github_url && (
          <Link href={project.github_url}>
            <button className="btn">View Source</button>
          </Link>
        )}
      </div>
      <div className="not-prose">
        <ProjectMockup project={project} />
      </div>
      <p>{project.description}</p>
      <div className="my-auto w-min flex flex-row gap-2">
        {project.categories.map((category) => (
          <div
            className="badge badge-outline"
            key={`${project.slug} ${category}`}
          >
            {category}
          </div>
        ))}
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}
