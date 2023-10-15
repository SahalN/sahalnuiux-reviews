/** @format */

import Heading from "@/components/Heading";
import { getFeaturedReview } from "@/lib/reviews";
import Link from "next/link";

export default async function HomePage() {
  const review = await getFeaturedReview();
  return (
    <>
      <Heading>Sahal Nurdin</Heading>
      <p className='pb-3'>
        Selamat datang di Website Saya, tempat di mana desain UI/UX dieksplorasi
        dengan cermat untuk memberikan ulasan mendalam dan inspirasi kreatif
        bagi para pengembang dan desainer.
      </p>
      <div className='mx-auto border shadow  rounded-xl bg-white-brown hover:shadow-white-brown hover:shadow-xl w-70 sm:w-full'>
        <Link
          href={`/reviews/${review.slug}`}
          className='flex flex-col sm:flex-row '>
          <img
            src={review.image}
            alt='office-attendance-design'
            width='540'
            height='260'
            className='rounded-xl '
          />
          <h2 className='py-2 text-center text-sm sm:text-lg text-[#303030] font-semibold font-montserrat '>
            {review.title}
          </h2>
        </Link>
      </div>
    </>
  );
}
