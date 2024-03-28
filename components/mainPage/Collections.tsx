import Collection from "./Collection";

export default function Collections() {
  return (
    <section className="bg-slate-300/20 flex justify-center items-center gap-16 px-4 py-32 w-full">
      {[1, 2, 3, 4, 5].map((item) => {
        return <Collection key={item} item={item} />;
      })}
    </section>
  );
}
