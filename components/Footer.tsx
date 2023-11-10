import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

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
          <a
            className="link transition hover:scale-110"
          >
            <FontAwesomeIcon width="24" height="24" icon={faGithub} />
          </a>
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
