"use client";

import Image from "next/image";
import CollectionCard from "./_components/CollectionCard";
import useGetProducts from "@/hooks/queryHooks/useGetProducts";
import { useParams, useSearchParams } from "next/navigation";
import ErrorPage from "@/app/error";
import LoadingPage from "@/app/loading";

export default function CollectionDetail() {
  const searchParams = useSearchParams();
  const params = useParams();
  const collectionName = params.id as string;
  const collectionId = searchParams.get("cid") as string;

  // fetch collections
  const GetProductsData = useGetProducts(collectionId!);

  if (GetProductsData.isPending) return <LoadingPage />;

  if (GetProductsData.isError) return <ErrorPage />;

  const productsData = GetProductsData.data.payload;

  return (
    <section className="bg-white min-h-[calc(100vh-296px)]">
      <div className="relative w-full min-h-[350px]">
        {params && (
          <Image src={`/gallery/shop_${collectionName}.webp`} alt="demo" fill />
        )}
        <div className="absolute top-28 left-[70px] text-white">
          <h2 className="font-sans text-5xl mb-2">
            Shop {decodeURI(collectionName)}
          </h2>
          <h3 className="text-zinc-400/75 font-bold text-3xl">
            All models. Take your pick.
          </h3>
        </div>
      </div>
      <div className="flex flex-wrap gap-x-8 gap-y-16 pt-8 pb-20 px-40">
        {productsData.length === 0 ? (
          <p>No items available for {collectionName} yet!</p>
        ) : (
          productsData.map((item) => (
            <CollectionCard productData={item} key={item.id} />
          ))
        )}
      </div>
    </section>
  );
}
