"use client";

import { getUnsplashImage } from "../utils/getUnsplash";
import React, { useState, useEffect } from "react";
import Carousel from "../components/mainPage/Carousel";
import Collections from "../components/mainPage/Collections";
import Cards from "../components/mainPage/Cards";
import NewArrivals from "../components/mainPage/NewArrivals";

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

  return (
    <main className="flex flex-col items-center w-full">
      {/* Image Carousel */}
      {images && <Carousel images={images} />}

      {/* Collections */}
      <Collections />

      {/* Cards */}
      <Cards />

      {/* New Arrivals */}
      <NewArrivals />
    </main>
  );
}
