'use client'
import React from 'react';
import PropertyCard from './PropertyCard';

const FeaturedProperties = ({properties}) => {
  // const properties = [
  //   {
  //     image: '/house3.jpg',
  //     tag: 'For Sale',
  //     price: '$945,679',
  //     title: 'Villa in Los Angeles',
  //     location: 'Upper Road 3411, no.34 CA',
  //     description: 'Integer nec bibendum lacus. Suspendisse dictum enim sit amet libero malesuada.',
  //     newTag: true,
  //     bathroom: '2',
  //     garage: '2',
  //     space: '120 sq ft'
  //   },
  //   {
  //     image: '/house1.jpg',
  //     tag: 'For Sale',
  //     price: '$945,679',
  //     title: 'Villa in Los Angeles',
  //     location: 'Upper Road 3411, no.34 CA',
  //     description: 'Integer nec bibendum lacus. Suspendisse dictum enim sit amet libero malesuada.',
  //     newTag: true,
  //     bathroom: '2',
  //     garage: '2',
  //     space: '120 sq ft'
  //   },
  //   {
  //     image: '/house2.jpg',
  //     tag: 'For Sale',
  //     price: '$945,679',
  //     title: 'Villa in Los Angeles',
  //     location: 'Upper Road 3411, no.34 CA',
  //     description: 'Integer nec bibendum lacus. Suspendisse dictum enim sit amet libero malesuada.',
  //     newTag: true,
  //     bathroom: '2',
  //     garage: '2',
  //     space: '120 sq ft'
  //   },
  //   // Add more properties here
  // ];

  return (
    <div className="bg-gray-50 py-16">
    <div className="container max-w-6xl mx-auto px-4 py-2">
       {/* <h1 class="font-heading text-2xl text-gray-900 font-bold mb-8">Featured Properties</h1> */}
       <h1 className="font-heading text-xl sm:text-2xl my-8  text-center">Featured Properties</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        {properties.slice(0,3).map((property, index) => (
          <PropertyCard key={index} {...property} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default FeaturedProperties;
