import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request, { params: { id } }) {
  try {
    const property = await db.property.findUnique({
      where: {
        id,
      },
    });
    return NextResponse.json(property);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to Fetch property",
        error,
      },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params: { id } }) {
  try {
    const existingProperty = await db.property.findUnique({
      where: {
        id,
      },
    });
    if (!existingProperty) {
      return NextResponse.json(
        {
          data: null,
          message: "Property Not Found",
        },
        { status: 404 }
      );
    }
    const deletedProperty = await db.property.delete({
      where: {
        id,
      },
    });
    return NextResponse.json(deletedProperty);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to Delete Property",
        error,
      },
      { status: 500 }
    );
  }
}

export async function PUT(request, { params: { id } }) {
  try {
    const {
      title,
      slug,
      imageUrl,
      propertyImages,
      description,
      contact,
      propertyCode,
      listingType,
      rentPrice,
      salePrice,
      size,
      beds,
      baths,
      tags,
      water,
      electricity,
      sewerage,
      kitchen,
      bathroom,
      security,
      parking,
      heating,
      address,
      latitude,
      longitude,
      cityId,
      townId,
      companyId,
      categoryId,
      subCategoryId,
      agentId,
    } = await request.json();
    const existingProperty = await db.property.findUnique({
      where: {
        id,
      },
    });
    if (!existingProperty) {
      return NextResponse.json(
        {
          data: null,
          message: `Not Found`,
        },
        { status: 404 }
      );
    }
    const updatedProperty = await db.property.update({
      where: { id },
      data: {
        title,
        slug,
        imageUrl,
        propertyImages,
        description,
        contact,
        propertyCode,
        listingType,
        rentPrice: parseFloat(rentPrice),
        salePrice: parseFloat(salePrice),
        imageUrl: propertyImages[0],
        size: parseFloat(size),
        beds: parseInt(beds),
        baths: parseInt(baths),
        tags,
        water,
        electricity,
        sewerage,
        kitchen,
        bathroom,
        security,
        parking,
        heating,
        address,
        latitude: parseFloat(latitude),
        longitude: parseFloat(longitude),
        cityId,
        townId,
        companyId,
        categoryId,
        subCategoryId,
        userId: agentId,
      },
    });
    return NextResponse.json(updatedProperty);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to Update Property",
        error,
      },
      { status: 500 }
    );
  }
}
