'use client';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { CustomArrowProps } from "react-slick";
import Image from "next/image";
import { useRouter } from "next/navigation";

function NextArrow(props: CustomArrowProps) {
  const { style, onClick } = props;
  return (
    <div
      onClick={onClick}
      className="bg-white border absolute top-[50%] left-full rounded-full p-2 cursor-pointer"
    >
      <BiChevronRight style={{ ...style }} className="text-zinc-800 text-3xl" />
    </div>
  );
}

function PrevArrow(props: CustomArrowProps) {
  const { style, onClick } = props;
  return (
    <div
      onClick={onClick}
      className="bg-white border absolute top-[50%] right-full rounded-full p-2 cursor-pointer"
    >
      <BiChevronLeft style={{ ...style }} className="text-zinc-800 text-3xl" />
    </div>
  );
}

export default function NewArrivals() {
const router = useRouter();

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <section className="px-20 py-12 bg-slate-300/20 w-full h-full">
      <h2 className="font-bold text-5xl ml-10 mb-5">New Arrivals</h2>
      <div className="slider-container">
        <Slider {...settings}>
          {[1, 2, 3, 4, 5].map((key) => {
            return (
              <div
                className="card w-96 bg-white shadow-md rounded-lg"
                key={key}
                onClick={() => router.push(`/products/${key}`)}
              >
                <div className="relative w-full h-52">
                  <Image
                    src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                    alt="Shoes"
                    fill
                    style={{
                      objectFit: "cover",
                      borderRadius: "0.5rem 0.5rem 0 0",
                    }}
                  />
                </div>
                <div className="card-body">
                  <h2 className="text-base font-medium">
                    Power Treads
                    <div className="text-purple-700 text-sm absolute top-4 left-4">
                      NEW
                    </div>
                  </h2>
                  <p className="text-slate-500 font-semibold">1500 Ks</p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
}
