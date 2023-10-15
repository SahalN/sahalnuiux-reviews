/** @format */
"use client";
import { useState } from "react";
import { LinkIcon } from "@heroicons/react/20/solid";

export default function ShareLinkButton(param) {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    navigator.clipboard.writeText(window.location.href);
    setClicked(true);
    setTimeout(() => setClicked(false), 1500);
  };
  return (
    <button
      onClick={handleClick}
      className='flex items-center gap-1 px-2 py-1 text-sm text-white border rounded hover:bg-white-brown hover:text-[#303030]'>
      <LinkIcon className='w-4 h-4' />
      {clicked ? "Link Copied" : "Share Link"}
    </button>
  );
}
