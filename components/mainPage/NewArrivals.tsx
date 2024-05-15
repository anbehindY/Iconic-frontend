"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { CustomArrowProps } from "react-slick";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { NewArrivalProductVariantDto } from "@/types/products.types";

type NewArrivalsProps = {
  data: NewArrivalProductVariantDto[];
};

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

export default function NewArrivals({
  data,
}: {
  data: NewArrivalProductVariantDto[];
}) {
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
          {data.map((item) => {
            return (
              <div
                className="card bg-white shadow-light m-0 p-0 w-[400px] rounded-lg group cursor-pointer"
                key={item.id}
                onClick={() => router.push(`/products/${item.product.id}`)}
              >
                <div className="relative w-full h-60">
                  <Image
                    src={process.env.STORAGE_URL + "/" + item.image.imageId}
                    alt="Shoes"
                    fill
                    style={{
                      objectFit: "cover",
                      borderRadius: "0.5rem 0.5rem 0 0",
                    }}
                  />
                  {/*<button*/}
                  {/*  type="button"*/}
                  {/*  className="border-2 text-xs font-medium border-black rounded-full p-2 absolute bottom-0 right-2 z-50 invisible opacity-0 group-hover:visible group-hover:opacity-100 group-hover:-translate-y-2 transition-all translate-y-0 duration-300 ease-in-out"*/}
                  {/*>*/}
                  {/*  + Quick add*/}
                  {/*</button>*/}
                </div>
                <div className="card-body">
                  <h2 className="text-base font-medium">{item.product.name}</h2>
                  <p className="text-slate-500 font-semibold">
                    {item.price} Ks
                  </p>
                </div>
                <div className="text-primary text-sm absolute top-4 left-4">
                  NEW
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
}
