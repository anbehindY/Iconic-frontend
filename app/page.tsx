"use client";

import Image from "next/image";
import { getUnsplashImage } from "./utils/getUnsplash";
import React, { useState, useEffect } from "react";
import Carousel from "./components/Carousel";

export default function Home() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getUnsplashImage().then((data) => {
      const arr = data.map((image: any) => {
        return image.urls.regular;
      });
      setImages(arr);
    });
  }, []);

  console.log(images);
  return (
    <main className="flex flex-col items-center gap-8 w-full">
      <section className="w-full">
        {images && <Carousel images={images} />}
      </section>
    </main>
  );
}
