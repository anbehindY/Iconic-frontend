"use client";

import { ProductDto, ProductImageDto } from "@/types/products.types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ColorPicker from "./ColorPicker";

export type CollectionCardProps = {
  productData: ProductDto;
};

export default function CollectionCard({ productData }: CollectionCardProps) {
  const [activeImage, setActiveImage] = useState<ProductImageDto>();
  const router = useRouter();
  return (
    <div className="w-[350px]">
      <div
        className="relative aspect-square cursor-pointer"
        onClick={() => router.push(`/products/${productData.id}`)}
      >
        <Image
          src={
            `${process.env.STORAGE_URL}/${
              activeImage?.imageId || productData.images[0].imageId
            }/view?project=${process.env.APPWRITE_PROJECT_ID}` ||
            "/images/placeholder-image.webp"
          }
          alt="demo"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="flex flex-col gap-3">
        <h3
          onClick={() => router.push(`/products/${productData.id}`)}
          className="cursor-pointer"
        >
          {productData.name}
        </h3>
        <p className="text-zinc-500">From 4,000,000 Ks</p>
        <div className="flex gap-2">
          {productData.images.map((item, index) => {
            return (
              <ColorPicker
                imageData={item}
                key={index}
                onClickHanlder={(imageData: ProductImageDto) =>
                  setActiveImage(imageData)
                }
                activeImage={
                  activeImage?.imageId || productData.images[0].imageId
                }
                isMac={productData.productType.name === "MacBook"}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
