"use client";

import AddLabel from "@/components/shared/AddLabel";
import { RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { removeAllFromCart, selectCart, selectUser } from "@/store/slices";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import useCreateOrder from "@/hooks/queryHooks/useCreateOrder";
import Form from "@/components/shared/Form";
import useGetPaymentTypes from "@/hooks/queryHooks/useGetPaymentTypes";
import { toast } from "react-toastify";

export default function Checkout() {
  const userData = useSelector(selectUser);
  const cartData = useSelector(selectCart);
  const router = useRouter();
  const dispatch = useDispatch();
  const [paymentType, setPaymentType] = useState<string | null>(null);

  console.log(cartData, "cartData");

  const CreateOrderMutation = useCreateOrder();

  const GetPaymentTypesQuery = useGetPaymentTypes();

  useEffect(() => {
    if (
      GetPaymentTypesQuery.isSuccess &&
      GetPaymentTypesQuery.data.payload.length > 0
    ) {
      setPaymentType(GetPaymentTypesQuery.data.payload[0].id);
    }
  }, [GetPaymentTypesQuery.data, GetPaymentTypesQuery.isSuccess]);

  useEffect(() => {
    if (CreateOrderMutation.isSuccess) {
      router.push("profile");
      toast.success(CreateOrderMutation.data.payload.message);
      dispatch(removeAllFromCart());
      CreateOrderMutation.reset();
    } else if (CreateOrderMutation.isError) {
      toast.error(CreateOrderMutation.error.message);
    }
  }, [
    dispatch,
    router,
    CreateOrderMutation,
    CreateOrderMutation.isSuccess,
    CreateOrderMutation.data,
    CreateOrderMutation.isError,
  ]);

  const handleConfirmOrder = () => {
    paymentType &&
      CreateOrderMutation.mutate({
        paymentType,
        orderItems: cartData.cartItems.map((item) => ({
          productVariantId: item.variantId,
          quantity: item.quantity,
        })),
      });
  };

  const paymentTypeOptions =
    GetPaymentTypesQuery.data?.payload.map((item) => ({
      label: item.name,
      value: item.id,
    })) || [];

  return (
    <main className={"min-h-[calc(100vh-296px)] bg-white px-20 flex flex-col"}>
      <h1 className={"py-8 text-2xl !m-0 text-base-content font-semibold"}>
        Checkout
      </h1>
      {/*<div className={"flex items-center gap-4"}>*/}
      {/*  <label>Payment Method : </label>*/}
      {/*  <select*/}
      {/*    className={"select select-bordered rounded-md "}*/}
      {/*    value={paymentType || undefined}*/}
      {/*    onChange={(e) => setPaymentType(e.target.value)}*/}
      {/*  >*/}
      {/*    {paymentTypeOptions.map((item) => (*/}
      {/*      <option key={item.value} value={item.value}>*/}
      {/*        {item.label}*/}
      {/*      </option>*/}
      {/*    ))}*/}
      {/*  </select>*/}
      {/*</div>*/}
      <section className="border-zinc-300 bg-white flex">
        <div className="flex flex-col gap-8 w-1/2 border-r py-8">
          <AddLabel label="Customer">{userData.name}</AddLabel>
          <AddLabel label="Email">{userData.email}</AddLabel>
          <AddLabel label="Shipping Address">{userData.address}</AddLabel>
          <AddLabel label="Contact Number">{userData.phone}</AddLabel>
          <AddLabel label={"Payment Method"}>
            <select
              className={"select select-ghost select-bordered"}
              value={paymentType || undefined}
              onChange={(e) => setPaymentType(e.target.value)}
            >
              {paymentTypeOptions.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
          </AddLabel>
        </div>
        {cartData && cartData.cartItems.length > 0 && (
          <aside className="w-1/2 px-8 pt-8">
            <div className="flex flex-col gap-3 mt-8 px-6">
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
                  <div className="text-[15px] font-normal flex gap-2 flex-col">
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
            <div className="flex justify-between items-center mb-1 pt-12 px-7">
              <div className="text-sm font-medium">Shipping</div>
              <div className="text-sm font-medium">FREE</div>
            </div>
            <div className="flex justify-between items-center px-7 pt-2">
              <div className="text-2xl font-semibold">Total</div>
              <div className="text-xl font-semibold">
                {cartData.cartItems
                  .reduce((acc, item) => acc + item.price * item.quantity, 0)
                  .toLocaleString()}
                &nbsp;Ks
              </div>
            </div>
          </aside>
        )}
      </section>

      <div className={"self-end mt-12 flex gap-4"}>
        <button
          className="btn btn-outline !w-[200px] text-base-content/80 border-text-base-content/80"
          onClick={() => router.push("/")}
        >
          Continue Shopping
        </button>
        <button
          className="btn btn-primary !w-[200px]"
          onClick={handleConfirmOrder}
          disabled={CreateOrderMutation.isPending}
        >
          Confirm Order
        </button>
      </div>
    </main>
  );
}
