import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import RandomDivider from "./RandomDivider";

export const ProjectMockup = ({ project }: { project: Project }) => {
  return (
    project.image_src && (
      <div className="mockup-browser bg-base-200 shadow-xl glass flex-[2_0_20rem] ">
        <div className="mockup-browser-toolbar">
          {project.url && <div className="input">{project.url}</div>}
        </div>
        {project.image_src && (
          <Image
            width="1600"
            height="900"
            src={project.image_src}
            alt={`${project.title} image`}
          />
        )}
      </div>
    )
  );
};

export default function ProjectCard({
  project,
  divider = false,
}: {
  project: Project;
  divider?: boolean;
}) {
  return (
    <>
      <div className="flex flex-row flex-wrap gap-8">
        <div className="flex flex-col gap-4 flex-1">
          <h2 className="card-title">{project.title}</h2>
          <p>{project.description}</p>
          <div className="w-min flex flex-row gap-2">
            {project.categories.map((category) => (
              <div
                className="badge badge-outline text-nowrap"
                key={`${project.slug} ${category}`}
              >
                {category}
              </div>
            ))}
          </div>
          <div className="flex flex-row gap-2 mb-2 not-prose">
            {project.url && (
              <Link href={project.url} target="_blank">
                <Button>Visit</Button>
              </Link>
            )}
            {project.github_url && (
              <Link href={project.github_url} target="_blank">
                <Button>View Source</Button>
              </Link>
            )}
          </div>
        </div>
        <div className="w-1/2 flex-1">
          <ProjectMockup project={project} />
        </div>
      </div>
      {divider && <RandomDivider />}
    </>
  );
}
