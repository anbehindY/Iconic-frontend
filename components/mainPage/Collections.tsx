import Collection from "./Collection";

export default function Collections() {
  const COLLECTIONS = [
    {
      name: "iPhone",
      img: "iphone",
    },
    {
      name: "iPad",
      img: "ipad",
    },
    {
      name: "Macbook",
      img: "mac",
    },
    {
      name: "Apple Watch",
      img: "apple_watch",
    },
    {
      name: "AirPods",
      img: "airpods",
    },
    {
      name: "Accessories",
      img: "accessories",
    },
  ];

  return (
    <section className="bg-slate-300/20 flex justify-center items-center gap-6 py-[106px] w-full">
      {COLLECTIONS.map((item) => {
        return <Collection key={item.name} img={item.img} name={item.name} />;
      })}
    </section>
  );
}
