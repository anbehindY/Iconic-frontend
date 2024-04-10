"use client";

import { useState } from "react";
import ColorPicker from "./ColorPicker";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ProductDto } from "@/types/products.types";

export type CollectionCardProps = {
  productData: ProductDto;
};

export default function CollectionCard({ productData }: CollectionCardProps) {
  const [activeImage, setActiveImage] = useState<string>(
    productData.images[0].imageId || ""
  );
  const router = useRouter();
  return (
    <div className="w-[350px]">
      <div
        className="relative aspect-square cursor-pointer"
        onClick={() => router.push(`/products/${productData.name}`)}
      >
        <Image
          src={`${process.env.STORAGE_URL}/${activeImage}`}
          alt="demo"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="flex flex-col gap-3">
        <h3
          onClick={() => router.push(`/products/${productData.name}`)}
          className="cursor-pointer"
        >
          {productData.name}
        </h3>
        <p className="text-zinc-500">From 4,000,000 Ks</p>
        <div className="flex gap-2">
          {productData.images.map((item, index) => {
            return (
              <ColorPicker
                item={item}
                key={index}
                onClickHanlder={(imageId: string) => setActiveImage(imageId)}
                activeImage={activeImage}
                isMac={productData.productType.name === "MacBook"}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
