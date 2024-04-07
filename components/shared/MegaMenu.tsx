import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";

export default function MegaMenu() {
  return (
    <nav>
      <ul className="flex items-center justify-center font-semibold">
        <li className="relative group px-5 py-2">
          <button className="group-hover:opacity-50 cursor-default font-normal text-[15px]">
            Shop
            <IoIosArrowDown className="inline-block ml-2" />
          </button>
          <div className="absolute top-2 -left-12 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[200px] transform">
            <div className="relative top-6 p-4 bg-white rounded-xl shadow-xl w-full">
              <div className="relative z-10">
                <ul className="menu p-0">
                  <li>
                    <a href="#">iPhone</a>
                  </li>
                  <li>
                    <Link href="#">iPad</Link>
                  </li>
                  <li>
                    <Link href="#">Mac</Link>
                  </li>
                  <li>
                    <Link href="#">Watch</Link>
                  </li>
                  <li>
                    <Link href="#">AirPods</Link>
                  </li>
                  <li>
                    <Link href="#">AirTags</Link>
                  </li>
                  <li>
                    <Link href="#">Accessories</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        <li className="relative group px-3 py-2">
          <button className="group-hover:opacity-50 cursor-default font-normal text-[15px]">
            Learn more
            <IoIosArrowDown className="inline-block ml-2" />
          </button>
          <div className="absolute top-2 -left-48 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[560px] transform">
            <div className="relative top-6 p-4 bg-white rounded-xl shadow-xl w-full">
              <div className="relative z-10">
                <ul className="menu xl:menu-horizontal min-w-max rounded-box p-0">
                  <li>
                    <Link href={"#"}>IPHONE</Link>
                    <ul>
                      <li>
                        <Link href={"#"}>lorem</Link>
                      </li>
                      <li>
                        <Link href={"#"}>lorem</Link>
                      </li>
                      <li>
                        <Link href={"#"}>lorem</Link>
                      </li>
                      <li>
                        <Link href={"#"}>lorem</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href={"#"}>IPAD</Link>
                    <ul>
                      <li>
                        <Link href={"#"}>lorem</Link>
                      </li>
                      <li>
                        <Link href={"#"}>lorem</Link>
                      </li>
                      <li>
                        <Link href={"#"}>lorem</Link>
                      </li>
                      <li>
                        <Link href={"#"}>lorem</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href={"#"}>MAC</Link>
                    <ul>
                      <li>
                        <Link href={"#"}>lorem</Link>
                      </li>
                      <li>
                        <Link href={"#"}>lorem</Link>
                      </li>
                      <li>
                        <Link href={"#"}>lorem</Link>
                      </li>
                      <li>
                        <Link href={"#"}>lorem</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href={"#"}>APPLE WATCH</Link>
                    <ul>
                      <li>
                        <Link href={"#"}>lorem</Link>
                      </li>
                      <li>
                        <Link href={"#"}>lorem</Link>
                      </li>
                      <li>
                        <Link href={"#"}>lorem</Link>
                      </li>
                      <li>
                        <Link href={"#"}>lorem</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href={"#"}>AIR PODS</Link>
                    <ul>
                      <li>
                        <Link href={"#"}>lorem</Link>
                      </li>
                      <li>
                        <Link href={"#"}>lorem</Link>
                      </li>
                      <li>
                        <Link href={"#"}>lorem</Link>
                      </li>
                      <li>
                        <Link href={"#"}>lorem</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        <li className="relative group px-3 py-2">
          <button className="group-hover:opacity-50 cursor-default font-normal text-[15px]">
            Collections by Category
            <IoIosArrowDown className="inline-block ml-2" />
          </button>
          <div className="absolute top-2 -left-32 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[560px] transform">
            <div className="relative top-6 p-4 bg-white rounded-xl shadow-xl w-full">
              <div className="relative z-10">
                <ul className="menu xl:menu-horizontal min-w-max rounded-box p-0">
                  <li>
                    <Link href={"#"}>IPHONE</Link>
                    <ul>
                      <li>
                        <Link href={"#"}>lorem</Link>
                      </li>
                      <li>
                        <Link href={"#"}>lorem</Link>
                      </li>
                      <li>
                        <Link href={"#"}>lorem</Link>
                      </li>
                      <li>
                        <Link href={"#"}>lorem</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href={"#"}>IPAD</Link>
                    <ul>
                      <li>
                        <Link href={"#"}>lorem</Link>
                      </li>
                      <li>
                        <Link href={"#"}>lorem</Link>
                      </li>
                      <li>
                        <Link href={"#"}>lorem</Link>
                      </li>
                      <li>
                        <Link href={"#"}>lorem</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href={"#"}>MAC</Link>
                    <ul>
                      <li>
                        <Link href={"#"}>lorem</Link>
                      </li>
                      <li>
                        <Link href={"#"}>lorem</Link>
                      </li>
                      <li>
                        <Link href={"#"}>lorem</Link>
                      </li>
                      <li>
                        <Link href={"#"}>lorem</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href={"#"}>APPLE WATCH</Link>
                    <ul>
                      <li>
                        <Link href={"#"}>lorem</Link>
                      </li>
                      <li>
                        <Link href={"#"}>lorem</Link>
                      </li>
                      <li>
                        <Link href={"#"}>lorem</Link>
                      </li>
                      <li>
                        <Link href={"#"}>lorem</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href={"#"}>AIR PODS</Link>
                    <ul>
                      <li>
                        <Link href={"#"}>lorem</Link>
                      </li>
                      <li>
                        <Link href={"#"}>lorem</Link>
                      </li>
                      <li>
                        <Link href={"#"}>lorem</Link>
                      </li>
                      <li>
                        <Link href={"#"}>lorem</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        <li className="relative group px-3 py-2">
          <button className="group-hover:opacity-50 cursor-default font-normal text-[15px]">
            Promotions
            <IoIosArrowDown className="inline-block ml-2" />
          </button>
          <div className="absolute top-2 -left-7 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[200px] transform">
            <div className="relative top-6 p-4 bg-white rounded-xl shadow-xl w-full">
              <div className="relative z-10">
                <ul className="menu p-0">
                  <li>
                    <a href="#" className="whitespace-nowrap">
                      Summer Hot Sales
                    </a>
                  </li>
                  <li>
                    <Link href="#" className="whitespace-nowrap">
                      Discounts
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="whitespace-nowrap">
                      Monday Collection
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
}
