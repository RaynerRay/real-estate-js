'use client'
import Agents from "@/components/frontend/Agents";
import Filters from "@/components/frontend/Filters";
import PropertyCard from "@/components/frontend/PropertyCard";
import SideFilters from "@/components/frontend/SideFilters";
import Header from "@/components/uiItems/Header";
import SearchResultsHeader from "@/components/uiItems/SearchResultsHeader";
import { Grid, List } from "lucide-react";
import React, { useEffect, useState } from "react";

const page = () => {
    const [isScrolled, setIsScrolled] = useState(false);

const handleScroll = () => {
  setIsScrolled(window.scrollY > 0);
};

useEffect(() => {
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

  // const properties = [
  //     {
  //       image: '/house3.jpg',
  //       tag: 'For Sale',
  //       price: '$945,679',
  //       title: 'Villa in Los Angeles',
  //       location: 'Upper Road 3411, no.34 CA',
  //       description: 'Integer nec bibendum lacus. Suspendisse dictum enim sit amet libero malesuada.',
  //       newTag: true,
  //       bathroom: '2',
  //       garage: '2',
  //       space: '120 sq ft'
  //     },
  //     {
  //       image: '/house1.jpg',
  //       tag: 'For Sale',
  //       price: '$945,679',
  //       title: 'Villa in Los Angeles',
  //       location: 'Upper Road 3411, no.34 CA',
  //       description: 'Integer nec bibendum lacus. Suspendisse dictum enim sit amet libero malesuada.',
  //       newTag: true,
  //       bathroom: '2',
  //       garage: '2',
  //       space: '120 sq ft'
  //     },

  //     {
  //       image: '/house2.jpg',
  //       tag: 'For Sale',
  //       price: '$945,679',
  //       title: 'Villa in Los Angeles',
  //       location: 'Upper Road 3411, no.34 CA',
  //       description: 'Integer nec bibendum lacus. Suspendisse dictum enim sit amet libero malesuada.',
  //       newTag: true,
  //       bathroom: '2',
  //       garage: '2',
  //       space: '120 sq ft'
  //     },
  //     {
  //         image: '/house3.jpg',
  //         tag: 'For Sale',
  //         price: '$945,679',
  //         title: 'Villa in Los Angeles',
  //         location: 'Upper Road 3411, no.34 CA',
  //         description: 'Integer nec bibendum lacus. Suspendisse dictum enim sit amet libero malesuada.',
  //         newTag: true,
  //         bathroom: '2',
  //         garage: '2',
  //         space: '120 sq ft'
  //       },
  //     // Add more properties here
  //   ];
  const listings = [
    {
      title: "Luxury Mansion",
      price: "$815,000",
      location: "148-37 88th Ave, Jamaica, NY 11435",
      beds: 4,
      baths: 3,
      size: "2660 Sqft",
      tags: ["FOR SELL"],
      image: "/house1.jpg",
    },
    {
      title: "Home in Merrick Way",
      price: "$815,000",
      location: "148-37 88th Ave, Jamaica, NY 11435",
      beds: 4,
      baths: 3,
      size: "2660 Sqft",
      tags: ["FOR RENT", "FEATURED"],
      image: "/house3.jpg",
    },
    {
      title: "Villa in Coral Gables",
      price: "$815,000",
      location: "148-37 88th Ave, Jamaica, NY 11435",
      beds: 4,
      baths: 3,
      size: "2660 Sqft",
      tags: ["FOR SELL"],
      image: "/house2.jpg",
    },
    {
      title: "Modern House in Greenville",
      price: "$815,000",
      location: "148-37 88th Ave, Jamaica, NY 11435",
      beds: 4,
      baths: 3,
      size: "2660 Sqft",
      tags: ["FOR SELL"],
      image: "/house2.jpg",
    },
  ];
  return (
    <div className="">
        <div className={`${isScrolled ? 'fixed top-0 left-0 w-full z-50' : ''}`}>
  <Filters />
</div>

    <div className=" px-4 my-8">

        <SearchResultsHeader searchTerm={"Properties"} resultsCount={"420"} />
    <div className="flex flex-wrap -mx-4">
    <div className="w-full lg:w-1/4 px-4">
      <SideFilters />
      <Agents />
    </div>
    <div className="w-full lg:w-3/4 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {listings.map((listing, index) => (
          <PropertyCard
            key={index}
            title={listing.title}
            price={listing.price}
            location={listing.location}
            beds={listing.beds}
            baths={listing.baths}
            size={listing.size}
            tags={listing.tags}
            image={listing.image}
          />
        ))}
      </div>
    </div>
  </div>
  </div>
  </div>
  );
};

export default page;




