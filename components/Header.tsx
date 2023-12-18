import Link from "next/link";

const Header = () => (
  <div className="navbar bg-white min-h-min mb-12">
    <ul className="menu menu-md menu-horizontal max-w-4xl m-auto w-full p-0">
      <li>
        <Link href="/" className="font-bold">
          Reece Yang
        </Link>
      </li>
      <li>
        <Link href="/projects">Projects</Link>
      </li>
      <li>
        <Link href="/blog">Blog</Link>
      </li>
    </ul>
  </div>
);

export default Header;
