"use client";

import { useRouter } from "next/navigation";
import { LuChevronRightCircle } from "react-icons/lu";

type CollectionProps = {
  img: string;
  name: string;
};
export default function Collection({ name, img }: CollectionProps) {
  const router = useRouter();
  return (
    <div
      className="card w-44 h-48 bg-base-100 shadow-xl p-6 group"
      key={name}
      onClick={() => router.push(`/collections/${name}`)}
    >
      <figure className="transition-transform duration-300 ease-in-out group-hover:scale-105">
        <img src={`/icons/${img}_collection.avif`} alt={name + "collection"} />
      </figure>
      <div className="mx-auto mt-auto flex relative">
        <h2 className="transition-all duration-300 ease-in-out text-[15px] ml-4 whitespace-nowrap group-hover:ml-2">
          {name}
        </h2>
        <span className="transition-all duration-500 ease-in-out opacity-0 invisible translate-x-3 group-hover:translate-x-2 group-hover:opacity-100 group-hover:visible">
          <LuChevronRightCircle className="text-xl" />
        </span>
      </div>
    </div>
  );
}
