/** @format */

import Heading from "@/components/Heading";
import ShareLinkButton from "@/components/ShareLinkButton";
import { getReview, getSlugs } from "@/lib/reviews";

export async function generateMetadata({ params: { slug } }) {
  const review = await getReview(slug);
  return {
    title: review.title,
  };
}

export async function generateStaticParams() {
  const slugs = await getSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function ReviewPage({ params: { slug } }) {
  const review = await getReview(slug);
  return (
    <>
      <Heading>{review.title}</Heading>
      <div className='flex items-center gap-3'>
        <p className='text-sm italic'>Di publish pada {review.date}</p>
        <ShareLinkButton />
      </div>

      <div className='max-w-screen-sm mx-auto '>
        <iframe
          src={review.iframe}
          className='mx-auto mt-5 mb-5 rounded aspect-auto sm:aspect-video w-[320px] h-[180px] sm:w-[640px] sm:h-[360px] '
        />

        <article
          dangerouslySetInnerHTML={{ __html: review.body }}
          className='mx-auto prose text-white prose-slate '
        />
      </div>
    </>
  );
}
