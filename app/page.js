import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div className="h-screen bg-[#9c7665]">
      <div className="flex justify-center items-center gap-x-10">
        <div className="flex flex-col justify-center items-center gap-y-5">
          <Link
            href="/"
            className="bg-white text-black rounded-lg px-2 mt-5">
            xxxxxxxxxxx
          </Link>
          <img
            src="/bg1.jpg"
            className="w-[30vh] h-[30vh] rounded-lg"
            alt="" />
        </div>
        <div className="flex flex-col justify-center items-center gap-y-5">
          <Link
            href="/"
            className="bg-white text-black rounded-lg px-2 mt-5">
            xxxxxxxxxxx
          </Link>
          <img
            src="/bg2.jpg"
            className="w-[30vh] h-[30vh] rounded-lg"
            alt="" />
        </div>
        <div className="flex flex-col justify-center items-center gap-y-5">
          <Link
            href="/"
            className="bg-white text-black rounded-lg px-2 mt-5">
            xxxxxxxxxxx
          </Link>
          <img
            src="/bg3.jpg"
            className="w-[30vh] h-[30vh] rounded-lg"
            alt="" />
        </div>
      </div>
    </div>
  );
}