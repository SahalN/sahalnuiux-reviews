/** @format */

import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
      <ul className='flex items-center gap-2 '>
        <li>
          <div className='flex items-center '>
            <img
              src='/images/logo-sahal.png'
              width='60'
              height='600'
              alt='ini-logo'
            />
            <Link
              href='/'
              className='text-2xl font-bold font-mplusrounded1c hover:underline decoration-4'>
              Sahal Nurdin
            </Link>
          </div>
        </li>
        <li className='ml-auto '>
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
