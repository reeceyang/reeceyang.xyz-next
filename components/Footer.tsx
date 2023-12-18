import Link from "next/link";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded mt-12">
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
        <SocialLinks />
      </div>
      <div>
        <p>
          Made with <code>&lt;3</code> by Reece
        </p>
      </div>
    </footer>
  );
}
