import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, slug, categoryId } = await request.json();

    const existingSubCategory = await db.subCategory.findUnique({
      where: {
        slug,
      },
    });

    if (existingSubCategory) {
      return NextResponse.json(
        {
          data: null,
          message: `SubCategory (${title}) already exists in the Database`,
        },
        { status: 409 }
      );
    }

    const newSubCategory = await db.subCategory.create({
      data: { title, slug, categoryId },
    });

    return NextResponse.json(newSubCategory);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to create SubCategory",
        error,
      },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    const subCategories = await db.subCategory.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        category: {
          select: {
            id: true,
            title: true,
          },
        },
      },
    });

    return NextResponse.json(subCategories);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to fetch SubCategories",
        error,
      },
      { status: 500 }
    );
  }
}






