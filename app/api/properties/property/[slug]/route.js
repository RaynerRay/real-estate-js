import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request, { params: { slug } }) {
  try {
    const property = await db.property.findUnique({
      where: {
        slug,
      },
    });
    return NextResponse.json(property);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to Fetch Property",
        error,
      },
      { status: 500 }
    );
  }
}
