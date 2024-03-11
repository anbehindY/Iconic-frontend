export default function NavigationBar() {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-base-100 pt-2">
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
          <div className="flex-1 px-2 mx-2">Navbar Title</div>
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
                          <ul>
                            <li>
                              <a>Auth management system</a>
                            </li>
                            <li>
                              <a>VScode theme</a>
                            </li>
                            <li>
                              <a>Color picker app</a>
                            </li>
                          </ul>
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
            <label className="swap swap-rotate w-12">
              {/* this hidden checkbox controls the state */}
              <input
                type="checkbox"
                className="theme-controller"
                value="dark"
              />

              {/* sun icon */}
              <svg
                className="swap-on fill-current w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-off fill-current w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
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
    // <nav className="w-full">
    //   <ul className="menu menu-horizontal bg-base-200 w-full flex items-center px-8 py-6">
    //     <li>
    //       <a>Item 1</a>
    //     </li>
    //     <li onMouseEnter={() => setIsHovered(true)}>
    //       <details open={isHovered}>
    //         <summary>Parent item</summary>
    //         <ul
    //           className="menu xl:menu-horizontal min-w-max bg-base-200 rounded-box"
    //           onMouseLeave={() => setIsHovered(false)}
    //         >
    //           <li>
    //             <a>Solutions</a>
    //             <ul>
    //               <li>
    //                 <a>Design</a>
    //               </li>
    //               <li>
    //                 <a>Development</a>
    //               </li>
    //               <li>
    //                 <a>Hosting</a>
    //               </li>
    //               <li>
    //                 <a>Domain register</a>
    //               </li>
    //             </ul>
    //           </li>
    //           <li>
    //             <a>Enterprise</a>
    //             <ul>
    //               <li>
    //                 <a>CRM software</a>
    //               </li>
    //               <li>
    //                 <a>Marketing management</a>
    //               </li>
    //               <li>
    //                 <a>Security</a>
    //               </li>
    //               <li>
    //                 <a>Consulting</a>
    //               </li>
    //             </ul>
    //           </li>
    //           <li>
    //             <a>Products</a>
    //             <ul>
    //               <li>
    //                 <a>UI Kit</a>
    //               </li>
    //               <li>
    //                 <a>Wordpress themes</a>
    //               </li>
    //               <li>
    //                 <a>Wordpress plugins</a>
    //               </li>
    //               <li>
    //                 <a>Open source</a>
    //                 <ul>
    //                   <li>
    //                     <a>Auth management system</a>
    //                   </li>
    //                   <li>
    //                     <a>VScode theme</a>
    //                   </li>
    //                   <li>
    //                     <a>Color picker app</a>
    //                   </li>
    //                 </ul>
    //               </li>
    //             </ul>
    //           </li>
    //           <li>
    //             <a>Company</a>
    //             <ul>
    //               <li>
    //                 <a>About us</a>
    //               </li>
    //               <li>
    //                 <a>Contact us</a>
    //               </li>
    //               <li>
    //                 <a>Privacy policy</a>
    //               </li>
    //               <li>
    //                 <a>Press kit</a>
    //               </li>
    //             </ul>
    //           </li>
    //         </ul>
    //       </details>
    //     </li>
    //     <li>
    //       <a>Item 3</a>
    //     </li>
    // <li className="ml-auto">
    //   <label className="swap swap-rotate w-12">
    //     {/* this hidden checkbox controls the state */}
    //     <input type="checkbox" className="theme-controller" value="dark" />

    //     {/* sun icon */}
    //     <svg
    //       className="swap-on fill-current w-8 h-8"
    //       xmlns="http://www.w3.org/2000/svg"
    //       viewBox="0 0 24 24"
    //     >
    //       <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
    //     </svg>

    //     {/* moon icon */}
    //     <svg
    //       className="swap-off fill-current w-8 h-8"
    //       xmlns="http://www.w3.org/2000/svg"
    //       viewBox="0 0 24 24"
    //     >
    //       <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
    //     </svg>
    //   </label>
    // </li>
    //   </ul>
    // </nav>
  );
}
