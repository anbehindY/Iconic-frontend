"use client";

import React, { useState, useEffect } from "react";
import { Galleria } from "primereact/galleria";
import { getUnsplashImage } from "../utils/getUnsplash";
import Image from "next/image";

export default function ImageSlider() {
  const [images, setImages] = useState();

  useEffect(() => {
    getUnsplashImage().then((data) => setImages(data));
  }, []);

  const itemTemplate = (item: {
    urls: {
      raw: string;
      full: string;
      regular: string;
      small: string;
      thumb: string;
    };
  }) => {
    // return (
    //   <div
    //     style={{ backgroundImage: `url(${item.urls.full})`, width: "100vw" }}
    //     className="bg-no-repeat bg-center bg-cover h-[calc(100vh-76px)]"
    //   />
    // );

    const GalleriaItem = () => {
      return (
        <Image
          src={item.urls.full}
          alt={"Image"}
          fill
          objectFit={"cover"}
          className={"animate-fade-in"}
        />
      );
    };
    return (
      <div className={"h-[calc(100vh-76px)] w-full relative"}>
        <GalleriaItem />
      </div>
    );
  };

  return (
    <Galleria
      value={images}
      numVisible={5}
      circular
      showThumbnails={false}
      showItemNavigators
      showItemNavigatorsOnHover
      item={itemTemplate}
      autoPlay
      transitionInterval={5000}
      className={"overflow-hidden"}
      // pt={{
      //   nextItemButton: { className: "rounded-[2em]" },
      //   previousItemButton: { className: "rounded-[2em]" },
      // }}
    />
  );
}
