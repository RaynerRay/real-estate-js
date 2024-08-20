
import React from 'react';
import PropertyCard from '../PropertyCard';

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
const LatestListings = ({properties}) => {
  return (
    <div className="w-full bg-white p-4">
        {/* <h3 className="mb-8 text-2xl mt-4 font-normal font-heading text-blue-900">Latest Listings</h3> */}
        <div className="title font-semibold text-2xl mt-4 mb-8 text-blue-900">Latest Listings</div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 ">
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
  );
};

export default LatestListings;
