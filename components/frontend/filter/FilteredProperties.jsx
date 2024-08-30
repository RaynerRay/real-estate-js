import React from "react";
import Paginate from "./Paginate";
import PropertyCard from "../PropertyCard";
import Loading from './../../../app/loading';

const FilteredProperties = ({
  properties,
  propertyCount,
  isSearch,
  isLoading,
}) => {
  const pageSize = 3;
  const totalPages = Math.ceil(propertyCount / pageSize);

  if (isLoading) {
    return <Loading />; // Display your Loading component when isLoading is true
  }

  if (!isLoading && properties.length === 0) {
    return (
      <div className="text-center py-16">
        <h2 className="text-xl font-semibold text-gray-700">
          No properties available in this category yet.
        </h2>
        <p className="text-gray-500 mt-2">
          Please try a different category or check back later.
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {properties.map((property) => (
          <PropertyCard
            key={property.id}
            propertyId={property.id}
            title={property.title}
            rentPrice={property.rentPrice}
            salePrice={property.salePrice}
            address={property.address}
            beds={property.beds}
            baths={property.baths}
            size={property.size}
            slug={property.slug}
            tags={property.tags}
            imageUrl={property.imageUrl}
          />
        ))}
      </div>
      {propertyCount > 16 && (
        <div className="p-8 mx-auto flex items-center justify-center w-full">
          <Paginate totalPages={totalPages} isSearch={isSearch} />
        </div>
      )}
    </div>
  );
};

export default FilteredProperties;