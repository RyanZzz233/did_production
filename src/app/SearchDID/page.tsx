"use client"
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import Loading1 from "@/components/loading/Loading1";
import styles from "./page.module.css";

//@ts-ignore
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Search = () => {

  const [searchType, setSearchType] = useState("domain");
  const [inputValue, setInputValue] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const [page, setPage] = useState(1);
  const [datad, setDatad] = React.useState([]);


  useEffect(() => {
    document.title = "Metopia | Search";
  }, []);

  const apiEndpoint = `/api/userlocal?key=${encodeURIComponent(searchType)}&value=${encodeURIComponent(searchInput)}&page=${page}`;

  const { data, mutate, error, isLoading } = useSWR(
    searchInput ? apiEndpoint : null,
    fetcher
  );
  console.log(data);

  const handlePageChange = (event:any) => {
    setPage(event.target.value);
  };

  const handleSearchTypeChange = (event:any) => {
    setSearchType(event.target.value);
    setInputValue("");
    setSearchInput("");
    setHasSearched(false);
    setPage(1);
    setDatad([]);
  };

  const handleInputChange = (event:any) => {
    setInputValue(event.target.value);
    setHasSearched(false);
    setPage(1);
    setDatad([]);
  };

  const handleSearch = () => {
    setSearchInput(inputValue);
    setHasSearched(true);
    setDatad(data);
  };

  useEffect(() => {
    if (data) {
      setDatad(data);
    }
  }, [data]);

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
          {/* {searchType === "domain" ? "Search by DID": "Search by User"} */}
          Web3.0 DID Searcher
        </h1>
        <div className="pb-10">
          <select value={searchType} onChange={handleSearchTypeChange}>
            <option value="domain">Search by DID</option>
            <option value="owner">Search by User</option>
          </select>
        </div>
        <div className="flex flex-wrap">
          <div className="">
            <div className="">
              <div className={styles.inputwrapper}>
                <input
                  type="text"
                  placeholder={
                    searchType === "domain"
                      ? "Enter a DID to get User"
                      : "Enter a User to get DID"
                  }
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
              //@ts-ignore
              hasSearched && datad?.Domains.length > 0 ? (
                data.Domains.map((domain:any) => (
                  <div className="flex items-center pb-4" key={domain.domain}>
                    <div className="">
                      <div className="flex items-center">
                        <div className="text-lg text-apple-black font-light">
                          <h2>
                            <strong>Domain:</strong> {domain.domain}
                          </h2>
                          <h2>
                            <strong>Owner:</strong> {domain.owner}
                          </h2>
                          <h2>
                            <strong>Expiry Date:</strong> {domain.expiryDate}
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                hasSearched && <div>No data matched, please retry.</div>
              )
            )}
            </div>
          </div>
        </div>

        <div className="my-4">
          <label>
            Page:
            <select value={page} onChange={handlePageChange}>
              {/*//@ts-ignore*/}
              {Array.from({length: datad?.TotalPages || 1}, (_, i) => i + 1).map((pageNumber) => (
                <option key={pageNumber} value={pageNumber}>
                  {pageNumber}
                </option>
              ))}
            </select>
          </label>
        </div>

      </div>
    </div>
  );
};

export default Search;