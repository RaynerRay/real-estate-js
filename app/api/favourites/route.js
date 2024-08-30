import db from "@/lib/db";
import { authOptions } from '@/lib/authOptions';
import { getServerSession } from 'next-auth';
import { NextResponse } from "next/server";

// Add a property to favourites
export async function POST(request) {
  try {
    const { userId, propertyId } = await request.json();

    const existingFavourite = await db.favourite.findFirst({
      where: { userId, propertyId },
    });

    if (existingFavourite) {
      return NextResponse.json(
        { message: "Property is already in favourites" },
        { status: 409 }
      );
    }

    const favourite = await db.favourite.create({
      data: { userId, propertyId },
    });

    return NextResponse.json(favourite);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Failed to add property to favourites", error },
      { status: 500 }
    );
  }
}

// Remove a property from favourites
export async function DELETE(request) {
  try {
    const { userId, propertyId } = await request.json();

    const favourite = await db.favourite.deleteMany({
      where: { userId, propertyId },
    });

    return NextResponse.json(
      { message: "Property removed from favourites", favourite }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Failed to remove property from favourites", error },
      { status: 500 }
    );
  }
}

// Fetch all favourite properties of a user or users who favourited a property
export async function GET(request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ message: "Not authenticated" }, { status: 401 });
    }

    const userId = session.user.id;

    const favourites = await db.favourite.findMany({
      where: {
        userId: userId,
      },
      include: {
        properties: true, // Assuming the relation is named 'property' in your schema
      },
    });

    return NextResponse.json(favourites);
  } catch (error) {
    console.error('Error fetching favourites:', error);
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
  }
}

