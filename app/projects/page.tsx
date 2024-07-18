import ProjectCard from "@/components/ProjectCard";
import { PROJECTS } from "../projects";

export default async function Projects() {
  return (
    <>
      <h1 className="text-5xl font-bold">Projects</h1>
      <div className="flex flex-col py-6 gap-24">
        {PROJECTS.map((project, i) => (
          <ProjectCard
            project={project}
            key={project.slug}
            divider={i < PROJECTS.length - 1}
          />
        ))}
      </div>
    </>
  );
}
