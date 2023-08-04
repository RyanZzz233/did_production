"use client";

import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { debounce } from "perfect-debounce";
import Loading1 from "@/components/loading/Loading1";

const SearchDID = () => {
  useEffect(() => {
    document.title = "Metopia | SearchDID";
  }, []);

  //@ts-expect-error
  const fetcher = (...args:any) => fetch(...args).then((res) => res.json());
  // const fetcher = debounce(async (...args) => {
  //   // @ts-expect-error
  //   const res = await fetch(...args);
  //   return res.json();
  // }, 1000);

  const [inputValue, setInputValue] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const { data, mutate, error, isLoading } = useSWR(
    searchInput ? `/api/users?domain=${encodeURIComponent(searchInput)}` : null,
    fetcher
  );

  const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
  };

  const handleSearch = () => {
    setSearchInput(inputValue);
  };


  // your existing handleSubmit function

  return (
    <div className="relative">
      <div className="">
        <h1
          className={
            "relative text-3xl md:text-5xl font-extrabold leading-tight tracking-tighter text-left pb-2 bg-gradient-to-r from-tw-purple via-tw-blue to-tw-blue text-transparent bg-clip-text"
          }
          style={{
            backgroundImage:
              "url('https://pub-3890daa6d3af4fe09ab0c284ce757dd9.r2.dev/Screen Shot 2023-07-11 at 5.27.25 PM.png')",
            backgroundSize: "cover",
            backgroundPosition: "left",
            height: "100px",
          }}
        >
          Web3.0 DID Searcher
        </h1>

        <div className="flex flex-wrap">
          <div className="">
            <div className="">
              <h1 className="text-2xl pb-8 text-apple-black font-light">
                Search the owner of DID
              </h1>
              <div className="pb-8 flex rounded-full overflow-hidden">
  <input
    type="text"
    placeholder="Enter a DID"
    value={inputValue}
    onChange={handleInputChange}
    className="
      pl-4 pr-12
      py-2
      text-sm
      bg-white
      border
      border-gray-300
      rounded-full
      focus:outline-none
      focus:ring-2
      focus:ring-apple-black
      focus:border-transparent
      shadow-sm
      flex-grow"
  />
  <button 
    className="
      border-none
      bg-tw-black
      text-white
      cursor-pointer
      rounded-full
      transition-colors
      duration-300
      ease-in-out
      hover:bg-tw-grey
      h-full
      flex-shrink-0"
    onClick={handleSearch}
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 m-auto" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M14.484 13.66a7.5 7.5 0 111.06-1.06l4.95 4.95a.75.75 0 010 1.06l-.707.707a.75.75 0 01-1.06 0l-4.95-4.95zM7.5 12.25a4.75 4.75 0 100-9.5 4.75 4.75 0 000 9.5z" clipRule="evenodd" />
    </svg>
  </button>
</div>
              {isLoading ? (
                <Loading1 />
              ) : (
                data?.map((post: any) => (
                  <div className="flex items-center pb-4" key={post._id}>
                    <div className="">
                      {/* <img
                        src={post.img}
                        alt=""
                        className="w-full h-32 object-contain"
                      /> */}
                    </div>

                    <div className="flex items-center">
                      <h2 className="text-lg text-apple-black font-light">
                        DID: {post.domain}
                      </h2>
                      <h2 className="text-sm text-apple-black font-light pl-4">
                        Owner Address: {post.owner}
                      </h2>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchDID;
