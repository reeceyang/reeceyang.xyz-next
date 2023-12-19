import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import StyledCard from "./StyledCard";

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
  flip = false,
}: {
  project: Project;
  flip?: boolean;
}) {
  const sidebar = (
    <div className="card-body flex-[1_0_20rem]">
      <h2 className="card-title">{project.title}</h2>
      <p>{project.description}</p>
      <div className="card-actions">
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

  return (
    <Link href={`/projects/${project.slug}`}>
      <StyledCard>
        <div
          className={`flex flex-row ${
            flip ? "flex-wrap" : "flex-wrap-reverse"
          }`}
        >
          {flip && sidebar}
          <div className="flex-[1_0_20rem] card-body">
            {project.image_src && (
              <Image
                width="1600"
                height="900"
                src={project.image_src}
                alt={`${project.title} image`}
              />
            )}
          </div>
          {!flip && sidebar}
        </div>
      </StyledCard>
    </Link>
  );
}
