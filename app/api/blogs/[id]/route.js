import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request, { params: { id } }) {
  try {
    const blog = await db.blog.findUnique({
      where: {
        id,
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

export async function DELETE(request, { params: { id } }) {
  try {
    const existingBlog = await db.blog.findUnique({
      where: {
        id,
      },
    });
    if (!existingBlog) {
      return NextResponse.json(
        {
          data: null,
          message: "Blog Not Found",
        },
        { status: 404 }
      );
    }
    const deletedBlog = await db.blog.delete({
      where: {
        id,
      },
    });
    return NextResponse.json(deletedBlog);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to Delete Blog",
        error,
      },
      { status: 500 }
    );
  }
}

export async function PUT(request, { params: { id } }) {
  try {
    const {
      title,
      slug,
      categoryId,
      imageUrl,
      description,
      content,
    } = await request.json();
    const existingBlog = await db.blog.findUnique({
      where: {
        id,
      },
    });
    if (!existingBlog) {
      return NextResponse.json(
        {
          data: null,
          message: `Not Found`,
        },
        { status: 404 }
      );
    }
    const updatedBlog = await db.blog.update({
      where: { id },
      data: {
        title,
        slug,
        categoryId,
        imageUrl,
        description,
        content,
      },
    });
    return NextResponse.json(updatedBlog);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to Update Blog",
        error,
      },
      { status: 500 }
    );
  }
}
