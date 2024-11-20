"use client";

import { ProductImageDto } from "@/types/products.types";
import clsx from "clsx";
import Image from "next/image";

type ColorPickerProps = {
  imageData: ProductImageDto;
  activeImage: string;
  onClickHanlder: any;
  isMac?: boolean;
  className?: string;
};

export default function ColorPicker({
  imageData,
  activeImage,
  onClickHanlder,
  isMac,
  className,
}: ColorPickerProps) {
  return (
    <div
      className={clsx(
        "w-12 h-12 p-[2px] rounded-lg relative aspect-square border-2 cursor-pointer",
        {
          "border-black": activeImage == imageData.imageId,
          "border-transparent": activeImage != imageData.imageId,
        },
        className
      )}
      onClick={() => onClickHanlder(imageData)}
    >
      <Image
        src={
          `${process.env.STORAGE_URL}/${imageData.imageId}/view?project=${process.env.APPWRITE_PROJECT_ID}` ||
          "/images/placeholder-image.webp"
        }
        alt={"product image"}
        fill
        className="rounded-lg"
        style={isMac ? { objectFit: "contain" } : { objectFit: "cover" }}
      />
    </div>
  );
}
