
import React from 'react';
import PropertyCard from '../PropertyCard';


const LatestListings = ({properties}) => {
  return (
    <div className="w-full bg-white p-4">
        {/* <h3 className="mb-8 text-2xl mt-4 font-normal font-heading text-blue-900">Latest Listings</h3> */}
        <div className="title font-semibold text-2xl mt-4 mb-8 text-gray-900">Latest Listings</div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 ">
        {properties?.map((property) => (
          <PropertyCard
            key={property.id}
            title={property.title}
            salePrice={property.salePrice}
            rentPrice={property.rentPrice}
            address={property.address}
            beds={property.beds}
            baths={property.baths}
            size={property.size}
            tags={property.tags}
            imageUrl={property.imageUrl}
            slug={property.slug}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestListings;
