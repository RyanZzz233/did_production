import Button1 from "@/components/button/Button1";
import { Metadata } from "next";
import Head from 'next/head';

export const metadata: Metadata = {
  title: "Metopia",
};

export default function Home() {
  const a = "a";

  return (
    <div className="relative">
    <Head>
      <title>Metopia 233</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className={""}>
      <div className={"flex flex-col flex-1 gap-5"}>
        <h1
          className={
            "relative text-3xl md:text-5xl font-extrabold leading-tight tracking-tighter text-left pb-2 bg-gradient-to-r from-tw-purple via-tw-blue to-tw-blue text-transparent bg-clip-text"
          }
          style={{
            backgroundImage: "url('https://pub-3890daa6d3af4fe09ab0c284ce757dd9.r2.dev/Screen Shot 2023-07-11 at 5.27.25 PM.png')",
            backgroundSize: "cover",
            backgroundPosition: "left",
            height: "100px",
          }}
        >
          Unlock Your First Web3.0 Domain Name
        </h1>
        <div className={""}>
          <div className={"w-8/12"}>
            <p
              className={
                "text-lg font-light md:text-xl leading-relaxed text-apple-black"
              }
            >
              A domain name is crucial for online presence and getting a Web 3.0
              domain name offers benefits like complete control,
              interoperability, future-proofing, secure ownership of digital
              assets, easy integration with wallets, and using it as a digital
              identity.
            </p>
          </div>
        </div>
        <div className="flex justify-left pt-10">
          <Button1 url="Dashboard" text="Dashboard" />
        </div>
      </div>
    </div>
    </div>
  );
}
