/** @format */
import Link from "next/link";
import Heading from "@/components/Heading";

export default function ReviewsPage() {
  return (
    <>
      <Heading>Reviews</Heading>
      <p>
        Halaman review desain UI/UX menyajikan katalog varian desain kreatif,
        dari tata letak hingga warna, memberikan pemahaman mendalam tentang
        konsep dan kelebihan setiap proyek. Dengan analisis yang tajam, halaman
        ini memandu pengunjung melalui inspirasi dan tren terkini, memberikan
        wawasan kritis untuk pengembangan desain yang efektif. Diperkaya dengan
        galeri visual, halaman ini menjadi sumber daya penting bagi desainer
        yang ingin mengeksplorasi, mengamati, dan memahami esensi desain UI/UX
        terbaik.
      </p>
      <ul className='flex flex-col gap-3'>
        <li className='bg-white border rounded shadow w-80 hover:shadow-xl'>
          <Link href='/reviews/office-attendance'>
            <img
              src='/images/office-attendance.png'
              alt='office-attendance-design'
              width='640'
              height='360'
              className='mb-2 rounded'
            />
            <h2 className='py-1 text-center text-[#303030] font-semibold'>
              Office Attendance
            </h2>
          </Link>
        </li>
        <li className='bg-white border rounded shadow w-80 hover:shadow-xl '>
          <Link href='/reviews/coffee-shop'>
            <img
              src='/images/coffee-shop.png'
              alt='coffee-shop-design'
              width='640'
              height='360'
              className='mb-2 rounded'
            />
            <h2 className='py-1 text-center text-[#303030] font-semibold'>
              Coffee Shop
            </h2>
          </Link>
        </li>
      </ul>
    </>
  );
}
