import Collection from "./Collection";
import { CollectionDto } from "@/types/collections.types";

type CollectionProps = {
  collections: CollectionDto[];
};
export default function Collections({ collections }: CollectionProps) {
  return (
    <section className="bg-slate-300/20 cursor-pointer flex justify-center items-center gap-12 px-4 py-32 w-full">
      {collections.map((item) => {
        return <Collection key={item.id} item={item} />;
      })}
    </section>
  );
}
