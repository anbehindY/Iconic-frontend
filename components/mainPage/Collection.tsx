"use client";

import { useRouter } from "next/navigation";
import { LuChevronRightCircle } from "react-icons/lu";
import { CollectionDto } from "@/types/collections.types";

export default function Collection({ item }: { item: CollectionDto }) {
  const router = useRouter();
  return (
    <div
      className="card w-44 h-48 bg-base-100 shadow-light cursor-pointer p-6 group"
      key={item.id}
      onClick={() => router.push(`/collections/${item.name}`)}
    >
      <figure className="transition-transform duration-300 ease-in-out group-hover:scale-105">
        <img src={`/icons/${item.name.toLowerCase()}_collection.avif`} alt="Shoes" />
      </figure>
      <div className="mx-auto mt-auto flex relative">
        <h2 className="transition-all duration-300 ease-in-out text-sm mr-1 ml-6 whitespace-nowrap group-hover:ml-2">
          {item.name}
        </h2>
        <span className="transition-all duration-500 ease-in-out opacity-0 invisible translate-x-3 group-hover:translate-x-2 group-hover:opacity-100 group-hover:visible">
          <LuChevronRightCircle className="text-xl" />
        </span>
      </div>
    </div>
  );
}
