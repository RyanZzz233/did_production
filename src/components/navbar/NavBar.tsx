"use client";

import Link from "next/link";
import React from "react";
import styles from "./page.module.css";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

//@ts-ignore

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Search",
    url: "/Search",
    subLinks: [
      {
        id: 1,
        title: "Search by User",
        url: "/SearchUser",
      },
      {
        id: 2,
        title: "Search by DID",
        url: "/SearchDID",
      },
    ],
  },

  {
    id: 3,
    title: "Dashboard",
    url: "/Dashboard",
  },
];

const NavBar = () => {
  const router = useRouter();
  const [activeMenu, setActiveMenu] = React.useState("");
  const pathname = usePathname();


  return (
    <div className="fixed top-0 left-0 bottom-0 w-48 flex flex-col justify-start border-r border-grey transition-width duration-300 ease-in-out bg-apple-grey">
      <Link href="/">
        <div className="absolute top-0 left-0 flex flex-col mt-4 pb-10 cursor-pointer">
          <img
            src="https://pub-3890daa6d3af4fe09ab0c284ce757dd9.r2.dev/logo.webp"
            alt="Logo"
            className="w-24 h-12 object-contain transform hover:scale-125 transition-transform duration-300 ease-in-out filter contrast-75"
          />
        </div>
      </Link>

      <div className="flex flex-col gap-6 text-apple-black font-bold mt-32 pl-6">
        {links.map((link) => (
          <div key={link.id}>
            <Link href={link.url}>
              <div
                className={
                  pathname === link.url
                  ? "text-tw-black pl-2 transform-origin-left scale-110 font-normal transition-all duration-200 ease-in-out"
                  : "transition-all duration-200 ease-in-out hover:text-tw-black font-normal"
                }
              >
                {link.title}
              </div>
            </Link>
            {pathname.includes("Search") && link.subLinks && (
              <div className="flex flex-col gap-2 text-apple-black font-bold pl-2 mt-2 text-sm transition-all duration-200 ease-in-out">
                {link.subLinks.map((subLink) => (
                  <Link key={subLink.id} href={subLink.url}>
                    <div
                      className={
                        pathname === subLink.url
                        ? "text-tw-black pl-2 transform-origin-left scale-110 font-normal transition-all duration-200 ease-in-out"
                        : "transition-all duration-200 ease-in-out hover:text-tw-black font-normal"
                      }
                    >
                      {subLink.title}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
