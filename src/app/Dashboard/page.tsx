"use client";

import React, { useEffect } from "react";
import useSWR from "swr";
import { useRouter } from "next/navigation";
import useMetamask from "@/hooks/useMetamask";
import Loading1 from "@/components/loading/Loading1";

const Dashboard = () => {
  const { account } = useMetamask();

  useEffect(() => {
    document.title = "Metopia | Dashboard";
  }, []);

  const [username, setUsername] = React.useState("");
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const usernameResponse = await fetch("/api/getUsername");
      const usernameData = await usernameResponse.json();
      setUsername(usernameData.username);

      if (!usernameData.username) {
        router.push("/Dashboard/login");
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const usernameResponse = await fetch("/api/getUsername");
      const usernameData = await usernameResponse.json();
      setUsername(usernameData.username);

      if (!usernameData.username) {
        router.push("/Dashboard/login");
      }
    };

    fetchData();
  }, [account]);

  // @ts-expect-error
  const fetcher = (...args: any[]) => fetch(...args).then((res) => res.json());

  //const hardcodedUsername = '0x1234567890000';
  //for testing only

  const { data, mutate, error, isLoading } = useSWR(
    username ? `/api/posts?owner=${encodeURIComponent(username)}` : null,
    fetcher
  );

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
          Web3.0 DID Dashboard
        </h1>

        <div className="flex flex-wrap">
          <div className="">
            <div className="">
              <div className="text-apple-black">
                {isLoading ? (
                  <Loading1 />
                ) : (
                  <>
                    <div className="pb-4">
                      <h2 className="text-2xl text-apple-black font-light">
                        The DID owned by wallet address
                      </h2>
                      <h2 className="text-2xl text-apple-black font-light">
                        {username}
                      </h2>
                    </div>

                    <div className="py-10">
                      {data?.map((post: any) => (
                        <div className="flex pb-4" key={post._id}>
                          <div className="flex">
                            <h2 className="text-lg text-apple-black font-light">
                              DID: {post.domain}
                            </h2>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
