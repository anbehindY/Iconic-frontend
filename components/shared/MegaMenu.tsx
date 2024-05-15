import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { CollectionDto } from "@/types/collections.types";

type MegaMenuProps = {
  collections: CollectionDto[];
};
export default function MegaMenu({ collections }: MegaMenuProps) {
  return (
    <nav className="ml-10">
      <ul className="flex text-sm items-center justify-center font-semibold">
        {collections.map((collection) => (
          <li key={collection.id} className="relative group px-5 py-2">
            <button className="group-hover:opacity-50 cursor-default font-normal">
              {collection.name}
              <IoIosArrowDown className="inline-block ml-2" />
            </button>
            <div className="absolute top-2 -left-12 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[260px] w-full transform">
              <div className="relative top-6 p-4 bg-white rounded-xl shadow-xl w-full">
                <div className="relative z-10">
                  <ul className="menu p-0">
                    {collection.products.length > 0 ? (
                      collection.products.map((product) => (
                        <li key={product.id}>
                          <Link href={`/products/${product.id}`}>{product.name}</Link>
                        </li>
                      ))
                    ) : (
                      <span>Coming soon!</span>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
}
