import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, slug, email, phone, phone2, description, imageUrl,address, address2, website } =
      await request.json();

    const existingCompany = await db.company.findUnique({
      where: {
        slug,
      },
    });
    if (existingCompany) {
      return NextResponse.json(
        {
          data: null,
          message: `Company ( ${title})  already exists in the Database`,
        },
        { status: 409 }
      );
    }
    const newCompany = await db.company.create({
      data: { title, slug, email, phone, phone2,  description, imageUrl, address, address2, website },
    });
    return NextResponse.json(newCompany);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to create Company",
        error,
      },
      { status: 500 }
    );
  }
}
export async function GET(request) {
  try {
    const companies = await db.company.findMany({
      orderBy: {
        createdAt: "desc",
      },
      // include: {
      //   properties: true,
      // },
    });
    return NextResponse.json(companies);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to Fetch company",
        error,
      },
      { status: 500 }
    );
  }
}
