"use client";

import React, { Dispatch, SetStateAction } from "react";
import Modal from "@/components/shared/Modal";
import { useRouter } from "next/navigation";
import Image from "next/image";

const WelcomeModal: React.FC<{
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}> = ({ open, setOpen }) => {
  const router = useRouter();
  return (
    <Modal
      id={"welcome-modal"}
      open={open}
      className={"-mt-32 max-w-lg"}
      setOpen={setOpen}
      openButton={null}
      title={""}
      actionOnClose={() => {
        setOpen(false);
        router.push("/");
      }}
    >
      <div className={"flex flex-col gap-4 items-center pb-8"}>
        <Image
          src={"/images/congratulation.gif"}
          width={200}
          height={200}
          alt={"Congratulation"}
          className={"h-[120px] w-auto"}
        />
        <h2 className={"font-semibold"}>Welcome to Iconic</h2>
        <p className={"text-sm text-base-content/75"}>
          You have successfully created an Iconic Account.
        </p>
        <button
          onClick={() => {
            setOpen(false);
            router.push("/");
          }}
          className={"btn btn-sm btn-link"}
        >
          Explore more products
        </button>
      </div>
    </Modal>
  );
};

export default WelcomeModal;
