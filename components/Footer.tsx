"use client";

import Link from "next/link";
import SocialLinks from "./SocialLinks";
import ClickSoundEffectTrigger from "./ClickSoundEffectTrigger";

export default function Footer() {
  return (
    <footer className="footer footer-center p-10 bg-base-300 text-base-content rounded mt-36">
      <div className="grid grid-flow-col gap-4">
        <ClickSoundEffectTrigger>
          <Link href="/" className="link link-hover">
            Home
          </Link>
        </ClickSoundEffectTrigger>
        <ClickSoundEffectTrigger>
          <Link href="/projects" className="link link-hover">
            Projects
          </Link>
        </ClickSoundEffectTrigger>
        <ClickSoundEffectTrigger>
          <Link href="/blog" className="link link-hover">
            Blog
          </Link>
        </ClickSoundEffectTrigger>
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
