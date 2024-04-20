"use client";
import { RootState } from "@/store";
import { clsx } from "clsx";
import { LuShoppingCart } from "react-icons/lu";
import { useSelector } from "react-redux";

export default function CartModal() {
  const cartData = useSelector((state: RootState) => state.cart);
  console.log(cartData, "cart data");

  return (
    <>
      <dialog id="cart_modal" className="modal modal-top justify-items-end">
        <div className="modal-box w-full max-w-2xl transition-all duration-1000 ease-in-out">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute text-black text-2xl right-8 top-[36px]">
              ✕
            </button>
          </form>
          <div className="min-h-[500px] px-6 py-4">
            {cartData ? (
              <div className="w-full h-[500px] font-bold text-xl">
                <div className="flex justify-start items-center gap-2 w-full">
                  Cart
                  <div className="bg-black rounded-full w-7 h-7 text-xs text-white font-semibold grid place-items-center">
                    {cartData.cartItems.length}
                  </div>
                </div>
                <div className="flex flex-col gap-3 mt-8">
                  {cartData.cartItems.map((item) => (
                    <div
                      key={item.variantId}
                      className="flex gap-4 items-center"
                    >
                      <p></p>
                      <p>{item.quantity}</p>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="flex flex-col justify-center items-center w-full h-[500px] gap-4">
                <div className="relative">
                  <div className="bg-black rounded-full w-7 h-7 text-xs text-white font-semibold grid place-items-center absolute -top-3 -right-3">
                    0
                  </div>
                  <LuShoppingCart size={40} />
                </div>
                <p>Your cart is empty</p>
              </div>
            )}
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
