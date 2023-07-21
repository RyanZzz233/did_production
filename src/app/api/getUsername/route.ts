import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const address = cookies().get("address");
  const username = address ? address.value : "";
  //console.log(username,888)
  return NextResponse.json({
    username,
  });
}
