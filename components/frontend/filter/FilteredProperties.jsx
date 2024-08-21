import React from "react";
import Paginate from "./Paginate";
import PropertyCard from "../PropertyCard";

const FilteredProperties = ({
  properties,
  propertyCount,
  isSearch,
}) => {
  const pageSize = 3;
  const totalPages = Math.ceil(propertyCount / pageSize);

  return (
    <div>
      {properties.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {properties.map((property) => (
              <PropertyCard
                key={property.id}
                title={property.title}
                price={property.price}
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
        </>
      ) : (
        <div className="text-center py-16">
          <h2 className="text-xl font-semibold text-gray-700">
            No properties available in this category yet.
          </h2>
          <p className="text-gray-500 mt-2">
            Please try a different category or check back later.
          </p>
        </div>
      )}
    </div>
  );
};

export default FilteredProperties;
