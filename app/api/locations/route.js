import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const searchTerm = searchParams.get("q") || "";

    // Fetch both cities and towns that match the search term
    const cities = await db.city.findMany({
      where: {
        title: {
          contains: searchTerm,
          mode: "insensitive", // Case-insensitive search
        },
      },
      include: {
        towns: true,
       
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    const towns = await db.town.findMany({
      where: {
        title: {
          contains: searchTerm,
          mode: "insensitive",
        },
      },
      include: {
        cities: true,
       
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json({ cities, towns });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        message: "Failed to Fetch Cities or Towns",
        error,
      },
      { status: 500 }
    );
  }
}
