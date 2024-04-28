"use client";

import React from "react";
import useGetMyOrders from "@/hooks/queryHooks/useGetMyOrders";
import LoadingPage from "@/app/loading";
import ErrorPage from "@/app/error";
import AddLabel from "@/components/shared/AddLabel";
import Table, { TableColumn } from "@/components/shared/Table";
import { useParams } from "next/navigation";
import { OrderItemResponseDto } from "@/types/orders.types";
import dayjs from "dayjs";

const OrderDetailsPage: React.FC = () => {
  const params = useParams();
  const GetMyOrdersQuery = useGetMyOrders();

  if (GetMyOrdersQuery.isPending) return <LoadingPage />;

  if (GetMyOrdersQuery.isError) return <ErrorPage />;

  const order = GetMyOrdersQuery.data.payload.find(
    (item) => item.id === params.id,
  )!;

  const columns: TableColumn<OrderItemResponseDto>[] = [
    {
      title: "Product Name",
      dataIndex: "product",
      render: (product) => <span>{product.name}</span>,
    },
    {
      title: "Variation",
      dataIndex: "product",
      render: (product: OrderItemResponseDto["product"]) => (
        <span>
          {product.variant.color}, &nbsp;
          {product.variant.ram}, &nbsp;
          {product.variant.storage}, &nbsp;
          {product.variant.processor}
        </span>
      ),
    },
    {
      title: "Unit Price",
      dataIndex: "price",
      render: (value) => <span>{value} MMK</span>,
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
    },
    {
      title: "Sub Total",
      dataIndex: "price",
      render: (value, record) => <span>{value * record.quantity} MMK</span>,
    },
  ];

  return (
    <main
      className={"min-h-[calc(100vh-296px)] bg-white px-20 flex flex-col gap-8"}
    >
      <h2 className={"text-2xl font-semibold mt-10"}>Order Details</h2>

      <section className={"flex flex-col gap-6"}>
        <div className={"flex flex-col gap-6"}>
          <AddLabel label={"Order ID"}>{order.id}</AddLabel>
          <AddLabel label={"Order Date"}>
            {dayjs(order.createdAt).format("DD/MM/YYYY hh:mm")}
          </AddLabel>
          <AddLabel label={"Order Status"}>{order.status}</AddLabel>
          <AddLabel label={"Payment Method"}>{order.paymentType}</AddLabel>
          <AddLabel label={"Total Amount"}>{order.totalAmount} MMK</AddLabel>
          <AddLabel label={"No. of Items"}>{order.orderItems.length}</AddLabel>
        </div>
      </section>

      <section className={"flex flex-col gap-4"}>
        <Table
          dataSource={order.orderItems}
          columns={columns}
          className={"mb-12"}
          rowClassname={"cursor-pointer hover:bg-base-100"}
          titleClassname={"text-base font-medium text-base-content"}
        />
      </section>
    </main>
  );
};

export default OrderDetailsPage;
