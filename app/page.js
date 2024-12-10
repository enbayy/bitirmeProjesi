import Link from "next/link";
import React from "react";
import Slider from "./slider";
import "./globals.css";

export default function Home() {
  return (
    <div className="h-screen">
      <div className="flex justify-center items-center gap-x-10">
        <div className="flex flex-col justify-center items-center gap-y-5">
          <img
            src="/bg1.jpg"
            className="w-92 h-52 rounded-lg mt-10"
            alt="" />
          <Link
            href="/"
            className="bg-white text-black rounded-lg px-2">
            El Yapımı Ürünler
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center gap-y-5">
          <img
            src="/bg2.jpg"
            className="w-92 h-52 rounded-lg mt-10"
            alt="" />
          <Link
            href="/"
            className="bg-white text-black rounded-lg px-2">
            Sanatçılarımız
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center gap-y-5">
          <img
            src="/bg3.jpg"
            className="w-92 h-52 rounded-lg mt-10"
            alt="" />
          <Link
            href="/"
            className="bg-white text-black rounded-lg px-2">
            Kültürel Bilgiler
          </Link>
        </div>
      </div>
      <Slider />
    </div>
  );
}