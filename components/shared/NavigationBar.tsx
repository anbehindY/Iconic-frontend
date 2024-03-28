import Link from "next/link";
import ProfileIcon from "../../icons/ProfileIcon";

export default function NavigationBar() {
  return (
    <div className="drawer sticky top-0 z-50">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-base-100 px-10 py-3">
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
          <Link href="/" className="flex-1 px-2 mx-2 font-bold text-3xl">
            Iconic
          </Link>
          <div className="flex-none hidden lg:block w-5/6">
            <ul className="menu menu-horizontal h-full">
              {/* Navbar menu content here */}
              <li>
                <a>Navbar Item 1</a>
              </li>
              <li>
                <a>Navbar Item 2</a>
              </li>
              <li>
                <details>
                  <summary>Parent item</summary>
                  <ul className="menu xl:menu-horizontal min-w-max bg-base-200 rounded-box z-10">
                    <li>
                      <a>Solutions</a>
                      <ul>
                        <li>
                          <a>Design</a>
                        </li>
                        <li>
                          <a>Development</a>
                        </li>
                        <li>
                          <a>Hosting</a>
                        </li>
                        <li>
                          <a>Domain register</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a>Enterprise</a>
                      <ul>
                        <li>
                          <a>CRM software</a>
                        </li>
                        <li>
                          <a>Marketing management</a>
                        </li>
                        <li>
                          <a>Security</a>
                        </li>
                        <li>
                          <a>Consulting</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a>Products</a>
                      <ul>
                        <li>
                          <a>UI Kit</a>
                        </li>
                        <li>
                          <a>Wordpress themes</a>
                        </li>
                        <li>
                          <a>Wordpress plugins</a>
                        </li>
                        <li>
                          <a>Open source</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a>Company</a>
                      <ul>
                        <li>
                          <a>About us</a>
                        </li>
                        <li>
                          <a>Contact us</a>
                        </li>
                        <li>
                          <a>Privacy policy</a>
                        </li>
                        <li>
                          <a>Press kit</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
          <div className="ml-auto">
            <ProfileIcon />
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
