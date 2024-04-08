'use client';

import Image from "next/image";
import ColorPicker from "./_components/ColorPicker";
import CollectionCard from "./_components/CollectionCard";

type CollectionDetailProps = {
  params: { id: string };
  img: string;
};
export default function CollectionDetail({ params }: CollectionDetailProps) {
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
      <div className="flex flex-wrap gap-x-8 gap-y-16 py-8 px-40">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
          <CollectionCard item={item} key={item} />
        ))}
      </div>
    </section>
  );
}
