import ProjectCard from "@/components/ProjectCard";
import { PROJECTS } from "../projects";

const DESIGN_PROJECTS = [
  "lilypad",
  "symsic",
  "bobaboss",
  "kai",
  "beaverlens",
  "flowfield",
  "convoscope",
  "henry",
  "mpc",
];

export default async function Projects() {
  return (
    <>
      <h1 className="text-5xl font-bold mb-4">Design Projects</h1>
      <div className="flex flex-col py-6 gap-24">
        {PROJECTS.filter(({ slug }) => DESIGN_PROJECTS.includes(slug)).map(
          (project, i) => (
            <ProjectCard
              project={project}
              key={project.slug}
              divider={i < PROJECTS.length - 1}
            />
          ),
        )}
      </div>
    </>
  );
}
