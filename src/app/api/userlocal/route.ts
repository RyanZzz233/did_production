import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  // Your static data
  const data = [
    { owner: "0xf23bbC154196AaeD24a7C6337dbbe5005Cd8f24d", domain: "ryanzhou/tst/kowloon/hk" },
    { owner: "0xg34faC154196AaeD24a7C6337dbbe5005Cd8f24e", domain: "tom/clb/newterritories/hk" },
    { owner: "0xh45gbC154196AaeD24a7C6337dbbe5005Cd8f24f", domain: "ace/central/hkisland/hk" },
    { owner: "0xa23gbC154196AaeD24a7C6337dbbe5005Cd8f24g", domain: "moody/mongkok/kowloon/hk" },
    { owner: "0xb34hbC154196AaeD24a7C6337dbbe5005Cd8f24h", domain: "apple/causewaybay/hkisland/hk" },
    { owner: "0xc45ibC154196AaeD24a7C6337dbbe5005Cd8f24i", domain: "candy/shamshuipo/kowloon/hk" },
    { owner: "0xd56jbC154196AaeD24a7C6337dbbe5005Cd8f24j", domain: "dave/wanchai/hkisland/hk" },
    { owner: "0xe67kbC154196AaeD24a7C6337dbbe5005Cd8f24k", domain: "tim/kwuntong/kowloon/hk" },
    { owner: "0xf78lbC154196AaeD24a7C6337dbbe5005Cd8f24l", domain: "wingwong/aberdeen/hkisland/hk" },
    { owner: "0xg89mC154196AaeD24a7C6337dbbe5005Cd8f24m", domain: "alice/tsuenwan/newterritories/hk" },
    { owner: "0xh90nC154196AaeD24a7C6337dbbe5005Cd8f24n", domain: "christy/taikoo/hkisland/hk" },
    { owner: "0xa01oC154196AaeD24a7C6337dbbe5005Cd8f24o", domain: "manner/yuenlong/newterritories/hk" },
    { owner: "0xb12pC154196AaeD24a7C6337dbbe5005Cd8f24p", domain: "xi/tsimshatsui/kowloon/hk" },
    { owner: "0xc23qC154196AaeD24a7C6337dbbe5005Cd8f24q", domain: "huawang/shatin/newterritories/hk" },
    { owner: "0xd34rC154196AaeD24a7C6337dbbe5005Cd8f24r", domain: "xiaoming/cheungchau/islands/hk" },
    { owner: "0xe45sC154196AaeD24a7C6337dbbe5005Cd8f24s", domain: "lewis/tuenmun/newterritories/hk" },
    { owner: "0xf56tC154196AaeD24a7C6337dbbe5005Cd8f24t", domain: "fernando/pokfulam/hkisland/hk" },
    { owner: "0xg67uC154196AaeD24a7C6337dbbe5005Cd8f24u", domain: "jimmy/sheungwan/hkisland/hk" },
    { owner: "0xh78vC154196AaeD24a7C6337dbbe5005Cd8f24v", domain: "lando/tungchung/islands/hk" },
    { owner: "0xa89wC154196AaeD24a7C6337dbbe5005Cd8f24w", domain: "gasly/maonshan/newterritories/hk" },
  ];

  const url = new URL(request.nextUrl);
  const owner = url.searchParams.get("owner");

  // Filter the data based on the 'owner' query parameter
  const filteredData = owner
    ? data.filter((item) => item.owner.toLowerCase() === owner.toLowerCase())
    : data;

  console.error('Filtered Data:', filteredData);

  return NextResponse.json(filteredData);
}