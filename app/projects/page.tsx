import ProjectCard from "@/components/ProjectCard";
import { PROJECTS } from "../projects";

export default async function Projects() {
  return (
    <div className="container max-w-5xl m-auto py-12">
        <h1 className="text-5xl font-bold">Projects</h1>
        <div className="flex flex-col py-6 gap-12">
          {PROJECTS.map(project => (
            <ProjectCard project={project} key={project.slug} flip/>
          ))}
        </div>
      </div>
  );
};