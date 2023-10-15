/** @format */

import Heading from "@/components/Heading";
import { getReview } from "@/lib/reviews";

export default async function OfficeAttendancePage() {
  const review = await getReview("office-attendance");
  return (
    <>
      <Heading>{review.title}</Heading>
      <p className='pb-2 italic'>Di publish pada {review.date}</p>
      <img
        src={review.image}
        alt='office-attendance-design'
        width='640'
        height='360'
        className='mx-auto mb-2 rounded'
      />
      <article
        dangerouslySetInnerHTML={{ __html: review.body }}
        className='mx-auto prose text-white prose-slate'
      />
    </>
  );
}
