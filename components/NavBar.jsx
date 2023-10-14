/** @format */

import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
      <ul className='flex gap-2'>
        <li>
          <Link href='/' className='hover:underline decoration-4'>
            Home
          </Link>
        </li>
        <li>
          <Link href='/reviews' className='hover:underline decoration-4'>
            Reviews
          </Link>
        </li>
        <li>
          <Link
            href='/about'
            prefetch={false}
            className='hover:underline decoration-4'>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}
