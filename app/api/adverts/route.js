import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, link, imageUrl} = await request.json();
    const newAdvert = await db.advert.create({
      data: {
        title,
        link,
        imageUrl
      },
    });
    console.log(newAdvert);
    return NextResponse.json(newAdvert);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error: "Failed to create Advert",
      },
      { status: 500 }
    );
  }
}
export async function GET(request) {
  try {
    const adverts = await db.advert.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(adverts);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to Fetch Advert",
        error,
      },
      { status: 500 }
    );
  }
}
