/** @format */

import Heading from "@/components/Heading";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Heading>Sahal Nurdin</Heading>
      <p className='pb-3'>
        Selamat datang di Website Saya, tempat di mana desain UI/UX dieksplorasi
        dengan cermat untuk memberikan ulasan mendalam dan inspirasi kreatif
        bagi para pengembang dan desainer.{" "}
      </p>
      <div className='mx-auto border shadow rounded-xl bg-white-brown hover:shadow-white-brown hover:shadow-xl w-70 sm:w-full'>
        <Link
          href='/reviews/office-attendance'
          className='flex flex-col sm:flex-row'>
          <img
            src='/images/office-attendance.png'
            alt='office-attendance-design'
            width='540'
            height='260'
            className='rounded-xl'
          />
          <h2 className='py-1 text-center sm:text-2xl text-[#303030] font-bold font-mplusrounded1c m-auto'>
            Office Attendance
          </h2>
        </Link>
      </div>
    </>
  );
}
