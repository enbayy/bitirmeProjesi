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
            src="/elyapimiurunler.jpg"
            className="w-92 h-52 rounded-lg mt-10"
            alt=""
          />
          <Link
            href="/"
            className="text-[#4B2E2E] rounded-lg px-2">
            El Yapımı Ürünler
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center gap-y-5">
          <img
            src="/sanatcilarımız.jpg"
            className="w-92 h-52 rounded-lg mt-10"
            alt=""
          />
          <Link
            href="/"
            className="text-[#4B2E2E] rounded-lg px-2">
            Sanatçılarımız
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center gap-y-5">
          <img
            src="/kulturelbilgiler.jpg"
            className="w-92 h-52 rounded-lg mt-10"
            alt=""
          />
          <Link
            href="/"
            className="text-[#4B2E2E] rounded-lg px-2">
            Kültürel Bilgiler
          </Link>
        </div>
      </div>
      <Slider />
    </div>
  );
}