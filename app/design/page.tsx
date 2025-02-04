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
  "lates",
];

const latesProject = {
  url: "https://lates.vercel.app",
  image_src: "/lates.png",
  description: "Plan menus and ordering food for a co-op meal plan.",
  title: "Lates",
  slug: "lates",
  categories: ["TypeScript", "React"],
};

export default async function Projects() {
  return (
    <>
      <h1 className="text-5xl font-bold mb-4">Design Projects</h1>
      <div className="flex flex-col py-6 gap-24">
        {[...PROJECTS, latesProject]
          .filter(({ slug }) => DESIGN_PROJECTS.includes(slug))
          .map((project, i) => (
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
