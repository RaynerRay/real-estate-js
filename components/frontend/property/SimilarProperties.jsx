"use client";
import React from "react";
import PropertyCard from "../PropertyCard";

const SimilarProperties = ({ properties }) => {
  return (
    <div className="bg-gray-50 py-8">
      <div className="container max-w-6xl mx-auto px-4 py-2">
        {/* <h1 className="font-semibold text-xl sm:text-2xl my-2  text-center">
          Similar Properties
        </h1> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {properties && properties.length > 0 ? (
            properties
              .slice(0, 4)
              .map((property, index) => (
                <PropertyCard key={index} {...property} />
              ))
          ) : (
            <h1 className="font-heading text-lg sm:text-xl my-8 text-center">
              No similar properties yet.
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default SimilarProperties;
