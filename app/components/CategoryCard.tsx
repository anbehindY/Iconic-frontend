import React from "react";
import { Card } from "primereact/card";

export default function CategoryCard({ key }: { key: number }) {
  return (
    <div className="card" key={key}>
      <Card title="Simple Card" className="w-[200px] h-[200px]">
        <p className="m-0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
      </Card>
    </div>
  );
}
