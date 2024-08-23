import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request, { params: { id } }) {
  try {
    const company = await db.company.findUnique({
      where: {
        id,
      },
      include: {
        properties: true,
      },
    });
    return NextResponse.json(company);
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

export async function DELETE(request, { params: { id } }) {
  try {
    const existingCompany = await db.company.findUnique({
      where: {
        id,
      },
    });
    if (!existingCompany) {
      return NextResponse.json(
        {
          data: null,
          message: "Company Not Found",
        },
        { status: 404 }
      );
    }
    const deletedCompany = await db.company.delete({
      where: {
        id,
      },
    });
    return NextResponse.json(deletedCompany);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to Delete Company",
        error,
      },
      { status: 500 }
    );
  }
}

export async function PUT(request, { params: { id } }) {
  try {
    const {
      title, slug, email, phone, description, imageUrl,address
    } = await request.json();
    const existingCompany = await db.company.findUnique({
      where: {
        id,
      },
    });
    if (!existingCompany) {
      return NextResponse.json(
        {
          data: null,
          message: `Not Found`,
        },
        { status: 404 }
      );
    }
    const updatedCompany = await db.company.update({
      where: { id },
      data: {
        title, slug, email, phone, description, imageUrl,address
      },
    });
    return NextResponse.json(updatedCompany);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to Update Company",
        error,
      },
      { status: 500 }
    );
  }
}
