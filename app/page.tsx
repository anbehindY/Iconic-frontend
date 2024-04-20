"use client";

import React from "react";
import Carousel from "../components/mainPage/Carousel";
import Collections from "../components/mainPage/Collections";
import Cards from "../components/mainPage/Cards";
import NewArrivals from "../components/mainPage/NewArrivals";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import useGetCollections from "@/hooks/queryHooks/useGetCollections";
import LoadingPage from "@/app/loading";
import ErrorPage from "@/app/error";
import useGetNewArrivals from "@/hooks/queryHooks/useGetNewArrivals";
import { useSelector } from "react-redux";
import { selectUser } from "@/store/slices";

export default function Home() {
  const userInfo = useSelector(selectUser);
  const images = [
    "/images/all-products.jpeg",
    "/images/all-products-front.jpeg",
    "/images/macbook.webp",
    "/images/iwatch.jpg",
    "/images/ipad-hero.webp",
  ];

  const GetAllCollectionsQuery = useGetCollections();

  const GetNewArrivalsQuery = useGetNewArrivals();

  if (GetAllCollectionsQuery.isPending || GetNewArrivalsQuery.isPending)
    return <LoadingPage />;

  if (GetAllCollectionsQuery.isError || GetNewArrivalsQuery.isError)
    return <ErrorPage />;

  // console.log("userInfo", userInfo);

  return (
    <main className="flex flex-col items-center w-full">
      {/* Image Carousel */}
      {images && (
        <div className={"relative w-full bg-slate-300/20"}>
          <Carousel images={images} />
          <IoArrowDownCircleOutline
            size={36}
            className={
              "absolute text-base-content/90 animate-bounce top-full mt-8 left-1/2 translate-x-[50%]"
            }
          />
        </div>
      )}

      {/* Collections */}
      <Collections collections={GetAllCollectionsQuery.data.payload} />

      {/* Cards */}
      <Cards />

      {/* New Arrivals */}
      <NewArrivals data={GetNewArrivalsQuery.data.payload} />
    </main>
  );
}
