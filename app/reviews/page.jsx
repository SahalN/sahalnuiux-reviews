/** @format */
import Link from "next/link";
import Heading from "@/components/Heading";
import { getReviews } from "@/lib/reviews";

export const metadata = {
  title: "Reviews",
};

export default async function ReviewsPage() {
  const reviews = await getReviews();
  return (
    <>
      <Heading>Reviews</Heading>
      <p className='pb-3'>
        Selamat datang di halaman ulasan! Di sini, saya bagikan sejumlah hasil
        proyek UI/UX yang telah saya rancang. Setiap desain tidak hanya tentang
        penampilan visual yang menarik, tapi juga makna mendalam dan pengalaman
        pengguna yang optimal. Jelajahi portofolio saya untuk melihat keragaman
        konsep dan industri yang pernah saya tangani. Terima kasih atas
        kunjungan Anda, semoga temukan inspirasi dalam desain-desain saya!
      </p>
      <ul className='flex flex-row gap-3 '>
        {reviews.map((review) => (
          <li
            key={review.slug}
            className='bg-white border rounded shadow w-80 hover:shadow-xl'>
            <Link href={`/reviews/${review.slug}`}>
              <img
                src={review.image}
                alt='office-attendance-design'
                width='640'
                height='360'
                className='rounded '
              />
              <h2 className='py-2 text-center text-[#303030] font-bold '>
                {review.title}
              </h2>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
