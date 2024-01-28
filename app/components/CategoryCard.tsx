import React from "react";
import { Card } from "primereact/card";

export default function CategoryCard({ item }: { item: number }) {
  return (
    <div className="card" key={item}>
      <Card title="Simple Card" className="w-[200px] h-[200px]">
        <p className="m-0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
      </Card>
    </div>
  );
}
