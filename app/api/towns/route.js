import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, slug, cityId } =
      await request.json();

    const existingTown = await db.town.findUnique({
      where: {
        slug,
      },
    });
    if (existingTown) {
      return NextResponse.json(
        {
          data: null,
          message: `Town ( ${title})  already exists in the Database`,
        },
        { status: 409 }
      );
    }
    const newTown = await db.town.create({
      data: { title, slug, cityId },
    });
    return NextResponse.json(newTown);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to create town",
        error,
      },
      { status: 500 }
    );
  }
}
export async function GET(request) {
  try {
    const towns = await db.town.findMany({
      orderBy: {
        createdAt: "desc",
      },
      // include: {
      //   properties: true,
      // },
    });
    return NextResponse.json(towns);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to Fetch Town",
        error,
      },
      { status: 500 }
    );
  }
}
