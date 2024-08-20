import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request, { params: { slug } }) {
  try {
    const company = await db.company.findUnique({
      where: {
        slug,
      },
    });
    return NextResponse.json(company);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to Fetch Company",
        error,
      },
      { status: 500 }
    );
  }
}
