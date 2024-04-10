"use client";

import clsx from "clsx";
import Image from "next/image";

type ColorPickerProps = {
  item: {
    imageId: string;
    color: string;
    colorCode: string;
  };
  activeImage: string;
  onClickHanlder: any;
  isMac?: boolean;
};

export default function ColorPicker({
  item,
  activeImage,
  onClickHanlder,
  isMac,
}: ColorPickerProps) {
  return (
    <div
      className={clsx(
        "w-12 h-12 p-[2px] rounded-lg relative aspect-square border-2 cursor-pointer",
        {
          "border-black": activeImage == item.imageId,
          "border-transparent": activeImage != item.imageId,
        }
      )}
      onClick={() => onClickHanlder(item.imageId)}
    >
      <Image
        src={`${process.env.STORAGE_URL}/${item.imageId}`}
        alt="demo"
        fill
        className="rounded-lg"
        style={isMac ? { objectFit: "contain" } : { objectFit: "cover" }}
      />
    </div>
  );
}
