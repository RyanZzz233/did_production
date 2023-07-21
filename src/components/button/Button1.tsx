import React from "react";
import Link from "next/link";

const Button1 = ({ text, url }) => {
  return (
    <Link href={url}>
      <button
        className={
          "border bg-tw-black text-white hover:bg-tw-grey font-normal py-2 px-3 rounded-full shadow-md hover:shadow-lg w-48 bg-transparent text-lg text-center"
        }
      >
        {text}
      </button>
    </Link>
  );
};

export default Button1;
