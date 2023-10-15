/** @format */

import Heading from "@/components/Heading";
import { readFile } from "node:fs/promises";
import { marked } from "marked";

export default async function OfficeAttendancePage() {
  const text = await readFile("./content/reviews/office-attendance.md", "utf8");
  const html = marked(text, { headerIds: false, mangle: false });
  return (
    <>
      <Heading>Office Attendance</Heading>
      <img
        src='/images/office-attendance.png'
        alt='office-attendance-design'
        width='640'
        height='360'
        className='mx-auto mb-2 rounded'
      />
      <article
        dangerouslySetInnerHTML={{ __html: html }}
        className='max-w-screen-sm prose text-white prose-slate'
      />
    </>
  );
}
