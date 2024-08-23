import Image from "next/image";
import Link from "next/link";
import React from "react";

const FeaturedCategories = () => {
  return (
    <div className="max-w-6xl mx-auto my-8 py-4">
          <h1 className="font-heading text-xl my-8 text-center">Popular Categories</h1>
    
    <div className="m-6 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 py-8">
  
      {featured.map((items, index) => (
        <Link
          className="shadow-lg rounded-lg text-center p-6 cursor-pointer"
          key={index}
          href={`/search?category=${items.catLink}`}
        >
          <Image
          height={500}
          width={500}
            className="w-16 h-16 mx-auto"
            src={items.cover}
            alt={items.name}
          />
          <h4 className="mt-4 font-semibold">{items.name}</h4>
          {/* <label className="text-gray-500">{items.total}</label> */}
        </Link>
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
    catLink: "66a3548734f84ed6ea5c8b5c",
  },
  {
    cover: "/featured1.png",
    name: "Stands & Residential Land",
    total: "155 Property",
    catLink: "66ac9c7ebf8c9a3cbd124a17",
  },
  {
    cover: "/featured4.png",
    name: "Shops & Retail Property",
    total: "300 Property",
    catLink: "66ac9d9dbf8c9a3cbd124a1a",
  },
  {
    cover: "/featured3.png",
    name: "Offices & Studios",
    total: "80 Property",
    catLink: "66ac9dc1bf8c9a3cbd124a1b",
  },
  {
    cover: "/featured3.png",
    name: "Flats & Apartments",
    total: "80 Property",
    catLink: "66a662d9b2641dc363030584",
  },
  {
    cover: "/featured1.png",
    name: "Hotels & Guest Houses",
    total: "80 Property",
    catLink: "66ac9bedbf8c9a3cbd124a16",
  },
];
