import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request, { params: { id } }) {
  try {
    const advert = await db.advert.findUnique({
      where: {
        id,
      },
    });
    return NextResponse.json(advert);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to Fetch advert",
        error,
      },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params: { id } }) {
  try {
    const existingAdvert = await db.advert.findUnique({
      where: {
        id,
      },
    });
    if (!existingAdvert) {
      return NextResponse.json(
        {
          data: null,
          message: "Advert Not Found",
        },
        { status: 404 }
      );
    }
    const deletedAdvert = await db.advert.delete({
      where: {
        id,
      },
    });
    return NextResponse.json(deletedAdvert);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to Delete Advert",
        error,
      },
      { status: 500 }
    );
  }
}

export async function PUT(request, { params: { id } }) {
  try {
    const { title, link, imageUrl} = await request.json();
    const existingAdvert = await db.advert.findUnique({
      where: {
        id,
      },
    });
    if (!existingAdvert) {
      return NextResponse.json(
        {
          data: null,
          message: `Not Found`,
        },
        { status: 404 }
      );
    }
    const updatedAdvert = await db.advert.update({
      where: { id },
      data: {
        title,
        link,
        imageUrl,
    
      },
    });
    return NextResponse.json(updatedAdvert);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to Update Advert",
        error,
      },
      { status: 500 }
    );
  }
}
