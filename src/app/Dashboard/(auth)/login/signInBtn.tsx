"use client";

import useMetamask from "@/hooks/useMetamask";
import React from "react";

export default function SignInBtn() {
  const { signIn } = useMetamask();

  return (
    <button
      className={
        "border bg-tw-black text-white hover:bg-tw-grey font-normal py-2 px-3 rounded-full shadow-md hover:shadow-lg w-48 bg-transparent text-lg text-center"
      }
      onClick={() => signIn()}
    >
      Connect to MetaMask
    </button>
  );
}
