import BlogCard from "@/components/BlogCard";
import ProjectCard from "@/components/ProjectCard";
import { getSortedPostsData } from "@/utils/posts";
import { faEnvelope, faFile } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { PROJECTS } from "./projects";
import SocialLinks from "@/components/SocialLinks";

const HOME_SLUGS = ["bobaboss", "beaverlens"];
const HOME_PROJECTS = PROJECTS.filter(({ slug }) => HOME_SLUGS.includes(slug));

const Bio = () => (
  <div className="prose max-w-md">
    I&rsquo;m an undergraduate at <strong>MIT</strong> studying{" "}
    <strong>Computer Science</strong>. I&rsquo;m interested in{" "}
    <strong>full-stack engineering</strong> and <strong>UI/UX design</strong>.
  </div>
);

const Contact = () => (
  <div className="flex flex-row gap-x-6 gap-y-2 w-fit flex-wrap justify-center mt-8">
    <Link href="/Reece_Yang_Resume.pdf">
      <button className="btn">Resume</button>
    </Link>
    <Link href="mailto:rya@mit.edu">
      <button className="btn">EMAIL</button>
    </Link>
  </div>
);

export default async function Home() {
  const allPostsData = await getSortedPostsData().slice(0, 3);
  const newestPost = allPostsData[0];

  return (
    <main className="container max-w-4xl m-auto px-4">
      <div className="flex flex-row gap-8 py-6">
        <div className="flex-[2_2_0%] flex flex-col gap-8">
          <h1 className="text-5xl font-bold font-serif">
            Hi, I&rsquo;m Reece!
          </h1>
          <div className="w-min">
            <SocialLinks />
          </div>
          <div className="hidden sm:block">
            <Bio />
            <Contact />
          </div>
        </div>
        <div className="flex-[1_1_0%] m-auto avatar">
          <Image
            className="rounded"
            src={"/profile_square.jpg"}
            alt={"profile"}
            width="300"
            height="300"
          />
        </div>
      </div>
      <div className="block sm:hidden mt-8">
        <Bio />
        <Contact />
      </div>

      <div className="container m-auto py-12">
        <h1 className="text-5xl font-bold font-serif">Projects</h1>
        <div className="flex flex-col py-6 gap-6">
          {HOME_PROJECTS.map((project, i) => (
            <ProjectCard
              project={project}
              key={project.slug}
              flip={i % 2 == 1}
            />
          ))}
        </div>
        <Link href="/projects">
          <button className="btn m-auto block">View All Projects</button>
        </Link>
      </div>
      <div className="container m-auto py-12">
        <h1 className="text-5xl font-bold">Blog</h1>
        <div className="flex flex-col py-6 gap-6">
          {allPostsData.map((blogPost) => (
            <BlogCard blogPost={blogPost} key={blogPost.slug} />
          ))}
        </div>
        <Link href="/blog">
          <button className="btn m-auto block">View All Posts</button>
        </Link>
      </div>
      <div className="container m-auto py-12">
        <h1 className="text-5xl font-bold">Fun Things</h1>
        <div className="flex flex-row py-6 gap-6 flex-wrap">
          <div className="card w-96 h-96 shadow-xl bg-base-200 mask mask-square">
            <iframe
              width="100%"
              height="100%"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1488943012&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            ></iframe>
          </div>
          <Link href={`/classes`}>
            <div className="card w-96 h-96 shadow-xl bg-base-200 mask mask-square transition hover:translate-x-2 hover:-translate-y-2">
              <div className="card-body">
                <h2 className="card-title">Classes</h2>
                <p>Classes I&rsquo;ve taken at MIT.</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
