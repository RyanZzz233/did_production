"use client";

import Link from "next/link";
import React from "react";
import styles from "./page.module.css";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";


const TopNavBar = () => {
    const router = useRouter();
  
    return (
      <div className="fixed top-0 left-0 right-0 h-16 flex justify-end items-center pr-4 bg-transparent z-20">
        <button
          className="
            px-3 py-1
            border-none
            bg-tw-black
            font-normal
            cursor-pointer
            rounded-full
            transition-colors
            duration-300
            ease-in-out
            hover:bg-tw-grey
            flex items-center
          "
          onClick={() => router.push("/Dashboard/login")}
        ><span className="text-xs font-normal text-white">Account</span>
        </button>
      </div>
    );
  };

  export default TopNavBar;