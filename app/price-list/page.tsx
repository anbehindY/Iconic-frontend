"use client";

import useGetUpdatedPriceList from "@/hooks/queryHooks/useGetUpdatedPriceList";
import ErrorPage from "@/app/error";
import LoadingPage from "@/app/loading";
import useGetCollections from "@/hooks/queryHooks/useGetCollections";
import { useEffect, useState } from "react";
import mergeClassNames from "@/utils/mergeClassnames";
import { ProductVariantPriceDto } from "@/types/products.types";
import Table, { TableColumn } from "@/components/shared/Table";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useRouter } from "next/navigation";

export default function PriceList() {
  const router = useRouter();
  const GetAllCollectionsQuery = useGetCollections();

  const GetUpdatedPriceListQuery = useGetUpdatedPriceList();

  const [activeTab, setActiveTab] = useState<string>("");

  useEffect(() => {
    if (GetAllCollectionsQuery.isSuccess && GetAllCollectionsQuery.data) {
      const firstCollection = GetAllCollectionsQuery.data.payload.find(
        (item) => item.products.length > 0,
      );

      if (firstCollection) setActiveTab(firstCollection.id);
    }
  }, [GetAllCollectionsQuery.isSuccess, GetAllCollectionsQuery.data]);

  if (GetUpdatedPriceListQuery.isPending || GetAllCollectionsQuery.isPending)
    return <LoadingPage />;

  if (GetUpdatedPriceListQuery.isError || GetAllCollectionsQuery.isError)
    return <ErrorPage />;

  const filteredPriceList = GetUpdatedPriceListQuery.data.payload.filter(
    (productVariant) => productVariant.product.productType.id === activeTab,
  );

  const columns: TableColumn<ProductVariantPriceDto>[] = [
    {
      title: "Model & Capacity",
      dataIndex: "product",
      render: (product, record) => (
        <div className={"flex flex-col gap-2"}>
          <span className={"font-semibold"}>{product.name}</span>
          <span>{record.processor}</span>
          <span>{record.ram} Memory</span>
          <span>{record.storage} Storage</span>
          <span>{record.color}</span>
        </div>
      ),
    },
    {
      title: "Selling Price",
      dataIndex: "price",
      render: (price) => (
        <span>{price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} Ks</span>
      ),
    },
    {
      title: "",
      dataIndex: "id",
      render: (price, record) => (
        <div
          className={
            "badge badge-outline badge-primary h-[40px] ps-5 pe-3 btn btn-sm"
          }
          onClick={() => {
            router.push(`/products/${record.id}`);
          }}
        >
          Shop
          <MdKeyboardArrowRight className={"text-primary -ml-2"} size={20} />
        </div>
      ),
    },
  ];

  return (
    <section className="min-h-[calc(100vh-292px)] pt-8 pb-16 flex flex-col gap-8 w-full max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-base-content/90">Price List</h1>
      <div role="tablist" className="tabs tabs-bordered">
        {GetAllCollectionsQuery.data.payload
          .filter((collection) => collection.products.length > 0)
          .map((collection) => {
            return (
              <a
                role="tab"
                key={collection.id}
                className={mergeClassNames(
                  "tab !h-[48px]",
                  activeTab === collection.id && "tab-active",
                )}
                onClick={() => setActiveTab(collection.id)}
              >
                {collection.name}
              </a>
            );
          })}
      </div>
      <Table
        dataSource={filteredPriceList}
        columns={columns}
        containerClassname={"w-full"}
        titleClassname={"text-sm font-medium text-base-content/50"}
      />
    </section>
  );
}
