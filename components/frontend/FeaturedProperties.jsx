'use client'

import React from 'react';
import PropertyCard from './PropertyCard';

const FeaturedProperties = ({ properties }) => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container max-w-6xl mx-auto px-4 py-2">
        <h1 className="font-heading text-xl sm:text-2xl my-8 text-center">Featured Properties</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {properties.properties?.slice(0, 3).map((property, index) => (
            <PropertyCard key={index} {...property} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;