"use client";

import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { debounce } from "perfect-debounce";
import Loading1 from "@/components/loading/Loading1";

const Search = () => {
  useEffect(() => {
    document.title = "Metopia | Search";
  }, []);

  //const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const fetcher = debounce(async (...args) => {
    //@ts-expect-error
    const res = await fetch(...args);
    return res.json();
  }, 1000);
  //debounced for 1000ms

  const [inputValue, setInputValue] = useState("");

  const { data, mutate, error, isLoading } = useSWR(
    inputValue ? `/api/users?did=${encodeURIComponent(inputValue)}` : null,
    fetcher
  );

  const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
  };

  // your existing handleSubmit function

  return (
    <div className="relative">
      <div className="">
        <h1
          className={
            "relative text-3xl md:text-5xl font-extrabold leading-tight tracking-tighter text-left pb-2 bg-gradient-to-r bg-title-blue text-transparent bg-clip-text"
          }
        >
          Web3.0 DID Searcher
        </h1>
        <div className={"w-8/12 space-y-4"}>
          <p
            className={
              "text-lg font-light md:text-xl leading-relaxed text-apple-black"
            }
          >
            DID Searcher is a user-friendly tool that allows users to explore
            the world of Decentralized Identifiers (DIDs). By providing a simple
            and intuitive interface, it empowers users to perform precise
            searches using either DIDs or usernames.
          </p>

          <p
            className={
              "text-lg font-light md:text-xl leading-relaxed text-apple-black pt-4"
            }
          >
            The tool&apos;s functionality is twofold:
          </p>

          <p
            className={
              "text-lg font-light md:text-xl leading-relaxed text-apple-black"
            }
          >
            1. DID Search: Users can input a DID, and the tool will return the
            existing related DID along with its owner&apos;s information. This
            feature is extremely helpful for verifying identities in a
            decentralized network, enhancing trust and security.
          </p>

          <p
            className={
              "text-lg font-light md:text-xl leading-relaxed text-apple-black"
            }
          >
            2. User Search: Alternatively, users can input a username, and the
            tool will display all DIDs associated with that user. This is
            especially useful for gaining a comprehensive view of a user &apos;s
            presence and activities within the decentralized ecosystem.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Search;
