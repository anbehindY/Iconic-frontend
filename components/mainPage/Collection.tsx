'use client';

import { useRouter } from "next/navigation";
import { useState } from "react";
import { LuChevronRightCircle } from "react-icons/lu";

export default function Collection({ item }: { item: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();
  return (
    <div
      className="card w-44 h-48 bg-base-100 shadow-xl p-6"
      key={item}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => router.push(`/collections/${item}`)}
    >
      <figure
        className={`transition-transform duration-300 ease-in-out ${
          isHovered ? "scale-105" : "scale-100"
        }`}
      >
        <img
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="mx-auto mt-auto flex relative">
        <h2
          className={`transition-all duration-300 ease-in-out text-sm mr-2 whitespace-nowrap ${
            isHovered ? "ml-2" : "ml-4"
          }`}
        >
          Power Treads
        </h2>
        <span
          className={`transition-all duration-500 ease-in-out ${
            isHovered ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <LuChevronRightCircle className="text-xl" />
        </span>
      </div>
    </div>
  );
}
