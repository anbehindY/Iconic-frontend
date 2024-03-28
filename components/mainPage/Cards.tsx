import Link from "next/link";
import { BiChevronRight } from "react-icons/bi";
import { CgPushChevronRight } from "react-icons/cg";

export default function Cards() {
  return (
    <section className="flex justify-center items-center gap-8 px-20 py-20 w-full h-full">
      <div className="w-[600px] h-[650px] bg-slate-300/20 flex flex-col justify-start items-center gap-8 text-center px-16 py-10">
        <h2 className="text-4xl font-semibold">Price List</h2>
        <p className="text-xl">
          Learn more to check our check our stable and trusted price listings.
        </p>
        <Link href={"/price-list"} className="text-purple-700">
          View all price list
          <span className="inline-block align-middle">
            <BiChevronRight className="text-xl" />
          </span>
        </Link>
      </div>
      <div className="w-[600px] h-[650px] bg-slate-300/20 flex flex-col justify-start items-center gap-8 text-center px-16 py-10">
        <h2 className="text-4xl font-semibold">Monthly Payment Plan</h2>
        <p className="text-xl">
          Buy the latest iPhone with monthly payments that fit your monthly
          budget.{" "}
        </p>
        <Link href={"/monthly-payment-plan"} className="text-purple-700">
          Learn more
          <span className="inline-block align-middle">
            <BiChevronRight className="text-xl" />
          </span>
        </Link>
      </div>
    </section>
  );
}
