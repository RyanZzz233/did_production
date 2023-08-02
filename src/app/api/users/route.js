import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Post from "@/models/Post";

export const GET = async (request) => {
  const url = new URL(request.url);

  const domain = url.searchParams.get("domain");

  const query = domain
  ? {
      domain: { $regex: new RegExp(domain, "i") },
    }
  : {};

  try {
    await connect();
    console.log(`Searching for posts with domain: ${domain}`);
    const posts = await Post.find(query);
    //console.log(`Found posts: ${JSON.stringify(posts)}`);
    //await db.connection.close();

    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (err) {
    //console.error(err);
    return new NextResponse("Database Error", { status: 500 });
  }
};
