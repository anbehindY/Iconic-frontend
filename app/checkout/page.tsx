"use client";

import AddLabel from "@/components/shared/AddLabel";
import { RootState } from "@/store";
import { useSelector } from "react-redux";
import Image from "next/image";

export default function Checkout() {
  const userData = useSelector((state: RootState) => state.user);
  const cartData = useSelector((state: RootState) => state.cart);

  return (
    <section className="min-h-dvh border-t border-zinc-300 bg-white flex">
      <div className="flex flex-col gap-4 items-center w-1/2 border-r py-20 px-40">
        <div>
          <AddLabel label="Name">{userData.name}</AddLabel>
          <AddLabel label="Email">{userData.email}</AddLabel>
          <AddLabel label="Address">{userData.address}</AddLabel>
          <AddLabel label="Member Type">{userData.memberType}</AddLabel>
          <AddLabel label="Phone Number">{userData.phone}</AddLabel>
        </div>
        <div>
          <button
            className="bg-black text-white py-4 px-8 rounded-full"
            onClick={() => alert("do something here")}
          >
            Confirm Order
          </button>
        </div>
      </div>
      {cartData && cartData.cartItems.length > 0 && (
        <aside className="w-1/2 px-10 pt-6 pb-12">
          <div className="flex flex-col gap-2 mt-8 px-6">
            {cartData.cartItems.map((item) => (
              <div key={item.variantId} className="flex gap-6 items-center">
                <div className="relative w-24 h-24">
                  <Image
                    src={`${process.env.STORAGE_URL}/${item.image?.imageId}`}
                    fill
                    style={{ objectFit: "cover" }}
                    alt={item.name}
                  />
                </div>
                <div className="text-[15px] font-normal">
                  <p>{item.name}</p>
                  <p className="text-normal text-zinc-600 font-semibold -mt-1">
                    {item.price} Ks
                  </p>
                  <p className="text-zinc-600">
                    {item.image?.color}/{item.storage}
                  </p>
                </div>
                <div className="ml-auto">
                  <div className="px-4 border border-zinc-300 shadow-sm py-2 rounded-lg font-medium text-xs text-center">
                    {item.quantity}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center pt-12 px-7">
            <div className="text-sm font-medium">Shipping</div>
            <div className="text-sm font-medium">FREE</div>
          </div>
          <div className="flex justify-between items-center px-7 pt-2">
            <div className="text-2xl font-semibold">Total</div>
            <div className="text-xl font-semibold">
              {cartData.cartItems
                .reduce((acc, item) => acc + item.price * item.quantity, 0)
                .toLocaleString()}
              Ks
            </div>
          </div>
        </aside>
      )}
    </section>
  );
}
