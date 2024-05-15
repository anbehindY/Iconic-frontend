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
import { BiChevronDown } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeAllFromCart } from "@/store/slices";
import { useRouter } from "next/navigation";
import { RootState } from "@/store";
import LoadingPage from "@/app/loading";
import ErrorPage from "@/app/error";
import { hasCookie } from "cookies-next";

export default function ProductDetail({ params }: { params: { id: string } }) {
  const dispatch = useDispatch();
  const userData = useSelector((state: RootState) => state.user);
  const cartData = useSelector((state: RootState) => state.cart);
  const router = useRouter();
  const [productData, setProductData] = useState<ProductDetailsDto | null>(
    null,
  );

  const [activeImage, setActiveImage] = useState<ProductImageDto>();
  const [activeStorage, setActiveStorage] = useState<string>();
  const [activeProcessor, setActiveProcessor] = useState<string>();
  const [quantity, setQuantity] = useState<number>(1);
  const [variant, setVariant] = useState<ProductVariantDto | null>();
  const GetProductData = useGetProductDetails(params.id);

  const isMac = productData?.name.toLowerCase().includes("macbook") === true;

  useEffect(() => {
    if (GetProductData.isSuccess) {
      setProductData(GetProductData.data.payload);
      setActiveStorage(GetProductData.data.payload.storages[0]);
      setActiveImage(GetProductData.data.payload.images[0]);
      setActiveProcessor(GetProductData.data.payload.processors[0]);
    }
  }, [GetProductData.isSuccess, GetProductData.data]);

  useEffect(() => {
    const variantChecker = productData?.variants.some((item) => {
      return (
        item.image.color === activeImage?.color &&
        item.storage === activeStorage
      );
    });
    if (productData && variantChecker && !isMac) {
      const Variant = productData.variants.filter(
        (item) =>
          item.image.color === activeImage?.color &&
          item.storage === activeStorage,
      )[0];
      setVariant(Variant);
    } else if (productData && isMac) {
      const Variant = productData.variants.filter(
        (item) =>
          item.image.color === activeImage?.color &&
          item.storage === activeStorage &&
          item.processor === activeProcessor,
      )[0];
      setVariant(Variant);
    } else {
      setVariant(null);
    }
    setQuantity(1);
  }, [activeImage, activeStorage, productData, activeProcessor, isMac]);

  if (GetProductData.isPending) return <LoadingPage />;

  if (GetProductData.isError) return <ErrorPage />;

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
    <section
      className={clsx("px-12 py-12 bg-zinc-100", { "!bg-white": isMac })}
    >
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
            <p className="text-secondary font-medium text-lg">
              {variant ? `${variant.price} Ks` : "not available!"}
            </p>
          </div>

          {/* divider */}
          <div className="divider"></div>

          <div className="flex flex-col gap-6">
            {/* color */}
            <div>
              <div className="font-medium text-[15px]">
                <span className={"text-slate-500 text-sm"}>Color :</span>
                &nbsp;
                <span>{activeImage?.color || productData.images[0].color}</span>
              </div>
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

            {/* processor */}
            {isMac && (
              <div>
                <p className="font-medium text-[15px]">
                  <span className="text-slate-500 text-sm">Processor :</span>{" "}
                  {activeProcessor}
                </p>
                <div className="flex gap-2">
                  {productData.processors.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="flex mt-2"
                        onClick={() => setActiveProcessor(item)}
                      >
                        <button
                          className={clsx(
                            "px-4 h-12 border border-gray-400 rounded-full transition-all duration-200 ease-in-out",
                            {
                              "border-transparent bg-stone-200":
                                activeProcessor === item,
                            },
                          )}
                        >
                          {item}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* storage */}
            <div>
              <p className="font-medium text-[15px]">
                <span className="text-slate-500 text-sm">Storage :</span>{" "}
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
                          },
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
              <span className="text-slate-500 text-sm">Quantity :</span>
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
                  className="w-full h-12 border border-black rounded-full disabled:cursor-not-allowed"
                  disabled={!variant || variant.inStock < quantity}
                  onClick={() => {
                    dispatch(
                      addToCart({
                        variantId: variant!.id,
                        quantity: quantity,
                        image: activeImage && activeImage,
                        name: productData.name,
                        price: variant!.price,
                        storage: activeStorage,
                      }),
                    );
                    (
                      document.getElementById("cart_modal") as HTMLDialogElement
                    ).showModal();
                  }}
                >
                  Add to cart
                </button>
              </div>
              {!hasCookie("iconic-fe-token") || !userData.id ? (
                <div className="w-full">
                  <button
                    className="w-full h-12 bg-primary rounded-full disabled:cursor-not-allowed"
                    onClick={() => router.push("/auth/login")}
                  >
                    Log in to buy now
                  </button>
                </div>
              ) : (
                <div className="w-full">
                  <button
                    className="w-full h-12 bg-primary rounded-full disabled:cursor-not-allowed"
                    disabled={!variant || variant.inStock < quantity}
                    onClick={() => {
                      dispatch(removeAllFromCart());
                      dispatch(
                        addToCart({
                          variantId: variant!.id,
                          quantity: quantity,
                          image: activeImage && activeImage,
                          name: productData.name,
                          price: variant!.price,
                          storage: activeStorage,
                        }),
                      );

                      router.push("/checkout");
                    }}
                  >
                    Buy it now
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 px-32">
        <div className="divider " />
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-medium text-zinc-600">Key features</h2>
          <BiChevronDown className="text-5xl font-semibold text-zinc-600" />
        </div>
        <ul className="mt-10">
          {productData.keyFeatures.map((item, index) => {
            return (
              <li key={index} className="flex gap-3 mt-4 items-start">
                <div className="h-12 rounded-full flex items-start justify-start">
                  <RiInformationFill className="text-zinc-700 text-2xl" />
                </div>
                <div>
                  <p className="text-sm">{item}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
