import Link from "next/link";

function Nav() {
  return (
    <ul>
      <li>
        <Link href="/portfolio/about">
          <a>about</a>
        </Link>
      </li>
    </ul>
  );
}

export default Nav;
