"use client";

import Link from "next/link";
import ClickSoundEffectTrigger from "./ClickSoundEffectTrigger";

const Header = () => (
  <>
    <div className="navbar min-h-min mb-12 fixed glass">
      <ul className="menu menu-md menu-horizontal max-w-4xl m-auto w-full p-0">
        <ClickSoundEffectTrigger>
          <li>
            <Link href="/" className="font-bold">
              Reece Yang
            </Link>
          </li>
        </ClickSoundEffectTrigger>

        <ClickSoundEffectTrigger>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
        </ClickSoundEffectTrigger>

        <ClickSoundEffectTrigger>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
        </ClickSoundEffectTrigger>
      </ul>
    </div>
    <div className="h-24" />
  </>
);

export default Header;
