/** @format */

import Heading from "@/components/Heading";

export default function HomePage() {
  console.log("[HomePage] rendering");
  return (
    <>
      <div className='flex items-center'>
        <img src='' alt='ini-logo' />
        <Heading>Sahal Nurdin</Heading>
      </div>

      <p>
        Selamat datang di Website Saya, tempat di mana desain UI/UX dieksplorasi
        dengan cermat untuk memberikan ulasan mendalam dan inspirasi kreatif
        bagi para pengembang dan desainer.{" "}
      </p>
    </>
  );
}
