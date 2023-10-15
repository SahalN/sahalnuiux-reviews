/** @format */

import Heading from "@/components/Heading";
import { readFile } from "node:fs/promises";
import { marked } from "marked";
import matter from "gray-matter";

export default async function OfficeAttendancePage() {
  const text = await readFile("./content/reviews/office-attendance.md", "utf8");
  const {
    content,
    data: { title, date, image },
  } = matter(text);
  const html = marked(content, { headerIds: false, mangle: false });

  return (
    <>
      <Heading>{title}</Heading>
      <p className='pb-2 italic'>Di publish pada {date}</p>
      <img
        src={image}
        alt='office-attendance-design'
        width='640'
        height='360'
        className='mx-auto mb-2 rounded'
      />
      <article
        dangerouslySetInnerHTML={{ __html: html }}
        className='prose text-white prose-slate'
      />
    </>
  );
}
