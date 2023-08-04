"use client";

import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { debounce } from "perfect-debounce";
import Loading1 from "@/components/loading/Loading1";
import styles from './page.module.css'

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
          Searcher by DID
        </h1>

        <div className="flex flex-wrap">
          <div className="">
            <div className="">
              {/* <h1 className="text-2xl pb-8 text-apple-black font-light">
                Search the owner of DID
              </h1> */}
              <div className={styles.inputwrapper}>
                <input
                  type="text"
                  placeholder="Enter a DID to search owner"
                  value={inputValue}
                  onChange={handleInputChange}
                  onKeyPress={(event) => {
                    if (event.key === 'Enter') {
                      handleSearch();
                    }
                  }}
                  className="
                    flex-grow
                    text-sm
                    bg-transparent
                    outline-none
                    border-none
                    ml-2"
                />
                <button 
                  className="
                    w-8 h-8
                    flex items-center justify-center 
                    bg-tw-black
                    text-white
                    rounded-full
                    cursor-pointer
                    transition-colors
                    duration-300
                    ease-in-out
                    hover:bg-tw-grey"
                  onClick={handleSearch}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
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
