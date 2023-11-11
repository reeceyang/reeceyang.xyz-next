import { IconDefinition, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const SOCIAL_LINKS: { url: string; icon: IconDefinition }[] = [
  { url: "https://github.com/reeceyang", icon: faGithub },
  {
    url: "https://www.linkedin.com/in/reece-yang-52b16a189/",
    icon: faLinkedin,
  },
  { url: "mailto:rya@mit.edu", icon: faEnvelope },
];

export default function Footer() {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <div className="grid grid-flow-col gap-4">
        <Link href="/" className="link link-hover">
          Home
        </Link>
        <Link href="/projects" className="link link-hover">
          Projects
        </Link>
        <Link href="/blog" className="link link-hover">
          Blog
        </Link>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
          {SOCIAL_LINKS.map(({url, icon}) =>
          <Link href={url} key={url}>
            <FontAwesomeIcon
              className="w-6 h-6 link transition hover:scale-110"
              icon={icon}
            />
          </Link>)}
        </div>
      </div>
      <div>
        <p>
          Made with <code>&lt;3</code> by Reece
        </p>
      </div>
    </footer>
  );
}
