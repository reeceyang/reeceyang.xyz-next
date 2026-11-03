"use client";

import Link from "next/link";
import ClickSoundEffectTrigger from "./ClickSoundEffectTrigger";

const Header = () => (
  <>
    <div className="navbar min-h-min mb-12 z-50">
      <ul className="menu menu-md menu-horizontal max-w-4xl m-auto w-fit p-0">
        <ClickSoundEffectTrigger>
          <li>
            <Link href="/projects">r</Link>
          </li>
        </ClickSoundEffectTrigger>
        <ClickSoundEffectTrigger>
          <li>
            <Link href="/" className="font-bold">
              ♥
            </Link>
          </li>
        </ClickSoundEffectTrigger>
        <ClickSoundEffectTrigger>
          <li>
            <Link href="/blog">y</Link>
          </li>
        </ClickSoundEffectTrigger>
      </ul>
    </div>
  </>
);

export default Header;
