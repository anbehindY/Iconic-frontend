"use client";

import clsx from "clsx";
import Image from "next/image";

type ColorPickerProps = {
  item: number;
  active: number;
  onClickHanlder: any;
};

export default function ColorPicker({ item, active, onClickHanlder }: ColorPickerProps) {
  return (
    <div
      className={clsx(
        "w-12 h-12 p-[2px] rounded-lg relative aspect-square border-2 cursor-pointer",
        {
          "border-black": active == item,
          "border-transparent": active != item,
        }
      )}
      onClick={() => onClickHanlder(item)}
    >
      <Image src="/dummy_iphone.webp" alt="demo" fill className="rounded-lg" />
    </div>
  );
}
