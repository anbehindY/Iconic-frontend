"use client";

import { useRouter } from "next/navigation";
import { LuChevronRightCircle } from "react-icons/lu";

export default function Collection({ item }: { item: number }) {
  const router = useRouter();
  return (
    <div
      className="card w-44 h-48 bg-base-100 shadow-xl p-6 group"
      key={item}
      onClick={() => router.push(`/collections/${item}`)}
    >
      <figure className="transition-transform duration-300 ease-in-out group-hover:scale-105">
        <img
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="mx-auto mt-auto flex relative">
        <h2 className="transition-all duration-300 ease-in-out text-sm mr-2 ml-4 whitespace-nowrap group-hover:ml-2">
          Power Treads
        </h2>
        <span className="transition-all duration-500 ease-in-out opacity-0 invisible group-hover:opacity-100 group-hover:visible">
          <LuChevronRightCircle className="text-xl" />
        </span>
      </div>
    </div>
  );
}
