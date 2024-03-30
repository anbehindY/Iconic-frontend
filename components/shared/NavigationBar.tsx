import Link from "next/link";
import ProfileIcon from "@/icons/ProfileIcon";
import { BsCart2 } from "react-icons/bs";
import CartIcon from "@/icons/CartIcon";
import SearchIcon from "@/icons/SearchIcon";

export default function NavigationBar() {
  return (
    <div className="drawer sticky top-0 z-50">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-base-100 px-16 py-3">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <Link href="/" className="px-2 font-bold text-3xl mr-20">
            Iconic
          </Link>

          {/* Mega Menu */}
          <div className="flex-none hidden lg:block">
            <ul className="menu lg:menu-horizontal rounded-box h-full">
              {/* Navbar menu content here */}
              <li>
                <details>
                  <summary>Shop</summary>
                  <ul>
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
                </details>
              </li>
              <li>
                <details>
                  <summary>Learn more</summary>
                  <ul className="menu xl:menu-horizontal min-w-max bg-base-200 rounded-box z-10">
                    <li>
                      <Link href={"#"}>IPHONE</Link>
                      <ul>
                        <li><Link href={'#'}>lorem</Link></li>
                        <li><Link href={'#'}>lorem</Link></li>
                        <li><Link href={'#'}>lorem</Link></li>
                        <li><Link href={'#'}>lorem</Link></li>
                      </ul>
                    </li>
                    <li>
                      <Link href={"#"}>IPAD</Link>
                      <ul>
                        <li><Link href={'#'}>lorem</Link></li>
                        <li><Link href={'#'}>lorem</Link></li>
                        <li><Link href={'#'}>lorem</Link></li>
                        <li><Link href={'#'}>lorem</Link></li>
                      </ul>
                    </li>
                    <li>
                      <Link href={"#"}>MAC</Link>
                      <ul>
                        <li><Link href={'#'}>lorem</Link></li>
                        <li><Link href={'#'}>lorem</Link></li>
                        <li><Link href={'#'}>lorem</Link></li>
                        <li><Link href={'#'}>lorem</Link></li>
                      </ul>
                    </li>
                    <li>
                      <Link href={"#"}>APPLE WATCH</Link>{" "}
                      <ul>
                        <li><Link href={'#'}>lorem</Link></li>
                        <li><Link href={'#'}>lorem</Link></li>
                        <li><Link href={'#'}>lorem</Link></li>
                        <li><Link href={'#'}>lorem</Link></li>
                      </ul>
                    </li>
                    <li>
                      <Link href={"#"}>AIR PODS</Link>{" "}
                      <ul>
                        <li><Link href={'#'}>lorem</Link></li>
                        <li><Link href={'#'}>lorem</Link></li>
                        <li><Link href={'#'}>lorem</Link></li>
                        <li><Link href={'#'}>lorem</Link></li>
                      </ul>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <a>Collections by category</a>
              </li>
            </ul>
          </div>
          <div className="flex gap-5 ml-auto">
            <span>
              <SearchIcon />
            </span>
            <span>
              <ProfileIcon />
            </span>
            <span>
              <CartIcon />
            </span>
          </div>
        </div>
        {/* Page content here */}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200">
          {/* Sidebar content here */}
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
