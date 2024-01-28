"use client";

import "primereact/resources/themes/lara-light-cyan/theme.css";
import ImageSlider from "./components/ImageSlider";
import CategoryCard from "./components/CategoryCard";
import MainCard from "./components/MainCard";

export default function Home() {
  return (
    <main className="flex-col flex">
      <ImageSlider />
      <section className="flex justify-center p-8 gap-4 bg-slate-100/55">
        {[0, 1, 2, 3, 4, 5].map((item) => (
          <CategoryCard item={item} key={item} />
        ))}
      </section>
      <section className="flex flex-col items-center">
        <h2 className="pt-8 text-4xl font-bold">
          Explore and aquire your desired products now
        </h2>
        <div className="flex flex-wrap justify-center gap-6 p-8">
          {[0, 1, 2, 3].map((item) => (
            <MainCard item={item} key={item} />
          ))}
        </div>
      </section>
    </main>
  );
}
