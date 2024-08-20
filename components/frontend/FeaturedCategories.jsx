import Image from "next/image";
import React from "react";

const FeaturedCategories = () => {
  return (
    <div className="max-w-6xl mx-auto my-8 py-4">
          <h1 className="font-heading text-lg sm:text-2xl my-8 text-center">Popular Categories</h1>
    
    <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 py-8">
  
      {featured.map((items, index) => (
        <div
          className="shadow-lg rounded-lg text-center p-6 cursor-pointer"
          key={index}
        >
          <Image
          height={500}
          width={500}
            className="w-16 h-16 mx-auto"
            src={items.cover}
            alt={items.name}
          />
          <h4 className="mt-4 font-semibold">{items.name}</h4>
          <label className="text-gray-500">{items.total}</label>
        </div>
      ))}
    </div>
    </div>
  );
};

export default FeaturedCategories;

export const featured = [
  {
    cover: "/featured2.png",
    name: "Houses",
    total: "122 Property",
    slug: "houses",
  },
  {
    cover: "/featured1.png",
    name: "Stands & Resenditial Lands",
    total: "155 Property",
    slug: "stands-residential-land",
  },
  {
    cover: "/featured4.png",
    name: "Shops & Retail Property",
    total: "300 Property",
    slug: "shops-retail-property",
  },
  {
    cover: "/featured3.png",
    name: "Offices & Studios",
    total: "80 Property",
    slug: "offices",
  },
  {
    cover: "/featured5.png",
    name: "Farms & Agricultural land",
    total: "80 Property",
    slug: "farms-agricultural-land",
  },
];
