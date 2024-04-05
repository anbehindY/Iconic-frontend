"use client";

import Link from "next/link";
import ProfileIcon from "@/icons/ProfileIcon";
import CartIcon from "@/icons/CartIcon";
import SearchIcon from "@/icons/SearchIcon";
import MegaMenu from "./MegaMenu";
import { FaApple } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { LuShoppingCart, LuUser } from "react-icons/lu";
import { CollectionDto } from "@/types/collections.types";

type NavigationBarProps = {
  collections: CollectionDto[];
};

export default function NavigationBar({ collections }: NavigationBarProps) {
  return (
    <div className="drawer sticky top-0 z-50">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-white px-10 lg:px-16">
          <div className="flex-none hidden">
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
              <IoMdSearch size={24} />
            </button>
            <button className={"btn btn-ghost btn-circle btn-sm"}>
              <LuUser size={22} />
            </button>
            <button className={"btn btn-ghost btn-circle btn-sm"}>
              <LuShoppingCart size={20} />
            </button>
            {/*<span>*/}
            {/*  <SearchIcon />*/}
            {/*</span>*/}
            {/*<span>*/}
            {/*  <ProfileIcon />*/}
            {/*</span>*/}
            {/*<span>*/}
            {/*  <CartIcon />*/}
            {/*</span>*/}
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
