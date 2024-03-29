import React from "react";
import { Card } from "primereact/card";

export default function MainCard({ item }: { item: number }) {
  return (
    <div className="card" key={item}>
      <Card title="Simple Card" className="w-[600px] h-[500px]">
        <p className="m-0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
          sed consequuntur error repudiandae numquam deserunt quisquam repellat
          libero asperiores earum nam nobis, culpa ratione quam perferendis
          esse, cupiditate neque quas!
        </p>
      </Card>
    </div>
  );
}
