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
        Halaman review desain UI/UX menyajikan katalog varian desain kreatif,
        dari tata letak hingga warna, memberikan pemahaman mendalam tentang
        konsep dan kelebihan setiap proyek. Dengan analisis yang tajam, halaman
        ini memandu pengunjung melalui inspirasi dan tren terkini, memberikan
        wawasan kritis untuk pengembangan desain yang efektif. Diperkaya dengan
        galeri visual, halaman ini menjadi sumber daya penting bagi desainer
        yang ingin mengeksplorasi, mengamati, dan memahami esensi desain UI/UX
        terbaik.
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
