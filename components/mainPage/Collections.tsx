import Collection from "./Collection";

export default function Collections() {
  const COLLECTIONS = [
    {
      name: 'iPhone',
      img: 'iphone',
    },
    {
      name: 'Macbook',
      img: 'mac',
    },
    {
      name: 'iPad',
      img: 'ipad',
    },
    {
      name: 'Apple Watch',
      img: 'apple_watch',
    },
    {
      name: 'AirPods',
      img: 'airpods',
    }];

  return (
    <section className="bg-slate-300/20 flex justify-center items-center gap-16 px-4 py-32 w-full">
      {COLLECTIONS.map((item) => {
        return <Collection key={item.name} img={item.img} name={item.name}/>;
      })}
    </section>
  );
}
