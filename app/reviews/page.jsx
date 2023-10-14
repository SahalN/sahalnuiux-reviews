/** @format */
import Link from "next/link";

export default function ReviewsPage() {
  return (
    <>
      <h1>Reviews</h1>
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
      <ul>
        <li>
          <Link href='/reviews/office-attendance'>Office Attendance</Link>
        </li>
        <li>
          <Link href='/reviews/coffee-shop'>Coffee Shop</Link>
        </li>
      </ul>
    </>
  );
}
