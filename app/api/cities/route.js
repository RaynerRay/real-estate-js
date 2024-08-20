import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, slug } =
      await request.json();

    const existingCity = await db.city.findUnique({
      where: {
        slug,
      },
    });
    if (existingCity) {
      return NextResponse.json(
        {
          data: null,
          message: `City ( ${title})  already exists in the Database`,
        },
        { status: 409 }
      );
    }
    const newCity = await db.city.create({
      data: { title, slug },
    });
    return NextResponse.json(newCity);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to create City",
        error,
      },
      { status: 500 }
    );
  }
}
export async function GET(request) {
  try {
    const cities = await db.city.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        towns: true,
      },
    });
    return NextResponse.json(cities);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to Fetch City",
        error,
      },
      { status: 500 }
    );
  }
}
