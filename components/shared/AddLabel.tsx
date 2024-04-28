import { AddLabelProps } from "@/types/shared.types";
import React from "react";

export default function AddLabel({ children, label }: AddLabelProps) {
  return (
    <div className={`flex gap-4 font-medium items-center`}>
      <label className={"font-medium text-zinc-400"}>{label}:</label>
      {children}
    </div>
  );
}
