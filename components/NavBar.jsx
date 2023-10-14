/** @format */

import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
      <ul className='flex gap-2'>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/reviews'>Reviews</Link>
        </li>
        <li>
          <Link href='/about' prefetch={false}>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}
