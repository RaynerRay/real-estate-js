import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const filters = Object.fromEntries(searchParams.entries());

    const where = {};
    const orderBy = {};

    // Handle location (city or town)
    if (filters.location) {
      where.OR = [
        { city: { title: { contains: filters.location, mode: 'insensitive' } } },
        { town: { title: { contains: filters.location, mode: 'insensitive' } } }
      ];
    }

    // Handle offer type (sale or rent)
    if (filters.offer) {
      where.listingType = filters.offer;
    }

    // Handle property type
    if (filters.type) {
      where.type = filters.type;
    }

    // Handle price range
    if (filters.minPrice || filters.maxPrice) {
      where.OR = [
        {
          rentPrice: {
            gte: filters.minPrice ? parseFloat(filters.minPrice) : undefined,
            lte: filters.maxPrice ? parseFloat(filters.maxPrice) : undefined,
          }
        },
        {
          salePrice: {
            gte: filters.minPrice ? parseFloat(filters.minPrice) : undefined,
            lte: filters.maxPrice ? parseFloat(filters.maxPrice) : undefined,
          }
        }
      ];
    }

   // Handle beds (minimum and maximum)
if (filters.minBeds) {
  where.beds = { ...where.beds, gte: parseInt(filters.minBeds) };
}
if (filters.maxBeds) {
  where.beds = { ...where.beds, lte: parseInt(filters.maxBeds) };
}
    if (filters.baths) {
      where.baths = { gte: parseInt(filters.baths) };
    }

    // Handle category and subcategory
    if (filters.category) {
      where.categoryId = filters.category;
    }
    if (filters.subCategory) {
      where.subCategoryId = filters.subCategory;
    }

    // Handle sorting
    if (filters.sort) {
      const [field, order] = filters.sort.split('_');
      orderBy[field] = order.toLowerCase();
    } else {
      orderBy.createdAt = 'desc'; // Default sorting
    }

    // Pagination
    const page = parseInt(filters.page) || 1;
    const limit = parseInt(filters.limit) || 10;
    const skip = (page - 1) * limit;

    // Fetch all properties if no filters are applied
    const [properties, totalCount] = await Promise.all([
      db.property.findMany({
        where: Object.keys(where).length ? where : undefined, // Check if where is empty
        include: {
          city: true,
          town: true,
          category: true,
          subCategory: true,
          user: {
            select: {
              id: true,
              name: true,
            },
          },
        },
        orderBy,
        skip,
        take: limit,
      }),
      db.property.count({ where: Object.keys(where).length ? where : undefined }) // Only count with where if filters are applied
    ]);

    return NextResponse.json({
      properties,
      totalCount,
      currentPage: page,
      totalPages: Math.ceil(totalCount / limit),
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        message: "Failed to fetch properties",
        error,
      },
      { status: 500 }
    );
  }
}


// ... (POST function remains the same)
// POST request to create a new property


export async function POST(request) {
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
        slug,
      },
    });
    if (existingProperty) {
      return NextResponse.json(
        {
          data: null,
          message: `City ( ${title})  already exists in the Database`,
        },
        { status: 409 }
      );
    }
    const newProperty = await db.property.create({
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
    return NextResponse.json(newProperty);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to create City",
        error,
      },
      { status: 500 }
    );
  }
}
