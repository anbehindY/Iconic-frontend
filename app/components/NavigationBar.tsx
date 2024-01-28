"use client";

import React from "react";
import { MegaMenu } from "primereact/megamenu";
import { MenuItem } from 'primereact/menuitem';

// TODO: Replace this with your own logo
const logo = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    fill="none"
    viewBox="0 0 82 40"
  >
    <path
      fill="#FFD43D"
      d="M73.365 19.71c0 2.904-2.241 5.31-5.27 5.31-3.03 0-5.228-2.406-5.228-5.31 0-2.905 2.199-5.312 5.228-5.312s5.27 2.407 5.27 5.311Z"
    ></path>
    <path
      fill="#FF0C81"
      d="M48.764 19.544c0 2.946-2.323 5.145-5.27 5.145-2.904 0-5.227-2.2-5.227-5.145 0-2.947 2.323-5.104 5.228-5.104 2.946 0 5.27 2.158 5.27 5.104Z"
    ></path>
    <path
      fill="#11EEFC"
      d="M20.074 25.02c3.029 0 5.27-2.406 5.27-5.31 0-2.905-2.241-5.312-5.27-5.312-3.03 0-5.228 2.407-5.228 5.311 0 2.905 2.199 5.312 5.228 5.312Z"
    ></path>
    <path
      fill="#171A26"
      d="M68.095 30.54c-6.307 0-11.12-4.897-11.12-10.872 0-5.934 4.855-10.83 11.12-10.83 6.349 0 11.162 4.938 11.162 10.83 0 5.975-4.855 10.871-11.162 10.871Zm0-5.52c3.03 0 5.27-2.406 5.27-5.31 0-2.905-2.24-5.312-5.27-5.312-3.029 0-5.228 2.407-5.228 5.311 0 2.905 2.199 5.312 5.228 5.312ZM43.08 40c-4.813 0-8.506-2.116-10.373-5.934l4.896-2.655c.913 1.784 2.614 3.195 5.394 3.195 3.486 0 5.85-2.448 5.85-6.473v-.374c-1.12 1.411-3.111 2.49-6.016 2.49-5.768 0-10.373-4.481-10.373-10.581 0-5.934 4.813-10.788 11.12-10.788 6.431 0 11.162 4.605 11.162 10.788v8.299C54.74 35.27 49.76 40 43.08 40Zm.415-15.311c2.946 0 5.27-2.2 5.27-5.145 0-2.947-2.324-5.104-5.27-5.104-2.905 0-5.228 2.158-5.228 5.104s2.323 5.145 5.228 5.145ZM20.074 30.54c-6.307 0-11.12-4.897-11.12-10.872 0-5.934 4.854-10.83 11.12-10.83 6.348 0 11.162 4.938 11.162 10.83 0 5.975-4.855 10.871-11.162 10.871Zm0-5.52c3.029 0 5.27-2.406 5.27-5.31 0-2.905-2.241-5.312-5.27-5.312-3.03 0-5.228 2.407-5.228 5.311 0 2.905 2.199 5.312 5.228 5.312ZM0 0h5.892v30H0V0ZM82 6.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
    ></path>
  </svg>
);
export default function NavigationBar() {
  const items: MenuItem[] = [
    {
      label: "Furniture",
      icon: "pi pi-box",
      items: [
        [
          {
            label: "Living Room",
            items: [
              { label: "Accessories" },
              { label: "Armchair" },
              { label: "Coffee Table" },
              { label: "Couch" },
              { label: "TV Stand" },
            ],
          },
        ],
        [
          {
            label: "Kitchen",
            items: [
              { label: "Bar stool" },
              { label: "Chair" },
              { label: "Table" },
            ],
          },
          {
            label: "Bathroom",
            items: [{ label: "Accessories" }],
          },
        ],
        [
          {
            label: "Bedroom",
            items: [
              { label: "Bed" },
              { label: "Chaise lounge" },
              { label: "Cupboard" },
              { label: "Dresser" },
              { label: "Wardrobe" },
            ],
          },
        ],
        [
          {
            label: "Office",
            items: [
              { label: "Bookcase" },
              { label: "Cabinet" },
              { label: "Chair" },
              { label: "Desk" },
              { label: "Executive Chair" },
            ],
          },
        ],
      ],
    },
    {
      label: "Electronics",
      icon: "pi pi-mobile",
      items: [
        [
          {
            label: "Computer",
            items: [
              { label: "Monitor" },
              { label: "Mouse" },
              { label: "Notebook" },
              { label: "Keyboard" },
              { label: "Printer" },
              { label: "Storage" },
            ],
          },
        ],
        [
          {
            label: "Home Theather",
            items: [
              { label: "Projector" },
              { label: "Speakers" },
              { label: "TVs" },
            ],
          },
        ],
        [
          {
            label: "Gaming",
            items: [
              { label: "Accessories" },
              { label: "Console" },
              { label: "PC" },
              { label: "Video Games" },
            ],
          },
        ],
        [
          {
            label: "Appliances",
            items: [
              { label: "Coffee Machine" },
              { label: "Fridge" },
              { label: "Oven" },
              { label: "Vaccum Cleaner" },
              { label: "Washing Machine" },
            ],
          },
        ],
      ],
    },
    {
      label: "Sports",
      icon: "pi pi-clock",
      items: [
        [
          {
            label: "Football",
            items: [
              { label: "Kits" },
              { label: "Shoes" },
              { label: "Shorts" },
              { label: "Training" },
            ],
          },
        ],
        [
          {
            label: "Running",
            items: [
              { label: "Accessories" },
              { label: "Shoes" },
              { label: "T-Shirts" },
              { label: "Shorts" },
            ],
          },
        ],
        [
          {
            label: "Swimming",
            items: [
              { label: "Kickboard" },
              { label: "Nose Clip" },
              { label: "Swimsuits" },
              { label: "Paddles" },
            ],
          },
        ],
        [
          {
            label: "Tennis",
            items: [
              { label: "Balls" },
              { label: "Rackets" },
              { label: "Shoes" },
              { label: "Training" },
            ],
          },
        ],
      ],
    },
  ];

  return (
    <section className="flex items-center py-2 px-6">
      <div className="card w-full">
        <MegaMenu
          model={items}
          breakpoint="960px"
          start={logo}
          className="border-none bg-white"
          pt={{
            start: {className: "w-[90px] mr-6"},
            icon: {className: "bg-black"},
            menuButton: {className: "ml-auto"},
          }}
/>
      </div>
    </section>
  );
}
