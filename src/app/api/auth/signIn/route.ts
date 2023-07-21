import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { address } = await request.json();
  cookies().set("address", address);

  return NextResponse.json({
    success: true,
  });
}
