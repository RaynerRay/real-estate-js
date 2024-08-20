import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const {
      title,
      slug,
      category,
      imageUrl,
      isActive,
      description,
      content,
    } = await request.json();
    //Check if this training already exists
    const existingBlog = await db.blog.findUnique({
      where: {
        slug,
      },
    });
    if (existingBlog) {
      return NextResponse.json(
        {
          data: null,
          message: `Blog ( ${title})  already exists in the Database`,
        },
        { status: 409 }
      );
    }
    const newBlog = await db.blog.create({
      data: {
        title,
        slug,
        category,
        imageUrl,
        description,
        isActive,
        content,
      },
    });
    console.log(newBlog);
    return NextResponse.json(newBlog);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to create Blog",
        error,
      },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    const blogs = await db.blog.findMany({
      orderBy: {
        createdAt: "desc",
      },
      
    });
    return NextResponse.json(blogs);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to Fetch Blogs",
        error,
      },
      { status: 500 }
    );
  }
}
