import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request, { params: { slug } }) {
  try {
    const blog = await db.blog.findUnique({
      where: {
        slug,
      },
    });
    return NextResponse.json(blog);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to Fetch blog",
        error,
      },
      { status: 500 }
    );
  }
}
