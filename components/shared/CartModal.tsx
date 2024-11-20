"use client";
import { RootState } from "@/store";
import { removeFromCart, selectUser } from "@/store/slices";
import { hasCookie } from "cookies-next";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { LuShoppingCart } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";

export default function CartModal() {
  const cartData = useSelector((state: RootState) => state.cart);
  const userData = useSelector(selectUser);
  const router = useRouter();
  const dispatch = useDispatch();
  return (
    <>
      <dialog id="cart_modal" className="modal modal-top justify-items-end">
        <div className="modal-box w-full max-h-[calc(100vh-2em)] max-w-2xl transition-all duration-1000 ease-in-out">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute text-black text-2xl right-8 top-[36px] z-50">
              ✕
            </button>
          </form>
          <div className="h-[600px] py-4">
            {cartData.cartItems.length > 0 ? (
              <div className="w-full h-[600px] font-bold text-xl relative">
                <div className="flex justify-start items-center gap-2 w-full px-6">
                  Cart
                  <div className="bg-black rounded-full w-7 h-7 text-xs text-white font-semibold grid place-items-center">
                    {cartData.cartItems.length}
                  </div>
                </div>

                {/* cart items */}
                <div className="flex flex-col gap-2 mt-8 h-[360px] overflow-scroll px-6">
                  {cartData.cartItems.map((item) => (
                    <div
                      key={item.variantId}
                      className="flex gap-6 items-center"
                    >
                      <div className="relative w-24 h-24">
                        <Image
                          src={
                            `${process.env.STORAGE_URL}/${item.image?.imageId}/view?project=${process.env.APPWRITE_PROJECT_ID}` ||
                            "/images/placeholder-image.webp"
                          }
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
                        <button
                          className="text-xs font-normal font-sans underline-offset-2 underline text-zinc-400 hover:no-underline"
                          onClick={() => {
                            dispatch(removeFromCart(item.variantId));
                          }}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* cart footer */}
                <div className="absolute bottom-0 w-full pb-4 border-t">
                  <div className="flex justify-between items-center p-6">
                    <div className="text-2xl font-semibold">Total</div>
                    <div className="text-xl font-semibold">
                      {cartData.cartItems
                        .reduce(
                          (acc, item) => acc + item.price * item.quantity,
                          0
                        )
                        .toLocaleString()}
                      Ks
                    </div>
                  </div>
                  <div className="flex justify-center">
                    {!hasCookie("iconic-fe-token") || !userData.id ? (
                      <button
                        className="btn btn-primary w-full font-normal"
                        onClick={() => {
                          router.push("/auth/login");
                          (
                            document.getElementById(
                              "cart_modal"
                            ) as HTMLDialogElement
                          ).close();
                        }}
                      >
                        Log in to buy now
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          router.push("/checkout");
                          (
                            document.getElementById(
                              "cart_modal"
                            ) as HTMLDialogElement
                          ).close();
                        }}
                        className="btn btn-primary w-full"
                      >
                        Proceed to Checkout
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col justify-center items-center w-full h-[600px] gap-4 px-6">
                <div className="relative">
                  <div className="bg-black rounded-full w-7 h-7 text-xs text-white font-semibold grid place-items-center absolute -top-3 -right-3">
                    0
                  </div>
                  <LuShoppingCart size={40} />
                </div>
                <p className="text-black">Your cart is empty</p>
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
