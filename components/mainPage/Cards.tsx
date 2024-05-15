import Image from "next/image";
import Link from "next/link";
import { BiChevronRight } from "react-icons/bi";

export default function Cards() {
  return (
    <section className="flex justify-center items-center gap-8 px-20 py-20 w-full h-full">
      <div className="relative text-base-200 w-[600px] h-[650px] flex flex-col justify-start items-center gap-8 text-center px-16 py-10">
        <h2 className="text-4xl font-semibold">Price List</h2>
        <p className="text-xl">
          Learn more to check our check our stable <br /> and trusted price
          listings.
        </p>
        <Link
          href={"/price-list"}
          className="hover:underline underline-offset-2"
        >
          View all price list
          <span className="inline-block align-middle">
            <BiChevronRight className="text-xl" />
          </span>
        </Link>
        <Image
          src="/images/price-list.png"
          fill
          style={{
            objectFit: "cover",
            position: "absolute",
            zIndex: -1,
          }}
          alt="Price List photo"
        />
      </div>
      <div className="relative w-[600px] h-[650px] bg-slate-300/10 flex flex-col justify-start items-center gap-8 text-center px-16 py-10">
        <h2 className="text-4xl font-semibold">Trade In</h2>
        <p className="text-xl">
          Trade in. Upgrade. Save. <br /> It’s a win-win-win..
        </p>
        <Link
          href={"/trade-in"}
          className="text-base-content hover:underline underline-offset-2"
        >
          Learn more
          <span className="inline-block align-middle">
            <BiChevronRight className="text-xl" />
          </span>
        </Link>
        <Image
          src={"/images/trade-in.png"}
          fill
          style={{
            objectFit: "cover",
            position: "absolute",
            zIndex: -1,
          }}
          alt="Price List photo"
        />
      </div>
    </section>
  );
}
