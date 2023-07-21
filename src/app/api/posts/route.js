import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Post from "@/models/Post";

export const GET = async (request) => {
  const url = new URL(request.url);

  const owner = url.searchParams.get("owner")

  const query = owner
  ? {
      owner: { $regex: new RegExp(`^${owner}$`, "i") },
    }
  : {};

  try {
    await connect();

    const posts = await Post.find(query);

    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (err) {
    //return new NextResponse("Database Error", { status: 500 });
    console.error(err);
    return new NextResponse(err.message, { status: 500 });
  }
};

