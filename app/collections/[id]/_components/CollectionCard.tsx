'use client';

import { useState } from "react";
import ColorPicker from "./ColorPicker";
import Image from "next/image";
import { useRouter } from "next/navigation";

export type CollectionCardProps = {
  item: number;
};

export default function CollectionCard({ item }: CollectionCardProps) {
    
const [active, setActive] = useState<number>(1);
const router = useRouter();
  return (
    <div key={item} className="w-[350px]">
      <div className="relative aspect-square cursor-pointer" onClick={() => router.push(`/products/${item}`)}>
        <Image
          src="/dummy_iphone.webp"
          alt="demo"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="flex flex-col gap-3">
        <h3 onClick={() => router.push(`/products/${item}`)} className="cursor-pointer">iPhone 15 Pro Max (eSim + PhysicalSim)</h3>
        <p className="text-zinc-500">From 4,000,000 Ks</p>
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5, 6, 7].slice(0, 4).map((item) => {
            return <ColorPicker item={item} key={item} onClickHanlder={(item: number) => setActive(item)} active={active} />;
          })}
        </div>
      </div>
    </div>
  );
}
