import { PROJECTS } from "@/app/projects";
import Button from "@/components/Button";
import { ProjectMockup } from "@/components/ProjectCard";
import assert from "assert";
import Link from "next/link";

// this page isn't linked to anywhere in the site currently
export default function Project({ params }: { params: { slug: string } }) {
  const project =
    PROJECTS.find((project) => project.slug === params.slug) ??
    assert.fail(`could not find project with slug ${params.slug}`);

  return (
    <div className="flex flex-row flex-wrap gap-8">
      <div className="flex flex-col gap-8 flex-1">
        <div className="prose">
          <h1 className="text-5xl font-bold mb-0">{project.title}</h1>
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
        <div className="flex flex-row gap-2 mb-2 not-prose">
          {project.url && (
            <Link href={project.url}>
              <Button>Visit</Button>
            </Link>
          )}
          {project.github_url && (
            <Link href={project.github_url}>
              <Button>View Source</Button>
            </Link>
          )}
        </div>
      </div>
      <div className="w-1/2 flex-1">
        <ProjectMockup project={project} />
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}
