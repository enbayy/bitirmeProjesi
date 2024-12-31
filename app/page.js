import React from "react";
import Slider from "./slider";
import "./globals.css";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Üst görsel */}
      <div className="relative h-[70vh] w-full">
        <img
          src="/anasayfa.jpeg"
          alt="Anasayfa Görseli"
          className="absolute top-0 left-0 w-full h-full"
        />
      </div>

      {/* Slider */}
      <div className="flex-grow">
        <Slider />
      </div>
    </div>
  );
}