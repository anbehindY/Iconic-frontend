'use client';

import Image from "next/image";
import CollectionCard from "./_components/CollectionCard";
import { use, useEffect, useState } from "react";
import useGetProducts from "@/hooks/queryHooks/useGetProducts";
import { ProductDto } from "@/types/products.types";
import { useSearchParams } from "next/navigation";

type CollectionDetailProps = {
  params: { id: string };
};

export default function CollectionDetail({ params }: CollectionDetailProps) {
  const collectionId = window.location.search.split("?")[1];
  console.log(collectionId)
  const [productsData, setProductsData] = useState<ProductDto[]>([]);

  // fetch collections
  const GetProductsData = useGetProducts(collectionId!);
  
  useEffect(() => {
    if(GetProductsData.isSuccess){
      console.log(GetProductsData.data);
      setProductsData(GetProductsData.data.payload);
    }
  }, [GetProductsData.isSuccess]);

  if (GetProductsData.isPending) return <div>Loading...</div>;
  if (GetProductsData.isError) return <div>Error...</div>;

  return (
    <section className="bg-white">
      <div className="relative w-full min-h-[350px]">
        {params && (
          <Image src={`/gallery/shop_${params.id}.webp`} alt="demo" fill />
        )}
        <div className="absolute top-28 left-[70px] text-white">
          <h2 className="font-sans text-5xl mb-2">
            Shop {decodeURI(params.id)}
          </h2>
          <h3 className="text-zinc-400/75 font-bold text-3xl">
            All models. Take your pick.
          </h3>
        </div>
      </div>
      <div className="flex flex-wrap gap-x-8 gap-y-16 pt-8 pb-20 px-40">
        {productsData.map((item) => (
          <CollectionCard productData={item} key={item.id}/>
        ))}
      </div>
    </section>
  );
}
