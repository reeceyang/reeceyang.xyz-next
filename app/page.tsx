import BlogCard from '@/components/BlogCard';
import ProjectCard from '@/components/ProjectCard';
import { getSortedPostsData } from '@/utils/posts';
import { faEnvelope, faFile } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image'
import Link from 'next/link';
import { PROJECTS } from './projects';

const HOME_SLUGS = ["bobaboss", "beaverlens"];
const HOME_PROJECTS = PROJECTS.filter(({slug}) => HOME_SLUGS.includes(slug));

export default async function Home() {
  const allPostsData = await getSortedPostsData().slice(0, 3);

  return (
    <main>
      <div className="bg-pattern">
        <div className="hero min-h-[80vh] bg-[#ffffffcc]">
          <div className="hero-content flex-col lg:flex-row">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body p-12 flex flex-row">
                <div>
                  <h1 className="text-5xl font-bold">Hi, I’m Reece!</h1>
                  <div className="prose p-6">
                    <ul className="text-xl">
                      <li>
                        I&rsquo;m an undergraduate student at the{" "}
                        <strong>Massachusetts Institute of Technology</strong>{" "}
                        pursuing a Bachelor of Science in{" "}
                        <strong>Computation and Cognition</strong>.
                      </li>
                      <li>
                        My interests include full-stack web development,
                        human–computer interaction, writing, and music.
                      </li>
                      <li>Let&rsquo;s work together!</li>
                    </ul>
                  </div>
                  <div className="flex flex-row gap-6 w-fit m-auto">
                    <button className="btn">
                      Resume{" "}
                      <FontAwesomeIcon className="w-6 h-6" icon={faFile} />
                    </button>
                    <button className="btn">
                      Email{" "}
                      <FontAwesomeIcon className="w-6 h-6" icon={faEnvelope} />
                    </button>
                  </div>
                </div>

                <div className="my-auto">
                  <Image
                    className="mask mask-circle"
                    src={"/profile_square.jpg"}
                    alt={""}
                    width="300"
                    height="300"
                  />
                </div>
              </div>
            </div>
            <div className="">
              <div className="card w-96 bg-base-200 shadow-xl relative -top-32 z-10 -left-24">
                <div className="card-body">
                  <h2 className="card-title">
                    BobaBoss
                    <div className="badge badge-primary">Project</div>
                  </h2>
                  <p>
                    Find the best boba in Boston! Review aggregation web app
                    that lets you explore individual boba flavors across
                    different shops.
                  </p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">React</div>
                    <div className="badge badge-outline">MongoDB</div>
                  </div>
                </div>
              </div>

              <div className="card w-96 bg-base-200 shadow-xl relative top-32 -left-48 z-10">
                <div className="card-body">
                  <h2 className="card-title">
                    Battlecode 2023 Postmortem
                    <div className="badge badge-secondary">Blog</div>
                  </h2>
                  <p>
                    I recently participated in the MIT Battlecode competition.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container max-w-5xl m-auto py-12">
        <h1 className="text-5xl font-bold">Projects</h1>
        <div className="flex flex-col py-6 gap-6">
          {HOME_PROJECTS.map((project, i) => (
            <ProjectCard project={project} key={project.slug} flip={i % 2 == 1}/>
          ))}
        </div>
        <Link href="/projects">
          <button className="btn btn-primary m-auto block">View All Projects</button>
        </Link>
      </div>
      <div className="container max-w-5xl m-auto py-12">
        <h1 className="text-5xl font-bold">Blog</h1>
        <div className="flex flex-col py-6 gap-6">
          {allPostsData.map((blogPost) => (
            <BlogCard blogPost={blogPost} key={blogPost.slug} />
          ))}
        </div>
        <Link href="/blog">
          <button className="btn btn-secondary m-auto block">View All Posts</button>
        </Link>
      </div>
      <div className="container max-w-5xl m-auto py-12">
        <h1 className="text-5xl font-bold">Fun Things</h1>
        <div className="flex flex-col py-6 gap-6">
          <div className="card w-96 h-96 shadow-xl bg-base-200 mask mask-square">
            <iframe
              width="100%"
              height="100%"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1488943012&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
}
