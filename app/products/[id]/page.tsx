"use client";

import ColorPicker from "@/app/collections/[id]/_components/ColorPicker";
import useGetProductDetails from "@/hooks/queryHooks/useGetProductDetails";
import {
  ProductDetailsDto,
  ProductImageDto,
  ProductVariantDto,
} from "@/types/products.types";
import clsx from "clsx";
import Image from "next/image";
import { useEffect, useState } from "react";
import { PiSealCheckFill } from "react-icons/pi";
import { MdCancel } from "react-icons/md";
import { RiInformationFill } from "react-icons/ri";

export default function ProductDetail({ params }: { params: { id: string } }) {
  const [productData, setProductData] = useState<ProductDetailsDto | null>(
    null
  );

  const [activeImage, setActiveImage] = useState<ProductImageDto>();
  const [activeStorage, setActiveStorage] = useState<string>();
  const [quantity, setQuantity] = useState<number>(1);
  const [variant, setVariant] = useState<ProductVariantDto | null>();
  const GetProductData = useGetProductDetails(params.id);
  const isMac = productData?.name.toLowerCase().includes('macbook') === true;
  useEffect(() => {
    if (GetProductData.isSuccess) {
      console.log("product", GetProductData.data);
      setProductData(GetProductData.data.payload);
      setActiveStorage(GetProductData.data.payload.storages[0]);
      setActiveImage(GetProductData.data.payload.images[0]);
    }
  }, [GetProductData.isSuccess]);

  const variantChecker = productData?.variants.some((item) => {
    return (
      item.image.color === activeImage?.color && item.storage === activeStorage
    );
  });

  useEffect(() => {
    if (productData && variantChecker) {
      const Variant = productData.variants.filter(
        (item) =>
          item.image.color === activeImage?.color &&
          item.storage === activeStorage
      )[0];
      console.log("variant", Variant);
      setVariant(Variant);
    } else {
      setVariant(null);
    }
    setQuantity(1);
  }, [activeImage, activeStorage, productData]);

  if (GetProductData.isPending) return <div>Loading...</div>;
  if (GetProductData.isError) return <div>Error...</div>;
  if (!productData)
    return (
      <div className="grid place-content-center">
        Sorry, no product is available at the moment!
      </div>
    );

  const storageHandler = (item: string) => {
    setActiveStorage(item);
  };

  return (
    <section className={clsx("px-12 py-12 bg-zinc-100", {"!bg-white": isMac})}>
      <div className="flex">

        {/* left section */}
        <div className="w-1/2 flex gap-8">
          <div className="flex flex-col">
            {productData?.images.map((item, index) => {
              return (
                <div
                  key={index}
                  className="relative rounded-md aspect-square cursor-pointer w-24"
                  onClick={() => setActiveImage(item)}
                >
                  <Image
                    src={`${process.env.STORAGE_URL}/${item.imageId}`}
                    alt="demo"
                    fill
                    style={{ objectFit: isMac ? "contain" : "cover" }}
                  />
                </div>
              );
            })}
          </div>
          <div className="relative shadow-md rounded-2xl aspect-square min-w-[500px]">
            <Image
              src={`${process.env.STORAGE_URL}/${
                activeImage?.imageId || productData.images[0].imageId
              }`}
              alt="demo"
              fill
              style={{ objectFit: isMac ? "contain" : "cover" }}
              />
          </div>
        </div>

        {/* righ section */}
        <div className="w-1/2 pl-16 ">
          {/* Intro */}
          <div className="flex flex-col">
            <p className="mb-2 text-slate-600">Apple</p>
            <h2 className="mb-2 text-4xl font-semibold">{productData.name}</h2>
            <p className="text-fuchsia-600 font-medium text-lg">
              {productData.variants[0].price} Ks
            </p>
          </div>

          {/* divider */}
          <div className="divider"></div>

          <div className="flex flex-col gap-6">
            {/* color */}
            <div>
              <p className="font-medium text-[15px]">
                <span className="text-slate-500 text-sm">Color:</span>{" "}
                {activeImage?.color || productData.images[0].color}
              </p>
              <div className="flex mt-2">
                {productData.images &&
                  productData.images.map((item, index) => {
                    return (
                      <ColorPicker
                        key={index}
                        imageData={item}
                        activeImage={
                          activeImage?.imageId || productData.images[0].imageId
                        }
                        onClickHanlder={(imageData: {
                          imageId: string;
                          color: string;
                          colorCode: string;
                        }) => setActiveImage(imageData)}
                        className={clsx("w-14 h-14")}
                        isMac={isMac}
                      />
                    );
                  })}
              </div>
            </div>

            {/* storage */}
            <div>
              <p className="font-medium text-[15px]">
                <span className="text-slate-500 text-sm">Storage:</span>{" "}
                {activeStorage}
              </p>
              <div className="flex gap-2">
                {productData.storages.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="flex mt-2"
                      onClick={() => storageHandler(item)}
                    >
                      <button
                        className={clsx(
                          "w-24 h-12 border border-gray-400 rounded-full transition-all duration-200 ease-in-out",
                          {
                            "border-transparent bg-stone-200":
                              activeStorage === item,
                          }
                        )}
                      >
                        {item}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* quantity */}
            <div className="font-medium text-[15px] flex flex-col gap-2">
              <span className="text-slate-500 text-sm">Quantity:</span>
              <div className="w-36 h-12 border border-gray-400 flex justify-between px-6 items-center rounded-full transition-all duration-200 ease-in-out">
                <button
                  className="text-2xl"
                  onClick={() =>
                    quantity > 1 ? setQuantity(quantity - 1) : null
                  }
                >
                  -
                </button>
                <span>{quantity}</span>
                <button
                  className="text-xl"
                  onClick={() =>
                    variant && variant.inStock > quantity
                      ? setQuantity(quantity + 1)
                      : null
                  }
                >
                  +
                </button>
              </div>
            </div>

            {/* pickup */}
            {variant && variant.availability.length > 0 ? (
              <div className="flex gap-3 items-center">
                <PiSealCheckFill className="text-green-500 text-2xl" />
                <span className="text-green-500 text-sm">
                  Pickup available at iCONIC{" "}
                  {variant.availability[0].branch.name} branch
                </span>
              </div>
            ) : (
              <div className="flex gap-3 items-center">
                <MdCancel className="text-red-500 text-2xl" />
                <span className="text-red-500 text-sm">
                  Pickup not available at any iCONIC branch for the moment
                </span>
              </div>
            )}
            {/* stock */}
            {variant ? (
              <div className="flex gap-3 items-center">
                {variant.inStock < 10 ? (
                  <>
                    <RiInformationFill className="text-red-500 text-2xl" />
                    <span className="text-red-500 text-sm">
                      Only {variant?.inStock}{" "}
                      {variant.inStock > 1 ? "units" : "unit"} left
                    </span>
                  </>
                ) : (
                  <>
                    <PiSealCheckFill className="text-green-500 text-2xl" />
                    <span className="text-green-500 text-sm">In stock</span>
                  </>
                )}
              </div>
            ) : (
              <div className="flex gap-3 items-center">
                <>
                  <MdCancel className="text-red-500 text-2xl" />
                  <span className="text-red-500 text-sm">Out of stock</span>
                </>
              </div>
            )}

            {/* action buttons */}
            <div className="flex gap-4">
              <div className="w-full">
                <button
                  className="w-full h-12 border-[3px] border-black rounded-full disabled:cursor-not-allowed"
                  disabled={!variant || variant.inStock < quantity}
                  onClick={() => console.log({variantId: variant?.id, quantity: quantity})}
                >
                  Add to cart
                </button>
              </div>
              <div className="w-full">
                <button
                  className="w-full h-12 bg-fuchsia-500 text-white rounded-full disabled:cursor-not-allowed"
                  disabled={!variant || variant.inStock < quantity}
                  onClick={() => console.log({variantId: variant?.id, quantity: quantity})}
                >
                  Buy now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
