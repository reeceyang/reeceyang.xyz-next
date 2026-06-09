import BlogCard from "@/components/BlogCard";
import ProjectCard from "@/components/ProjectCard";
import { getSortedPostsData } from "@/utils/posts";
import Link from "next/link";
import { PROJECTS } from "./projects";
import SocialLinks from "@/components/SocialLinks";
import StyledCard from "@/components/StyledCard";
import Button from "@/components/Button";
import { FlowersAndLeaves } from "@/components/SVGPaths";
import RandomDivider from "@/components/RandomDivider";

const HOME_SLUGS = ["bobaboss", "beaverlens"];
const HOME_PROJECTS = PROJECTS.filter(({ slug }) => HOME_SLUGS.includes(slug));

const Bio = () => (
  <div className="prose max-w-md">
    software engineer at <Link href="https://www.convex.dev/">Convex</Link>
  </div>
);

const Contact = () => (
  <div className="flex flex-row gap-x-6 gap-y-2 w-fit flex-wrap justify-center mt-8">
    <Link href="/Reece_Yang_Resume.pdf">
      <Button>Resume</Button>
    </Link>
    <Link href="mailto:rya@mit.edu">
      <Button>Email</Button>
    </Link>
  </div>
);

export default async function Home() {
  const allPostsData = await getSortedPostsData().slice(0, 3);

  return (
    <div className="flex flex-col gap-48">
      <div className="mt-[16vh] mb-[18vh]">
        <div className="flex flex-col sm:flex-row gap-8">
          <div className="flex-[2_2_0%] flex flex-col gap-8">
            <h1 className="text-5xl font-bold font-serif">
              Hi, I&rsquo;m Reece!
            </h1>
            <div className="w-min">
              <SocialLinks />
            </div>
            <div>
              <Bio />
              <Contact />
            </div>
          </div>
          <div className="flex-[1_1_0%] m-auto flex flex-row gap-2">
            <FlowersAndLeaves />
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-5xl font-bold font-serif">Projects</h1>
        <div className="flex flex-col mt-6 py-6 gap-24">
          {HOME_PROJECTS.map((project, i) => (
            <ProjectCard project={project} key={project.slug} divider />
          ))}
        </div>
        <Link href="/projects">
          <Button>View All Projects</Button>
        </Link>
      </div>

      <div className="mx-auto w-min">
        <RandomDivider />
      </div>

      <div>
        <h1 className="text-5xl font-bold">Blog</h1>
        <div className="flex flex-col mt-6 py-6 gap-6">
          {allPostsData.map((blogPost) => (
            <BlogCard blogPost={blogPost} key={blogPost.slug} divider />
          ))}
        </div>
        <Link href="/blog">
          <Button>View All Posts</Button>
        </Link>
      </div>

      <div>
        <h1 className="text-5xl font-bold">Links</h1>
        <div className="flex flex-col py-6 gap-6 flex-wrap">
          <Link href={`/classes`}>
            <StyledCard className="w-full">
              <div className="card-body">
                <h2 className="card-title">Classes</h2>
                <p>Classes I&rsquo;ve taken at MIT.</p>
              </div>
            </StyledCard>
          </Link>
        </div>
      </div>
    </div>
  );
}
