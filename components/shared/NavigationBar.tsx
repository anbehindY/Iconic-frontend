"use client";

import Link from "next/link";
import MegaMenu from "./MegaMenu";
import { FaApple } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { LuShoppingCart, LuUser } from "react-icons/lu";
import { CollectionDto } from "@/types/collections.types";
import { RootState } from "@/store";
import { useSelector } from "react-redux";

type NavigationBarProps = {
  collections: CollectionDto[];
};

export default function NavigationBar({ collections }: NavigationBarProps) {
  const cartData = useSelector((state: RootState) => state.cart);

  return (
    <div className="drawer sticky top-0 z-50">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-white px-16 py-5">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>

          <Link href="/" className="me-4">
            <div className={"flex gap-2 items-center text-neutral"}>
              <FaApple className={"mb-1"} size={24} />
              <h1
                className={
                  "menu-title text-neutral font-semibold text-lg p-0 flex"
                }
              >
                <span className={"text-lg font-bold"}>i</span>
                <span>CONIC</span>
              </h1>
            </div>
          </Link>

          {/* Mega Menu */}
          <MegaMenu collections={collections} />

          {/* Prifile tab */}
          <div className="flex gap-4 ml-auto">
            <button className={"btn btn-ghost btn-circle btn-sm"}>
              <IoMdSearch size={28} />
            </button>
            <button className={"btn btn-ghost btn-circle btn-sm"}>
              <LuUser size={26} />
            </button>
            <button
              className={"btn btn-ghost btn-circle btn-sm relative"}
              onClick={() =>
                (
                  document.getElementById("cart_modal") as HTMLDialogElement
                ).showModal()
              }
            >
              {cartData.cartItems.length > 0 && (
                <div className="bg-black rounded-full w-4 h-4 text-[10px] text-white font-semibold grid place-items-center absolute top-0 -right-1">
                  {cartData.cartItems.length}
                </div>
              )}
              <LuShoppingCart size={24} />
            </button>
          </div>
        </div>
        {/* Page content here */}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200">
          {/* Sidebar content here */}
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
