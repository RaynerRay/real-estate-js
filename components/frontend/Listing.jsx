import React from 'react';
import { Heart, MapPin, Bed, Bath, Move } from 'lucide-react';
import Image from 'next/image';

const Listing = () => {
  const listings = [
    {
      title: 'Luxury Mansion',
      price: '$815,000',
      location: '148-37 88th Ave, Jamaica, NY 11435',
      beds: 4,
      baths: 3,
      size: '2660 Sqft',
      tags: ['FOR SELL'],
      image: '/house1.jpg',
    },
    {
      title: 'Home in Merrick Way',
      price: '$815,000',
      location: '148-37 88th Ave, Jamaica, NY 11435',
      beds: 4,
      baths: 3,
      size: '2660 Sqft',
      tags: ['FOR RENT', 'FEATURED'],
      image: '/house3.jpg',
    },
    {
      title: 'Villa in Coral Gables',
      price: '$815,000',
      location: '148-37 88th Ave, Jamaica, NY 11435',
      beds: 4,
      baths: 3,
      size: '2660 Sqft',
      tags: ['FOR SELL'],
      image: '/house2.jpg',
    },
    {
      title: 'Modern House in Greenville',
      price: '$815,000',
      location: '148-37 88th Ave, Jamaica, NY 11435',
      beds: 4,
      baths: 3,
      size: '2660 Sqft',
      tags: ['FOR SELL'],
      image: '/house2.jpg',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {listings.map((listing, index) => (
        <div
          key={index}
          className="box-dream border p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <div className="relative">
            <div className="absolute top-2 left-2 space-x-2">
              {listing.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-gray-200 text-gray-700 px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="absolute top-2 right-2">
              <Heart className="text-red-500 w-6 h-6" />
            </div>
            <div className="h-64 bg-gray-300">
            <Image height={500} width={500} src={listing.image} alt=""  className="w-full h-64 object-cover" />
            </div>
          </div>
          <div className="content mt-4">
            <div className="head flex justify-between items-center">
              <div className="title font-semibold text-lg text-gray-700">
                {listing.title}
              </div>
              <div className="price text-lg font-semibold text-indigo-600">
                {listing.price}
              </div>
            </div>
            <div className="location mt-2 flex items-center text-gray-500">
              <MapPin className="w-4 h-4 mr-2" />
              <p>{listing.location}</p>
            </div>
            <div className="icon-box mt-4 flex justify-between text-gray-500">
              <div className="item flex items-center">
                <Bed className="w-4 h-4 mr-2" />
                <p>{listing.beds} Beds</p>
              </div>
              <div className="item flex items-center">
                <Bath className="w-4 h-4 mr-2" />
                <p>{listing.baths} Baths</p>
              </div>
              <div className="item flex items-center">
                <Move className="w-4 h-4 mr-2" />
                <p>{listing.size}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Listing;
