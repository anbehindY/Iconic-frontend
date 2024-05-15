"use client";

import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "@/store/slices";
import { useRouter } from "next/navigation";
import { hasCookie } from "cookies-next";
import AddLabel from "@/components/shared/AddLabel";
import Table, { TableColumn } from "@/components/shared/Table";
import useGetMyOrders from "@/hooks/queryHooks/useGetMyOrders";
import LoadingPage from "@/app/loading";
import ErrorPage from "@/app/error";
import { OrderDto, OrderItemResponseDto } from "@/types/orders.types";
import dayjs from "dayjs";
import { MdKeyboardArrowRight } from "react-icons/md";

const ProfilePage: React.FC = () => {
  const userData = useSelector(selectUser);
  const router = useRouter();

  useEffect(() => {
    if (!hasCookie("iconic-fe-token")) {
      router.push("/");
    }
  }, [userData, router]);

  const GetMyOrdersQuery = useGetMyOrders();

  if (GetMyOrdersQuery.isPending) return <LoadingPage />;

  if (GetMyOrdersQuery.isError) return <ErrorPage />;

  const columns: TableColumn<OrderDto>[] = [
    {
      title: "Order ID",
      dataIndex: "id",
    },
    {
      title: "Order Date",
      dataIndex: "createdAt",
      render: (value) => <span>{dayjs(value).format("DD/MM/YYYY hh:mm")}</span>,
    },
    {
      title: "Total",
      dataIndex: "totalAmount",
      render: (value) => <span>{value} MMK</span>,
    },
    {
      title: "Status",
      dataIndex: "status",
    },
    {
      title: "No. of Items",
      dataIndex: "orderItems",
      render: (value) => <span>{value.length}</span>,
    },
    {
      title: "",
      dataIndex: "id",
      render: (value) => <MdKeyboardArrowRight size={20} />,
    },
  ];

  return (
    <main
      className={
        "min-h-[calc(100vh-296px)] bg-white px-20 flex flex-col gap-16"
      }
    >
      <section className={"flex flex-col gap-6 mt-10"}>
        <h2 className={"text-2xl font-semibold"}>User Information</h2>
        <div className={"flex flex-col gap-6"}>
          <AddLabel label={"Customer Name"}>{userData.name}</AddLabel>
          <AddLabel label={"Email"}>{userData.email}</AddLabel>
          <AddLabel label={"Phone"}>{userData.phone}</AddLabel>
          <AddLabel label={"Shipping Address"}>{userData.address}</AddLabel>
        </div>
      </section>

      <section className={"flex flex-col gap-4"}>
        <h2 className={"text-2xl font-semibold"}>Order List</h2>
        <Table
          dataSource={GetMyOrdersQuery.data.payload}
          columns={columns}
          className={"mb-12"}
          rowClassname={"cursor-pointer hover:bg-base-100"}
          titleClassname={"text-base font-medium text-base-content"}
          onRowClick={(record) => router.push(`/orders/${record.id}`)}
        />
      </section>
    </main>
  );
};

export default ProfilePage;
