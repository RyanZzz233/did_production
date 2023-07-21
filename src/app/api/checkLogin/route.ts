import { NextResponse } from "next/server";
import React from "react";
import { cookies } from "next/headers";

export async function GET(req: Request) {
  const address = cookies().get("address");
  const isLoggedIn = (address !== undefined);
    
  return NextResponse.json({
      isLoggedIn,
  });
}
