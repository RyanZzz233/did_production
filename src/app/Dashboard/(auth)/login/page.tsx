import React from "react";
import { cookies } from "next/headers";
import SignInBtn from "./signInBtn";
import SignOutBtn from "./signoutBtn";
import Image from "next/image";

function checkIsSignedIn(): boolean {
  const address = cookies().get("address");

  return address !== undefined;
}

const Login = () => {
  const isSignedIn = checkIsSignedIn();

  return (
    <div className="grid grid-rows-2 gap-4 items-center pt-10">
      {/* <div>
        <div><p>Accounts: {accounts.join(", ")}</p></div>
      </div> */}
      <div className="flex justify-center">
        <img
            src="https://pub-3890daa6d3af4fe09ab0c284ce757dd9.r2.dev/metamask-logo.webp"
            alt="MetaMaskLogo"
            className=""
            width={100}
            height={100}
          />
      </div>
      <div className="flex justify-center">
        {!isSignedIn && <SignInBtn />}
        {isSignedIn && <SignOutBtn />}
      </div>
    </div>
  );
};

export default Login;
