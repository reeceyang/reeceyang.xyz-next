import Link from "next/link";

const Header = () => (
  <div className="navbar bg-base-100">
    <div className="flex-1">
      <Link href="/" className="btn btn-ghost normal-case text-xl">
        Reece Yang
      </Link>
    </div>
    <div className="flex-none">
      <ul className="menu menu-horizontal px-1">
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
      </ul>
    </div>
  </div>
);

export default Header;
